% Specifications that define WebIDL content (WHATWG perspective)
% Reffy
% May 11, 2018

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
[0511/020752.398918:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e480836b0c base::debug::StackTrace::StackTrace()
#1 0x55e48084f780 logging::LogMessage::~LogMessage()
#2 0x55e47f8df2b1 content::ZygoteHostImpl::Init()
#3 0x55e47f551c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e47f557a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e4846819a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e480571a00 content::RunNamedProcessTypeMain()
#7 0x55e4805722e8 content::ContentMainRunnerImpl::Run()
#8 0x55e48057bf24 service_manager::Main()
#9 0x55e480570f14 content::ContentMain()
#10 0x55e4846809b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e484680a42 headless::HeadlessBrowserMain()
#12 0x55e480578f9d headless::HeadlessShellMain()
#13 0x55e47ebd71ac ChromeMain
#14 0x7fe98492a2e1 __libc_start_main
#15 0x55e47ebd702a _start

Received signal 6
#0 0x55e480836b0c base::debug::StackTrace::StackTrace()
#1 0x55e480836671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe98a8870c0 <unknown>
#3 0x7fe98493cfff gsignal
#4 0x7fe98493e42a abort
#5 0x55e480835105 base::debug::BreakDebugger()
#6 0x55e48084fbca logging::LogMessage::~LogMessage()
#7 0x55e47f8df2b1 content::ZygoteHostImpl::Init()
#8 0x55e47f551c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e47f557a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e4846819a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e480571a00 content::RunNamedProcessTypeMain()
#12 0x55e4805722e8 content::ContentMainRunnerImpl::Run()
#13 0x55e48057bf24 service_manager::Main()
#14 0x55e480570f14 content::ContentMain()
#15 0x55e4846809b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e484680a42 headless::HeadlessBrowserMain()
#17 0x55e480578f9d headless::HeadlessShellMain()
#18 0x55e47ebd71ac ChromeMain
#19 0x7fe98492a2e1 __libc_start_main
#20 0x55e47ebd702a _start
  r8: 0000000000000000  r9: 00007ffecb0c3320 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffecb0c3a18 r13: 0000000000000161 r14: 00007ffecb0c3a20 r15: 00007ffecb0c35b9
  di: 0000000000000002  si: 00007ffecb0c3320  bp: 00007ffecb0c3560  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe98493cfff  sp: 00007ffecb0c3398
  ip: 00007fe98493cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020752.398918:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e480836b0c base::debug::StackTrace::StackTrace()
#1 0x55e48084f780 logging::LogMessage::~LogMessage()
#2 0x55e47f8df2b1 content::ZygoteHostImpl::Init()
#3 0x55e47f551c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e47f557a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e4846819a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e480571a00 content::RunNamedProcessTypeMain()
#7 0x55e4805722e8 content::ContentMainRunnerImpl::Run()
#8 0x55e48057bf24 service_manager::Main()
#9 0x55e480570f14 content::ContentMain()
#10 0x55e4846809b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e484680a42 headless::HeadlessBrowserMain()
#12 0x55e480578f9d headless::HeadlessShellMain()
#13 0x55e47ebd71ac ChromeMain
#14 0x7fe98492a2e1 __libc_start_main
#15 0x55e47ebd702a _start

Received signal 6
#0 0x55e480836b0c base::debug::StackTrace::StackTrace()
#1 0x55e480836671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe98a8870c0 <unknown>
#3 0x7fe98493cfff gsignal
#4 0x7fe98493e42a abort
#5 0x55e480835105 base::debug::BreakDebugger()
#6 0x55e48084fbca logging::LogMessage::~LogMessage()
#7 0x55e47f8df2b1 content::ZygoteHostImpl::Init()
#8 0x55e47f551c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e47f557a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e4846819a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e480571a00 content::RunNamedProcessTypeMain()
#12 0x55e4805722e8 content::ContentMainRunnerImpl::Run()
#13 0x55e48057bf24 service_manager::Main()
#14 0x55e480570f14 content::ContentMain()
#15 0x55e4846809b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e484680a42 headless::HeadlessBrowserMain()
#17 0x55e480578f9d headless::HeadlessShellMain()
#18 0x55e47ebd71ac ChromeMain
#19 0x7fe98492a2e1 __libc_start_main
#20 0x55e47ebd702a _start
  r8: 0000000000000000  r9: 00007ffecb0c3320 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffecb0c3a18 r13: 0000000000000161 r14: 00007ffecb0c3a20 r15: 00007ffecb0c35b9
  di: 0000000000000002  si: 00007ffecb0c3320  bp: 00007ffecb0c3560  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe98493cfff  sp: 00007ffecb0c3398
  ip: 00007fe98493cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020752.910895:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5582ef8e1b0c base::debug::StackTrace::StackTrace()
#1 0x5582ef8fa780 logging::LogMessage::~LogMessage()
#2 0x5582ee98a2b1 content::ZygoteHostImpl::Init()
#3 0x5582ee5fcc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5582ee602a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5582f372c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5582ef61ca00 content::RunNamedProcessTypeMain()
#7 0x5582ef61d2e8 content::ContentMainRunnerImpl::Run()
#8 0x5582ef626f24 service_manager::Main()
#9 0x5582ef61bf14 content::ContentMain()
#10 0x5582f372b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5582f372ba42 headless::HeadlessBrowserMain()
#12 0x5582ef623f9d headless::HeadlessShellMain()
#13 0x5582edc821ac ChromeMain
#14 0x7f642332b2e1 __libc_start_main
#15 0x5582edc8202a _start

Received signal 6
#0 0x5582ef8e1b0c base::debug::StackTrace::StackTrace()
#1 0x5582ef8e1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f64292880c0 <unknown>
#3 0x7f642333dfff gsignal
#4 0x7f642333f42a abort
#5 0x5582ef8e0105 base::debug::BreakDebugger()
#6 0x5582ef8fabca logging::LogMessage::~LogMessage()
#7 0x5582ee98a2b1 content::ZygoteHostImpl::Init()
#8 0x5582ee5fcc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5582ee602a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5582f372c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5582ef61ca00 content::RunNamedProcessTypeMain()
#12 0x5582ef61d2e8 content::ContentMainRunnerImpl::Run()
#13 0x5582ef626f24 service_manager::Main()
#14 0x5582ef61bf14 content::ContentMain()
#15 0x5582f372b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5582f372ba42 headless::HeadlessBrowserMain()
#17 0x5582ef623f9d headless::HeadlessShellMain()
#18 0x5582edc821ac ChromeMain
#19 0x7f642332b2e1 __libc_start_main
#20 0x5582edc8202a _start
  r8: 0000000000000000  r9: 00007ffde138dc00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde138e2f8 r13: 0000000000000161 r14: 00007ffde138e300 r15: 00007ffde138de99
  di: 0000000000000002  si: 00007ffde138dc00  bp: 00007ffde138de40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f642333dfff  sp: 00007ffde138dc78
  ip: 00007f642333dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020752.910895:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5582ef8e1b0c base::debug::StackTrace::StackTrace()
#1 0x5582ef8fa780 logging::LogMessage::~LogMessage()
#2 0x5582ee98a2b1 content::ZygoteHostImpl::Init()
#3 0x5582ee5fcc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5582ee602a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5582f372c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5582ef61ca00 content::RunNamedProcessTypeMain()
#7 0x5582ef61d2e8 content::ContentMainRunnerImpl::Run()
#8 0x5582ef626f24 service_manager::Main()
#9 0x5582ef61bf14 content::ContentMain()
#10 0x5582f372b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5582f372ba42 headless::HeadlessBrowserMain()
#12 0x5582ef623f9d headless::HeadlessShellMain()
#13 0x5582edc821ac ChromeMain
#14 0x7f642332b2e1 __libc_start_main
#15 0x5582edc8202a _start

Received signal 6
#0 0x5582ef8e1b0c base::debug::StackTrace::StackTrace()
#1 0x5582ef8e1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f64292880c0 <unknown>
#3 0x7f642333dfff gsignal
#4 0x7f642333f42a abort
#5 0x5582ef8e0105 base::debug::BreakDebugger()
#6 0x5582ef8fabca logging::LogMessage::~LogMessage()
#7 0x5582ee98a2b1 content::ZygoteHostImpl::Init()
#8 0x5582ee5fcc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5582ee602a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5582f372c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5582ef61ca00 content::RunNamedProcessTypeMain()
#12 0x5582ef61d2e8 content::ContentMainRunnerImpl::Run()
#13 0x5582ef626f24 service_manager::Main()
#14 0x5582ef61bf14 content::ContentMain()
#15 0x5582f372b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5582f372ba42 headless::HeadlessBrowserMain()
#17 0x5582ef623f9d headless::HeadlessShellMain()
#18 0x5582edc821ac ChromeMain
#19 0x7f642332b2e1 __libc_start_main
#20 0x5582edc8202a _start
  r8: 0000000000000000  r9: 00007ffde138dc00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde138e2f8 r13: 0000000000000161 r14: 00007ffde138e300 r15: 00007ffde138de99
  di: 0000000000000002  si: 00007ffde138dc00  bp: 00007ffde138de40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f642333dfff  sp: 00007ffde138dc78
  ip: 00007f642333dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020753.458309:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d2bf5dfb0c base::debug::StackTrace::StackTrace()
#1 0x55d2bf5f8780 logging::LogMessage::~LogMessage()
#2 0x55d2be6882b1 content::ZygoteHostImpl::Init()
#3 0x55d2be2fac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d2be300a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d2c342a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d2bf31aa00 content::RunNamedProcessTypeMain()
#7 0x55d2bf31b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d2bf324f24 service_manager::Main()
#9 0x55d2bf319f14 content::ContentMain()
#10 0x55d2c34299b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d2c3429a42 headless::HeadlessBrowserMain()
#12 0x55d2bf321f9d headless::HeadlessShellMain()
#13 0x55d2bd9801ac ChromeMain
#14 0x7f8bc132b2e1 __libc_start_main
#15 0x55d2bd98002a _start

Received signal 6
#0 0x55d2bf5dfb0c base::debug::StackTrace::StackTrace()
#1 0x55d2bf5df671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8bc72880c0 <unknown>
#3 0x7f8bc133dfff gsignal
#4 0x7f8bc133f42a abort
#5 0x55d2bf5de105 base::debug::BreakDebugger()
#6 0x55d2bf5f8bca logging::LogMessage::~LogMessage()
#7 0x55d2be6882b1 content::ZygoteHostImpl::Init()
#8 0x55d2be2fac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d2be300a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d2c342a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d2bf31aa00 content::RunNamedProcessTypeMain()
#12 0x55d2bf31b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d2bf324f24 service_manager::Main()
#14 0x55d2bf319f14 content::ContentMain()
#15 0x55d2c34299b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d2c3429a42 headless::HeadlessBrowserMain()
#17 0x55d2bf321f9d headless::HeadlessShellMain()
#18 0x55d2bd9801ac ChromeMain
#19 0x7f8bc132b2e1 __libc_start_main
#20 0x55d2bd98002a _start
  r8: 0000000000000000  r9: 00007ffd2ea8b840 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2ea8bf38 r13: 0000000000000161 r14: 00007ffd2ea8bf40 r15: 00007ffd2ea8bad9
  di: 0000000000000002  si: 00007ffd2ea8b840  bp: 00007ffd2ea8ba80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8bc133dfff  sp: 00007ffd2ea8b8b8
  ip: 00007f8bc133dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020753.458309:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d2bf5dfb0c base::debug::StackTrace::StackTrace()
#1 0x55d2bf5f8780 logging::LogMessage::~LogMessage()
#2 0x55d2be6882b1 content::ZygoteHostImpl::Init()
#3 0x55d2be2fac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d2be300a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d2c342a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d2bf31aa00 content::RunNamedProcessTypeMain()
#7 0x55d2bf31b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d2bf324f24 service_manager::Main()
#9 0x55d2bf319f14 content::ContentMain()
#10 0x55d2c34299b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d2c3429a42 headless::HeadlessBrowserMain()
#12 0x55d2bf321f9d headless::HeadlessShellMain()
#13 0x55d2bd9801ac ChromeMain
#14 0x7f8bc132b2e1 __libc_start_main
#15 0x55d2bd98002a _start

Received signal 6
#0 0x55d2bf5dfb0c base::debug::StackTrace::StackTrace()
#1 0x55d2bf5df671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8bc72880c0 <unknown>
#3 0x7f8bc133dfff gsignal
#4 0x7f8bc133f42a abort
#5 0x55d2bf5de105 base::debug::BreakDebugger()
#6 0x55d2bf5f8bca logging::LogMessage::~LogMessage()
#7 0x55d2be6882b1 content::ZygoteHostImpl::Init()
#8 0x55d2be2fac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d2be300a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d2c342a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d2bf31aa00 content::RunNamedProcessTypeMain()
#12 0x55d2bf31b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d2bf324f24 service_manager::Main()
#14 0x55d2bf319f14 content::ContentMain()
#15 0x55d2c34299b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d2c3429a42 headless::HeadlessBrowserMain()
#17 0x55d2bf321f9d headless::HeadlessShellMain()
#18 0x55d2bd9801ac ChromeMain
#19 0x7f8bc132b2e1 __libc_start_main
#20 0x55d2bd98002a _start
  r8: 0000000000000000  r9: 00007ffd2ea8b840 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2ea8bf38 r13: 0000000000000161 r14: 00007ffd2ea8bf40 r15: 00007ffd2ea8bad9
  di: 0000000000000002  si: 00007ffd2ea8b840  bp: 00007ffd2ea8ba80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8bc133dfff  sp: 00007ffd2ea8b8b8
  ip: 00007f8bc133dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://w3c.github.io/clipboard-apis/) (10 May 2018)
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
[0511/020845.855466:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557d7aa8ab0c base::debug::StackTrace::StackTrace()
#1 0x557d7aaa3780 logging::LogMessage::~LogMessage()
#2 0x557d79b332b1 content::ZygoteHostImpl::Init()
#3 0x557d797a5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557d797aba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557d7e8d59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557d7a7c5a00 content::RunNamedProcessTypeMain()
#7 0x557d7a7c62e8 content::ContentMainRunnerImpl::Run()
#8 0x557d7a7cff24 service_manager::Main()
#9 0x557d7a7c4f14 content::ContentMain()
#10 0x557d7e8d49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557d7e8d4a42 headless::HeadlessBrowserMain()
#12 0x557d7a7ccf9d headless::HeadlessShellMain()
#13 0x557d78e2b1ac ChromeMain
#14 0x7f60a04a82e1 __libc_start_main
#15 0x557d78e2b02a _start

Received signal 6
#0 0x557d7aa8ab0c base::debug::StackTrace::StackTrace()
#1 0x557d7aa8a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f60a64050c0 <unknown>
#3 0x7f60a04bafff gsignal
#4 0x7f60a04bc42a abort
#5 0x557d7aa89105 base::debug::BreakDebugger()
#6 0x557d7aaa3bca logging::LogMessage::~LogMessage()
#7 0x557d79b332b1 content::ZygoteHostImpl::Init()
#8 0x557d797a5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557d797aba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557d7e8d59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557d7a7c5a00 content::RunNamedProcessTypeMain()
#12 0x557d7a7c62e8 content::ContentMainRunnerImpl::Run()
#13 0x557d7a7cff24 service_manager::Main()
#14 0x557d7a7c4f14 content::ContentMain()
#15 0x557d7e8d49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557d7e8d4a42 headless::HeadlessBrowserMain()
#17 0x557d7a7ccf9d headless::HeadlessShellMain()
#18 0x557d78e2b1ac ChromeMain
#19 0x7f60a04a82e1 __libc_start_main
#20 0x557d78e2b02a _start
  r8: 0000000000000000  r9: 00007ffcff4017c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcff401eb8 r13: 0000000000000161 r14: 00007ffcff401ec0 r15: 00007ffcff401a59
  di: 0000000000000002  si: 00007ffcff4017c0  bp: 00007ffcff401a00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f60a04bafff  sp: 00007ffcff401838
  ip: 00007f60a04bafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020845.855466:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557d7aa8ab0c base::debug::StackTrace::StackTrace()
#1 0x557d7aaa3780 logging::LogMessage::~LogMessage()
#2 0x557d79b332b1 content::ZygoteHostImpl::Init()
#3 0x557d797a5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557d797aba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557d7e8d59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557d7a7c5a00 content::RunNamedProcessTypeMain()
#7 0x557d7a7c62e8 content::ContentMainRunnerImpl::Run()
#8 0x557d7a7cff24 service_manager::Main()
#9 0x557d7a7c4f14 content::ContentMain()
#10 0x557d7e8d49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557d7e8d4a42 headless::HeadlessBrowserMain()
#12 0x557d7a7ccf9d headless::HeadlessShellMain()
#13 0x557d78e2b1ac ChromeMain
#14 0x7f60a04a82e1 __libc_start_main
#15 0x557d78e2b02a _start

Received signal 6
#0 0x557d7aa8ab0c base::debug::StackTrace::StackTrace()
#1 0x557d7aa8a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f60a64050c0 <unknown>
#3 0x7f60a04bafff gsignal
#4 0x7f60a04bc42a abort
#5 0x557d7aa89105 base::debug::BreakDebugger()
#6 0x557d7aaa3bca logging::LogMessage::~LogMessage()
#7 0x557d79b332b1 content::ZygoteHostImpl::Init()
#8 0x557d797a5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557d797aba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557d7e8d59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557d7a7c5a00 content::RunNamedProcessTypeMain()
#12 0x557d7a7c62e8 content::ContentMainRunnerImpl::Run()
#13 0x557d7a7cff24 service_manager::Main()
#14 0x557d7a7c4f14 content::ContentMain()
#15 0x557d7e8d49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557d7e8d4a42 headless::HeadlessBrowserMain()
#17 0x557d7a7ccf9d headless::HeadlessShellMain()
#18 0x557d78e2b1ac ChromeMain
#19 0x7f60a04a82e1 __libc_start_main
#20 0x557d78e2b02a _start
  r8: 0000000000000000  r9: 00007ffcff4017c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcff401eb8 r13: 0000000000000161 r14: 00007ffcff401ec0 r15: 00007ffcff401a59
  di: 0000000000000002  si: 00007ffcff4017c0  bp: 00007ffcff401a00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f60a04bafff  sp: 00007ffcff401838
  ip: 00007f60a04bafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://drafts.csswg.org/css-animations/) (10 May 2018)
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
[0511/020657.191581:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556bbdcb6b0c base::debug::StackTrace::StackTrace()
#1 0x556bbdccf780 logging::LogMessage::~LogMessage()
#2 0x556bbcd5f2b1 content::ZygoteHostImpl::Init()
#3 0x556bbc9d1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556bbc9d7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556bc1b019a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556bbd9f1a00 content::RunNamedProcessTypeMain()
#7 0x556bbd9f22e8 content::ContentMainRunnerImpl::Run()
#8 0x556bbd9fbf24 service_manager::Main()
#9 0x556bbd9f0f14 content::ContentMain()
#10 0x556bc1b009b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556bc1b00a42 headless::HeadlessBrowserMain()
#12 0x556bbd9f8f9d headless::HeadlessShellMain()
#13 0x556bbc0571ac ChromeMain
#14 0x7f3134ab62e1 __libc_start_main
#15 0x556bbc05702a _start

Received signal 6
#0 0x556bbdcb6b0c base::debug::StackTrace::StackTrace()
#1 0x556bbdcb6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f313aa130c0 <unknown>
#3 0x7f3134ac8fff gsignal
#4 0x7f3134aca42a abort
#5 0x556bbdcb5105 base::debug::BreakDebugger()
#6 0x556bbdccfbca logging::LogMessage::~LogMessage()
#7 0x556bbcd5f2b1 content::ZygoteHostImpl::Init()
#8 0x556bbc9d1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556bbc9d7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556bc1b019a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556bbd9f1a00 content::RunNamedProcessTypeMain()
#12 0x556bbd9f22e8 content::ContentMainRunnerImpl::Run()
#13 0x556bbd9fbf24 service_manager::Main()
#14 0x556bbd9f0f14 content::ContentMain()
#15 0x556bc1b009b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556bc1b00a42 headless::HeadlessBrowserMain()
#17 0x556bbd9f8f9d headless::HeadlessShellMain()
#18 0x556bbc0571ac ChromeMain
#19 0x7f3134ab62e1 __libc_start_main
#20 0x556bbc05702a _start
  r8: 0000000000000000  r9: 00007ffee013dea0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffee013e598 r13: 0000000000000161 r14: 00007ffee013e5a0 r15: 00007ffee013e139
  di: 0000000000000002  si: 00007ffee013dea0  bp: 00007ffee013e0e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3134ac8fff  sp: 00007ffee013df18
  ip: 00007f3134ac8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020657.191581:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556bbdcb6b0c base::debug::StackTrace::StackTrace()
#1 0x556bbdccf780 logging::LogMessage::~LogMessage()
#2 0x556bbcd5f2b1 content::ZygoteHostImpl::Init()
#3 0x556bbc9d1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556bbc9d7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556bc1b019a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556bbd9f1a00 content::RunNamedProcessTypeMain()
#7 0x556bbd9f22e8 content::ContentMainRunnerImpl::Run()
#8 0x556bbd9fbf24 service_manager::Main()
#9 0x556bbd9f0f14 content::ContentMain()
#10 0x556bc1b009b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556bc1b00a42 headless::HeadlessBrowserMain()
#12 0x556bbd9f8f9d headless::HeadlessShellMain()
#13 0x556bbc0571ac ChromeMain
#14 0x7f3134ab62e1 __libc_start_main
#15 0x556bbc05702a _start

Received signal 6
#0 0x556bbdcb6b0c base::debug::StackTrace::StackTrace()
#1 0x556bbdcb6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f313aa130c0 <unknown>
#3 0x7f3134ac8fff gsignal
#4 0x7f3134aca42a abort
#5 0x556bbdcb5105 base::debug::BreakDebugger()
#6 0x556bbdccfbca logging::LogMessage::~LogMessage()
#7 0x556bbcd5f2b1 content::ZygoteHostImpl::Init()
#8 0x556bbc9d1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556bbc9d7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556bc1b019a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556bbd9f1a00 content::RunNamedProcessTypeMain()
#12 0x556bbd9f22e8 content::ContentMainRunnerImpl::Run()
#13 0x556bbd9fbf24 service_manager::Main()
#14 0x556bbd9f0f14 content::ContentMain()
#15 0x556bc1b009b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556bc1b00a42 headless::HeadlessBrowserMain()
#17 0x556bbd9f8f9d headless::HeadlessShellMain()
#18 0x556bbc0571ac ChromeMain
#19 0x7f3134ab62e1 __libc_start_main
#20 0x556bbc05702a _start
  r8: 0000000000000000  r9: 00007ffee013dea0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffee013e598 r13: 0000000000000161 r14: 00007ffee013e5a0 r15: 00007ffee013e139
  di: 0000000000000002  si: 00007ffee013dea0  bp: 00007ffee013e0e0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3134ac8fff  sp: 00007ffee013df18
  ip: 00007f3134ac8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020825.300315:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555ada2e0b0c base::debug::StackTrace::StackTrace()
#1 0x555ada2f9780 logging::LogMessage::~LogMessage()
#2 0x555ad93892b1 content::ZygoteHostImpl::Init()
#3 0x555ad8ffbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555ad9001a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555ade12b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555ada01ba00 content::RunNamedProcessTypeMain()
#7 0x555ada01c2e8 content::ContentMainRunnerImpl::Run()
#8 0x555ada025f24 service_manager::Main()
#9 0x555ada01af14 content::ContentMain()
#10 0x555ade12a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555ade12aa42 headless::HeadlessBrowserMain()
#12 0x555ada022f9d headless::HeadlessShellMain()
#13 0x555ad86811ac ChromeMain
#14 0x7f53564292e1 __libc_start_main
#15 0x555ad868102a _start

Received signal 6
#0 0x555ada2e0b0c base::debug::StackTrace::StackTrace()
#1 0x555ada2e0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f535c3860c0 <unknown>
#3 0x7f535643bfff gsignal
#4 0x7f535643d42a abort
#5 0x555ada2df105 base::debug::BreakDebugger()
#6 0x555ada2f9bca logging::LogMessage::~LogMessage()
#7 0x555ad93892b1 content::ZygoteHostImpl::Init()
#8 0x555ad8ffbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555ad9001a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555ade12b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555ada01ba00 content::RunNamedProcessTypeMain()
#12 0x555ada01c2e8 content::ContentMainRunnerImpl::Run()
#13 0x555ada025f24 service_manager::Main()
#14 0x555ada01af14 content::ContentMain()
#15 0x555ade12a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555ade12aa42 headless::HeadlessBrowserMain()
#17 0x555ada022f9d headless::HeadlessShellMain()
#18 0x555ad86811ac ChromeMain
#19 0x7f53564292e1 __libc_start_main
#20 0x555ad868102a _start
  r8: 0000000000000000  r9: 00007ffc0dbff3d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc0dbffac8 r13: 0000000000000161 r14: 00007ffc0dbffad0 r15: 00007ffc0dbff669
  di: 0000000000000002  si: 00007ffc0dbff3d0  bp: 00007ffc0dbff610  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f535643bfff  sp: 00007ffc0dbff448
  ip: 00007f535643bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020825.300315:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555ada2e0b0c base::debug::StackTrace::StackTrace()
#1 0x555ada2f9780 logging::LogMessage::~LogMessage()
#2 0x555ad93892b1 content::ZygoteHostImpl::Init()
#3 0x555ad8ffbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555ad9001a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555ade12b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555ada01ba00 content::RunNamedProcessTypeMain()
#7 0x555ada01c2e8 content::ContentMainRunnerImpl::Run()
#8 0x555ada025f24 service_manager::Main()
#9 0x555ada01af14 content::ContentMain()
#10 0x555ade12a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555ade12aa42 headless::HeadlessBrowserMain()
#12 0x555ada022f9d headless::HeadlessShellMain()
#13 0x555ad86811ac ChromeMain
#14 0x7f53564292e1 __libc_start_main
#15 0x555ad868102a _start

Received signal 6
#0 0x555ada2e0b0c base::debug::StackTrace::StackTrace()
#1 0x555ada2e0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f535c3860c0 <unknown>
#3 0x7f535643bfff gsignal
#4 0x7f535643d42a abort
#5 0x555ada2df105 base::debug::BreakDebugger()
#6 0x555ada2f9bca logging::LogMessage::~LogMessage()
#7 0x555ad93892b1 content::ZygoteHostImpl::Init()
#8 0x555ad8ffbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555ad9001a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555ade12b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555ada01ba00 content::RunNamedProcessTypeMain()
#12 0x555ada01c2e8 content::ContentMainRunnerImpl::Run()
#13 0x555ada025f24 service_manager::Main()
#14 0x555ada01af14 content::ContentMain()
#15 0x555ade12a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555ade12aa42 headless::HeadlessBrowserMain()
#17 0x555ada022f9d headless::HeadlessShellMain()
#18 0x555ad86811ac ChromeMain
#19 0x7f53564292e1 __libc_start_main
#20 0x555ad868102a _start
  r8: 0000000000000000  r9: 00007ffc0dbff3d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc0dbffac8 r13: 0000000000000161 r14: 00007ffc0dbffad0 r15: 00007ffc0dbff669
  di: 0000000000000002  si: 00007ffc0dbff3d0  bp: 00007ffc0dbff610  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f535643bfff  sp: 00007ffc0dbff448
  ip: 00007f535643bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020825.008496:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ee382d4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee382ed780 logging::LogMessage::~LogMessage()
#2 0x55ee3737d2b1 content::ZygoteHostImpl::Init()
#3 0x55ee36fefc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ee36ff5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ee3c11f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ee3800fa00 content::RunNamedProcessTypeMain()
#7 0x55ee380102e8 content::ContentMainRunnerImpl::Run()
#8 0x55ee38019f24 service_manager::Main()
#9 0x55ee3800ef14 content::ContentMain()
#10 0x55ee3c11e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ee3c11ea42 headless::HeadlessBrowserMain()
#12 0x55ee38016f9d headless::HeadlessShellMain()
#13 0x55ee366751ac ChromeMain
#14 0x7f68bdb7f2e1 __libc_start_main
#15 0x55ee3667502a _start

Received signal 6
#0 0x55ee382d4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee382d4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f68c3adc0c0 <unknown>
#3 0x7f68bdb91fff gsignal
#4 0x7f68bdb9342a abort
#5 0x55ee382d3105 base::debug::BreakDebugger()
#6 0x55ee382edbca logging::LogMessage::~LogMessage()
#7 0x55ee3737d2b1 content::ZygoteHostImpl::Init()
#8 0x55ee36fefc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ee36ff5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ee3c11f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ee3800fa00 content::RunNamedProcessTypeMain()
#12 0x55ee380102e8 content::ContentMainRunnerImpl::Run()
#13 0x55ee38019f24 service_manager::Main()
#14 0x55ee3800ef14 content::ContentMain()
#15 0x55ee3c11e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ee3c11ea42 headless::HeadlessBrowserMain()
#17 0x55ee38016f9d headless::HeadlessShellMain()
#18 0x55ee366751ac ChromeMain
#19 0x7f68bdb7f2e1 __libc_start_main
#20 0x55ee3667502a _start
  r8: 0000000000000000  r9: 00007ffdeffb42c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdeffb49b8 r13: 0000000000000161 r14: 00007ffdeffb49c0 r15: 00007ffdeffb4559
  di: 0000000000000002  si: 00007ffdeffb42c0  bp: 00007ffdeffb4500  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f68bdb91fff  sp: 00007ffdeffb4338
  ip: 00007f68bdb91fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020825.008496:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ee382d4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee382ed780 logging::LogMessage::~LogMessage()
#2 0x55ee3737d2b1 content::ZygoteHostImpl::Init()
#3 0x55ee36fefc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ee36ff5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ee3c11f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ee3800fa00 content::RunNamedProcessTypeMain()
#7 0x55ee380102e8 content::ContentMainRunnerImpl::Run()
#8 0x55ee38019f24 service_manager::Main()
#9 0x55ee3800ef14 content::ContentMain()
#10 0x55ee3c11e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ee3c11ea42 headless::HeadlessBrowserMain()
#12 0x55ee38016f9d headless::HeadlessShellMain()
#13 0x55ee366751ac ChromeMain
#14 0x7f68bdb7f2e1 __libc_start_main
#15 0x55ee3667502a _start

Received signal 6
#0 0x55ee382d4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee382d4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f68c3adc0c0 <unknown>
#3 0x7f68bdb91fff gsignal
#4 0x7f68bdb9342a abort
#5 0x55ee382d3105 base::debug::BreakDebugger()
#6 0x55ee382edbca logging::LogMessage::~LogMessage()
#7 0x55ee3737d2b1 content::ZygoteHostImpl::Init()
#8 0x55ee36fefc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ee36ff5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ee3c11f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ee3800fa00 content::RunNamedProcessTypeMain()
#12 0x55ee380102e8 content::ContentMainRunnerImpl::Run()
#13 0x55ee38019f24 service_manager::Main()
#14 0x55ee3800ef14 content::ContentMain()
#15 0x55ee3c11e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ee3c11ea42 headless::HeadlessBrowserMain()
#17 0x55ee38016f9d headless::HeadlessShellMain()
#18 0x55ee366751ac ChromeMain
#19 0x7f68bdb7f2e1 __libc_start_main
#20 0x55ee3667502a _start
  r8: 0000000000000000  r9: 00007ffdeffb42c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdeffb49b8 r13: 0000000000000161 r14: 00007ffdeffb49c0 r15: 00007ffdeffb4559
  di: 0000000000000002  si: 00007ffdeffb42c0  bp: 00007ffdeffb4500  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f68bdb91fff  sp: 00007ffdeffb4338
  ip: 00007f68bdb91fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020825.028597:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555f4f21ab0c base::debug::StackTrace::StackTrace()
#1 0x555f4f233780 logging::LogMessage::~LogMessage()
#2 0x555f4e2c32b1 content::ZygoteHostImpl::Init()
#3 0x555f4df35c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555f4df3ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555f530659a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555f4ef55a00 content::RunNamedProcessTypeMain()
#7 0x555f4ef562e8 content::ContentMainRunnerImpl::Run()
#8 0x555f4ef5ff24 service_manager::Main()
#9 0x555f4ef54f14 content::ContentMain()
#10 0x555f530649b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555f53064a42 headless::HeadlessBrowserMain()
#12 0x555f4ef5cf9d headless::HeadlessShellMain()
#13 0x555f4d5bb1ac ChromeMain
#14 0x7f465ee262e1 __libc_start_main
#15 0x555f4d5bb02a _start

Received signal 6
#0 0x555f4f21ab0c base::debug::StackTrace::StackTrace()
#1 0x555f4f21a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4664d830c0 <unknown>
#3 0x7f465ee38fff gsignal
#4 0x7f465ee3a42a abort
#5 0x555f4f219105 base::debug::BreakDebugger()
#6 0x555f4f233bca logging::LogMessage::~LogMessage()
#7 0x555f4e2c32b1 content::ZygoteHostImpl::Init()
#8 0x555f4df35c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555f4df3ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555f530659a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555f4ef55a00 content::RunNamedProcessTypeMain()
#12 0x555f4ef562e8 content::ContentMainRunnerImpl::Run()
#13 0x555f4ef5ff24 service_manager::Main()
#14 0x555f4ef54f14 content::ContentMain()
#15 0x555f530649b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555f53064a42 headless::HeadlessBrowserMain()
#17 0x555f4ef5cf9d headless::HeadlessShellMain()
#18 0x555f4d5bb1ac ChromeMain
#19 0x7f465ee262e1 __libc_start_main
#20 0x555f4d5bb02a _start
  r8: 0000000000000000  r9: 00007ffedfd3fc70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedfd40368 r13: 0000000000000161 r14: 00007ffedfd40370 r15: 00007ffedfd3ff09
  di: 0000000000000002  si: 00007ffedfd3fc70  bp: 00007ffedfd3feb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f465ee38fff  sp: 00007ffedfd3fce8
  ip: 00007f465ee38fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020825.028597:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555f4f21ab0c base::debug::StackTrace::StackTrace()
#1 0x555f4f233780 logging::LogMessage::~LogMessage()
#2 0x555f4e2c32b1 content::ZygoteHostImpl::Init()
#3 0x555f4df35c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555f4df3ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555f530659a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555f4ef55a00 content::RunNamedProcessTypeMain()
#7 0x555f4ef562e8 content::ContentMainRunnerImpl::Run()
#8 0x555f4ef5ff24 service_manager::Main()
#9 0x555f4ef54f14 content::ContentMain()
#10 0x555f530649b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555f53064a42 headless::HeadlessBrowserMain()
#12 0x555f4ef5cf9d headless::HeadlessShellMain()
#13 0x555f4d5bb1ac ChromeMain
#14 0x7f465ee262e1 __libc_start_main
#15 0x555f4d5bb02a _start

Received signal 6
#0 0x555f4f21ab0c base::debug::StackTrace::StackTrace()
#1 0x555f4f21a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4664d830c0 <unknown>
#3 0x7f465ee38fff gsignal
#4 0x7f465ee3a42a abort
#5 0x555f4f219105 base::debug::BreakDebugger()
#6 0x555f4f233bca logging::LogMessage::~LogMessage()
#7 0x555f4e2c32b1 content::ZygoteHostImpl::Init()
#8 0x555f4df35c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555f4df3ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555f530659a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555f4ef55a00 content::RunNamedProcessTypeMain()
#12 0x555f4ef562e8 content::ContentMainRunnerImpl::Run()
#13 0x555f4ef5ff24 service_manager::Main()
#14 0x555f4ef54f14 content::ContentMain()
#15 0x555f530649b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555f53064a42 headless::HeadlessBrowserMain()
#17 0x555f4ef5cf9d headless::HeadlessShellMain()
#18 0x555f4d5bb1ac ChromeMain
#19 0x7f465ee262e1 __libc_start_main
#20 0x555f4d5bb02a _start
  r8: 0000000000000000  r9: 00007ffedfd3fc70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedfd40368 r13: 0000000000000161 r14: 00007ffedfd40370 r15: 00007ffedfd3ff09
  di: 0000000000000002  si: 00007ffedfd3fc70  bp: 00007ffedfd3feb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f465ee38fff  sp: 00007ffedfd3fce8
  ip: 00007f465ee38fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020903.861798:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f2c8e9bb0c base::debug::StackTrace::StackTrace()
#1 0x55f2c8eb4780 logging::LogMessage::~LogMessage()
#2 0x55f2c7f442b1 content::ZygoteHostImpl::Init()
#3 0x55f2c7bb6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f2c7bbca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f2ccce69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f2c8bd6a00 content::RunNamedProcessTypeMain()
#7 0x55f2c8bd72e8 content::ContentMainRunnerImpl::Run()
#8 0x55f2c8be0f24 service_manager::Main()
#9 0x55f2c8bd5f14 content::ContentMain()
#10 0x55f2ccce59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f2ccce5a42 headless::HeadlessBrowserMain()
#12 0x55f2c8bddf9d headless::HeadlessShellMain()
#13 0x55f2c723c1ac ChromeMain
#14 0x7f1b6d7b32e1 __libc_start_main
#15 0x55f2c723c02a _start

Received signal 6
#0 0x55f2c8e9bb0c base::debug::StackTrace::StackTrace()
#1 0x55f2c8e9b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1b737100c0 <unknown>
#3 0x7f1b6d7c5fff gsignal
#4 0x7f1b6d7c742a abort
#5 0x55f2c8e9a105 base::debug::BreakDebugger()
#6 0x55f2c8eb4bca logging::LogMessage::~LogMessage()
#7 0x55f2c7f442b1 content::ZygoteHostImpl::Init()
#8 0x55f2c7bb6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f2c7bbca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f2ccce69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f2c8bd6a00 content::RunNamedProcessTypeMain()
#12 0x55f2c8bd72e8 content::ContentMainRunnerImpl::Run()
#13 0x55f2c8be0f24 service_manager::Main()
#14 0x55f2c8bd5f14 content::ContentMain()
#15 0x55f2ccce59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f2ccce5a42 headless::HeadlessBrowserMain()
#17 0x55f2c8bddf9d headless::HeadlessShellMain()
#18 0x55f2c723c1ac ChromeMain
#19 0x7f1b6d7b32e1 __libc_start_main
#20 0x55f2c723c02a _start
  r8: 0000000000000000  r9: 00007ffdc5371830 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdc5371f28 r13: 0000000000000161 r14: 00007ffdc5371f30 r15: 00007ffdc5371ac9
  di: 0000000000000002  si: 00007ffdc5371830  bp: 00007ffdc5371a70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1b6d7c5fff  sp: 00007ffdc53718a8
  ip: 00007f1b6d7c5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020903.861798:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f2c8e9bb0c base::debug::StackTrace::StackTrace()
#1 0x55f2c8eb4780 logging::LogMessage::~LogMessage()
#2 0x55f2c7f442b1 content::ZygoteHostImpl::Init()
#3 0x55f2c7bb6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f2c7bbca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f2ccce69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f2c8bd6a00 content::RunNamedProcessTypeMain()
#7 0x55f2c8bd72e8 content::ContentMainRunnerImpl::Run()
#8 0x55f2c8be0f24 service_manager::Main()
#9 0x55f2c8bd5f14 content::ContentMain()
#10 0x55f2ccce59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f2ccce5a42 headless::HeadlessBrowserMain()
#12 0x55f2c8bddf9d headless::HeadlessShellMain()
#13 0x55f2c723c1ac ChromeMain
#14 0x7f1b6d7b32e1 __libc_start_main
#15 0x55f2c723c02a _start

Received signal 6
#0 0x55f2c8e9bb0c base::debug::StackTrace::StackTrace()
#1 0x55f2c8e9b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1b737100c0 <unknown>
#3 0x7f1b6d7c5fff gsignal
#4 0x7f1b6d7c742a abort
#5 0x55f2c8e9a105 base::debug::BreakDebugger()
#6 0x55f2c8eb4bca logging::LogMessage::~LogMessage()
#7 0x55f2c7f442b1 content::ZygoteHostImpl::Init()
#8 0x55f2c7bb6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f2c7bbca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f2ccce69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f2c8bd6a00 content::RunNamedProcessTypeMain()
#12 0x55f2c8bd72e8 content::ContentMainRunnerImpl::Run()
#13 0x55f2c8be0f24 service_manager::Main()
#14 0x55f2c8bd5f14 content::ContentMain()
#15 0x55f2ccce59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f2ccce5a42 headless::HeadlessBrowserMain()
#17 0x55f2c8bddf9d headless::HeadlessShellMain()
#18 0x55f2c723c1ac ChromeMain
#19 0x7f1b6d7b32e1 __libc_start_main
#20 0x55f2c723c02a _start
  r8: 0000000000000000  r9: 00007ffdc5371830 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdc5371f28 r13: 0000000000000161 r14: 00007ffdc5371f30 r15: 00007ffdc5371ac9
  di: 0000000000000002  si: 00007ffdc5371830  bp: 00007ffdc5371a70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1b6d7c5fff  sp: 00007ffdc53718a8
  ip: 00007f1b6d7c5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020924.218122:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5564652d5b0c base::debug::StackTrace::StackTrace()
#1 0x5564652ee780 logging::LogMessage::~LogMessage()
#2 0x55646437e2b1 content::ZygoteHostImpl::Init()
#3 0x556463ff0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556463ff6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5564691209a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556465010a00 content::RunNamedProcessTypeMain()
#7 0x5564650112e8 content::ContentMainRunnerImpl::Run()
#8 0x55646501af24 service_manager::Main()
#9 0x55646500ff14 content::ContentMain()
#10 0x55646911f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55646911fa42 headless::HeadlessBrowserMain()
#12 0x556465017f9d headless::HeadlessShellMain()
#13 0x5564636761ac ChromeMain
#14 0x7ff0464fc2e1 __libc_start_main
#15 0x55646367602a _start

Received signal 6
#0 0x5564652d5b0c base::debug::StackTrace::StackTrace()
#1 0x5564652d5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff04c4590c0 <unknown>
#3 0x7ff04650efff gsignal
#4 0x7ff04651042a abort
#5 0x5564652d4105 base::debug::BreakDebugger()
#6 0x5564652eebca logging::LogMessage::~LogMessage()
#7 0x55646437e2b1 content::ZygoteHostImpl::Init()
#8 0x556463ff0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556463ff6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5564691209a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556465010a00 content::RunNamedProcessTypeMain()
#12 0x5564650112e8 content::ContentMainRunnerImpl::Run()
#13 0x55646501af24 service_manager::Main()
#14 0x55646500ff14 content::ContentMain()
#15 0x55646911f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55646911fa42 headless::HeadlessBrowserMain()
#17 0x556465017f9d headless::HeadlessShellMain()
#18 0x5564636761ac ChromeMain
#19 0x7ff0464fc2e1 __libc_start_main
#20 0x55646367602a _start
  r8: 0000000000000000  r9: 00007fff22f10aa0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff22f11198 r13: 0000000000000161 r14: 00007fff22f111a0 r15: 00007fff22f10d39
  di: 0000000000000002  si: 00007fff22f10aa0  bp: 00007fff22f10ce0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff04650efff  sp: 00007fff22f10b18
  ip: 00007ff04650efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020924.218122:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5564652d5b0c base::debug::StackTrace::StackTrace()
#1 0x5564652ee780 logging::LogMessage::~LogMessage()
#2 0x55646437e2b1 content::ZygoteHostImpl::Init()
#3 0x556463ff0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556463ff6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5564691209a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556465010a00 content::RunNamedProcessTypeMain()
#7 0x5564650112e8 content::ContentMainRunnerImpl::Run()
#8 0x55646501af24 service_manager::Main()
#9 0x55646500ff14 content::ContentMain()
#10 0x55646911f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55646911fa42 headless::HeadlessBrowserMain()
#12 0x556465017f9d headless::HeadlessShellMain()
#13 0x5564636761ac ChromeMain
#14 0x7ff0464fc2e1 __libc_start_main
#15 0x55646367602a _start

Received signal 6
#0 0x5564652d5b0c base::debug::StackTrace::StackTrace()
#1 0x5564652d5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff04c4590c0 <unknown>
#3 0x7ff04650efff gsignal
#4 0x7ff04651042a abort
#5 0x5564652d4105 base::debug::BreakDebugger()
#6 0x5564652eebca logging::LogMessage::~LogMessage()
#7 0x55646437e2b1 content::ZygoteHostImpl::Init()
#8 0x556463ff0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556463ff6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5564691209a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556465010a00 content::RunNamedProcessTypeMain()
#12 0x5564650112e8 content::ContentMainRunnerImpl::Run()
#13 0x55646501af24 service_manager::Main()
#14 0x55646500ff14 content::ContentMain()
#15 0x55646911f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55646911fa42 headless::HeadlessBrowserMain()
#17 0x556465017f9d headless::HeadlessShellMain()
#18 0x5564636761ac ChromeMain
#19 0x7ff0464fc2e1 __libc_start_main
#20 0x55646367602a _start
  r8: 0000000000000000  r9: 00007fff22f10aa0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff22f11198 r13: 0000000000000161 r14: 00007fff22f111a0 r15: 00007fff22f10d39
  di: 0000000000000002  si: 00007fff22f10aa0  bp: 00007fff22f10ce0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff04650efff  sp: 00007fff22f10b18
  ip: 00007ff04650efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020918.101162:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560f1b07fb0c base::debug::StackTrace::StackTrace()
#1 0x560f1b098780 logging::LogMessage::~LogMessage()
#2 0x560f1a1282b1 content::ZygoteHostImpl::Init()
#3 0x560f19d9ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560f19da0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560f1eeca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560f1adbaa00 content::RunNamedProcessTypeMain()
#7 0x560f1adbb2e8 content::ContentMainRunnerImpl::Run()
#8 0x560f1adc4f24 service_manager::Main()
#9 0x560f1adb9f14 content::ContentMain()
#10 0x560f1eec99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560f1eec9a42 headless::HeadlessBrowserMain()
#12 0x560f1adc1f9d headless::HeadlessShellMain()
#13 0x560f194201ac ChromeMain
#14 0x7fcc945092e1 __libc_start_main
#15 0x560f1942002a _start

Received signal 6
#0 0x560f1b07fb0c base::debug::StackTrace::StackTrace()
#1 0x560f1b07f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcc9a4660c0 <unknown>
#3 0x7fcc9451bfff gsignal
#4 0x7fcc9451d42a abort
#5 0x560f1b07e105 base::debug::BreakDebugger()
#6 0x560f1b098bca logging::LogMessage::~LogMessage()
#7 0x560f1a1282b1 content::ZygoteHostImpl::Init()
#8 0x560f19d9ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560f19da0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560f1eeca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560f1adbaa00 content::RunNamedProcessTypeMain()
#12 0x560f1adbb2e8 content::ContentMainRunnerImpl::Run()
#13 0x560f1adc4f24 service_manager::Main()
#14 0x560f1adb9f14 content::ContentMain()
#15 0x560f1eec99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560f1eec9a42 headless::HeadlessBrowserMain()
#17 0x560f1adc1f9d headless::HeadlessShellMain()
#18 0x560f194201ac ChromeMain
#19 0x7fcc945092e1 __libc_start_main
#20 0x560f1942002a _start
  r8: 0000000000000000  r9: 00007fff9a048530 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff9a048c28 r13: 0000000000000161 r14: 00007fff9a048c30 r15: 00007fff9a0487c9
  di: 0000000000000002  si: 00007fff9a048530  bp: 00007fff9a048770  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcc9451bfff  sp: 00007fff9a0485a8
  ip: 00007fcc9451bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020918.101162:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560f1b07fb0c base::debug::StackTrace::StackTrace()
#1 0x560f1b098780 logging::LogMessage::~LogMessage()
#2 0x560f1a1282b1 content::ZygoteHostImpl::Init()
#3 0x560f19d9ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560f19da0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560f1eeca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560f1adbaa00 content::RunNamedProcessTypeMain()
#7 0x560f1adbb2e8 content::ContentMainRunnerImpl::Run()
#8 0x560f1adc4f24 service_manager::Main()
#9 0x560f1adb9f14 content::ContentMain()
#10 0x560f1eec99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560f1eec9a42 headless::HeadlessBrowserMain()
#12 0x560f1adc1f9d headless::HeadlessShellMain()
#13 0x560f194201ac ChromeMain
#14 0x7fcc945092e1 __libc_start_main
#15 0x560f1942002a _start

Received signal 6
#0 0x560f1b07fb0c base::debug::StackTrace::StackTrace()
#1 0x560f1b07f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcc9a4660c0 <unknown>
#3 0x7fcc9451bfff gsignal
#4 0x7fcc9451d42a abort
#5 0x560f1b07e105 base::debug::BreakDebugger()
#6 0x560f1b098bca logging::LogMessage::~LogMessage()
#7 0x560f1a1282b1 content::ZygoteHostImpl::Init()
#8 0x560f19d9ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560f19da0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560f1eeca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560f1adbaa00 content::RunNamedProcessTypeMain()
#12 0x560f1adbb2e8 content::ContentMainRunnerImpl::Run()
#13 0x560f1adc4f24 service_manager::Main()
#14 0x560f1adb9f14 content::ContentMain()
#15 0x560f1eec99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560f1eec9a42 headless::HeadlessBrowserMain()
#17 0x560f1adc1f9d headless::HeadlessShellMain()
#18 0x560f194201ac ChromeMain
#19 0x7fcc945092e1 __libc_start_main
#20 0x560f1942002a _start
  r8: 0000000000000000  r9: 00007fff9a048530 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff9a048c28 r13: 0000000000000161 r14: 00007fff9a048c30 r15: 00007fff9a0487c9
  di: 0000000000000002  si: 00007fff9a048530  bp: 00007fff9a048770  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcc9451bfff  sp: 00007fff9a0485a8
  ip: 00007fcc9451bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020919.782856:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b427df2b0c base::debug::StackTrace::StackTrace()
#1 0x55b427e0b780 logging::LogMessage::~LogMessage()
#2 0x55b426e9b2b1 content::ZygoteHostImpl::Init()
#3 0x55b426b0dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b426b13a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b42bc3d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b427b2da00 content::RunNamedProcessTypeMain()
#7 0x55b427b2e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b427b37f24 service_manager::Main()
#9 0x55b427b2cf14 content::ContentMain()
#10 0x55b42bc3c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b42bc3ca42 headless::HeadlessBrowserMain()
#12 0x55b427b34f9d headless::HeadlessShellMain()
#13 0x55b4261931ac ChromeMain
#14 0x7f83de86d2e1 __libc_start_main
#15 0x55b42619302a _start

Received signal 6
#0 0x55b427df2b0c base::debug::StackTrace::StackTrace()
#1 0x55b427df2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f83e47ca0c0 <unknown>
#3 0x7f83de87ffff gsignal
#4 0x7f83de88142a abort
#5 0x55b427df1105 base::debug::BreakDebugger()
#6 0x55b427e0bbca logging::LogMessage::~LogMessage()
#7 0x55b426e9b2b1 content::ZygoteHostImpl::Init()
#8 0x55b426b0dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b426b13a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b42bc3d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b427b2da00 content::RunNamedProcessTypeMain()
#12 0x55b427b2e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b427b37f24 service_manager::Main()
#14 0x55b427b2cf14 content::ContentMain()
#15 0x55b42bc3c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b42bc3ca42 headless::HeadlessBrowserMain()
#17 0x55b427b34f9d headless::HeadlessShellMain()
#18 0x55b4261931ac ChromeMain
#19 0x7f83de86d2e1 __libc_start_main
#20 0x55b42619302a _start
  r8: 0000000000000000  r9: 00007ffe4e8078d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe4e807fc8 r13: 0000000000000161 r14: 00007ffe4e807fd0 r15: 00007ffe4e807b69
  di: 0000000000000002  si: 00007ffe4e8078d0  bp: 00007ffe4e807b10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f83de87ffff  sp: 00007ffe4e807948
  ip: 00007f83de87ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020919.782856:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b427df2b0c base::debug::StackTrace::StackTrace()
#1 0x55b427e0b780 logging::LogMessage::~LogMessage()
#2 0x55b426e9b2b1 content::ZygoteHostImpl::Init()
#3 0x55b426b0dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b426b13a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b42bc3d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b427b2da00 content::RunNamedProcessTypeMain()
#7 0x55b427b2e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b427b37f24 service_manager::Main()
#9 0x55b427b2cf14 content::ContentMain()
#10 0x55b42bc3c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b42bc3ca42 headless::HeadlessBrowserMain()
#12 0x55b427b34f9d headless::HeadlessShellMain()
#13 0x55b4261931ac ChromeMain
#14 0x7f83de86d2e1 __libc_start_main
#15 0x55b42619302a _start

Received signal 6
#0 0x55b427df2b0c base::debug::StackTrace::StackTrace()
#1 0x55b427df2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f83e47ca0c0 <unknown>
#3 0x7f83de87ffff gsignal
#4 0x7f83de88142a abort
#5 0x55b427df1105 base::debug::BreakDebugger()
#6 0x55b427e0bbca logging::LogMessage::~LogMessage()
#7 0x55b426e9b2b1 content::ZygoteHostImpl::Init()
#8 0x55b426b0dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b426b13a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b42bc3d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b427b2da00 content::RunNamedProcessTypeMain()
#12 0x55b427b2e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b427b37f24 service_manager::Main()
#14 0x55b427b2cf14 content::ContentMain()
#15 0x55b42bc3c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b42bc3ca42 headless::HeadlessBrowserMain()
#17 0x55b427b34f9d headless::HeadlessShellMain()
#18 0x55b4261931ac ChromeMain
#19 0x7f83de86d2e1 __libc_start_main
#20 0x55b42619302a _start
  r8: 0000000000000000  r9: 00007ffe4e8078d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe4e807fc8 r13: 0000000000000161 r14: 00007ffe4e807fd0 r15: 00007ffe4e807b69
  di: 0000000000000002  si: 00007ffe4e8078d0  bp: 00007ffe4e807b10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f83de87ffff  sp: 00007ffe4e807948
  ip: 00007f83de87ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020921.524787:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558524dd6b0c base::debug::StackTrace::StackTrace()
#1 0x558524def780 logging::LogMessage::~LogMessage()
#2 0x558523e7f2b1 content::ZygoteHostImpl::Init()
#3 0x558523af1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558523af7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558528c219a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558524b11a00 content::RunNamedProcessTypeMain()
#7 0x558524b122e8 content::ContentMainRunnerImpl::Run()
#8 0x558524b1bf24 service_manager::Main()
#9 0x558524b10f14 content::ContentMain()
#10 0x558528c209b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558528c20a42 headless::HeadlessBrowserMain()
#12 0x558524b18f9d headless::HeadlessShellMain()
#13 0x5585231771ac ChromeMain
#14 0x7f27a0e502e1 __libc_start_main
#15 0x55852317702a _start

Received signal 6
#0 0x558524dd6b0c base::debug::StackTrace::StackTrace()
#1 0x558524dd6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f27a6dad0c0 <unknown>
#3 0x7f27a0e62fff gsignal
#4 0x7f27a0e6442a abort
#5 0x558524dd5105 base::debug::BreakDebugger()
#6 0x558524defbca logging::LogMessage::~LogMessage()
#7 0x558523e7f2b1 content::ZygoteHostImpl::Init()
#8 0x558523af1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558523af7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558528c219a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558524b11a00 content::RunNamedProcessTypeMain()
#12 0x558524b122e8 content::ContentMainRunnerImpl::Run()
#13 0x558524b1bf24 service_manager::Main()
#14 0x558524b10f14 content::ContentMain()
#15 0x558528c209b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558528c20a42 headless::HeadlessBrowserMain()
#17 0x558524b18f9d headless::HeadlessShellMain()
#18 0x5585231771ac ChromeMain
#19 0x7f27a0e502e1 __libc_start_main
#20 0x55852317702a _start
  r8: 0000000000000000  r9: 00007fff4d570a70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff4d571168 r13: 0000000000000161 r14: 00007fff4d571170 r15: 00007fff4d570d09
  di: 0000000000000002  si: 00007fff4d570a70  bp: 00007fff4d570cb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f27a0e62fff  sp: 00007fff4d570ae8
  ip: 00007f27a0e62fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020921.524787:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558524dd6b0c base::debug::StackTrace::StackTrace()
#1 0x558524def780 logging::LogMessage::~LogMessage()
#2 0x558523e7f2b1 content::ZygoteHostImpl::Init()
#3 0x558523af1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558523af7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558528c219a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558524b11a00 content::RunNamedProcessTypeMain()
#7 0x558524b122e8 content::ContentMainRunnerImpl::Run()
#8 0x558524b1bf24 service_manager::Main()
#9 0x558524b10f14 content::ContentMain()
#10 0x558528c209b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558528c20a42 headless::HeadlessBrowserMain()
#12 0x558524b18f9d headless::HeadlessShellMain()
#13 0x5585231771ac ChromeMain
#14 0x7f27a0e502e1 __libc_start_main
#15 0x55852317702a _start

Received signal 6
#0 0x558524dd6b0c base::debug::StackTrace::StackTrace()
#1 0x558524dd6671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f27a6dad0c0 <unknown>
#3 0x7f27a0e62fff gsignal
#4 0x7f27a0e6442a abort
#5 0x558524dd5105 base::debug::BreakDebugger()
#6 0x558524defbca logging::LogMessage::~LogMessage()
#7 0x558523e7f2b1 content::ZygoteHostImpl::Init()
#8 0x558523af1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558523af7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558528c219a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558524b11a00 content::RunNamedProcessTypeMain()
#12 0x558524b122e8 content::ContentMainRunnerImpl::Run()
#13 0x558524b1bf24 service_manager::Main()
#14 0x558524b10f14 content::ContentMain()
#15 0x558528c209b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558528c20a42 headless::HeadlessBrowserMain()
#17 0x558524b18f9d headless::HeadlessShellMain()
#18 0x5585231771ac ChromeMain
#19 0x7f27a0e502e1 __libc_start_main
#20 0x55852317702a _start
  r8: 0000000000000000  r9: 00007fff4d570a70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff4d571168 r13: 0000000000000161 r14: 00007fff4d571170 r15: 00007fff4d570d09
  di: 0000000000000002  si: 00007fff4d570a70  bp: 00007fff4d570cb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f27a0e62fff  sp: 00007fff4d570ae8
  ip: 00007f27a0e62fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020903.943489:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e522924b0c base::debug::StackTrace::StackTrace()
#1 0x55e52293d780 logging::LogMessage::~LogMessage()
#2 0x55e5219cd2b1 content::ZygoteHostImpl::Init()
#3 0x55e52163fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e521645a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e52676f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e52265fa00 content::RunNamedProcessTypeMain()
#7 0x55e5226602e8 content::ContentMainRunnerImpl::Run()
#8 0x55e522669f24 service_manager::Main()
#9 0x55e52265ef14 content::ContentMain()
#10 0x55e52676e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e52676ea42 headless::HeadlessBrowserMain()
#12 0x55e522666f9d headless::HeadlessShellMain()
#13 0x55e520cc51ac ChromeMain
#14 0x7fe0351562e1 __libc_start_main
#15 0x55e520cc502a _start

Received signal 6
#0 0x55e522924b0c base::debug::StackTrace::StackTrace()
#1 0x55e522924671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe03b0b30c0 <unknown>
#3 0x7fe035168fff gsignal
#4 0x7fe03516a42a abort
#5 0x55e522923105 base::debug::BreakDebugger()
#6 0x55e52293dbca logging::LogMessage::~LogMessage()
#7 0x55e5219cd2b1 content::ZygoteHostImpl::Init()
#8 0x55e52163fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e521645a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e52676f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e52265fa00 content::RunNamedProcessTypeMain()
#12 0x55e5226602e8 content::ContentMainRunnerImpl::Run()
#13 0x55e522669f24 service_manager::Main()
#14 0x55e52265ef14 content::ContentMain()
#15 0x55e52676e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e52676ea42 headless::HeadlessBrowserMain()
#17 0x55e522666f9d headless::HeadlessShellMain()
#18 0x55e520cc51ac ChromeMain
#19 0x7fe0351562e1 __libc_start_main
#20 0x55e520cc502a _start
  r8: 0000000000000000  r9: 00007fff184a7540 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff184a7c38 r13: 0000000000000161 r14: 00007fff184a7c40 r15: 00007fff184a77d9
  di: 0000000000000002  si: 00007fff184a7540  bp: 00007fff184a7780  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe035168fff  sp: 00007fff184a75b8
  ip: 00007fe035168fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020903.943489:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e522924b0c base::debug::StackTrace::StackTrace()
#1 0x55e52293d780 logging::LogMessage::~LogMessage()
#2 0x55e5219cd2b1 content::ZygoteHostImpl::Init()
#3 0x55e52163fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e521645a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e52676f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e52265fa00 content::RunNamedProcessTypeMain()
#7 0x55e5226602e8 content::ContentMainRunnerImpl::Run()
#8 0x55e522669f24 service_manager::Main()
#9 0x55e52265ef14 content::ContentMain()
#10 0x55e52676e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e52676ea42 headless::HeadlessBrowserMain()
#12 0x55e522666f9d headless::HeadlessShellMain()
#13 0x55e520cc51ac ChromeMain
#14 0x7fe0351562e1 __libc_start_main
#15 0x55e520cc502a _start

Received signal 6
#0 0x55e522924b0c base::debug::StackTrace::StackTrace()
#1 0x55e522924671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe03b0b30c0 <unknown>
#3 0x7fe035168fff gsignal
#4 0x7fe03516a42a abort
#5 0x55e522923105 base::debug::BreakDebugger()
#6 0x55e52293dbca logging::LogMessage::~LogMessage()
#7 0x55e5219cd2b1 content::ZygoteHostImpl::Init()
#8 0x55e52163fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e521645a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e52676f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e52265fa00 content::RunNamedProcessTypeMain()
#12 0x55e5226602e8 content::ContentMainRunnerImpl::Run()
#13 0x55e522669f24 service_manager::Main()
#14 0x55e52265ef14 content::ContentMain()
#15 0x55e52676e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e52676ea42 headless::HeadlessBrowserMain()
#17 0x55e522666f9d headless::HeadlessShellMain()
#18 0x55e520cc51ac ChromeMain
#19 0x7fe0351562e1 __libc_start_main
#20 0x55e520cc502a _start
  r8: 0000000000000000  r9: 00007fff184a7540 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff184a7c38 r13: 0000000000000161 r14: 00007fff184a7c40 r15: 00007fff184a77d9
  di: 0000000000000002  si: 00007fff184a7540  bp: 00007fff184a7780  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe035168fff  sp: 00007fff184a75b8
  ip: 00007fe035168fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020837.305263:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ef8bcfcb0c base::debug::StackTrace::StackTrace()
#1 0x55ef8bd15780 logging::LogMessage::~LogMessage()
#2 0x55ef8ada52b1 content::ZygoteHostImpl::Init()
#3 0x55ef8aa17c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ef8aa1da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ef8fb479a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ef8ba37a00 content::RunNamedProcessTypeMain()
#7 0x55ef8ba382e8 content::ContentMainRunnerImpl::Run()
#8 0x55ef8ba41f24 service_manager::Main()
#9 0x55ef8ba36f14 content::ContentMain()
#10 0x55ef8fb469b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ef8fb46a42 headless::HeadlessBrowserMain()
#12 0x55ef8ba3ef9d headless::HeadlessShellMain()
#13 0x55ef8a09d1ac ChromeMain
#14 0x7f003e5012e1 __libc_start_main
#15 0x55ef8a09d02a _start

Received signal 6
#0 0x55ef8bcfcb0c base::debug::StackTrace::StackTrace()
#1 0x55ef8bcfc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f004445e0c0 <unknown>
#3 0x7f003e513fff gsignal
#4 0x7f003e51542a abort
#5 0x55ef8bcfb105 base::debug::BreakDebugger()
#6 0x55ef8bd15bca logging::LogMessage::~LogMessage()
#7 0x55ef8ada52b1 content::ZygoteHostImpl::Init()
#8 0x55ef8aa17c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ef8aa1da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ef8fb479a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ef8ba37a00 content::RunNamedProcessTypeMain()
#12 0x55ef8ba382e8 content::ContentMainRunnerImpl::Run()
#13 0x55ef8ba41f24 service_manager::Main()
#14 0x55ef8ba36f14 content::ContentMain()
#15 0x55ef8fb469b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ef8fb46a42 headless::HeadlessBrowserMain()
#17 0x55ef8ba3ef9d headless::HeadlessShellMain()
#18 0x55ef8a09d1ac ChromeMain
#19 0x7f003e5012e1 __libc_start_main
#20 0x55ef8a09d02a _start
  r8: 0000000000000000  r9: 00007fffb7c6d920 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffb7c6e018 r13: 0000000000000161 r14: 00007fffb7c6e020 r15: 00007fffb7c6dbb9
  di: 0000000000000002  si: 00007fffb7c6d920  bp: 00007fffb7c6db60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f003e513fff  sp: 00007fffb7c6d998
  ip: 00007f003e513fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020837.305263:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ef8bcfcb0c base::debug::StackTrace::StackTrace()
#1 0x55ef8bd15780 logging::LogMessage::~LogMessage()
#2 0x55ef8ada52b1 content::ZygoteHostImpl::Init()
#3 0x55ef8aa17c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ef8aa1da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ef8fb479a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ef8ba37a00 content::RunNamedProcessTypeMain()
#7 0x55ef8ba382e8 content::ContentMainRunnerImpl::Run()
#8 0x55ef8ba41f24 service_manager::Main()
#9 0x55ef8ba36f14 content::ContentMain()
#10 0x55ef8fb469b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ef8fb46a42 headless::HeadlessBrowserMain()
#12 0x55ef8ba3ef9d headless::HeadlessShellMain()
#13 0x55ef8a09d1ac ChromeMain
#14 0x7f003e5012e1 __libc_start_main
#15 0x55ef8a09d02a _start

Received signal 6
#0 0x55ef8bcfcb0c base::debug::StackTrace::StackTrace()
#1 0x55ef8bcfc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f004445e0c0 <unknown>
#3 0x7f003e513fff gsignal
#4 0x7f003e51542a abort
#5 0x55ef8bcfb105 base::debug::BreakDebugger()
#6 0x55ef8bd15bca logging::LogMessage::~LogMessage()
#7 0x55ef8ada52b1 content::ZygoteHostImpl::Init()
#8 0x55ef8aa17c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ef8aa1da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ef8fb479a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ef8ba37a00 content::RunNamedProcessTypeMain()
#12 0x55ef8ba382e8 content::ContentMainRunnerImpl::Run()
#13 0x55ef8ba41f24 service_manager::Main()
#14 0x55ef8ba36f14 content::ContentMain()
#15 0x55ef8fb469b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ef8fb46a42 headless::HeadlessBrowserMain()
#17 0x55ef8ba3ef9d headless::HeadlessShellMain()
#18 0x55ef8a09d1ac ChromeMain
#19 0x7f003e5012e1 __libc_start_main
#20 0x55ef8a09d02a _start
  r8: 0000000000000000  r9: 00007fffb7c6d920 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffb7c6e018 r13: 0000000000000161 r14: 00007fffb7c6e020 r15: 00007fffb7c6dbb9
  di: 0000000000000002  si: 00007fffb7c6d920  bp: 00007fffb7c6db60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f003e513fff  sp: 00007fffb7c6d998
  ip: 00007f003e513fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020836.898263:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560566d11b0c base::debug::StackTrace::StackTrace()
#1 0x560566d2a780 logging::LogMessage::~LogMessage()
#2 0x560565dba2b1 content::ZygoteHostImpl::Init()
#3 0x560565a2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560565a32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56056ab5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560566a4ca00 content::RunNamedProcessTypeMain()
#7 0x560566a4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x560566a56f24 service_manager::Main()
#9 0x560566a4bf14 content::ContentMain()
#10 0x56056ab5b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56056ab5ba42 headless::HeadlessBrowserMain()
#12 0x560566a53f9d headless::HeadlessShellMain()
#13 0x5605650b21ac ChromeMain
#14 0x7fd5018ed2e1 __libc_start_main
#15 0x5605650b202a _start

Received signal 6
#0 0x560566d11b0c base::debug::StackTrace::StackTrace()
#1 0x560566d11671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd50784a0c0 <unknown>
#3 0x7fd5018fffff gsignal
#4 0x7fd50190142a abort
#5 0x560566d10105 base::debug::BreakDebugger()
#6 0x560566d2abca logging::LogMessage::~LogMessage()
#7 0x560565dba2b1 content::ZygoteHostImpl::Init()
#8 0x560565a2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560565a32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56056ab5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560566a4ca00 content::RunNamedProcessTypeMain()
#12 0x560566a4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x560566a56f24 service_manager::Main()
#14 0x560566a4bf14 content::ContentMain()
#15 0x56056ab5b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56056ab5ba42 headless::HeadlessBrowserMain()
#17 0x560566a53f9d headless::HeadlessShellMain()
#18 0x5605650b21ac ChromeMain
#19 0x7fd5018ed2e1 __libc_start_main
#20 0x5605650b202a _start
  r8: 0000000000000000  r9: 00007ffcdc8d4090 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcdc8d4788 r13: 0000000000000161 r14: 00007ffcdc8d4790 r15: 00007ffcdc8d4329
  di: 0000000000000002  si: 00007ffcdc8d4090  bp: 00007ffcdc8d42d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd5018fffff  sp: 00007ffcdc8d4108
  ip: 00007fd5018fffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020836.898263:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560566d11b0c base::debug::StackTrace::StackTrace()
#1 0x560566d2a780 logging::LogMessage::~LogMessage()
#2 0x560565dba2b1 content::ZygoteHostImpl::Init()
#3 0x560565a2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560565a32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56056ab5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560566a4ca00 content::RunNamedProcessTypeMain()
#7 0x560566a4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x560566a56f24 service_manager::Main()
#9 0x560566a4bf14 content::ContentMain()
#10 0x56056ab5b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56056ab5ba42 headless::HeadlessBrowserMain()
#12 0x560566a53f9d headless::HeadlessShellMain()
#13 0x5605650b21ac ChromeMain
#14 0x7fd5018ed2e1 __libc_start_main
#15 0x5605650b202a _start

Received signal 6
#0 0x560566d11b0c base::debug::StackTrace::StackTrace()
#1 0x560566d11671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd50784a0c0 <unknown>
#3 0x7fd5018fffff gsignal
#4 0x7fd50190142a abort
#5 0x560566d10105 base::debug::BreakDebugger()
#6 0x560566d2abca logging::LogMessage::~LogMessage()
#7 0x560565dba2b1 content::ZygoteHostImpl::Init()
#8 0x560565a2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560565a32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56056ab5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560566a4ca00 content::RunNamedProcessTypeMain()
#12 0x560566a4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x560566a56f24 service_manager::Main()
#14 0x560566a4bf14 content::ContentMain()
#15 0x56056ab5b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56056ab5ba42 headless::HeadlessBrowserMain()
#17 0x560566a53f9d headless::HeadlessShellMain()
#18 0x5605650b21ac ChromeMain
#19 0x7fd5018ed2e1 __libc_start_main
#20 0x5605650b202a _start
  r8: 0000000000000000  r9: 00007ffcdc8d4090 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcdc8d4788 r13: 0000000000000161 r14: 00007ffcdc8d4790 r15: 00007ffcdc8d4329
  di: 0000000000000002  si: 00007ffcdc8d4090  bp: 00007ffcdc8d42d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd5018fffff  sp: 00007ffcdc8d4108
  ip: 00007fd5018fffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020834.191206:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dacc412b0c base::debug::StackTrace::StackTrace()
#1 0x55dacc42b780 logging::LogMessage::~LogMessage()
#2 0x55dacb4bb2b1 content::ZygoteHostImpl::Init()
#3 0x55dacb12dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dacb133a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dad025d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dacc14da00 content::RunNamedProcessTypeMain()
#7 0x55dacc14e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55dacc157f24 service_manager::Main()
#9 0x55dacc14cf14 content::ContentMain()
#10 0x55dad025c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dad025ca42 headless::HeadlessBrowserMain()
#12 0x55dacc154f9d headless::HeadlessShellMain()
#13 0x55daca7b31ac ChromeMain
#14 0x7fc119a712e1 __libc_start_main
#15 0x55daca7b302a _start

Received signal 6
#0 0x55dacc412b0c base::debug::StackTrace::StackTrace()
#1 0x55dacc412671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc11f9ce0c0 <unknown>
#3 0x7fc119a83fff gsignal
#4 0x7fc119a8542a abort
#5 0x55dacc411105 base::debug::BreakDebugger()
#6 0x55dacc42bbca logging::LogMessage::~LogMessage()
#7 0x55dacb4bb2b1 content::ZygoteHostImpl::Init()
#8 0x55dacb12dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dacb133a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dad025d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dacc14da00 content::RunNamedProcessTypeMain()
#12 0x55dacc14e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55dacc157f24 service_manager::Main()
#14 0x55dacc14cf14 content::ContentMain()
#15 0x55dad025c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dad025ca42 headless::HeadlessBrowserMain()
#17 0x55dacc154f9d headless::HeadlessShellMain()
#18 0x55daca7b31ac ChromeMain
#19 0x7fc119a712e1 __libc_start_main
#20 0x55daca7b302a _start
  r8: 0000000000000000  r9: 00007fff58278ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff582791a8 r13: 0000000000000161 r14: 00007fff582791b0 r15: 00007fff58278d49
  di: 0000000000000002  si: 00007fff58278ab0  bp: 00007fff58278cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc119a83fff  sp: 00007fff58278b28
  ip: 00007fc119a83fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020834.191206:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dacc412b0c base::debug::StackTrace::StackTrace()
#1 0x55dacc42b780 logging::LogMessage::~LogMessage()
#2 0x55dacb4bb2b1 content::ZygoteHostImpl::Init()
#3 0x55dacb12dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dacb133a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dad025d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dacc14da00 content::RunNamedProcessTypeMain()
#7 0x55dacc14e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55dacc157f24 service_manager::Main()
#9 0x55dacc14cf14 content::ContentMain()
#10 0x55dad025c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dad025ca42 headless::HeadlessBrowserMain()
#12 0x55dacc154f9d headless::HeadlessShellMain()
#13 0x55daca7b31ac ChromeMain
#14 0x7fc119a712e1 __libc_start_main
#15 0x55daca7b302a _start

Received signal 6
#0 0x55dacc412b0c base::debug::StackTrace::StackTrace()
#1 0x55dacc412671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc11f9ce0c0 <unknown>
#3 0x7fc119a83fff gsignal
#4 0x7fc119a8542a abort
#5 0x55dacc411105 base::debug::BreakDebugger()
#6 0x55dacc42bbca logging::LogMessage::~LogMessage()
#7 0x55dacb4bb2b1 content::ZygoteHostImpl::Init()
#8 0x55dacb12dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dacb133a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dad025d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dacc14da00 content::RunNamedProcessTypeMain()
#12 0x55dacc14e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55dacc157f24 service_manager::Main()
#14 0x55dacc14cf14 content::ContentMain()
#15 0x55dad025c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dad025ca42 headless::HeadlessBrowserMain()
#17 0x55dacc154f9d headless::HeadlessShellMain()
#18 0x55daca7b31ac ChromeMain
#19 0x7fc119a712e1 __libc_start_main
#20 0x55daca7b302a _start
  r8: 0000000000000000  r9: 00007fff58278ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff582791a8 r13: 0000000000000161 r14: 00007fff582791b0 r15: 00007fff58278d49
  di: 0000000000000002  si: 00007fff58278ab0  bp: 00007fff58278cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc119a83fff  sp: 00007fff58278b28
  ip: 00007fc119a83fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020839.814140:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a9d4ac2b0c base::debug::StackTrace::StackTrace()
#1 0x55a9d4adb780 logging::LogMessage::~LogMessage()
#2 0x55a9d3b6b2b1 content::ZygoteHostImpl::Init()
#3 0x55a9d37ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a9d37e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a9d890d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a9d47fda00 content::RunNamedProcessTypeMain()
#7 0x55a9d47fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55a9d4807f24 service_manager::Main()
#9 0x55a9d47fcf14 content::ContentMain()
#10 0x55a9d890c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a9d890ca42 headless::HeadlessBrowserMain()
#12 0x55a9d4804f9d headless::HeadlessShellMain()
#13 0x55a9d2e631ac ChromeMain
#14 0x7f6f8fff62e1 __libc_start_main
#15 0x55a9d2e6302a _start

Received signal 6
#0 0x55a9d4ac2b0c base::debug::StackTrace::StackTrace()
#1 0x55a9d4ac2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6f95f530c0 <unknown>
#3 0x7f6f90008fff gsignal
#4 0x7f6f9000a42a abort
#5 0x55a9d4ac1105 base::debug::BreakDebugger()
#6 0x55a9d4adbbca logging::LogMessage::~LogMessage()
#7 0x55a9d3b6b2b1 content::ZygoteHostImpl::Init()
#8 0x55a9d37ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a9d37e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a9d890d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a9d47fda00 content::RunNamedProcessTypeMain()
#12 0x55a9d47fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55a9d4807f24 service_manager::Main()
#14 0x55a9d47fcf14 content::ContentMain()
#15 0x55a9d890c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a9d890ca42 headless::HeadlessBrowserMain()
#17 0x55a9d4804f9d headless::HeadlessShellMain()
#18 0x55a9d2e631ac ChromeMain
#19 0x7f6f8fff62e1 __libc_start_main
#20 0x55a9d2e6302a _start
  r8: 0000000000000000  r9: 00007ffe428524c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe42852bb8 r13: 0000000000000161 r14: 00007ffe42852bc0 r15: 00007ffe42852759
  di: 0000000000000002  si: 00007ffe428524c0  bp: 00007ffe42852700  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6f90008fff  sp: 00007ffe42852538
  ip: 00007f6f90008fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020839.814140:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a9d4ac2b0c base::debug::StackTrace::StackTrace()
#1 0x55a9d4adb780 logging::LogMessage::~LogMessage()
#2 0x55a9d3b6b2b1 content::ZygoteHostImpl::Init()
#3 0x55a9d37ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a9d37e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a9d890d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a9d47fda00 content::RunNamedProcessTypeMain()
#7 0x55a9d47fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55a9d4807f24 service_manager::Main()
#9 0x55a9d47fcf14 content::ContentMain()
#10 0x55a9d890c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a9d890ca42 headless::HeadlessBrowserMain()
#12 0x55a9d4804f9d headless::HeadlessShellMain()
#13 0x55a9d2e631ac ChromeMain
#14 0x7f6f8fff62e1 __libc_start_main
#15 0x55a9d2e6302a _start

Received signal 6
#0 0x55a9d4ac2b0c base::debug::StackTrace::StackTrace()
#1 0x55a9d4ac2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6f95f530c0 <unknown>
#3 0x7f6f90008fff gsignal
#4 0x7f6f9000a42a abort
#5 0x55a9d4ac1105 base::debug::BreakDebugger()
#6 0x55a9d4adbbca logging::LogMessage::~LogMessage()
#7 0x55a9d3b6b2b1 content::ZygoteHostImpl::Init()
#8 0x55a9d37ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a9d37e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a9d890d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a9d47fda00 content::RunNamedProcessTypeMain()
#12 0x55a9d47fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55a9d4807f24 service_manager::Main()
#14 0x55a9d47fcf14 content::ContentMain()
#15 0x55a9d890c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a9d890ca42 headless::HeadlessBrowserMain()
#17 0x55a9d4804f9d headless::HeadlessShellMain()
#18 0x55a9d2e631ac ChromeMain
#19 0x7f6f8fff62e1 __libc_start_main
#20 0x55a9d2e6302a _start
  r8: 0000000000000000  r9: 00007ffe428524c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe42852bb8 r13: 0000000000000161 r14: 00007ffe42852bc0 r15: 00007ffe42852759
  di: 0000000000000002  si: 00007ffe428524c0  bp: 00007ffe42852700  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6f90008fff  sp: 00007ffe42852538
  ip: 00007f6f90008fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020838.553772:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bf89fa3b0c base::debug::StackTrace::StackTrace()
#1 0x55bf89fbc780 logging::LogMessage::~LogMessage()
#2 0x55bf8904c2b1 content::ZygoteHostImpl::Init()
#3 0x55bf88cbec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bf88cc4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bf8ddee9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bf89cdea00 content::RunNamedProcessTypeMain()
#7 0x55bf89cdf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55bf89ce8f24 service_manager::Main()
#9 0x55bf89cddf14 content::ContentMain()
#10 0x55bf8dded9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bf8ddeda42 headless::HeadlessBrowserMain()
#12 0x55bf89ce5f9d headless::HeadlessShellMain()
#13 0x55bf883441ac ChromeMain
#14 0x7feea783e2e1 __libc_start_main
#15 0x55bf8834402a _start

Received signal 6
#0 0x55bf89fa3b0c base::debug::StackTrace::StackTrace()
#1 0x55bf89fa3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7feead79b0c0 <unknown>
#3 0x7feea7850fff gsignal
#4 0x7feea785242a abort
#5 0x55bf89fa2105 base::debug::BreakDebugger()
#6 0x55bf89fbcbca logging::LogMessage::~LogMessage()
#7 0x55bf8904c2b1 content::ZygoteHostImpl::Init()
#8 0x55bf88cbec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bf88cc4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bf8ddee9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bf89cdea00 content::RunNamedProcessTypeMain()
#12 0x55bf89cdf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55bf89ce8f24 service_manager::Main()
#14 0x55bf89cddf14 content::ContentMain()
#15 0x55bf8dded9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bf8ddeda42 headless::HeadlessBrowserMain()
#17 0x55bf89ce5f9d headless::HeadlessShellMain()
#18 0x55bf883441ac ChromeMain
#19 0x7feea783e2e1 __libc_start_main
#20 0x55bf8834402a _start
  r8: 0000000000000000  r9: 00007ffdb0ca2950 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb0ca3048 r13: 0000000000000161 r14: 00007ffdb0ca3050 r15: 00007ffdb0ca2be9
  di: 0000000000000002  si: 00007ffdb0ca2950  bp: 00007ffdb0ca2b90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007feea7850fff  sp: 00007ffdb0ca29c8
  ip: 00007feea7850fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020838.553772:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bf89fa3b0c base::debug::StackTrace::StackTrace()
#1 0x55bf89fbc780 logging::LogMessage::~LogMessage()
#2 0x55bf8904c2b1 content::ZygoteHostImpl::Init()
#3 0x55bf88cbec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bf88cc4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bf8ddee9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bf89cdea00 content::RunNamedProcessTypeMain()
#7 0x55bf89cdf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55bf89ce8f24 service_manager::Main()
#9 0x55bf89cddf14 content::ContentMain()
#10 0x55bf8dded9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bf8ddeda42 headless::HeadlessBrowserMain()
#12 0x55bf89ce5f9d headless::HeadlessShellMain()
#13 0x55bf883441ac ChromeMain
#14 0x7feea783e2e1 __libc_start_main
#15 0x55bf8834402a _start

Received signal 6
#0 0x55bf89fa3b0c base::debug::StackTrace::StackTrace()
#1 0x55bf89fa3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7feead79b0c0 <unknown>
#3 0x7feea7850fff gsignal
#4 0x7feea785242a abort
#5 0x55bf89fa2105 base::debug::BreakDebugger()
#6 0x55bf89fbcbca logging::LogMessage::~LogMessage()
#7 0x55bf8904c2b1 content::ZygoteHostImpl::Init()
#8 0x55bf88cbec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bf88cc4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bf8ddee9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bf89cdea00 content::RunNamedProcessTypeMain()
#12 0x55bf89cdf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55bf89ce8f24 service_manager::Main()
#14 0x55bf89cddf14 content::ContentMain()
#15 0x55bf8dded9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bf8ddeda42 headless::HeadlessBrowserMain()
#17 0x55bf89ce5f9d headless::HeadlessShellMain()
#18 0x55bf883441ac ChromeMain
#19 0x7feea783e2e1 __libc_start_main
#20 0x55bf8834402a _start
  r8: 0000000000000000  r9: 00007ffdb0ca2950 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb0ca3048 r13: 0000000000000161 r14: 00007ffdb0ca3050 r15: 00007ffdb0ca2be9
  di: 0000000000000002  si: 00007ffdb0ca2950  bp: 00007ffdb0ca2b90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007feea7850fff  sp: 00007ffdb0ca29c8
  ip: 00007feea7850fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020840.079937:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56193a111b0c base::debug::StackTrace::StackTrace()
#1 0x56193a12a780 logging::LogMessage::~LogMessage()
#2 0x5619391ba2b1 content::ZygoteHostImpl::Init()
#3 0x561938e2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561938e32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56193df5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561939e4ca00 content::RunNamedProcessTypeMain()
#7 0x561939e4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x561939e56f24 service_manager::Main()
#9 0x561939e4bf14 content::ContentMain()
#10 0x56193df5b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56193df5ba42 headless::HeadlessBrowserMain()
#12 0x561939e53f9d headless::HeadlessShellMain()
#13 0x5619384b21ac ChromeMain
#14 0x7fefbd1ab2e1 __libc_start_main
#15 0x5619384b202a _start

Received signal 6
#0 0x56193a111b0c base::debug::StackTrace::StackTrace()
#1 0x56193a111671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fefc31080c0 <unknown>
#3 0x7fefbd1bdfff gsignal
#4 0x7fefbd1bf42a abort
#5 0x56193a110105 base::debug::BreakDebugger()
#6 0x56193a12abca logging::LogMessage::~LogMessage()
#7 0x5619391ba2b1 content::ZygoteHostImpl::Init()
#8 0x561938e2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561938e32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56193df5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561939e4ca00 content::RunNamedProcessTypeMain()
#12 0x561939e4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x561939e56f24 service_manager::Main()
#14 0x561939e4bf14 content::ContentMain()
#15 0x56193df5b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56193df5ba42 headless::HeadlessBrowserMain()
#17 0x561939e53f9d headless::HeadlessShellMain()
#18 0x5619384b21ac ChromeMain
#19 0x7fefbd1ab2e1 __libc_start_main
#20 0x5619384b202a _start
  r8: 0000000000000000  r9: 00007ffcc29ca100 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcc29ca7f8 r13: 0000000000000161 r14: 00007ffcc29ca800 r15: 00007ffcc29ca399
  di: 0000000000000002  si: 00007ffcc29ca100  bp: 00007ffcc29ca340  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fefbd1bdfff  sp: 00007ffcc29ca178
  ip: 00007fefbd1bdfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020840.079937:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56193a111b0c base::debug::StackTrace::StackTrace()
#1 0x56193a12a780 logging::LogMessage::~LogMessage()
#2 0x5619391ba2b1 content::ZygoteHostImpl::Init()
#3 0x561938e2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561938e32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56193df5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561939e4ca00 content::RunNamedProcessTypeMain()
#7 0x561939e4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x561939e56f24 service_manager::Main()
#9 0x561939e4bf14 content::ContentMain()
#10 0x56193df5b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56193df5ba42 headless::HeadlessBrowserMain()
#12 0x561939e53f9d headless::HeadlessShellMain()
#13 0x5619384b21ac ChromeMain
#14 0x7fefbd1ab2e1 __libc_start_main
#15 0x5619384b202a _start

Received signal 6
#0 0x56193a111b0c base::debug::StackTrace::StackTrace()
#1 0x56193a111671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fefc31080c0 <unknown>
#3 0x7fefbd1bdfff gsignal
#4 0x7fefbd1bf42a abort
#5 0x56193a110105 base::debug::BreakDebugger()
#6 0x56193a12abca logging::LogMessage::~LogMessage()
#7 0x5619391ba2b1 content::ZygoteHostImpl::Init()
#8 0x561938e2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561938e32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56193df5c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561939e4ca00 content::RunNamedProcessTypeMain()
#12 0x561939e4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x561939e56f24 service_manager::Main()
#14 0x561939e4bf14 content::ContentMain()
#15 0x56193df5b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56193df5ba42 headless::HeadlessBrowserMain()
#17 0x561939e53f9d headless::HeadlessShellMain()
#18 0x5619384b21ac ChromeMain
#19 0x7fefbd1ab2e1 __libc_start_main
#20 0x5619384b202a _start
  r8: 0000000000000000  r9: 00007ffcc29ca100 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcc29ca7f8 r13: 0000000000000161 r14: 00007ffcc29ca800 r15: 00007ffcc29ca399
  di: 0000000000000002  si: 00007ffcc29ca100  bp: 00007ffcc29ca340  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fefbd1bdfff  sp: 00007ffcc29ca178
  ip: 00007fefbd1bdfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020839.867181:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563700d91b0c base::debug::StackTrace::StackTrace()
#1 0x563700daa780 logging::LogMessage::~LogMessage()
#2 0x5636ffe3a2b1 content::ZygoteHostImpl::Init()
#3 0x5636ffaacc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5636ffab2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563704bdc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563700acca00 content::RunNamedProcessTypeMain()
#7 0x563700acd2e8 content::ContentMainRunnerImpl::Run()
#8 0x563700ad6f24 service_manager::Main()
#9 0x563700acbf14 content::ContentMain()
#10 0x563704bdb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563704bdba42 headless::HeadlessBrowserMain()
#12 0x563700ad3f9d headless::HeadlessShellMain()
#13 0x5636ff1321ac ChromeMain
#14 0x7f2ed4a362e1 __libc_start_main
#15 0x5636ff13202a _start

Received signal 6
#0 0x563700d91b0c base::debug::StackTrace::StackTrace()
#1 0x563700d91671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2eda9930c0 <unknown>
#3 0x7f2ed4a48fff gsignal
#4 0x7f2ed4a4a42a abort
#5 0x563700d90105 base::debug::BreakDebugger()
#6 0x563700daabca logging::LogMessage::~LogMessage()
#7 0x5636ffe3a2b1 content::ZygoteHostImpl::Init()
#8 0x5636ffaacc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5636ffab2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563704bdc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563700acca00 content::RunNamedProcessTypeMain()
#12 0x563700acd2e8 content::ContentMainRunnerImpl::Run()
#13 0x563700ad6f24 service_manager::Main()
#14 0x563700acbf14 content::ContentMain()
#15 0x563704bdb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563704bdba42 headless::HeadlessBrowserMain()
#17 0x563700ad3f9d headless::HeadlessShellMain()
#18 0x5636ff1321ac ChromeMain
#19 0x7f2ed4a362e1 __libc_start_main
#20 0x5636ff13202a _start
  r8: 0000000000000000  r9: 00007ffcf2804610 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf2804d08 r13: 0000000000000161 r14: 00007ffcf2804d10 r15: 00007ffcf28048a9
  di: 0000000000000002  si: 00007ffcf2804610  bp: 00007ffcf2804850  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ed4a48fff  sp: 00007ffcf2804688
  ip: 00007f2ed4a48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020839.867181:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563700d91b0c base::debug::StackTrace::StackTrace()
#1 0x563700daa780 logging::LogMessage::~LogMessage()
#2 0x5636ffe3a2b1 content::ZygoteHostImpl::Init()
#3 0x5636ffaacc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5636ffab2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563704bdc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563700acca00 content::RunNamedProcessTypeMain()
#7 0x563700acd2e8 content::ContentMainRunnerImpl::Run()
#8 0x563700ad6f24 service_manager::Main()
#9 0x563700acbf14 content::ContentMain()
#10 0x563704bdb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563704bdba42 headless::HeadlessBrowserMain()
#12 0x563700ad3f9d headless::HeadlessShellMain()
#13 0x5636ff1321ac ChromeMain
#14 0x7f2ed4a362e1 __libc_start_main
#15 0x5636ff13202a _start

Received signal 6
#0 0x563700d91b0c base::debug::StackTrace::StackTrace()
#1 0x563700d91671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2eda9930c0 <unknown>
#3 0x7f2ed4a48fff gsignal
#4 0x7f2ed4a4a42a abort
#5 0x563700d90105 base::debug::BreakDebugger()
#6 0x563700daabca logging::LogMessage::~LogMessage()
#7 0x5636ffe3a2b1 content::ZygoteHostImpl::Init()
#8 0x5636ffaacc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5636ffab2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563704bdc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563700acca00 content::RunNamedProcessTypeMain()
#12 0x563700acd2e8 content::ContentMainRunnerImpl::Run()
#13 0x563700ad6f24 service_manager::Main()
#14 0x563700acbf14 content::ContentMain()
#15 0x563704bdb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563704bdba42 headless::HeadlessBrowserMain()
#17 0x563700ad3f9d headless::HeadlessShellMain()
#18 0x5636ff1321ac ChromeMain
#19 0x7f2ed4a362e1 __libc_start_main
#20 0x5636ff13202a _start
  r8: 0000000000000000  r9: 00007ffcf2804610 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf2804d08 r13: 0000000000000161 r14: 00007ffcf2804d10 r15: 00007ffcf28048a9
  di: 0000000000000002  si: 00007ffcf2804610  bp: 00007ffcf2804850  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ed4a48fff  sp: 00007ffcf2804688
  ip: 00007f2ed4a48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020840.346980:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556fe559db0c base::debug::StackTrace::StackTrace()
#1 0x556fe55b6780 logging::LogMessage::~LogMessage()
#2 0x556fe46462b1 content::ZygoteHostImpl::Init()
#3 0x556fe42b8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556fe42bea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556fe93e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556fe52d8a00 content::RunNamedProcessTypeMain()
#7 0x556fe52d92e8 content::ContentMainRunnerImpl::Run()
#8 0x556fe52e2f24 service_manager::Main()
#9 0x556fe52d7f14 content::ContentMain()
#10 0x556fe93e79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556fe93e7a42 headless::HeadlessBrowserMain()
#12 0x556fe52dff9d headless::HeadlessShellMain()
#13 0x556fe393e1ac ChromeMain
#14 0x7f840b0612e1 __libc_start_main
#15 0x556fe393e02a _start

Received signal 6
#0 0x556fe559db0c base::debug::StackTrace::StackTrace()
#1 0x556fe559d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8410fbe0c0 <unknown>
#3 0x7f840b073fff gsignal
#4 0x7f840b07542a abort
#5 0x556fe559c105 base::debug::BreakDebugger()
#6 0x556fe55b6bca logging::LogMessage::~LogMessage()
#7 0x556fe46462b1 content::ZygoteHostImpl::Init()
#8 0x556fe42b8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556fe42bea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556fe93e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556fe52d8a00 content::RunNamedProcessTypeMain()
#12 0x556fe52d92e8 content::ContentMainRunnerImpl::Run()
#13 0x556fe52e2f24 service_manager::Main()
#14 0x556fe52d7f14 content::ContentMain()
#15 0x556fe93e79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556fe93e7a42 headless::HeadlessBrowserMain()
#17 0x556fe52dff9d headless::HeadlessShellMain()
#18 0x556fe393e1ac ChromeMain
#19 0x7f840b0612e1 __libc_start_main
#20 0x556fe393e02a _start
  r8: 0000000000000000  r9: 00007fffd444d8e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd444dfd8 r13: 0000000000000161 r14: 00007fffd444dfe0 r15: 00007fffd444db79
  di: 0000000000000002  si: 00007fffd444d8e0  bp: 00007fffd444db20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f840b073fff  sp: 00007fffd444d958
  ip: 00007f840b073fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020840.346980:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556fe559db0c base::debug::StackTrace::StackTrace()
#1 0x556fe55b6780 logging::LogMessage::~LogMessage()
#2 0x556fe46462b1 content::ZygoteHostImpl::Init()
#3 0x556fe42b8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556fe42bea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556fe93e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556fe52d8a00 content::RunNamedProcessTypeMain()
#7 0x556fe52d92e8 content::ContentMainRunnerImpl::Run()
#8 0x556fe52e2f24 service_manager::Main()
#9 0x556fe52d7f14 content::ContentMain()
#10 0x556fe93e79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556fe93e7a42 headless::HeadlessBrowserMain()
#12 0x556fe52dff9d headless::HeadlessShellMain()
#13 0x556fe393e1ac ChromeMain
#14 0x7f840b0612e1 __libc_start_main
#15 0x556fe393e02a _start

Received signal 6
#0 0x556fe559db0c base::debug::StackTrace::StackTrace()
#1 0x556fe559d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8410fbe0c0 <unknown>
#3 0x7f840b073fff gsignal
#4 0x7f840b07542a abort
#5 0x556fe559c105 base::debug::BreakDebugger()
#6 0x556fe55b6bca logging::LogMessage::~LogMessage()
#7 0x556fe46462b1 content::ZygoteHostImpl::Init()
#8 0x556fe42b8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556fe42bea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556fe93e89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556fe52d8a00 content::RunNamedProcessTypeMain()
#12 0x556fe52d92e8 content::ContentMainRunnerImpl::Run()
#13 0x556fe52e2f24 service_manager::Main()
#14 0x556fe52d7f14 content::ContentMain()
#15 0x556fe93e79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556fe93e7a42 headless::HeadlessBrowserMain()
#17 0x556fe52dff9d headless::HeadlessShellMain()
#18 0x556fe393e1ac ChromeMain
#19 0x7f840b0612e1 __libc_start_main
#20 0x556fe393e02a _start
  r8: 0000000000000000  r9: 00007fffd444d8e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd444dfd8 r13: 0000000000000161 r14: 00007fffd444dfe0 r15: 00007fffd444db79
  di: 0000000000000002  si: 00007fffd444d8e0  bp: 00007fffd444db20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f840b073fff  sp: 00007fffd444d958
  ip: 00007f840b073fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020842.636927:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564489912b0c base::debug::StackTrace::StackTrace()
#1 0x56448992b780 logging::LogMessage::~LogMessage()
#2 0x5644889bb2b1 content::ZygoteHostImpl::Init()
#3 0x56448862dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564488633a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56448d75d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56448964da00 content::RunNamedProcessTypeMain()
#7 0x56448964e2e8 content::ContentMainRunnerImpl::Run()
#8 0x564489657f24 service_manager::Main()
#9 0x56448964cf14 content::ContentMain()
#10 0x56448d75c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56448d75ca42 headless::HeadlessBrowserMain()
#12 0x564489654f9d headless::HeadlessShellMain()
#13 0x564487cb31ac ChromeMain
#14 0x7fa66c09f2e1 __libc_start_main
#15 0x564487cb302a _start

Received signal 6
#0 0x564489912b0c base::debug::StackTrace::StackTrace()
#1 0x564489912671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa671ffc0c0 <unknown>
#3 0x7fa66c0b1fff gsignal
#4 0x7fa66c0b342a abort
#5 0x564489911105 base::debug::BreakDebugger()
#6 0x56448992bbca logging::LogMessage::~LogMessage()
#7 0x5644889bb2b1 content::ZygoteHostImpl::Init()
#8 0x56448862dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564488633a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56448d75d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56448964da00 content::RunNamedProcessTypeMain()
#12 0x56448964e2e8 content::ContentMainRunnerImpl::Run()
#13 0x564489657f24 service_manager::Main()
#14 0x56448964cf14 content::ContentMain()
#15 0x56448d75c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56448d75ca42 headless::HeadlessBrowserMain()
#17 0x564489654f9d headless::HeadlessShellMain()
#18 0x564487cb31ac ChromeMain
#19 0x7fa66c09f2e1 __libc_start_main
#20 0x564487cb302a _start
  r8: 0000000000000000  r9: 00007ffd303df6e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd303dfdd8 r13: 0000000000000161 r14: 00007ffd303dfde0 r15: 00007ffd303df979
  di: 0000000000000002  si: 00007ffd303df6e0  bp: 00007ffd303df920  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa66c0b1fff  sp: 00007ffd303df758
  ip: 00007fa66c0b1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020842.636927:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564489912b0c base::debug::StackTrace::StackTrace()
#1 0x56448992b780 logging::LogMessage::~LogMessage()
#2 0x5644889bb2b1 content::ZygoteHostImpl::Init()
#3 0x56448862dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564488633a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56448d75d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56448964da00 content::RunNamedProcessTypeMain()
#7 0x56448964e2e8 content::ContentMainRunnerImpl::Run()
#8 0x564489657f24 service_manager::Main()
#9 0x56448964cf14 content::ContentMain()
#10 0x56448d75c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56448d75ca42 headless::HeadlessBrowserMain()
#12 0x564489654f9d headless::HeadlessShellMain()
#13 0x564487cb31ac ChromeMain
#14 0x7fa66c09f2e1 __libc_start_main
#15 0x564487cb302a _start

Received signal 6
#0 0x564489912b0c base::debug::StackTrace::StackTrace()
#1 0x564489912671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa671ffc0c0 <unknown>
#3 0x7fa66c0b1fff gsignal
#4 0x7fa66c0b342a abort
#5 0x564489911105 base::debug::BreakDebugger()
#6 0x56448992bbca logging::LogMessage::~LogMessage()
#7 0x5644889bb2b1 content::ZygoteHostImpl::Init()
#8 0x56448862dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564488633a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56448d75d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56448964da00 content::RunNamedProcessTypeMain()
#12 0x56448964e2e8 content::ContentMainRunnerImpl::Run()
#13 0x564489657f24 service_manager::Main()
#14 0x56448964cf14 content::ContentMain()
#15 0x56448d75c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56448d75ca42 headless::HeadlessBrowserMain()
#17 0x564489654f9d headless::HeadlessShellMain()
#18 0x564487cb31ac ChromeMain
#19 0x7fa66c09f2e1 __libc_start_main
#20 0x564487cb302a _start
  r8: 0000000000000000  r9: 00007ffd303df6e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd303dfdd8 r13: 0000000000000161 r14: 00007ffd303dfde0 r15: 00007ffd303df979
  di: 0000000000000002  si: 00007ffd303df6e0  bp: 00007ffd303df920  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa66c0b1fff  sp: 00007ffd303df758
  ip: 00007fa66c0b1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-pointerevents2-20180510/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Shortname: pointerevents2

### Potential issue(s) {.anomalies}

The following network or parsing error occurred:
`Error: Failed to launch chrome!
[0511/020842.850651:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a1940ecb0c base::debug::StackTrace::StackTrace()
#1 0x55a194105780 logging::LogMessage::~LogMessage()
#2 0x55a1931952b1 content::ZygoteHostImpl::Init()
#3 0x55a192e07c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a192e0da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a197f379a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a193e27a00 content::RunNamedProcessTypeMain()
#7 0x55a193e282e8 content::ContentMainRunnerImpl::Run()
#8 0x55a193e31f24 service_manager::Main()
#9 0x55a193e26f14 content::ContentMain()
#10 0x55a197f369b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a197f36a42 headless::HeadlessBrowserMain()
#12 0x55a193e2ef9d headless::HeadlessShellMain()
#13 0x55a19248d1ac ChromeMain
#14 0x7ff00f8c22e1 __libc_start_main
#15 0x55a19248d02a _start

Received signal 6
#0 0x55a1940ecb0c base::debug::StackTrace::StackTrace()
#1 0x55a1940ec671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff01581f0c0 <unknown>
#3 0x7ff00f8d4fff gsignal
#4 0x7ff00f8d642a abort
#5 0x55a1940eb105 base::debug::BreakDebugger()
#6 0x55a194105bca logging::LogMessage::~LogMessage()
#7 0x55a1931952b1 content::ZygoteHostImpl::Init()
#8 0x55a192e07c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a192e0da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a197f379a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a193e27a00 content::RunNamedProcessTypeMain()
#12 0x55a193e282e8 content::ContentMainRunnerImpl::Run()
#13 0x55a193e31f24 service_manager::Main()
#14 0x55a193e26f14 content::ContentMain()
#15 0x55a197f369b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a197f36a42 headless::HeadlessBrowserMain()
#17 0x55a193e2ef9d headless::HeadlessShellMain()
#18 0x55a19248d1ac ChromeMain
#19 0x7ff00f8c22e1 __libc_start_main
#20 0x55a19248d02a _start
  r8: 0000000000000000  r9: 00007ffff50a9ec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffff50aa5b8 r13: 0000000000000161 r14: 00007ffff50aa5c0 r15: 00007ffff50aa159
  di: 0000000000000002  si: 00007ffff50a9ec0  bp: 00007ffff50aa100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff00f8d4fff  sp: 00007ffff50a9f38
  ip: 00007ff00f8d4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020842.850651:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a1940ecb0c base::debug::StackTrace::StackTrace()
#1 0x55a194105780 logging::LogMessage::~LogMessage()
#2 0x55a1931952b1 content::ZygoteHostImpl::Init()
#3 0x55a192e07c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a192e0da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a197f379a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a193e27a00 content::RunNamedProcessTypeMain()
#7 0x55a193e282e8 content::ContentMainRunnerImpl::Run()
#8 0x55a193e31f24 service_manager::Main()
#9 0x55a193e26f14 content::ContentMain()
#10 0x55a197f369b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a197f36a42 headless::HeadlessBrowserMain()
#12 0x55a193e2ef9d headless::HeadlessShellMain()
#13 0x55a19248d1ac ChromeMain
#14 0x7ff00f8c22e1 __libc_start_main
#15 0x55a19248d02a _start

Received signal 6
#0 0x55a1940ecb0c base::debug::StackTrace::StackTrace()
#1 0x55a1940ec671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff01581f0c0 <unknown>
#3 0x7ff00f8d4fff gsignal
#4 0x7ff00f8d642a abort
#5 0x55a1940eb105 base::debug::BreakDebugger()
#6 0x55a194105bca logging::LogMessage::~LogMessage()
#7 0x55a1931952b1 content::ZygoteHostImpl::Init()
#8 0x55a192e07c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a192e0da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a197f379a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a193e27a00 content::RunNamedProcessTypeMain()
#12 0x55a193e282e8 content::ContentMainRunnerImpl::Run()
#13 0x55a193e31f24 service_manager::Main()
#14 0x55a193e26f14 content::ContentMain()
#15 0x55a197f369b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a197f36a42 headless::HeadlessBrowserMain()
#17 0x55a193e2ef9d headless::HeadlessShellMain()
#18 0x55a19248d1ac ChromeMain
#19 0x7ff00f8c22e1 __libc_start_main
#20 0x55a19248d02a _start
  r8: 0000000000000000  r9: 00007ffff50a9ec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffff50aa5b8 r13: 0000000000000161 r14: 00007ffff50aa5c0 r15: 00007ffff50aa159
  di: 0000000000000002  si: 00007ffff50a9ec0  bp: 00007ffff50aa100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff00f8d4fff  sp: 00007ffff50a9f38
  ip: 00007ff00f8d4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020843.340901:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5580c1210b0c base::debug::StackTrace::StackTrace()
#1 0x5580c1229780 logging::LogMessage::~LogMessage()
#2 0x5580c02b92b1 content::ZygoteHostImpl::Init()
#3 0x5580bff2bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5580bff31a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5580c505b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5580c0f4ba00 content::RunNamedProcessTypeMain()
#7 0x5580c0f4c2e8 content::ContentMainRunnerImpl::Run()
#8 0x5580c0f55f24 service_manager::Main()
#9 0x5580c0f4af14 content::ContentMain()
#10 0x5580c505a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5580c505aa42 headless::HeadlessBrowserMain()
#12 0x5580c0f52f9d headless::HeadlessShellMain()
#13 0x5580bf5b11ac ChromeMain
#14 0x7f77046712e1 __libc_start_main
#15 0x5580bf5b102a _start

Received signal 6
#0 0x5580c1210b0c base::debug::StackTrace::StackTrace()
#1 0x5580c1210671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f770a5ce0c0 <unknown>
#3 0x7f7704683fff gsignal
#4 0x7f770468542a abort
#5 0x5580c120f105 base::debug::BreakDebugger()
#6 0x5580c1229bca logging::LogMessage::~LogMessage()
#7 0x5580c02b92b1 content::ZygoteHostImpl::Init()
#8 0x5580bff2bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5580bff31a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5580c505b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5580c0f4ba00 content::RunNamedProcessTypeMain()
#12 0x5580c0f4c2e8 content::ContentMainRunnerImpl::Run()
#13 0x5580c0f55f24 service_manager::Main()
#14 0x5580c0f4af14 content::ContentMain()
#15 0x5580c505a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5580c505aa42 headless::HeadlessBrowserMain()
#17 0x5580c0f52f9d headless::HeadlessShellMain()
#18 0x5580bf5b11ac ChromeMain
#19 0x7f77046712e1 __libc_start_main
#20 0x5580bf5b102a _start
  r8: 0000000000000000  r9: 00007fff46062760 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff46062e58 r13: 0000000000000161 r14: 00007fff46062e60 r15: 00007fff460629f9
  di: 0000000000000002  si: 00007fff46062760  bp: 00007fff460629a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7704683fff  sp: 00007fff460627d8
  ip: 00007f7704683fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020843.340901:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5580c1210b0c base::debug::StackTrace::StackTrace()
#1 0x5580c1229780 logging::LogMessage::~LogMessage()
#2 0x5580c02b92b1 content::ZygoteHostImpl::Init()
#3 0x5580bff2bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5580bff31a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5580c505b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5580c0f4ba00 content::RunNamedProcessTypeMain()
#7 0x5580c0f4c2e8 content::ContentMainRunnerImpl::Run()
#8 0x5580c0f55f24 service_manager::Main()
#9 0x5580c0f4af14 content::ContentMain()
#10 0x5580c505a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5580c505aa42 headless::HeadlessBrowserMain()
#12 0x5580c0f52f9d headless::HeadlessShellMain()
#13 0x5580bf5b11ac ChromeMain
#14 0x7f77046712e1 __libc_start_main
#15 0x5580bf5b102a _start

Received signal 6
#0 0x5580c1210b0c base::debug::StackTrace::StackTrace()
#1 0x5580c1210671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f770a5ce0c0 <unknown>
#3 0x7f7704683fff gsignal
#4 0x7f770468542a abort
#5 0x5580c120f105 base::debug::BreakDebugger()
#6 0x5580c1229bca logging::LogMessage::~LogMessage()
#7 0x5580c02b92b1 content::ZygoteHostImpl::Init()
#8 0x5580bff2bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5580bff31a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5580c505b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5580c0f4ba00 content::RunNamedProcessTypeMain()
#12 0x5580c0f4c2e8 content::ContentMainRunnerImpl::Run()
#13 0x5580c0f55f24 service_manager::Main()
#14 0x5580c0f4af14 content::ContentMain()
#15 0x5580c505a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5580c505aa42 headless::HeadlessBrowserMain()
#17 0x5580c0f52f9d headless::HeadlessShellMain()
#18 0x5580bf5b11ac ChromeMain
#19 0x7f77046712e1 __libc_start_main
#20 0x5580bf5b102a _start
  r8: 0000000000000000  r9: 00007fff46062760 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff46062e58 r13: 0000000000000161 r14: 00007fff46062e60 r15: 00007fff460629f9
  di: 0000000000000002  si: 00007fff46062760  bp: 00007fff460629a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7704683fff  sp: 00007fff460627d8
  ip: 00007f7704683fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020844.284139:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e0f9a09b0c base::debug::StackTrace::StackTrace()
#1 0x55e0f9a22780 logging::LogMessage::~LogMessage()
#2 0x55e0f8ab22b1 content::ZygoteHostImpl::Init()
#3 0x55e0f8724c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e0f872aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e0fd8549a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e0f9744a00 content::RunNamedProcessTypeMain()
#7 0x55e0f97452e8 content::ContentMainRunnerImpl::Run()
#8 0x55e0f974ef24 service_manager::Main()
#9 0x55e0f9743f14 content::ContentMain()
#10 0x55e0fd8539b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e0fd853a42 headless::HeadlessBrowserMain()
#12 0x55e0f974bf9d headless::HeadlessShellMain()
#13 0x55e0f7daa1ac ChromeMain
#14 0x7f92263c82e1 __libc_start_main
#15 0x55e0f7daa02a _start

Received signal 6
#0 0x55e0f9a09b0c base::debug::StackTrace::StackTrace()
#1 0x55e0f9a09671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f922c3250c0 <unknown>
#3 0x7f92263dafff gsignal
#4 0x7f92263dc42a abort
#5 0x55e0f9a08105 base::debug::BreakDebugger()
#6 0x55e0f9a22bca logging::LogMessage::~LogMessage()
#7 0x55e0f8ab22b1 content::ZygoteHostImpl::Init()
#8 0x55e0f8724c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e0f872aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e0fd8549a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e0f9744a00 content::RunNamedProcessTypeMain()
#12 0x55e0f97452e8 content::ContentMainRunnerImpl::Run()
#13 0x55e0f974ef24 service_manager::Main()
#14 0x55e0f9743f14 content::ContentMain()
#15 0x55e0fd8539b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e0fd853a42 headless::HeadlessBrowserMain()
#17 0x55e0f974bf9d headless::HeadlessShellMain()
#18 0x55e0f7daa1ac ChromeMain
#19 0x7f92263c82e1 __libc_start_main
#20 0x55e0f7daa02a _start
  r8: 0000000000000000  r9: 00007ffc4be38190 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc4be38888 r13: 0000000000000161 r14: 00007ffc4be38890 r15: 00007ffc4be38429
  di: 0000000000000002  si: 00007ffc4be38190  bp: 00007ffc4be383d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92263dafff  sp: 00007ffc4be38208
  ip: 00007f92263dafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020844.284139:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e0f9a09b0c base::debug::StackTrace::StackTrace()
#1 0x55e0f9a22780 logging::LogMessage::~LogMessage()
#2 0x55e0f8ab22b1 content::ZygoteHostImpl::Init()
#3 0x55e0f8724c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e0f872aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e0fd8549a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e0f9744a00 content::RunNamedProcessTypeMain()
#7 0x55e0f97452e8 content::ContentMainRunnerImpl::Run()
#8 0x55e0f974ef24 service_manager::Main()
#9 0x55e0f9743f14 content::ContentMain()
#10 0x55e0fd8539b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e0fd853a42 headless::HeadlessBrowserMain()
#12 0x55e0f974bf9d headless::HeadlessShellMain()
#13 0x55e0f7daa1ac ChromeMain
#14 0x7f92263c82e1 __libc_start_main
#15 0x55e0f7daa02a _start

Received signal 6
#0 0x55e0f9a09b0c base::debug::StackTrace::StackTrace()
#1 0x55e0f9a09671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f922c3250c0 <unknown>
#3 0x7f92263dafff gsignal
#4 0x7f92263dc42a abort
#5 0x55e0f9a08105 base::debug::BreakDebugger()
#6 0x55e0f9a22bca logging::LogMessage::~LogMessage()
#7 0x55e0f8ab22b1 content::ZygoteHostImpl::Init()
#8 0x55e0f8724c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e0f872aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e0fd8549a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e0f9744a00 content::RunNamedProcessTypeMain()
#12 0x55e0f97452e8 content::ContentMainRunnerImpl::Run()
#13 0x55e0f974ef24 service_manager::Main()
#14 0x55e0f9743f14 content::ContentMain()
#15 0x55e0fd8539b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e0fd853a42 headless::HeadlessBrowserMain()
#17 0x55e0f974bf9d headless::HeadlessShellMain()
#18 0x55e0f7daa1ac ChromeMain
#19 0x7f92263c82e1 __libc_start_main
#20 0x55e0f7daa02a _start
  r8: 0000000000000000  r9: 00007ffc4be38190 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc4be38888 r13: 0000000000000161 r14: 00007ffc4be38890 r15: 00007ffc4be38429
  di: 0000000000000002  si: 00007ffc4be38190  bp: 00007ffc4be383d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92263dafff  sp: 00007ffc4be38208
  ip: 00007f92263dafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020844.221061:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557ace3a7b0c base::debug::StackTrace::StackTrace()
#1 0x557ace3c0780 logging::LogMessage::~LogMessage()
#2 0x557acd4502b1 content::ZygoteHostImpl::Init()
#3 0x557acd0c2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557acd0c8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557ad21f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557ace0e2a00 content::RunNamedProcessTypeMain()
#7 0x557ace0e32e8 content::ContentMainRunnerImpl::Run()
#8 0x557ace0ecf24 service_manager::Main()
#9 0x557ace0e1f14 content::ContentMain()
#10 0x557ad21f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557ad21f1a42 headless::HeadlessBrowserMain()
#12 0x557ace0e9f9d headless::HeadlessShellMain()
#13 0x557acc7481ac ChromeMain
#14 0x7ffb8f9472e1 __libc_start_main
#15 0x557acc74802a _start

Received signal 6
#0 0x557ace3a7b0c base::debug::StackTrace::StackTrace()
#1 0x557ace3a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ffb958a40c0 <unknown>
#3 0x7ffb8f959fff gsignal
#4 0x7ffb8f95b42a abort
#5 0x557ace3a6105 base::debug::BreakDebugger()
#6 0x557ace3c0bca logging::LogMessage::~LogMessage()
#7 0x557acd4502b1 content::ZygoteHostImpl::Init()
#8 0x557acd0c2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557acd0c8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557ad21f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557ace0e2a00 content::RunNamedProcessTypeMain()
#12 0x557ace0e32e8 content::ContentMainRunnerImpl::Run()
#13 0x557ace0ecf24 service_manager::Main()
#14 0x557ace0e1f14 content::ContentMain()
#15 0x557ad21f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557ad21f1a42 headless::HeadlessBrowserMain()
#17 0x557ace0e9f9d headless::HeadlessShellMain()
#18 0x557acc7481ac ChromeMain
#19 0x7ffb8f9472e1 __libc_start_main
#20 0x557acc74802a _start
  r8: 0000000000000000  r9: 00007fffde3e9340 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffde3e9a38 r13: 0000000000000161 r14: 00007fffde3e9a40 r15: 00007fffde3e95d9
  di: 0000000000000002  si: 00007fffde3e9340  bp: 00007fffde3e9580  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ffb8f959fff  sp: 00007fffde3e93b8
  ip: 00007ffb8f959fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020844.221061:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557ace3a7b0c base::debug::StackTrace::StackTrace()
#1 0x557ace3c0780 logging::LogMessage::~LogMessage()
#2 0x557acd4502b1 content::ZygoteHostImpl::Init()
#3 0x557acd0c2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557acd0c8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557ad21f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557ace0e2a00 content::RunNamedProcessTypeMain()
#7 0x557ace0e32e8 content::ContentMainRunnerImpl::Run()
#8 0x557ace0ecf24 service_manager::Main()
#9 0x557ace0e1f14 content::ContentMain()
#10 0x557ad21f19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557ad21f1a42 headless::HeadlessBrowserMain()
#12 0x557ace0e9f9d headless::HeadlessShellMain()
#13 0x557acc7481ac ChromeMain
#14 0x7ffb8f9472e1 __libc_start_main
#15 0x557acc74802a _start

Received signal 6
#0 0x557ace3a7b0c base::debug::StackTrace::StackTrace()
#1 0x557ace3a7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ffb958a40c0 <unknown>
#3 0x7ffb8f959fff gsignal
#4 0x7ffb8f95b42a abort
#5 0x557ace3a6105 base::debug::BreakDebugger()
#6 0x557ace3c0bca logging::LogMessage::~LogMessage()
#7 0x557acd4502b1 content::ZygoteHostImpl::Init()
#8 0x557acd0c2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557acd0c8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557ad21f29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557ace0e2a00 content::RunNamedProcessTypeMain()
#12 0x557ace0e32e8 content::ContentMainRunnerImpl::Run()
#13 0x557ace0ecf24 service_manager::Main()
#14 0x557ace0e1f14 content::ContentMain()
#15 0x557ad21f19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557ad21f1a42 headless::HeadlessBrowserMain()
#17 0x557ace0e9f9d headless::HeadlessShellMain()
#18 0x557acc7481ac ChromeMain
#19 0x7ffb8f9472e1 __libc_start_main
#20 0x557acc74802a _start
  r8: 0000000000000000  r9: 00007fffde3e9340 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffde3e9a38 r13: 0000000000000161 r14: 00007fffde3e9a40 r15: 00007fffde3e95d9
  di: 0000000000000002  si: 00007fffde3e9340  bp: 00007fffde3e9580  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ffb8f959fff  sp: 00007fffde3e93b8
  ip: 00007ffb8f959fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020843.743453:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cd47bc1b0c base::debug::StackTrace::StackTrace()
#1 0x55cd47bda780 logging::LogMessage::~LogMessage()
#2 0x55cd46c6a2b1 content::ZygoteHostImpl::Init()
#3 0x55cd468dcc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cd468e2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cd4ba0c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cd478fca00 content::RunNamedProcessTypeMain()
#7 0x55cd478fd2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cd47906f24 service_manager::Main()
#9 0x55cd478fbf14 content::ContentMain()
#10 0x55cd4ba0b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cd4ba0ba42 headless::HeadlessBrowserMain()
#12 0x55cd47903f9d headless::HeadlessShellMain()
#13 0x55cd45f621ac ChromeMain
#14 0x7f3e86ace2e1 __libc_start_main
#15 0x55cd45f6202a _start

Received signal 6
#0 0x55cd47bc1b0c base::debug::StackTrace::StackTrace()
#1 0x55cd47bc1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3e8ca2b0c0 <unknown>
#3 0x7f3e86ae0fff gsignal
#4 0x7f3e86ae242a abort
#5 0x55cd47bc0105 base::debug::BreakDebugger()
#6 0x55cd47bdabca logging::LogMessage::~LogMessage()
#7 0x55cd46c6a2b1 content::ZygoteHostImpl::Init()
#8 0x55cd468dcc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cd468e2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cd4ba0c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cd478fca00 content::RunNamedProcessTypeMain()
#12 0x55cd478fd2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cd47906f24 service_manager::Main()
#14 0x55cd478fbf14 content::ContentMain()
#15 0x55cd4ba0b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cd4ba0ba42 headless::HeadlessBrowserMain()
#17 0x55cd47903f9d headless::HeadlessShellMain()
#18 0x55cd45f621ac ChromeMain
#19 0x7f3e86ace2e1 __libc_start_main
#20 0x55cd45f6202a _start
  r8: 0000000000000000  r9: 00007ffc97477380 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc97477a78 r13: 0000000000000161 r14: 00007ffc97477a80 r15: 00007ffc97477619
  di: 0000000000000002  si: 00007ffc97477380  bp: 00007ffc974775c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3e86ae0fff  sp: 00007ffc974773f8
  ip: 00007f3e86ae0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020843.743453:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cd47bc1b0c base::debug::StackTrace::StackTrace()
#1 0x55cd47bda780 logging::LogMessage::~LogMessage()
#2 0x55cd46c6a2b1 content::ZygoteHostImpl::Init()
#3 0x55cd468dcc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cd468e2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cd4ba0c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cd478fca00 content::RunNamedProcessTypeMain()
#7 0x55cd478fd2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cd47906f24 service_manager::Main()
#9 0x55cd478fbf14 content::ContentMain()
#10 0x55cd4ba0b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cd4ba0ba42 headless::HeadlessBrowserMain()
#12 0x55cd47903f9d headless::HeadlessShellMain()
#13 0x55cd45f621ac ChromeMain
#14 0x7f3e86ace2e1 __libc_start_main
#15 0x55cd45f6202a _start

Received signal 6
#0 0x55cd47bc1b0c base::debug::StackTrace::StackTrace()
#1 0x55cd47bc1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3e8ca2b0c0 <unknown>
#3 0x7f3e86ae0fff gsignal
#4 0x7f3e86ae242a abort
#5 0x55cd47bc0105 base::debug::BreakDebugger()
#6 0x55cd47bdabca logging::LogMessage::~LogMessage()
#7 0x55cd46c6a2b1 content::ZygoteHostImpl::Init()
#8 0x55cd468dcc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cd468e2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cd4ba0c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cd478fca00 content::RunNamedProcessTypeMain()
#12 0x55cd478fd2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cd47906f24 service_manager::Main()
#14 0x55cd478fbf14 content::ContentMain()
#15 0x55cd4ba0b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cd4ba0ba42 headless::HeadlessBrowserMain()
#17 0x55cd47903f9d headless::HeadlessShellMain()
#18 0x55cd45f621ac ChromeMain
#19 0x7f3e86ace2e1 __libc_start_main
#20 0x55cd45f6202a _start
  r8: 0000000000000000  r9: 00007ffc97477380 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc97477a78 r13: 0000000000000161 r14: 00007ffc97477a80 r15: 00007ffc97477619
  di: 0000000000000002  si: 00007ffc97477380  bp: 00007ffc974775c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3e86ae0fff  sp: 00007ffc974773f8
  ip: 00007f3e86ae0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020844.586328:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557d9e5efb0c base::debug::StackTrace::StackTrace()
#1 0x557d9e608780 logging::LogMessage::~LogMessage()
#2 0x557d9d6982b1 content::ZygoteHostImpl::Init()
#3 0x557d9d30ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557d9d310a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557da243a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557d9e32aa00 content::RunNamedProcessTypeMain()
#7 0x557d9e32b2e8 content::ContentMainRunnerImpl::Run()
#8 0x557d9e334f24 service_manager::Main()
#9 0x557d9e329f14 content::ContentMain()
#10 0x557da24399b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557da2439a42 headless::HeadlessBrowserMain()
#12 0x557d9e331f9d headless::HeadlessShellMain()
#13 0x557d9c9901ac ChromeMain
#14 0x7f8c457122e1 __libc_start_main
#15 0x557d9c99002a _start

Received signal 6
#0 0x557d9e5efb0c base::debug::StackTrace::StackTrace()
#1 0x557d9e5ef671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8c4b66f0c0 <unknown>
#3 0x7f8c45724fff gsignal
#4 0x7f8c4572642a abort
#5 0x557d9e5ee105 base::debug::BreakDebugger()
#6 0x557d9e608bca logging::LogMessage::~LogMessage()
#7 0x557d9d6982b1 content::ZygoteHostImpl::Init()
#8 0x557d9d30ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557d9d310a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557da243a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557d9e32aa00 content::RunNamedProcessTypeMain()
#12 0x557d9e32b2e8 content::ContentMainRunnerImpl::Run()
#13 0x557d9e334f24 service_manager::Main()
#14 0x557d9e329f14 content::ContentMain()
#15 0x557da24399b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557da2439a42 headless::HeadlessBrowserMain()
#17 0x557d9e331f9d headless::HeadlessShellMain()
#18 0x557d9c9901ac ChromeMain
#19 0x7f8c457122e1 __libc_start_main
#20 0x557d9c99002a _start
  r8: 0000000000000000  r9: 00007fff603db790 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff603dbe88 r13: 0000000000000161 r14: 00007fff603dbe90 r15: 00007fff603dba29
  di: 0000000000000002  si: 00007fff603db790  bp: 00007fff603db9d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8c45724fff  sp: 00007fff603db808
  ip: 00007f8c45724fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020844.586328:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557d9e5efb0c base::debug::StackTrace::StackTrace()
#1 0x557d9e608780 logging::LogMessage::~LogMessage()
#2 0x557d9d6982b1 content::ZygoteHostImpl::Init()
#3 0x557d9d30ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557d9d310a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557da243a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557d9e32aa00 content::RunNamedProcessTypeMain()
#7 0x557d9e32b2e8 content::ContentMainRunnerImpl::Run()
#8 0x557d9e334f24 service_manager::Main()
#9 0x557d9e329f14 content::ContentMain()
#10 0x557da24399b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557da2439a42 headless::HeadlessBrowserMain()
#12 0x557d9e331f9d headless::HeadlessShellMain()
#13 0x557d9c9901ac ChromeMain
#14 0x7f8c457122e1 __libc_start_main
#15 0x557d9c99002a _start

Received signal 6
#0 0x557d9e5efb0c base::debug::StackTrace::StackTrace()
#1 0x557d9e5ef671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8c4b66f0c0 <unknown>
#3 0x7f8c45724fff gsignal
#4 0x7f8c4572642a abort
#5 0x557d9e5ee105 base::debug::BreakDebugger()
#6 0x557d9e608bca logging::LogMessage::~LogMessage()
#7 0x557d9d6982b1 content::ZygoteHostImpl::Init()
#8 0x557d9d30ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557d9d310a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557da243a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557d9e32aa00 content::RunNamedProcessTypeMain()
#12 0x557d9e32b2e8 content::ContentMainRunnerImpl::Run()
#13 0x557d9e334f24 service_manager::Main()
#14 0x557d9e329f14 content::ContentMain()
#15 0x557da24399b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557da2439a42 headless::HeadlessBrowserMain()
#17 0x557d9e331f9d headless::HeadlessShellMain()
#18 0x557d9c9901ac ChromeMain
#19 0x7f8c457122e1 __libc_start_main
#20 0x557d9c99002a _start
  r8: 0000000000000000  r9: 00007fff603db790 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff603dbe88 r13: 0000000000000161 r14: 00007fff603dbe90 r15: 00007fff603dba29
  di: 0000000000000002  si: 00007fff603db790  bp: 00007fff603db9d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8c45724fff  sp: 00007fff603db808
  ip: 00007f8c45724fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020845.961792:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ebf0c88b0c base::debug::StackTrace::StackTrace()
#1 0x55ebf0ca1780 logging::LogMessage::~LogMessage()
#2 0x55ebefd312b1 content::ZygoteHostImpl::Init()
#3 0x55ebef9a3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ebef9a9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ebf4ad39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ebf09c3a00 content::RunNamedProcessTypeMain()
#7 0x55ebf09c42e8 content::ContentMainRunnerImpl::Run()
#8 0x55ebf09cdf24 service_manager::Main()
#9 0x55ebf09c2f14 content::ContentMain()
#10 0x55ebf4ad29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ebf4ad2a42 headless::HeadlessBrowserMain()
#12 0x55ebf09caf9d headless::HeadlessShellMain()
#13 0x55ebef0291ac ChromeMain
#14 0x7f1be09492e1 __libc_start_main
#15 0x55ebef02902a _start

Received signal 6
#0 0x55ebf0c88b0c base::debug::StackTrace::StackTrace()
#1 0x55ebf0c88671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1be68a60c0 <unknown>
#3 0x7f1be095bfff gsignal
#4 0x7f1be095d42a abort
#5 0x55ebf0c87105 base::debug::BreakDebugger()
#6 0x55ebf0ca1bca logging::LogMessage::~LogMessage()
#7 0x55ebefd312b1 content::ZygoteHostImpl::Init()
#8 0x55ebef9a3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ebef9a9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ebf4ad39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ebf09c3a00 content::RunNamedProcessTypeMain()
#12 0x55ebf09c42e8 content::ContentMainRunnerImpl::Run()
#13 0x55ebf09cdf24 service_manager::Main()
#14 0x55ebf09c2f14 content::ContentMain()
#15 0x55ebf4ad29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ebf4ad2a42 headless::HeadlessBrowserMain()
#17 0x55ebf09caf9d headless::HeadlessShellMain()
#18 0x55ebef0291ac ChromeMain
#19 0x7f1be09492e1 __libc_start_main
#20 0x55ebef02902a _start
  r8: 0000000000000000  r9: 00007fff27b8bbf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff27b8c2e8 r13: 0000000000000161 r14: 00007fff27b8c2f0 r15: 00007fff27b8be89
  di: 0000000000000002  si: 00007fff27b8bbf0  bp: 00007fff27b8be30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1be095bfff  sp: 00007fff27b8bc68
  ip: 00007f1be095bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020845.961792:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ebf0c88b0c base::debug::StackTrace::StackTrace()
#1 0x55ebf0ca1780 logging::LogMessage::~LogMessage()
#2 0x55ebefd312b1 content::ZygoteHostImpl::Init()
#3 0x55ebef9a3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ebef9a9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ebf4ad39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ebf09c3a00 content::RunNamedProcessTypeMain()
#7 0x55ebf09c42e8 content::ContentMainRunnerImpl::Run()
#8 0x55ebf09cdf24 service_manager::Main()
#9 0x55ebf09c2f14 content::ContentMain()
#10 0x55ebf4ad29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ebf4ad2a42 headless::HeadlessBrowserMain()
#12 0x55ebf09caf9d headless::HeadlessShellMain()
#13 0x55ebef0291ac ChromeMain
#14 0x7f1be09492e1 __libc_start_main
#15 0x55ebef02902a _start

Received signal 6
#0 0x55ebf0c88b0c base::debug::StackTrace::StackTrace()
#1 0x55ebf0c88671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1be68a60c0 <unknown>
#3 0x7f1be095bfff gsignal
#4 0x7f1be095d42a abort
#5 0x55ebf0c87105 base::debug::BreakDebugger()
#6 0x55ebf0ca1bca logging::LogMessage::~LogMessage()
#7 0x55ebefd312b1 content::ZygoteHostImpl::Init()
#8 0x55ebef9a3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ebef9a9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ebf4ad39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ebf09c3a00 content::RunNamedProcessTypeMain()
#12 0x55ebf09c42e8 content::ContentMainRunnerImpl::Run()
#13 0x55ebf09cdf24 service_manager::Main()
#14 0x55ebf09c2f14 content::ContentMain()
#15 0x55ebf4ad29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ebf4ad2a42 headless::HeadlessBrowserMain()
#17 0x55ebf09caf9d headless::HeadlessShellMain()
#18 0x55ebef0291ac ChromeMain
#19 0x7f1be09492e1 __libc_start_main
#20 0x55ebef02902a _start
  r8: 0000000000000000  r9: 00007fff27b8bbf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff27b8c2e8 r13: 0000000000000161 r14: 00007fff27b8c2f0 r15: 00007fff27b8be89
  di: 0000000000000002  si: 00007fff27b8bbf0  bp: 00007fff27b8be30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1be095bfff  sp: 00007fff27b8bc68
  ip: 00007f1be095bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020846.877942:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ee9bce4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee9bcfd780 logging::LogMessage::~LogMessage()
#2 0x55ee9ad8d2b1 content::ZygoteHostImpl::Init()
#3 0x55ee9a9ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ee9aa05a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ee9fb2f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ee9ba1fa00 content::RunNamedProcessTypeMain()
#7 0x55ee9ba202e8 content::ContentMainRunnerImpl::Run()
#8 0x55ee9ba29f24 service_manager::Main()
#9 0x55ee9ba1ef14 content::ContentMain()
#10 0x55ee9fb2e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ee9fb2ea42 headless::HeadlessBrowserMain()
#12 0x55ee9ba26f9d headless::HeadlessShellMain()
#13 0x55ee9a0851ac ChromeMain
#14 0x7f2fd38192e1 __libc_start_main
#15 0x55ee9a08502a _start

Received signal 6
#0 0x55ee9bce4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee9bce4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2fd97760c0 <unknown>
#3 0x7f2fd382bfff gsignal
#4 0x7f2fd382d42a abort
#5 0x55ee9bce3105 base::debug::BreakDebugger()
#6 0x55ee9bcfdbca logging::LogMessage::~LogMessage()
#7 0x55ee9ad8d2b1 content::ZygoteHostImpl::Init()
#8 0x55ee9a9ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ee9aa05a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ee9fb2f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ee9ba1fa00 content::RunNamedProcessTypeMain()
#12 0x55ee9ba202e8 content::ContentMainRunnerImpl::Run()
#13 0x55ee9ba29f24 service_manager::Main()
#14 0x55ee9ba1ef14 content::ContentMain()
#15 0x55ee9fb2e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ee9fb2ea42 headless::HeadlessBrowserMain()
#17 0x55ee9ba26f9d headless::HeadlessShellMain()
#18 0x55ee9a0851ac ChromeMain
#19 0x7f2fd38192e1 __libc_start_main
#20 0x55ee9a08502a _start
  r8: 0000000000000000  r9: 00007ffdd5eb8bc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd5eb92b8 r13: 0000000000000161 r14: 00007ffdd5eb92c0 r15: 00007ffdd5eb8e59
  di: 0000000000000002  si: 00007ffdd5eb8bc0  bp: 00007ffdd5eb8e00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2fd382bfff  sp: 00007ffdd5eb8c38
  ip: 00007f2fd382bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020846.877942:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55ee9bce4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee9bcfd780 logging::LogMessage::~LogMessage()
#2 0x55ee9ad8d2b1 content::ZygoteHostImpl::Init()
#3 0x55ee9a9ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55ee9aa05a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55ee9fb2f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55ee9ba1fa00 content::RunNamedProcessTypeMain()
#7 0x55ee9ba202e8 content::ContentMainRunnerImpl::Run()
#8 0x55ee9ba29f24 service_manager::Main()
#9 0x55ee9ba1ef14 content::ContentMain()
#10 0x55ee9fb2e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55ee9fb2ea42 headless::HeadlessBrowserMain()
#12 0x55ee9ba26f9d headless::HeadlessShellMain()
#13 0x55ee9a0851ac ChromeMain
#14 0x7f2fd38192e1 __libc_start_main
#15 0x55ee9a08502a _start

Received signal 6
#0 0x55ee9bce4b0c base::debug::StackTrace::StackTrace()
#1 0x55ee9bce4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2fd97760c0 <unknown>
#3 0x7f2fd382bfff gsignal
#4 0x7f2fd382d42a abort
#5 0x55ee9bce3105 base::debug::BreakDebugger()
#6 0x55ee9bcfdbca logging::LogMessage::~LogMessage()
#7 0x55ee9ad8d2b1 content::ZygoteHostImpl::Init()
#8 0x55ee9a9ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55ee9aa05a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55ee9fb2f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55ee9ba1fa00 content::RunNamedProcessTypeMain()
#12 0x55ee9ba202e8 content::ContentMainRunnerImpl::Run()
#13 0x55ee9ba29f24 service_manager::Main()
#14 0x55ee9ba1ef14 content::ContentMain()
#15 0x55ee9fb2e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55ee9fb2ea42 headless::HeadlessBrowserMain()
#17 0x55ee9ba26f9d headless::HeadlessShellMain()
#18 0x55ee9a0851ac ChromeMain
#19 0x7f2fd38192e1 __libc_start_main
#20 0x55ee9a08502a _start
  r8: 0000000000000000  r9: 00007ffdd5eb8bc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdd5eb92b8 r13: 0000000000000161 r14: 00007ffdd5eb92c0 r15: 00007ffdd5eb8e59
  di: 0000000000000002  si: 00007ffdd5eb8bc0  bp: 00007ffdd5eb8e00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2fd382bfff  sp: 00007ffdd5eb8c38
  ip: 00007f2fd382bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020846.015543:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a908383b0c base::debug::StackTrace::StackTrace()
#1 0x55a90839c780 logging::LogMessage::~LogMessage()
#2 0x55a90742c2b1 content::ZygoteHostImpl::Init()
#3 0x55a90709ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a9070a4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a90c1ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a9080bea00 content::RunNamedProcessTypeMain()
#7 0x55a9080bf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55a9080c8f24 service_manager::Main()
#9 0x55a9080bdf14 content::ContentMain()
#10 0x55a90c1cd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a90c1cda42 headless::HeadlessBrowserMain()
#12 0x55a9080c5f9d headless::HeadlessShellMain()
#13 0x55a9067241ac ChromeMain
#14 0x7f820d7542e1 __libc_start_main
#15 0x55a90672402a _start

Received signal 6
#0 0x55a908383b0c base::debug::StackTrace::StackTrace()
#1 0x55a908383671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f82136b10c0 <unknown>
#3 0x7f820d766fff gsignal
#4 0x7f820d76842a abort
#5 0x55a908382105 base::debug::BreakDebugger()
#6 0x55a90839cbca logging::LogMessage::~LogMessage()
#7 0x55a90742c2b1 content::ZygoteHostImpl::Init()
#8 0x55a90709ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a9070a4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a90c1ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a9080bea00 content::RunNamedProcessTypeMain()
#12 0x55a9080bf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55a9080c8f24 service_manager::Main()
#14 0x55a9080bdf14 content::ContentMain()
#15 0x55a90c1cd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a90c1cda42 headless::HeadlessBrowserMain()
#17 0x55a9080c5f9d headless::HeadlessShellMain()
#18 0x55a9067241ac ChromeMain
#19 0x7f820d7542e1 __libc_start_main
#20 0x55a90672402a _start
  r8: 0000000000000000  r9: 00007ffc2d3a5390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2d3a5a88 r13: 0000000000000161 r14: 00007ffc2d3a5a90 r15: 00007ffc2d3a5629
  di: 0000000000000002  si: 00007ffc2d3a5390  bp: 00007ffc2d3a55d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f820d766fff  sp: 00007ffc2d3a5408
  ip: 00007f820d766fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020846.015543:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a908383b0c base::debug::StackTrace::StackTrace()
#1 0x55a90839c780 logging::LogMessage::~LogMessage()
#2 0x55a90742c2b1 content::ZygoteHostImpl::Init()
#3 0x55a90709ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a9070a4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a90c1ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a9080bea00 content::RunNamedProcessTypeMain()
#7 0x55a9080bf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55a9080c8f24 service_manager::Main()
#9 0x55a9080bdf14 content::ContentMain()
#10 0x55a90c1cd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a90c1cda42 headless::HeadlessBrowserMain()
#12 0x55a9080c5f9d headless::HeadlessShellMain()
#13 0x55a9067241ac ChromeMain
#14 0x7f820d7542e1 __libc_start_main
#15 0x55a90672402a _start

Received signal 6
#0 0x55a908383b0c base::debug::StackTrace::StackTrace()
#1 0x55a908383671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f82136b10c0 <unknown>
#3 0x7f820d766fff gsignal
#4 0x7f820d76842a abort
#5 0x55a908382105 base::debug::BreakDebugger()
#6 0x55a90839cbca logging::LogMessage::~LogMessage()
#7 0x55a90742c2b1 content::ZygoteHostImpl::Init()
#8 0x55a90709ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a9070a4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a90c1ce9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a9080bea00 content::RunNamedProcessTypeMain()
#12 0x55a9080bf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55a9080c8f24 service_manager::Main()
#14 0x55a9080bdf14 content::ContentMain()
#15 0x55a90c1cd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a90c1cda42 headless::HeadlessBrowserMain()
#17 0x55a9080c5f9d headless::HeadlessShellMain()
#18 0x55a9067241ac ChromeMain
#19 0x7f820d7542e1 __libc_start_main
#20 0x55a90672402a _start
  r8: 0000000000000000  r9: 00007ffc2d3a5390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2d3a5a88 r13: 0000000000000161 r14: 00007ffc2d3a5a90 r15: 00007ffc2d3a5629
  di: 0000000000000002  si: 00007ffc2d3a5390  bp: 00007ffc2d3a55d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f820d766fff  sp: 00007ffc2d3a5408
  ip: 00007f820d766fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020845.987735:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562c85c1fb0c base::debug::StackTrace::StackTrace()
#1 0x562c85c38780 logging::LogMessage::~LogMessage()
#2 0x562c84cc82b1 content::ZygoteHostImpl::Init()
#3 0x562c8493ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562c84940a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562c89a6a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562c8595aa00 content::RunNamedProcessTypeMain()
#7 0x562c8595b2e8 content::ContentMainRunnerImpl::Run()
#8 0x562c85964f24 service_manager::Main()
#9 0x562c85959f14 content::ContentMain()
#10 0x562c89a699b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562c89a69a42 headless::HeadlessBrowserMain()
#12 0x562c85961f9d headless::HeadlessShellMain()
#13 0x562c83fc01ac ChromeMain
#14 0x7f611cc182e1 __libc_start_main
#15 0x562c83fc002a _start

Received signal 6
#0 0x562c85c1fb0c base::debug::StackTrace::StackTrace()
#1 0x562c85c1f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6122b750c0 <unknown>
#3 0x7f611cc2afff gsignal
#4 0x7f611cc2c42a abort
#5 0x562c85c1e105 base::debug::BreakDebugger()
#6 0x562c85c38bca logging::LogMessage::~LogMessage()
#7 0x562c84cc82b1 content::ZygoteHostImpl::Init()
#8 0x562c8493ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562c84940a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562c89a6a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562c8595aa00 content::RunNamedProcessTypeMain()
#12 0x562c8595b2e8 content::ContentMainRunnerImpl::Run()
#13 0x562c85964f24 service_manager::Main()
#14 0x562c85959f14 content::ContentMain()
#15 0x562c89a699b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562c89a69a42 headless::HeadlessBrowserMain()
#17 0x562c85961f9d headless::HeadlessShellMain()
#18 0x562c83fc01ac ChromeMain
#19 0x7f611cc182e1 __libc_start_main
#20 0x562c83fc002a _start
  r8: 0000000000000000  r9: 00007ffd21350230 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd21350928 r13: 0000000000000161 r14: 00007ffd21350930 r15: 00007ffd213504c9
  di: 0000000000000002  si: 00007ffd21350230  bp: 00007ffd21350470  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f611cc2afff  sp: 00007ffd213502a8
  ip: 00007f611cc2afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020845.987735:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562c85c1fb0c base::debug::StackTrace::StackTrace()
#1 0x562c85c38780 logging::LogMessage::~LogMessage()
#2 0x562c84cc82b1 content::ZygoteHostImpl::Init()
#3 0x562c8493ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562c84940a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562c89a6a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562c8595aa00 content::RunNamedProcessTypeMain()
#7 0x562c8595b2e8 content::ContentMainRunnerImpl::Run()
#8 0x562c85964f24 service_manager::Main()
#9 0x562c85959f14 content::ContentMain()
#10 0x562c89a699b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562c89a69a42 headless::HeadlessBrowserMain()
#12 0x562c85961f9d headless::HeadlessShellMain()
#13 0x562c83fc01ac ChromeMain
#14 0x7f611cc182e1 __libc_start_main
#15 0x562c83fc002a _start

Received signal 6
#0 0x562c85c1fb0c base::debug::StackTrace::StackTrace()
#1 0x562c85c1f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6122b750c0 <unknown>
#3 0x7f611cc2afff gsignal
#4 0x7f611cc2c42a abort
#5 0x562c85c1e105 base::debug::BreakDebugger()
#6 0x562c85c38bca logging::LogMessage::~LogMessage()
#7 0x562c84cc82b1 content::ZygoteHostImpl::Init()
#8 0x562c8493ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562c84940a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562c89a6a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562c8595aa00 content::RunNamedProcessTypeMain()
#12 0x562c8595b2e8 content::ContentMainRunnerImpl::Run()
#13 0x562c85964f24 service_manager::Main()
#14 0x562c85959f14 content::ContentMain()
#15 0x562c89a699b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562c89a69a42 headless::HeadlessBrowserMain()
#17 0x562c85961f9d headless::HeadlessShellMain()
#18 0x562c83fc01ac ChromeMain
#19 0x7f611cc182e1 __libc_start_main
#20 0x562c83fc002a _start
  r8: 0000000000000000  r9: 00007ffd21350230 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd21350928 r13: 0000000000000161 r14: 00007ffd21350930 r15: 00007ffd213504c9
  di: 0000000000000002  si: 00007ffd21350230  bp: 00007ffd21350470  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f611cc2afff  sp: 00007ffd213502a8
  ip: 00007f611cc2afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020845.978988:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5631313fcb0c base::debug::StackTrace::StackTrace()
#1 0x563131415780 logging::LogMessage::~LogMessage()
#2 0x5631304a52b1 content::ZygoteHostImpl::Init()
#3 0x563130117c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56313011da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5631352479a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563131137a00 content::RunNamedProcessTypeMain()
#7 0x5631311382e8 content::ContentMainRunnerImpl::Run()
#8 0x563131141f24 service_manager::Main()
#9 0x563131136f14 content::ContentMain()
#10 0x5631352469b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563135246a42 headless::HeadlessBrowserMain()
#12 0x56313113ef9d headless::HeadlessShellMain()
#13 0x56312f79d1ac ChromeMain
#14 0x7fd7cd03e2e1 __libc_start_main
#15 0x56312f79d02a _start

Received signal 6
#0 0x5631313fcb0c base::debug::StackTrace::StackTrace()
#1 0x5631313fc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd7d2f9b0c0 <unknown>
#3 0x7fd7cd050fff gsignal
#4 0x7fd7cd05242a abort
#5 0x5631313fb105 base::debug::BreakDebugger()
#6 0x563131415bca logging::LogMessage::~LogMessage()
#7 0x5631304a52b1 content::ZygoteHostImpl::Init()
#8 0x563130117c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56313011da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5631352479a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563131137a00 content::RunNamedProcessTypeMain()
#12 0x5631311382e8 content::ContentMainRunnerImpl::Run()
#13 0x563131141f24 service_manager::Main()
#14 0x563131136f14 content::ContentMain()
#15 0x5631352469b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563135246a42 headless::HeadlessBrowserMain()
#17 0x56313113ef9d headless::HeadlessShellMain()
#18 0x56312f79d1ac ChromeMain
#19 0x7fd7cd03e2e1 __libc_start_main
#20 0x56312f79d02a _start
  r8: 0000000000000000  r9: 00007ffc63dcf0e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc63dcf7d8 r13: 0000000000000161 r14: 00007ffc63dcf7e0 r15: 00007ffc63dcf379
  di: 0000000000000002  si: 00007ffc63dcf0e0  bp: 00007ffc63dcf320  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd7cd050fff  sp: 00007ffc63dcf158
  ip: 00007fd7cd050fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020845.978988:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5631313fcb0c base::debug::StackTrace::StackTrace()
#1 0x563131415780 logging::LogMessage::~LogMessage()
#2 0x5631304a52b1 content::ZygoteHostImpl::Init()
#3 0x563130117c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56313011da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5631352479a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563131137a00 content::RunNamedProcessTypeMain()
#7 0x5631311382e8 content::ContentMainRunnerImpl::Run()
#8 0x563131141f24 service_manager::Main()
#9 0x563131136f14 content::ContentMain()
#10 0x5631352469b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563135246a42 headless::HeadlessBrowserMain()
#12 0x56313113ef9d headless::HeadlessShellMain()
#13 0x56312f79d1ac ChromeMain
#14 0x7fd7cd03e2e1 __libc_start_main
#15 0x56312f79d02a _start

Received signal 6
#0 0x5631313fcb0c base::debug::StackTrace::StackTrace()
#1 0x5631313fc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd7d2f9b0c0 <unknown>
#3 0x7fd7cd050fff gsignal
#4 0x7fd7cd05242a abort
#5 0x5631313fb105 base::debug::BreakDebugger()
#6 0x563131415bca logging::LogMessage::~LogMessage()
#7 0x5631304a52b1 content::ZygoteHostImpl::Init()
#8 0x563130117c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56313011da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5631352479a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563131137a00 content::RunNamedProcessTypeMain()
#12 0x5631311382e8 content::ContentMainRunnerImpl::Run()
#13 0x563131141f24 service_manager::Main()
#14 0x563131136f14 content::ContentMain()
#15 0x5631352469b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563135246a42 headless::HeadlessBrowserMain()
#17 0x56313113ef9d headless::HeadlessShellMain()
#18 0x56312f79d1ac ChromeMain
#19 0x7fd7cd03e2e1 __libc_start_main
#20 0x56312f79d02a _start
  r8: 0000000000000000  r9: 00007ffc63dcf0e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc63dcf7d8 r13: 0000000000000161 r14: 00007ffc63dcf7e0 r15: 00007ffc63dcf379
  di: 0000000000000002  si: 00007ffc63dcf0e0  bp: 00007ffc63dcf320  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd7cd050fff  sp: 00007ffc63dcf158
  ip: 00007fd7cd050fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020846.029821:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56021b476b0c base::debug::StackTrace::StackTrace()
#1 0x56021b48f780 logging::LogMessage::~LogMessage()
#2 0x56021a51f2b1 content::ZygoteHostImpl::Init()
#3 0x56021a191c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56021a197a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56021f2c19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56021b1b1a00 content::RunNamedProcessTypeMain()
#7 0x56021b1b22e8 content::ContentMainRunnerImpl::Run()
#8 0x56021b1bbf24 service_manager::Main()
#9 0x56021b1b0f14 content::ContentMain()
#10 0x56021f2c09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56021f2c0a42 headless::HeadlessBrowserMain()
#12 0x56021b1b8f9d headless::HeadlessShellMain()
#13 0x5602198171ac ChromeMain
#14 0x7f839957f2e1 __libc_start_main
#15 0x56021981702a _start

Received signal 6
#0 0x56021b476b0c base::debug::StackTrace::StackTrace()
#1 0x56021b476671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f839f4dc0c0 <unknown>
#3 0x7f8399591fff gsignal
#4 0x7f839959342a abort
#5 0x56021b475105 base::debug::BreakDebugger()
#6 0x56021b48fbca logging::LogMessage::~LogMessage()
#7 0x56021a51f2b1 content::ZygoteHostImpl::Init()
#8 0x56021a191c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56021a197a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56021f2c19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56021b1b1a00 content::RunNamedProcessTypeMain()
#12 0x56021b1b22e8 content::ContentMainRunnerImpl::Run()
#13 0x56021b1bbf24 service_manager::Main()
#14 0x56021b1b0f14 content::ContentMain()
#15 0x56021f2c09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56021f2c0a42 headless::HeadlessBrowserMain()
#17 0x56021b1b8f9d headless::HeadlessShellMain()
#18 0x5602198171ac ChromeMain
#19 0x7f839957f2e1 __libc_start_main
#20 0x56021981702a _start
  r8: 0000000000000000  r9: 00007ffc5c6d1200 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5c6d18f8 r13: 0000000000000161 r14: 00007ffc5c6d1900 r15: 00007ffc5c6d1499
  di: 0000000000000002  si: 00007ffc5c6d1200  bp: 00007ffc5c6d1440  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8399591fff  sp: 00007ffc5c6d1278
  ip: 00007f8399591fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020846.029821:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56021b476b0c base::debug::StackTrace::StackTrace()
#1 0x56021b48f780 logging::LogMessage::~LogMessage()
#2 0x56021a51f2b1 content::ZygoteHostImpl::Init()
#3 0x56021a191c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56021a197a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56021f2c19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56021b1b1a00 content::RunNamedProcessTypeMain()
#7 0x56021b1b22e8 content::ContentMainRunnerImpl::Run()
#8 0x56021b1bbf24 service_manager::Main()
#9 0x56021b1b0f14 content::ContentMain()
#10 0x56021f2c09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56021f2c0a42 headless::HeadlessBrowserMain()
#12 0x56021b1b8f9d headless::HeadlessShellMain()
#13 0x5602198171ac ChromeMain
#14 0x7f839957f2e1 __libc_start_main
#15 0x56021981702a _start

Received signal 6
#0 0x56021b476b0c base::debug::StackTrace::StackTrace()
#1 0x56021b476671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f839f4dc0c0 <unknown>
#3 0x7f8399591fff gsignal
#4 0x7f839959342a abort
#5 0x56021b475105 base::debug::BreakDebugger()
#6 0x56021b48fbca logging::LogMessage::~LogMessage()
#7 0x56021a51f2b1 content::ZygoteHostImpl::Init()
#8 0x56021a191c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56021a197a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56021f2c19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56021b1b1a00 content::RunNamedProcessTypeMain()
#12 0x56021b1b22e8 content::ContentMainRunnerImpl::Run()
#13 0x56021b1bbf24 service_manager::Main()
#14 0x56021b1b0f14 content::ContentMain()
#15 0x56021f2c09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56021f2c0a42 headless::HeadlessBrowserMain()
#17 0x56021b1b8f9d headless::HeadlessShellMain()
#18 0x5602198171ac ChromeMain
#19 0x7f839957f2e1 __libc_start_main
#20 0x56021981702a _start
  r8: 0000000000000000  r9: 00007ffc5c6d1200 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5c6d18f8 r13: 0000000000000161 r14: 00007ffc5c6d1900 r15: 00007ffc5c6d1499
  di: 0000000000000002  si: 00007ffc5c6d1200  bp: 00007ffc5c6d1440  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8399591fff  sp: 00007ffc5c6d1278
  ip: 00007f8399591fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020850.014213:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558484eabb0c base::debug::StackTrace::StackTrace()
#1 0x558484ec4780 logging::LogMessage::~LogMessage()
#2 0x558483f542b1 content::ZygoteHostImpl::Init()
#3 0x558483bc6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558483bcca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558488cf69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558484be6a00 content::RunNamedProcessTypeMain()
#7 0x558484be72e8 content::ContentMainRunnerImpl::Run()
#8 0x558484bf0f24 service_manager::Main()
#9 0x558484be5f14 content::ContentMain()
#10 0x558488cf59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558488cf5a42 headless::HeadlessBrowserMain()
#12 0x558484bedf9d headless::HeadlessShellMain()
#13 0x55848324c1ac ChromeMain
#14 0x7f113a00d2e1 __libc_start_main
#15 0x55848324c02a _start

Received signal 6
#0 0x558484eabb0c base::debug::StackTrace::StackTrace()
#1 0x558484eab671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f113ff6a0c0 <unknown>
#3 0x7f113a01ffff gsignal
#4 0x7f113a02142a abort
#5 0x558484eaa105 base::debug::BreakDebugger()
#6 0x558484ec4bca logging::LogMessage::~LogMessage()
#7 0x558483f542b1 content::ZygoteHostImpl::Init()
#8 0x558483bc6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558483bcca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558488cf69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558484be6a00 content::RunNamedProcessTypeMain()
#12 0x558484be72e8 content::ContentMainRunnerImpl::Run()
#13 0x558484bf0f24 service_manager::Main()
#14 0x558484be5f14 content::ContentMain()
#15 0x558488cf59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558488cf5a42 headless::HeadlessBrowserMain()
#17 0x558484bedf9d headless::HeadlessShellMain()
#18 0x55848324c1ac ChromeMain
#19 0x7f113a00d2e1 __libc_start_main
#20 0x55848324c02a _start
  r8: 0000000000000000  r9: 00007fffcf8234d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffcf823bc8 r13: 0000000000000161 r14: 00007fffcf823bd0 r15: 00007fffcf823769
  di: 0000000000000002  si: 00007fffcf8234d0  bp: 00007fffcf823710  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f113a01ffff  sp: 00007fffcf823548
  ip: 00007f113a01ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020850.014213:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558484eabb0c base::debug::StackTrace::StackTrace()
#1 0x558484ec4780 logging::LogMessage::~LogMessage()
#2 0x558483f542b1 content::ZygoteHostImpl::Init()
#3 0x558483bc6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558483bcca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558488cf69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558484be6a00 content::RunNamedProcessTypeMain()
#7 0x558484be72e8 content::ContentMainRunnerImpl::Run()
#8 0x558484bf0f24 service_manager::Main()
#9 0x558484be5f14 content::ContentMain()
#10 0x558488cf59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558488cf5a42 headless::HeadlessBrowserMain()
#12 0x558484bedf9d headless::HeadlessShellMain()
#13 0x55848324c1ac ChromeMain
#14 0x7f113a00d2e1 __libc_start_main
#15 0x55848324c02a _start

Received signal 6
#0 0x558484eabb0c base::debug::StackTrace::StackTrace()
#1 0x558484eab671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f113ff6a0c0 <unknown>
#3 0x7f113a01ffff gsignal
#4 0x7f113a02142a abort
#5 0x558484eaa105 base::debug::BreakDebugger()
#6 0x558484ec4bca logging::LogMessage::~LogMessage()
#7 0x558483f542b1 content::ZygoteHostImpl::Init()
#8 0x558483bc6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558483bcca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558488cf69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558484be6a00 content::RunNamedProcessTypeMain()
#12 0x558484be72e8 content::ContentMainRunnerImpl::Run()
#13 0x558484bf0f24 service_manager::Main()
#14 0x558484be5f14 content::ContentMain()
#15 0x558488cf59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558488cf5a42 headless::HeadlessBrowserMain()
#17 0x558484bedf9d headless::HeadlessShellMain()
#18 0x55848324c1ac ChromeMain
#19 0x7f113a00d2e1 __libc_start_main
#20 0x55848324c02a _start
  r8: 0000000000000000  r9: 00007fffcf8234d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffcf823bc8 r13: 0000000000000161 r14: 00007fffcf823bd0 r15: 00007fffcf823769
  di: 0000000000000002  si: 00007fffcf8234d0  bp: 00007fffcf823710  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f113a01ffff  sp: 00007fffcf823548
  ip: 00007f113a01ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020850.493526:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f93272ab0c base::debug::StackTrace::StackTrace()
#1 0x55f932743780 logging::LogMessage::~LogMessage()
#2 0x55f9317d32b1 content::ZygoteHostImpl::Init()
#3 0x55f931445c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f93144ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f9365759a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f932465a00 content::RunNamedProcessTypeMain()
#7 0x55f9324662e8 content::ContentMainRunnerImpl::Run()
#8 0x55f93246ff24 service_manager::Main()
#9 0x55f932464f14 content::ContentMain()
#10 0x55f9365749b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f936574a42 headless::HeadlessBrowserMain()
#12 0x55f93246cf9d headless::HeadlessShellMain()
#13 0x55f930acb1ac ChromeMain
#14 0x7f127da422e1 __libc_start_main
#15 0x55f930acb02a _start

Received signal 6
#0 0x55f93272ab0c base::debug::StackTrace::StackTrace()
#1 0x55f93272a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f128399f0c0 <unknown>
#3 0x7f127da54fff gsignal
#4 0x7f127da5642a abort
#5 0x55f932729105 base::debug::BreakDebugger()
#6 0x55f932743bca logging::LogMessage::~LogMessage()
#7 0x55f9317d32b1 content::ZygoteHostImpl::Init()
#8 0x55f931445c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f93144ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f9365759a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f932465a00 content::RunNamedProcessTypeMain()
#12 0x55f9324662e8 content::ContentMainRunnerImpl::Run()
#13 0x55f93246ff24 service_manager::Main()
#14 0x55f932464f14 content::ContentMain()
#15 0x55f9365749b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f936574a42 headless::HeadlessBrowserMain()
#17 0x55f93246cf9d headless::HeadlessShellMain()
#18 0x55f930acb1ac ChromeMain
#19 0x7f127da422e1 __libc_start_main
#20 0x55f930acb02a _start
  r8: 0000000000000000  r9: 00007ffdb7ab2d30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb7ab3428 r13: 0000000000000161 r14: 00007ffdb7ab3430 r15: 00007ffdb7ab2fc9
  di: 0000000000000002  si: 00007ffdb7ab2d30  bp: 00007ffdb7ab2f70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f127da54fff  sp: 00007ffdb7ab2da8
  ip: 00007f127da54fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020850.493526:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f93272ab0c base::debug::StackTrace::StackTrace()
#1 0x55f932743780 logging::LogMessage::~LogMessage()
#2 0x55f9317d32b1 content::ZygoteHostImpl::Init()
#3 0x55f931445c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f93144ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f9365759a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f932465a00 content::RunNamedProcessTypeMain()
#7 0x55f9324662e8 content::ContentMainRunnerImpl::Run()
#8 0x55f93246ff24 service_manager::Main()
#9 0x55f932464f14 content::ContentMain()
#10 0x55f9365749b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f936574a42 headless::HeadlessBrowserMain()
#12 0x55f93246cf9d headless::HeadlessShellMain()
#13 0x55f930acb1ac ChromeMain
#14 0x7f127da422e1 __libc_start_main
#15 0x55f930acb02a _start

Received signal 6
#0 0x55f93272ab0c base::debug::StackTrace::StackTrace()
#1 0x55f93272a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f128399f0c0 <unknown>
#3 0x7f127da54fff gsignal
#4 0x7f127da5642a abort
#5 0x55f932729105 base::debug::BreakDebugger()
#6 0x55f932743bca logging::LogMessage::~LogMessage()
#7 0x55f9317d32b1 content::ZygoteHostImpl::Init()
#8 0x55f931445c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f93144ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f9365759a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f932465a00 content::RunNamedProcessTypeMain()
#12 0x55f9324662e8 content::ContentMainRunnerImpl::Run()
#13 0x55f93246ff24 service_manager::Main()
#14 0x55f932464f14 content::ContentMain()
#15 0x55f9365749b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f936574a42 headless::HeadlessBrowserMain()
#17 0x55f93246cf9d headless::HeadlessShellMain()
#18 0x55f930acb1ac ChromeMain
#19 0x7f127da422e1 __libc_start_main
#20 0x55f930acb02a _start
  r8: 0000000000000000  r9: 00007ffdb7ab2d30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdb7ab3428 r13: 0000000000000161 r14: 00007ffdb7ab3430 r15: 00007ffdb7ab2fc9
  di: 0000000000000002  si: 00007ffdb7ab2d30  bp: 00007ffdb7ab2f70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f127da54fff  sp: 00007ffdb7ab2da8
  ip: 00007f127da54fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020850.638091:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5616ad2a9b0c base::debug::StackTrace::StackTrace()
#1 0x5616ad2c2780 logging::LogMessage::~LogMessage()
#2 0x5616ac3522b1 content::ZygoteHostImpl::Init()
#3 0x5616abfc4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5616abfcaa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5616b10f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5616acfe4a00 content::RunNamedProcessTypeMain()
#7 0x5616acfe52e8 content::ContentMainRunnerImpl::Run()
#8 0x5616acfeef24 service_manager::Main()
#9 0x5616acfe3f14 content::ContentMain()
#10 0x5616b10f39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5616b10f3a42 headless::HeadlessBrowserMain()
#12 0x5616acfebf9d headless::HeadlessShellMain()
#13 0x5616ab64a1ac ChromeMain
#14 0x7ff10b3da2e1 __libc_start_main
#15 0x5616ab64a02a _start

Received signal 6
#0 0x5616ad2a9b0c base::debug::StackTrace::StackTrace()
#1 0x5616ad2a9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff1113370c0 <unknown>
#3 0x7ff10b3ecfff gsignal
#4 0x7ff10b3ee42a abort
#5 0x5616ad2a8105 base::debug::BreakDebugger()
#6 0x5616ad2c2bca logging::LogMessage::~LogMessage()
#7 0x5616ac3522b1 content::ZygoteHostImpl::Init()
#8 0x5616abfc4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5616abfcaa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5616b10f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5616acfe4a00 content::RunNamedProcessTypeMain()
#12 0x5616acfe52e8 content::ContentMainRunnerImpl::Run()
#13 0x5616acfeef24 service_manager::Main()
#14 0x5616acfe3f14 content::ContentMain()
#15 0x5616b10f39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5616b10f3a42 headless::HeadlessBrowserMain()
#17 0x5616acfebf9d headless::HeadlessShellMain()
#18 0x5616ab64a1ac ChromeMain
#19 0x7ff10b3da2e1 __libc_start_main
#20 0x5616ab64a02a _start
  r8: 0000000000000000  r9: 00007ffda6d31340 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda6d31a38 r13: 0000000000000161 r14: 00007ffda6d31a40 r15: 00007ffda6d315d9
  di: 0000000000000002  si: 00007ffda6d31340  bp: 00007ffda6d31580  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff10b3ecfff  sp: 00007ffda6d313b8
  ip: 00007ff10b3ecfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020850.638091:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5616ad2a9b0c base::debug::StackTrace::StackTrace()
#1 0x5616ad2c2780 logging::LogMessage::~LogMessage()
#2 0x5616ac3522b1 content::ZygoteHostImpl::Init()
#3 0x5616abfc4c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5616abfcaa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5616b10f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5616acfe4a00 content::RunNamedProcessTypeMain()
#7 0x5616acfe52e8 content::ContentMainRunnerImpl::Run()
#8 0x5616acfeef24 service_manager::Main()
#9 0x5616acfe3f14 content::ContentMain()
#10 0x5616b10f39b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5616b10f3a42 headless::HeadlessBrowserMain()
#12 0x5616acfebf9d headless::HeadlessShellMain()
#13 0x5616ab64a1ac ChromeMain
#14 0x7ff10b3da2e1 __libc_start_main
#15 0x5616ab64a02a _start

Received signal 6
#0 0x5616ad2a9b0c base::debug::StackTrace::StackTrace()
#1 0x5616ad2a9671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff1113370c0 <unknown>
#3 0x7ff10b3ecfff gsignal
#4 0x7ff10b3ee42a abort
#5 0x5616ad2a8105 base::debug::BreakDebugger()
#6 0x5616ad2c2bca logging::LogMessage::~LogMessage()
#7 0x5616ac3522b1 content::ZygoteHostImpl::Init()
#8 0x5616abfc4c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5616abfcaa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5616b10f49a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5616acfe4a00 content::RunNamedProcessTypeMain()
#12 0x5616acfe52e8 content::ContentMainRunnerImpl::Run()
#13 0x5616acfeef24 service_manager::Main()
#14 0x5616acfe3f14 content::ContentMain()
#15 0x5616b10f39b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5616b10f3a42 headless::HeadlessBrowserMain()
#17 0x5616acfebf9d headless::HeadlessShellMain()
#18 0x5616ab64a1ac ChromeMain
#19 0x7ff10b3da2e1 __libc_start_main
#20 0x5616ab64a02a _start
  r8: 0000000000000000  r9: 00007ffda6d31340 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda6d31a38 r13: 0000000000000161 r14: 00007ffda6d31a40 r15: 00007ffda6d315d9
  di: 0000000000000002  si: 00007ffda6d31340  bp: 00007ffda6d31580  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff10b3ecfff  sp: 00007ffda6d313b8
  ip: 00007ff10b3ecfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020754.474517:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56124b0bfb0c base::debug::StackTrace::StackTrace()
#1 0x56124b0d8780 logging::LogMessage::~LogMessage()
#2 0x56124a1682b1 content::ZygoteHostImpl::Init()
#3 0x561249ddac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561249de0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56124ef0a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56124adfaa00 content::RunNamedProcessTypeMain()
#7 0x56124adfb2e8 content::ContentMainRunnerImpl::Run()
#8 0x56124ae04f24 service_manager::Main()
#9 0x56124adf9f14 content::ContentMain()
#10 0x56124ef099b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56124ef09a42 headless::HeadlessBrowserMain()
#12 0x56124ae01f9d headless::HeadlessShellMain()
#13 0x5612494601ac ChromeMain
#14 0x7fb85bd5e2e1 __libc_start_main
#15 0x56124946002a _start

Received signal 6
#0 0x56124b0bfb0c base::debug::StackTrace::StackTrace()
#1 0x56124b0bf671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb861cbb0c0 <unknown>
#3 0x7fb85bd70fff gsignal
#4 0x7fb85bd7242a abort
#5 0x56124b0be105 base::debug::BreakDebugger()
#6 0x56124b0d8bca logging::LogMessage::~LogMessage()
#7 0x56124a1682b1 content::ZygoteHostImpl::Init()
#8 0x561249ddac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561249de0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56124ef0a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56124adfaa00 content::RunNamedProcessTypeMain()
#12 0x56124adfb2e8 content::ContentMainRunnerImpl::Run()
#13 0x56124ae04f24 service_manager::Main()
#14 0x56124adf9f14 content::ContentMain()
#15 0x56124ef099b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56124ef09a42 headless::HeadlessBrowserMain()
#17 0x56124ae01f9d headless::HeadlessShellMain()
#18 0x5612494601ac ChromeMain
#19 0x7fb85bd5e2e1 __libc_start_main
#20 0x56124946002a _start
  r8: 0000000000000000  r9: 00007fffd5c11dc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd5c124b8 r13: 0000000000000161 r14: 00007fffd5c124c0 r15: 00007fffd5c12059
  di: 0000000000000002  si: 00007fffd5c11dc0  bp: 00007fffd5c12000  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb85bd70fff  sp: 00007fffd5c11e38
  ip: 00007fb85bd70fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020754.474517:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56124b0bfb0c base::debug::StackTrace::StackTrace()
#1 0x56124b0d8780 logging::LogMessage::~LogMessage()
#2 0x56124a1682b1 content::ZygoteHostImpl::Init()
#3 0x561249ddac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561249de0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56124ef0a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56124adfaa00 content::RunNamedProcessTypeMain()
#7 0x56124adfb2e8 content::ContentMainRunnerImpl::Run()
#8 0x56124ae04f24 service_manager::Main()
#9 0x56124adf9f14 content::ContentMain()
#10 0x56124ef099b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56124ef09a42 headless::HeadlessBrowserMain()
#12 0x56124ae01f9d headless::HeadlessShellMain()
#13 0x5612494601ac ChromeMain
#14 0x7fb85bd5e2e1 __libc_start_main
#15 0x56124946002a _start

Received signal 6
#0 0x56124b0bfb0c base::debug::StackTrace::StackTrace()
#1 0x56124b0bf671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb861cbb0c0 <unknown>
#3 0x7fb85bd70fff gsignal
#4 0x7fb85bd7242a abort
#5 0x56124b0be105 base::debug::BreakDebugger()
#6 0x56124b0d8bca logging::LogMessage::~LogMessage()
#7 0x56124a1682b1 content::ZygoteHostImpl::Init()
#8 0x561249ddac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561249de0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56124ef0a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56124adfaa00 content::RunNamedProcessTypeMain()
#12 0x56124adfb2e8 content::ContentMainRunnerImpl::Run()
#13 0x56124ae04f24 service_manager::Main()
#14 0x56124adf9f14 content::ContentMain()
#15 0x56124ef099b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56124ef09a42 headless::HeadlessBrowserMain()
#17 0x56124ae01f9d headless::HeadlessShellMain()
#18 0x5612494601ac ChromeMain
#19 0x7fb85bd5e2e1 __libc_start_main
#20 0x56124946002a _start
  r8: 0000000000000000  r9: 00007fffd5c11dc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd5c124b8 r13: 0000000000000161 r14: 00007fffd5c124c0 r15: 00007fffd5c12059
  di: 0000000000000002  si: 00007fffd5c11dc0  bp: 00007fffd5c12000  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb85bd70fff  sp: 00007fffd5c11e38
  ip: 00007fb85bd70fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0511/020903.164872:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564e581eab0c base::debug::StackTrace::StackTrace()
#1 0x564e58203780 logging::LogMessage::~LogMessage()
#2 0x564e572932b1 content::ZygoteHostImpl::Init()
#3 0x564e56f05c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564e56f0ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564e5c0359a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564e57f25a00 content::RunNamedProcessTypeMain()
#7 0x564e57f262e8 content::ContentMainRunnerImpl::Run()
#8 0x564e57f2ff24 service_manager::Main()
#9 0x564e57f24f14 content::ContentMain()
#10 0x564e5c0349b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564e5c034a42 headless::HeadlessBrowserMain()
#12 0x564e57f2cf9d headless::HeadlessShellMain()
#13 0x564e5658b1ac ChromeMain
#14 0x7f3ccc8dc2e1 __libc_start_main
#15 0x564e5658b02a _start

Received signal 6
#0 0x564e581eab0c base::debug::StackTrace::StackTrace()
#1 0x564e581ea671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3cd28390c0 <unknown>
#3 0x7f3ccc8eefff gsignal
#4 0x7f3ccc8f042a abort
#5 0x564e581e9105 base::debug::BreakDebugger()
#6 0x564e58203bca logging::LogMessage::~LogMessage()
#7 0x564e572932b1 content::ZygoteHostImpl::Init()
#8 0x564e56f05c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564e56f0ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564e5c0359a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564e57f25a00 content::RunNamedProcessTypeMain()
#12 0x564e57f262e8 content::ContentMainRunnerImpl::Run()
#13 0x564e57f2ff24 service_manager::Main()
#14 0x564e57f24f14 content::ContentMain()
#15 0x564e5c0349b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564e5c034a42 headless::HeadlessBrowserMain()
#17 0x564e57f2cf9d headless::HeadlessShellMain()
#18 0x564e5658b1ac ChromeMain
#19 0x7f3ccc8dc2e1 __libc_start_main
#20 0x564e5658b02a _start
  r8: 0000000000000000  r9: 00007ffd7e9279d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd7e9280c8 r13: 0000000000000161 r14: 00007ffd7e9280d0 r15: 00007ffd7e927c69
  di: 0000000000000002  si: 00007ffd7e9279d0  bp: 00007ffd7e927c10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3ccc8eefff  sp: 00007ffd7e927a48
  ip: 00007f3ccc8eefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020903.164872:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564e581eab0c base::debug::StackTrace::StackTrace()
#1 0x564e58203780 logging::LogMessage::~LogMessage()
#2 0x564e572932b1 content::ZygoteHostImpl::Init()
#3 0x564e56f05c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564e56f0ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564e5c0359a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564e57f25a00 content::RunNamedProcessTypeMain()
#7 0x564e57f262e8 content::ContentMainRunnerImpl::Run()
#8 0x564e57f2ff24 service_manager::Main()
#9 0x564e57f24f14 content::ContentMain()
#10 0x564e5c0349b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564e5c034a42 headless::HeadlessBrowserMain()
#12 0x564e57f2cf9d headless::HeadlessShellMain()
#13 0x564e5658b1ac ChromeMain
#14 0x7f3ccc8dc2e1 __libc_start_main
#15 0x564e5658b02a _start

Received signal 6
#0 0x564e581eab0c base::debug::StackTrace::StackTrace()
#1 0x564e581ea671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3cd28390c0 <unknown>
#3 0x7f3ccc8eefff gsignal
#4 0x7f3ccc8f042a abort
#5 0x564e581e9105 base::debug::BreakDebugger()
#6 0x564e58203bca logging::LogMessage::~LogMessage()
#7 0x564e572932b1 content::ZygoteHostImpl::Init()
#8 0x564e56f05c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564e56f0ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564e5c0359a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564e57f25a00 content::RunNamedProcessTypeMain()
#12 0x564e57f262e8 content::ContentMainRunnerImpl::Run()
#13 0x564e57f2ff24 service_manager::Main()
#14 0x564e57f24f14 content::ContentMain()
#15 0x564e5c0349b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564e5c034a42 headless::HeadlessBrowserMain()
#17 0x564e57f2cf9d headless::HeadlessShellMain()
#18 0x564e5658b1ac ChromeMain
#19 0x7f3ccc8dc2e1 __libc_start_main
#20 0x564e5658b02a _start
  r8: 0000000000000000  r9: 00007ffd7e9279d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd7e9280c8 r13: 0000000000000161 r14: 00007ffd7e9280d0 r15: 00007ffd7e927c69
  di: 0000000000000002  si: 00007ffd7e9279d0  bp: 00007ffd7e927c10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3ccc8eefff  sp: 00007ffd7e927a48
  ip: 00007f3ccc8eefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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

- Crawled version: [Editor's Draft](https://webassembly.github.io/spec/js-api/) (10 May 2018)
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

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/2.0/) (Fri May 11 2018)
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

- Crawled version: [Initial URL](https://www.khronos.org/registry/webgl/specs/latest/1.0/) (Fri May 11 2018)
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
[0511/020906.641019:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dd3b800b0c base::debug::StackTrace::StackTrace()
#1 0x55dd3b819780 logging::LogMessage::~LogMessage()
#2 0x55dd3a8a92b1 content::ZygoteHostImpl::Init()
#3 0x55dd3a51bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dd3a521a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dd3f64b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dd3b53ba00 content::RunNamedProcessTypeMain()
#7 0x55dd3b53c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55dd3b545f24 service_manager::Main()
#9 0x55dd3b53af14 content::ContentMain()
#10 0x55dd3f64a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dd3f64aa42 headless::HeadlessBrowserMain()
#12 0x55dd3b542f9d headless::HeadlessShellMain()
#13 0x55dd39ba11ac ChromeMain
#14 0x7fcdd99a92e1 __libc_start_main
#15 0x55dd39ba102a _start

Received signal 6
#0 0x55dd3b800b0c base::debug::StackTrace::StackTrace()
#1 0x55dd3b800671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcddf9060c0 <unknown>
#3 0x7fcdd99bbfff gsignal
#4 0x7fcdd99bd42a abort
#5 0x55dd3b7ff105 base::debug::BreakDebugger()
#6 0x55dd3b819bca logging::LogMessage::~LogMessage()
#7 0x55dd3a8a92b1 content::ZygoteHostImpl::Init()
#8 0x55dd3a51bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dd3a521a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dd3f64b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dd3b53ba00 content::RunNamedProcessTypeMain()
#12 0x55dd3b53c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55dd3b545f24 service_manager::Main()
#14 0x55dd3b53af14 content::ContentMain()
#15 0x55dd3f64a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dd3f64aa42 headless::HeadlessBrowserMain()
#17 0x55dd3b542f9d headless::HeadlessShellMain()
#18 0x55dd39ba11ac ChromeMain
#19 0x7fcdd99a92e1 __libc_start_main
#20 0x55dd39ba102a _start
  r8: 0000000000000000  r9: 00007fff1fa04b20 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff1fa05218 r13: 0000000000000161 r14: 00007fff1fa05220 r15: 00007fff1fa04db9
  di: 0000000000000002  si: 00007fff1fa04b20  bp: 00007fff1fa04d60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcdd99bbfff  sp: 00007fff1fa04b98
  ip: 00007fcdd99bbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020906.641019:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55dd3b800b0c base::debug::StackTrace::StackTrace()
#1 0x55dd3b819780 logging::LogMessage::~LogMessage()
#2 0x55dd3a8a92b1 content::ZygoteHostImpl::Init()
#3 0x55dd3a51bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55dd3a521a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55dd3f64b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55dd3b53ba00 content::RunNamedProcessTypeMain()
#7 0x55dd3b53c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55dd3b545f24 service_manager::Main()
#9 0x55dd3b53af14 content::ContentMain()
#10 0x55dd3f64a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55dd3f64aa42 headless::HeadlessBrowserMain()
#12 0x55dd3b542f9d headless::HeadlessShellMain()
#13 0x55dd39ba11ac ChromeMain
#14 0x7fcdd99a92e1 __libc_start_main
#15 0x55dd39ba102a _start

Received signal 6
#0 0x55dd3b800b0c base::debug::StackTrace::StackTrace()
#1 0x55dd3b800671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcddf9060c0 <unknown>
#3 0x7fcdd99bbfff gsignal
#4 0x7fcdd99bd42a abort
#5 0x55dd3b7ff105 base::debug::BreakDebugger()
#6 0x55dd3b819bca logging::LogMessage::~LogMessage()
#7 0x55dd3a8a92b1 content::ZygoteHostImpl::Init()
#8 0x55dd3a51bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55dd3a521a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55dd3f64b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55dd3b53ba00 content::RunNamedProcessTypeMain()
#12 0x55dd3b53c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55dd3b545f24 service_manager::Main()
#14 0x55dd3b53af14 content::ContentMain()
#15 0x55dd3f64a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55dd3f64aa42 headless::HeadlessBrowserMain()
#17 0x55dd3b542f9d headless::HeadlessShellMain()
#18 0x55dd39ba11ac ChromeMain
#19 0x7fcdd99a92e1 __libc_start_main
#20 0x55dd39ba102a _start
  r8: 0000000000000000  r9: 00007fff1fa04b20 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff1fa05218 r13: 0000000000000161 r14: 00007fff1fa05220 r15: 00007fff1fa04db9
  di: 0000000000000002  si: 00007fff1fa04b20  bp: 00007fff1fa04d60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcdd99bbfff  sp: 00007fff1fa04b98
  ip: 00007fcdd99bbfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
- Latest published status: [Candidate Recommendation](https://www.w3.org/TR/2018/CR-webvtt1-20180510/)
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




