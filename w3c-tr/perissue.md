% Specifications that define WebIDL content (W3C perspective)
% Reffy
% May 10, 2018

148 specifications were crawled in this report.


## Specifications that could not be rendered

Reffy could not fetch or render these specifications for some reason. This may happen when a network error occurred or when a specification uses an old version of ReSpec.

- [Audio Output Devices API](https://w3c.github.io/mediacapture-output/): `Error: Failed to launch chrome!
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
- [Battery Status API](https://w3c.github.io/battery/): `Error: Failed to launch chrome!
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
- [Beacon](https://w3c.github.io/beacon/): `Error: Failed to launch chrome!
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
- [Cooperative Scheduling of Background Tasks](https://w3c.github.io/requestidlecallback/): `Error: Failed to launch chrome!
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
- [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/): `Error: Failed to launch chrome!
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
- [Gamepad](https://w3c.github.io/gamepad/): `Error: Failed to launch chrome!
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
- [High Resolution Time Level 3](https://w3c.github.io/hr-time/): `Error: Failed to launch chrome!
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
- [HTML Media Capture](https://w3c.github.io/html-media-capture/): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html): `Error: Failed to launch chrome!
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
- [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/): `Error: Failed to launch chrome!
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
- [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/): `Error: Failed to launch chrome!
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
- [Identifiers for WebRTC's Statistics API](https://w3c.github.io/webrtc-stats/): `Error: Failed to launch chrome!
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
- [Input Events Level 1](https://rawgit.com/w3c/input-events/v1/index.html): `Error: Failed to launch chrome!
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
- [Media Capture and Streams](https://w3c.github.io/mediacapture-main/): `Error: Failed to launch chrome!
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
- [Media Capture Depth Stream Extensions](https://w3c.github.io/mediacapture-depth/): `Error: Failed to launch chrome!
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
- [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/): `Error: Failed to launch chrome!
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
- [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/): `Error: Failed to launch chrome!
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
- [Page Visibility Level 2](https://w3c.github.io/page-visibility/): `Error: Failed to launch chrome!
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
- [Payment Handler API](https://w3c.github.io/payment-handler/): `Error: Failed to launch chrome!
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
- [Payment Method: Basic Card](https://w3c.github.io/payment-method-basic-card/): `Error: Failed to launch chrome!
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
- [Payment Request API](https://w3c.github.io/payment-request/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/): `Error: Failed to launch chrome!
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
- [Pointer Events](https://w3c.github.io/pointerevents/): `Error: Failed to launch chrome!
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
- [Pointer Lock 2.0](https://w3c.github.io/pointerlock/): `Error: Failed to launch chrome!
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
- [Preload](https://w3c.github.io/preload/): `Error: Failed to launch chrome!
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
- [Presentation API](https://w3c.github.io/presentation-api/): `Error: Failed to launch chrome!
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
- [Push API](https://w3c.github.io/push-api/): `Error: Failed to launch chrome!
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
- [Remote Playback API](https://w3c.github.io/remote-playback/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Resource Timing Level 2](https://w3c.github.io/resource-timing/): `Error: Failed to launch chrome!
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
- [Screen Capture](https://w3c.github.io/mediacapture-screen-share/): `Error: Failed to launch chrome!
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
- [Selection API](https://w3c.github.io/selection-api/): `Error: Failed to launch chrome!
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
- [Server Timing](https://w3c.github.io/server-timing/): `Error: Failed to launch chrome!
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
- [The Screen Orientation API](https://w3c.github.io/screen-orientation/): `Error: Failed to launch chrome!
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
- [Touch Events](https://w3c.github.io/touch-events/): `Error: Failed to launch chrome!
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
- [User Timing Level 2](https://w3c.github.io/user-timing/): `Error: Failed to launch chrome!
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
- [Vibration API (Second Edition)](https://w3c.github.io/vibration/): `Error: Failed to launch chrome!
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
- [Wake Lock API](https://w3c.github.io/wake-lock/): `Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)`
- [Web App Manifest](https://w3c.github.io/manifest/): `Error: Failed to launch chrome!
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
- [Web MIDI API](http://webaudio.github.io/web-midi-api/): `Error: Failed to launch chrome!
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
- [WebRTC 1.0: Real-time Communication Between Browsers](https://w3c.github.io/webrtc-pc/): `Error: Failed to launch chrome!
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
