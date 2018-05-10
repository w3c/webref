% Diff between report from "May 10, 2018" and reference report from "May 09, 2018"
% Reffy
% May 10, 2018

## Audio Output Devices API

- URL: [https://www.w3.org/TR/audio-output/](https://www.w3.org/TR/audio-output/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-output/)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Battery Status API

- URL: [https://www.w3.org/TR/battery-status/](https://www.w3.org/TR/battery-status/)
- Crawled version: [Editor's Draft](https://w3c.github.io/battery/)
- Repository: [GitHub w3c/battery](https://github.com/w3c/battery)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Beacon

- URL: [https://www.w3.org/TR/beacon/](https://www.w3.org/TR/beacon/)
- Crawled version: [Editor's Draft](https://w3c.github.io/beacon/)
- Repository: [GitHub w3c/beacon](https://github.com/w3c/beacon)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Cooperative Scheduling of Background Tasks

- URL: [https://www.w3.org/TR/requestidlecallback/](https://www.w3.org/TR/requestidlecallback/)
- Crawled version: [Editor's Draft](https://w3c.github.io/requestidlecallback/)
- Repository: [GitHub w3c/requestidlecallback](https://github.com/w3c/requestidlecallback)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## DOM Parsing and Serialization

- URL: [https://www.w3.org/TR/DOM-Parsing/](https://www.w3.org/TR/DOM-Parsing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/DOM-Parsing/)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## DOM Standard

- URL: [https://dom.spec.whatwg.org/](https://dom.spec.whatwg.org/)
- Crawled version: [Living Standard](https://dom.spec.whatwg.org/)
- Repository: [GitHub whatwg/dom](https://github.com/whatwg/dom)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp


## Gamepad

- URL: [https://www.w3.org/TR/gamepad/](https://www.w3.org/TR/gamepad/)
- Crawled version: [Editor's Draft](https://w3c.github.io/gamepad/)
- Repository: [GitHub w3c/gamepad](https://github.com/w3c/gamepad)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
- Spec is OK: *INS* false / *DEL* true
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp


## High Resolution Time Level 3

- URL: [https://www.w3.org/TR/hr-time-3/](https://www.w3.org/TR/hr-time-3/)
- Crawled version: [Editor's Draft](https://w3c.github.io/hr-time/)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Spec title: *INS* High Resolution Time Level 3 / *DEL* High Resolution Time Level 2
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## HTML Media Capture

- URL: [https://www.w3.org/TR/html-media-capture/](https://www.w3.org/TR/html-media-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/html-media-capture/)
- Repository: [GitHub w3c/html-media-capture](https://github.com/w3c/html-media-capture)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## HTML Standard

- URL: [https://html.spec.whatwg.org/](https://html.spec.whatwg.org/)
- Crawled version: [Living Standard](https://html.spec.whatwg.org/)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp, MediaStream
- WebIDL names also defined elsewhere: *DEL* BinaryType


## https://w3c.github.io/editing/contentEditable.html

- URL: [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html)
- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html)
- Spec title: *INS* https://w3c.github.io/editing/contentEditable.html / *DEL* ContentEditable
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## https://w3c.github.io/web-nfc/

- URL: [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/)
- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Spec title: *INS* https://w3c.github.io/web-nfc/ / *DEL* Web NFC API
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/aom/spec/

- URL: [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/)
- Crawled version: [Initial URL](https://wicg.github.io/aom/spec/)
- Repository: [GitHub wicg/aom](https://github.com/wicg/aom)
- Spec title: *INS* https://wicg.github.io/aom/spec/ / *DEL* Accessibility Object Model, Phase 1
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/InputDeviceCapabilities/

- URL: [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/)
- Crawled version: [Initial URL](https://wicg.github.io/InputDeviceCapabilities/)
- Repository: [GitHub wicg/InputDeviceCapabilities](https://github.com/wicg/InputDeviceCapabilities)
- Spec title: *INS* https://wicg.github.io/InputDeviceCapabilities/ / *DEL* Input Device Capabilities
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/netinfo/

- URL: [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/)
- Crawled version: [Initial URL](https://wicg.github.io/netinfo/)
- Repository: [GitHub wicg/netinfo](https://github.com/wicg/netinfo)
- Spec title: *INS* https://wicg.github.io/netinfo/ / *DEL* Network Information API
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/web-share/

- URL: [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/)
- Crawled version: [Initial URL](https://wicg.github.io/web-share/)
- Repository: [GitHub wicg/web-share](https://github.com/wicg/web-share)
- Spec title: *INS* https://wicg.github.io/web-share/ / *DEL* Web Share API
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Identifiers for WebRTC's Statistics API

- URL: [https://www.w3.org/TR/webrtc-stats/](https://www.w3.org/TR/webrtc-stats/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-stats/)
- Repository: [GitHub w3c/webrtc-stats](https://github.com/w3c/webrtc-stats)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Input Events Level 1

- URL: [https://www.w3.org/TR/input-events-2/](https://www.w3.org/TR/input-events-2/)
- Crawled version: [Editor's Draft](https://rawgit.com/w3c/input-events/v1/index.html)
- Repository: [GitHub w3c/input-events](https://github.com/w3c/input-events)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture Depth Stream Extensions

- URL: [https://www.w3.org/TR/mediacapture-depth/](https://www.w3.org/TR/mediacapture-depth/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-depth/)
- Repository: [GitHub w3c/mediacapture-depth](https://github.com/w3c/mediacapture-depth)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture from DOM Elements

- URL: [https://www.w3.org/TR/mediacapture-fromelement/](https://www.w3.org/TR/mediacapture-fromelement/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-fromelement/)
- Repository: [GitHub w3c/mediacapture-fromelement](https://github.com/w3c/mediacapture-fromelement)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Notifications API Standard

- URL: [https://notifications.spec.whatwg.org/](https://notifications.spec.whatwg.org/)
- Crawled version: [Living Standard](https://notifications.spec.whatwg.org/)
- Repository: [GitHub whatwg/notifications](https://github.com/whatwg/notifications)
- Spec is OK: *INS* false / *DEL* true
- Unknown WebIDL names used: *INS* VibratePattern


## Page Visibility Level 2

- URL: [https://www.w3.org/TR/page-visibility-2/](https://www.w3.org/TR/page-visibility-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/page-visibility/)
- Repository: [GitHub w3c/page-visibility](https://github.com/w3c/page-visibility)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Payment Method: Basic Card

- URL: [https://www.w3.org/TR/payment-method-basic-card/](https://www.w3.org/TR/payment-method-basic-card/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-method-basic-card/)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Payment Request API

- URL: [https://www.w3.org/TR/payment-request/](https://www.w3.org/TR/payment-request/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-request/)
- Repository: [GitHub w3c/payment-request](https://github.com/w3c/payment-request)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Performance Timeline Level 2

- URL: [https://www.w3.org/TR/performance-timeline-2/](https://www.w3.org/TR/performance-timeline-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/performance-timeline/)
- Repository: [GitHub w3c/performance-timeline](https://github.com/w3c/performance-timeline)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Pointer Events

- URL: [https://www.w3.org/TR/pointerevents2/](https://www.w3.org/TR/pointerevents2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/pointerevents/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Pointer Lock 2.0

- URL: [https://www.w3.org/TR/pointerlock-2/](https://www.w3.org/TR/pointerlock-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/pointerlock/)
- Repository: [GitHub w3c/pointerlock](https://github.com/w3c/pointerlock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Preload

- URL: [https://www.w3.org/TR/preload/](https://www.w3.org/TR/preload/)
- Crawled version: [Editor's Draft](https://w3c.github.io/preload/)
- Repository: [GitHub w3c/preload](https://github.com/w3c/preload)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Presentation API

- URL: [https://www.w3.org/TR/presentation-api/](https://www.w3.org/TR/presentation-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/presentation-api/)
- Repository: [GitHub w3c/presentation-api](https://github.com/w3c/presentation-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Push API

- URL: [https://www.w3.org/TR/push-api/](https://www.w3.org/TR/push-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/push-api/)
- Repository: [GitHub w3c/push-api](https://github.com/w3c/push-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Remote Playback API

- URL: [https://www.w3.org/TR/remote-playback/](https://www.w3.org/TR/remote-playback/)
- Crawled version: [Editor's Draft](https://w3c.github.io/remote-playback/)
- Repository: [GitHub w3c/remote-playback](https://github.com/w3c/remote-playback)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Resource Timing Level 2

- URL: [https://www.w3.org/TR/resource-timing-2/](https://www.w3.org/TR/resource-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/resource-timing/)
- Repository: [GitHub w3c/resource-timing](https://github.com/w3c/resource-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Screen Capture

- URL: [https://www.w3.org/TR/screen-capture/](https://www.w3.org/TR/screen-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-screen-share/)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Selection API

- URL: [https://www.w3.org/TR/selection-api/](https://www.w3.org/TR/selection-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/selection-api/)
- Repository: [GitHub w3c/selection-api](https://github.com/w3c/selection-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Server Timing

- URL: [https://www.w3.org/TR/server-timing/](https://www.w3.org/TR/server-timing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/server-timing/)
- Repository: [GitHub w3c/server-timing](https://github.com/w3c/server-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Service Workers 1

- URL: [https://www.w3.org/TR/service-workers-1/](https://www.w3.org/TR/service-workers-1/)
- Crawled version: [Editor's Draft](https://w3c.github.io/ServiceWorker/v1/)
- Repository: [GitHub w3c/ServiceWorker](https://github.com/w3c/ServiceWorker)
- Unknown WebIDL names used: *INS* VisibilityState


## The Screen Orientation API

- URL: [https://www.w3.org/TR/screen-orientation/](https://www.w3.org/TR/screen-orientation/)
- Crawled version: [Editor's Draft](https://w3c.github.io/screen-orientation/)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Touch Events

- URL: [https://www.w3.org/TR/touch-events/](https://www.w3.org/TR/touch-events/)
- Crawled version: [Editor's Draft](https://w3c.github.io/touch-events/)
- Repository: [GitHub w3c/touch-events](https://github.com/w3c/touch-events)
- Spec title: *INS* Touch Events / *DEL* Touch Events - Level 2
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## User Timing Level 2

- URL: [https://www.w3.org/TR/user-timing-2/](https://www.w3.org/TR/user-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/user-timing/)
- Repository: [GitHub w3c/user-timing](https://github.com/w3c/user-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Vibration API (Second Edition)

- URL: [https://www.w3.org/TR/vibration/](https://www.w3.org/TR/vibration/)
- Crawled version: [Editor's Draft](https://w3c.github.io/vibration/)
- Repository: [GitHub w3c/vibration](https://github.com/w3c/vibration)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Wake Lock API

- URL: [https://www.w3.org/TR/wake-lock/](https://www.w3.org/TR/wake-lock/)
- Crawled version: [Editor's Draft](https://w3c.github.io/wake-lock/)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


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
- Unknown WebIDL names used: *INS* Map


## Web MIDI API

- URL: [https://www.w3.org/TR/webmidi/](https://www.w3.org/TR/webmidi/)
- Crawled version: [Editor's Draft](http://webaudio.github.io/web-midi-api/)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## WebXR Device API

- URL: [https://immersive-web.github.io/webxr/](https://immersive-web.github.io/webxr/)
- Crawled version: [Initial URL](https://immersive-web.github.io/webxr/)
- Unknown WebIDL names used: *INS* DOMHighResTimeStamp
- Missing references for WebIDL names: *DEL* DOMHighResTimeStamp


