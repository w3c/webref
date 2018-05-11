% Specifications that define WebIDL content (W3C perspective)
% Reffy
% May 11, 2018

148 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/): `Error: Failed to launch chrome!
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
- [Battery Status API](https://w3c.github.io/battery/): `Error: Failed to launch chrome!
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
- [Beacon](https://w3c.github.io/beacon/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/): `Error: Failed to launch chrome!
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
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/): `Error: Failed to launch chrome!
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
- [Gamepad](https://w3c.github.io/gamepad/): `Error: Failed to launch chrome!
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
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/): `Error: Failed to launch chrome!
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
- [HTML Media Capture](https://w3c.github.io/html-media-capture/): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/): `Error: Failed to launch chrome!
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
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/): `Error: Failed to launch chrome!
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
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html): `Error: Failed to launch chrome!
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
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/): `Error: Failed to launch chrome!
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
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/): `Error: Failed to launch chrome!
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
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/): `Error: Failed to launch chrome!
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
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/): `Error: Failed to launch chrome!
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
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/): `Error: Failed to launch chrome!
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
- [Payment Handler API](https://w3c.github.io/payment-handler/): `Error: Failed to launch chrome!
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
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/): `Error: Failed to launch chrome!
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
- [Payment Request API](https://w3c.github.io/payment-request/): `Error: Failed to launch chrome!
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
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/): `Error: Failed to launch chrome!
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
- [Pointer Events](https://w3c.github.io/pointerevents/): `Error: Failed to launch chrome!
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
- [Pointer Lock 2.0](https://w3c.github.io/pointerlock/): `Error: Failed to launch chrome!
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
- [Preload](https://w3c.github.io/preload/): `Error: Failed to launch chrome!
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
- [Presentation API](https://w3c.github.io/presentation-api/): `Error: Failed to launch chrome!
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
- [Push API](https://w3c.github.io/push-api/): `Error: Failed to launch chrome!
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
- [Remote Playback API](https://w3c.github.io/remote-playback/): `Error: Failed to launch chrome!
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
- [Resource Timing Level 2](https://w3c.github.io/resource-timing/): `Error: Failed to launch chrome!
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
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/): `Error: Failed to launch chrome!
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
- [Selection API](https://w3c.github.io/selection-api/): `Error: Failed to launch chrome!
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
- [Server Timing](https://w3c.github.io/server-timing/): `Error: Failed to launch chrome!
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
- [The Screen Orientation API](https://w3c.github.io/screen-orientation/): `Error: Failed to launch chrome!
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
- [Touch Events](https://w3c.github.io/touch-events/): `Error: Failed to launch chrome!
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
- [User Timing Level 2](https://w3c.github.io/user-timing/): `Error: Failed to launch chrome!
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
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/): `Error: Failed to launch chrome!
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
- [Wake Lock API](https://w3c.github.io/wake-lock/): `Error: Failed to launch chrome!
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
- [Web App Manifest](https://w3c.github.io/manifest/): `Error: Failed to launch chrome!
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
- [Web MIDI API](http://webaudio.github.io/web-midi-api/): `Error: Failed to launch chrome!
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
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/): `Error: Failed to launch chrome!
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
