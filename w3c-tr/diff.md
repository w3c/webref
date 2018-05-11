% Diff between report from "May 11, 2018" and reference report from "May 10, 2018"
% Reffy
% May 11, 2018

## Audio Output Devices API

- URL: [https://www.w3.org/TR/audio-output/](https://www.w3.org/TR/audio-output/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-output/)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Battery Status API

- URL: [https://www.w3.org/TR/battery-status/](https://www.w3.org/TR/battery-status/)
- Crawled version: [Editor's Draft](https://w3c.github.io/battery/)
- Repository: [GitHub w3c/battery](https://github.com/w3c/battery)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Beacon

- URL: [https://www.w3.org/TR/beacon/](https://www.w3.org/TR/beacon/)
- Crawled version: [Editor's Draft](https://w3c.github.io/beacon/)
- Repository: [GitHub w3c/beacon](https://github.com/w3c/beacon)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Cooperative Scheduling of Background Tasks

- URL: [https://www.w3.org/TR/requestidlecallback/](https://www.w3.org/TR/requestidlecallback/)
- Crawled version: [Editor's Draft](https://w3c.github.io/requestidlecallback/)
- Repository: [GitHub w3c/requestidlecallback](https://github.com/w3c/requestidlecallback)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## DOM Parsing and Serialization

- URL: [https://www.w3.org/TR/DOM-Parsing/](https://www.w3.org/TR/DOM-Parsing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/DOM-Parsing/)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Gamepad

- URL: [https://www.w3.org/TR/gamepad/](https://www.w3.org/TR/gamepad/)
- Crawled version: [Editor's Draft](https://w3c.github.io/gamepad/)
- Repository: [GitHub w3c/gamepad](https://github.com/w3c/gamepad)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## High Resolution Time Level 3

- URL: [https://www.w3.org/TR/hr-time-3/](https://www.w3.org/TR/hr-time-3/)
- Crawled version: [Editor's Draft](https://w3c.github.io/hr-time/)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## HTML Media Capture

- URL: [https://www.w3.org/TR/html-media-capture/](https://www.w3.org/TR/html-media-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/html-media-capture/)
- Repository: [GitHub w3c/html-media-capture](https://github.com/w3c/html-media-capture)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://w3c.github.io/editing/contentEditable.html

- URL: [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html)
- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://w3c.github.io/web-nfc/

- URL: [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/)
- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/aom/spec/

- URL: [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/)
- Crawled version: [Initial URL](https://wicg.github.io/aom/spec/)
- Repository: [GitHub wicg/aom](https://github.com/wicg/aom)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/InputDeviceCapabilities/

- URL: [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/)
- Crawled version: [Initial URL](https://wicg.github.io/InputDeviceCapabilities/)
- Repository: [GitHub wicg/InputDeviceCapabilities](https://github.com/wicg/InputDeviceCapabilities)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/netinfo/

- URL: [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/)
- Crawled version: [Initial URL](https://wicg.github.io/netinfo/)
- Repository: [GitHub wicg/netinfo](https://github.com/wicg/netinfo)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/web-share/

- URL: [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/)
- Crawled version: [Initial URL](https://wicg.github.io/web-share/)
- Repository: [GitHub wicg/web-share](https://github.com/wicg/web-share)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Identifiers for WebRTC's Statistics API

- URL: [https://www.w3.org/TR/webrtc-stats/](https://www.w3.org/TR/webrtc-stats/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-stats/)
- Repository: [GitHub w3c/webrtc-stats](https://github.com/w3c/webrtc-stats)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Input Events Level 1

- URL: [https://www.w3.org/TR/input-events-2/](https://www.w3.org/TR/input-events-2/)
- Crawled version: [Editor's Draft](https://rawgit.com/w3c/input-events/v1/index.html)
- Repository: [GitHub w3c/input-events](https://github.com/w3c/input-events)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture and Streams

- URL: [https://www.w3.org/TR/mediacapture-streams/](https://www.w3.org/TR/mediacapture-streams/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-main/)
- Repository: [GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture Depth Stream Extensions

- URL: [https://www.w3.org/TR/mediacapture-depth/](https://www.w3.org/TR/mediacapture-depth/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-depth/)
- Repository: [GitHub w3c/mediacapture-depth](https://github.com/w3c/mediacapture-depth)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture from DOM Elements

- URL: [https://www.w3.org/TR/mediacapture-fromelement/](https://www.w3.org/TR/mediacapture-fromelement/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-fromelement/)
- Repository: [GitHub w3c/mediacapture-fromelement](https://github.com/w3c/mediacapture-fromelement)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Navigation Timing Level 2

- URL: [https://www.w3.org/TR/navigation-timing-2/](https://www.w3.org/TR/navigation-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/navigation-timing/)
- Repository: [GitHub w3c/navigation-timing](https://github.com/w3c/navigation-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Page Visibility Level 2

- URL: [https://www.w3.org/TR/page-visibility-2/](https://www.w3.org/TR/page-visibility-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/page-visibility/)
- Repository: [GitHub w3c/page-visibility](https://github.com/w3c/page-visibility)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Payment Handler API

- URL: [https://www.w3.org/TR/payment-handler/](https://www.w3.org/TR/payment-handler/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-handler/)
- Repository: [GitHub w3c/payment-handler](https://github.com/w3c/payment-handler)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Payment Method: Basic Card

- URL: [https://www.w3.org/TR/payment-method-basic-card/](https://www.w3.org/TR/payment-method-basic-card/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-method-basic-card/)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Payment Request API

- URL: [https://www.w3.org/TR/payment-request/](https://www.w3.org/TR/payment-request/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-request/)
- Repository: [GitHub w3c/payment-request](https://github.com/w3c/payment-request)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Performance Timeline Level 2

- URL: [https://www.w3.org/TR/performance-timeline-2/](https://www.w3.org/TR/performance-timeline-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/performance-timeline/)
- Repository: [GitHub w3c/performance-timeline](https://github.com/w3c/performance-timeline)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Pointer Events

- URL: [https://www.w3.org/TR/pointerevents2/](https://www.w3.org/TR/pointerevents2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/pointerevents/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Pointer Lock 2.0

- URL: [https://www.w3.org/TR/pointerlock-2/](https://www.w3.org/TR/pointerlock-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/pointerlock/)
- Repository: [GitHub w3c/pointerlock](https://github.com/w3c/pointerlock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Preload

- URL: [https://www.w3.org/TR/preload/](https://www.w3.org/TR/preload/)
- Crawled version: [Editor's Draft](https://w3c.github.io/preload/)
- Repository: [GitHub w3c/preload](https://github.com/w3c/preload)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Presentation API

- URL: [https://www.w3.org/TR/presentation-api/](https://www.w3.org/TR/presentation-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/presentation-api/)
- Repository: [GitHub w3c/presentation-api](https://github.com/w3c/presentation-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Push API

- URL: [https://www.w3.org/TR/push-api/](https://www.w3.org/TR/push-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/push-api/)
- Repository: [GitHub w3c/push-api](https://github.com/w3c/push-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Remote Playback API

- URL: [https://www.w3.org/TR/remote-playback/](https://www.w3.org/TR/remote-playback/)
- Crawled version: [Editor's Draft](https://w3c.github.io/remote-playback/)
- Repository: [GitHub w3c/remote-playback](https://github.com/w3c/remote-playback)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Resource Timing Level 2

- URL: [https://www.w3.org/TR/resource-timing-2/](https://www.w3.org/TR/resource-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/resource-timing/)
- Repository: [GitHub w3c/resource-timing](https://github.com/w3c/resource-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12) / *DEL* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Screen Capture

- URL: [https://www.w3.org/TR/screen-capture/](https://www.w3.org/TR/screen-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-screen-share/)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Selection API

- URL: [https://www.w3.org/TR/selection-api/](https://www.w3.org/TR/selection-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/selection-api/)
- Repository: [GitHub w3c/selection-api](https://github.com/w3c/selection-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Server Timing

- URL: [https://www.w3.org/TR/server-timing/](https://www.w3.org/TR/server-timing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/server-timing/)
- Repository: [GitHub w3c/server-timing](https://github.com/w3c/server-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## The Screen Orientation API

- URL: [https://www.w3.org/TR/screen-orientation/](https://www.w3.org/TR/screen-orientation/)
- Crawled version: [Editor's Draft](https://w3c.github.io/screen-orientation/)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Touch Events

- URL: [https://www.w3.org/TR/touch-events/](https://www.w3.org/TR/touch-events/)
- Crawled version: [Editor's Draft](https://w3c.github.io/touch-events/)
- Repository: [GitHub w3c/touch-events](https://github.com/w3c/touch-events)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## User Timing Level 2

- URL: [https://www.w3.org/TR/user-timing-2/](https://www.w3.org/TR/user-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/user-timing/)
- Repository: [GitHub w3c/user-timing](https://github.com/w3c/user-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Vibration API (Second Edition)

- URL: [https://www.w3.org/TR/vibration/](https://www.w3.org/TR/vibration/)
- Crawled version: [Editor's Draft](https://w3c.github.io/vibration/)
- Repository: [GitHub w3c/vibration](https://github.com/w3c/vibration)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Wake Lock API

- URL: [https://www.w3.org/TR/wake-lock/](https://www.w3.org/TR/wake-lock/)
- Crawled version: [Editor's Draft](https://w3c.github.io/wake-lock/)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Web App Manifest

- URL: [https://www.w3.org/TR/appmanifest/](https://www.w3.org/TR/appmanifest/)
- Crawled version: [Editor's Draft](https://w3c.github.io/manifest/)
- Repository: [GitHub w3c/manifest](https://github.com/w3c/manifest)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Web MIDI API

- URL: [https://www.w3.org/TR/webmidi/](https://www.w3.org/TR/webmidi/)
- Crawled version: [Editor's Draft](http://webaudio.github.io/web-midi-api/)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## WebRTC 1.0: Real-time Communication Between Browsers

- URL: [https://www.w3.org/TR/webrtc/](https://www.w3.org/TR/webrtc/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-pc/)
- Repository: [GitHub w3c/webrtc-pc](https://github.com/w3c/webrtc-pc)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


