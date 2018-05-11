% Specifications that define WebIDL content (WHATWG perspective)
% Reffy
% May 11, 2018

140 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/): `Error: Failed to launch chrome!
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
- [Battery Status API](https://w3c.github.io/battery/): `Error: Failed to launch chrome!
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
- [Beacon](https://w3c.github.io/beacon/): `Error: Failed to launch chrome!
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
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/): `Error: Failed to launch chrome!
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
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/): `Error: Failed to launch chrome!
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
- [Gamepad](https://w3c.github.io/gamepad/): `Error: Failed to launch chrome!
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
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/): `Error: Failed to launch chrome!
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
- [HTML Media Capture](https://w3c.github.io/html-media-capture/): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/): `Error: Failed to launch chrome!
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
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html): `Error: Failed to launch chrome!
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
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/): `Error: Failed to launch chrome!
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
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/): `Error: Failed to launch chrome!
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
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/): `Error: Failed to launch chrome!
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
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/): `Error: Failed to launch chrome!
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
- [Payment Handler API](https://w3c.github.io/payment-handler/): `Error: Failed to launch chrome!
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
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/): `Error: Failed to launch chrome!
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
- [Payment Request API](https://w3c.github.io/payment-request/): `Error: Failed to launch chrome!
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
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/): `Error: Failed to launch chrome!
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
- [Pointer Events](https://w3c.github.io/pointerevents/): `Error: Failed to launch chrome!
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
- [Pointer Lock 2.0](https://w3c.github.io/pointerlock/): `Error: Failed to launch chrome!
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
- [Preload](https://w3c.github.io/preload/): `Error: Failed to launch chrome!
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
- [Presentation API](https://w3c.github.io/presentation-api/): `Error: Failed to launch chrome!
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
- [Push API](https://w3c.github.io/push-api/): `Error: Failed to launch chrome!
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
- [Remote Playback API](https://w3c.github.io/remote-playback/): `Error: Failed to launch chrome!
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
- [Resource Timing Level 2](https://w3c.github.io/resource-timing/): `Error: Failed to launch chrome!
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
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/): `Error: Failed to launch chrome!
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
- [Selection API](https://w3c.github.io/selection-api/): `Error: Failed to launch chrome!
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
- [Server Timing](https://w3c.github.io/server-timing/): `Error: Failed to launch chrome!
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
- [The Screen Orientation API](https://w3c.github.io/screen-orientation/): `Error: Failed to launch chrome!
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
- [Touch Events](https://w3c.github.io/touch-events/): `Error: Failed to launch chrome!
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
- [User Timing Level 2](https://w3c.github.io/user-timing/): `Error: Failed to launch chrome!
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
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/): `Error: Failed to launch chrome!
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
- [Wake Lock API](https://w3c.github.io/wake-lock/): `Error: Failed to launch chrome!
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
- [Web App Manifest](https://w3c.github.io/manifest/): `Error: Failed to launch chrome!
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
- [Web MIDI API](http://webaudio.github.io/web-midi-api/): `Error: Failed to launch chrome!
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
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/): `Error: Failed to launch chrome!
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

=> 43 specifications found


## Specifications without normative dependencies

- [Page not found · GitHub Pages](https://w3c.github.io/webdriver/webdriver-spec.html)

=> 1 specification found

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
- [Metadata API for Media Resources 1.0](https://www.w3.org/TR/mediaont-api-1.0/)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [Scalable Vector Graphics (SVG) 2](https://svgwg.org/svg2-draft/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html)

=> 7 specifications found

WebIDL continues to evolve. Reffy may incorrectly report as invalid perfectly valid WebIDL content if the specification uses bleeding-edge WebIDL features


## List of specifications with obsolete WebIDL constructs


=> 0 specification found


## Specifications that use WebIDL but do not reference the WebIDL spec

- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/)
- [CSS Conditional Rules Module Level 3](https://www.w3.org/TR/css3-conditional/)
- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/)
- [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)

=> 6 specifications found



## List of WebIDL names not defined in the specifications crawled

- `AnimationEffectReadOnly` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- `ConstrainBoolean` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `ConstrainDOMString` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `ConstrainDouble` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `DOMHighResTimeStamp` used in [DOM Standard](https://dom.spec.whatwg.org/), [Generic Sensor API](https://w3c.github.io/sensors/), [Geolocation Sensor](https://wicg.github.io/geolocation-sensor/), [HTML Standard](https://html.spec.whatwg.org/), [Intersection Observer](https://w3c.github.io/IntersectionObserver/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Web Animations](https://w3c.github.io/web-animations/), [Web Audio API](https://webaudio.github.io/web-audio-api/), [WebXR Device API](https://immersive-web.github.io/webxr/)
- `GroupEffectReadOnly` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)
- `LayoutWorklet` used in [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/)
- `Map` used in [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/)
- `MediaStream` used in [HTML Standard](https://html.spec.whatwg.org/), [MediaStream Recording](https://w3c.github.io/mediacapture-record/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `MediaStreamTrack` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/), [Web Audio API](https://webaudio.github.io/web-audio-api/)
- `MediaTrackCapabilities` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackConstraintSet` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackSettings` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- `MediaTrackSupportedConstraints` used in [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
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
- `SVGImageElement` used in [HTML Standard](https://html.spec.whatwg.org/)
- `SVGScriptElement` used in [HTML Standard](https://html.spec.whatwg.org/)
- `VibratePattern` used in [Notifications API Standard](https://notifications.spec.whatwg.org/)
- `VisibilityState` used in [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- `WindowProxy` used in [HTML Standard](https://html.spec.whatwg.org/)
- `sequence` used in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/)

=> 32 WebIDL names found

Some of them may be type errors in specs (e.g. "int" does not exist, "Array" cannot be used on its own, etc.)
Also, please keep in mind that Reffy only knows about IDL terms defined in the specifications that were crawled **and** that do not have invalid IDL content.


## List of WebIDL names defined in more than one spec

- `StaticRange` defined in [DOM Standard](https://dom.spec.whatwg.org/) and [Static Range](https://w3c.github.io/staticrange/)
- `VoidFunction` defined in [CSS Animation Worklet API](https://wicg.github.io/animation-worklet/) and [Web IDL](https://heycam.github.io/webidl/)
- `Worker` defined in [HTML Standard](https://html.spec.whatwg.org/) and [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- `Worklet` defined in [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) and [Web Audio API](https://webaudio.github.io/web-audio-api/) and [Worklets Level 1](https://drafts.css-houdini.org/worklets/)

=> 4 WebIDL names found

"There can be only one"...


## Missing references for WebIDL names

- [Accelerated Shape Detection in Images](https://wicg.github.io/shape-detection-api/) uses `Point2D` but does not reference [MediaStream Image Capture](https://w3c.github.io/mediacapture-image/)
- [Console Standard](https://console.spec.whatwg.org/) uses:
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
    * `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [CORS and RFC1918](https://wicg.github.io/cors-rfc1918/) uses `Document` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
- [CSS Typed OM Level 1](https://drafts.css-houdini.org/css-typed-om-1/) uses:
    * `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
    * `PaintWorklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/)
- [CSSOM View Module](https://drafts.csswg.org/cssom-view/) uses:
    * `MouseEvent` but does not reference [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
    * `MouseEventInit` but does not reference [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/)
- [DOM Standard](https://dom.spec.whatwg.org/) uses `AudioWorklet` but does not reference [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Encoding Standard](https://encoding.spec.whatwg.org/) uses `Worker` but does not reference [HTML Standard](https://html.spec.whatwg.org/) or [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/)
- [HTML Standard](https://html.spec.whatwg.org/) uses `AudioWorklet` but does not reference [Web Audio API](https://webaudio.github.io/web-audio-api/)
- [Media Source Extensions™](https://w3c.github.io/media-source/) uses:
    * `EventTarget` but does not reference [DOM Standard](https://dom.spec.whatwg.org/)
    * `URL` but does not reference [URL Standard](https://url.spec.whatwg.org/)
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/) uses `Worklet` but does not reference [CSS Painting API Level 1](https://drafts.css-houdini.org/css-paint-api-1/) or [Web Audio API](https://webaudio.github.io/web-audio-api/) or [Worklets Level 1](https://drafts.css-houdini.org/worklets/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) uses:
    * `WebGLRenderingContext` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGL2RenderingContext` but does not reference [WebGL 2.0 Specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
    * `WebGLFramebuffer` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLContextAttributes` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)
    * `WebGLRenderingContextBase` but does not reference [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/)

=> 19 missing references for IDL definitions found in 11 specifications


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
    * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but does not list it in its references
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
- [HTML Standard](https://html.spec.whatwg.org/) links to:
    * [`https://spec.whatwg.org/`](https://spec.whatwg.org/) but does not list it in its references
    * [`https://www.w3.org/TR/css3-color/`](https://www.w3.org/TR/css3-color/) but does not list it in its references
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
    * [`https://w3c.github.io/dom/`](https://w3c.github.io/dom/) but does not list it in its references
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
- [Web Audio API](https://webaudio.github.io/web-audio-api/) links to:
    * [`https://w3c.github.io/mediacapture-fromelement/`](https://w3c.github.io/mediacapture-fromelement/) but does not list it in its references
    * [`https://fetch.spec.whatwg.org/`](https://fetch.spec.whatwg.org/) but does not list it in its references
- [Web Authentication: An API for accessing Public Key Credentials - Level 1](https://w3c.github.io/webauthn/) links to [`https://w3c.github.io/html/browsers.html`](https://w3c.github.io/html/browsers.html) but does not list it in its references
- [Web Background Synchronization](https://wicg.github.io/BackgroundSync/spec/) links to [`https://notifications.spec.whatwg.org/`](https://notifications.spec.whatwg.org/) but does not list it in its references
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/) links to [`https://w3c.github.io/fingerprinting-guidance/`](https://w3c.github.io/fingerprinting-guidance/) but does not list it in its references
- [WebAssembly JavaScript Interface](https://webassembly.github.io/spec/js-api/) links to:
    * [`https://www.w3.org/TR/wasm-core/`](https://www.w3.org/TR/wasm-core/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-js-api/`](https://www.w3.org/TR/wasm-js-api/) but does not list it in its references
    * [`https://www.w3.org/TR/wasm-web-api/`](https://www.w3.org/TR/wasm-web-api/) but does not list it in its references
- [WebVTT: The Web Video Text Tracks Format](https://w3c.github.io/webvtt/) links to [`https://encoding.spec.whatwg.org/`](https://encoding.spec.whatwg.org/) but does not list it in its references
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/) but does not list it in its references
- [Worklets Level 1](https://drafts.css-houdini.org/worklets/) links to [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but does not list it in its references
- [XMLHttpRequest Standard](https://xhr.spec.whatwg.org/) links to [`https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/`](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/) but does not list it in its references

=> 120 missing references for links found in 46 specifications

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
- [CSS Values and Units Module Level 4](https://drafts.csswg.org/css-values/) links to:
    * [`https://www.w3.org/TR/css-syntax/`](https://www.w3.org/TR/css-syntax/) but related reference "CSS3SYN" uses URL [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/)
    * [`https://www.w3.org/TR/css3-fonts/`](https://www.w3.org/TR/css3-fonts/) but related reference "CSS3-FONTS" uses URL [`https://www.w3.org/TR/css-fonts-3/`](https://www.w3.org/TR/css-fonts-3/)
    * [`https://www.w3.org/TR/selectors/`](https://www.w3.org/TR/selectors/) but related reference "SELECTORS-3" uses URL [`https://www.w3.org/TR/selectors-3/`](https://www.w3.org/TR/selectors-3/)
- [DeviceOrientation Event Specification](https://w3c.github.io/deviceorientation/spec-source-orientation.html) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML51" uses URL [`https://www.w3.org/TR/2016/REC-html51-20161101/`](https://www.w3.org/TR/2016/REC-html51-20161101/)
- [DOM Standard](https://dom.spec.whatwg.org/) links to:
    * [`https://w3c.github.io/hr-time/`](https://w3c.github.io/hr-time/) but related reference "HR-TIME" uses URL [`https://www.w3.org/TR/hr-time/`](https://www.w3.org/TR/hr-time/)
    * [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/) but related reference "UIEVENTS" uses URL [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/)
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
- [HTML Standard](https://html.spec.whatwg.org/) links to [`https://w3c.github.io/payment-request/`](https://w3c.github.io/payment-request/) but related reference "PAYMENTREQUEST" uses URL [`https://w3c.github.io/browser-payment-api/`](https://w3c.github.io/browser-payment-api/)
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
    * [`https://w3c.github.io/html/`](https://w3c.github.io/html/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
    * [`https://w3c.github.io/uievents/`](https://w3c.github.io/uievents/) but related reference "uievents" uses URL [`https://www.w3.org/TR/uievents/`](https://www.w3.org/TR/uievents/)
    * [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "web-animations-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
    * [`https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/`](https://www.w3.org/TR/2015/NOTE-UAAG20-20151215/) but related reference "UAAG20" uses URL [`https://www.w3.org/TR/UAAG20/`](https://www.w3.org/TR/UAAG20/)
    * [`https://www.w3.org/TR/2008/REC-CSS2-20080411/`](https://www.w3.org/TR/2008/REC-CSS2-20080411/) but related reference "CSS2" uses URL [`https://www.w3.org/TR/CSS2`](https://www.w3.org/TR/CSS2)
- [Scroll-linked Animations](https://wicg.github.io/scroll-animations/) links to [`https://w3c.github.io/web-animations/`](https://w3c.github.io/web-animations/) but related reference "WEB-ANIMATIONS-1" uses URL [`https://www.w3.org/TR/web-animations-1/`](https://www.w3.org/TR/web-animations-1/)
- [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) links to [`https://w3c.github.io/webappsec-mixed-content/`](https://w3c.github.io/webappsec-mixed-content/) but related reference "MIX" uses URL [`https://www.w3.org/TR/mixed-content/`](https://www.w3.org/TR/mixed-content/)
- [Service Workers 1](https://w3c.github.io/ServiceWorker/v1/) links to:
    * [`https://w3c.github.io/webappsec-referrer-policy/`](https://w3c.github.io/webappsec-referrer-policy/) but related reference "REFERRER-POLICY" uses URL [`https://www.w3.org/TR/referrer-policy/`](https://www.w3.org/TR/referrer-policy/)
    * [`https://w3c.github.io/webappsec-secure-contexts/`](https://w3c.github.io/webappsec-secure-contexts/) but related reference "SECURE-CONTEXTS" uses URL [`https://www.w3.org/TR/secure-contexts/`](https://www.w3.org/TR/secure-contexts/)
    * [`https://w3c.github.io/webappsec-csp/`](https://w3c.github.io/webappsec-csp/) but related reference "CSP-3" uses URL [`https://www.w3.org/TR/CSP3/`](https://www.w3.org/TR/CSP3/)
- [Subresource Integrity](https://w3c.github.io/webappsec-subresource-integrity/) links to [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)
- [UI Events](https://www.w3.org/TR/2016/WD-uievents-20160804/) links to:
    * [`https://dom.spec.whatwg.org/`](https://dom.spec.whatwg.org/) but related reference "DOM-Level-3-Core" uses URL [`http://www.w3.org/TR/DOM-Level-3-Core/`](http://www.w3.org/TR/DOM-Level-3-Core/)
    * [`https://www.w3.org/TR/css-syntax-3/`](https://www.w3.org/TR/css-syntax-3/) but related reference "CSS-SYNTAX-3" uses URL [`http://dev.w3.org/csswg/css-syntax/`](http://dev.w3.org/csswg/css-syntax/)
- [User Interface Security and the Visibility API](http://w3c.github.io/webappsec-uisecurity/index.html) links to [`https://www.w3.org/TR/cssom-view/`](https://www.w3.org/TR/cssom-view/) but related reference "CSSOM-VIEW-1" uses URL [`http://www.w3.org/TR/cssom-view-1/`](http://www.w3.org/TR/cssom-view-1/)
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
- [WebGL Specification](https://www.khronos.org/registry/webgl/specs/latest/1.0/) links to [`https://html.spec.whatwg.org/`](https://html.spec.whatwg.org/) but related reference "CANVAS" uses URL [`https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element`](https://www.w3.org/TR/html5/scripting-1.html#the-canvas-element)
- [WebUSB API](https://wicg.github.io/webusb/) links to [`https://w3c.github.io/permissions/`](https://w3c.github.io/permissions/) but related reference "PERMISSIONS" uses URL [`https://www.w3.org/TR/permissions/`](https://www.w3.org/TR/permissions/)
- [WebXR Device API](https://immersive-web.github.io/webxr/) links to:
    * [`https://w3c.github.io/orientation-sensor/`](https://w3c.github.io/orientation-sensor/) but related reference "ORIENTATION-SENSOR" uses URL [`https://www.w3.org/TR/orientation-sensor/`](https://www.w3.org/TR/orientation-sensor/)
    * [`https://www.w3.org/TR/html5/`](https://www.w3.org/TR/html5/) but related reference "HTML" uses URL [`https://html.spec.whatwg.org/multipage/`](https://html.spec.whatwg.org/multipage/)

=> 113 inconsistent references for links found in 54 specifications

Links in the body of a specification should be to the same document as that pointed to by the related reference in the References section. The specifications reported here use a different URL. For instance, they may use a link to the Editor's Draft but target the latest published version in the References section. There should be some consistency across the specification.
