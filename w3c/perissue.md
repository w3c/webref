% Specifications that define WebIDL content (W3C perspective)
% Reffy
% May 10, 2018

148 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/): `Error: Failed to launch chrome!
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
- [Battery Status API](https://w3c.github.io/battery/): `Error: Failed to launch chrome!
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
- [Beacon](https://w3c.github.io/beacon/): `Error: Failed to launch chrome!
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
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/): `Error: Failed to launch chrome!
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
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/): `Error: Failed to launch chrome!
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
- [Gamepad](https://w3c.github.io/gamepad/): `Error: Failed to launch chrome!
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
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/): `Error: Failed to launch chrome!
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
- [HTML Media Capture](https://w3c.github.io/html-media-capture/): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/): `Error: Failed to launch chrome!
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
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/): `Error: Failed to launch chrome!
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
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html): `Error: Failed to launch chrome!
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
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/): `Error: Failed to launch chrome!
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
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/): `Error: Failed to launch chrome!
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
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/): `Error: Failed to launch chrome!
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
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/): `Error: Failed to launch chrome!
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
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/): `Error: Failed to launch chrome!
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
- [Payment Handler API](https://w3c.github.io/payment-handler/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/): `Error: Failed to launch chrome!
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
- [Payment Request API](https://w3c.github.io/payment-request/): `Error: Failed to launch chrome!
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
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/): `Error: Failed to launch chrome!
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
- [Pointer Events](https://w3c.github.io/pointerevents/): `Error: Failed to launch chrome!
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
- [Pointer Lock 2.0](https://w3c.github.io/pointerlock/): `Error: Failed to launch chrome!
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
- [Preload](https://w3c.github.io/preload/): `Error: Failed to launch chrome!
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
- [Presentation API](https://w3c.github.io/presentation-api/): `Error: Failed to launch chrome!
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
- [Push API](https://w3c.github.io/push-api/): `Error: Failed to launch chrome!
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
- [Remote Playback API](https://w3c.github.io/remote-playback/): `Error: Failed to launch chrome!
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
- [Resource Timing Level 2](https://w3c.github.io/resource-timing/): `Error: Failed to launch chrome!
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
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/): `Error: Failed to launch chrome!
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
- [Selection API](https://w3c.github.io/selection-api/): `Error: Failed to launch chrome!
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
- [Server Timing](https://w3c.github.io/server-timing/): `Error: Failed to launch chrome!
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
- [The Screen Orientation API](https://w3c.github.io/screen-orientation/): `Error: Failed to launch chrome!
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
- [Touch Events](https://w3c.github.io/touch-events/): `Error: Failed to launch chrome!
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
- [User Timing Level 2](https://w3c.github.io/user-timing/): `Error: Failed to launch chrome!
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
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/): `Error: Failed to launch chrome!
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
- [Wake Lock API](https://w3c.github.io/wake-lock/): `Error: Failed to launch chrome!
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
- [Web App Manifest](https://w3c.github.io/manifest/): `Error: Failed to launch chrome!
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
- [Web MIDI API](http://webaudio.github.io/web-midi-api/): `Error: Failed to launch chrome!
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
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/): `Error: Failed to launch chrome!
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

=> 43 specifications found


## Specifications without normative dependencies

- [Page not found · GitHub Pages](https://w3c.github.io/webdriver/webdriver-spec.html)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 2 specifications found

Basically all specifications have normative dependencies on some other specification. Reffy could not find any normative dependencies for the specifications mentioned above, which seems strange.


## Specifications without WebIDL definitions

- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/)
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/)
- [Page not found · GitHub Pages](https://w3c.github.io/webdriver/webdriver-spec.html)
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/)
- [Streams Standard](https://streams.spec.whatwg.org/)
- [UI Events KeyboardEvent code Values](https://w3c.github.io/uievents-code/)
- [UI Events KeyboardEvent key Values](https://w3c.github.io/uievents-key/)

=> 10 specifications found

Not all specifications define IDL content, presence in this list may be completely normal. Reffy's current focus is on IDL specifications, the number of specifications listed here should remain minimal.


## List of specifications with invalid WebIDL content

- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/)
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/)
- [HTML 5.3](https://w3c.github.io/html/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [The WebSocket API](https://www.w3.org/TR/websockets/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

=> 9 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs

- [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)

=> 1 specification found

A typical example is the use of `[]` instead of `FrozenArray`.


## Specifications that use WebIDL but do not reference the WebIDL spec

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)

=> 8 specifications found



## List of WebIDL names not defined in the specifications crawled

- `AbortSignal` used in [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Fetch Standard](https://fetch.spec.whatwg.org/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/)
- `AnimationEffectReadOnly` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- `AudioTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `AudioTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `ConstrainBoolean` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `ConstrainDOMString` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `ConstrainDouble` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `DOMHighResTimeStamp` used in [Generic Sensor API](https://w3c.github.io/sensors/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [W3C DOM 4.1](https://w3c.github.io/dom/), [Web Animations](https://w3c.github.io/web-animations/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `DOMStringList` used in [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/)
- `DataTransfer` used in [Clipboard API and events](https://w3c.github.io/clipboard-apis/)
- `DataTransferItem` used in [File and Directory Entries API](https://wicg.github.io/entries-api/)
- `EventHandler` used in [Background Fetch](https://wicg.github.io/background-fetch/), [Compatibility Standard](https://compat.spec.whatwg.org/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [File API](https://w3c.github.io/FileAPI/), [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/), [Generic Sensor API](https://w3c.github.io/sensors/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Source Extensions™](https://w3c.github.io/media-source/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Permissions](https://w3c.github.io/permissions/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [Server-Sent Events](http://www.w3.org/TR/2015/REC-eventsource-20150203/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Web Animations](https://w3c.github.io/web-animations/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Notifications](https://www.w3.org/TR/notifications/), [Web Workers](https://html.spec.whatwg.org/multipage/workers.html), [WebUSB API](https://wicg.github.io/webusb/), [WebXR Device API](https://immersive-web.github.io/webxr/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `GlobalEventHandlers` used in [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Transitions](https://drafts.csswg.org/css-transitions/)
- `GroupEffectReadOnly` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- `HTMLBodyElement` used in [Compatibility Standard](https://compat.spec.whatwg.org/)
- `HTMLCanvasElement` used in [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `HTMLElement` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/)
- `HTMLFormElement` used in [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `HTMLIFrameElement` used in [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/), [Feature Policy](https://wicg.github.io/feature-policy/)
- `HTMLImageElement` used in [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `HTMLInputElement` used in [File and Directory Entries API](https://wicg.github.io/entries-api/)
- `HTMLLinkElement` used in [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- `HTMLMediaElement` used in [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `HTMLScriptElement` used in [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- `HTMLSlotElement` used in [W3C DOM 4.1](https://w3c.github.io/dom/)
- `HTMLVideoElement` used in [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/), [Picture-in-Picture](https://wicg.github.io/picture-in-picture/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `ImageBitmap` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
- `ImageBitmapSource` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/)
- `LayoutWorklet` used in [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- `Map` used in [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- `MediaStream` used in [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `MediaStreamTrack` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `MediaTrackCapabilities` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackConstraintSet` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackSettings` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackSupportedConstraints` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `Navigator` used in [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Geolocation API Specification 2nd Edition](https://www.w3.org/TR/geolocation-API/), [Keyboard Lock](https://w3c.github.io/keyboard-lock/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Session Standard](https://wicg.github.io/mediasession/), [Permissions](https://w3c.github.io/permissions/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/), [Web Budget API](https://wicg.github.io/budget-api/), [WebUSB API](https://wicg.github.io/webusb/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `OnErrorEventHandler` used in [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `PerformanceEntry` used in [Long Tasks API 1](https://w3c.github.io/longtasks/), [Paint Timing 1](https://w3c.github.io/paint-timing/)
- `PermissionName` used in [Permissions](https://w3c.github.io/permissions/)
- `ReadableStream` used in [Fetch Standard](https://fetch.spec.whatwg.org/)
- `SVGAnimatedEnumeration` used in [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedInteger` used in [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedLength` used in [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedNumber` used in [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedNumberList` used in [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedPreserveAspectRatio` used in [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedString` used in [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `SVGAnimatedTransformList` used in [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- `SVGElement` used in [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/), [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/)
- `TextTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `TextTrackCue` used in [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/)
- `TextTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `TimeRanges` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `Transferable` used in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- `VideoTrack` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `VideoTrackList` used in [Media Source Extensions™](https://w3c.github.io/media-source/)
- `VisibilityState` used in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- `Window` used in [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/), [Accelerometer](https://w3c.github.io/accelerometer/), [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Background Fetch](https://wicg.github.io/background-fetch/), [Clipboard API and events](https://w3c.github.io/clipboard-apis/), [Compatibility Standard](https://compat.spec.whatwg.org/), [Console Standard](https://console.spec.whatwg.org/), [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/), [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/), [CSS Animations Level 1](https://drafts.csswg.org/css-animations/), [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/), [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/), [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/), [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo-4/), [CSS Transitions](https://drafts.csswg.org/css-transitions/), [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/), [CSSOM View Module](https://drafts.csswg.org/cssom-view/), [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html), [Encoding Standard](https://encoding.spec.whatwg.org/), [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/), [Fetch Standard](https://fetch.spec.whatwg.org/), [File API](https://w3c.github.io/FileAPI/), [Generic Sensor API](https://w3c.github.io/sensors/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [Geometry Interfaces Module Level 1](https://drafts.fxtf.org/geometry/), [Gyroscope](https://w3c.github.io/gyroscope/), [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [Keyboard Lock](https://w3c.github.io/keyboard-lock/), [Magnetometer](https://w3c.github.io/magnetometer/), [Media Capabilities](https://wicg.github.io/media-capabilities/), [Media Session Standard](https://wicg.github.io/mediasession/), [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Orientation Sensor](https://w3c.github.io/orientation-sensor/), [Permissions](https://w3c.github.io/permissions/), [Proximity Sensor](https://w3c.github.io/proximity/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/), [Static Range](https://w3c.github.io/staticrange/), [Storage Standard](https://storage.spec.whatwg.org/), [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/), [URL Standard](https://url.spec.whatwg.org/), [W3C DOM 4.1](https://w3c.github.io/dom/), [Web Animations](https://w3c.github.io/web-animations/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/), [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/), [Web Budget API](https://wicg.github.io/budget-api/), [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html), [Web IDL](https://heycam.github.io/webidl/), [Web Workers](https://html.spec.whatwg.org/multipage/workers.html), [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/), [WebUSB API](https://wicg.github.io/webusb/), [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/), [WebXR Device API](https://immersive-web.github.io/webxr/), [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `WindowOrWorkerGlobalScope` used in [Fetch Standard](https://fetch.spec.whatwg.org/), [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/), [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/), [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- `WindowProxy` used in [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- `sequence` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)

=> 62 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `ProgressEvent` defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `ProgressEventInit` defined in [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) and [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/)
- `VoidFunction` defined in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) and [Web IDL](https://heycam.github.io/webidl/)
- `Worker` defined in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) and [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Web Audio API](https://webaudio.github.io/web-audio-api/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

=> 5 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) uses `Point2D` but does not reference [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/) uses `Document` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/) uses:
    * `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
    * `PaintWorklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/) uses:
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Encoding Standard](https://encoding.spec.whatwg.org/) uses `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) uses:
    * `Element` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [Media Source Extensions™](https://w3c.github.io/media-source/) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [Web Cryptography API](https://w3c.github.io/webcrypto/Overview.html) uses `Worker` but does not reference [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) or [Web Workers](https://html.spec.whatwg.org/multipage/workers.html)
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html) uses:
    * `EventTarget` but does not reference [W3C DOM 4.1](https://w3c.github.io/dom/)
    * `RequestCredentials` but does not reference [Fetch Standard](https://fetch.spec.whatwg.org/)
    * `MessagePort` but does not reference [HTML5 Web Messaging](http://www.w3.org/TR/2015/REC-webmessaging-20150519/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/) uses `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) uses:
    * `WebGLRenderingContext` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGL2RenderingContext` but does not reference [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
    * `WebGLFramebuffer` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLContextAttributes` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLRenderingContextBase` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)

=> 24 missing references for IDL definitions found in 12 specifications


## Missing references based on document links

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) links to [`https://w3c.github.io/mediacapture-image/`](https://w3c.github.io/mediacapture-image/) but does not list it in its references
- [Accelerometer](https://w3c.github.io/accelerometer/) links to:
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
    * [`https://w3c.github.io/sensors/usecases.html`](https://w3c.github.io/sensors/usecases.html) but does not list it in its references
- [Background Fetch](https://wicg.github.io/background-fetch/) links to [`https://storage.spec.whatwg.org/`](https://storage.spec.whatwg.org/) but does not list it in its references
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to [`https://w3c.github.io/editing/contentEditable.html`](https://w3c.github.io/editing/contentEditable.html) but does not list it in its references
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/reporting/`](https://w3c.github.io/reporting/) but does not list it in its references
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to [`https://w3c.github.io/webappsec/usecases/credentialmanagement/`](https://w3c.github.io/webappsec/usecases/credentialmanagement/) but does not list it in its references
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) links to:
    * [`https://w3c.github.io/web-animations/level-2/`](https://w3c.github.io/web-animations/level-2/) but does not list it in its references
    * [`https://w3c.github.io/html/infrastructure.html`](https://w3c.github.io/html/infrastructure.html) but does not list it in its references
- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/) links to:
    * [`https://www.w3.org/TR/2008/REC-CSS1-20080411`](https://www.w3.org/TR/2008/REC-CSS1-20080411) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/) but does not list it in its references
- [CSS Device Adaptation Module Level 1](https://drafts.csswg.org/css-device-adapt/) links to:
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/`](https://www.w3.org/TR/2011/WD-css-device-adapt-20110915/) but does not list it in its references
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
- [CSS Layout API Level 1](https://drafts.css-houdini.org/css-layout-api-1/) links to:
    * [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-align/`](https://www.w3.org/TR/css3-align/) but does not list it in its references
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transitions/`](https://www.w3.org/TR/css3-transitions/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css-masking-20130620/`](https://www.w3.org/TR/2013/WD-css-masking-20130620/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-css-masking-20121115/`](https://www.w3.org/TR/2012/WD-css-masking-20121115/) but does not list it in its references
- [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) links to [`https://www.w3.org/TR/css-properties-values-api-1/`](https://www.w3.org/TR/css-properties-values-api-1/) but does not list it in its references
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/) links to [`https://www.w3.org/TR/selectors-api/`](https://www.w3.org/TR/selectors-api/) but does not list it in its references
- [CSS Transitions](https://drafts.csswg.org/css-transitions/) links to:
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20131119/`](https://www.w3.org/TR/2013/WD-css3-transitions-20131119/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog`](https://www.w3.org/TR/2013/WD-css3-transitions-20130212/ChangeLog) but does not list it in its references
- [CSS Writing Modes Level 3](https://drafts.csswg.org/css-writing-modes-3/) links to:
    * [`https://www.w3.org/TR/css-logical-1/`](https://www.w3.org/TR/css-logical-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-flexbox/`](https://www.w3.org/TR/css3-flexbox/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [Fetch Standard](https://fetch.spec.whatwg.org/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but does not list it in its references
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/css-transitions-1/`](https://www.w3.org/TR/css-transitions-1/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/WD-filter-effects-20121025/`](https://www.w3.org/TR/2012/WD-filter-effects-20121025/) but does not list it in its references
- [Fullscreen API Standard](https://fullscreen.spec.whatwg.org/) links to [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/) but does not list it in its references
- [Gyroscope](https://w3c.github.io/gyroscope/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [HTML 5.3](https://w3c.github.io/html/) links to:
    * [`https://www.w3.org/TR/css3-syntax/`](https://www.w3.org/TR/css3-syntax/) but does not list it in its references
    * [`https://www.w3.org/TR/selectors4/`](https://www.w3.org/TR/selectors4/) but does not list it in its references
    * [`https://w3c.github.io/using-aria/`](https://w3c.github.io/using-aria/) but does not list it in its references
    * [`https://w3c.github.io/aria-practices/`](https://w3c.github.io/aria-practices/) but does not list it in its references
    * [`https://www.w3.org/TR/css-device-adapt-1/`](https://www.w3.org/TR/css-device-adapt-1/) but does not list it in its references
    * [`https://www.w3.org/TR/dpub-aria-1.0/`](https://www.w3.org/TR/dpub-aria-1.0/) but does not list it in its references
    * [`https://www.w3.org/TR/accname-aam/`](https://www.w3.org/TR/accname-aam/) but does not list it in its references
    * [`https://www.w3.org/TR/turingtest/`](https://www.w3.org/TR/turingtest/) but does not list it in its references
    * [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/) but does not list it in its references
    * [`https://www.w3.org/TR/xlink11/`](https://www.w3.org/TR/xlink11/) but does not list it in its references
    * [`https://www.w3.org/TR/2017/WD-html53-20170206/`](https://www.w3.org/TR/2017/WD-html53-20170206/) but does not list it in its references
    * [`https://www.w3.org/TR/2017/WD-html53-20171214/`](https://www.w3.org/TR/2017/WD-html53-20171214/) but does not list it in its references
    * [`https://w3c.github.io/i18n-drafts/getting-started/wg.en`](https://w3c.github.io/i18n-drafts/getting-started/wg.en) but does not list it in its references
- [Intersection Observer](https://w3c.github.io/IntersectionObserver/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://www.w3.org/TR/css-masking-1/`](https://www.w3.org/TR/css-masking-1/) but does not list it in its references
- [Long Tasks API 1](https://w3c.github.io/longtasks/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Magnetometer](https://w3c.github.io/magnetometer/) links to [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Media Capabilities](https://wicg.github.io/media-capabilities/) links to [`https://www.w3.org/TR/webrtc/`](https://www.w3.org/TR/webrtc/) but does not list it in its references
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/) links to:
    * [`https://www.w3.org/TR/mediaont-10/`](https://www.w3.org/TR/mediaont-10/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/REC-mediaont-10-20120209/`](https://www.w3.org/TR/2012/REC-mediaont-10-20120209/) but does not list it in its references
    * [`https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/`](https://www.w3.org/TR/2011/NOTE-dap-policy-reqs-20110317/) but does not list it in its references
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://www.w3.org/TR/2016/CR-orientation-event-20160818/`](https://www.w3.org/TR/2016/CR-orientation-event-20160818/) but does not list it in its references
    * [`https://w3c.github.io/motion-sensors/`](https://w3c.github.io/motion-sensors/) but does not list it in its references
- [Paint Timing 1](https://w3c.github.io/paint-timing/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/manifest/`](https://w3c.github.io/manifest/) but does not list it in its references
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but does not list it in its references
- [Progress Events](http://www.w3.org/TR/2014/REC-progress-events-20140211/) links to:
    * [`https://xhr.spec.whatwg.org/`](https://xhr.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/) links to:
    * [`https://www.w3.org/TR/css3-positioning/`](https://www.w3.org/TR/css3-positioning/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-multicol/`](https://www.w3.org/TR/css3-multicol/) but does not list it in its references
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/svg-integration/`](https://www.w3.org/TR/svg-integration/) but does not list it in its references
    * [`https://www.w3.org/TR/2012/CR-WebIDL-20120419/`](https://www.w3.org/TR/2012/CR-WebIDL-20120419/) but does not list it in its references
    * [`https://www.w3.org/TR/filter-effects/`](https://www.w3.org/TR/filter-effects/) but does not list it in its references
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/2014/WD-geometry-1-20140522/`](https://www.w3.org/TR/2014/WD-geometry-1-20140522/) but does not list it in its references
    * [`https://www.w3.org/TR/geometry-1/`](https://www.w3.org/TR/geometry-1/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria-1.1/`](https://www.w3.org/TR/wai-aria-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-background/`](https://www.w3.org/TR/css3-background/) but does not list it in its references
    * [`https://www.w3.org/TR/css-cascade-3/`](https://www.w3.org/TR/css-cascade-3/) but does not list it in its references
    * [`https://www.w3.org/TR/wai-aria/states_and_properties`](https://www.w3.org/TR/wai-aria/states_and_properties) but does not list it in its references
    * [`https://w3c.github.io/html-aam/`](https://w3c.github.io/html-aam/) but does not list it in its references
    * [`https://w3c.github.io/svg-aam/`](https://w3c.github.io/svg-aam/) but does not list it in its references
    * [`https://w3c.github.io/selection-api/`](https://w3c.github.io/selection-api/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but does not list it in its references
    * [`https://www.w3.org/TR/2013/REC-css-style-attr-20131107/`](https://www.w3.org/TR/2013/REC-css-style-attr-20131107/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom-1/`](https://www.w3.org/TR/cssom-1/) but does not list it in its references
    * [`https://www.w3.org/TR/css-position-3/`](https://www.w3.org/TR/css-position-3/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-exclusions/`](https://www.w3.org/TR/css3-exclusions/) but does not list it in its references
    * [`https://www.w3.org/TR/css-shapes/`](https://www.w3.org/TR/css-shapes/) but does not list it in its references
    * [`https://www.w3.org/TR/resource-hints/`](https://www.w3.org/TR/resource-hints/) but does not list it in its references
    * [`https://www.w3.org/TR/2003/REC-MathML2-20031021/`](https://www.w3.org/TR/2003/REC-MathML2-20031021/) but does not list it in its references
    * [`https://www.w3.org/TR/css-color/`](https://www.w3.org/TR/css-color/) but does not list it in its references
    * [`https://www.w3.org/TR/html51/full`](https://www.w3.org/TR/html51/full) but does not list it in its references
    * [`https://www.w3.org/TR/orientation-event/`](https://www.w3.org/TR/orientation-event/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-transforms/`](https://www.w3.org/TR/css3-transforms/) but does not list it in its references
    * [`https://www.w3.org/TR/cssom/`](https://www.w3.org/TR/cssom/) but does not list it in its references
    * [`https://www.w3.org/TR/core-aam-1.1/`](https://www.w3.org/TR/core-aam-1.1/) but does not list it in its references
    * [`https://www.w3.org/TR/accname-aam-1.1/`](https://www.w3.org/TR/accname-aam-1.1/) but does not list it in its references
    * [`https://w3c.github.io/aria/aria/graphics.html`](https://w3c.github.io/aria/aria/graphics.html) but does not list it in its references
    * [`https://w3c.github.io/webcomponents/spec/shadow/`](https://w3c.github.io/webcomponents/spec/shadow/) but does not list it in its references
    * [`https://www.w3.org/TR/smil/`](https://www.w3.org/TR/smil/) but does not list it in its references
    * [`https://w3c.github.io/aria/svg-aam/svg-aam.html`](https://w3c.github.io/aria/svg-aam/svg-aam.html) but does not list it in its references
    * [`https://www.w3.org/TR/xsl/`](https://www.w3.org/TR/xsl/) but does not list it in its references
    * [`https://www.w3.org/TR/security-privacy-questionnaire/`](https://www.w3.org/TR/security-privacy-questionnaire/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-markers-20150407/`](https://www.w3.org/TR/2015/WD-svg-markers-20150407/) but does not list it in its references
    * [`https://www.w3.org/TR/2015/WD-svg-strokes-20150407/`](https://www.w3.org/TR/2015/WD-svg-strokes-20150407/) but does not list it in its references
- [Selectors Level 3](https://www.w3.org/TR/css3-selectors/) links to [`https://www.w3.org/TR/css3-namespace/`](https://www.w3.org/TR/css3-namespace/) but does not list it in its references
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to [`https://w3c.github.io/push-api/`](https://w3c.github.io/push-api/) but does not list it in its references
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/) links to:
    * [`https://www.w3.org/TR/svg2/`](https://www.w3.org/TR/svg2/) but does not list it in its references
    * [`https://www.w3.org/TR/2004/REC-xml-20040204/`](https://www.w3.org/TR/2004/REC-xml-20040204/) but does not list it in its references
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to:
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/requestidlecallback/`](https://w3c.github.io/requestidlecallback/) but does not list it in its references
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to [`https://www.w3.org/TR/touch-events/`](https://www.w3.org/TR/touch-events/) but does not list it in its references
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to:
    * [`https://w3c.github.io/mediacapture-fromelement/`](https://w3c.github.io/mediacapture-fromelement/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but does not list it in its references
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to [`https://w3c.github.io/fingerprinting-guidance/`](https://w3c.github.io/fingerprinting-guidance/) but does not list it in its references
- [Web Workers](https://html.spec.whatwg.org/multipage/workers.html) links to:
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but does not list it in its references
    * [`https://infra.spec.whatwg.org/`](https://infra.spec.whatwg.org/) but does not list it in its references
    * [`https://url.spec.whatwg.org/`](https://url.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
    * [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but does not list it in its references
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but does not list it in its references
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/) links to:
    * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/) links to [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 142 missing references for links found in 49 specifications

Any link to an external document from within a specification should trigger the creation of a corresponding entry in the references section.

Note Reffy only reports on links to "well-known" specs and ignores links to non-usual specs (e.g. PDF documents, etc.) for now.


## Reference URL is inconsistent with URL used in document links

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) links to [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [Accelerometer](https://w3c.github.io/accelerometer/) links to [`https://www.w3.org/TR/screen-orientation/`](https://www.w3.org/TR/screen-orientation/) but related reference "SCREEN-ORIENTATION" uses URL [`https://w3c.github.io/screen-orientation/`](https://w3c.github.io/screen-orientation/)
- [Background Fetch](https://wicg.github.io/background-fetch/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Clipboard API and events](https://w3c.github.io/clipboard-apis/) links to:
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/) links to:
    * [`https://www.w3.org/TR/2003/REC-SVG11-20030114/`](https://www.w3.org/TR/2003/REC-SVG11-20030114/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
    * [`https://www.w3.org/TR/2dcontext/`](https://www.w3.org/TR/2dcontext/) but related reference "2DCONTEXT2" uses URL [`https://www.w3.org/TR/2dcontext2/`](https://www.w3.org/TR/2dcontext2/)
- [Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/) links to [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS-1" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
- [Content Security Policy: Embedded Enforcement](https://w3c.github.io/webappsec-csp/embedded/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Credential Management Level 1](https://w3c.github.io/webappsec-credential-management/) links to:
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://w3c.github.io/webauthn/`](https://w3c.github.io/webauthn/) but related reference "WEBAUTHN" uses URL [`https://www.w3.org/TR/webauthn/`](https://www.w3.org/TR/webauthn/)
- [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/) links to [`https://www.w3.org/TR/css3-mediaqueries/`](https://www.w3.org/TR/css3-mediaqueries/) but related reference "MEDIAQ" uses URL [`http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/`](http://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/)
- [CSS Font Loading Module Level 3](https://drafts.csswg.org/css-font-loading/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/) links to [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [CSS Properties and Values API Level 1](https://drafts.css-houdini.org/css-properties-values-api-1/) links to [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS3-VALUES" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Syntax Module Level 3](https://drafts.csswg.org/css-syntax/) links to:
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but related reference "SELECT" uses URL [`https://www.w3.org/TR/selectors-3/`](https://www.w3.org/TR/selectors-3/)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "CSS-VALUES-3" uses URL [`https://www.w3.org/TR/css-values-3/`](https://www.w3.org/TR/css-values-3/)
- [CSS Transitions](https://drafts.csswg.org/css-transitions/) links to [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but related reference "SELECTORS-3" uses URL [`https://www.w3.org/TR/selectors-3/`](https://www.w3.org/TR/selectors-3/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)
- [Encrypted Media Extensions](https://w3c.github.io/encrypted-media/) links to:
    * [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
- [Feature Policy](https://wicg.github.io/feature-policy/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/) links to [`https://www.w3.org/TR/2011/REC-SVG11-20110816/`](https://www.w3.org/TR/2011/REC-SVG11-20110816/) but related reference "SVG11" uses URL [`https://www.w3.org/TR/SVG11/`](https://www.w3.org/TR/SVG11/)
- [Generic Sensor API](https://w3c.github.io/sensors/) links to:
    * [`https://www.w3.org/TR/page-visibility-2/`](https://www.w3.org/TR/page-visibility-2/) but related reference "PAGE-VISIBILITY" uses URL [`https://www.w3.org/TR/page-visibility/`](https://www.w3.org/TR/page-visibility/)
    * [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/) but related reference "PERMISSIONS" uses URL [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/)
    * [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/) but related reference "HR-TIME-2" uses URL [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/)
- [HTML 5.3](https://w3c.github.io/html/) links to:
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FILEAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/IndexedDB/`](https://w3c.github.io/IndexedDB/) but related reference "INDEXEDDB" uses URL [`https://www.w3.org/TR/IndexedDB/`](https://www.w3.org/TR/IndexedDB/)
    * [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
    * [`https://www.w3.org/TR/1999/REC-xpath-19991116`](https://www.w3.org/TR/1999/REC-xpath-19991116) but related reference "XPATH" uses URL [`https://www.w3.org/TR/xpath/`](https://www.w3.org/TR/xpath/)
    * [`https://www.w3.org/TR/webmessaging/`](https://www.w3.org/TR/webmessaging/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but related reference "REFERRERPOLICY" uses URL [`https://www.w3.org/TR/referrer-policy`](https://www.w3.org/TR/referrer-policy)
    * [`https://w3c.github.io/html/`](https://w3c.github.io/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://w3c.github.io/ServiceWorker/`](https://w3c.github.io/ServiceWorker/) but related reference "SERVICE-WORKERS" uses URL [`https://www.w3.org/TR/service-workers-1/`](https://www.w3.org/TR/service-workers-1/)
    * [`https://www.w3.org/TR/html52/`](https://www.w3.org/TR/html52/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [HTML Canvas 2D Context](https://www.w3.org/TR/2dcontext/) links to:
    * [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`http://www.w3.org/TR/html5/`](http://www.w3.org/TR/html5/)
- [Indexed Database API 3.0](https://w3c.github.io/IndexedDB/) links to [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
- [Long Tasks API 1](https://w3c.github.io/longtasks/) links to:
    * [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Magnetometer](https://w3c.github.io/magnetometer/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
- [Media Capabilities](https://wicg.github.io/media-capabilities/) links to [`https://w3c.github.io/media-source/`](https://w3c.github.io/media-source/) but related reference "MEDIA-SOURCE" uses URL [`https://www.w3.org/TR/media-source/`](https://www.w3.org/TR/media-source/)
- [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
- [MediaStream Recording](https://w3c.github.io/mediacapture-record/) links to:
    * [`https://w3c.github.io/FileAPI/`](https://w3c.github.io/FileAPI/) but related reference "FileAPI" uses URL [`https://www.w3.org/TR/FileAPI/`](https://www.w3.org/TR/FileAPI/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/) links to [`https://www.w3.org/TR/2012/REC-media-frags-20120925/`](https://www.w3.org/TR/2012/REC-media-frags-20120925/) but related reference "MEDIA-FRAGMENTS" uses URL [`http://www.w3.org/TR/media-frags/`](http://www.w3.org/TR/media-frags/)
- [Mixed Content](https://w3c.github.io/webappsec-mixed-content/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "XML" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Orientation Sensor](https://w3c.github.io/orientation-sensor/) links to:
    * [`https://w3c.github.io/sensors/`](https://w3c.github.io/sensors/) but related reference "GENERIC-SENSOR" uses URL [`https://www.w3.org/TR/generic-sensor/`](https://www.w3.org/TR/generic-sensor/)
    * [`https://w3c.github.io/accelerometer/`](https://w3c.github.io/accelerometer/) but related reference "ACCELEROMETER" uses URL [`https://www.w3.org/TR/accelerometer/`](https://www.w3.org/TR/accelerometer/)
    * [`https://w3c.github.io/gyroscope/`](https://w3c.github.io/gyroscope/) but related reference "GYROSCOPE" uses URL [`https://www.w3.org/TR/gyroscope/`](https://www.w3.org/TR/gyroscope/)
    * [`https://w3c.github.io/magnetometer/`](https://w3c.github.io/magnetometer/) but related reference "MAGNETOMETER" uses URL [`https://www.w3.org/TR/magnetometer/`](https://www.w3.org/TR/magnetometer/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/) links to [`https://w3c.github.io/performance-timeline/`](https://w3c.github.io/performance-timeline/) but related reference "PERFORMANCE-TIMELINE-2" uses URL [`https://www.w3.org/TR/performance-timeline-2/`](https://www.w3.org/TR/performance-timeline-2/)
- [Permissions](https://w3c.github.io/permissions/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "GETUSERMEDIA" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://w3c.github.io/webdriver/webdriver-spec.html`](https://w3c.github.io/webdriver/webdriver-spec.html) but related reference "WebDriver" uses URL [`https://www.w3.org/TR/webdriver/`](https://www.w3.org/TR/webdriver/)
- [Picture-in-Picture](https://wicg.github.io/picture-in-picture/) links to [`https://w3c.github.io/remote-playback/`](https://w3c.github.io/remote-playback/) but related reference "Remote-Playback" uses URL [`https://www.w3.org/TR/remote-playback/`](https://www.w3.org/TR/remote-playback/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/) links to:
    * [`https://www.w3.org/TR/2010/REC-wsc-ui-20100812/`](https://www.w3.org/TR/2010/REC-wsc-ui-20100812/) but related reference "WSC-UI" uses URL [`https://www.w3.org/TR/wsc-ui/`](https://www.w3.org/TR/wsc-ui/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/) links to:
    * [`https://www.w3.org/TR/2008/REC-xml-20081126/`](https://www.w3.org/TR/2008/REC-xml-20081126/) but related reference "xml" uses URL [`https://www.w3.org/TR/xml`](https://www.w3.org/TR/xml)
    * [`https://www.w3.org/TR/2006/REC-xml-names-20060816/`](https://www.w3.org/TR/2006/REC-xml-names-20060816/) but related reference "xml-names" uses URL [`https://www.w3.org/TR/xml-names`](https://www.w3.org/TR/xml-names)
    * [`https://www.w3.org/TR/css3-values/`](https://www.w3.org/TR/css3-values/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2011/REC-CSS2-20110607/`](https://www.w3.org/TR/2011/REC-CSS2-20110607/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/compositing/`](https://www.w3.org/TR/compositing/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113/`](https://www.w3.org/TR/2015/CR-compositing-1-20150113/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2015/CR-compositing-1-20150113`](https://www.w3.org/TR/2015/CR-compositing-1-20150113) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/2012/WD-css3-values-20120308/`](https://www.w3.org/TR/2012/WD-css3-values-20120308/) but related reference "css-values" uses URL [`https://www.w3.org/TR/css-values/`](https://www.w3.org/TR/css-values/)
    * [`https://www.w3.org/TR/2014/CR-html5-20140204/`](https://www.w3.org/TR/2014/CR-html5-20140204/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://www.w3.org/TR/2014/WD-dom-20140204/`](https://www.w3.org/TR/2014/WD-dom-20140204/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://www.w3.org/TR/2012/WD-compositing-20120816/`](https://www.w3.org/TR/2012/WD-compositing-20120816/) but related reference "compositing-1" uses URL [`https://www.w3.org/TR/compositing-1/`](https://www.w3.org/TR/compositing-1/)
    * [`https://www.w3.org/TR/css3-writing-modes/`](https://www.w3.org/TR/css3-writing-modes/) but related reference "css-writing-modes-3" uses URL [`https://www.w3.org/TR/css-writing-modes-3/`](https://www.w3.org/TR/css-writing-modes-3/)
    * [`https://www.w3.org/TR/2011/WD-css3-fonts-20111004/`](https://www.w3.org/TR/2011/WD-css3-fonts-20111004/) but related reference "css-fonts-3" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/2015/CR-css-ui-3-20150707/`](https://www.w3.org/TR/2015/CR-css-ui-3-20150707/) but related reference "css-ui-3" uses URL [`https://www.w3.org/TR/css-ui-3/`](https://www.w3.org/TR/css-ui-3/)
    * [`https://www.w3.org/TR/2001/REC-smil-animation-20010904/`](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) but related reference "smil-animation" uses URL [`https://www.w3.org/TR/smil-animation/`](https://www.w3.org/TR/smil-animation/)
    * [`https://www.w3.org/TR/2013/WD-shadow-dom-20130514/`](https://www.w3.org/TR/2013/WD-shadow-dom-20130514/) but related reference "shadow-dom" uses URL [`https://www.w3.org/TR/shadow-dom/`](https://www.w3.org/TR/shadow-dom/)
    * [`https://www.w3.org/TR/2001/REC-xlink-20010627/`](https://www.w3.org/TR/2001/REC-xlink-20010627/) but related reference "xlink" uses URL [`https://www.w3.org/TR/xlink/`](https://www.w3.org/TR/xlink/)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/) but related reference "DOM-Level-2-Views" uses URL [`https://www.w3.org/TR/DOM-Level-2-Views`](https://www.w3.org/TR/DOM-Level-2-Views)
    * [`https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/`](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/) but related reference "DOM-Level-2-Style" uses URL [`https://www.w3.org/TR/DOM-Level-2-Style/`](https://www.w3.org/TR/DOM-Level-2-Style/)
    * [`https://www.w3.org/TR/2012/WD-css3-animations-20120403/`](https://www.w3.org/TR/2012/WD-css3-animations-20120403/) but related reference "css3-animations" uses URL [`https://www.w3.org/TR/css3-animations/`](https://www.w3.org/TR/css3-animations/)
    * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but related reference "dom" uses URL [`https://www.w3.org/TR/dom/`](https://www.w3.org/TR/dom/)
    * [`https://w3c.github.io/html/`](https://w3c.github.io/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "web-animations-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
    * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/) but related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) links to [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Selectors API Level 1](https://www.w3.org/TR/selectors-api/) links to [`https://www.w3.org/TR/css3-selectors/`](https://www.w3.org/TR/css3-selectors/) but related reference "SELECT" uses URL [`http://www.w3.org/TR/2011/REC-css3-selectors-20110929/`](http://www.w3.org/TR/2011/REC-css3-selectors-20110929/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
    * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/) but related reference "CSS-SYNTAX-3" uses URL [`http://dev.w3.org/csswg/css-syntax/`](http://dev.w3.org/csswg/css-syntax/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
- [W3C DOM 4.1](https://w3c.github.io/dom/) links to:
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
    * [`https://www.w3.org/TR/encoding/`](https://www.w3.org/TR/encoding/) but related reference "ENCODING" uses URL [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170420/`](https://www.w3.org/TR/2017/WD-dom41-20170420/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2017/WD-dom41-20170321/`](https://www.w3.org/TR/2017/WD-dom41-20170321/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
    * [`https://www.w3.org/TR/2015/REC-dom-20151119/`](https://www.w3.org/TR/2015/REC-dom-20151119/) but related reference "DOM" uses URL [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/)
- [Web Animations](https://w3c.github.io/web-animations/) links to [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to:
    * [`https://w3c.github.io/mediacapture-main/`](https://w3c.github.io/mediacapture-main/) but related reference "MEDIACAPTURE-STREAMS" uses URL [`https://www.w3.org/TR/mediacapture-streams/`](https://www.w3.org/TR/mediacapture-streams/)
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME-2" uses URL [`https://www.w3.org/TR/hr-time-2/`](https://www.w3.org/TR/hr-time-2/)
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/) links to:
    * [`https://w3c.github.io/webappsec-credential-management/`](https://w3c.github.io/webappsec-credential-management/) but related reference "CREDENTIAL-MANAGEMENT-1" uses URL [`https://www.w3.org/TR/credential-management-1/`](https://www.w3.org/TR/credential-management-1/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIXED-CONTENT" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to [`https://w3c.github.io/webappsec/specs/powerfulfeatures/`](https://w3c.github.io/webappsec/specs/powerfulfeatures/) but related reference "SECURE-CONTEXTS" uses URL [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to:
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [Web IDL](https://heycam.github.io/webidl/) links to [`https://www.w3.org/TR/geolocation-API/`](https://www.w3.org/TR/geolocation-API/) but related reference "GEOLOCATION-API" uses URL [`http://dev.w3.org/geo/api/spec-source.html`](http://dev.w3.org/geo/api/spec-source.html)
- [Web Notifications](https://www.w3.org/TR/notifications/) links to:
    * [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but related reference "WEBIDL" uses URL [`https://www.w3.org/TR/2015/PR-notifications-20150910/`](https://www.w3.org/TR/2015/PR-notifications-20150910/)
    * [`https://www.w3.org/TR/html/`](https://www.w3.org/TR/html/) but related reference "HTML5" uses URL [`https://www.w3.org/TR/2014/REC-html5-20141028/`](https://www.w3.org/TR/2014/REC-html5-20141028/)
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)
- [WebUSB API](https://wicg.github.io/webusb/) links to [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to:
    * [`https://w3c.github.io/orientation-sensor/`](https://w3c.github.io/orientation-sensor/) but related reference "ORIENTATION-SENSOR" uses URL [`https://www.w3.org/TR/orientation-sensor/`](https://www.w3.org/TR/orientation-sensor/)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

=> 134 inconsistent references for links found in 58 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
