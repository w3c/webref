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
[0510/020154.868264:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5652f961eb0c base::debug::StackTrace::StackTrace()
#1 0x5652f9637780 logging::LogMessage::~LogMessage()
#2 0x5652f86c72b1 content::ZygoteHostImpl::Init()
#3 0x5652f8339c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5652f833fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5652fd4699a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5652f9359a00 content::RunNamedProcessTypeMain()
#7 0x5652f935a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5652f9363f24 service_manager::Main()
#9 0x5652f9358f14 content::ContentMain()
#10 0x5652fd4689b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5652fd468a42 headless::HeadlessBrowserMain()
#12 0x5652f9360f9d headless::HeadlessShellMain()
#13 0x5652f79bf1ac ChromeMain
#14 0x7fd99fb6e2e1 __libc_start_main
#15 0x5652f79bf02a _start

Received signal 6
#0 0x5652f961eb0c base::debug::StackTrace::StackTrace()
#1 0x5652f961e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd9a5acb0c0 <unknown>
#3 0x7fd99fb80fff gsignal
#4 0x7fd99fb8242a abort
#5 0x5652f961d105 base::debug::BreakDebugger()
#6 0x5652f9637bca logging::LogMessage::~LogMessage()
#7 0x5652f86c72b1 content::ZygoteHostImpl::Init()
#8 0x5652f8339c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5652f833fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5652fd4699a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5652f9359a00 content::RunNamedProcessTypeMain()
#12 0x5652f935a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5652f9363f24 service_manager::Main()
#14 0x5652f9358f14 content::ContentMain()
#15 0x5652fd4689b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5652fd468a42 headless::HeadlessBrowserMain()
#17 0x5652f9360f9d headless::HeadlessShellMain()
#18 0x5652f79bf1ac ChromeMain
#19 0x7fd99fb6e2e1 __libc_start_main
#20 0x5652f79bf02a _start
  r8: 0000000000000000  r9: 00007fffb35fd600 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffb35fdcf8 r13: 0000000000000161 r14: 00007fffb35fdd00 r15: 00007fffb35fd899
  di: 0000000000000002  si: 00007fffb35fd600  bp: 00007fffb35fd840  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd99fb80fff  sp: 00007fffb35fd678
  ip: 00007fd99fb80fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020154.868264:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5652f961eb0c base::debug::StackTrace::StackTrace()
#1 0x5652f9637780 logging::LogMessage::~LogMessage()
#2 0x5652f86c72b1 content::ZygoteHostImpl::Init()
#3 0x5652f8339c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5652f833fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5652fd4699a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5652f9359a00 content::RunNamedProcessTypeMain()
#7 0x5652f935a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5652f9363f24 service_manager::Main()
#9 0x5652f9358f14 content::ContentMain()
#10 0x5652fd4689b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5652fd468a42 headless::HeadlessBrowserMain()
#12 0x5652f9360f9d headless::HeadlessShellMain()
#13 0x5652f79bf1ac ChromeMain
#14 0x7fd99fb6e2e1 __libc_start_main
#15 0x5652f79bf02a _start

Received signal 6
#0 0x5652f961eb0c base::debug::StackTrace::StackTrace()
#1 0x5652f961e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd9a5acb0c0 <unknown>
#3 0x7fd99fb80fff gsignal
#4 0x7fd99fb8242a abort
#5 0x5652f961d105 base::debug::BreakDebugger()
#6 0x5652f9637bca logging::LogMessage::~LogMessage()
#7 0x5652f86c72b1 content::ZygoteHostImpl::Init()
#8 0x5652f8339c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5652f833fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5652fd4699a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5652f9359a00 content::RunNamedProcessTypeMain()
#12 0x5652f935a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5652f9363f24 service_manager::Main()
#14 0x5652f9358f14 content::ContentMain()
#15 0x5652fd4689b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5652fd468a42 headless::HeadlessBrowserMain()
#17 0x5652f9360f9d headless::HeadlessShellMain()
#18 0x5652f79bf1ac ChromeMain
#19 0x7fd99fb6e2e1 __libc_start_main
#20 0x5652f79bf02a _start
  r8: 0000000000000000  r9: 00007fffb35fd600 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffb35fdcf8 r13: 0000000000000161 r14: 00007fffb35fdd00 r15: 00007fffb35fd899
  di: 0000000000000002  si: 00007fffb35fd600  bp: 00007fffb35fd840  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd99fb80fff  sp: 00007fffb35fd678
  ip: 00007fd99fb80fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020153.514170:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5645bd4b5b0c base::debug::StackTrace::StackTrace()
#1 0x5645bd4ce780 logging::LogMessage::~LogMessage()
#2 0x5645bc55e2b1 content::ZygoteHostImpl::Init()
#3 0x5645bc1d0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5645bc1d6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5645c13009a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5645bd1f0a00 content::RunNamedProcessTypeMain()
#7 0x5645bd1f12e8 content::ContentMainRunnerImpl::Run()
#8 0x5645bd1faf24 service_manager::Main()
#9 0x5645bd1eff14 content::ContentMain()
#10 0x5645c12ff9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5645c12ffa42 headless::HeadlessBrowserMain()
#12 0x5645bd1f7f9d headless::HeadlessShellMain()
#13 0x5645bb8561ac ChromeMain
#14 0x7f7fb9ffc2e1 __libc_start_main
#15 0x5645bb85602a _start

Received signal 6
#0 0x5645bd4b5b0c base::debug::StackTrace::StackTrace()
#1 0x5645bd4b5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7fbff590c0 <unknown>
#3 0x7f7fba00efff gsignal
#4 0x7f7fba01042a abort
#5 0x5645bd4b4105 base::debug::BreakDebugger()
#6 0x5645bd4cebca logging::LogMessage::~LogMessage()
#7 0x5645bc55e2b1 content::ZygoteHostImpl::Init()
#8 0x5645bc1d0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5645bc1d6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5645c13009a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5645bd1f0a00 content::RunNamedProcessTypeMain()
#12 0x5645bd1f12e8 content::ContentMainRunnerImpl::Run()
#13 0x5645bd1faf24 service_manager::Main()
#14 0x5645bd1eff14 content::ContentMain()
#15 0x5645c12ff9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5645c12ffa42 headless::HeadlessBrowserMain()
#17 0x5645bd1f7f9d headless::HeadlessShellMain()
#18 0x5645bb8561ac ChromeMain
#19 0x7f7fb9ffc2e1 __libc_start_main
#20 0x5645bb85602a _start
  r8: 0000000000000000  r9: 00007ffc24fb0f20 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc24fb1618 r13: 0000000000000161 r14: 00007ffc24fb1620 r15: 00007ffc24fb11b9
  di: 0000000000000002  si: 00007ffc24fb0f20  bp: 00007ffc24fb1160  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7fba00efff  sp: 00007ffc24fb0f98
  ip: 00007f7fba00efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020153.514170:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5645bd4b5b0c base::debug::StackTrace::StackTrace()
#1 0x5645bd4ce780 logging::LogMessage::~LogMessage()
#2 0x5645bc55e2b1 content::ZygoteHostImpl::Init()
#3 0x5645bc1d0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5645bc1d6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5645c13009a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5645bd1f0a00 content::RunNamedProcessTypeMain()
#7 0x5645bd1f12e8 content::ContentMainRunnerImpl::Run()
#8 0x5645bd1faf24 service_manager::Main()
#9 0x5645bd1eff14 content::ContentMain()
#10 0x5645c12ff9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5645c12ffa42 headless::HeadlessBrowserMain()
#12 0x5645bd1f7f9d headless::HeadlessShellMain()
#13 0x5645bb8561ac ChromeMain
#14 0x7f7fb9ffc2e1 __libc_start_main
#15 0x5645bb85602a _start

Received signal 6
#0 0x5645bd4b5b0c base::debug::StackTrace::StackTrace()
#1 0x5645bd4b5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f7fbff590c0 <unknown>
#3 0x7f7fba00efff gsignal
#4 0x7f7fba01042a abort
#5 0x5645bd4b4105 base::debug::BreakDebugger()
#6 0x5645bd4cebca logging::LogMessage::~LogMessage()
#7 0x5645bc55e2b1 content::ZygoteHostImpl::Init()
#8 0x5645bc1d0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5645bc1d6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5645c13009a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5645bd1f0a00 content::RunNamedProcessTypeMain()
#12 0x5645bd1f12e8 content::ContentMainRunnerImpl::Run()
#13 0x5645bd1faf24 service_manager::Main()
#14 0x5645bd1eff14 content::ContentMain()
#15 0x5645c12ff9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5645c12ffa42 headless::HeadlessBrowserMain()
#17 0x5645bd1f7f9d headless::HeadlessShellMain()
#18 0x5645bb8561ac ChromeMain
#19 0x7f7fb9ffc2e1 __libc_start_main
#20 0x5645bb85602a _start
  r8: 0000000000000000  r9: 00007ffc24fb0f20 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc24fb1618 r13: 0000000000000161 r14: 00007ffc24fb1620 r15: 00007ffc24fb11b9
  di: 0000000000000002  si: 00007ffc24fb0f20  bp: 00007ffc24fb1160  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f7fba00efff  sp: 00007ffc24fb0f98
  ip: 00007f7fba00efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020153.547623:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5606ee04fb0c base::debug::StackTrace::StackTrace()
#1 0x5606ee068780 logging::LogMessage::~LogMessage()
#2 0x5606ed0f82b1 content::ZygoteHostImpl::Init()
#3 0x5606ecd6ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5606ecd70a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5606f1e9a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5606edd8aa00 content::RunNamedProcessTypeMain()
#7 0x5606edd8b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5606edd94f24 service_manager::Main()
#9 0x5606edd89f14 content::ContentMain()
#10 0x5606f1e999b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5606f1e99a42 headless::HeadlessBrowserMain()
#12 0x5606edd91f9d headless::HeadlessShellMain()
#13 0x5606ec3f01ac ChromeMain
#14 0x7ffa04d222e1 __libc_start_main
#15 0x5606ec3f002a _start

Received signal 6
#0 0x5606ee04fb0c base::debug::StackTrace::StackTrace()
#1 0x5606ee04f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ffa0ac7f0c0 <unknown>
#3 0x7ffa04d34fff gsignal
#4 0x7ffa04d3642a abort
#5 0x5606ee04e105 base::debug::BreakDebugger()
#6 0x5606ee068bca logging::LogMessage::~LogMessage()
#7 0x5606ed0f82b1 content::ZygoteHostImpl::Init()
#8 0x5606ecd6ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5606ecd70a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5606f1e9a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5606edd8aa00 content::RunNamedProcessTypeMain()
#12 0x5606edd8b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5606edd94f24 service_manager::Main()
#14 0x5606edd89f14 content::ContentMain()
#15 0x5606f1e999b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5606f1e99a42 headless::HeadlessBrowserMain()
#17 0x5606edd91f9d headless::HeadlessShellMain()
#18 0x5606ec3f01ac ChromeMain
#19 0x7ffa04d222e1 __libc_start_main
#20 0x5606ec3f002a _start
  r8: 0000000000000000  r9: 00007fffaa3bdcb0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffaa3be3a8 r13: 0000000000000161 r14: 00007fffaa3be3b0 r15: 00007fffaa3bdf49
  di: 0000000000000002  si: 00007fffaa3bdcb0  bp: 00007fffaa3bdef0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ffa04d34fff  sp: 00007fffaa3bdd28
  ip: 00007ffa04d34fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020153.547623:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5606ee04fb0c base::debug::StackTrace::StackTrace()
#1 0x5606ee068780 logging::LogMessage::~LogMessage()
#2 0x5606ed0f82b1 content::ZygoteHostImpl::Init()
#3 0x5606ecd6ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5606ecd70a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5606f1e9a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5606edd8aa00 content::RunNamedProcessTypeMain()
#7 0x5606edd8b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5606edd94f24 service_manager::Main()
#9 0x5606edd89f14 content::ContentMain()
#10 0x5606f1e999b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5606f1e99a42 headless::HeadlessBrowserMain()
#12 0x5606edd91f9d headless::HeadlessShellMain()
#13 0x5606ec3f01ac ChromeMain
#14 0x7ffa04d222e1 __libc_start_main
#15 0x5606ec3f002a _start

Received signal 6
#0 0x5606ee04fb0c base::debug::StackTrace::StackTrace()
#1 0x5606ee04f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ffa0ac7f0c0 <unknown>
#3 0x7ffa04d34fff gsignal
#4 0x7ffa04d3642a abort
#5 0x5606ee04e105 base::debug::BreakDebugger()
#6 0x5606ee068bca logging::LogMessage::~LogMessage()
#7 0x5606ed0f82b1 content::ZygoteHostImpl::Init()
#8 0x5606ecd6ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5606ecd70a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5606f1e9a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5606edd8aa00 content::RunNamedProcessTypeMain()
#12 0x5606edd8b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5606edd94f24 service_manager::Main()
#14 0x5606edd89f14 content::ContentMain()
#15 0x5606f1e999b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5606f1e99a42 headless::HeadlessBrowserMain()
#17 0x5606edd91f9d headless::HeadlessShellMain()
#18 0x5606ec3f01ac ChromeMain
#19 0x7ffa04d222e1 __libc_start_main
#20 0x5606ec3f002a _start
  r8: 0000000000000000  r9: 00007fffaa3bdcb0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffaa3be3a8 r13: 0000000000000161 r14: 00007fffaa3be3b0 r15: 00007fffaa3bdf49
  di: 0000000000000002  si: 00007fffaa3bdcb0  bp: 00007fffaa3bdef0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ffa04d34fff  sp: 00007fffaa3bdd28
  ip: 00007ffa04d34fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020239.604273:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55750a227b0c base::debug::StackTrace::StackTrace()
#1 0x55750a240780 logging::LogMessage::~LogMessage()
#2 0x5575092d02b1 content::ZygoteHostImpl::Init()
#3 0x557508f42c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557508f48a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55750e0729a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557509f62a00 content::RunNamedProcessTypeMain()
#7 0x557509f632e8 content::ContentMainRunnerImpl::Run()
#8 0x557509f6cf24 service_manager::Main()
#9 0x557509f61f14 content::ContentMain()
#10 0x55750e0719b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55750e071a42 headless::HeadlessBrowserMain()
#12 0x557509f69f9d headless::HeadlessShellMain()
#13 0x5575085c81ac ChromeMain
#14 0x7f1dbccc62e1 __libc_start_main
#15 0x5575085c802a _start

Received signal 6
#0 0x55750a227b0c base::debug::StackTrace::StackTrace()
#1 0x55750a227671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1dc2c230c0 <unknown>
#3 0x7f1dbccd8fff gsignal
#4 0x7f1dbccda42a abort
#5 0x55750a226105 base::debug::BreakDebugger()
#6 0x55750a240bca logging::LogMessage::~LogMessage()
#7 0x5575092d02b1 content::ZygoteHostImpl::Init()
#8 0x557508f42c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557508f48a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55750e0729a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557509f62a00 content::RunNamedProcessTypeMain()
#12 0x557509f632e8 content::ContentMainRunnerImpl::Run()
#13 0x557509f6cf24 service_manager::Main()
#14 0x557509f61f14 content::ContentMain()
#15 0x55750e0719b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55750e071a42 headless::HeadlessBrowserMain()
#17 0x557509f69f9d headless::HeadlessShellMain()
#18 0x5575085c81ac ChromeMain
#19 0x7f1dbccc62e1 __libc_start_main
#20 0x5575085c802a _start
  r8: 0000000000000000  r9: 00007ffeb95d98d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeb95d9fc8 r13: 0000000000000161 r14: 00007ffeb95d9fd0 r15: 00007ffeb95d9b69
  di: 0000000000000002  si: 00007ffeb95d98d0  bp: 00007ffeb95d9b10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1dbccd8fff  sp: 00007ffeb95d9948
  ip: 00007f1dbccd8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020239.604273:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55750a227b0c base::debug::StackTrace::StackTrace()
#1 0x55750a240780 logging::LogMessage::~LogMessage()
#2 0x5575092d02b1 content::ZygoteHostImpl::Init()
#3 0x557508f42c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557508f48a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55750e0729a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557509f62a00 content::RunNamedProcessTypeMain()
#7 0x557509f632e8 content::ContentMainRunnerImpl::Run()
#8 0x557509f6cf24 service_manager::Main()
#9 0x557509f61f14 content::ContentMain()
#10 0x55750e0719b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55750e071a42 headless::HeadlessBrowserMain()
#12 0x557509f69f9d headless::HeadlessShellMain()
#13 0x5575085c81ac ChromeMain
#14 0x7f1dbccc62e1 __libc_start_main
#15 0x5575085c802a _start

Received signal 6
#0 0x55750a227b0c base::debug::StackTrace::StackTrace()
#1 0x55750a227671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1dc2c230c0 <unknown>
#3 0x7f1dbccd8fff gsignal
#4 0x7f1dbccda42a abort
#5 0x55750a226105 base::debug::BreakDebugger()
#6 0x55750a240bca logging::LogMessage::~LogMessage()
#7 0x5575092d02b1 content::ZygoteHostImpl::Init()
#8 0x557508f42c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557508f48a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55750e0729a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557509f62a00 content::RunNamedProcessTypeMain()
#12 0x557509f632e8 content::ContentMainRunnerImpl::Run()
#13 0x557509f6cf24 service_manager::Main()
#14 0x557509f61f14 content::ContentMain()
#15 0x55750e0719b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55750e071a42 headless::HeadlessBrowserMain()
#17 0x557509f69f9d headless::HeadlessShellMain()
#18 0x5575085c81ac ChromeMain
#19 0x7f1dbccc62e1 __libc_start_main
#20 0x5575085c802a _start
  r8: 0000000000000000  r9: 00007ffeb95d98d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeb95d9fc8 r13: 0000000000000161 r14: 00007ffeb95d9fd0 r15: 00007ffeb95d9b69
  di: 0000000000000002  si: 00007ffeb95d98d0  bp: 00007ffeb95d9b10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1dbccd8fff  sp: 00007ffeb95d9948
  ip: 00007f1dbccd8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020124.768060:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d2f5f2cb0c base::debug::StackTrace::StackTrace()
#1 0x55d2f5f45780 logging::LogMessage::~LogMessage()
#2 0x55d2f4fd52b1 content::ZygoteHostImpl::Init()
#3 0x55d2f4c47c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d2f4c4da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d2f9d779a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d2f5c67a00 content::RunNamedProcessTypeMain()
#7 0x55d2f5c682e8 content::ContentMainRunnerImpl::Run()
#8 0x55d2f5c71f24 service_manager::Main()
#9 0x55d2f5c66f14 content::ContentMain()
#10 0x55d2f9d769b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d2f9d76a42 headless::HeadlessBrowserMain()
#12 0x55d2f5c6ef9d headless::HeadlessShellMain()
#13 0x55d2f42cd1ac ChromeMain
#14 0x7fad641472e1 __libc_start_main
#15 0x55d2f42cd02a _start

Received signal 6
#0 0x55d2f5f2cb0c base::debug::StackTrace::StackTrace()
#1 0x55d2f5f2c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fad6a0a40c0 <unknown>
#3 0x7fad64159fff gsignal
#4 0x7fad6415b42a abort
#5 0x55d2f5f2b105 base::debug::BreakDebugger()
#6 0x55d2f5f45bca logging::LogMessage::~LogMessage()
#7 0x55d2f4fd52b1 content::ZygoteHostImpl::Init()
#8 0x55d2f4c47c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d2f4c4da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d2f9d779a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d2f5c67a00 content::RunNamedProcessTypeMain()
#12 0x55d2f5c682e8 content::ContentMainRunnerImpl::Run()
#13 0x55d2f5c71f24 service_manager::Main()
#14 0x55d2f5c66f14 content::ContentMain()
#15 0x55d2f9d769b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d2f9d76a42 headless::HeadlessBrowserMain()
#17 0x55d2f5c6ef9d headless::HeadlessShellMain()
#18 0x55d2f42cd1ac ChromeMain
#19 0x7fad641472e1 __libc_start_main
#20 0x55d2f42cd02a _start
  r8: 0000000000000000  r9: 00007fffe088ea00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffe088f0f8 r13: 0000000000000161 r14: 00007fffe088f100 r15: 00007fffe088ec99
  di: 0000000000000002  si: 00007fffe088ea00  bp: 00007fffe088ec40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fad64159fff  sp: 00007fffe088ea78
  ip: 00007fad64159fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020124.768060:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d2f5f2cb0c base::debug::StackTrace::StackTrace()
#1 0x55d2f5f45780 logging::LogMessage::~LogMessage()
#2 0x55d2f4fd52b1 content::ZygoteHostImpl::Init()
#3 0x55d2f4c47c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d2f4c4da69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d2f9d779a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d2f5c67a00 content::RunNamedProcessTypeMain()
#7 0x55d2f5c682e8 content::ContentMainRunnerImpl::Run()
#8 0x55d2f5c71f24 service_manager::Main()
#9 0x55d2f5c66f14 content::ContentMain()
#10 0x55d2f9d769b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d2f9d76a42 headless::HeadlessBrowserMain()
#12 0x55d2f5c6ef9d headless::HeadlessShellMain()
#13 0x55d2f42cd1ac ChromeMain
#14 0x7fad641472e1 __libc_start_main
#15 0x55d2f42cd02a _start

Received signal 6
#0 0x55d2f5f2cb0c base::debug::StackTrace::StackTrace()
#1 0x55d2f5f2c671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fad6a0a40c0 <unknown>
#3 0x7fad64159fff gsignal
#4 0x7fad6415b42a abort
#5 0x55d2f5f2b105 base::debug::BreakDebugger()
#6 0x55d2f5f45bca logging::LogMessage::~LogMessage()
#7 0x55d2f4fd52b1 content::ZygoteHostImpl::Init()
#8 0x55d2f4c47c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d2f4c4da69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d2f9d779a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d2f5c67a00 content::RunNamedProcessTypeMain()
#12 0x55d2f5c682e8 content::ContentMainRunnerImpl::Run()
#13 0x55d2f5c71f24 service_manager::Main()
#14 0x55d2f5c66f14 content::ContentMain()
#15 0x55d2f9d769b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d2f9d76a42 headless::HeadlessBrowserMain()
#17 0x55d2f5c6ef9d headless::HeadlessShellMain()
#18 0x55d2f42cd1ac ChromeMain
#19 0x7fad641472e1 __libc_start_main
#20 0x55d2f42cd02a _start
  r8: 0000000000000000  r9: 00007fffe088ea00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffe088f0f8 r13: 0000000000000161 r14: 00007fffe088f100 r15: 00007fffe088ec99
  di: 0000000000000002  si: 00007fffe088ea00  bp: 00007fffe088ec40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fad64159fff  sp: 00007fffe088ea78
  ip: 00007fad64159fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020221.604556:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b14b193b0c base::debug::StackTrace::StackTrace()
#1 0x55b14b1ac780 logging::LogMessage::~LogMessage()
#2 0x55b14a23c2b1 content::ZygoteHostImpl::Init()
#3 0x55b149eaec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b149eb4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b14efde9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b14aecea00 content::RunNamedProcessTypeMain()
#7 0x55b14aecf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b14aed8f24 service_manager::Main()
#9 0x55b14aecdf14 content::ContentMain()
#10 0x55b14efdd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b14efdda42 headless::HeadlessBrowserMain()
#12 0x55b14aed5f9d headless::HeadlessShellMain()
#13 0x55b1495341ac ChromeMain
#14 0x7f4ce9f712e1 __libc_start_main
#15 0x55b14953402a _start

Received signal 6
#0 0x55b14b193b0c base::debug::StackTrace::StackTrace()
#1 0x55b14b193671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4cefece0c0 <unknown>
#3 0x7f4ce9f83fff gsignal
#4 0x7f4ce9f8542a abort
#5 0x55b14b192105 base::debug::BreakDebugger()
#6 0x55b14b1acbca logging::LogMessage::~LogMessage()
#7 0x55b14a23c2b1 content::ZygoteHostImpl::Init()
#8 0x55b149eaec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b149eb4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b14efde9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b14aecea00 content::RunNamedProcessTypeMain()
#12 0x55b14aecf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b14aed8f24 service_manager::Main()
#14 0x55b14aecdf14 content::ContentMain()
#15 0x55b14efdd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b14efdda42 headless::HeadlessBrowserMain()
#17 0x55b14aed5f9d headless::HeadlessShellMain()
#18 0x55b1495341ac ChromeMain
#19 0x7f4ce9f712e1 __libc_start_main
#20 0x55b14953402a _start
  r8: 0000000000000000  r9: 00007ffd5130d860 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd5130df58 r13: 0000000000000161 r14: 00007ffd5130df60 r15: 00007ffd5130daf9
  di: 0000000000000002  si: 00007ffd5130d860  bp: 00007ffd5130daa0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4ce9f83fff  sp: 00007ffd5130d8d8
  ip: 00007f4ce9f83fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020221.604556:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b14b193b0c base::debug::StackTrace::StackTrace()
#1 0x55b14b1ac780 logging::LogMessage::~LogMessage()
#2 0x55b14a23c2b1 content::ZygoteHostImpl::Init()
#3 0x55b149eaec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b149eb4a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b14efde9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b14aecea00 content::RunNamedProcessTypeMain()
#7 0x55b14aecf2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b14aed8f24 service_manager::Main()
#9 0x55b14aecdf14 content::ContentMain()
#10 0x55b14efdd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b14efdda42 headless::HeadlessBrowserMain()
#12 0x55b14aed5f9d headless::HeadlessShellMain()
#13 0x55b1495341ac ChromeMain
#14 0x7f4ce9f712e1 __libc_start_main
#15 0x55b14953402a _start

Received signal 6
#0 0x55b14b193b0c base::debug::StackTrace::StackTrace()
#1 0x55b14b193671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4cefece0c0 <unknown>
#3 0x7f4ce9f83fff gsignal
#4 0x7f4ce9f8542a abort
#5 0x55b14b192105 base::debug::BreakDebugger()
#6 0x55b14b1acbca logging::LogMessage::~LogMessage()
#7 0x55b14a23c2b1 content::ZygoteHostImpl::Init()
#8 0x55b149eaec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b149eb4a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b14efde9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b14aecea00 content::RunNamedProcessTypeMain()
#12 0x55b14aecf2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b14aed8f24 service_manager::Main()
#14 0x55b14aecdf14 content::ContentMain()
#15 0x55b14efdd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b14efdda42 headless::HeadlessBrowserMain()
#17 0x55b14aed5f9d headless::HeadlessShellMain()
#18 0x55b1495341ac ChromeMain
#19 0x7f4ce9f712e1 __libc_start_main
#20 0x55b14953402a _start
  r8: 0000000000000000  r9: 00007ffd5130d860 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd5130df58 r13: 0000000000000161 r14: 00007ffd5130df60 r15: 00007ffd5130daf9
  di: 0000000000000002  si: 00007ffd5130d860  bp: 00007ffd5130daa0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4ce9f83fff  sp: 00007ffd5130d8d8
  ip: 00007f4ce9f83fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020221.583946:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563f4c7c8b0c base::debug::StackTrace::StackTrace()
#1 0x563f4c7e1780 logging::LogMessage::~LogMessage()
#2 0x563f4b8712b1 content::ZygoteHostImpl::Init()
#3 0x563f4b4e3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563f4b4e9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563f506139a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563f4c503a00 content::RunNamedProcessTypeMain()
#7 0x563f4c5042e8 content::ContentMainRunnerImpl::Run()
#8 0x563f4c50df24 service_manager::Main()
#9 0x563f4c502f14 content::ContentMain()
#10 0x563f506129b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563f50612a42 headless::HeadlessBrowserMain()
#12 0x563f4c50af9d headless::HeadlessShellMain()
#13 0x563f4ab691ac ChromeMain
#14 0x7ff68864c2e1 __libc_start_main
#15 0x563f4ab6902a _start

Received signal 6
#0 0x563f4c7c8b0c base::debug::StackTrace::StackTrace()
#1 0x563f4c7c8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff68e5a90c0 <unknown>
#3 0x7ff68865efff gsignal
#4 0x7ff68866042a abort
#5 0x563f4c7c7105 base::debug::BreakDebugger()
#6 0x563f4c7e1bca logging::LogMessage::~LogMessage()
#7 0x563f4b8712b1 content::ZygoteHostImpl::Init()
#8 0x563f4b4e3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563f4b4e9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563f506139a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563f4c503a00 content::RunNamedProcessTypeMain()
#12 0x563f4c5042e8 content::ContentMainRunnerImpl::Run()
#13 0x563f4c50df24 service_manager::Main()
#14 0x563f4c502f14 content::ContentMain()
#15 0x563f506129b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563f50612a42 headless::HeadlessBrowserMain()
#17 0x563f4c50af9d headless::HeadlessShellMain()
#18 0x563f4ab691ac ChromeMain
#19 0x7ff68864c2e1 __libc_start_main
#20 0x563f4ab6902a _start
  r8: 0000000000000000  r9: 00007ffdcd4697f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdcd469ee8 r13: 0000000000000161 r14: 00007ffdcd469ef0 r15: 00007ffdcd469a89
  di: 0000000000000002  si: 00007ffdcd4697f0  bp: 00007ffdcd469a30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff68865efff  sp: 00007ffdcd469868
  ip: 00007ff68865efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020221.583946:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563f4c7c8b0c base::debug::StackTrace::StackTrace()
#1 0x563f4c7e1780 logging::LogMessage::~LogMessage()
#2 0x563f4b8712b1 content::ZygoteHostImpl::Init()
#3 0x563f4b4e3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563f4b4e9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563f506139a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563f4c503a00 content::RunNamedProcessTypeMain()
#7 0x563f4c5042e8 content::ContentMainRunnerImpl::Run()
#8 0x563f4c50df24 service_manager::Main()
#9 0x563f4c502f14 content::ContentMain()
#10 0x563f506129b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563f50612a42 headless::HeadlessBrowserMain()
#12 0x563f4c50af9d headless::HeadlessShellMain()
#13 0x563f4ab691ac ChromeMain
#14 0x7ff68864c2e1 __libc_start_main
#15 0x563f4ab6902a _start

Received signal 6
#0 0x563f4c7c8b0c base::debug::StackTrace::StackTrace()
#1 0x563f4c7c8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ff68e5a90c0 <unknown>
#3 0x7ff68865efff gsignal
#4 0x7ff68866042a abort
#5 0x563f4c7c7105 base::debug::BreakDebugger()
#6 0x563f4c7e1bca logging::LogMessage::~LogMessage()
#7 0x563f4b8712b1 content::ZygoteHostImpl::Init()
#8 0x563f4b4e3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563f4b4e9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563f506139a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563f4c503a00 content::RunNamedProcessTypeMain()
#12 0x563f4c5042e8 content::ContentMainRunnerImpl::Run()
#13 0x563f4c50df24 service_manager::Main()
#14 0x563f4c502f14 content::ContentMain()
#15 0x563f506129b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563f50612a42 headless::HeadlessBrowserMain()
#17 0x563f4c50af9d headless::HeadlessShellMain()
#18 0x563f4ab691ac ChromeMain
#19 0x7ff68864c2e1 __libc_start_main
#20 0x563f4ab6902a _start
  r8: 0000000000000000  r9: 00007ffdcd4697f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdcd469ee8 r13: 0000000000000161 r14: 00007ffdcd469ef0 r15: 00007ffdcd469a89
  di: 0000000000000002  si: 00007ffdcd4697f0  bp: 00007ffdcd469a30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ff68865efff  sp: 00007ffdcd469868
  ip: 00007ff68865efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020221.248808:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56293eda1b0c base::debug::StackTrace::StackTrace()
#1 0x56293edba780 logging::LogMessage::~LogMessage()
#2 0x56293de4a2b1 content::ZygoteHostImpl::Init()
#3 0x56293dabcc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56293dac2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562942bec9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56293eadca00 content::RunNamedProcessTypeMain()
#7 0x56293eadd2e8 content::ContentMainRunnerImpl::Run()
#8 0x56293eae6f24 service_manager::Main()
#9 0x56293eadbf14 content::ContentMain()
#10 0x562942beb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562942beba42 headless::HeadlessBrowserMain()
#12 0x56293eae3f9d headless::HeadlessShellMain()
#13 0x56293d1421ac ChromeMain
#14 0x7fc9532692e1 __libc_start_main
#15 0x56293d14202a _start

Received signal 6
#0 0x56293eda1b0c base::debug::StackTrace::StackTrace()
#1 0x56293eda1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc9591c60c0 <unknown>
#3 0x7fc95327bfff gsignal
#4 0x7fc95327d42a abort
#5 0x56293eda0105 base::debug::BreakDebugger()
#6 0x56293edbabca logging::LogMessage::~LogMessage()
#7 0x56293de4a2b1 content::ZygoteHostImpl::Init()
#8 0x56293dabcc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56293dac2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562942bec9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56293eadca00 content::RunNamedProcessTypeMain()
#12 0x56293eadd2e8 content::ContentMainRunnerImpl::Run()
#13 0x56293eae6f24 service_manager::Main()
#14 0x56293eadbf14 content::ContentMain()
#15 0x562942beb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562942beba42 headless::HeadlessBrowserMain()
#17 0x56293eae3f9d headless::HeadlessShellMain()
#18 0x56293d1421ac ChromeMain
#19 0x7fc9532692e1 __libc_start_main
#20 0x56293d14202a _start
  r8: 0000000000000000  r9: 00007ffde2bdb880 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde2bdbf78 r13: 0000000000000161 r14: 00007ffde2bdbf80 r15: 00007ffde2bdbb19
  di: 0000000000000002  si: 00007ffde2bdb880  bp: 00007ffde2bdbac0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc95327bfff  sp: 00007ffde2bdb8f8
  ip: 00007fc95327bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020221.248808:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56293eda1b0c base::debug::StackTrace::StackTrace()
#1 0x56293edba780 logging::LogMessage::~LogMessage()
#2 0x56293de4a2b1 content::ZygoteHostImpl::Init()
#3 0x56293dabcc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56293dac2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562942bec9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56293eadca00 content::RunNamedProcessTypeMain()
#7 0x56293eadd2e8 content::ContentMainRunnerImpl::Run()
#8 0x56293eae6f24 service_manager::Main()
#9 0x56293eadbf14 content::ContentMain()
#10 0x562942beb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562942beba42 headless::HeadlessBrowserMain()
#12 0x56293eae3f9d headless::HeadlessShellMain()
#13 0x56293d1421ac ChromeMain
#14 0x7fc9532692e1 __libc_start_main
#15 0x56293d14202a _start

Received signal 6
#0 0x56293eda1b0c base::debug::StackTrace::StackTrace()
#1 0x56293eda1671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc9591c60c0 <unknown>
#3 0x7fc95327bfff gsignal
#4 0x7fc95327d42a abort
#5 0x56293eda0105 base::debug::BreakDebugger()
#6 0x56293edbabca logging::LogMessage::~LogMessage()
#7 0x56293de4a2b1 content::ZygoteHostImpl::Init()
#8 0x56293dabcc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56293dac2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562942bec9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56293eadca00 content::RunNamedProcessTypeMain()
#12 0x56293eadd2e8 content::ContentMainRunnerImpl::Run()
#13 0x56293eae6f24 service_manager::Main()
#14 0x56293eadbf14 content::ContentMain()
#15 0x562942beb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562942beba42 headless::HeadlessBrowserMain()
#17 0x56293eae3f9d headless::HeadlessShellMain()
#18 0x56293d1421ac ChromeMain
#19 0x7fc9532692e1 __libc_start_main
#20 0x56293d14202a _start
  r8: 0000000000000000  r9: 00007ffde2bdb880 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde2bdbf78 r13: 0000000000000161 r14: 00007ffde2bdbf80 r15: 00007ffde2bdbb19
  di: 0000000000000002  si: 00007ffde2bdb880  bp: 00007ffde2bdbac0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc95327bfff  sp: 00007ffde2bdb8f8
  ip: 00007fc95327bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020303.260372:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b23b3a5b0c base::debug::StackTrace::StackTrace()
#1 0x55b23b3be780 logging::LogMessage::~LogMessage()
#2 0x55b23a44e2b1 content::ZygoteHostImpl::Init()
#3 0x55b23a0c0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b23a0c6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b23f1f09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b23b0e0a00 content::RunNamedProcessTypeMain()
#7 0x55b23b0e12e8 content::ContentMainRunnerImpl::Run()
#8 0x55b23b0eaf24 service_manager::Main()
#9 0x55b23b0dff14 content::ContentMain()
#10 0x55b23f1ef9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b23f1efa42 headless::HeadlessBrowserMain()
#12 0x55b23b0e7f9d headless::HeadlessShellMain()
#13 0x55b2397461ac ChromeMain
#14 0x7f6ad41702e1 __libc_start_main
#15 0x55b23974602a _start

Received signal 6
#0 0x55b23b3a5b0c base::debug::StackTrace::StackTrace()
#1 0x55b23b3a5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6ada0cd0c0 <unknown>
#3 0x7f6ad4182fff gsignal
#4 0x7f6ad418442a abort
#5 0x55b23b3a4105 base::debug::BreakDebugger()
#6 0x55b23b3bebca logging::LogMessage::~LogMessage()
#7 0x55b23a44e2b1 content::ZygoteHostImpl::Init()
#8 0x55b23a0c0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b23a0c6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b23f1f09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b23b0e0a00 content::RunNamedProcessTypeMain()
#12 0x55b23b0e12e8 content::ContentMainRunnerImpl::Run()
#13 0x55b23b0eaf24 service_manager::Main()
#14 0x55b23b0dff14 content::ContentMain()
#15 0x55b23f1ef9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b23f1efa42 headless::HeadlessBrowserMain()
#17 0x55b23b0e7f9d headless::HeadlessShellMain()
#18 0x55b2397461ac ChromeMain
#19 0x7f6ad41702e1 __libc_start_main
#20 0x55b23974602a _start
  r8: 0000000000000000  r9: 00007ffe3aeb1920 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe3aeb2018 r13: 0000000000000161 r14: 00007ffe3aeb2020 r15: 00007ffe3aeb1bb9
  di: 0000000000000002  si: 00007ffe3aeb1920  bp: 00007ffe3aeb1b60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6ad4182fff  sp: 00007ffe3aeb1998
  ip: 00007f6ad4182fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020303.260372:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b23b3a5b0c base::debug::StackTrace::StackTrace()
#1 0x55b23b3be780 logging::LogMessage::~LogMessage()
#2 0x55b23a44e2b1 content::ZygoteHostImpl::Init()
#3 0x55b23a0c0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b23a0c6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b23f1f09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b23b0e0a00 content::RunNamedProcessTypeMain()
#7 0x55b23b0e12e8 content::ContentMainRunnerImpl::Run()
#8 0x55b23b0eaf24 service_manager::Main()
#9 0x55b23b0dff14 content::ContentMain()
#10 0x55b23f1ef9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b23f1efa42 headless::HeadlessBrowserMain()
#12 0x55b23b0e7f9d headless::HeadlessShellMain()
#13 0x55b2397461ac ChromeMain
#14 0x7f6ad41702e1 __libc_start_main
#15 0x55b23974602a _start

Received signal 6
#0 0x55b23b3a5b0c base::debug::StackTrace::StackTrace()
#1 0x55b23b3a5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f6ada0cd0c0 <unknown>
#3 0x7f6ad4182fff gsignal
#4 0x7f6ad418442a abort
#5 0x55b23b3a4105 base::debug::BreakDebugger()
#6 0x55b23b3bebca logging::LogMessage::~LogMessage()
#7 0x55b23a44e2b1 content::ZygoteHostImpl::Init()
#8 0x55b23a0c0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b23a0c6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b23f1f09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b23b0e0a00 content::RunNamedProcessTypeMain()
#12 0x55b23b0e12e8 content::ContentMainRunnerImpl::Run()
#13 0x55b23b0eaf24 service_manager::Main()
#14 0x55b23b0dff14 content::ContentMain()
#15 0x55b23f1ef9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b23f1efa42 headless::HeadlessBrowserMain()
#17 0x55b23b0e7f9d headless::HeadlessShellMain()
#18 0x55b2397461ac ChromeMain
#19 0x7f6ad41702e1 __libc_start_main
#20 0x55b23974602a _start
  r8: 0000000000000000  r9: 00007ffe3aeb1920 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe3aeb2018 r13: 0000000000000161 r14: 00007ffe3aeb2020 r15: 00007ffe3aeb1bb9
  di: 0000000000000002  si: 00007ffe3aeb1920  bp: 00007ffe3aeb1b60  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f6ad4182fff  sp: 00007ffe3aeb1998
  ip: 00007f6ad4182fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020325.169812:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557985ff5b0c base::debug::StackTrace::StackTrace()
#1 0x55798600e780 logging::LogMessage::~LogMessage()
#2 0x55798509e2b1 content::ZygoteHostImpl::Init()
#3 0x557984d10c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557984d16a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557989e409a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557985d30a00 content::RunNamedProcessTypeMain()
#7 0x557985d312e8 content::ContentMainRunnerImpl::Run()
#8 0x557985d3af24 service_manager::Main()
#9 0x557985d2ff14 content::ContentMain()
#10 0x557989e3f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557989e3fa42 headless::HeadlessBrowserMain()
#12 0x557985d37f9d headless::HeadlessShellMain()
#13 0x5579843961ac ChromeMain
#14 0x7f088d3882e1 __libc_start_main
#15 0x55798439602a _start

Received signal 6
#0 0x557985ff5b0c base::debug::StackTrace::StackTrace()
#1 0x557985ff5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f08932e50c0 <unknown>
#3 0x7f088d39afff gsignal
#4 0x7f088d39c42a abort
#5 0x557985ff4105 base::debug::BreakDebugger()
#6 0x55798600ebca logging::LogMessage::~LogMessage()
#7 0x55798509e2b1 content::ZygoteHostImpl::Init()
#8 0x557984d10c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557984d16a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557989e409a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557985d30a00 content::RunNamedProcessTypeMain()
#12 0x557985d312e8 content::ContentMainRunnerImpl::Run()
#13 0x557985d3af24 service_manager::Main()
#14 0x557985d2ff14 content::ContentMain()
#15 0x557989e3f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557989e3fa42 headless::HeadlessBrowserMain()
#17 0x557985d37f9d headless::HeadlessShellMain()
#18 0x5579843961ac ChromeMain
#19 0x7f088d3882e1 __libc_start_main
#20 0x55798439602a _start
  r8: 0000000000000000  r9: 00007ffe86f630c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe86f637b8 r13: 0000000000000161 r14: 00007ffe86f637c0 r15: 00007ffe86f63359
  di: 0000000000000002  si: 00007ffe86f630c0  bp: 00007ffe86f63300  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f088d39afff  sp: 00007ffe86f63138
  ip: 00007f088d39afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020325.169812:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557985ff5b0c base::debug::StackTrace::StackTrace()
#1 0x55798600e780 logging::LogMessage::~LogMessage()
#2 0x55798509e2b1 content::ZygoteHostImpl::Init()
#3 0x557984d10c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557984d16a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557989e409a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557985d30a00 content::RunNamedProcessTypeMain()
#7 0x557985d312e8 content::ContentMainRunnerImpl::Run()
#8 0x557985d3af24 service_manager::Main()
#9 0x557985d2ff14 content::ContentMain()
#10 0x557989e3f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557989e3fa42 headless::HeadlessBrowserMain()
#12 0x557985d37f9d headless::HeadlessShellMain()
#13 0x5579843961ac ChromeMain
#14 0x7f088d3882e1 __libc_start_main
#15 0x55798439602a _start

Received signal 6
#0 0x557985ff5b0c base::debug::StackTrace::StackTrace()
#1 0x557985ff5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f08932e50c0 <unknown>
#3 0x7f088d39afff gsignal
#4 0x7f088d39c42a abort
#5 0x557985ff4105 base::debug::BreakDebugger()
#6 0x55798600ebca logging::LogMessage::~LogMessage()
#7 0x55798509e2b1 content::ZygoteHostImpl::Init()
#8 0x557984d10c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557984d16a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557989e409a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557985d30a00 content::RunNamedProcessTypeMain()
#12 0x557985d312e8 content::ContentMainRunnerImpl::Run()
#13 0x557985d3af24 service_manager::Main()
#14 0x557985d2ff14 content::ContentMain()
#15 0x557989e3f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557989e3fa42 headless::HeadlessBrowserMain()
#17 0x557985d37f9d headless::HeadlessShellMain()
#18 0x5579843961ac ChromeMain
#19 0x7f088d3882e1 __libc_start_main
#20 0x55798439602a _start
  r8: 0000000000000000  r9: 00007ffe86f630c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe86f637b8 r13: 0000000000000161 r14: 00007ffe86f637c0 r15: 00007ffe86f63359
  di: 0000000000000002  si: 00007ffe86f630c0  bp: 00007ffe86f63300  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f088d39afff  sp: 00007ffe86f63138
  ip: 00007f088d39afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020311.853242:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5587b06eeb0c base::debug::StackTrace::StackTrace()
#1 0x5587b0707780 logging::LogMessage::~LogMessage()
#2 0x5587af7972b1 content::ZygoteHostImpl::Init()
#3 0x5587af409c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5587af40fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5587b45399a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5587b0429a00 content::RunNamedProcessTypeMain()
#7 0x5587b042a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5587b0433f24 service_manager::Main()
#9 0x5587b0428f14 content::ContentMain()
#10 0x5587b45389b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5587b4538a42 headless::HeadlessBrowserMain()
#12 0x5587b0430f9d headless::HeadlessShellMain()
#13 0x5587aea8f1ac ChromeMain
#14 0x7f0ee78412e1 __libc_start_main
#15 0x5587aea8f02a _start

Received signal 6
#0 0x5587b06eeb0c base::debug::StackTrace::StackTrace()
#1 0x5587b06ee671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0eed79e0c0 <unknown>
#3 0x7f0ee7853fff gsignal
#4 0x7f0ee785542a abort
#5 0x5587b06ed105 base::debug::BreakDebugger()
#6 0x5587b0707bca logging::LogMessage::~LogMessage()
#7 0x5587af7972b1 content::ZygoteHostImpl::Init()
#8 0x5587af409c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5587af40fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5587b45399a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5587b0429a00 content::RunNamedProcessTypeMain()
#12 0x5587b042a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5587b0433f24 service_manager::Main()
#14 0x5587b0428f14 content::ContentMain()
#15 0x5587b45389b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5587b4538a42 headless::HeadlessBrowserMain()
#17 0x5587b0430f9d headless::HeadlessShellMain()
#18 0x5587aea8f1ac ChromeMain
#19 0x7f0ee78412e1 __libc_start_main
#20 0x5587aea8f02a _start
  r8: 0000000000000000  r9: 00007ffcf2b305e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf2b30cd8 r13: 0000000000000161 r14: 00007ffcf2b30ce0 r15: 00007ffcf2b30879
  di: 0000000000000002  si: 00007ffcf2b305e0  bp: 00007ffcf2b30820  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0ee7853fff  sp: 00007ffcf2b30658
  ip: 00007f0ee7853fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020311.853242:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5587b06eeb0c base::debug::StackTrace::StackTrace()
#1 0x5587b0707780 logging::LogMessage::~LogMessage()
#2 0x5587af7972b1 content::ZygoteHostImpl::Init()
#3 0x5587af409c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5587af40fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5587b45399a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5587b0429a00 content::RunNamedProcessTypeMain()
#7 0x5587b042a2e8 content::ContentMainRunnerImpl::Run()
#8 0x5587b0433f24 service_manager::Main()
#9 0x5587b0428f14 content::ContentMain()
#10 0x5587b45389b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5587b4538a42 headless::HeadlessBrowserMain()
#12 0x5587b0430f9d headless::HeadlessShellMain()
#13 0x5587aea8f1ac ChromeMain
#14 0x7f0ee78412e1 __libc_start_main
#15 0x5587aea8f02a _start

Received signal 6
#0 0x5587b06eeb0c base::debug::StackTrace::StackTrace()
#1 0x5587b06ee671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0eed79e0c0 <unknown>
#3 0x7f0ee7853fff gsignal
#4 0x7f0ee785542a abort
#5 0x5587b06ed105 base::debug::BreakDebugger()
#6 0x5587b0707bca logging::LogMessage::~LogMessage()
#7 0x5587af7972b1 content::ZygoteHostImpl::Init()
#8 0x5587af409c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5587af40fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5587b45399a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5587b0429a00 content::RunNamedProcessTypeMain()
#12 0x5587b042a2e8 content::ContentMainRunnerImpl::Run()
#13 0x5587b0433f24 service_manager::Main()
#14 0x5587b0428f14 content::ContentMain()
#15 0x5587b45389b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5587b4538a42 headless::HeadlessBrowserMain()
#17 0x5587b0430f9d headless::HeadlessShellMain()
#18 0x5587aea8f1ac ChromeMain
#19 0x7f0ee78412e1 __libc_start_main
#20 0x5587aea8f02a _start
  r8: 0000000000000000  r9: 00007ffcf2b305e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf2b30cd8 r13: 0000000000000161 r14: 00007ffcf2b30ce0 r15: 00007ffcf2b30879
  di: 0000000000000002  si: 00007ffcf2b305e0  bp: 00007ffcf2b30820  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f0ee7853fff  sp: 00007ffcf2b30658
  ip: 00007f0ee7853fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020321.647683:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cb06488b0c base::debug::StackTrace::StackTrace()
#1 0x55cb064a1780 logging::LogMessage::~LogMessage()
#2 0x55cb055312b1 content::ZygoteHostImpl::Init()
#3 0x55cb051a3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cb051a9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cb0a2d39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cb061c3a00 content::RunNamedProcessTypeMain()
#7 0x55cb061c42e8 content::ContentMainRunnerImpl::Run()
#8 0x55cb061cdf24 service_manager::Main()
#9 0x55cb061c2f14 content::ContentMain()
#10 0x55cb0a2d29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cb0a2d2a42 headless::HeadlessBrowserMain()
#12 0x55cb061caf9d headless::HeadlessShellMain()
#13 0x55cb048291ac ChromeMain
#14 0x7f98fef942e1 __libc_start_main
#15 0x55cb0482902a _start

Received signal 6
#0 0x55cb06488b0c base::debug::StackTrace::StackTrace()
#1 0x55cb06488671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9904ef10c0 <unknown>
#3 0x7f98fefa6fff gsignal
#4 0x7f98fefa842a abort
#5 0x55cb06487105 base::debug::BreakDebugger()
#6 0x55cb064a1bca logging::LogMessage::~LogMessage()
#7 0x55cb055312b1 content::ZygoteHostImpl::Init()
#8 0x55cb051a3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cb051a9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cb0a2d39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cb061c3a00 content::RunNamedProcessTypeMain()
#12 0x55cb061c42e8 content::ContentMainRunnerImpl::Run()
#13 0x55cb061cdf24 service_manager::Main()
#14 0x55cb061c2f14 content::ContentMain()
#15 0x55cb0a2d29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cb0a2d2a42 headless::HeadlessBrowserMain()
#17 0x55cb061caf9d headless::HeadlessShellMain()
#18 0x55cb048291ac ChromeMain
#19 0x7f98fef942e1 __libc_start_main
#20 0x55cb0482902a _start
  r8: 0000000000000000  r9: 00007ffca408d4f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffca408dbe8 r13: 0000000000000161 r14: 00007ffca408dbf0 r15: 00007ffca408d789
  di: 0000000000000002  si: 00007ffca408d4f0  bp: 00007ffca408d730  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f98fefa6fff  sp: 00007ffca408d568
  ip: 00007f98fefa6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020321.647683:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cb06488b0c base::debug::StackTrace::StackTrace()
#1 0x55cb064a1780 logging::LogMessage::~LogMessage()
#2 0x55cb055312b1 content::ZygoteHostImpl::Init()
#3 0x55cb051a3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cb051a9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cb0a2d39a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cb061c3a00 content::RunNamedProcessTypeMain()
#7 0x55cb061c42e8 content::ContentMainRunnerImpl::Run()
#8 0x55cb061cdf24 service_manager::Main()
#9 0x55cb061c2f14 content::ContentMain()
#10 0x55cb0a2d29b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cb0a2d2a42 headless::HeadlessBrowserMain()
#12 0x55cb061caf9d headless::HeadlessShellMain()
#13 0x55cb048291ac ChromeMain
#14 0x7f98fef942e1 __libc_start_main
#15 0x55cb0482902a _start

Received signal 6
#0 0x55cb06488b0c base::debug::StackTrace::StackTrace()
#1 0x55cb06488671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9904ef10c0 <unknown>
#3 0x7f98fefa6fff gsignal
#4 0x7f98fefa842a abort
#5 0x55cb06487105 base::debug::BreakDebugger()
#6 0x55cb064a1bca logging::LogMessage::~LogMessage()
#7 0x55cb055312b1 content::ZygoteHostImpl::Init()
#8 0x55cb051a3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cb051a9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cb0a2d39a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cb061c3a00 content::RunNamedProcessTypeMain()
#12 0x55cb061c42e8 content::ContentMainRunnerImpl::Run()
#13 0x55cb061cdf24 service_manager::Main()
#14 0x55cb061c2f14 content::ContentMain()
#15 0x55cb0a2d29b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cb0a2d2a42 headless::HeadlessBrowserMain()
#17 0x55cb061caf9d headless::HeadlessShellMain()
#18 0x55cb048291ac ChromeMain
#19 0x7f98fef942e1 __libc_start_main
#20 0x55cb0482902a _start
  r8: 0000000000000000  r9: 00007ffca408d4f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffca408dbe8 r13: 0000000000000161 r14: 00007ffca408dbf0 r15: 00007ffca408d789
  di: 0000000000000002  si: 00007ffca408d4f0  bp: 00007ffca408d730  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f98fefa6fff  sp: 00007ffca408d568
  ip: 00007f98fefa6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020319.908264:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55aaf30a4b0c base::debug::StackTrace::StackTrace()
#1 0x55aaf30bd780 logging::LogMessage::~LogMessage()
#2 0x55aaf214d2b1 content::ZygoteHostImpl::Init()
#3 0x55aaf1dbfc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55aaf1dc5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55aaf6eef9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55aaf2ddfa00 content::RunNamedProcessTypeMain()
#7 0x55aaf2de02e8 content::ContentMainRunnerImpl::Run()
#8 0x55aaf2de9f24 service_manager::Main()
#9 0x55aaf2ddef14 content::ContentMain()
#10 0x55aaf6eee9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55aaf6eeea42 headless::HeadlessBrowserMain()
#12 0x55aaf2de6f9d headless::HeadlessShellMain()
#13 0x55aaf14451ac ChromeMain
#14 0x7f9164ea32e1 __libc_start_main
#15 0x55aaf144502a _start

Received signal 6
#0 0x55aaf30a4b0c base::debug::StackTrace::StackTrace()
#1 0x55aaf30a4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f916ae000c0 <unknown>
#3 0x7f9164eb5fff gsignal
#4 0x7f9164eb742a abort
#5 0x55aaf30a3105 base::debug::BreakDebugger()
#6 0x55aaf30bdbca logging::LogMessage::~LogMessage()
#7 0x55aaf214d2b1 content::ZygoteHostImpl::Init()
#8 0x55aaf1dbfc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55aaf1dc5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55aaf6eef9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55aaf2ddfa00 content::RunNamedProcessTypeMain()
#12 0x55aaf2de02e8 content::ContentMainRunnerImpl::Run()
#13 0x55aaf2de9f24 service_manager::Main()
#14 0x55aaf2ddef14 content::ContentMain()
#15 0x55aaf6eee9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55aaf6eeea42 headless::HeadlessBrowserMain()
#17 0x55aaf2de6f9d headless::HeadlessShellMain()
#18 0x55aaf14451ac ChromeMain
#19 0x7f9164ea32e1 __libc_start_main
#20 0x55aaf144502a _start
  r8: 0000000000000000  r9: 00007ffed293e840 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffed293ef38 r13: 0000000000000161 r14: 00007ffed293ef40 r15: 00007ffed293ead9
  di: 0000000000000002  si: 00007ffed293e840  bp: 00007ffed293ea80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9164eb5fff  sp: 00007ffed293e8b8
  ip: 00007f9164eb5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020319.908264:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55aaf30a4b0c base::debug::StackTrace::StackTrace()
#1 0x55aaf30bd780 logging::LogMessage::~LogMessage()
#2 0x55aaf214d2b1 content::ZygoteHostImpl::Init()
#3 0x55aaf1dbfc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55aaf1dc5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55aaf6eef9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55aaf2ddfa00 content::RunNamedProcessTypeMain()
#7 0x55aaf2de02e8 content::ContentMainRunnerImpl::Run()
#8 0x55aaf2de9f24 service_manager::Main()
#9 0x55aaf2ddef14 content::ContentMain()
#10 0x55aaf6eee9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55aaf6eeea42 headless::HeadlessBrowserMain()
#12 0x55aaf2de6f9d headless::HeadlessShellMain()
#13 0x55aaf14451ac ChromeMain
#14 0x7f9164ea32e1 __libc_start_main
#15 0x55aaf144502a _start

Received signal 6
#0 0x55aaf30a4b0c base::debug::StackTrace::StackTrace()
#1 0x55aaf30a4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f916ae000c0 <unknown>
#3 0x7f9164eb5fff gsignal
#4 0x7f9164eb742a abort
#5 0x55aaf30a3105 base::debug::BreakDebugger()
#6 0x55aaf30bdbca logging::LogMessage::~LogMessage()
#7 0x55aaf214d2b1 content::ZygoteHostImpl::Init()
#8 0x55aaf1dbfc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55aaf1dc5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55aaf6eef9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55aaf2ddfa00 content::RunNamedProcessTypeMain()
#12 0x55aaf2de02e8 content::ContentMainRunnerImpl::Run()
#13 0x55aaf2de9f24 service_manager::Main()
#14 0x55aaf2ddef14 content::ContentMain()
#15 0x55aaf6eee9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55aaf6eeea42 headless::HeadlessBrowserMain()
#17 0x55aaf2de6f9d headless::HeadlessShellMain()
#18 0x55aaf14451ac ChromeMain
#19 0x7f9164ea32e1 __libc_start_main
#20 0x55aaf144502a _start
  r8: 0000000000000000  r9: 00007ffed293e840 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffed293ef38 r13: 0000000000000161 r14: 00007ffed293ef40 r15: 00007ffed293ead9
  di: 0000000000000002  si: 00007ffed293e840  bp: 00007ffed293ea80  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9164eb5fff  sp: 00007ffed293e8b8
  ip: 00007f9164eb5fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020323.212323:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562d304e7b0c base::debug::StackTrace::StackTrace()
#1 0x562d30500780 logging::LogMessage::~LogMessage()
#2 0x562d2f5902b1 content::ZygoteHostImpl::Init()
#3 0x562d2f202c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562d2f208a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562d343329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562d30222a00 content::RunNamedProcessTypeMain()
#7 0x562d302232e8 content::ContentMainRunnerImpl::Run()
#8 0x562d3022cf24 service_manager::Main()
#9 0x562d30221f14 content::ContentMain()
#10 0x562d343319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562d34331a42 headless::HeadlessBrowserMain()
#12 0x562d30229f9d headless::HeadlessShellMain()
#13 0x562d2e8881ac ChromeMain
#14 0x7f25ef82b2e1 __libc_start_main
#15 0x562d2e88802a _start

Received signal 6
#0 0x562d304e7b0c base::debug::StackTrace::StackTrace()
#1 0x562d304e7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f25f57880c0 <unknown>
#3 0x7f25ef83dfff gsignal
#4 0x7f25ef83f42a abort
#5 0x562d304e6105 base::debug::BreakDebugger()
#6 0x562d30500bca logging::LogMessage::~LogMessage()
#7 0x562d2f5902b1 content::ZygoteHostImpl::Init()
#8 0x562d2f202c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562d2f208a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562d343329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562d30222a00 content::RunNamedProcessTypeMain()
#12 0x562d302232e8 content::ContentMainRunnerImpl::Run()
#13 0x562d3022cf24 service_manager::Main()
#14 0x562d30221f14 content::ContentMain()
#15 0x562d343319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562d34331a42 headless::HeadlessBrowserMain()
#17 0x562d30229f9d headless::HeadlessShellMain()
#18 0x562d2e8881ac ChromeMain
#19 0x7f25ef82b2e1 __libc_start_main
#20 0x562d2e88802a _start
  r8: 0000000000000000  r9: 00007fff8b3f52d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff8b3f59c8 r13: 0000000000000161 r14: 00007fff8b3f59d0 r15: 00007fff8b3f5569
  di: 0000000000000002  si: 00007fff8b3f52d0  bp: 00007fff8b3f5510  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f25ef83dfff  sp: 00007fff8b3f5348
  ip: 00007f25ef83dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020323.212323:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562d304e7b0c base::debug::StackTrace::StackTrace()
#1 0x562d30500780 logging::LogMessage::~LogMessage()
#2 0x562d2f5902b1 content::ZygoteHostImpl::Init()
#3 0x562d2f202c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562d2f208a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562d343329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x562d30222a00 content::RunNamedProcessTypeMain()
#7 0x562d302232e8 content::ContentMainRunnerImpl::Run()
#8 0x562d3022cf24 service_manager::Main()
#9 0x562d30221f14 content::ContentMain()
#10 0x562d343319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562d34331a42 headless::HeadlessBrowserMain()
#12 0x562d30229f9d headless::HeadlessShellMain()
#13 0x562d2e8881ac ChromeMain
#14 0x7f25ef82b2e1 __libc_start_main
#15 0x562d2e88802a _start

Received signal 6
#0 0x562d304e7b0c base::debug::StackTrace::StackTrace()
#1 0x562d304e7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f25f57880c0 <unknown>
#3 0x7f25ef83dfff gsignal
#4 0x7f25ef83f42a abort
#5 0x562d304e6105 base::debug::BreakDebugger()
#6 0x562d30500bca logging::LogMessage::~LogMessage()
#7 0x562d2f5902b1 content::ZygoteHostImpl::Init()
#8 0x562d2f202c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562d2f208a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562d343329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x562d30222a00 content::RunNamedProcessTypeMain()
#12 0x562d302232e8 content::ContentMainRunnerImpl::Run()
#13 0x562d3022cf24 service_manager::Main()
#14 0x562d30221f14 content::ContentMain()
#15 0x562d343319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562d34331a42 headless::HeadlessBrowserMain()
#17 0x562d30229f9d headless::HeadlessShellMain()
#18 0x562d2e8881ac ChromeMain
#19 0x7f25ef82b2e1 __libc_start_main
#20 0x562d2e88802a _start
  r8: 0000000000000000  r9: 00007fff8b3f52d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff8b3f59c8 r13: 0000000000000161 r14: 00007fff8b3f59d0 r15: 00007fff8b3f5569
  di: 0000000000000002  si: 00007fff8b3f52d0  bp: 00007fff8b3f5510  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f25ef83dfff  sp: 00007fff8b3f5348
  ip: 00007f25ef83dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020250.633194:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f76de1eb0c base::debug::StackTrace::StackTrace()
#1 0x55f76de37780 logging::LogMessage::~LogMessage()
#2 0x55f76cec72b1 content::ZygoteHostImpl::Init()
#3 0x55f76cb39c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f76cb3fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f771c699a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f76db59a00 content::RunNamedProcessTypeMain()
#7 0x55f76db5a2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f76db63f24 service_manager::Main()
#9 0x55f76db58f14 content::ContentMain()
#10 0x55f771c689b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f771c68a42 headless::HeadlessBrowserMain()
#12 0x55f76db60f9d headless::HeadlessShellMain()
#13 0x55f76c1bf1ac ChromeMain
#14 0x7f14059372e1 __libc_start_main
#15 0x55f76c1bf02a _start

Received signal 6
#0 0x55f76de1eb0c base::debug::StackTrace::StackTrace()
#1 0x55f76de1e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f140b8940c0 <unknown>
#3 0x7f1405949fff gsignal
#4 0x7f140594b42a abort
#5 0x55f76de1d105 base::debug::BreakDebugger()
#6 0x55f76de37bca logging::LogMessage::~LogMessage()
#7 0x55f76cec72b1 content::ZygoteHostImpl::Init()
#8 0x55f76cb39c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f76cb3fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f771c699a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f76db59a00 content::RunNamedProcessTypeMain()
#12 0x55f76db5a2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f76db63f24 service_manager::Main()
#14 0x55f76db58f14 content::ContentMain()
#15 0x55f771c689b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f771c68a42 headless::HeadlessBrowserMain()
#17 0x55f76db60f9d headless::HeadlessShellMain()
#18 0x55f76c1bf1ac ChromeMain
#19 0x7f14059372e1 __libc_start_main
#20 0x55f76c1bf02a _start
  r8: 0000000000000000  r9: 00007ffde3f79bd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde3f7a2c8 r13: 0000000000000161 r14: 00007ffde3f7a2d0 r15: 00007ffde3f79e69
  di: 0000000000000002  si: 00007ffde3f79bd0  bp: 00007ffde3f79e10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1405949fff  sp: 00007ffde3f79c48
  ip: 00007f1405949fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020250.633194:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f76de1eb0c base::debug::StackTrace::StackTrace()
#1 0x55f76de37780 logging::LogMessage::~LogMessage()
#2 0x55f76cec72b1 content::ZygoteHostImpl::Init()
#3 0x55f76cb39c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f76cb3fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f771c699a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f76db59a00 content::RunNamedProcessTypeMain()
#7 0x55f76db5a2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f76db63f24 service_manager::Main()
#9 0x55f76db58f14 content::ContentMain()
#10 0x55f771c689b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f771c68a42 headless::HeadlessBrowserMain()
#12 0x55f76db60f9d headless::HeadlessShellMain()
#13 0x55f76c1bf1ac ChromeMain
#14 0x7f14059372e1 __libc_start_main
#15 0x55f76c1bf02a _start

Received signal 6
#0 0x55f76de1eb0c base::debug::StackTrace::StackTrace()
#1 0x55f76de1e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f140b8940c0 <unknown>
#3 0x7f1405949fff gsignal
#4 0x7f140594b42a abort
#5 0x55f76de1d105 base::debug::BreakDebugger()
#6 0x55f76de37bca logging::LogMessage::~LogMessage()
#7 0x55f76cec72b1 content::ZygoteHostImpl::Init()
#8 0x55f76cb39c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f76cb3fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f771c699a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f76db59a00 content::RunNamedProcessTypeMain()
#12 0x55f76db5a2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f76db63f24 service_manager::Main()
#14 0x55f76db58f14 content::ContentMain()
#15 0x55f771c689b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f771c68a42 headless::HeadlessBrowserMain()
#17 0x55f76db60f9d headless::HeadlessShellMain()
#18 0x55f76c1bf1ac ChromeMain
#19 0x7f14059372e1 __libc_start_main
#20 0x55f76c1bf02a _start
  r8: 0000000000000000  r9: 00007ffde3f79bd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde3f7a2c8 r13: 0000000000000161 r14: 00007ffde3f7a2d0 r15: 00007ffde3f79e69
  di: 0000000000000002  si: 00007ffde3f79bd0  bp: 00007ffde3f79e10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1405949fff  sp: 00007ffde3f79c48
  ip: 00007f1405949fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020224.907232:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555a1150db0c base::debug::StackTrace::StackTrace()
#1 0x555a11526780 logging::LogMessage::~LogMessage()
#2 0x555a105b62b1 content::ZygoteHostImpl::Init()
#3 0x555a10228c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555a1022ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555a153589a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555a11248a00 content::RunNamedProcessTypeMain()
#7 0x555a112492e8 content::ContentMainRunnerImpl::Run()
#8 0x555a11252f24 service_manager::Main()
#9 0x555a11247f14 content::ContentMain()
#10 0x555a153579b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555a15357a42 headless::HeadlessBrowserMain()
#12 0x555a1124ff9d headless::HeadlessShellMain()
#13 0x555a0f8ae1ac ChromeMain
#14 0x7f5c254f02e1 __libc_start_main
#15 0x555a0f8ae02a _start

Received signal 6
#0 0x555a1150db0c base::debug::StackTrace::StackTrace()
#1 0x555a1150d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5c2b44d0c0 <unknown>
#3 0x7f5c25502fff gsignal
#4 0x7f5c2550442a abort
#5 0x555a1150c105 base::debug::BreakDebugger()
#6 0x555a11526bca logging::LogMessage::~LogMessage()
#7 0x555a105b62b1 content::ZygoteHostImpl::Init()
#8 0x555a10228c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555a1022ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555a153589a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555a11248a00 content::RunNamedProcessTypeMain()
#12 0x555a112492e8 content::ContentMainRunnerImpl::Run()
#13 0x555a11252f24 service_manager::Main()
#14 0x555a11247f14 content::ContentMain()
#15 0x555a153579b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555a15357a42 headless::HeadlessBrowserMain()
#17 0x555a1124ff9d headless::HeadlessShellMain()
#18 0x555a0f8ae1ac ChromeMain
#19 0x7f5c254f02e1 __libc_start_main
#20 0x555a0f8ae02a _start
  r8: 0000000000000000  r9: 00007fff521f0930 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff521f1028 r13: 0000000000000161 r14: 00007fff521f1030 r15: 00007fff521f0bc9
  di: 0000000000000002  si: 00007fff521f0930  bp: 00007fff521f0b70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5c25502fff  sp: 00007fff521f09a8
  ip: 00007f5c25502fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020224.907232:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555a1150db0c base::debug::StackTrace::StackTrace()
#1 0x555a11526780 logging::LogMessage::~LogMessage()
#2 0x555a105b62b1 content::ZygoteHostImpl::Init()
#3 0x555a10228c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555a1022ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555a153589a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555a11248a00 content::RunNamedProcessTypeMain()
#7 0x555a112492e8 content::ContentMainRunnerImpl::Run()
#8 0x555a11252f24 service_manager::Main()
#9 0x555a11247f14 content::ContentMain()
#10 0x555a153579b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555a15357a42 headless::HeadlessBrowserMain()
#12 0x555a1124ff9d headless::HeadlessShellMain()
#13 0x555a0f8ae1ac ChromeMain
#14 0x7f5c254f02e1 __libc_start_main
#15 0x555a0f8ae02a _start

Received signal 6
#0 0x555a1150db0c base::debug::StackTrace::StackTrace()
#1 0x555a1150d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f5c2b44d0c0 <unknown>
#3 0x7f5c25502fff gsignal
#4 0x7f5c2550442a abort
#5 0x555a1150c105 base::debug::BreakDebugger()
#6 0x555a11526bca logging::LogMessage::~LogMessage()
#7 0x555a105b62b1 content::ZygoteHostImpl::Init()
#8 0x555a10228c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555a1022ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555a153589a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555a11248a00 content::RunNamedProcessTypeMain()
#12 0x555a112492e8 content::ContentMainRunnerImpl::Run()
#13 0x555a11252f24 service_manager::Main()
#14 0x555a11247f14 content::ContentMain()
#15 0x555a153579b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555a15357a42 headless::HeadlessBrowserMain()
#17 0x555a1124ff9d headless::HeadlessShellMain()
#18 0x555a0f8ae1ac ChromeMain
#19 0x7f5c254f02e1 __libc_start_main
#20 0x555a0f8ae02a _start
  r8: 0000000000000000  r9: 00007fff521f0930 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff521f1028 r13: 0000000000000161 r14: 00007fff521f1030 r15: 00007fff521f0bc9
  di: 0000000000000002  si: 00007fff521f0930  bp: 00007fff521f0b70  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f5c25502fff  sp: 00007fff521f09a8
  ip: 00007f5c25502fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020233.691232:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5591c0eb0b0c base::debug::StackTrace::StackTrace()
#1 0x5591c0ec9780 logging::LogMessage::~LogMessage()
#2 0x5591bff592b1 content::ZygoteHostImpl::Init()
#3 0x5591bfbcbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5591bfbd1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5591c4cfb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5591c0beba00 content::RunNamedProcessTypeMain()
#7 0x5591c0bec2e8 content::ContentMainRunnerImpl::Run()
#8 0x5591c0bf5f24 service_manager::Main()
#9 0x5591c0beaf14 content::ContentMain()
#10 0x5591c4cfa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5591c4cfaa42 headless::HeadlessBrowserMain()
#12 0x5591c0bf2f9d headless::HeadlessShellMain()
#13 0x5591bf2511ac ChromeMain
#14 0x7fd38c37f2e1 __libc_start_main
#15 0x5591bf25102a _start

Received signal 6
#0 0x5591c0eb0b0c base::debug::StackTrace::StackTrace()
#1 0x5591c0eb0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd3922dc0c0 <unknown>
#3 0x7fd38c391fff gsignal
#4 0x7fd38c39342a abort
#5 0x5591c0eaf105 base::debug::BreakDebugger()
#6 0x5591c0ec9bca logging::LogMessage::~LogMessage()
#7 0x5591bff592b1 content::ZygoteHostImpl::Init()
#8 0x5591bfbcbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5591bfbd1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5591c4cfb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5591c0beba00 content::RunNamedProcessTypeMain()
#12 0x5591c0bec2e8 content::ContentMainRunnerImpl::Run()
#13 0x5591c0bf5f24 service_manager::Main()
#14 0x5591c0beaf14 content::ContentMain()
#15 0x5591c4cfa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5591c4cfaa42 headless::HeadlessBrowserMain()
#17 0x5591c0bf2f9d headless::HeadlessShellMain()
#18 0x5591bf2511ac ChromeMain
#19 0x7fd38c37f2e1 __libc_start_main
#20 0x5591bf25102a _start
  r8: 0000000000000000  r9: 00007ffe70786cf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe707873e8 r13: 0000000000000161 r14: 00007ffe707873f0 r15: 00007ffe70786f89
  di: 0000000000000002  si: 00007ffe70786cf0  bp: 00007ffe70786f30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd38c391fff  sp: 00007ffe70786d68
  ip: 00007fd38c391fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020233.691232:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5591c0eb0b0c base::debug::StackTrace::StackTrace()
#1 0x5591c0ec9780 logging::LogMessage::~LogMessage()
#2 0x5591bff592b1 content::ZygoteHostImpl::Init()
#3 0x5591bfbcbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5591bfbd1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5591c4cfb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5591c0beba00 content::RunNamedProcessTypeMain()
#7 0x5591c0bec2e8 content::ContentMainRunnerImpl::Run()
#8 0x5591c0bf5f24 service_manager::Main()
#9 0x5591c0beaf14 content::ContentMain()
#10 0x5591c4cfa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5591c4cfaa42 headless::HeadlessBrowserMain()
#12 0x5591c0bf2f9d headless::HeadlessShellMain()
#13 0x5591bf2511ac ChromeMain
#14 0x7fd38c37f2e1 __libc_start_main
#15 0x5591bf25102a _start

Received signal 6
#0 0x5591c0eb0b0c base::debug::StackTrace::StackTrace()
#1 0x5591c0eb0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd3922dc0c0 <unknown>
#3 0x7fd38c391fff gsignal
#4 0x7fd38c39342a abort
#5 0x5591c0eaf105 base::debug::BreakDebugger()
#6 0x5591c0ec9bca logging::LogMessage::~LogMessage()
#7 0x5591bff592b1 content::ZygoteHostImpl::Init()
#8 0x5591bfbcbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5591bfbd1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5591c4cfb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5591c0beba00 content::RunNamedProcessTypeMain()
#12 0x5591c0bec2e8 content::ContentMainRunnerImpl::Run()
#13 0x5591c0bf5f24 service_manager::Main()
#14 0x5591c0beaf14 content::ContentMain()
#15 0x5591c4cfa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5591c4cfaa42 headless::HeadlessBrowserMain()
#17 0x5591c0bf2f9d headless::HeadlessShellMain()
#18 0x5591bf2511ac ChromeMain
#19 0x7fd38c37f2e1 __libc_start_main
#20 0x5591bf25102a _start
  r8: 0000000000000000  r9: 00007ffe70786cf0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe707873e8 r13: 0000000000000161 r14: 00007ffe707873f0 r15: 00007ffe70786f89
  di: 0000000000000002  si: 00007ffe70786cf0  bp: 00007ffe70786f30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd38c391fff  sp: 00007ffe70786d68
  ip: 00007fd38c391fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020232.254036:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55be488e3b0c base::debug::StackTrace::StackTrace()
#1 0x55be488fc780 logging::LogMessage::~LogMessage()
#2 0x55be4798c2b1 content::ZygoteHostImpl::Init()
#3 0x55be475fec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55be47604a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55be4c72e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55be4861ea00 content::RunNamedProcessTypeMain()
#7 0x55be4861f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55be48628f24 service_manager::Main()
#9 0x55be4861df14 content::ContentMain()
#10 0x55be4c72d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55be4c72da42 headless::HeadlessBrowserMain()
#12 0x55be48625f9d headless::HeadlessShellMain()
#13 0x55be46c841ac ChromeMain
#14 0x7f3b0531f2e1 __libc_start_main
#15 0x55be46c8402a _start

Received signal 6
#0 0x55be488e3b0c base::debug::StackTrace::StackTrace()
#1 0x55be488e3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3b0b27c0c0 <unknown>
#3 0x7f3b05331fff gsignal
#4 0x7f3b0533342a abort
#5 0x55be488e2105 base::debug::BreakDebugger()
#6 0x55be488fcbca logging::LogMessage::~LogMessage()
#7 0x55be4798c2b1 content::ZygoteHostImpl::Init()
#8 0x55be475fec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55be47604a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55be4c72e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55be4861ea00 content::RunNamedProcessTypeMain()
#12 0x55be4861f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55be48628f24 service_manager::Main()
#14 0x55be4861df14 content::ContentMain()
#15 0x55be4c72d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55be4c72da42 headless::HeadlessBrowserMain()
#17 0x55be48625f9d headless::HeadlessShellMain()
#18 0x55be46c841ac ChromeMain
#19 0x7f3b0531f2e1 __libc_start_main
#20 0x55be46c8402a _start
  r8: 0000000000000000  r9: 00007ffedb7d3c90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedb7d4388 r13: 0000000000000161 r14: 00007ffedb7d4390 r15: 00007ffedb7d3f29
  di: 0000000000000002  si: 00007ffedb7d3c90  bp: 00007ffedb7d3ed0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3b05331fff  sp: 00007ffedb7d3d08
  ip: 00007f3b05331fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020232.254036:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55be488e3b0c base::debug::StackTrace::StackTrace()
#1 0x55be488fc780 logging::LogMessage::~LogMessage()
#2 0x55be4798c2b1 content::ZygoteHostImpl::Init()
#3 0x55be475fec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55be47604a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55be4c72e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55be4861ea00 content::RunNamedProcessTypeMain()
#7 0x55be4861f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55be48628f24 service_manager::Main()
#9 0x55be4861df14 content::ContentMain()
#10 0x55be4c72d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55be4c72da42 headless::HeadlessBrowserMain()
#12 0x55be48625f9d headless::HeadlessShellMain()
#13 0x55be46c841ac ChromeMain
#14 0x7f3b0531f2e1 __libc_start_main
#15 0x55be46c8402a _start

Received signal 6
#0 0x55be488e3b0c base::debug::StackTrace::StackTrace()
#1 0x55be488e3671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3b0b27c0c0 <unknown>
#3 0x7f3b05331fff gsignal
#4 0x7f3b0533342a abort
#5 0x55be488e2105 base::debug::BreakDebugger()
#6 0x55be488fcbca logging::LogMessage::~LogMessage()
#7 0x55be4798c2b1 content::ZygoteHostImpl::Init()
#8 0x55be475fec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55be47604a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55be4c72e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55be4861ea00 content::RunNamedProcessTypeMain()
#12 0x55be4861f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55be48628f24 service_manager::Main()
#14 0x55be4861df14 content::ContentMain()
#15 0x55be4c72d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55be4c72da42 headless::HeadlessBrowserMain()
#17 0x55be48625f9d headless::HeadlessShellMain()
#18 0x55be46c841ac ChromeMain
#19 0x7f3b0531f2e1 __libc_start_main
#20 0x55be46c8402a _start
  r8: 0000000000000000  r9: 00007ffedb7d3c90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffedb7d4388 r13: 0000000000000161 r14: 00007ffedb7d4390 r15: 00007ffedb7d3f29
  di: 0000000000000002  si: 00007ffedb7d3c90  bp: 00007ffedb7d3ed0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3b05331fff  sp: 00007ffedb7d3d08
  ip: 00007f3b05331fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020230.133094:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564eb62aeb0c base::debug::StackTrace::StackTrace()
#1 0x564eb62c7780 logging::LogMessage::~LogMessage()
#2 0x564eb53572b1 content::ZygoteHostImpl::Init()
#3 0x564eb4fc9c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564eb4fcfa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564eba0f99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564eb5fe9a00 content::RunNamedProcessTypeMain()
#7 0x564eb5fea2e8 content::ContentMainRunnerImpl::Run()
#8 0x564eb5ff3f24 service_manager::Main()
#9 0x564eb5fe8f14 content::ContentMain()
#10 0x564eba0f89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564eba0f8a42 headless::HeadlessBrowserMain()
#12 0x564eb5ff0f9d headless::HeadlessShellMain()
#13 0x564eb464f1ac ChromeMain
#14 0x7fb12336c2e1 __libc_start_main
#15 0x564eb464f02a _start

Received signal 6
#0 0x564eb62aeb0c base::debug::StackTrace::StackTrace()
#1 0x564eb62ae671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb1292c90c0 <unknown>
#3 0x7fb12337efff gsignal
#4 0x7fb12338042a abort
#5 0x564eb62ad105 base::debug::BreakDebugger()
#6 0x564eb62c7bca logging::LogMessage::~LogMessage()
#7 0x564eb53572b1 content::ZygoteHostImpl::Init()
#8 0x564eb4fc9c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564eb4fcfa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564eba0f99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564eb5fe9a00 content::RunNamedProcessTypeMain()
#12 0x564eb5fea2e8 content::ContentMainRunnerImpl::Run()
#13 0x564eb5ff3f24 service_manager::Main()
#14 0x564eb5fe8f14 content::ContentMain()
#15 0x564eba0f89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564eba0f8a42 headless::HeadlessBrowserMain()
#17 0x564eb5ff0f9d headless::HeadlessShellMain()
#18 0x564eb464f1ac ChromeMain
#19 0x7fb12336c2e1 __libc_start_main
#20 0x564eb464f02a _start
  r8: 0000000000000000  r9: 00007ffd8e461310 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd8e461a08 r13: 0000000000000161 r14: 00007ffd8e461a10 r15: 00007ffd8e4615a9
  di: 0000000000000002  si: 00007ffd8e461310  bp: 00007ffd8e461550  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb12337efff  sp: 00007ffd8e461388
  ip: 00007fb12337efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020230.133094:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564eb62aeb0c base::debug::StackTrace::StackTrace()
#1 0x564eb62c7780 logging::LogMessage::~LogMessage()
#2 0x564eb53572b1 content::ZygoteHostImpl::Init()
#3 0x564eb4fc9c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564eb4fcfa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564eba0f99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564eb5fe9a00 content::RunNamedProcessTypeMain()
#7 0x564eb5fea2e8 content::ContentMainRunnerImpl::Run()
#8 0x564eb5ff3f24 service_manager::Main()
#9 0x564eb5fe8f14 content::ContentMain()
#10 0x564eba0f89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564eba0f8a42 headless::HeadlessBrowserMain()
#12 0x564eb5ff0f9d headless::HeadlessShellMain()
#13 0x564eb464f1ac ChromeMain
#14 0x7fb12336c2e1 __libc_start_main
#15 0x564eb464f02a _start

Received signal 6
#0 0x564eb62aeb0c base::debug::StackTrace::StackTrace()
#1 0x564eb62ae671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb1292c90c0 <unknown>
#3 0x7fb12337efff gsignal
#4 0x7fb12338042a abort
#5 0x564eb62ad105 base::debug::BreakDebugger()
#6 0x564eb62c7bca logging::LogMessage::~LogMessage()
#7 0x564eb53572b1 content::ZygoteHostImpl::Init()
#8 0x564eb4fc9c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564eb4fcfa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564eba0f99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564eb5fe9a00 content::RunNamedProcessTypeMain()
#12 0x564eb5fea2e8 content::ContentMainRunnerImpl::Run()
#13 0x564eb5ff3f24 service_manager::Main()
#14 0x564eb5fe8f14 content::ContentMain()
#15 0x564eba0f89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564eba0f8a42 headless::HeadlessBrowserMain()
#17 0x564eb5ff0f9d headless::HeadlessShellMain()
#18 0x564eb464f1ac ChromeMain
#19 0x7fb12336c2e1 __libc_start_main
#20 0x564eb464f02a _start
  r8: 0000000000000000  r9: 00007ffd8e461310 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd8e461a08 r13: 0000000000000161 r14: 00007ffd8e461a10 r15: 00007ffd8e4615a9
  di: 0000000000000002  si: 00007ffd8e461310  bp: 00007ffd8e461550  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb12337efff  sp: 00007ffd8e461388
  ip: 00007fb12337efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020235.942478:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5556d3641b0c base::debug::StackTrace::StackTrace()
#1 0x5556d365a780 logging::LogMessage::~LogMessage()
#2 0x5556d26ea2b1 content::ZygoteHostImpl::Init()
#3 0x5556d235cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5556d2362a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5556d748c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5556d337ca00 content::RunNamedProcessTypeMain()
#7 0x5556d337d2e8 content::ContentMainRunnerImpl::Run()
#8 0x5556d3386f24 service_manager::Main()
#9 0x5556d337bf14 content::ContentMain()
#10 0x5556d748b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5556d748ba42 headless::HeadlessBrowserMain()
#12 0x5556d3383f9d headless::HeadlessShellMain()
#13 0x5556d19e21ac ChromeMain
#14 0x7f8aef5b52e1 __libc_start_main
#15 0x5556d19e202a _start

Received signal 6
#0 0x5556d3641b0c base::debug::StackTrace::StackTrace()
#1 0x5556d3641671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8af55120c0 <unknown>
#3 0x7f8aef5c7fff gsignal
#4 0x7f8aef5c942a abort
#5 0x5556d3640105 base::debug::BreakDebugger()
#6 0x5556d365abca logging::LogMessage::~LogMessage()
#7 0x5556d26ea2b1 content::ZygoteHostImpl::Init()
#8 0x5556d235cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5556d2362a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5556d748c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5556d337ca00 content::RunNamedProcessTypeMain()
#12 0x5556d337d2e8 content::ContentMainRunnerImpl::Run()
#13 0x5556d3386f24 service_manager::Main()
#14 0x5556d337bf14 content::ContentMain()
#15 0x5556d748b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5556d748ba42 headless::HeadlessBrowserMain()
#17 0x5556d3383f9d headless::HeadlessShellMain()
#18 0x5556d19e21ac ChromeMain
#19 0x7f8aef5b52e1 __libc_start_main
#20 0x5556d19e202a _start
  r8: 0000000000000000  r9: 00007ffd02f77570 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd02f77c68 r13: 0000000000000161 r14: 00007ffd02f77c70 r15: 00007ffd02f77809
  di: 0000000000000002  si: 00007ffd02f77570  bp: 00007ffd02f777b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8aef5c7fff  sp: 00007ffd02f775e8
  ip: 00007f8aef5c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020235.942478:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5556d3641b0c base::debug::StackTrace::StackTrace()
#1 0x5556d365a780 logging::LogMessage::~LogMessage()
#2 0x5556d26ea2b1 content::ZygoteHostImpl::Init()
#3 0x5556d235cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5556d2362a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5556d748c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5556d337ca00 content::RunNamedProcessTypeMain()
#7 0x5556d337d2e8 content::ContentMainRunnerImpl::Run()
#8 0x5556d3386f24 service_manager::Main()
#9 0x5556d337bf14 content::ContentMain()
#10 0x5556d748b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5556d748ba42 headless::HeadlessBrowserMain()
#12 0x5556d3383f9d headless::HeadlessShellMain()
#13 0x5556d19e21ac ChromeMain
#14 0x7f8aef5b52e1 __libc_start_main
#15 0x5556d19e202a _start

Received signal 6
#0 0x5556d3641b0c base::debug::StackTrace::StackTrace()
#1 0x5556d3641671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f8af55120c0 <unknown>
#3 0x7f8aef5c7fff gsignal
#4 0x7f8aef5c942a abort
#5 0x5556d3640105 base::debug::BreakDebugger()
#6 0x5556d365abca logging::LogMessage::~LogMessage()
#7 0x5556d26ea2b1 content::ZygoteHostImpl::Init()
#8 0x5556d235cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5556d2362a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5556d748c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5556d337ca00 content::RunNamedProcessTypeMain()
#12 0x5556d337d2e8 content::ContentMainRunnerImpl::Run()
#13 0x5556d3386f24 service_manager::Main()
#14 0x5556d337bf14 content::ContentMain()
#15 0x5556d748b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5556d748ba42 headless::HeadlessBrowserMain()
#17 0x5556d3383f9d headless::HeadlessShellMain()
#18 0x5556d19e21ac ChromeMain
#19 0x7f8aef5b52e1 __libc_start_main
#20 0x5556d19e202a _start
  r8: 0000000000000000  r9: 00007ffd02f77570 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd02f77c68 r13: 0000000000000161 r14: 00007ffd02f77c70 r15: 00007ffd02f77809
  di: 0000000000000002  si: 00007ffd02f77570  bp: 00007ffd02f777b0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8aef5c7fff  sp: 00007ffd02f775e8
  ip: 00007f8aef5c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020235.652948:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564408473b0c base::debug::StackTrace::StackTrace()
#1 0x56440848c780 logging::LogMessage::~LogMessage()
#2 0x56440751c2b1 content::ZygoteHostImpl::Init()
#3 0x56440718ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564407194a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56440c2be9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5644081aea00 content::RunNamedProcessTypeMain()
#7 0x5644081af2e8 content::ContentMainRunnerImpl::Run()
#8 0x5644081b8f24 service_manager::Main()
#9 0x5644081adf14 content::ContentMain()
#10 0x56440c2bd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56440c2bda42 headless::HeadlessBrowserMain()
#12 0x5644081b5f9d headless::HeadlessShellMain()
#13 0x5644068141ac ChromeMain
#14 0x7f46753e12e1 __libc_start_main
#15 0x56440681402a _start

Received signal 6
#0 0x564408473b0c base::debug::StackTrace::StackTrace()
#1 0x564408473671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f467b33e0c0 <unknown>
#3 0x7f46753f3fff gsignal
#4 0x7f46753f542a abort
#5 0x564408472105 base::debug::BreakDebugger()
#6 0x56440848cbca logging::LogMessage::~LogMessage()
#7 0x56440751c2b1 content::ZygoteHostImpl::Init()
#8 0x56440718ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564407194a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56440c2be9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5644081aea00 content::RunNamedProcessTypeMain()
#12 0x5644081af2e8 content::ContentMainRunnerImpl::Run()
#13 0x5644081b8f24 service_manager::Main()
#14 0x5644081adf14 content::ContentMain()
#15 0x56440c2bd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56440c2bda42 headless::HeadlessBrowserMain()
#17 0x5644081b5f9d headless::HeadlessShellMain()
#18 0x5644068141ac ChromeMain
#19 0x7f46753e12e1 __libc_start_main
#20 0x56440681402a _start
  r8: 0000000000000000  r9: 00007ffc66c39520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc66c39c18 r13: 0000000000000161 r14: 00007ffc66c39c20 r15: 00007ffc66c397b9
  di: 0000000000000002  si: 00007ffc66c39520  bp: 00007ffc66c39760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f46753f3fff  sp: 00007ffc66c39598
  ip: 00007f46753f3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020235.652948:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564408473b0c base::debug::StackTrace::StackTrace()
#1 0x56440848c780 logging::LogMessage::~LogMessage()
#2 0x56440751c2b1 content::ZygoteHostImpl::Init()
#3 0x56440718ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564407194a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56440c2be9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5644081aea00 content::RunNamedProcessTypeMain()
#7 0x5644081af2e8 content::ContentMainRunnerImpl::Run()
#8 0x5644081b8f24 service_manager::Main()
#9 0x5644081adf14 content::ContentMain()
#10 0x56440c2bd9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56440c2bda42 headless::HeadlessBrowserMain()
#12 0x5644081b5f9d headless::HeadlessShellMain()
#13 0x5644068141ac ChromeMain
#14 0x7f46753e12e1 __libc_start_main
#15 0x56440681402a _start

Received signal 6
#0 0x564408473b0c base::debug::StackTrace::StackTrace()
#1 0x564408473671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f467b33e0c0 <unknown>
#3 0x7f46753f3fff gsignal
#4 0x7f46753f542a abort
#5 0x564408472105 base::debug::BreakDebugger()
#6 0x56440848cbca logging::LogMessage::~LogMessage()
#7 0x56440751c2b1 content::ZygoteHostImpl::Init()
#8 0x56440718ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564407194a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56440c2be9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5644081aea00 content::RunNamedProcessTypeMain()
#12 0x5644081af2e8 content::ContentMainRunnerImpl::Run()
#13 0x5644081b8f24 service_manager::Main()
#14 0x5644081adf14 content::ContentMain()
#15 0x56440c2bd9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56440c2bda42 headless::HeadlessBrowserMain()
#17 0x5644081b5f9d headless::HeadlessShellMain()
#18 0x5644068141ac ChromeMain
#19 0x7f46753e12e1 __libc_start_main
#20 0x56440681402a _start
  r8: 0000000000000000  r9: 00007ffc66c39520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc66c39c18 r13: 0000000000000161 r14: 00007ffc66c39c20 r15: 00007ffc66c397b9
  di: 0000000000000002  si: 00007ffc66c39520  bp: 00007ffc66c39760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f46753f3fff  sp: 00007ffc66c39598
  ip: 00007f46753f3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020237.425243:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560a1416eb0c base::debug::StackTrace::StackTrace()
#1 0x560a14187780 logging::LogMessage::~LogMessage()
#2 0x560a132172b1 content::ZygoteHostImpl::Init()
#3 0x560a12e89c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560a12e8fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560a17fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560a13ea9a00 content::RunNamedProcessTypeMain()
#7 0x560a13eaa2e8 content::ContentMainRunnerImpl::Run()
#8 0x560a13eb3f24 service_manager::Main()
#9 0x560a13ea8f14 content::ContentMain()
#10 0x560a17fb89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560a17fb8a42 headless::HeadlessBrowserMain()
#12 0x560a13eb0f9d headless::HeadlessShellMain()
#13 0x560a1250f1ac ChromeMain
#14 0x7fc8bc1ed2e1 __libc_start_main
#15 0x560a1250f02a _start

Received signal 6
#0 0x560a1416eb0c base::debug::StackTrace::StackTrace()
#1 0x560a1416e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc8c214a0c0 <unknown>
#3 0x7fc8bc1fffff gsignal
#4 0x7fc8bc20142a abort
#5 0x560a1416d105 base::debug::BreakDebugger()
#6 0x560a14187bca logging::LogMessage::~LogMessage()
#7 0x560a132172b1 content::ZygoteHostImpl::Init()
#8 0x560a12e89c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560a12e8fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560a17fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560a13ea9a00 content::RunNamedProcessTypeMain()
#12 0x560a13eaa2e8 content::ContentMainRunnerImpl::Run()
#13 0x560a13eb3f24 service_manager::Main()
#14 0x560a13ea8f14 content::ContentMain()
#15 0x560a17fb89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560a17fb8a42 headless::HeadlessBrowserMain()
#17 0x560a13eb0f9d headless::HeadlessShellMain()
#18 0x560a1250f1ac ChromeMain
#19 0x7fc8bc1ed2e1 __libc_start_main
#20 0x560a1250f02a _start
  r8: 0000000000000000  r9: 00007ffe03450cc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe034513b8 r13: 0000000000000161 r14: 00007ffe034513c0 r15: 00007ffe03450f59
  di: 0000000000000002  si: 00007ffe03450cc0  bp: 00007ffe03450f00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc8bc1fffff  sp: 00007ffe03450d38
  ip: 00007fc8bc1fffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020237.425243:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560a1416eb0c base::debug::StackTrace::StackTrace()
#1 0x560a14187780 logging::LogMessage::~LogMessage()
#2 0x560a132172b1 content::ZygoteHostImpl::Init()
#3 0x560a12e89c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560a12e8fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560a17fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560a13ea9a00 content::RunNamedProcessTypeMain()
#7 0x560a13eaa2e8 content::ContentMainRunnerImpl::Run()
#8 0x560a13eb3f24 service_manager::Main()
#9 0x560a13ea8f14 content::ContentMain()
#10 0x560a17fb89b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560a17fb8a42 headless::HeadlessBrowserMain()
#12 0x560a13eb0f9d headless::HeadlessShellMain()
#13 0x560a1250f1ac ChromeMain
#14 0x7fc8bc1ed2e1 __libc_start_main
#15 0x560a1250f02a _start

Received signal 6
#0 0x560a1416eb0c base::debug::StackTrace::StackTrace()
#1 0x560a1416e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc8c214a0c0 <unknown>
#3 0x7fc8bc1fffff gsignal
#4 0x7fc8bc20142a abort
#5 0x560a1416d105 base::debug::BreakDebugger()
#6 0x560a14187bca logging::LogMessage::~LogMessage()
#7 0x560a132172b1 content::ZygoteHostImpl::Init()
#8 0x560a12e89c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560a12e8fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560a17fb99a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560a13ea9a00 content::RunNamedProcessTypeMain()
#12 0x560a13eaa2e8 content::ContentMainRunnerImpl::Run()
#13 0x560a13eb3f24 service_manager::Main()
#14 0x560a13ea8f14 content::ContentMain()
#15 0x560a17fb89b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560a17fb8a42 headless::HeadlessBrowserMain()
#17 0x560a13eb0f9d headless::HeadlessShellMain()
#18 0x560a1250f1ac ChromeMain
#19 0x7fc8bc1ed2e1 __libc_start_main
#20 0x560a1250f02a _start
  r8: 0000000000000000  r9: 00007ffe03450cc0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe034513b8 r13: 0000000000000161 r14: 00007ffe034513c0 r15: 00007ffe03450f59
  di: 0000000000000002  si: 00007ffe03450cc0  bp: 00007ffe03450f00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc8bc1fffff  sp: 00007ffe03450d38
  ip: 00007fc8bc1fffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020236.238871:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55987fd60b0c base::debug::StackTrace::StackTrace()
#1 0x55987fd79780 logging::LogMessage::~LogMessage()
#2 0x55987ee092b1 content::ZygoteHostImpl::Init()
#3 0x55987ea7bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55987ea81a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559883bab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55987fa9ba00 content::RunNamedProcessTypeMain()
#7 0x55987fa9c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55987faa5f24 service_manager::Main()
#9 0x55987fa9af14 content::ContentMain()
#10 0x559883baa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559883baaa42 headless::HeadlessBrowserMain()
#12 0x55987faa2f9d headless::HeadlessShellMain()
#13 0x55987e1011ac ChromeMain
#14 0x7faf0dc8e2e1 __libc_start_main
#15 0x55987e10102a _start

Received signal 6
#0 0x55987fd60b0c base::debug::StackTrace::StackTrace()
#1 0x55987fd60671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faf13beb0c0 <unknown>
#3 0x7faf0dca0fff gsignal
#4 0x7faf0dca242a abort
#5 0x55987fd5f105 base::debug::BreakDebugger()
#6 0x55987fd79bca logging::LogMessage::~LogMessage()
#7 0x55987ee092b1 content::ZygoteHostImpl::Init()
#8 0x55987ea7bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55987ea81a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559883bab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55987fa9ba00 content::RunNamedProcessTypeMain()
#12 0x55987fa9c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55987faa5f24 service_manager::Main()
#14 0x55987fa9af14 content::ContentMain()
#15 0x559883baa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559883baaa42 headless::HeadlessBrowserMain()
#17 0x55987faa2f9d headless::HeadlessShellMain()
#18 0x55987e1011ac ChromeMain
#19 0x7faf0dc8e2e1 __libc_start_main
#20 0x55987e10102a _start
  r8: 0000000000000000  r9: 00007ffc3c5f3890 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc3c5f3f88 r13: 0000000000000161 r14: 00007ffc3c5f3f90 r15: 00007ffc3c5f3b29
  di: 0000000000000002  si: 00007ffc3c5f3890  bp: 00007ffc3c5f3ad0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007faf0dca0fff  sp: 00007ffc3c5f3908
  ip: 00007faf0dca0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020236.238871:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55987fd60b0c base::debug::StackTrace::StackTrace()
#1 0x55987fd79780 logging::LogMessage::~LogMessage()
#2 0x55987ee092b1 content::ZygoteHostImpl::Init()
#3 0x55987ea7bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55987ea81a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559883bab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55987fa9ba00 content::RunNamedProcessTypeMain()
#7 0x55987fa9c2e8 content::ContentMainRunnerImpl::Run()
#8 0x55987faa5f24 service_manager::Main()
#9 0x55987fa9af14 content::ContentMain()
#10 0x559883baa9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559883baaa42 headless::HeadlessBrowserMain()
#12 0x55987faa2f9d headless::HeadlessShellMain()
#13 0x55987e1011ac ChromeMain
#14 0x7faf0dc8e2e1 __libc_start_main
#15 0x55987e10102a _start

Received signal 6
#0 0x55987fd60b0c base::debug::StackTrace::StackTrace()
#1 0x55987fd60671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faf13beb0c0 <unknown>
#3 0x7faf0dca0fff gsignal
#4 0x7faf0dca242a abort
#5 0x55987fd5f105 base::debug::BreakDebugger()
#6 0x55987fd79bca logging::LogMessage::~LogMessage()
#7 0x55987ee092b1 content::ZygoteHostImpl::Init()
#8 0x55987ea7bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55987ea81a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559883bab9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55987fa9ba00 content::RunNamedProcessTypeMain()
#12 0x55987fa9c2e8 content::ContentMainRunnerImpl::Run()
#13 0x55987faa5f24 service_manager::Main()
#14 0x55987fa9af14 content::ContentMain()
#15 0x559883baa9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559883baaa42 headless::HeadlessBrowserMain()
#17 0x55987faa2f9d headless::HeadlessShellMain()
#18 0x55987e1011ac ChromeMain
#19 0x7faf0dc8e2e1 __libc_start_main
#20 0x55987e10102a _start
  r8: 0000000000000000  r9: 00007ffc3c5f3890 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc3c5f3f88 r13: 0000000000000161 r14: 00007ffc3c5f3f90 r15: 00007ffc3c5f3b29
  di: 0000000000000002  si: 00007ffc3c5f3890  bp: 00007ffc3c5f3ad0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007faf0dca0fff  sp: 00007ffc3c5f3908
  ip: 00007faf0dca0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020236.301630:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55579e1cfb0c base::debug::StackTrace::StackTrace()
#1 0x55579e1e8780 logging::LogMessage::~LogMessage()
#2 0x55579d2782b1 content::ZygoteHostImpl::Init()
#3 0x55579ceeac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55579cef0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5557a201a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55579df0aa00 content::RunNamedProcessTypeMain()
#7 0x55579df0b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55579df14f24 service_manager::Main()
#9 0x55579df09f14 content::ContentMain()
#10 0x5557a20199b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5557a2019a42 headless::HeadlessBrowserMain()
#12 0x55579df11f9d headless::HeadlessShellMain()
#13 0x55579c5701ac ChromeMain
#14 0x7fa8b711d2e1 __libc_start_main
#15 0x55579c57002a _start

Received signal 6
#0 0x55579e1cfb0c base::debug::StackTrace::StackTrace()
#1 0x55579e1cf671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa8bd07a0c0 <unknown>
#3 0x7fa8b712ffff gsignal
#4 0x7fa8b713142a abort
#5 0x55579e1ce105 base::debug::BreakDebugger()
#6 0x55579e1e8bca logging::LogMessage::~LogMessage()
#7 0x55579d2782b1 content::ZygoteHostImpl::Init()
#8 0x55579ceeac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55579cef0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5557a201a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55579df0aa00 content::RunNamedProcessTypeMain()
#12 0x55579df0b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55579df14f24 service_manager::Main()
#14 0x55579df09f14 content::ContentMain()
#15 0x5557a20199b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5557a2019a42 headless::HeadlessBrowserMain()
#17 0x55579df11f9d headless::HeadlessShellMain()
#18 0x55579c5701ac ChromeMain
#19 0x7fa8b711d2e1 __libc_start_main
#20 0x55579c57002a _start
  r8: 0000000000000000  r9: 00007ffe33293650 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe33293d48 r13: 0000000000000161 r14: 00007ffe33293d50 r15: 00007ffe332938e9
  di: 0000000000000002  si: 00007ffe33293650  bp: 00007ffe33293890  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa8b712ffff  sp: 00007ffe332936c8
  ip: 00007fa8b712ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020236.301630:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55579e1cfb0c base::debug::StackTrace::StackTrace()
#1 0x55579e1e8780 logging::LogMessage::~LogMessage()
#2 0x55579d2782b1 content::ZygoteHostImpl::Init()
#3 0x55579ceeac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55579cef0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5557a201a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55579df0aa00 content::RunNamedProcessTypeMain()
#7 0x55579df0b2e8 content::ContentMainRunnerImpl::Run()
#8 0x55579df14f24 service_manager::Main()
#9 0x55579df09f14 content::ContentMain()
#10 0x5557a20199b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5557a2019a42 headless::HeadlessBrowserMain()
#12 0x55579df11f9d headless::HeadlessShellMain()
#13 0x55579c5701ac ChromeMain
#14 0x7fa8b711d2e1 __libc_start_main
#15 0x55579c57002a _start

Received signal 6
#0 0x55579e1cfb0c base::debug::StackTrace::StackTrace()
#1 0x55579e1cf671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa8bd07a0c0 <unknown>
#3 0x7fa8b712ffff gsignal
#4 0x7fa8b713142a abort
#5 0x55579e1ce105 base::debug::BreakDebugger()
#6 0x55579e1e8bca logging::LogMessage::~LogMessage()
#7 0x55579d2782b1 content::ZygoteHostImpl::Init()
#8 0x55579ceeac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55579cef0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5557a201a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55579df0aa00 content::RunNamedProcessTypeMain()
#12 0x55579df0b2e8 content::ContentMainRunnerImpl::Run()
#13 0x55579df14f24 service_manager::Main()
#14 0x55579df09f14 content::ContentMain()
#15 0x5557a20199b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5557a2019a42 headless::HeadlessBrowserMain()
#17 0x55579df11f9d headless::HeadlessShellMain()
#18 0x55579c5701ac ChromeMain
#19 0x7fa8b711d2e1 __libc_start_main
#20 0x55579c57002a _start
  r8: 0000000000000000  r9: 00007ffe33293650 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe33293d48 r13: 0000000000000161 r14: 00007ffe33293d50 r15: 00007ffe332938e9
  di: 0000000000000002  si: 00007ffe33293650  bp: 00007ffe33293890  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa8b712ffff  sp: 00007ffe332936c8
  ip: 00007fa8b712ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020240.608897:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564286243b0c base::debug::StackTrace::StackTrace()
#1 0x56428625c780 logging::LogMessage::~LogMessage()
#2 0x5642852ec2b1 content::ZygoteHostImpl::Init()
#3 0x564284f5ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564284f64a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56428a08e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564285f7ea00 content::RunNamedProcessTypeMain()
#7 0x564285f7f2e8 content::ContentMainRunnerImpl::Run()
#8 0x564285f88f24 service_manager::Main()
#9 0x564285f7df14 content::ContentMain()
#10 0x56428a08d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56428a08da42 headless::HeadlessBrowserMain()
#12 0x564285f85f9d headless::HeadlessShellMain()
#13 0x5642845e41ac ChromeMain
#14 0x7f43ba4892e1 __libc_start_main
#15 0x5642845e402a _start

Received signal 6
#0 0x564286243b0c base::debug::StackTrace::StackTrace()
#1 0x564286243671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43c03e60c0 <unknown>
#3 0x7f43ba49bfff gsignal
#4 0x7f43ba49d42a abort
#5 0x564286242105 base::debug::BreakDebugger()
#6 0x56428625cbca logging::LogMessage::~LogMessage()
#7 0x5642852ec2b1 content::ZygoteHostImpl::Init()
#8 0x564284f5ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564284f64a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56428a08e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564285f7ea00 content::RunNamedProcessTypeMain()
#12 0x564285f7f2e8 content::ContentMainRunnerImpl::Run()
#13 0x564285f88f24 service_manager::Main()
#14 0x564285f7df14 content::ContentMain()
#15 0x56428a08d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56428a08da42 headless::HeadlessBrowserMain()
#17 0x564285f85f9d headless::HeadlessShellMain()
#18 0x5642845e41ac ChromeMain
#19 0x7f43ba4892e1 __libc_start_main
#20 0x5642845e402a _start
  r8: 0000000000000000  r9: 00007ffecf5bdb00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffecf5be1f8 r13: 0000000000000161 r14: 00007ffecf5be200 r15: 00007ffecf5bdd99
  di: 0000000000000002  si: 00007ffecf5bdb00  bp: 00007ffecf5bdd40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43ba49bfff  sp: 00007ffecf5bdb78
  ip: 00007f43ba49bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020240.608897:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564286243b0c base::debug::StackTrace::StackTrace()
#1 0x56428625c780 logging::LogMessage::~LogMessage()
#2 0x5642852ec2b1 content::ZygoteHostImpl::Init()
#3 0x564284f5ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564284f64a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56428a08e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564285f7ea00 content::RunNamedProcessTypeMain()
#7 0x564285f7f2e8 content::ContentMainRunnerImpl::Run()
#8 0x564285f88f24 service_manager::Main()
#9 0x564285f7df14 content::ContentMain()
#10 0x56428a08d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56428a08da42 headless::HeadlessBrowserMain()
#12 0x564285f85f9d headless::HeadlessShellMain()
#13 0x5642845e41ac ChromeMain
#14 0x7f43ba4892e1 __libc_start_main
#15 0x5642845e402a _start

Received signal 6
#0 0x564286243b0c base::debug::StackTrace::StackTrace()
#1 0x564286243671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43c03e60c0 <unknown>
#3 0x7f43ba49bfff gsignal
#4 0x7f43ba49d42a abort
#5 0x564286242105 base::debug::BreakDebugger()
#6 0x56428625cbca logging::LogMessage::~LogMessage()
#7 0x5642852ec2b1 content::ZygoteHostImpl::Init()
#8 0x564284f5ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564284f64a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56428a08e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564285f7ea00 content::RunNamedProcessTypeMain()
#12 0x564285f7f2e8 content::ContentMainRunnerImpl::Run()
#13 0x564285f88f24 service_manager::Main()
#14 0x564285f7df14 content::ContentMain()
#15 0x56428a08d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56428a08da42 headless::HeadlessBrowserMain()
#17 0x564285f85f9d headless::HeadlessShellMain()
#18 0x5642845e41ac ChromeMain
#19 0x7f43ba4892e1 __libc_start_main
#20 0x5642845e402a _start
  r8: 0000000000000000  r9: 00007ffecf5bdb00 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffecf5be1f8 r13: 0000000000000161 r14: 00007ffecf5be200 r15: 00007ffecf5bdd99
  di: 0000000000000002  si: 00007ffecf5bdb00  bp: 00007ffecf5bdd40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43ba49bfff  sp: 00007ffecf5bdb78
  ip: 00007f43ba49bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020239.464238:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e336f76b0c base::debug::StackTrace::StackTrace()
#1 0x55e336f8f780 logging::LogMessage::~LogMessage()
#2 0x55e33601f2b1 content::ZygoteHostImpl::Init()
#3 0x55e335c91c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e335c97a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e33adc19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e336cb1a00 content::RunNamedProcessTypeMain()
#7 0x55e336cb22e8 content::ContentMainRunnerImpl::Run()
#8 0x55e336cbbf24 service_manager::Main()
#9 0x55e336cb0f14 content::ContentMain()
#10 0x55e33adc09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e33adc0a42 headless::HeadlessBrowserMain()
#12 0x55e336cb8f9d headless::HeadlessShellMain()
#13 0x55e3353171ac ChromeMain
#14 0x7f59487e22e1 __libc_start_main
#15 0x55e33531702a _start

Received signal 6
#0 0x55e336f76b0c base::debug::StackTrace::StackTrace()
#1 0x55e336f76671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f594e73f0c0 <unknown>
#3 0x7f59487f4fff gsignal
#4 0x7f59487f642a abort
#5 0x55e336f75105 base::debug::BreakDebugger()
#6 0x55e336f8fbca logging::LogMessage::~LogMessage()
#7 0x55e33601f2b1 content::ZygoteHostImpl::Init()
#8 0x55e335c91c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e335c97a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e33adc19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e336cb1a00 content::RunNamedProcessTypeMain()
#12 0x55e336cb22e8 content::ContentMainRunnerImpl::Run()
#13 0x55e336cbbf24 service_manager::Main()
#14 0x55e336cb0f14 content::ContentMain()
#15 0x55e33adc09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e33adc0a42 headless::HeadlessBrowserMain()
#17 0x55e336cb8f9d headless::HeadlessShellMain()
#18 0x55e3353171ac ChromeMain
#19 0x7f59487e22e1 __libc_start_main
#20 0x55e33531702a _start
  r8: 0000000000000000  r9: 00007ffda37f2390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda37f2a88 r13: 0000000000000161 r14: 00007ffda37f2a90 r15: 00007ffda37f2629
  di: 0000000000000002  si: 00007ffda37f2390  bp: 00007ffda37f25d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f59487f4fff  sp: 00007ffda37f2408
  ip: 00007f59487f4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020239.464238:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e336f76b0c base::debug::StackTrace::StackTrace()
#1 0x55e336f8f780 logging::LogMessage::~LogMessage()
#2 0x55e33601f2b1 content::ZygoteHostImpl::Init()
#3 0x55e335c91c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e335c97a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e33adc19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e336cb1a00 content::RunNamedProcessTypeMain()
#7 0x55e336cb22e8 content::ContentMainRunnerImpl::Run()
#8 0x55e336cbbf24 service_manager::Main()
#9 0x55e336cb0f14 content::ContentMain()
#10 0x55e33adc09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e33adc0a42 headless::HeadlessBrowserMain()
#12 0x55e336cb8f9d headless::HeadlessShellMain()
#13 0x55e3353171ac ChromeMain
#14 0x7f59487e22e1 __libc_start_main
#15 0x55e33531702a _start

Received signal 6
#0 0x55e336f76b0c base::debug::StackTrace::StackTrace()
#1 0x55e336f76671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f594e73f0c0 <unknown>
#3 0x7f59487f4fff gsignal
#4 0x7f59487f642a abort
#5 0x55e336f75105 base::debug::BreakDebugger()
#6 0x55e336f8fbca logging::LogMessage::~LogMessage()
#7 0x55e33601f2b1 content::ZygoteHostImpl::Init()
#8 0x55e335c91c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e335c97a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e33adc19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e336cb1a00 content::RunNamedProcessTypeMain()
#12 0x55e336cb22e8 content::ContentMainRunnerImpl::Run()
#13 0x55e336cbbf24 service_manager::Main()
#14 0x55e336cb0f14 content::ContentMain()
#15 0x55e33adc09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e33adc0a42 headless::HeadlessBrowserMain()
#17 0x55e336cb8f9d headless::HeadlessShellMain()
#18 0x55e3353171ac ChromeMain
#19 0x7f59487e22e1 __libc_start_main
#20 0x55e33531702a _start
  r8: 0000000000000000  r9: 00007ffda37f2390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda37f2a88 r13: 0000000000000161 r14: 00007ffda37f2a90 r15: 00007ffda37f2629
  di: 0000000000000002  si: 00007ffda37f2390  bp: 00007ffda37f25d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f59487f4fff  sp: 00007ffda37f2408
  ip: 00007f59487f4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020239.584663:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556b5e60eb0c base::debug::StackTrace::StackTrace()
#1 0x556b5e627780 logging::LogMessage::~LogMessage()
#2 0x556b5d6b72b1 content::ZygoteHostImpl::Init()
#3 0x556b5d329c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556b5d32fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556b624599a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556b5e349a00 content::RunNamedProcessTypeMain()
#7 0x556b5e34a2e8 content::ContentMainRunnerImpl::Run()
#8 0x556b5e353f24 service_manager::Main()
#9 0x556b5e348f14 content::ContentMain()
#10 0x556b624589b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556b62458a42 headless::HeadlessBrowserMain()
#12 0x556b5e350f9d headless::HeadlessShellMain()
#13 0x556b5c9af1ac ChromeMain
#14 0x7fa8165292e1 __libc_start_main
#15 0x556b5c9af02a _start

Received signal 6
#0 0x556b5e60eb0c base::debug::StackTrace::StackTrace()
#1 0x556b5e60e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa81c4860c0 <unknown>
#3 0x7fa81653bfff gsignal
#4 0x7fa81653d42a abort
#5 0x556b5e60d105 base::debug::BreakDebugger()
#6 0x556b5e627bca logging::LogMessage::~LogMessage()
#7 0x556b5d6b72b1 content::ZygoteHostImpl::Init()
#8 0x556b5d329c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556b5d32fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556b624599a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556b5e349a00 content::RunNamedProcessTypeMain()
#12 0x556b5e34a2e8 content::ContentMainRunnerImpl::Run()
#13 0x556b5e353f24 service_manager::Main()
#14 0x556b5e348f14 content::ContentMain()
#15 0x556b624589b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556b62458a42 headless::HeadlessBrowserMain()
#17 0x556b5e350f9d headless::HeadlessShellMain()
#18 0x556b5c9af1ac ChromeMain
#19 0x7fa8165292e1 __libc_start_main
#20 0x556b5c9af02a _start
  r8: 0000000000000000  r9: 00007ffd27b7fe40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd27b80538 r13: 0000000000000161 r14: 00007ffd27b80540 r15: 00007ffd27b800d9
  di: 0000000000000002  si: 00007ffd27b7fe40  bp: 00007ffd27b80080  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa81653bfff  sp: 00007ffd27b7feb8
  ip: 00007fa81653bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020239.584663:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556b5e60eb0c base::debug::StackTrace::StackTrace()
#1 0x556b5e627780 logging::LogMessage::~LogMessage()
#2 0x556b5d6b72b1 content::ZygoteHostImpl::Init()
#3 0x556b5d329c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556b5d32fa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556b624599a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556b5e349a00 content::RunNamedProcessTypeMain()
#7 0x556b5e34a2e8 content::ContentMainRunnerImpl::Run()
#8 0x556b5e353f24 service_manager::Main()
#9 0x556b5e348f14 content::ContentMain()
#10 0x556b624589b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556b62458a42 headless::HeadlessBrowserMain()
#12 0x556b5e350f9d headless::HeadlessShellMain()
#13 0x556b5c9af1ac ChromeMain
#14 0x7fa8165292e1 __libc_start_main
#15 0x556b5c9af02a _start

Received signal 6
#0 0x556b5e60eb0c base::debug::StackTrace::StackTrace()
#1 0x556b5e60e671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa81c4860c0 <unknown>
#3 0x7fa81653bfff gsignal
#4 0x7fa81653d42a abort
#5 0x556b5e60d105 base::debug::BreakDebugger()
#6 0x556b5e627bca logging::LogMessage::~LogMessage()
#7 0x556b5d6b72b1 content::ZygoteHostImpl::Init()
#8 0x556b5d329c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556b5d32fa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556b624599a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556b5e349a00 content::RunNamedProcessTypeMain()
#12 0x556b5e34a2e8 content::ContentMainRunnerImpl::Run()
#13 0x556b5e353f24 service_manager::Main()
#14 0x556b5e348f14 content::ContentMain()
#15 0x556b624589b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556b62458a42 headless::HeadlessBrowserMain()
#17 0x556b5e350f9d headless::HeadlessShellMain()
#18 0x556b5c9af1ac ChromeMain
#19 0x7fa8165292e1 __libc_start_main
#20 0x556b5c9af02a _start
  r8: 0000000000000000  r9: 00007ffd27b7fe40 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd27b80538 r13: 0000000000000161 r14: 00007ffd27b80540 r15: 00007ffd27b800d9
  di: 0000000000000002  si: 00007ffd27b7fe40  bp: 00007ffd27b80080  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa81653bfff  sp: 00007ffd27b7feb8
  ip: 00007fa81653bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020240.964505:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bd22053b0c base::debug::StackTrace::StackTrace()
#1 0x55bd2206c780 logging::LogMessage::~LogMessage()
#2 0x55bd210fc2b1 content::ZygoteHostImpl::Init()
#3 0x55bd20d6ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bd20d74a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bd25e9e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bd21d8ea00 content::RunNamedProcessTypeMain()
#7 0x55bd21d8f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55bd21d98f24 service_manager::Main()
#9 0x55bd21d8df14 content::ContentMain()
#10 0x55bd25e9d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bd25e9da42 headless::HeadlessBrowserMain()
#12 0x55bd21d95f9d headless::HeadlessShellMain()
#13 0x55bd203f41ac ChromeMain
#14 0x7fd447c832e1 __libc_start_main
#15 0x55bd203f402a _start

Received signal 6
#0 0x55bd22053b0c base::debug::StackTrace::StackTrace()
#1 0x55bd22053671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd44dbe00c0 <unknown>
#3 0x7fd447c95fff gsignal
#4 0x7fd447c9742a abort
#5 0x55bd22052105 base::debug::BreakDebugger()
#6 0x55bd2206cbca logging::LogMessage::~LogMessage()
#7 0x55bd210fc2b1 content::ZygoteHostImpl::Init()
#8 0x55bd20d6ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bd20d74a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bd25e9e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bd21d8ea00 content::RunNamedProcessTypeMain()
#12 0x55bd21d8f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55bd21d98f24 service_manager::Main()
#14 0x55bd21d8df14 content::ContentMain()
#15 0x55bd25e9d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bd25e9da42 headless::HeadlessBrowserMain()
#17 0x55bd21d95f9d headless::HeadlessShellMain()
#18 0x55bd203f41ac ChromeMain
#19 0x7fd447c832e1 __libc_start_main
#20 0x55bd203f402a _start
  r8: 0000000000000000  r9: 00007ffdce38c9a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdce38d098 r13: 0000000000000161 r14: 00007ffdce38d0a0 r15: 00007ffdce38cc39
  di: 0000000000000002  si: 00007ffdce38c9a0  bp: 00007ffdce38cbe0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd447c95fff  sp: 00007ffdce38ca18
  ip: 00007fd447c95fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020240.964505:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bd22053b0c base::debug::StackTrace::StackTrace()
#1 0x55bd2206c780 logging::LogMessage::~LogMessage()
#2 0x55bd210fc2b1 content::ZygoteHostImpl::Init()
#3 0x55bd20d6ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bd20d74a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bd25e9e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bd21d8ea00 content::RunNamedProcessTypeMain()
#7 0x55bd21d8f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55bd21d98f24 service_manager::Main()
#9 0x55bd21d8df14 content::ContentMain()
#10 0x55bd25e9d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bd25e9da42 headless::HeadlessBrowserMain()
#12 0x55bd21d95f9d headless::HeadlessShellMain()
#13 0x55bd203f41ac ChromeMain
#14 0x7fd447c832e1 __libc_start_main
#15 0x55bd203f402a _start

Received signal 6
#0 0x55bd22053b0c base::debug::StackTrace::StackTrace()
#1 0x55bd22053671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd44dbe00c0 <unknown>
#3 0x7fd447c95fff gsignal
#4 0x7fd447c9742a abort
#5 0x55bd22052105 base::debug::BreakDebugger()
#6 0x55bd2206cbca logging::LogMessage::~LogMessage()
#7 0x55bd210fc2b1 content::ZygoteHostImpl::Init()
#8 0x55bd20d6ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bd20d74a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bd25e9e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bd21d8ea00 content::RunNamedProcessTypeMain()
#12 0x55bd21d8f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55bd21d98f24 service_manager::Main()
#14 0x55bd21d8df14 content::ContentMain()
#15 0x55bd25e9d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bd25e9da42 headless::HeadlessBrowserMain()
#17 0x55bd21d95f9d headless::HeadlessShellMain()
#18 0x55bd203f41ac ChromeMain
#19 0x7fd447c832e1 __libc_start_main
#20 0x55bd203f402a _start
  r8: 0000000000000000  r9: 00007ffdce38c9a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdce38d098 r13: 0000000000000161 r14: 00007ffdce38d0a0 r15: 00007ffdce38cc39
  di: 0000000000000002  si: 00007ffdce38c9a0  bp: 00007ffdce38cbe0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd447c95fff  sp: 00007ffdce38ca18
  ip: 00007fd447c95fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020239.931766:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555a04003b0c base::debug::StackTrace::StackTrace()
#1 0x555a0401c780 logging::LogMessage::~LogMessage()
#2 0x555a030ac2b1 content::ZygoteHostImpl::Init()
#3 0x555a02d1ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555a02d24a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555a07e4e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555a03d3ea00 content::RunNamedProcessTypeMain()
#7 0x555a03d3f2e8 content::ContentMainRunnerImpl::Run()
#8 0x555a03d48f24 service_manager::Main()
#9 0x555a03d3df14 content::ContentMain()
#10 0x555a07e4d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555a07e4da42 headless::HeadlessBrowserMain()
#12 0x555a03d45f9d headless::HeadlessShellMain()
#13 0x555a023a41ac ChromeMain
#14 0x7fba1f5e82e1 __libc_start_main
#15 0x555a023a402a _start

Received signal 6
#0 0x555a04003b0c base::debug::StackTrace::StackTrace()
#1 0x555a04003671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fba255450c0 <unknown>
#3 0x7fba1f5fafff gsignal
#4 0x7fba1f5fc42a abort
#5 0x555a04002105 base::debug::BreakDebugger()
#6 0x555a0401cbca logging::LogMessage::~LogMessage()
#7 0x555a030ac2b1 content::ZygoteHostImpl::Init()
#8 0x555a02d1ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555a02d24a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555a07e4e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555a03d3ea00 content::RunNamedProcessTypeMain()
#12 0x555a03d3f2e8 content::ContentMainRunnerImpl::Run()
#13 0x555a03d48f24 service_manager::Main()
#14 0x555a03d3df14 content::ContentMain()
#15 0x555a07e4d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555a07e4da42 headless::HeadlessBrowserMain()
#17 0x555a03d45f9d headless::HeadlessShellMain()
#18 0x555a023a41ac ChromeMain
#19 0x7fba1f5e82e1 __libc_start_main
#20 0x555a023a402a _start
  r8: 0000000000000000  r9: 00007ffd654b9530 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd654b9c28 r13: 0000000000000161 r14: 00007ffd654b9c30 r15: 00007ffd654b97c9
  di: 0000000000000002  si: 00007ffd654b9530  bp: 00007ffd654b9770  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fba1f5fafff  sp: 00007ffd654b95a8
  ip: 00007fba1f5fafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020239.931766:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x555a04003b0c base::debug::StackTrace::StackTrace()
#1 0x555a0401c780 logging::LogMessage::~LogMessage()
#2 0x555a030ac2b1 content::ZygoteHostImpl::Init()
#3 0x555a02d1ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x555a02d24a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x555a07e4e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x555a03d3ea00 content::RunNamedProcessTypeMain()
#7 0x555a03d3f2e8 content::ContentMainRunnerImpl::Run()
#8 0x555a03d48f24 service_manager::Main()
#9 0x555a03d3df14 content::ContentMain()
#10 0x555a07e4d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x555a07e4da42 headless::HeadlessBrowserMain()
#12 0x555a03d45f9d headless::HeadlessShellMain()
#13 0x555a023a41ac ChromeMain
#14 0x7fba1f5e82e1 __libc_start_main
#15 0x555a023a402a _start

Received signal 6
#0 0x555a04003b0c base::debug::StackTrace::StackTrace()
#1 0x555a04003671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fba255450c0 <unknown>
#3 0x7fba1f5fafff gsignal
#4 0x7fba1f5fc42a abort
#5 0x555a04002105 base::debug::BreakDebugger()
#6 0x555a0401cbca logging::LogMessage::~LogMessage()
#7 0x555a030ac2b1 content::ZygoteHostImpl::Init()
#8 0x555a02d1ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x555a02d24a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x555a07e4e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x555a03d3ea00 content::RunNamedProcessTypeMain()
#12 0x555a03d3f2e8 content::ContentMainRunnerImpl::Run()
#13 0x555a03d48f24 service_manager::Main()
#14 0x555a03d3df14 content::ContentMain()
#15 0x555a07e4d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x555a07e4da42 headless::HeadlessBrowserMain()
#17 0x555a03d45f9d headless::HeadlessShellMain()
#18 0x555a023a41ac ChromeMain
#19 0x7fba1f5e82e1 __libc_start_main
#20 0x555a023a402a _start
  r8: 0000000000000000  r9: 00007ffd654b9530 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd654b9c28 r13: 0000000000000161 r14: 00007ffd654b9c30 r15: 00007ffd654b97c9
  di: 0000000000000002  si: 00007ffd654b9530  bp: 00007ffd654b9770  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fba1f5fafff  sp: 00007ffd654b95a8
  ip: 00007fba1f5fafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020241.095640:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55adf7887b0c base::debug::StackTrace::StackTrace()
#1 0x55adf78a0780 logging::LogMessage::~LogMessage()
#2 0x55adf69302b1 content::ZygoteHostImpl::Init()
#3 0x55adf65a2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55adf65a8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55adfb6d29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55adf75c2a00 content::RunNamedProcessTypeMain()
#7 0x55adf75c32e8 content::ContentMainRunnerImpl::Run()
#8 0x55adf75ccf24 service_manager::Main()
#9 0x55adf75c1f14 content::ContentMain()
#10 0x55adfb6d19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55adfb6d1a42 headless::HeadlessBrowserMain()
#12 0x55adf75c9f9d headless::HeadlessShellMain()
#13 0x55adf5c281ac ChromeMain
#14 0x7fde3168b2e1 __libc_start_main
#15 0x55adf5c2802a _start

Received signal 6
#0 0x55adf7887b0c base::debug::StackTrace::StackTrace()
#1 0x55adf7887671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fde375e80c0 <unknown>
#3 0x7fde3169dfff gsignal
#4 0x7fde3169f42a abort
#5 0x55adf7886105 base::debug::BreakDebugger()
#6 0x55adf78a0bca logging::LogMessage::~LogMessage()
#7 0x55adf69302b1 content::ZygoteHostImpl::Init()
#8 0x55adf65a2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55adf65a8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55adfb6d29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55adf75c2a00 content::RunNamedProcessTypeMain()
#12 0x55adf75c32e8 content::ContentMainRunnerImpl::Run()
#13 0x55adf75ccf24 service_manager::Main()
#14 0x55adf75c1f14 content::ContentMain()
#15 0x55adfb6d19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55adfb6d1a42 headless::HeadlessBrowserMain()
#17 0x55adf75c9f9d headless::HeadlessShellMain()
#18 0x55adf5c281ac ChromeMain
#19 0x7fde3168b2e1 __libc_start_main
#20 0x55adf5c2802a _start
  r8: 0000000000000000  r9: 00007ffc1f238a70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc1f239168 r13: 0000000000000161 r14: 00007ffc1f239170 r15: 00007ffc1f238d09
  di: 0000000000000002  si: 00007ffc1f238a70  bp: 00007ffc1f238cb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fde3169dfff  sp: 00007ffc1f238ae8
  ip: 00007fde3169dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020241.095640:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55adf7887b0c base::debug::StackTrace::StackTrace()
#1 0x55adf78a0780 logging::LogMessage::~LogMessage()
#2 0x55adf69302b1 content::ZygoteHostImpl::Init()
#3 0x55adf65a2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55adf65a8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55adfb6d29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55adf75c2a00 content::RunNamedProcessTypeMain()
#7 0x55adf75c32e8 content::ContentMainRunnerImpl::Run()
#8 0x55adf75ccf24 service_manager::Main()
#9 0x55adf75c1f14 content::ContentMain()
#10 0x55adfb6d19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55adfb6d1a42 headless::HeadlessBrowserMain()
#12 0x55adf75c9f9d headless::HeadlessShellMain()
#13 0x55adf5c281ac ChromeMain
#14 0x7fde3168b2e1 __libc_start_main
#15 0x55adf5c2802a _start

Received signal 6
#0 0x55adf7887b0c base::debug::StackTrace::StackTrace()
#1 0x55adf7887671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fde375e80c0 <unknown>
#3 0x7fde3169dfff gsignal
#4 0x7fde3169f42a abort
#5 0x55adf7886105 base::debug::BreakDebugger()
#6 0x55adf78a0bca logging::LogMessage::~LogMessage()
#7 0x55adf69302b1 content::ZygoteHostImpl::Init()
#8 0x55adf65a2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55adf65a8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55adfb6d29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55adf75c2a00 content::RunNamedProcessTypeMain()
#12 0x55adf75c32e8 content::ContentMainRunnerImpl::Run()
#13 0x55adf75ccf24 service_manager::Main()
#14 0x55adf75c1f14 content::ContentMain()
#15 0x55adfb6d19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55adfb6d1a42 headless::HeadlessBrowserMain()
#17 0x55adf75c9f9d headless::HeadlessShellMain()
#18 0x55adf5c281ac ChromeMain
#19 0x7fde3168b2e1 __libc_start_main
#20 0x55adf5c2802a _start
  r8: 0000000000000000  r9: 00007ffc1f238a70 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc1f239168 r13: 0000000000000161 r14: 00007ffc1f239170 r15: 00007ffc1f238d09
  di: 0000000000000002  si: 00007ffc1f238a70  bp: 00007ffc1f238cb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fde3169dfff  sp: 00007ffc1f238ae8
  ip: 00007fde3169dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020240.716562:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5563b5c82b0c base::debug::StackTrace::StackTrace()
#1 0x5563b5c9b780 logging::LogMessage::~LogMessage()
#2 0x5563b4d2b2b1 content::ZygoteHostImpl::Init()
#3 0x5563b499dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5563b49a3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5563b9acd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5563b59bda00 content::RunNamedProcessTypeMain()
#7 0x5563b59be2e8 content::ContentMainRunnerImpl::Run()
#8 0x5563b59c7f24 service_manager::Main()
#9 0x5563b59bcf14 content::ContentMain()
#10 0x5563b9acc9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5563b9acca42 headless::HeadlessBrowserMain()
#12 0x5563b59c4f9d headless::HeadlessShellMain()
#13 0x5563b40231ac ChromeMain
#14 0x7fd294c7c2e1 __libc_start_main
#15 0x5563b402302a _start

Received signal 6
#0 0x5563b5c82b0c base::debug::StackTrace::StackTrace()
#1 0x5563b5c82671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd29abd90c0 <unknown>
#3 0x7fd294c8efff gsignal
#4 0x7fd294c9042a abort
#5 0x5563b5c81105 base::debug::BreakDebugger()
#6 0x5563b5c9bbca logging::LogMessage::~LogMessage()
#7 0x5563b4d2b2b1 content::ZygoteHostImpl::Init()
#8 0x5563b499dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5563b49a3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5563b9acd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5563b59bda00 content::RunNamedProcessTypeMain()
#12 0x5563b59be2e8 content::ContentMainRunnerImpl::Run()
#13 0x5563b59c7f24 service_manager::Main()
#14 0x5563b59bcf14 content::ContentMain()
#15 0x5563b9acc9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5563b9acca42 headless::HeadlessBrowserMain()
#17 0x5563b59c4f9d headless::HeadlessShellMain()
#18 0x5563b40231ac ChromeMain
#19 0x7fd294c7c2e1 __libc_start_main
#20 0x5563b402302a _start
  r8: 0000000000000000  r9: 00007ffde2f76b10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde2f77208 r13: 0000000000000161 r14: 00007ffde2f77210 r15: 00007ffde2f76da9
  di: 0000000000000002  si: 00007ffde2f76b10  bp: 00007ffde2f76d50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd294c8efff  sp: 00007ffde2f76b88
  ip: 00007fd294c8efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020240.716562:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5563b5c82b0c base::debug::StackTrace::StackTrace()
#1 0x5563b5c9b780 logging::LogMessage::~LogMessage()
#2 0x5563b4d2b2b1 content::ZygoteHostImpl::Init()
#3 0x5563b499dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5563b49a3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5563b9acd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5563b59bda00 content::RunNamedProcessTypeMain()
#7 0x5563b59be2e8 content::ContentMainRunnerImpl::Run()
#8 0x5563b59c7f24 service_manager::Main()
#9 0x5563b59bcf14 content::ContentMain()
#10 0x5563b9acc9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5563b9acca42 headless::HeadlessBrowserMain()
#12 0x5563b59c4f9d headless::HeadlessShellMain()
#13 0x5563b40231ac ChromeMain
#14 0x7fd294c7c2e1 __libc_start_main
#15 0x5563b402302a _start

Received signal 6
#0 0x5563b5c82b0c base::debug::StackTrace::StackTrace()
#1 0x5563b5c82671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd29abd90c0 <unknown>
#3 0x7fd294c8efff gsignal
#4 0x7fd294c9042a abort
#5 0x5563b5c81105 base::debug::BreakDebugger()
#6 0x5563b5c9bbca logging::LogMessage::~LogMessage()
#7 0x5563b4d2b2b1 content::ZygoteHostImpl::Init()
#8 0x5563b499dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5563b49a3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5563b9acd9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5563b59bda00 content::RunNamedProcessTypeMain()
#12 0x5563b59be2e8 content::ContentMainRunnerImpl::Run()
#13 0x5563b59c7f24 service_manager::Main()
#14 0x5563b59bcf14 content::ContentMain()
#15 0x5563b9acc9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5563b9acca42 headless::HeadlessBrowserMain()
#17 0x5563b59c4f9d headless::HeadlessShellMain()
#18 0x5563b40231ac ChromeMain
#19 0x7fd294c7c2e1 __libc_start_main
#20 0x5563b402302a _start
  r8: 0000000000000000  r9: 00007ffde2f76b10 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffde2f77208 r13: 0000000000000161 r14: 00007ffde2f77210 r15: 00007ffde2f76da9
  di: 0000000000000002  si: 00007ffde2f76b10  bp: 00007ffde2f76d50  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd294c8efff  sp: 00007ffde2f76b88
  ip: 00007fd294c8efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020242.581116:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b0ad7f5b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ad80e780 logging::LogMessage::~LogMessage()
#2 0x55b0ac89e2b1 content::ZygoteHostImpl::Init()
#3 0x55b0ac510c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b0ac516a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b0b16409a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b0ad530a00 content::RunNamedProcessTypeMain()
#7 0x55b0ad5312e8 content::ContentMainRunnerImpl::Run()
#8 0x55b0ad53af24 service_manager::Main()
#9 0x55b0ad52ff14 content::ContentMain()
#10 0x55b0b163f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b0b163fa42 headless::HeadlessBrowserMain()
#12 0x55b0ad537f9d headless::HeadlessShellMain()
#13 0x55b0abb961ac ChromeMain
#14 0x7fe5195ec2e1 __libc_start_main
#15 0x55b0abb9602a _start

Received signal 6
#0 0x55b0ad7f5b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ad7f5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe51f5490c0 <unknown>
#3 0x7fe5195fefff gsignal
#4 0x7fe51960042a abort
#5 0x55b0ad7f4105 base::debug::BreakDebugger()
#6 0x55b0ad80ebca logging::LogMessage::~LogMessage()
#7 0x55b0ac89e2b1 content::ZygoteHostImpl::Init()
#8 0x55b0ac510c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b0ac516a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b0b16409a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b0ad530a00 content::RunNamedProcessTypeMain()
#12 0x55b0ad5312e8 content::ContentMainRunnerImpl::Run()
#13 0x55b0ad53af24 service_manager::Main()
#14 0x55b0ad52ff14 content::ContentMain()
#15 0x55b0b163f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b0b163fa42 headless::HeadlessBrowserMain()
#17 0x55b0ad537f9d headless::HeadlessShellMain()
#18 0x55b0abb961ac ChromeMain
#19 0x7fe5195ec2e1 __libc_start_main
#20 0x55b0abb9602a _start
  r8: 0000000000000000  r9: 00007ffc28f60720 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc28f60e18 r13: 0000000000000161 r14: 00007ffc28f60e20 r15: 00007ffc28f609b9
  di: 0000000000000002  si: 00007ffc28f60720  bp: 00007ffc28f60960  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe5195fefff  sp: 00007ffc28f60798
  ip: 00007fe5195fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020242.581116:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b0ad7f5b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ad80e780 logging::LogMessage::~LogMessage()
#2 0x55b0ac89e2b1 content::ZygoteHostImpl::Init()
#3 0x55b0ac510c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b0ac516a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b0b16409a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b0ad530a00 content::RunNamedProcessTypeMain()
#7 0x55b0ad5312e8 content::ContentMainRunnerImpl::Run()
#8 0x55b0ad53af24 service_manager::Main()
#9 0x55b0ad52ff14 content::ContentMain()
#10 0x55b0b163f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b0b163fa42 headless::HeadlessBrowserMain()
#12 0x55b0ad537f9d headless::HeadlessShellMain()
#13 0x55b0abb961ac ChromeMain
#14 0x7fe5195ec2e1 __libc_start_main
#15 0x55b0abb9602a _start

Received signal 6
#0 0x55b0ad7f5b0c base::debug::StackTrace::StackTrace()
#1 0x55b0ad7f5671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe51f5490c0 <unknown>
#3 0x7fe5195fefff gsignal
#4 0x7fe51960042a abort
#5 0x55b0ad7f4105 base::debug::BreakDebugger()
#6 0x55b0ad80ebca logging::LogMessage::~LogMessage()
#7 0x55b0ac89e2b1 content::ZygoteHostImpl::Init()
#8 0x55b0ac510c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b0ac516a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b0b16409a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b0ad530a00 content::RunNamedProcessTypeMain()
#12 0x55b0ad5312e8 content::ContentMainRunnerImpl::Run()
#13 0x55b0ad53af24 service_manager::Main()
#14 0x55b0ad52ff14 content::ContentMain()
#15 0x55b0b163f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b0b163fa42 headless::HeadlessBrowserMain()
#17 0x55b0ad537f9d headless::HeadlessShellMain()
#18 0x55b0abb961ac ChromeMain
#19 0x7fe5195ec2e1 __libc_start_main
#20 0x55b0abb9602a _start
  r8: 0000000000000000  r9: 00007ffc28f60720 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc28f60e18 r13: 0000000000000161 r14: 00007ffc28f60e20 r15: 00007ffc28f609b9
  di: 0000000000000002  si: 00007ffc28f60720  bp: 00007ffc28f60960  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe5195fefff  sp: 00007ffc28f60798
  ip: 00007fe5195fefff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020242.811487:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bfb8b39b0c base::debug::StackTrace::StackTrace()
#1 0x55bfb8b52780 logging::LogMessage::~LogMessage()
#2 0x55bfb7be22b1 content::ZygoteHostImpl::Init()
#3 0x55bfb7854c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bfb785aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bfbc9849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bfb8874a00 content::RunNamedProcessTypeMain()
#7 0x55bfb88752e8 content::ContentMainRunnerImpl::Run()
#8 0x55bfb887ef24 service_manager::Main()
#9 0x55bfb8873f14 content::ContentMain()
#10 0x55bfbc9839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bfbc983a42 headless::HeadlessBrowserMain()
#12 0x55bfb887bf9d headless::HeadlessShellMain()
#13 0x55bfb6eda1ac ChromeMain
#14 0x7ffaf8c1b2e1 __libc_start_main
#15 0x55bfb6eda02a _start

Received signal 6
#0 0x55bfb8b39b0c base::debug::StackTrace::StackTrace()
#1 0x55bfb8b39671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ffafeb780c0 <unknown>
#3 0x7ffaf8c2dfff gsignal
#4 0x7ffaf8c2f42a abort
#5 0x55bfb8b38105 base::debug::BreakDebugger()
#6 0x55bfb8b52bca logging::LogMessage::~LogMessage()
#7 0x55bfb7be22b1 content::ZygoteHostImpl::Init()
#8 0x55bfb7854c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bfb785aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bfbc9849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bfb8874a00 content::RunNamedProcessTypeMain()
#12 0x55bfb88752e8 content::ContentMainRunnerImpl::Run()
#13 0x55bfb887ef24 service_manager::Main()
#14 0x55bfb8873f14 content::ContentMain()
#15 0x55bfbc9839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bfbc983a42 headless::HeadlessBrowserMain()
#17 0x55bfb887bf9d headless::HeadlessShellMain()
#18 0x55bfb6eda1ac ChromeMain
#19 0x7ffaf8c1b2e1 __libc_start_main
#20 0x55bfb6eda02a _start
  r8: 0000000000000000  r9: 00007fffc76966b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc7696da8 r13: 0000000000000161 r14: 00007fffc7696db0 r15: 00007fffc7696949
  di: 0000000000000002  si: 00007fffc76966b0  bp: 00007fffc76968f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ffaf8c2dfff  sp: 00007fffc7696728
  ip: 00007ffaf8c2dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020242.811487:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bfb8b39b0c base::debug::StackTrace::StackTrace()
#1 0x55bfb8b52780 logging::LogMessage::~LogMessage()
#2 0x55bfb7be22b1 content::ZygoteHostImpl::Init()
#3 0x55bfb7854c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bfb785aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bfbc9849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bfb8874a00 content::RunNamedProcessTypeMain()
#7 0x55bfb88752e8 content::ContentMainRunnerImpl::Run()
#8 0x55bfb887ef24 service_manager::Main()
#9 0x55bfb8873f14 content::ContentMain()
#10 0x55bfbc9839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bfbc983a42 headless::HeadlessBrowserMain()
#12 0x55bfb887bf9d headless::HeadlessShellMain()
#13 0x55bfb6eda1ac ChromeMain
#14 0x7ffaf8c1b2e1 __libc_start_main
#15 0x55bfb6eda02a _start

Received signal 6
#0 0x55bfb8b39b0c base::debug::StackTrace::StackTrace()
#1 0x55bfb8b39671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7ffafeb780c0 <unknown>
#3 0x7ffaf8c2dfff gsignal
#4 0x7ffaf8c2f42a abort
#5 0x55bfb8b38105 base::debug::BreakDebugger()
#6 0x55bfb8b52bca logging::LogMessage::~LogMessage()
#7 0x55bfb7be22b1 content::ZygoteHostImpl::Init()
#8 0x55bfb7854c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bfb785aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bfbc9849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bfb8874a00 content::RunNamedProcessTypeMain()
#12 0x55bfb88752e8 content::ContentMainRunnerImpl::Run()
#13 0x55bfb887ef24 service_manager::Main()
#14 0x55bfb8873f14 content::ContentMain()
#15 0x55bfbc9839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bfbc983a42 headless::HeadlessBrowserMain()
#17 0x55bfb887bf9d headless::HeadlessShellMain()
#18 0x55bfb6eda1ac ChromeMain
#19 0x7ffaf8c1b2e1 __libc_start_main
#20 0x55bfb6eda02a _start
  r8: 0000000000000000  r9: 00007fffc76966b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc7696da8 r13: 0000000000000161 r14: 00007fffc7696db0 r15: 00007fffc7696949
  di: 0000000000000002  si: 00007fffc76966b0  bp: 00007fffc76968f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007ffaf8c2dfff  sp: 00007fffc7696728
  ip: 00007ffaf8c2dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020243.207342:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564daa6adb0c base::debug::StackTrace::StackTrace()
#1 0x564daa6c6780 logging::LogMessage::~LogMessage()
#2 0x564da97562b1 content::ZygoteHostImpl::Init()
#3 0x564da93c8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564da93cea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564dae4f89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564daa3e8a00 content::RunNamedProcessTypeMain()
#7 0x564daa3e92e8 content::ContentMainRunnerImpl::Run()
#8 0x564daa3f2f24 service_manager::Main()
#9 0x564daa3e7f14 content::ContentMain()
#10 0x564dae4f79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564dae4f7a42 headless::HeadlessBrowserMain()
#12 0x564daa3eff9d headless::HeadlessShellMain()
#13 0x564da8a4e1ac ChromeMain
#14 0x7f89f8f112e1 __libc_start_main
#15 0x564da8a4e02a _start

Received signal 6
#0 0x564daa6adb0c base::debug::StackTrace::StackTrace()
#1 0x564daa6ad671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f89fee6e0c0 <unknown>
#3 0x7f89f8f23fff gsignal
#4 0x7f89f8f2542a abort
#5 0x564daa6ac105 base::debug::BreakDebugger()
#6 0x564daa6c6bca logging::LogMessage::~LogMessage()
#7 0x564da97562b1 content::ZygoteHostImpl::Init()
#8 0x564da93c8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564da93cea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564dae4f89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564daa3e8a00 content::RunNamedProcessTypeMain()
#12 0x564daa3e92e8 content::ContentMainRunnerImpl::Run()
#13 0x564daa3f2f24 service_manager::Main()
#14 0x564daa3e7f14 content::ContentMain()
#15 0x564dae4f79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564dae4f7a42 headless::HeadlessBrowserMain()
#17 0x564daa3eff9d headless::HeadlessShellMain()
#18 0x564da8a4e1ac ChromeMain
#19 0x7f89f8f112e1 __libc_start_main
#20 0x564da8a4e02a _start
  r8: 0000000000000000  r9: 00007fffd80b37f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd80b3ee8 r13: 0000000000000161 r14: 00007fffd80b3ef0 r15: 00007fffd80b3a89
  di: 0000000000000002  si: 00007fffd80b37f0  bp: 00007fffd80b3a30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f89f8f23fff  sp: 00007fffd80b3868
  ip: 00007f89f8f23fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020243.207342:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564daa6adb0c base::debug::StackTrace::StackTrace()
#1 0x564daa6c6780 logging::LogMessage::~LogMessage()
#2 0x564da97562b1 content::ZygoteHostImpl::Init()
#3 0x564da93c8c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564da93cea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x564dae4f89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564daa3e8a00 content::RunNamedProcessTypeMain()
#7 0x564daa3e92e8 content::ContentMainRunnerImpl::Run()
#8 0x564daa3f2f24 service_manager::Main()
#9 0x564daa3e7f14 content::ContentMain()
#10 0x564dae4f79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x564dae4f7a42 headless::HeadlessBrowserMain()
#12 0x564daa3eff9d headless::HeadlessShellMain()
#13 0x564da8a4e1ac ChromeMain
#14 0x7f89f8f112e1 __libc_start_main
#15 0x564da8a4e02a _start

Received signal 6
#0 0x564daa6adb0c base::debug::StackTrace::StackTrace()
#1 0x564daa6ad671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f89fee6e0c0 <unknown>
#3 0x7f89f8f23fff gsignal
#4 0x7f89f8f2542a abort
#5 0x564daa6ac105 base::debug::BreakDebugger()
#6 0x564daa6c6bca logging::LogMessage::~LogMessage()
#7 0x564da97562b1 content::ZygoteHostImpl::Init()
#8 0x564da93c8c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564da93cea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x564dae4f89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564daa3e8a00 content::RunNamedProcessTypeMain()
#12 0x564daa3e92e8 content::ContentMainRunnerImpl::Run()
#13 0x564daa3f2f24 service_manager::Main()
#14 0x564daa3e7f14 content::ContentMain()
#15 0x564dae4f79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x564dae4f7a42 headless::HeadlessBrowserMain()
#17 0x564daa3eff9d headless::HeadlessShellMain()
#18 0x564da8a4e1ac ChromeMain
#19 0x7f89f8f112e1 __libc_start_main
#20 0x564da8a4e02a _start
  r8: 0000000000000000  r9: 00007fffd80b37f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd80b3ee8 r13: 0000000000000161 r14: 00007fffd80b3ef0 r15: 00007fffd80b3a89
  di: 0000000000000002  si: 00007fffd80b37f0  bp: 00007fffd80b3a30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f89f8f23fff  sp: 00007fffd80b3868
  ip: 00007f89f8f23fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020244.133993:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bbe4c84b0c base::debug::StackTrace::StackTrace()
#1 0x55bbe4c9d780 logging::LogMessage::~LogMessage()
#2 0x55bbe3d2d2b1 content::ZygoteHostImpl::Init()
#3 0x55bbe399fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bbe39a5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bbe8acf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bbe49bfa00 content::RunNamedProcessTypeMain()
#7 0x55bbe49c02e8 content::ContentMainRunnerImpl::Run()
#8 0x55bbe49c9f24 service_manager::Main()
#9 0x55bbe49bef14 content::ContentMain()
#10 0x55bbe8ace9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bbe8acea42 headless::HeadlessBrowserMain()
#12 0x55bbe49c6f9d headless::HeadlessShellMain()
#13 0x55bbe30251ac ChromeMain
#14 0x7f3261cc72e1 __libc_start_main
#15 0x55bbe302502a _start

Received signal 6
#0 0x55bbe4c84b0c base::debug::StackTrace::StackTrace()
#1 0x55bbe4c84671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3267c240c0 <unknown>
#3 0x7f3261cd9fff gsignal
#4 0x7f3261cdb42a abort
#5 0x55bbe4c83105 base::debug::BreakDebugger()
#6 0x55bbe4c9dbca logging::LogMessage::~LogMessage()
#7 0x55bbe3d2d2b1 content::ZygoteHostImpl::Init()
#8 0x55bbe399fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bbe39a5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bbe8acf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bbe49bfa00 content::RunNamedProcessTypeMain()
#12 0x55bbe49c02e8 content::ContentMainRunnerImpl::Run()
#13 0x55bbe49c9f24 service_manager::Main()
#14 0x55bbe49bef14 content::ContentMain()
#15 0x55bbe8ace9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bbe8acea42 headless::HeadlessBrowserMain()
#17 0x55bbe49c6f9d headless::HeadlessShellMain()
#18 0x55bbe30251ac ChromeMain
#19 0x7f3261cc72e1 __libc_start_main
#20 0x55bbe302502a _start
  r8: 0000000000000000  r9: 00007ffeab2df7f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeab2dfee8 r13: 0000000000000161 r14: 00007ffeab2dfef0 r15: 00007ffeab2dfa89
  di: 0000000000000002  si: 00007ffeab2df7f0  bp: 00007ffeab2dfa30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3261cd9fff  sp: 00007ffeab2df868
  ip: 00007f3261cd9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020244.133993:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bbe4c84b0c base::debug::StackTrace::StackTrace()
#1 0x55bbe4c9d780 logging::LogMessage::~LogMessage()
#2 0x55bbe3d2d2b1 content::ZygoteHostImpl::Init()
#3 0x55bbe399fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bbe39a5a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bbe8acf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bbe49bfa00 content::RunNamedProcessTypeMain()
#7 0x55bbe49c02e8 content::ContentMainRunnerImpl::Run()
#8 0x55bbe49c9f24 service_manager::Main()
#9 0x55bbe49bef14 content::ContentMain()
#10 0x55bbe8ace9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bbe8acea42 headless::HeadlessBrowserMain()
#12 0x55bbe49c6f9d headless::HeadlessShellMain()
#13 0x55bbe30251ac ChromeMain
#14 0x7f3261cc72e1 __libc_start_main
#15 0x55bbe302502a _start

Received signal 6
#0 0x55bbe4c84b0c base::debug::StackTrace::StackTrace()
#1 0x55bbe4c84671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f3267c240c0 <unknown>
#3 0x7f3261cd9fff gsignal
#4 0x7f3261cdb42a abort
#5 0x55bbe4c83105 base::debug::BreakDebugger()
#6 0x55bbe4c9dbca logging::LogMessage::~LogMessage()
#7 0x55bbe3d2d2b1 content::ZygoteHostImpl::Init()
#8 0x55bbe399fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bbe39a5a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bbe8acf9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bbe49bfa00 content::RunNamedProcessTypeMain()
#12 0x55bbe49c02e8 content::ContentMainRunnerImpl::Run()
#13 0x55bbe49c9f24 service_manager::Main()
#14 0x55bbe49bef14 content::ContentMain()
#15 0x55bbe8ace9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bbe8acea42 headless::HeadlessBrowserMain()
#17 0x55bbe49c6f9d headless::HeadlessShellMain()
#18 0x55bbe30251ac ChromeMain
#19 0x7f3261cc72e1 __libc_start_main
#20 0x55bbe302502a _start
  r8: 0000000000000000  r9: 00007ffeab2df7f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffeab2dfee8 r13: 0000000000000161 r14: 00007ffeab2dfef0 r15: 00007ffeab2dfa89
  di: 0000000000000002  si: 00007ffeab2df7f0  bp: 00007ffeab2dfa30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3261cd9fff  sp: 00007ffeab2df868
  ip: 00007f3261cd9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020242.692485:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5635cf0f0b0c base::debug::StackTrace::StackTrace()
#1 0x5635cf109780 logging::LogMessage::~LogMessage()
#2 0x5635ce1992b1 content::ZygoteHostImpl::Init()
#3 0x5635cde0bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5635cde11a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5635d2f3b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5635cee2ba00 content::RunNamedProcessTypeMain()
#7 0x5635cee2c2e8 content::ContentMainRunnerImpl::Run()
#8 0x5635cee35f24 service_manager::Main()
#9 0x5635cee2af14 content::ContentMain()
#10 0x5635d2f3a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5635d2f3aa42 headless::HeadlessBrowserMain()
#12 0x5635cee32f9d headless::HeadlessShellMain()
#13 0x5635cd4911ac ChromeMain
#14 0x7fcb9d6ad2e1 __libc_start_main
#15 0x5635cd49102a _start

Received signal 6
#0 0x5635cf0f0b0c base::debug::StackTrace::StackTrace()
#1 0x5635cf0f0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcba360a0c0 <unknown>
#3 0x7fcb9d6bffff gsignal
#4 0x7fcb9d6c142a abort
#5 0x5635cf0ef105 base::debug::BreakDebugger()
#6 0x5635cf109bca logging::LogMessage::~LogMessage()
#7 0x5635ce1992b1 content::ZygoteHostImpl::Init()
#8 0x5635cde0bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5635cde11a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5635d2f3b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5635cee2ba00 content::RunNamedProcessTypeMain()
#12 0x5635cee2c2e8 content::ContentMainRunnerImpl::Run()
#13 0x5635cee35f24 service_manager::Main()
#14 0x5635cee2af14 content::ContentMain()
#15 0x5635d2f3a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5635d2f3aa42 headless::HeadlessBrowserMain()
#17 0x5635cee32f9d headless::HeadlessShellMain()
#18 0x5635cd4911ac ChromeMain
#19 0x7fcb9d6ad2e1 __libc_start_main
#20 0x5635cd49102a _start
  r8: 0000000000000000  r9: 00007ffffe200880 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffe200f78 r13: 0000000000000161 r14: 00007ffffe200f80 r15: 00007ffffe200b19
  di: 0000000000000002  si: 00007ffffe200880  bp: 00007ffffe200ac0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcb9d6bffff  sp: 00007ffffe2008f8
  ip: 00007fcb9d6bffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020242.692485:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5635cf0f0b0c base::debug::StackTrace::StackTrace()
#1 0x5635cf109780 logging::LogMessage::~LogMessage()
#2 0x5635ce1992b1 content::ZygoteHostImpl::Init()
#3 0x5635cde0bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5635cde11a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5635d2f3b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5635cee2ba00 content::RunNamedProcessTypeMain()
#7 0x5635cee2c2e8 content::ContentMainRunnerImpl::Run()
#8 0x5635cee35f24 service_manager::Main()
#9 0x5635cee2af14 content::ContentMain()
#10 0x5635d2f3a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5635d2f3aa42 headless::HeadlessBrowserMain()
#12 0x5635cee32f9d headless::HeadlessShellMain()
#13 0x5635cd4911ac ChromeMain
#14 0x7fcb9d6ad2e1 __libc_start_main
#15 0x5635cd49102a _start

Received signal 6
#0 0x5635cf0f0b0c base::debug::StackTrace::StackTrace()
#1 0x5635cf0f0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcba360a0c0 <unknown>
#3 0x7fcb9d6bffff gsignal
#4 0x7fcb9d6c142a abort
#5 0x5635cf0ef105 base::debug::BreakDebugger()
#6 0x5635cf109bca logging::LogMessage::~LogMessage()
#7 0x5635ce1992b1 content::ZygoteHostImpl::Init()
#8 0x5635cde0bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5635cde11a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5635d2f3b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5635cee2ba00 content::RunNamedProcessTypeMain()
#12 0x5635cee2c2e8 content::ContentMainRunnerImpl::Run()
#13 0x5635cee35f24 service_manager::Main()
#14 0x5635cee2af14 content::ContentMain()
#15 0x5635d2f3a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5635d2f3aa42 headless::HeadlessBrowserMain()
#17 0x5635cee32f9d headless::HeadlessShellMain()
#18 0x5635cd4911ac ChromeMain
#19 0x7fcb9d6ad2e1 __libc_start_main
#20 0x5635cd49102a _start
  r8: 0000000000000000  r9: 00007ffffe200880 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffe200f78 r13: 0000000000000161 r14: 00007ffffe200f80 r15: 00007ffffe200b19
  di: 0000000000000002  si: 00007ffffe200880  bp: 00007ffffe200ac0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcb9d6bffff  sp: 00007ffffe2008f8
  ip: 00007fcb9d6bffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020250.325829:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5632b7724b0c base::debug::StackTrace::StackTrace()
#1 0x5632b773d780 logging::LogMessage::~LogMessage()
#2 0x5632b67cd2b1 content::ZygoteHostImpl::Init()
#3 0x5632b643fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5632b6445a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5632bb56f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5632b745fa00 content::RunNamedProcessTypeMain()
#7 0x5632b74602e8 content::ContentMainRunnerImpl::Run()
#8 0x5632b7469f24 service_manager::Main()
#9 0x5632b745ef14 content::ContentMain()
#10 0x5632bb56e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5632bb56ea42 headless::HeadlessBrowserMain()
#12 0x5632b7466f9d headless::HeadlessShellMain()
#13 0x5632b5ac51ac ChromeMain
#14 0x7f13eca832e1 __libc_start_main
#15 0x5632b5ac502a _start

Received signal 6
#0 0x5632b7724b0c base::debug::StackTrace::StackTrace()
#1 0x5632b7724671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f13f29e00c0 <unknown>
#3 0x7f13eca95fff gsignal
#4 0x7f13eca9742a abort
#5 0x5632b7723105 base::debug::BreakDebugger()
#6 0x5632b773dbca logging::LogMessage::~LogMessage()
#7 0x5632b67cd2b1 content::ZygoteHostImpl::Init()
#8 0x5632b643fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5632b6445a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5632bb56f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5632b745fa00 content::RunNamedProcessTypeMain()
#12 0x5632b74602e8 content::ContentMainRunnerImpl::Run()
#13 0x5632b7469f24 service_manager::Main()
#14 0x5632b745ef14 content::ContentMain()
#15 0x5632bb56e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5632bb56ea42 headless::HeadlessBrowserMain()
#17 0x5632b7466f9d headless::HeadlessShellMain()
#18 0x5632b5ac51ac ChromeMain
#19 0x7f13eca832e1 __libc_start_main
#20 0x5632b5ac502a _start
  r8: 0000000000000000  r9: 00007ffd0d1233c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd0d123ab8 r13: 0000000000000161 r14: 00007ffd0d123ac0 r15: 00007ffd0d123659
  di: 0000000000000002  si: 00007ffd0d1233c0  bp: 00007ffd0d123600  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f13eca95fff  sp: 00007ffd0d123438
  ip: 00007f13eca95fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020250.325829:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5632b7724b0c base::debug::StackTrace::StackTrace()
#1 0x5632b773d780 logging::LogMessage::~LogMessage()
#2 0x5632b67cd2b1 content::ZygoteHostImpl::Init()
#3 0x5632b643fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5632b6445a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5632bb56f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5632b745fa00 content::RunNamedProcessTypeMain()
#7 0x5632b74602e8 content::ContentMainRunnerImpl::Run()
#8 0x5632b7469f24 service_manager::Main()
#9 0x5632b745ef14 content::ContentMain()
#10 0x5632bb56e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5632bb56ea42 headless::HeadlessBrowserMain()
#12 0x5632b7466f9d headless::HeadlessShellMain()
#13 0x5632b5ac51ac ChromeMain
#14 0x7f13eca832e1 __libc_start_main
#15 0x5632b5ac502a _start

Received signal 6
#0 0x5632b7724b0c base::debug::StackTrace::StackTrace()
#1 0x5632b7724671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f13f29e00c0 <unknown>
#3 0x7f13eca95fff gsignal
#4 0x7f13eca9742a abort
#5 0x5632b7723105 base::debug::BreakDebugger()
#6 0x5632b773dbca logging::LogMessage::~LogMessage()
#7 0x5632b67cd2b1 content::ZygoteHostImpl::Init()
#8 0x5632b643fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5632b6445a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5632bb56f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5632b745fa00 content::RunNamedProcessTypeMain()
#12 0x5632b74602e8 content::ContentMainRunnerImpl::Run()
#13 0x5632b7469f24 service_manager::Main()
#14 0x5632b745ef14 content::ContentMain()
#15 0x5632bb56e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5632bb56ea42 headless::HeadlessBrowserMain()
#17 0x5632b7466f9d headless::HeadlessShellMain()
#18 0x5632b5ac51ac ChromeMain
#19 0x7f13eca832e1 __libc_start_main
#20 0x5632b5ac502a _start
  r8: 0000000000000000  r9: 00007ffd0d1233c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd0d123ab8 r13: 0000000000000161 r14: 00007ffd0d123ac0 r15: 00007ffd0d123659
  di: 0000000000000002  si: 00007ffd0d1233c0  bp: 00007ffd0d123600  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f13eca95fff  sp: 00007ffd0d123438
  ip: 00007f13eca95fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020250.099313:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d03aed2b0c base::debug::StackTrace::StackTrace()
#1 0x55d03aeeb780 logging::LogMessage::~LogMessage()
#2 0x55d039f7b2b1 content::ZygoteHostImpl::Init()
#3 0x55d039bedc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d039bf3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d03ed1d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d03ac0da00 content::RunNamedProcessTypeMain()
#7 0x55d03ac0e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d03ac17f24 service_manager::Main()
#9 0x55d03ac0cf14 content::ContentMain()
#10 0x55d03ed1c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d03ed1ca42 headless::HeadlessBrowserMain()
#12 0x55d03ac14f9d headless::HeadlessShellMain()
#13 0x55d0392731ac ChromeMain
#14 0x7fe35675f2e1 __libc_start_main
#15 0x55d03927302a _start

Received signal 6
#0 0x55d03aed2b0c base::debug::StackTrace::StackTrace()
#1 0x55d03aed2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe35c6bc0c0 <unknown>
#3 0x7fe356771fff gsignal
#4 0x7fe35677342a abort
#5 0x55d03aed1105 base::debug::BreakDebugger()
#6 0x55d03aeebbca logging::LogMessage::~LogMessage()
#7 0x55d039f7b2b1 content::ZygoteHostImpl::Init()
#8 0x55d039bedc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d039bf3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d03ed1d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d03ac0da00 content::RunNamedProcessTypeMain()
#12 0x55d03ac0e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d03ac17f24 service_manager::Main()
#14 0x55d03ac0cf14 content::ContentMain()
#15 0x55d03ed1c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d03ed1ca42 headless::HeadlessBrowserMain()
#17 0x55d03ac14f9d headless::HeadlessShellMain()
#18 0x55d0392731ac ChromeMain
#19 0x7fe35675f2e1 __libc_start_main
#20 0x55d03927302a _start
  r8: 0000000000000000  r9: 00007ffe0b4bd010 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe0b4bd708 r13: 0000000000000161 r14: 00007ffe0b4bd710 r15: 00007ffe0b4bd2a9
  di: 0000000000000002  si: 00007ffe0b4bd010  bp: 00007ffe0b4bd250  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe356771fff  sp: 00007ffe0b4bd088
  ip: 00007fe356771fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020250.099313:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d03aed2b0c base::debug::StackTrace::StackTrace()
#1 0x55d03aeeb780 logging::LogMessage::~LogMessage()
#2 0x55d039f7b2b1 content::ZygoteHostImpl::Init()
#3 0x55d039bedc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d039bf3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d03ed1d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d03ac0da00 content::RunNamedProcessTypeMain()
#7 0x55d03ac0e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d03ac17f24 service_manager::Main()
#9 0x55d03ac0cf14 content::ContentMain()
#10 0x55d03ed1c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d03ed1ca42 headless::HeadlessBrowserMain()
#12 0x55d03ac14f9d headless::HeadlessShellMain()
#13 0x55d0392731ac ChromeMain
#14 0x7fe35675f2e1 __libc_start_main
#15 0x55d03927302a _start

Received signal 6
#0 0x55d03aed2b0c base::debug::StackTrace::StackTrace()
#1 0x55d03aed2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe35c6bc0c0 <unknown>
#3 0x7fe356771fff gsignal
#4 0x7fe35677342a abort
#5 0x55d03aed1105 base::debug::BreakDebugger()
#6 0x55d03aeebbca logging::LogMessage::~LogMessage()
#7 0x55d039f7b2b1 content::ZygoteHostImpl::Init()
#8 0x55d039bedc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d039bf3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d03ed1d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d03ac0da00 content::RunNamedProcessTypeMain()
#12 0x55d03ac0e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d03ac17f24 service_manager::Main()
#14 0x55d03ac0cf14 content::ContentMain()
#15 0x55d03ed1c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d03ed1ca42 headless::HeadlessBrowserMain()
#17 0x55d03ac14f9d headless::HeadlessShellMain()
#18 0x55d0392731ac ChromeMain
#19 0x7fe35675f2e1 __libc_start_main
#20 0x55d03927302a _start
  r8: 0000000000000000  r9: 00007ffe0b4bd010 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe0b4bd708 r13: 0000000000000161 r14: 00007ffe0b4bd710 r15: 00007ffe0b4bd2a9
  di: 0000000000000002  si: 00007ffe0b4bd010  bp: 00007ffe0b4bd250  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe356771fff  sp: 00007ffe0b4bd088
  ip: 00007fe356771fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020250.073673:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e02d595b0c base::debug::StackTrace::StackTrace()
#1 0x55e02d5ae780 logging::LogMessage::~LogMessage()
#2 0x55e02c63e2b1 content::ZygoteHostImpl::Init()
#3 0x55e02c2b0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e02c2b6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e0313e09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e02d2d0a00 content::RunNamedProcessTypeMain()
#7 0x55e02d2d12e8 content::ContentMainRunnerImpl::Run()
#8 0x55e02d2daf24 service_manager::Main()
#9 0x55e02d2cff14 content::ContentMain()
#10 0x55e0313df9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e0313dfa42 headless::HeadlessBrowserMain()
#12 0x55e02d2d7f9d headless::HeadlessShellMain()
#13 0x55e02b9361ac ChromeMain
#14 0x7f042ad142e1 __libc_start_main
#15 0x55e02b93602a _start

Received signal 6
#0 0x55e02d595b0c base::debug::StackTrace::StackTrace()
#1 0x55e02d595671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0430c710c0 <unknown>
#3 0x7f042ad26fff gsignal
#4 0x7f042ad2842a abort
#5 0x55e02d594105 base::debug::BreakDebugger()
#6 0x55e02d5aebca logging::LogMessage::~LogMessage()
#7 0x55e02c63e2b1 content::ZygoteHostImpl::Init()
#8 0x55e02c2b0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e02c2b6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e0313e09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e02d2d0a00 content::RunNamedProcessTypeMain()
#12 0x55e02d2d12e8 content::ContentMainRunnerImpl::Run()
#13 0x55e02d2daf24 service_manager::Main()
#14 0x55e02d2cff14 content::ContentMain()
#15 0x55e0313df9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e0313dfa42 headless::HeadlessBrowserMain()
#17 0x55e02d2d7f9d headless::HeadlessShellMain()
#18 0x55e02b9361ac ChromeMain
#19 0x7f042ad142e1 __libc_start_main
#20 0x55e02b93602a _start
  r8: 0000000000000000  r9: 00007fff422984f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff42298be8 r13: 0000000000000161 r14: 00007fff42298bf0 r15: 00007fff42298789
  di: 0000000000000002  si: 00007fff422984f0  bp: 00007fff42298730  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f042ad26fff  sp: 00007fff42298568
  ip: 00007f042ad26fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020250.073673:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e02d595b0c base::debug::StackTrace::StackTrace()
#1 0x55e02d5ae780 logging::LogMessage::~LogMessage()
#2 0x55e02c63e2b1 content::ZygoteHostImpl::Init()
#3 0x55e02c2b0c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e02c2b6a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e0313e09a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e02d2d0a00 content::RunNamedProcessTypeMain()
#7 0x55e02d2d12e8 content::ContentMainRunnerImpl::Run()
#8 0x55e02d2daf24 service_manager::Main()
#9 0x55e02d2cff14 content::ContentMain()
#10 0x55e0313df9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e0313dfa42 headless::HeadlessBrowserMain()
#12 0x55e02d2d7f9d headless::HeadlessShellMain()
#13 0x55e02b9361ac ChromeMain
#14 0x7f042ad142e1 __libc_start_main
#15 0x55e02b93602a _start

Received signal 6
#0 0x55e02d595b0c base::debug::StackTrace::StackTrace()
#1 0x55e02d595671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f0430c710c0 <unknown>
#3 0x7f042ad26fff gsignal
#4 0x7f042ad2842a abort
#5 0x55e02d594105 base::debug::BreakDebugger()
#6 0x55e02d5aebca logging::LogMessage::~LogMessage()
#7 0x55e02c63e2b1 content::ZygoteHostImpl::Init()
#8 0x55e02c2b0c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e02c2b6a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e0313e09a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e02d2d0a00 content::RunNamedProcessTypeMain()
#12 0x55e02d2d12e8 content::ContentMainRunnerImpl::Run()
#13 0x55e02d2daf24 service_manager::Main()
#14 0x55e02d2cff14 content::ContentMain()
#15 0x55e0313df9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e0313dfa42 headless::HeadlessBrowserMain()
#17 0x55e02d2d7f9d headless::HeadlessShellMain()
#18 0x55e02b9361ac ChromeMain
#19 0x7f042ad142e1 __libc_start_main
#20 0x55e02b93602a _start
  r8: 0000000000000000  r9: 00007fff422984f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff42298be8 r13: 0000000000000161 r14: 00007fff42298bf0 r15: 00007fff42298789
  di: 0000000000000002  si: 00007fff422984f0  bp: 00007fff42298730  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f042ad26fff  sp: 00007fff42298568
  ip: 00007f042ad26fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020155.843023:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560d09535b0c base::debug::StackTrace::StackTrace()
#1 0x560d0954e780 logging::LogMessage::~LogMessage()
#2 0x560d085de2b1 content::ZygoteHostImpl::Init()
#3 0x560d08250c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560d08256a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560d0d3809a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560d09270a00 content::RunNamedProcessTypeMain()
#7 0x560d092712e8 content::ContentMainRunnerImpl::Run()
#8 0x560d0927af24 service_manager::Main()
#9 0x560d0926ff14 content::ContentMain()
#10 0x560d0d37f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560d0d37fa42 headless::HeadlessBrowserMain()
#12 0x560d09277f9d headless::HeadlessShellMain()
#13 0x560d078d61ac ChromeMain
#14 0x7f138d25b2e1 __libc_start_main
#15 0x560d078d602a _start

Received signal 6
#0 0x560d09535b0c base::debug::StackTrace::StackTrace()
#1 0x560d09535671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f13931b80c0 <unknown>
#3 0x7f138d26dfff gsignal
#4 0x7f138d26f42a abort
#5 0x560d09534105 base::debug::BreakDebugger()
#6 0x560d0954ebca logging::LogMessage::~LogMessage()
#7 0x560d085de2b1 content::ZygoteHostImpl::Init()
#8 0x560d08250c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560d08256a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560d0d3809a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560d09270a00 content::RunNamedProcessTypeMain()
#12 0x560d092712e8 content::ContentMainRunnerImpl::Run()
#13 0x560d0927af24 service_manager::Main()
#14 0x560d0926ff14 content::ContentMain()
#15 0x560d0d37f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560d0d37fa42 headless::HeadlessBrowserMain()
#17 0x560d09277f9d headless::HeadlessShellMain()
#18 0x560d078d61ac ChromeMain
#19 0x7f138d25b2e1 __libc_start_main
#20 0x560d078d602a _start
  r8: 0000000000000000  r9: 00007fff9a3d7800 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff9a3d7ef8 r13: 0000000000000161 r14: 00007fff9a3d7f00 r15: 00007fff9a3d7a99
  di: 0000000000000002  si: 00007fff9a3d7800  bp: 00007fff9a3d7a40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f138d26dfff  sp: 00007fff9a3d7878
  ip: 00007f138d26dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020155.843023:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560d09535b0c base::debug::StackTrace::StackTrace()
#1 0x560d0954e780 logging::LogMessage::~LogMessage()
#2 0x560d085de2b1 content::ZygoteHostImpl::Init()
#3 0x560d08250c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x560d08256a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x560d0d3809a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560d09270a00 content::RunNamedProcessTypeMain()
#7 0x560d092712e8 content::ContentMainRunnerImpl::Run()
#8 0x560d0927af24 service_manager::Main()
#9 0x560d0926ff14 content::ContentMain()
#10 0x560d0d37f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560d0d37fa42 headless::HeadlessBrowserMain()
#12 0x560d09277f9d headless::HeadlessShellMain()
#13 0x560d078d61ac ChromeMain
#14 0x7f138d25b2e1 __libc_start_main
#15 0x560d078d602a _start

Received signal 6
#0 0x560d09535b0c base::debug::StackTrace::StackTrace()
#1 0x560d09535671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f13931b80c0 <unknown>
#3 0x7f138d26dfff gsignal
#4 0x7f138d26f42a abort
#5 0x560d09534105 base::debug::BreakDebugger()
#6 0x560d0954ebca logging::LogMessage::~LogMessage()
#7 0x560d085de2b1 content::ZygoteHostImpl::Init()
#8 0x560d08250c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x560d08256a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x560d0d3809a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560d09270a00 content::RunNamedProcessTypeMain()
#12 0x560d092712e8 content::ContentMainRunnerImpl::Run()
#13 0x560d0927af24 service_manager::Main()
#14 0x560d0926ff14 content::ContentMain()
#15 0x560d0d37f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560d0d37fa42 headless::HeadlessBrowserMain()
#17 0x560d09277f9d headless::HeadlessShellMain()
#18 0x560d078d61ac ChromeMain
#19 0x7f138d25b2e1 __libc_start_main
#20 0x560d078d602a _start
  r8: 0000000000000000  r9: 00007fff9a3d7800 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff9a3d7ef8 r13: 0000000000000161 r14: 00007fff9a3d7f00 r15: 00007fff9a3d7a99
  di: 0000000000000002  si: 00007fff9a3d7800  bp: 00007fff9a3d7a40  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f138d26dfff  sp: 00007fff9a3d7878
  ip: 00007f138d26dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020250.346351:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5602ad145b0c base::debug::StackTrace::StackTrace()
#1 0x5602ad15e780 logging::LogMessage::~LogMessage()
#2 0x5602ac1ee2b1 content::ZygoteHostImpl::Init()
#3 0x5602abe60c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5602abe66a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5602b0f909a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5602ace80a00 content::RunNamedProcessTypeMain()
#7 0x5602ace812e8 content::ContentMainRunnerImpl::Run()
#8 0x5602ace8af24 service_manager::Main()
#9 0x5602ace7ff14 content::ContentMain()
#10 0x5602b0f8f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5602b0f8fa42 headless::HeadlessBrowserMain()
#12 0x5602ace87f9d headless::HeadlessShellMain()
#13 0x5602ab4e61ac ChromeMain
#14 0x7f2e21dd62e1 __libc_start_main
#15 0x5602ab4e602a _start

Received signal 6
#0 0x5602ad145b0c base::debug::StackTrace::StackTrace()
#1 0x5602ad145671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2e27d330c0 <unknown>
#3 0x7f2e21de8fff gsignal
#4 0x7f2e21dea42a abort
#5 0x5602ad144105 base::debug::BreakDebugger()
#6 0x5602ad15ebca logging::LogMessage::~LogMessage()
#7 0x5602ac1ee2b1 content::ZygoteHostImpl::Init()
#8 0x5602abe60c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5602abe66a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5602b0f909a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5602ace80a00 content::RunNamedProcessTypeMain()
#12 0x5602ace812e8 content::ContentMainRunnerImpl::Run()
#13 0x5602ace8af24 service_manager::Main()
#14 0x5602ace7ff14 content::ContentMain()
#15 0x5602b0f8f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5602b0f8fa42 headless::HeadlessBrowserMain()
#17 0x5602ace87f9d headless::HeadlessShellMain()
#18 0x5602ab4e61ac ChromeMain
#19 0x7f2e21dd62e1 __libc_start_main
#20 0x5602ab4e602a _start
  r8: 0000000000000000  r9: 00007ffe7a7af110 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe7a7af808 r13: 0000000000000161 r14: 00007ffe7a7af810 r15: 00007ffe7a7af3a9
  di: 0000000000000002  si: 00007ffe7a7af110  bp: 00007ffe7a7af350  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2e21de8fff  sp: 00007ffe7a7af188
  ip: 00007f2e21de8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020250.346351:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5602ad145b0c base::debug::StackTrace::StackTrace()
#1 0x5602ad15e780 logging::LogMessage::~LogMessage()
#2 0x5602ac1ee2b1 content::ZygoteHostImpl::Init()
#3 0x5602abe60c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5602abe66a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5602b0f909a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5602ace80a00 content::RunNamedProcessTypeMain()
#7 0x5602ace812e8 content::ContentMainRunnerImpl::Run()
#8 0x5602ace8af24 service_manager::Main()
#9 0x5602ace7ff14 content::ContentMain()
#10 0x5602b0f8f9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5602b0f8fa42 headless::HeadlessBrowserMain()
#12 0x5602ace87f9d headless::HeadlessShellMain()
#13 0x5602ab4e61ac ChromeMain
#14 0x7f2e21dd62e1 __libc_start_main
#15 0x5602ab4e602a _start

Received signal 6
#0 0x5602ad145b0c base::debug::StackTrace::StackTrace()
#1 0x5602ad145671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2e27d330c0 <unknown>
#3 0x7f2e21de8fff gsignal
#4 0x7f2e21dea42a abort
#5 0x5602ad144105 base::debug::BreakDebugger()
#6 0x5602ad15ebca logging::LogMessage::~LogMessage()
#7 0x5602ac1ee2b1 content::ZygoteHostImpl::Init()
#8 0x5602abe60c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5602abe66a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5602b0f909a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5602ace80a00 content::RunNamedProcessTypeMain()
#12 0x5602ace812e8 content::ContentMainRunnerImpl::Run()
#13 0x5602ace8af24 service_manager::Main()
#14 0x5602ace7ff14 content::ContentMain()
#15 0x5602b0f8f9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5602b0f8fa42 headless::HeadlessBrowserMain()
#17 0x5602ace87f9d headless::HeadlessShellMain()
#18 0x5602ab4e61ac ChromeMain
#19 0x7f2e21dd62e1 __libc_start_main
#20 0x5602ab4e602a _start
  r8: 0000000000000000  r9: 00007ffe7a7af110 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe7a7af808 r13: 0000000000000161 r14: 00007ffe7a7af810 r15: 00007ffe7a7af3a9
  di: 0000000000000002  si: 00007ffe7a7af110  bp: 00007ffe7a7af350  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2e21de8fff  sp: 00007ffe7a7af188
  ip: 00007f2e21de8fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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
[0510/020304.422751:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d249721b0c base::debug::StackTrace::StackTrace()
#1 0x55d24973a780 logging::LogMessage::~LogMessage()
#2 0x55d2487ca2b1 content::ZygoteHostImpl::Init()
#3 0x55d24843cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d248442a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d24d56c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d24945ca00 content::RunNamedProcessTypeMain()
#7 0x55d24945d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d249466f24 service_manager::Main()
#9 0x55d24945bf14 content::ContentMain()
#10 0x55d24d56b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d24d56ba42 headless::HeadlessBrowserMain()
#12 0x55d249463f9d headless::HeadlessShellMain()
#13 0x55d247ac21ac ChromeMain
#14 0x7fc3968532e1 __libc_start_main
#15 0x55d247ac202a _start

Received signal 6
#0 0x55d249721b0c base::debug::StackTrace::StackTrace()
#1 0x55d249721671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc39c7b00c0 <unknown>
#3 0x7fc396865fff gsignal
#4 0x7fc39686742a abort
#5 0x55d249720105 base::debug::BreakDebugger()
#6 0x55d24973abca logging::LogMessage::~LogMessage()
#7 0x55d2487ca2b1 content::ZygoteHostImpl::Init()
#8 0x55d24843cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d248442a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d24d56c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d24945ca00 content::RunNamedProcessTypeMain()
#12 0x55d24945d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d249466f24 service_manager::Main()
#14 0x55d24945bf14 content::ContentMain()
#15 0x55d24d56b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d24d56ba42 headless::HeadlessBrowserMain()
#17 0x55d249463f9d headless::HeadlessShellMain()
#18 0x55d247ac21ac ChromeMain
#19 0x7fc3968532e1 __libc_start_main
#20 0x55d247ac202a _start
  r8: 0000000000000000  r9: 00007fff0723f220 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0723f918 r13: 0000000000000161 r14: 00007fff0723f920 r15: 00007fff0723f4b9
  di: 0000000000000002  si: 00007fff0723f220  bp: 00007fff0723f460  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc396865fff  sp: 00007fff0723f298
  ip: 00007fc396865fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0510/020304.422751:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d249721b0c base::debug::StackTrace::StackTrace()
#1 0x55d24973a780 logging::LogMessage::~LogMessage()
#2 0x55d2487ca2b1 content::ZygoteHostImpl::Init()
#3 0x55d24843cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d248442a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d24d56c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d24945ca00 content::RunNamedProcessTypeMain()
#7 0x55d24945d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d249466f24 service_manager::Main()
#9 0x55d24945bf14 content::ContentMain()
#10 0x55d24d56b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d24d56ba42 headless::HeadlessBrowserMain()
#12 0x55d249463f9d headless::HeadlessShellMain()
#13 0x55d247ac21ac ChromeMain
#14 0x7fc3968532e1 __libc_start_main
#15 0x55d247ac202a _start

Received signal 6
#0 0x55d249721b0c base::debug::StackTrace::StackTrace()
#1 0x55d249721671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc39c7b00c0 <unknown>
#3 0x7fc396865fff gsignal
#4 0x7fc39686742a abort
#5 0x55d249720105 base::debug::BreakDebugger()
#6 0x55d24973abca logging::LogMessage::~LogMessage()
#7 0x55d2487ca2b1 content::ZygoteHostImpl::Init()
#8 0x55d24843cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d248442a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d24d56c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d24945ca00 content::RunNamedProcessTypeMain()
#12 0x55d24945d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d249466f24 service_manager::Main()
#14 0x55d24945bf14 content::ContentMain()
#15 0x55d24d56b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d24d56ba42 headless::HeadlessBrowserMain()
#17 0x55d249463f9d headless::HeadlessShellMain()
#18 0x55d247ac21ac ChromeMain
#19 0x7fc3968532e1 __libc_start_main
#20 0x55d247ac202a _start
  r8: 0000000000000000  r9: 00007fff0723f220 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0723f918 r13: 0000000000000161 r14: 00007fff0723f920 r15: 00007fff0723f4b9
  di: 0000000000000002  si: 00007fff0723f220  bp: 00007fff0723f460  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc396865fff  sp: 00007fff0723f298
  ip: 00007fc396865fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
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




