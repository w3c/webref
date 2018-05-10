% Diff between report from "May 10, 2018" and reference report from "May 09, 2018"
% Reffy
% May 10, 2018

## Audio Output Devices API

- URL: [https://www.w3.org/TR/audio-output/](https://www.w3.org/TR/audio-output/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-output/)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Custom Elements

- URL: [https://www.w3.org/TR/custom-elements/](https://www.w3.org/TR/custom-elements/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webcomponents/spec/custom/)
- Repository: [GitHub w3c/webcomponents](https://github.com/w3c/webcomponents)
- This specification is not in the new crawl report.


## DOM Parsing and Serialization

- URL: [https://www.w3.org/TR/DOM-Parsing/](https://www.w3.org/TR/DOM-Parsing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/DOM-Parsing/)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Generic Sensor API

- URL: [https://www.w3.org/TR/generic-sensor/](https://www.w3.org/TR/generic-sensor/)
- Crawled version: [Editor's Draft](https://w3c.github.io/sensors/)
- Repository: [GitHub w3c/sensors](https://github.com/w3c/sensors)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp


## Geolocation Sensor

- URL: [https://wicg.github.io/geolocation-sensor/](https://wicg.github.io/geolocation-sensor/)
- Crawled version: [Initial URL](https://wicg.github.io/geolocation-sensor/)
- Repository: [GitHub wicg/geolocation-sensor](https://github.com/wicg/geolocation-sensor)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp


## High Resolution Time Level 3

- URL: [https://www.w3.org/TR/hr-time-3/](https://www.w3.org/TR/hr-time-3/)
- Crawled version: [Editor's Draft](https://w3c.github.io/hr-time/)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Spec title: *INS* High Resolution Time Level 3 / *DEL* High Resolution Time Level 2
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* https://w3c.github.io/editing/contentEditable.html / *DEL* ContentEditable
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* https://w3c.github.io/web-nfc/ / *DEL* Web NFC API
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* https://wicg.github.io/aom/spec/ / *DEL* Accessibility Object Model, Phase 1
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* https://wicg.github.io/InputDeviceCapabilities/ / *DEL* Input Device Capabilities
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* https://wicg.github.io/netinfo/ / *DEL* Network Information API
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* https://wicg.github.io/web-share/ / *DEL* Web Share API
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Intersection Observer

- URL: [https://www.w3.org/TR/intersection-observer/](https://www.w3.org/TR/intersection-observer/)
- Crawled version: [Editor's Draft](https://w3c.github.io/IntersectionObserver/)
- Repository: [GitHub w3c/IntersectionObserver](https://github.com/w3c/IntersectionObserver)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp
- Missing references for WebIDL names: *DEL* DOMHighResTimeStamp


## Long Tasks API 1

- URL: [https://www.w3.org/TR/longtasks-1/](https://www.w3.org/TR/longtasks-1/)
- Crawled version: [Editor's Draft](https://w3c.github.io/longtasks/)
- Repository: [GitHub w3c/longtasks](https://github.com/w3c/longtasks)
- Unknown WebIDL names used: *INS* PerformanceEntry


## Media Capture and Streams

- URL: [https://www.w3.org/TR/mediacapture-streams/](https://www.w3.org/TR/mediacapture-streams/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-main/)
- Repository: [GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## MediaStream Image Capture

- URL: [https://www.w3.org/TR/image-capture/](https://www.w3.org/TR/image-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-image/)
- Repository: [GitHub w3c/mediacapture-image](https://github.com/w3c/mediacapture-image)
- Unknown WebIDL names used: *INS* ConstrainBoolean, ConstrainDOMString, ConstrainDouble, MediaStreamTrack, MediaTrackCapabilities, MediaTrackConstraintSet, MediaTrackSettings, MediaTrackSupportedConstraints


## MediaStream Recording

- URL: [https://www.w3.org/TR/mediastream-recording/](https://www.w3.org/TR/mediastream-recording/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-record/)
- Repository: [GitHub w3c/mediacapture-record](https://github.com/w3c/mediacapture-record)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp, MediaStream


## Navigation Timing Level 2

- URL: [https://www.w3.org/TR/navigation-timing-2/](https://www.w3.org/TR/navigation-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/navigation-timing/)
- Repository: [GitHub w3c/navigation-timing](https://github.com/w3c/navigation-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Paint Timing 1

- URL: [https://www.w3.org/TR/paint-timing/](https://www.w3.org/TR/paint-timing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/paint-timing/)
- Repository: [GitHub w3c/paint-timing](https://github.com/w3c/paint-timing)
- Unknown WebIDL names used: *INS* PerformanceEntry


## Payment Handler API

- URL: [https://www.w3.org/TR/payment-handler/](https://www.w3.org/TR/payment-handler/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-handler/)
- Repository: [GitHub w3c/payment-handler](https://github.com/w3c/payment-handler)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Scalable Vector Graphics (SVG) 2

- URL: [https://www.w3.org/TR/SVG2/](https://www.w3.org/TR/SVG2/)
- Crawled version: [Editor's Draft](https://svgwg.org/svg2-draft/)
- Repository: [GitHub w3c/svgwg](https://github.com/w3c/svgwg)
- Missing references for links: *INS* https://w3c.github.io/webcomponents/spec/shadow/
- Inconsistent references for links: *DEL* https://w3c.github.io/webcomponents/spec/shadow/


## Screen Capture

- URL: [https://www.w3.org/TR/screen-capture/](https://www.w3.org/TR/screen-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-screen-share/)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Service Workers 1

- URL: [https://www.w3.org/TR/service-workers-1/](https://www.w3.org/TR/service-workers-1/)
- Crawled version: [Editor's Draft](https://w3c.github.io/ServiceWorker/v1/)
- Repository: [GitHub w3c/ServiceWorker](https://github.com/w3c/ServiceWorker)
- Unknown WebIDL names used: *INS* VisibilityState


## Shadow DOM

- URL: [https://www.w3.org/TR/shadow-dom/](https://www.w3.org/TR/shadow-dom/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webcomponents/spec/shadow/)
- Repository: [GitHub w3c/webcomponents](https://github.com/w3c/webcomponents)
- This specification is not in the new crawl report.


## The Screen Orientation API

- URL: [https://www.w3.org/TR/screen-orientation/](https://www.w3.org/TR/screen-orientation/)
- Crawled version: [Editor's Draft](https://w3c.github.io/screen-orientation/)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec title: *INS* Touch Events / *DEL* Touch Events - Level 2
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## W3C DOM 4.1

- URL: [https://www.w3.org/TR/dom41/](https://www.w3.org/TR/dom41/)
- Crawled version: [Editor's Draft](https://w3c.github.io/dom/)
- Repository: [GitHub w3c/dom](https://github.com/w3c/dom)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp
- WebIDL names also defined elsewhere: *DEL* ShadowRoot, ShadowRootMode


## Wake Lock API

- URL: [https://www.w3.org/TR/wake-lock/](https://www.w3.org/TR/wake-lock/)
- Crawled version: [Editor's Draft](https://w3c.github.io/wake-lock/)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Web Animations

- URL: [https://www.w3.org/TR/web-animations-1/](https://www.w3.org/TR/web-animations-1/)
- Crawled version: [Editor's Draft](https://w3c.github.io/web-animations/)
- Repository: [GitHub w3c/web-animations](https://github.com/w3c/web-animations)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp


## Web App Manifest

- URL: [https://www.w3.org/TR/appmanifest/](https://www.w3.org/TR/appmanifest/)
- Crawled version: [Editor's Draft](https://w3c.github.io/manifest/)
- Repository: [GitHub w3c/manifest](https://github.com/w3c/manifest)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## Web Audio API

- URL: [https://www.w3.org/TR/webaudio/](https://www.w3.org/TR/webaudio/)
- Crawled version: [Editor's Draft](https://webaudio.github.io/web-audio-api/)
- Repository: [GitHub webaudio/web-audio-api](https://github.com/webaudio/web-audio-api)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp, MediaStream, MediaStreamTrack


## Web Bluetooth

- URL: [https://webbluetoothcg.github.io/web-bluetooth/](https://webbluetoothcg.github.io/web-bluetooth/)
- Crawled version: [Initial URL](https://webbluetoothcg.github.io/web-bluetooth/)
- Repository: [GitHub webbluetoothcg/web-bluetooth](https://github.com/webbluetoothcg/web-bluetooth)
- Invalid WebIDL content found: *INS* false / *DEL* true
- Obsolete WebIDL constructs found: *INS* false
- Unknown WebIDL names used: *INS* EventHandler, Map, Navigator


## Web MIDI API

- URL: [https://www.w3.org/TR/webmidi/](https://www.w3.org/TR/webmidi/)
- Crawled version: [Editor's Draft](http://webaudio.github.io/web-midi-api/)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## WebAssembly JavaScript Interface

- URL: [https://www.w3.org/TR/wasm-js-api-1/](https://www.w3.org/TR/wasm-js-api-1/)
- Crawled version: [Editor's Draft](https://webassembly.github.io/spec/js-api/)
- Repository: [GitHub webassembly/spec](https://github.com/webassembly/spec)
- This specification was not in the reference crawl report.


## WebAssembly JavaScript Interface

- URL: [https://webassembly.github.io/spec/js-api/index.html](https://webassembly.github.io/spec/js-api/index.html)
- Crawled version: [Initial URL](https://webassembly.github.io/spec/js-api/index.html)
- This specification is not in the new crawl report.


## WebRTC 1.0: Real-time Communication Between Browsers

- URL: [https://www.w3.org/TR/webrtc/](https://www.w3.org/TR/webrtc/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-pc/)
- Repository: [GitHub w3c/webrtc-pc](https://github.com/w3c/webrtc-pc)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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


## WebXR Device API

- URL: [https://immersive-web.github.io/webxr/](https://immersive-web.github.io/webxr/)
- Crawled version: [Initial URL](https://immersive-web.github.io/webxr/)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp
- Missing references for WebIDL names: *DEL* DOMHighResTimeStamp


