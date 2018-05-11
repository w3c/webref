% Diff between report from "May 11, 2018" and reference report from "May 10, 2018"
% Reffy
% May 11, 2018

## Audio Output Devices API

- URL: [https://www.w3.org/TR/audio-output/](https://www.w3.org/TR/audio-output/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-output/)
- Repository: [GitHub w3c/mediacapture-output](https://github.com/w3c/mediacapture-output)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020142.445429:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c593780 logging::LogMessage::~LogMessage()
#2 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#3 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#7 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#8 0x557c5c2bff24 service_manager::Main()
#9 0x557c5c2b4f14 content::ContentMain()
#10 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557c603c4a42 headless::HeadlessBrowserMain()
#12 0x557c5c2bcf9d headless::HeadlessShellMain()
#13 0x557c5a91b1ac ChromeMain
#14 0x7faf165882e1 __libc_start_main
#15 0x557c5a91b02a _start

Received signal 6
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c57a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faf1c4e50c0 <unknown>
#3 0x7faf1659afff gsignal
#4 0x7faf1659c42a abort
#5 0x557c5c579105 base::debug::BreakDebugger()
#6 0x557c5c593bca logging::LogMessage::~LogMessage()
#7 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#8 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#12 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#13 0x557c5c2bff24 service_manager::Main()
#14 0x557c5c2b4f14 content::ContentMain()
#15 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557c603c4a42 headless::HeadlessBrowserMain()
#17 0x557c5c2bcf9d headless::HeadlessShellMain()
#18 0x557c5a91b1ac ChromeMain
#19 0x7faf165882e1 __libc_start_main
#20 0x557c5a91b02a _start
  r8: 0000000000000000  r9: 00007fff298ad580 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff298adc78 r13: 0000000000000161 r14: 00007fff298adc80 r15: 00007fff298ad819
  di: 0000000000000002  si: 00007fff298ad580  bp: 00007fff298ad7c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007faf1659afff  sp: 00007fff298ad5f8
  ip: 00007faf1659afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020142.445429:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c593780 logging::LogMessage::~LogMessage()
#2 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#3 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#7 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#8 0x557c5c2bff24 service_manager::Main()
#9 0x557c5c2b4f14 content::ContentMain()
#10 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x557c603c4a42 headless::HeadlessBrowserMain()
#12 0x557c5c2bcf9d headless::HeadlessShellMain()
#13 0x557c5a91b1ac ChromeMain
#14 0x7faf165882e1 __libc_start_main
#15 0x557c5a91b02a _start

Received signal 6
#0 0x557c5c57ab0c base::debug::StackTrace::StackTrace()
#1 0x557c5c57a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7faf1c4e50c0 <unknown>
#3 0x7faf1659afff gsignal
#4 0x7faf1659c42a abort
#5 0x557c5c579105 base::debug::BreakDebugger()
#6 0x557c5c593bca logging::LogMessage::~LogMessage()
#7 0x557c5b6232b1 content::ZygoteHostImpl::Init()
#8 0x557c5b295c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x557c5b29ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x557c603c59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x557c5c2b5a00 content::RunNamedProcessTypeMain()
#12 0x557c5c2b62e8 content::ContentMainRunnerImpl::Run()
#13 0x557c5c2bff24 service_manager::Main()
#14 0x557c5c2b4f14 content::ContentMain()
#15 0x557c603c49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x557c603c4a42 headless::HeadlessBrowserMain()
#17 0x557c5c2bcf9d headless::HeadlessShellMain()
#18 0x557c5a91b1ac ChromeMain
#19 0x7faf165882e1 __libc_start_main
#20 0x557c5a91b02a _start
  r8: 0000000000000000  r9: 00007fff298ad580 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff298adc78 r13: 0000000000000161 r14: 00007fff298adc80 r15: 00007fff298ad819
  di: 0000000000000002  si: 00007fff298ad580  bp: 00007fff298ad7c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007faf1659afff  sp: 00007fff298ad5f8
  ip: 00007faf1659afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Battery Status API

- URL: [https://www.w3.org/TR/battery-status/](https://www.w3.org/TR/battery-status/)
- Crawled version: [Editor's Draft](https://w3c.github.io/battery/)
- Repository: [GitHub w3c/battery](https://github.com/w3c/battery)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020139.705293:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4fd780 logging::LogMessage::~LogMessage()
#2 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#3 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561eba21fa00 content::RunNamedProcessTypeMain()
#7 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#8 0x561eba229f24 service_manager::Main()
#9 0x561eba21ef14 content::ContentMain()
#10 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561ebe32ea42 headless::HeadlessBrowserMain()
#12 0x561eba226f9d headless::HeadlessShellMain()
#13 0x561eb88851ac ChromeMain
#14 0x7f05f96942e1 __libc_start_main
#15 0x561eb888502a _start

Received signal 6
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4e4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f05ff5f10c0 <unknown>
#3 0x7f05f96a6fff gsignal
#4 0x7f05f96a842a abort
#5 0x561eba4e3105 base::debug::BreakDebugger()
#6 0x561eba4fdbca logging::LogMessage::~LogMessage()
#7 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#8 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561eba21fa00 content::RunNamedProcessTypeMain()
#12 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#13 0x561eba229f24 service_manager::Main()
#14 0x561eba21ef14 content::ContentMain()
#15 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561ebe32ea42 headless::HeadlessBrowserMain()
#17 0x561eba226f9d headless::HeadlessShellMain()
#18 0x561eb88851ac ChromeMain
#19 0x7f05f96942e1 __libc_start_main
#20 0x561eb888502a _start
  r8: 0000000000000000  r9: 00007ffc5ef19730 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5ef19e28 r13: 0000000000000161 r14: 00007ffc5ef19e30 r15: 00007ffc5ef199c9
  di: 0000000000000002  si: 00007ffc5ef19730  bp: 00007ffc5ef19970  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f05f96a6fff  sp: 00007ffc5ef197a8
  ip: 00007f05f96a6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020139.705293:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4fd780 logging::LogMessage::~LogMessage()
#2 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#3 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561eba21fa00 content::RunNamedProcessTypeMain()
#7 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#8 0x561eba229f24 service_manager::Main()
#9 0x561eba21ef14 content::ContentMain()
#10 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561ebe32ea42 headless::HeadlessBrowserMain()
#12 0x561eba226f9d headless::HeadlessShellMain()
#13 0x561eb88851ac ChromeMain
#14 0x7f05f96942e1 __libc_start_main
#15 0x561eb888502a _start

Received signal 6
#0 0x561eba4e4b0c base::debug::StackTrace::StackTrace()
#1 0x561eba4e4671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f05ff5f10c0 <unknown>
#3 0x7f05f96a6fff gsignal
#4 0x7f05f96a842a abort
#5 0x561eba4e3105 base::debug::BreakDebugger()
#6 0x561eba4fdbca logging::LogMessage::~LogMessage()
#7 0x561eb958d2b1 content::ZygoteHostImpl::Init()
#8 0x561eb91ffc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561eb9205a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561ebe32f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561eba21fa00 content::RunNamedProcessTypeMain()
#12 0x561eba2202e8 content::ContentMainRunnerImpl::Run()
#13 0x561eba229f24 service_manager::Main()
#14 0x561eba21ef14 content::ContentMain()
#15 0x561ebe32e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561ebe32ea42 headless::HeadlessBrowserMain()
#17 0x561eba226f9d headless::HeadlessShellMain()
#18 0x561eb88851ac ChromeMain
#19 0x7f05f96942e1 __libc_start_main
#20 0x561eb888502a _start
  r8: 0000000000000000  r9: 00007ffc5ef19730 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc5ef19e28 r13: 0000000000000161 r14: 00007ffc5ef19e30 r15: 00007ffc5ef199c9
  di: 0000000000000002  si: 00007ffc5ef19730  bp: 00007ffc5ef19970  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f05f96a6fff  sp: 00007ffc5ef197a8
  ip: 00007f05f96a6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Beacon

- URL: [https://www.w3.org/TR/beacon/](https://www.w3.org/TR/beacon/)
- Crawled version: [Editor's Draft](https://w3c.github.io/beacon/)
- Repository: [GitHub w3c/beacon](https://github.com/w3c/beacon)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020139.784347:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x563374900780 logging::LogMessage::~LogMessage()
#2 0x5633739902b1 content::ZygoteHostImpl::Init()
#3 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563374622a00 content::RunNamedProcessTypeMain()
#7 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#8 0x56337462cf24 service_manager::Main()
#9 0x563374621f14 content::ContentMain()
#10 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563378731a42 headless::HeadlessBrowserMain()
#12 0x563374629f9d headless::HeadlessShellMain()
#13 0x563372c881ac ChromeMain
#14 0x7fec6498b2e1 __libc_start_main
#15 0x563372c8802a _start

Received signal 6
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x5633748e7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fec6a8e80c0 <unknown>
#3 0x7fec6499dfff gsignal
#4 0x7fec6499f42a abort
#5 0x5633748e6105 base::debug::BreakDebugger()
#6 0x563374900bca logging::LogMessage::~LogMessage()
#7 0x5633739902b1 content::ZygoteHostImpl::Init()
#8 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563374622a00 content::RunNamedProcessTypeMain()
#12 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#13 0x56337462cf24 service_manager::Main()
#14 0x563374621f14 content::ContentMain()
#15 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563378731a42 headless::HeadlessBrowserMain()
#17 0x563374629f9d headless::HeadlessShellMain()
#18 0x563372c881ac ChromeMain
#19 0x7fec6498b2e1 __libc_start_main
#20 0x563372c8802a _start
  r8: 0000000000000000  r9: 00007fffd3574480 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd3574b78 r13: 0000000000000161 r14: 00007fffd3574b80 r15: 00007fffd3574719
  di: 0000000000000002  si: 00007fffd3574480  bp: 00007fffd35746c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec6499dfff  sp: 00007fffd35744f8
  ip: 00007fec6499dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020139.784347:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x563374900780 logging::LogMessage::~LogMessage()
#2 0x5633739902b1 content::ZygoteHostImpl::Init()
#3 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563374622a00 content::RunNamedProcessTypeMain()
#7 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#8 0x56337462cf24 service_manager::Main()
#9 0x563374621f14 content::ContentMain()
#10 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563378731a42 headless::HeadlessBrowserMain()
#12 0x563374629f9d headless::HeadlessShellMain()
#13 0x563372c881ac ChromeMain
#14 0x7fec6498b2e1 __libc_start_main
#15 0x563372c8802a _start

Received signal 6
#0 0x5633748e7b0c base::debug::StackTrace::StackTrace()
#1 0x5633748e7671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fec6a8e80c0 <unknown>
#3 0x7fec6499dfff gsignal
#4 0x7fec6499f42a abort
#5 0x5633748e6105 base::debug::BreakDebugger()
#6 0x563374900bca logging::LogMessage::~LogMessage()
#7 0x5633739902b1 content::ZygoteHostImpl::Init()
#8 0x563373602c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563373608a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5633787329a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563374622a00 content::RunNamedProcessTypeMain()
#12 0x5633746232e8 content::ContentMainRunnerImpl::Run()
#13 0x56337462cf24 service_manager::Main()
#14 0x563374621f14 content::ContentMain()
#15 0x5633787319b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563378731a42 headless::HeadlessBrowserMain()
#17 0x563374629f9d headless::HeadlessShellMain()
#18 0x563372c881ac ChromeMain
#19 0x7fec6498b2e1 __libc_start_main
#20 0x563372c8802a _start
  r8: 0000000000000000  r9: 00007fffd3574480 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffd3574b78 r13: 0000000000000161 r14: 00007fffd3574b80 r15: 00007fffd3574719
  di: 0000000000000002  si: 00007fffd3574480  bp: 00007fffd35746c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec6499dfff  sp: 00007fffd35744f8
  ip: 00007fec6499dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Cooperative Scheduling of Background Tasks

- URL: [https://www.w3.org/TR/requestidlecallback/](https://www.w3.org/TR/requestidlecallback/)
- Crawled version: [Editor's Draft](https://w3c.github.io/requestidlecallback/)
- Repository: [GitHub w3c/requestidlecallback](https://github.com/w3c/requestidlecallback)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020221.083255:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794c3780 logging::LogMessage::~LogMessage()
#2 0x55fb785532b1 content::ZygoteHostImpl::Init()
#3 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#7 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55fb791eff24 service_manager::Main()
#9 0x55fb791e4f14 content::ContentMain()
#10 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#12 0x55fb791ecf9d headless::HeadlessShellMain()
#13 0x55fb7784b1ac ChromeMain
#14 0x7f77ea2b72e1 __libc_start_main
#15 0x55fb7784b02a _start

Received signal 6
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f77f02140c0 <unknown>
#3 0x7f77ea2c9fff gsignal
#4 0x7f77ea2cb42a abort
#5 0x55fb794a9105 base::debug::BreakDebugger()
#6 0x55fb794c3bca logging::LogMessage::~LogMessage()
#7 0x55fb785532b1 content::ZygoteHostImpl::Init()
#8 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#12 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55fb791eff24 service_manager::Main()
#14 0x55fb791e4f14 content::ContentMain()
#15 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#17 0x55fb791ecf9d headless::HeadlessShellMain()
#18 0x55fb7784b1ac ChromeMain
#19 0x7f77ea2b72e1 __libc_start_main
#20 0x55fb7784b02a _start
  r8: 0000000000000000  r9: 00007fffc7286ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc72871a8 r13: 0000000000000161 r14: 00007fffc72871b0 r15: 00007fffc7286d49
  di: 0000000000000002  si: 00007fffc7286ab0  bp: 00007fffc7286cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f77ea2c9fff  sp: 00007fffc7286b28
  ip: 00007f77ea2c9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020221.083255:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794c3780 logging::LogMessage::~LogMessage()
#2 0x55fb785532b1 content::ZygoteHostImpl::Init()
#3 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#7 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#8 0x55fb791eff24 service_manager::Main()
#9 0x55fb791e4f14 content::ContentMain()
#10 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#12 0x55fb791ecf9d headless::HeadlessShellMain()
#13 0x55fb7784b1ac ChromeMain
#14 0x7f77ea2b72e1 __libc_start_main
#15 0x55fb7784b02a _start

Received signal 6
#0 0x55fb794aab0c base::debug::StackTrace::StackTrace()
#1 0x55fb794aa671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f77f02140c0 <unknown>
#3 0x7f77ea2c9fff gsignal
#4 0x7f77ea2cb42a abort
#5 0x55fb794a9105 base::debug::BreakDebugger()
#6 0x55fb794c3bca logging::LogMessage::~LogMessage()
#7 0x55fb785532b1 content::ZygoteHostImpl::Init()
#8 0x55fb781c5c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fb781cba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fb7d2f59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fb791e5a00 content::RunNamedProcessTypeMain()
#12 0x55fb791e62e8 content::ContentMainRunnerImpl::Run()
#13 0x55fb791eff24 service_manager::Main()
#14 0x55fb791e4f14 content::ContentMain()
#15 0x55fb7d2f49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fb7d2f4a42 headless::HeadlessBrowserMain()
#17 0x55fb791ecf9d headless::HeadlessShellMain()
#18 0x55fb7784b1ac ChromeMain
#19 0x7f77ea2b72e1 __libc_start_main
#20 0x55fb7784b02a _start
  r8: 0000000000000000  r9: 00007fffc7286ab0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffc72871a8 r13: 0000000000000161 r14: 00007fffc72871b0 r15: 00007fffc7286d49
  di: 0000000000000002  si: 00007fffc7286ab0  bp: 00007fffc7286cf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f77ea2c9fff  sp: 00007fffc7286b28
  ip: 00007f77ea2c9fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## DOM Parsing and Serialization

- URL: [https://www.w3.org/TR/DOM-Parsing/](https://www.w3.org/TR/DOM-Parsing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/DOM-Parsing/)
- Repository: [GitHub w3c/DOM-Parsing](https://github.com/w3c/DOM-Parsing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020111.689057:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ad9780 logging::LogMessage::~LogMessage()
#2 0x55b904b692b1 content::ZygoteHostImpl::Init()
#3 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b9057fba00 content::RunNamedProcessTypeMain()
#7 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b905805f24 service_manager::Main()
#9 0x55b9057faf14 content::ContentMain()
#10 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b90990aa42 headless::HeadlessBrowserMain()
#12 0x55b905802f9d headless::HeadlessShellMain()
#13 0x55b903e611ac ChromeMain
#14 0x7f39022132e1 __libc_start_main
#15 0x55b903e6102a _start

Received signal 6
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ac0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f39081700c0 <unknown>
#3 0x7f3902225fff gsignal
#4 0x7f390222742a abort
#5 0x55b905abf105 base::debug::BreakDebugger()
#6 0x55b905ad9bca logging::LogMessage::~LogMessage()
#7 0x55b904b692b1 content::ZygoteHostImpl::Init()
#8 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b9057fba00 content::RunNamedProcessTypeMain()
#12 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b905805f24 service_manager::Main()
#14 0x55b9057faf14 content::ContentMain()
#15 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b90990aa42 headless::HeadlessBrowserMain()
#17 0x55b905802f9d headless::HeadlessShellMain()
#18 0x55b903e611ac ChromeMain
#19 0x7f39022132e1 __libc_start_main
#20 0x55b903e6102a _start
  r8: 0000000000000000  r9: 00007ffcd602b8c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd602bfb8 r13: 0000000000000161 r14: 00007ffcd602bfc0 r15: 00007ffcd602bb59
  di: 0000000000000002  si: 00007ffcd602b8c0  bp: 00007ffcd602bb00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3902225fff  sp: 00007ffcd602b938
  ip: 00007f3902225fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020111.689057:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ad9780 logging::LogMessage::~LogMessage()
#2 0x55b904b692b1 content::ZygoteHostImpl::Init()
#3 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b9057fba00 content::RunNamedProcessTypeMain()
#7 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b905805f24 service_manager::Main()
#9 0x55b9057faf14 content::ContentMain()
#10 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b90990aa42 headless::HeadlessBrowserMain()
#12 0x55b905802f9d headless::HeadlessShellMain()
#13 0x55b903e611ac ChromeMain
#14 0x7f39022132e1 __libc_start_main
#15 0x55b903e6102a _start

Received signal 6
#0 0x55b905ac0b0c base::debug::StackTrace::StackTrace()
#1 0x55b905ac0671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f39081700c0 <unknown>
#3 0x7f3902225fff gsignal
#4 0x7f390222742a abort
#5 0x55b905abf105 base::debug::BreakDebugger()
#6 0x55b905ad9bca logging::LogMessage::~LogMessage()
#7 0x55b904b692b1 content::ZygoteHostImpl::Init()
#8 0x55b9047dbc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b9047e1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b90990b9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b9057fba00 content::RunNamedProcessTypeMain()
#12 0x55b9057fc2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b905805f24 service_manager::Main()
#14 0x55b9057faf14 content::ContentMain()
#15 0x55b90990a9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b90990aa42 headless::HeadlessBrowserMain()
#17 0x55b905802f9d headless::HeadlessShellMain()
#18 0x55b903e611ac ChromeMain
#19 0x7f39022132e1 __libc_start_main
#20 0x55b903e6102a _start
  r8: 0000000000000000  r9: 00007ffcd602b8c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd602bfb8 r13: 0000000000000161 r14: 00007ffcd602bfc0 r15: 00007ffcd602bb59
  di: 0000000000000002  si: 00007ffcd602b8c0  bp: 00007ffcd602bb00  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f3902225fff  sp: 00007ffcd602b938
  ip: 00007f3902225fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Gamepad

- URL: [https://www.w3.org/TR/gamepad/](https://www.w3.org/TR/gamepad/)
- Crawled version: [Editor's Draft](https://w3c.github.io/gamepad/)
- Repository: [GitHub w3c/gamepad](https://github.com/w3c/gamepad)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020204.931274:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e8276780 logging::LogMessage::~LogMessage()
#2 0x5638e73062b1 content::ZygoteHostImpl::Init()
#3 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#7 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#8 0x5638e7fa2f24 service_manager::Main()
#9 0x5638e7f97f14 content::ContentMain()
#10 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#12 0x5638e7f9ff9d headless::HeadlessShellMain()
#13 0x5638e65fe1ac ChromeMain
#14 0x7f4d455b52e1 __libc_start_main
#15 0x5638e65fe02a _start

Received signal 6
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e825d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4d4b5120c0 <unknown>
#3 0x7f4d455c7fff gsignal
#4 0x7f4d455c942a abort
#5 0x5638e825c105 base::debug::BreakDebugger()
#6 0x5638e8276bca logging::LogMessage::~LogMessage()
#7 0x5638e73062b1 content::ZygoteHostImpl::Init()
#8 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#12 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#13 0x5638e7fa2f24 service_manager::Main()
#14 0x5638e7f97f14 content::ContentMain()
#15 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#17 0x5638e7f9ff9d headless::HeadlessShellMain()
#18 0x5638e65fe1ac ChromeMain
#19 0x7f4d455b52e1 __libc_start_main
#20 0x5638e65fe02a _start
  r8: 0000000000000000  r9: 00007ffce9e4dcd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce9e4e3c8 r13: 0000000000000161 r14: 00007ffce9e4e3d0 r15: 00007ffce9e4df69
  di: 0000000000000002  si: 00007ffce9e4dcd0  bp: 00007ffce9e4df10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4d455c7fff  sp: 00007ffce9e4dd48
  ip: 00007f4d455c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020204.931274:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e8276780 logging::LogMessage::~LogMessage()
#2 0x5638e73062b1 content::ZygoteHostImpl::Init()
#3 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#7 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#8 0x5638e7fa2f24 service_manager::Main()
#9 0x5638e7f97f14 content::ContentMain()
#10 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#12 0x5638e7f9ff9d headless::HeadlessShellMain()
#13 0x5638e65fe1ac ChromeMain
#14 0x7f4d455b52e1 __libc_start_main
#15 0x5638e65fe02a _start

Received signal 6
#0 0x5638e825db0c base::debug::StackTrace::StackTrace()
#1 0x5638e825d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4d4b5120c0 <unknown>
#3 0x7f4d455c7fff gsignal
#4 0x7f4d455c942a abort
#5 0x5638e825c105 base::debug::BreakDebugger()
#6 0x5638e8276bca logging::LogMessage::~LogMessage()
#7 0x5638e73062b1 content::ZygoteHostImpl::Init()
#8 0x5638e6f78c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5638e6f7ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5638ec0a89a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5638e7f98a00 content::RunNamedProcessTypeMain()
#12 0x5638e7f992e8 content::ContentMainRunnerImpl::Run()
#13 0x5638e7fa2f24 service_manager::Main()
#14 0x5638e7f97f14 content::ContentMain()
#15 0x5638ec0a79b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5638ec0a7a42 headless::HeadlessBrowserMain()
#17 0x5638e7f9ff9d headless::HeadlessShellMain()
#18 0x5638e65fe1ac ChromeMain
#19 0x7f4d455b52e1 __libc_start_main
#20 0x5638e65fe02a _start
  r8: 0000000000000000  r9: 00007ffce9e4dcd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce9e4e3c8 r13: 0000000000000161 r14: 00007ffce9e4e3d0 r15: 00007ffce9e4df69
  di: 0000000000000002  si: 00007ffce9e4dcd0  bp: 00007ffce9e4df10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f4d455c7fff  sp: 00007ffce9e4dd48
  ip: 00007f4d455c7fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## High Resolution Time Level 3

- URL: [https://www.w3.org/TR/hr-time-3/](https://www.w3.org/TR/hr-time-3/)
- Crawled version: [Editor's Draft](https://w3c.github.io/hr-time/)
- Repository: [GitHub w3c/hr-time](https://github.com/w3c/hr-time)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020204.952995:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d54780 logging::LogMessage::~LogMessage()
#2 0x55d495de42b1 content::ZygoteHostImpl::Init()
#3 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d496a76a00 content::RunNamedProcessTypeMain()
#7 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#8 0x55d496a80f24 service_manager::Main()
#9 0x55d496a75f14 content::ContentMain()
#10 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d49ab85a42 headless::HeadlessBrowserMain()
#12 0x55d496a7df9d headless::HeadlessShellMain()
#13 0x55d4950dc1ac ChromeMain
#14 0x7fcad6c5b2e1 __libc_start_main
#15 0x55d4950dc02a _start

Received signal 6
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d3b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcadcbb80c0 <unknown>
#3 0x7fcad6c6dfff gsignal
#4 0x7fcad6c6f42a abort
#5 0x55d496d3a105 base::debug::BreakDebugger()
#6 0x55d496d54bca logging::LogMessage::~LogMessage()
#7 0x55d495de42b1 content::ZygoteHostImpl::Init()
#8 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d496a76a00 content::RunNamedProcessTypeMain()
#12 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#13 0x55d496a80f24 service_manager::Main()
#14 0x55d496a75f14 content::ContentMain()
#15 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d49ab85a42 headless::HeadlessBrowserMain()
#17 0x55d496a7df9d headless::HeadlessShellMain()
#18 0x55d4950dc1ac ChromeMain
#19 0x7fcad6c5b2e1 __libc_start_main
#20 0x55d4950dc02a _start
  r8: 0000000000000000  r9: 00007ffd200ee8f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd200eefe8 r13: 0000000000000161 r14: 00007ffd200eeff0 r15: 00007ffd200eeb89
  di: 0000000000000002  si: 00007ffd200ee8f0  bp: 00007ffd200eeb30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcad6c6dfff  sp: 00007ffd200ee968
  ip: 00007fcad6c6dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020204.952995:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d54780 logging::LogMessage::~LogMessage()
#2 0x55d495de42b1 content::ZygoteHostImpl::Init()
#3 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d496a76a00 content::RunNamedProcessTypeMain()
#7 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#8 0x55d496a80f24 service_manager::Main()
#9 0x55d496a75f14 content::ContentMain()
#10 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d49ab85a42 headless::HeadlessBrowserMain()
#12 0x55d496a7df9d headless::HeadlessShellMain()
#13 0x55d4950dc1ac ChromeMain
#14 0x7fcad6c5b2e1 __libc_start_main
#15 0x55d4950dc02a _start

Received signal 6
#0 0x55d496d3bb0c base::debug::StackTrace::StackTrace()
#1 0x55d496d3b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fcadcbb80c0 <unknown>
#3 0x7fcad6c6dfff gsignal
#4 0x7fcad6c6f42a abort
#5 0x55d496d3a105 base::debug::BreakDebugger()
#6 0x55d496d54bca logging::LogMessage::~LogMessage()
#7 0x55d495de42b1 content::ZygoteHostImpl::Init()
#8 0x55d495a56c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d495a5ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d49ab869a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d496a76a00 content::RunNamedProcessTypeMain()
#12 0x55d496a772e8 content::ContentMainRunnerImpl::Run()
#13 0x55d496a80f24 service_manager::Main()
#14 0x55d496a75f14 content::ContentMain()
#15 0x55d49ab859b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d49ab85a42 headless::HeadlessBrowserMain()
#17 0x55d496a7df9d headless::HeadlessShellMain()
#18 0x55d4950dc1ac ChromeMain
#19 0x7fcad6c5b2e1 __libc_start_main
#20 0x55d4950dc02a _start
  r8: 0000000000000000  r9: 00007ffd200ee8f0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd200eefe8 r13: 0000000000000161 r14: 00007ffd200eeff0 r15: 00007ffd200eeb89
  di: 0000000000000002  si: 00007ffd200ee8f0  bp: 00007ffd200eeb30  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fcad6c6dfff  sp: 00007ffd200ee968
  ip: 00007fcad6c6dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## HTML Media Capture

- URL: [https://www.w3.org/TR/html-media-capture/](https://www.w3.org/TR/html-media-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/html-media-capture/)
- Repository: [GitHub w3c/html-media-capture](https://github.com/w3c/html-media-capture)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020204.981542:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8db780 logging::LogMessage::~LogMessage()
#2 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#3 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5616be5fda00 content::RunNamedProcessTypeMain()
#7 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5616be607f24 service_manager::Main()
#9 0x5616be5fcf14 content::ContentMain()
#10 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5616c270ca42 headless::HeadlessBrowserMain()
#12 0x5616be604f9d headless::HeadlessShellMain()
#13 0x5616bcc631ac ChromeMain
#14 0x7f92dab062e1 __libc_start_main
#15 0x5616bcc6302a _start

Received signal 6
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f92e0a630c0 <unknown>
#3 0x7f92dab18fff gsignal
#4 0x7f92dab1a42a abort
#5 0x5616be8c1105 base::debug::BreakDebugger()
#6 0x5616be8dbbca logging::LogMessage::~LogMessage()
#7 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#8 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5616be5fda00 content::RunNamedProcessTypeMain()
#12 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5616be607f24 service_manager::Main()
#14 0x5616be5fcf14 content::ContentMain()
#15 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5616c270ca42 headless::HeadlessBrowserMain()
#17 0x5616be604f9d headless::HeadlessShellMain()
#18 0x5616bcc631ac ChromeMain
#19 0x7f92dab062e1 __libc_start_main
#20 0x5616bcc6302a _start
  r8: 0000000000000000  r9: 00007ffda2a19240 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda2a19938 r13: 0000000000000161 r14: 00007ffda2a19940 r15: 00007ffda2a194d9
  di: 0000000000000002  si: 00007ffda2a19240  bp: 00007ffda2a19480  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92dab18fff  sp: 00007ffda2a192b8
  ip: 00007f92dab18fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020204.981542:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8db780 logging::LogMessage::~LogMessage()
#2 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#3 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5616be5fda00 content::RunNamedProcessTypeMain()
#7 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5616be607f24 service_manager::Main()
#9 0x5616be5fcf14 content::ContentMain()
#10 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5616c270ca42 headless::HeadlessBrowserMain()
#12 0x5616be604f9d headless::HeadlessShellMain()
#13 0x5616bcc631ac ChromeMain
#14 0x7f92dab062e1 __libc_start_main
#15 0x5616bcc6302a _start

Received signal 6
#0 0x5616be8c2b0c base::debug::StackTrace::StackTrace()
#1 0x5616be8c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f92e0a630c0 <unknown>
#3 0x7f92dab18fff gsignal
#4 0x7f92dab1a42a abort
#5 0x5616be8c1105 base::debug::BreakDebugger()
#6 0x5616be8dbbca logging::LogMessage::~LogMessage()
#7 0x5616bd96b2b1 content::ZygoteHostImpl::Init()
#8 0x5616bd5ddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5616bd5e3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5616c270d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5616be5fda00 content::RunNamedProcessTypeMain()
#12 0x5616be5fe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5616be607f24 service_manager::Main()
#14 0x5616be5fcf14 content::ContentMain()
#15 0x5616c270c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5616c270ca42 headless::HeadlessBrowserMain()
#17 0x5616be604f9d headless::HeadlessShellMain()
#18 0x5616bcc631ac ChromeMain
#19 0x7f92dab062e1 __libc_start_main
#20 0x5616bcc6302a _start
  r8: 0000000000000000  r9: 00007ffda2a19240 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffda2a19938 r13: 0000000000000161 r14: 00007ffda2a19940 r15: 00007ffda2a194d9
  di: 0000000000000002  si: 00007ffda2a19240  bp: 00007ffda2a19480  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f92dab18fff  sp: 00007ffda2a192b8
  ip: 00007f92dab18fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://w3c.github.io/editing/contentEditable.html

- URL: [https://w3c.github.io/editing/contentEditable.html](https://w3c.github.io/editing/contentEditable.html)
- Crawled version: [Initial URL](https://w3c.github.io/editing/contentEditable.html)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020241.524603:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a4006780 logging::LogMessage::~LogMessage()
#2 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#3 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#7 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4a3d32f24 service_manager::Main()
#9 0x55b4a3d27f14 content::ContentMain()
#10 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#12 0x55b4a3d2ff9d headless::HeadlessShellMain()
#13 0x55b4a238e1ac ChromeMain
#14 0x7fc69f5302e1 __libc_start_main
#15 0x55b4a238e02a _start

Received signal 6
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a3fed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc6a548d0c0 <unknown>
#3 0x7fc69f542fff gsignal
#4 0x7fc69f54442a abort
#5 0x55b4a3fec105 base::debug::BreakDebugger()
#6 0x55b4a4006bca logging::LogMessage::~LogMessage()
#7 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#8 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#12 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4a3d32f24 service_manager::Main()
#14 0x55b4a3d27f14 content::ContentMain()
#15 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#17 0x55b4a3d2ff9d headless::HeadlessShellMain()
#18 0x55b4a238e1ac ChromeMain
#19 0x7fc69f5302e1 __libc_start_main
#20 0x55b4a238e02a _start
  r8: 0000000000000000  r9: 00007fffea88a4e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffea88abd8 r13: 0000000000000161 r14: 00007fffea88abe0 r15: 00007fffea88a779
  di: 0000000000000002  si: 00007fffea88a4e0  bp: 00007fffea88a720  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc69f542fff  sp: 00007fffea88a558
  ip: 00007fc69f542fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020241.524603:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a4006780 logging::LogMessage::~LogMessage()
#2 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#3 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#7 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4a3d32f24 service_manager::Main()
#9 0x55b4a3d27f14 content::ContentMain()
#10 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#12 0x55b4a3d2ff9d headless::HeadlessShellMain()
#13 0x55b4a238e1ac ChromeMain
#14 0x7fc69f5302e1 __libc_start_main
#15 0x55b4a238e02a _start

Received signal 6
#0 0x55b4a3fedb0c base::debug::StackTrace::StackTrace()
#1 0x55b4a3fed671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc6a548d0c0 <unknown>
#3 0x7fc69f542fff gsignal
#4 0x7fc69f54442a abort
#5 0x55b4a3fec105 base::debug::BreakDebugger()
#6 0x55b4a4006bca logging::LogMessage::~LogMessage()
#7 0x55b4a30962b1 content::ZygoteHostImpl::Init()
#8 0x55b4a2d08c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4a2d0ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4a7e389a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4a3d28a00 content::RunNamedProcessTypeMain()
#12 0x55b4a3d292e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4a3d32f24 service_manager::Main()
#14 0x55b4a3d27f14 content::ContentMain()
#15 0x55b4a7e379b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4a7e37a42 headless::HeadlessBrowserMain()
#17 0x55b4a3d2ff9d headless::HeadlessShellMain()
#18 0x55b4a238e1ac ChromeMain
#19 0x7fc69f5302e1 __libc_start_main
#20 0x55b4a238e02a _start
  r8: 0000000000000000  r9: 00007fffea88a4e0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fffea88abd8 r13: 0000000000000161 r14: 00007fffea88abe0 r15: 00007fffea88a779
  di: 0000000000000002  si: 00007fffea88a4e0  bp: 00007fffea88a720  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc69f542fff  sp: 00007fffea88a558
  ip: 00007fc69f542fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://w3c.github.io/web-nfc/

- URL: [https://w3c.github.io/web-nfc/](https://w3c.github.io/web-nfc/)
- Crawled version: [Initial URL](https://w3c.github.io/web-nfc/)
- Repository: [GitHub w3c/web-nfc](https://github.com/w3c/web-nfc)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:255:14)
    at ChildProcess.helper.addEventListener (/home/dom/github.com/reffy/node_modules/puppeteer/lib/Launcher.js:245:60)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12) / *DEL* Error: Failed to launch chrome!
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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/aom/spec/

- URL: [https://wicg.github.io/aom/spec/](https://wicg.github.io/aom/spec/)
- Crawled version: [Initial URL](https://wicg.github.io/aom/spec/)
- Repository: [GitHub wicg/aom](https://github.com/wicg/aom)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020254.679587:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e90b780 logging::LogMessage::~LogMessage()
#2 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#3 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561f5e62da00 content::RunNamedProcessTypeMain()
#7 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#8 0x561f5e637f24 service_manager::Main()
#9 0x561f5e62cf14 content::ContentMain()
#10 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561f6273ca42 headless::HeadlessBrowserMain()
#12 0x561f5e634f9d headless::HeadlessShellMain()
#13 0x561f5cc931ac ChromeMain
#14 0x7fc20704b2e1 __libc_start_main
#15 0x561f5cc9302a _start

Received signal 6
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e8f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc20cfa80c0 <unknown>
#3 0x7fc20705dfff gsignal
#4 0x7fc20705f42a abort
#5 0x561f5e8f1105 base::debug::BreakDebugger()
#6 0x561f5e90bbca logging::LogMessage::~LogMessage()
#7 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#8 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561f5e62da00 content::RunNamedProcessTypeMain()
#12 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#13 0x561f5e637f24 service_manager::Main()
#14 0x561f5e62cf14 content::ContentMain()
#15 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561f6273ca42 headless::HeadlessBrowserMain()
#17 0x561f5e634f9d headless::HeadlessShellMain()
#18 0x561f5cc931ac ChromeMain
#19 0x7fc20704b2e1 __libc_start_main
#20 0x561f5cc9302a _start
  r8: 0000000000000000  r9: 00007ffca1595520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffca1595c18 r13: 0000000000000161 r14: 00007ffca1595c20 r15: 00007ffca15957b9
  di: 0000000000000002  si: 00007ffca1595520  bp: 00007ffca1595760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc20705dfff  sp: 00007ffca1595598
  ip: 00007fc20705dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020254.679587:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e90b780 logging::LogMessage::~LogMessage()
#2 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#3 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561f5e62da00 content::RunNamedProcessTypeMain()
#7 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#8 0x561f5e637f24 service_manager::Main()
#9 0x561f5e62cf14 content::ContentMain()
#10 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561f6273ca42 headless::HeadlessBrowserMain()
#12 0x561f5e634f9d headless::HeadlessShellMain()
#13 0x561f5cc931ac ChromeMain
#14 0x7fc20704b2e1 __libc_start_main
#15 0x561f5cc9302a _start

Received signal 6
#0 0x561f5e8f2b0c base::debug::StackTrace::StackTrace()
#1 0x561f5e8f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc20cfa80c0 <unknown>
#3 0x7fc20705dfff gsignal
#4 0x7fc20705f42a abort
#5 0x561f5e8f1105 base::debug::BreakDebugger()
#6 0x561f5e90bbca logging::LogMessage::~LogMessage()
#7 0x561f5d99b2b1 content::ZygoteHostImpl::Init()
#8 0x561f5d60dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561f5d613a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561f6273d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561f5e62da00 content::RunNamedProcessTypeMain()
#12 0x561f5e62e2e8 content::ContentMainRunnerImpl::Run()
#13 0x561f5e637f24 service_manager::Main()
#14 0x561f5e62cf14 content::ContentMain()
#15 0x561f6273c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561f6273ca42 headless::HeadlessBrowserMain()
#17 0x561f5e634f9d headless::HeadlessShellMain()
#18 0x561f5cc931ac ChromeMain
#19 0x7fc20704b2e1 __libc_start_main
#20 0x561f5cc9302a _start
  r8: 0000000000000000  r9: 00007ffca1595520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffca1595c18 r13: 0000000000000161 r14: 00007ffca1595c20 r15: 00007ffca15957b9
  di: 0000000000000002  si: 00007ffca1595520  bp: 00007ffca1595760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc20705dfff  sp: 00007ffca1595598
  ip: 00007fc20705dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/InputDeviceCapabilities/

- URL: [https://wicg.github.io/InputDeviceCapabilities/](https://wicg.github.io/InputDeviceCapabilities/)
- Crawled version: [Initial URL](https://wicg.github.io/InputDeviceCapabilities/)
- Repository: [GitHub wicg/InputDeviceCapabilities](https://github.com/wicg/InputDeviceCapabilities)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020257.512023:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a7b0780 logging::LogMessage::~LogMessage()
#2 0x5614398402b1 content::ZygoteHostImpl::Init()
#3 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#7 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#8 0x56143a4dcf24 service_manager::Main()
#9 0x56143a4d1f14 content::ContentMain()
#10 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56143e5e1a42 headless::HeadlessBrowserMain()
#12 0x56143a4d9f9d headless::HeadlessShellMain()
#13 0x561438b381ac ChromeMain
#14 0x7f84669462e1 __libc_start_main
#15 0x561438b3802a _start

Received signal 6
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a797671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f846c8a30c0 <unknown>
#3 0x7f8466958fff gsignal
#4 0x7f846695a42a abort
#5 0x56143a796105 base::debug::BreakDebugger()
#6 0x56143a7b0bca logging::LogMessage::~LogMessage()
#7 0x5614398402b1 content::ZygoteHostImpl::Init()
#8 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#12 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#13 0x56143a4dcf24 service_manager::Main()
#14 0x56143a4d1f14 content::ContentMain()
#15 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56143e5e1a42 headless::HeadlessBrowserMain()
#17 0x56143a4d9f9d headless::HeadlessShellMain()
#18 0x561438b381ac ChromeMain
#19 0x7f84669462e1 __libc_start_main
#20 0x561438b3802a _start
  r8: 0000000000000000  r9: 00007ffc04b2e8b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc04b2efa8 r13: 0000000000000161 r14: 00007ffc04b2efb0 r15: 00007ffc04b2eb49
  di: 0000000000000002  si: 00007ffc04b2e8b0  bp: 00007ffc04b2eaf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8466958fff  sp: 00007ffc04b2e928
  ip: 00007f8466958fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020257.512023:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a7b0780 logging::LogMessage::~LogMessage()
#2 0x5614398402b1 content::ZygoteHostImpl::Init()
#3 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#7 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#8 0x56143a4dcf24 service_manager::Main()
#9 0x56143a4d1f14 content::ContentMain()
#10 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56143e5e1a42 headless::HeadlessBrowserMain()
#12 0x56143a4d9f9d headless::HeadlessShellMain()
#13 0x561438b381ac ChromeMain
#14 0x7f84669462e1 __libc_start_main
#15 0x561438b3802a _start

Received signal 6
#0 0x56143a797b0c base::debug::StackTrace::StackTrace()
#1 0x56143a797671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f846c8a30c0 <unknown>
#3 0x7f8466958fff gsignal
#4 0x7f846695a42a abort
#5 0x56143a796105 base::debug::BreakDebugger()
#6 0x56143a7b0bca logging::LogMessage::~LogMessage()
#7 0x5614398402b1 content::ZygoteHostImpl::Init()
#8 0x5614394b2c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5614394b8a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56143e5e29a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56143a4d2a00 content::RunNamedProcessTypeMain()
#12 0x56143a4d32e8 content::ContentMainRunnerImpl::Run()
#13 0x56143a4dcf24 service_manager::Main()
#14 0x56143a4d1f14 content::ContentMain()
#15 0x56143e5e19b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56143e5e1a42 headless::HeadlessBrowserMain()
#17 0x56143a4d9f9d headless::HeadlessShellMain()
#18 0x561438b381ac ChromeMain
#19 0x7f84669462e1 __libc_start_main
#20 0x561438b3802a _start
  r8: 0000000000000000  r9: 00007ffc04b2e8b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc04b2efa8 r13: 0000000000000161 r14: 00007ffc04b2efb0 r15: 00007ffc04b2eb49
  di: 0000000000000002  si: 00007ffc04b2e8b0  bp: 00007ffc04b2eaf0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f8466958fff  sp: 00007ffc04b2e928
  ip: 00007f8466958fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/netinfo/

- URL: [https://wicg.github.io/netinfo/](https://wicg.github.io/netinfo/)
- Crawled version: [Initial URL](https://wicg.github.io/netinfo/)
- Repository: [GitHub wicg/netinfo](https://github.com/wicg/netinfo)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020257.570159:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32e4780 logging::LogMessage::~LogMessage()
#2 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#3 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#7 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#8 0x55c0e3010f24 service_manager::Main()
#9 0x55c0e3005f14 content::ContentMain()
#10 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c0e7115a42 headless::HeadlessBrowserMain()
#12 0x55c0e300df9d headless::HeadlessShellMain()
#13 0x55c0e166c1ac ChromeMain
#14 0x7f85a6b272e1 __libc_start_main
#15 0x55c0e166c02a _start

Received signal 6
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32cb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f85aca840c0 <unknown>
#3 0x7f85a6b39fff gsignal
#4 0x7f85a6b3b42a abort
#5 0x55c0e32ca105 base::debug::BreakDebugger()
#6 0x55c0e32e4bca logging::LogMessage::~LogMessage()
#7 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#8 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#12 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#13 0x55c0e3010f24 service_manager::Main()
#14 0x55c0e3005f14 content::ContentMain()
#15 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c0e7115a42 headless::HeadlessBrowserMain()
#17 0x55c0e300df9d headless::HeadlessShellMain()
#18 0x55c0e166c1ac ChromeMain
#19 0x7f85a6b272e1 __libc_start_main
#20 0x55c0e166c02a _start
  r8: 0000000000000000  r9: 00007fff0f255ec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0f2565b8 r13: 0000000000000161 r14: 00007fff0f2565c0 r15: 00007fff0f256159
  di: 0000000000000002  si: 00007fff0f255ec0  bp: 00007fff0f256100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f85a6b39fff  sp: 00007fff0f255f38
  ip: 00007f85a6b39fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020257.570159:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32e4780 logging::LogMessage::~LogMessage()
#2 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#3 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#7 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#8 0x55c0e3010f24 service_manager::Main()
#9 0x55c0e3005f14 content::ContentMain()
#10 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55c0e7115a42 headless::HeadlessBrowserMain()
#12 0x55c0e300df9d headless::HeadlessShellMain()
#13 0x55c0e166c1ac ChromeMain
#14 0x7f85a6b272e1 __libc_start_main
#15 0x55c0e166c02a _start

Received signal 6
#0 0x55c0e32cbb0c base::debug::StackTrace::StackTrace()
#1 0x55c0e32cb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f85aca840c0 <unknown>
#3 0x7f85a6b39fff gsignal
#4 0x7f85a6b3b42a abort
#5 0x55c0e32ca105 base::debug::BreakDebugger()
#6 0x55c0e32e4bca logging::LogMessage::~LogMessage()
#7 0x55c0e23742b1 content::ZygoteHostImpl::Init()
#8 0x55c0e1fe6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55c0e1feca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55c0e71169a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55c0e3006a00 content::RunNamedProcessTypeMain()
#12 0x55c0e30072e8 content::ContentMainRunnerImpl::Run()
#13 0x55c0e3010f24 service_manager::Main()
#14 0x55c0e3005f14 content::ContentMain()
#15 0x55c0e71159b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55c0e7115a42 headless::HeadlessBrowserMain()
#17 0x55c0e300df9d headless::HeadlessShellMain()
#18 0x55c0e166c1ac ChromeMain
#19 0x7f85a6b272e1 __libc_start_main
#20 0x55c0e166c02a _start
  r8: 0000000000000000  r9: 00007fff0f255ec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff0f2565b8 r13: 0000000000000161 r14: 00007fff0f2565c0 r15: 00007fff0f256159
  di: 0000000000000002  si: 00007fff0f255ec0  bp: 00007fff0f256100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f85a6b39fff  sp: 00007fff0f255f38
  ip: 00007f85a6b39fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## https://wicg.github.io/web-share/

- URL: [https://wicg.github.io/web-share/](https://wicg.github.io/web-share/)
- Crawled version: [Initial URL](https://wicg.github.io/web-share/)
- Repository: [GitHub wicg/web-share](https://github.com/wicg/web-share)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020301.656870:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb5f780 logging::LogMessage::~LogMessage()
#2 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#3 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56014e881a00 content::RunNamedProcessTypeMain()
#7 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#8 0x56014e88bf24 service_manager::Main()
#9 0x56014e880f14 content::ContentMain()
#10 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560152990a42 headless::HeadlessBrowserMain()
#12 0x56014e888f9d headless::HeadlessShellMain()
#13 0x56014cee71ac ChromeMain
#14 0x7fa580c6f2e1 __libc_start_main
#15 0x56014cee702a _start

Received signal 6
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb46671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa586bcc0c0 <unknown>
#3 0x7fa580c81fff gsignal
#4 0x7fa580c8342a abort
#5 0x56014eb45105 base::debug::BreakDebugger()
#6 0x56014eb5fbca logging::LogMessage::~LogMessage()
#7 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#8 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56014e881a00 content::RunNamedProcessTypeMain()
#12 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#13 0x56014e88bf24 service_manager::Main()
#14 0x56014e880f14 content::ContentMain()
#15 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560152990a42 headless::HeadlessBrowserMain()
#17 0x56014e888f9d headless::HeadlessShellMain()
#18 0x56014cee71ac ChromeMain
#19 0x7fa580c6f2e1 __libc_start_main
#20 0x56014cee702a _start
  r8: 0000000000000000  r9: 00007ffce7673520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce7673c18 r13: 0000000000000161 r14: 00007ffce7673c20 r15: 00007ffce76737b9
  di: 0000000000000002  si: 00007ffce7673520  bp: 00007ffce7673760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa580c81fff  sp: 00007ffce7673598
  ip: 00007fa580c81fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020301.656870:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb5f780 logging::LogMessage::~LogMessage()
#2 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#3 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x56014e881a00 content::RunNamedProcessTypeMain()
#7 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#8 0x56014e88bf24 service_manager::Main()
#9 0x56014e880f14 content::ContentMain()
#10 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#11 0x560152990a42 headless::HeadlessBrowserMain()
#12 0x56014e888f9d headless::HeadlessShellMain()
#13 0x56014cee71ac ChromeMain
#14 0x7fa580c6f2e1 __libc_start_main
#15 0x56014cee702a _start

Received signal 6
#0 0x56014eb46b0c base::debug::StackTrace::StackTrace()
#1 0x56014eb46671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fa586bcc0c0 <unknown>
#3 0x7fa580c81fff gsignal
#4 0x7fa580c8342a abort
#5 0x56014eb45105 base::debug::BreakDebugger()
#6 0x56014eb5fbca logging::LogMessage::~LogMessage()
#7 0x56014dbef2b1 content::ZygoteHostImpl::Init()
#8 0x56014d861c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x56014d867a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5601529919a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x56014e881a00 content::RunNamedProcessTypeMain()
#12 0x56014e8822e8 content::ContentMainRunnerImpl::Run()
#13 0x56014e88bf24 service_manager::Main()
#14 0x56014e880f14 content::ContentMain()
#15 0x5601529909b9 headless::(anonymous namespace)::RunContentMain()
#16 0x560152990a42 headless::HeadlessBrowserMain()
#17 0x56014e888f9d headless::HeadlessShellMain()
#18 0x56014cee71ac ChromeMain
#19 0x7fa580c6f2e1 __libc_start_main
#20 0x56014cee702a _start
  r8: 0000000000000000  r9: 00007ffce7673520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffce7673c18 r13: 0000000000000161 r14: 00007ffce7673c20 r15: 00007ffce76737b9
  di: 0000000000000002  si: 00007ffce7673520  bp: 00007ffce7673760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa580c81fff  sp: 00007ffce7673598
  ip: 00007fa580c81fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Identifiers for WebRTC's Statistics API

- URL: [https://www.w3.org/TR/webrtc-stats/](https://www.w3.org/TR/webrtc-stats/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-stats/)
- Repository: [GitHub w3c/webrtc-stats](https://github.com/w3c/webrtc-stats)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020231.022334:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaed5780 logging::LogMessage::~LogMessage()
#2 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#3 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#7 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#8 0x55fdbac01f24 service_manager::Main()
#9 0x55fdbabf6f14 content::ContentMain()
#10 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fdbed06a42 headless::HeadlessBrowserMain()
#12 0x55fdbabfef9d headless::HeadlessShellMain()
#13 0x55fdb925d1ac ChromeMain
#14 0x7fb7f785a2e1 __libc_start_main
#15 0x55fdb925d02a _start

Received signal 6
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaebc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb7fd7b70c0 <unknown>
#3 0x7fb7f786cfff gsignal
#4 0x7fb7f786e42a abort
#5 0x55fdbaebb105 base::debug::BreakDebugger()
#6 0x55fdbaed5bca logging::LogMessage::~LogMessage()
#7 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#8 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#12 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#13 0x55fdbac01f24 service_manager::Main()
#14 0x55fdbabf6f14 content::ContentMain()
#15 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fdbed06a42 headless::HeadlessBrowserMain()
#17 0x55fdbabfef9d headless::HeadlessShellMain()
#18 0x55fdb925d1ac ChromeMain
#19 0x7fb7f785a2e1 __libc_start_main
#20 0x55fdb925d02a _start
  r8: 0000000000000000  r9: 00007fff05b74630 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff05b74d28 r13: 0000000000000161 r14: 00007fff05b74d30 r15: 00007fff05b748c9
  di: 0000000000000002  si: 00007fff05b74630  bp: 00007fff05b74870  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb7f786cfff  sp: 00007fff05b746a8
  ip: 00007fb7f786cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020231.022334:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaed5780 logging::LogMessage::~LogMessage()
#2 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#3 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#7 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#8 0x55fdbac01f24 service_manager::Main()
#9 0x55fdbabf6f14 content::ContentMain()
#10 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55fdbed06a42 headless::HeadlessBrowserMain()
#12 0x55fdbabfef9d headless::HeadlessShellMain()
#13 0x55fdb925d1ac ChromeMain
#14 0x7fb7f785a2e1 __libc_start_main
#15 0x55fdb925d02a _start

Received signal 6
#0 0x55fdbaebcb0c base::debug::StackTrace::StackTrace()
#1 0x55fdbaebc671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb7fd7b70c0 <unknown>
#3 0x7fb7f786cfff gsignal
#4 0x7fb7f786e42a abort
#5 0x55fdbaebb105 base::debug::BreakDebugger()
#6 0x55fdbaed5bca logging::LogMessage::~LogMessage()
#7 0x55fdb9f652b1 content::ZygoteHostImpl::Init()
#8 0x55fdb9bd7c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55fdb9bdda69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55fdbed079a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55fdbabf7a00 content::RunNamedProcessTypeMain()
#12 0x55fdbabf82e8 content::ContentMainRunnerImpl::Run()
#13 0x55fdbac01f24 service_manager::Main()
#14 0x55fdbabf6f14 content::ContentMain()
#15 0x55fdbed069b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55fdbed06a42 headless::HeadlessBrowserMain()
#17 0x55fdbabfef9d headless::HeadlessShellMain()
#18 0x55fdb925d1ac ChromeMain
#19 0x7fb7f785a2e1 __libc_start_main
#20 0x55fdb925d02a _start
  r8: 0000000000000000  r9: 00007fff05b74630 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff05b74d28 r13: 0000000000000161 r14: 00007fff05b74d30 r15: 00007fff05b748c9
  di: 0000000000000002  si: 00007fff05b74630  bp: 00007fff05b74870  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb7f786cfff  sp: 00007fff05b746a8
  ip: 00007fb7f786cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Input Events Level 1

- URL: [https://www.w3.org/TR/input-events-2/](https://www.w3.org/TR/input-events-2/)
- Crawled version: [Editor's Draft](https://rawgit.com/w3c/input-events/v1/index.html)
- Repository: [GitHub w3c/input-events](https://github.com/w3c/input-events)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020206.834981:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c20b780 logging::LogMessage::~LogMessage()
#2 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#3 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#7 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#8 0x556d2bf37f24 service_manager::Main()
#9 0x556d2bf2cf14 content::ContentMain()
#10 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556d3003ca42 headless::HeadlessBrowserMain()
#12 0x556d2bf34f9d headless::HeadlessShellMain()
#13 0x556d2a5931ac ChromeMain
#14 0x7fdd81ee42e1 __libc_start_main
#15 0x556d2a59302a _start

Received signal 6
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c1f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fdd87e410c0 <unknown>
#3 0x7fdd81ef6fff gsignal
#4 0x7fdd81ef842a abort
#5 0x556d2c1f1105 base::debug::BreakDebugger()
#6 0x556d2c20bbca logging::LogMessage::~LogMessage()
#7 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#8 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#12 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#13 0x556d2bf37f24 service_manager::Main()
#14 0x556d2bf2cf14 content::ContentMain()
#15 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556d3003ca42 headless::HeadlessBrowserMain()
#17 0x556d2bf34f9d headless::HeadlessShellMain()
#18 0x556d2a5931ac ChromeMain
#19 0x7fdd81ee42e1 __libc_start_main
#20 0x556d2a59302a _start
  r8: 0000000000000000  r9: 00007ffddca2d5c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffddca2dcb8 r13: 0000000000000161 r14: 00007ffddca2dcc0 r15: 00007ffddca2d859
  di: 0000000000000002  si: 00007ffddca2d5c0  bp: 00007ffddca2d800  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fdd81ef6fff  sp: 00007ffddca2d638
  ip: 00007fdd81ef6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020206.834981:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c20b780 logging::LogMessage::~LogMessage()
#2 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#3 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#7 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#8 0x556d2bf37f24 service_manager::Main()
#9 0x556d2bf2cf14 content::ContentMain()
#10 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556d3003ca42 headless::HeadlessBrowserMain()
#12 0x556d2bf34f9d headless::HeadlessShellMain()
#13 0x556d2a5931ac ChromeMain
#14 0x7fdd81ee42e1 __libc_start_main
#15 0x556d2a59302a _start

Received signal 6
#0 0x556d2c1f2b0c base::debug::StackTrace::StackTrace()
#1 0x556d2c1f2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fdd87e410c0 <unknown>
#3 0x7fdd81ef6fff gsignal
#4 0x7fdd81ef842a abort
#5 0x556d2c1f1105 base::debug::BreakDebugger()
#6 0x556d2c20bbca logging::LogMessage::~LogMessage()
#7 0x556d2b29b2b1 content::ZygoteHostImpl::Init()
#8 0x556d2af0dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556d2af13a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x556d3003d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556d2bf2da00 content::RunNamedProcessTypeMain()
#12 0x556d2bf2e2e8 content::ContentMainRunnerImpl::Run()
#13 0x556d2bf37f24 service_manager::Main()
#14 0x556d2bf2cf14 content::ContentMain()
#15 0x556d3003c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556d3003ca42 headless::HeadlessBrowserMain()
#17 0x556d2bf34f9d headless::HeadlessShellMain()
#18 0x556d2a5931ac ChromeMain
#19 0x7fdd81ee42e1 __libc_start_main
#20 0x556d2a59302a _start
  r8: 0000000000000000  r9: 00007ffddca2d5c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffddca2dcb8 r13: 0000000000000161 r14: 00007ffddca2dcc0 r15: 00007ffddca2d859
  di: 0000000000000002  si: 00007ffddca2d5c0  bp: 00007ffddca2d800  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fdd81ef6fff  sp: 00007ffddca2d638
  ip: 00007fdd81ef6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture and Streams

- URL: [https://www.w3.org/TR/mediacapture-streams/](https://www.w3.org/TR/mediacapture-streams/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-main/)
- Repository: [GitHub w3c/mediacapture-main](https://github.com/w3c/mediacapture-main)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020215.653148:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e94780 logging::LogMessage::~LogMessage()
#2 0x558677f242b1 content::ZygoteHostImpl::Init()
#3 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558678bb6a00 content::RunNamedProcessTypeMain()
#7 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#8 0x558678bc0f24 service_manager::Main()
#9 0x558678bb5f14 content::ContentMain()
#10 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55867ccc5a42 headless::HeadlessBrowserMain()
#12 0x558678bbdf9d headless::HeadlessShellMain()
#13 0x55867721c1ac ChromeMain
#14 0x7fbd6e4332e1 __libc_start_main
#15 0x55867721c02a _start

Received signal 6
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e7b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbd743900c0 <unknown>
#3 0x7fbd6e445fff gsignal
#4 0x7fbd6e44742a abort
#5 0x558678e7a105 base::debug::BreakDebugger()
#6 0x558678e94bca logging::LogMessage::~LogMessage()
#7 0x558677f242b1 content::ZygoteHostImpl::Init()
#8 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558678bb6a00 content::RunNamedProcessTypeMain()
#12 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#13 0x558678bc0f24 service_manager::Main()
#14 0x558678bb5f14 content::ContentMain()
#15 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55867ccc5a42 headless::HeadlessBrowserMain()
#17 0x558678bbdf9d headless::HeadlessShellMain()
#18 0x55867721c1ac ChromeMain
#19 0x7fbd6e4332e1 __libc_start_main
#20 0x55867721c02a _start
  r8: 0000000000000000  r9: 00007ffffb9d7060 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffb9d7758 r13: 0000000000000161 r14: 00007ffffb9d7760 r15: 00007ffffb9d72f9
  di: 0000000000000002  si: 00007ffffb9d7060  bp: 00007ffffb9d72a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbd6e445fff  sp: 00007ffffb9d70d8
  ip: 00007fbd6e445fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020215.653148:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e94780 logging::LogMessage::~LogMessage()
#2 0x558677f242b1 content::ZygoteHostImpl::Init()
#3 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558678bb6a00 content::RunNamedProcessTypeMain()
#7 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#8 0x558678bc0f24 service_manager::Main()
#9 0x558678bb5f14 content::ContentMain()
#10 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55867ccc5a42 headless::HeadlessBrowserMain()
#12 0x558678bbdf9d headless::HeadlessShellMain()
#13 0x55867721c1ac ChromeMain
#14 0x7fbd6e4332e1 __libc_start_main
#15 0x55867721c02a _start

Received signal 6
#0 0x558678e7bb0c base::debug::StackTrace::StackTrace()
#1 0x558678e7b671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbd743900c0 <unknown>
#3 0x7fbd6e445fff gsignal
#4 0x7fbd6e44742a abort
#5 0x558678e7a105 base::debug::BreakDebugger()
#6 0x558678e94bca logging::LogMessage::~LogMessage()
#7 0x558677f242b1 content::ZygoteHostImpl::Init()
#8 0x558677b96c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558677b9ca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55867ccc69a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558678bb6a00 content::RunNamedProcessTypeMain()
#12 0x558678bb72e8 content::ContentMainRunnerImpl::Run()
#13 0x558678bc0f24 service_manager::Main()
#14 0x558678bb5f14 content::ContentMain()
#15 0x55867ccc59b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55867ccc5a42 headless::HeadlessBrowserMain()
#17 0x558678bbdf9d headless::HeadlessShellMain()
#18 0x55867721c1ac ChromeMain
#19 0x7fbd6e4332e1 __libc_start_main
#20 0x55867721c02a _start
  r8: 0000000000000000  r9: 00007ffffb9d7060 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffffb9d7758 r13: 0000000000000161 r14: 00007ffffb9d7760 r15: 00007ffffb9d72f9
  di: 0000000000000002  si: 00007ffffb9d7060  bp: 00007ffffb9d72a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbd6e445fff  sp: 00007ffffb9d70d8
  ip: 00007fbd6e445fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture Depth Stream Extensions

- URL: [https://www.w3.org/TR/mediacapture-depth/](https://www.w3.org/TR/mediacapture-depth/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-depth/)
- Repository: [GitHub w3c/mediacapture-depth](https://github.com/w3c/mediacapture-depth)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020214.872359:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bf4780 logging::LogMessage::~LogMessage()
#2 0x560556c842b1 content::ZygoteHostImpl::Init()
#3 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560557916a00 content::RunNamedProcessTypeMain()
#7 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#8 0x560557920f24 service_manager::Main()
#9 0x560557915f14 content::ContentMain()
#10 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56055ba25a42 headless::HeadlessBrowserMain()
#12 0x56055791df9d headless::HeadlessShellMain()
#13 0x560555f7c1ac ChromeMain
#14 0x7fc58009b2e1 __libc_start_main
#15 0x560555f7c02a _start

Received signal 6
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bdb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc585ff80c0 <unknown>
#3 0x7fc5800adfff gsignal
#4 0x7fc5800af42a abort
#5 0x560557bda105 base::debug::BreakDebugger()
#6 0x560557bf4bca logging::LogMessage::~LogMessage()
#7 0x560556c842b1 content::ZygoteHostImpl::Init()
#8 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560557916a00 content::RunNamedProcessTypeMain()
#12 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#13 0x560557920f24 service_manager::Main()
#14 0x560557915f14 content::ContentMain()
#15 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56055ba25a42 headless::HeadlessBrowserMain()
#17 0x56055791df9d headless::HeadlessShellMain()
#18 0x560555f7c1ac ChromeMain
#19 0x7fc58009b2e1 __libc_start_main
#20 0x560555f7c02a _start
  r8: 0000000000000000  r9: 00007ffe1507e970 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe1507f068 r13: 0000000000000161 r14: 00007ffe1507f070 r15: 00007ffe1507ec09
  di: 0000000000000002  si: 00007ffe1507e970  bp: 00007ffe1507ebb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc5800adfff  sp: 00007ffe1507e9e8
  ip: 00007fc5800adfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020214.872359:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bf4780 logging::LogMessage::~LogMessage()
#2 0x560556c842b1 content::ZygoteHostImpl::Init()
#3 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x560557916a00 content::RunNamedProcessTypeMain()
#7 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#8 0x560557920f24 service_manager::Main()
#9 0x560557915f14 content::ContentMain()
#10 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56055ba25a42 headless::HeadlessBrowserMain()
#12 0x56055791df9d headless::HeadlessShellMain()
#13 0x560555f7c1ac ChromeMain
#14 0x7fc58009b2e1 __libc_start_main
#15 0x560555f7c02a _start

Received signal 6
#0 0x560557bdbb0c base::debug::StackTrace::StackTrace()
#1 0x560557bdb671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fc585ff80c0 <unknown>
#3 0x7fc5800adfff gsignal
#4 0x7fc5800af42a abort
#5 0x560557bda105 base::debug::BreakDebugger()
#6 0x560557bf4bca logging::LogMessage::~LogMessage()
#7 0x560556c842b1 content::ZygoteHostImpl::Init()
#8 0x5605568f6c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5605568fca69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56055ba269a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x560557916a00 content::RunNamedProcessTypeMain()
#12 0x5605579172e8 content::ContentMainRunnerImpl::Run()
#13 0x560557920f24 service_manager::Main()
#14 0x560557915f14 content::ContentMain()
#15 0x56055ba259b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56055ba25a42 headless::HeadlessBrowserMain()
#17 0x56055791df9d headless::HeadlessShellMain()
#18 0x560555f7c1ac ChromeMain
#19 0x7fc58009b2e1 __libc_start_main
#20 0x560555f7c02a _start
  r8: 0000000000000000  r9: 00007ffe1507e970 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe1507f068 r13: 0000000000000161 r14: 00007ffe1507f070 r15: 00007ffe1507ec09
  di: 0000000000000002  si: 00007ffe1507e970  bp: 00007ffe1507ebb0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fc5800adfff  sp: 00007ffe1507e9e8
  ip: 00007fc5800adfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Media Capture from DOM Elements

- URL: [https://www.w3.org/TR/mediacapture-fromelement/](https://www.w3.org/TR/mediacapture-fromelement/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-fromelement/)
- Repository: [GitHub w3c/mediacapture-fromelement](https://github.com/w3c/mediacapture-fromelement)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020214.892832:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c7f780 logging::LogMessage::~LogMessage()
#2 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#3 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5623229a1a00 content::RunNamedProcessTypeMain()
#7 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#8 0x5623229abf24 service_manager::Main()
#9 0x5623229a0f14 content::ContentMain()
#10 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562326ab0a42 headless::HeadlessBrowserMain()
#12 0x5623229a8f9d headless::HeadlessShellMain()
#13 0x5623210071ac ChromeMain
#14 0x7fbf1ac362e1 __libc_start_main
#15 0x56232100702a _start

Received signal 6
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c66671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbf20b930c0 <unknown>
#3 0x7fbf1ac48fff gsignal
#4 0x7fbf1ac4a42a abort
#5 0x562322c65105 base::debug::BreakDebugger()
#6 0x562322c7fbca logging::LogMessage::~LogMessage()
#7 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#8 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5623229a1a00 content::RunNamedProcessTypeMain()
#12 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#13 0x5623229abf24 service_manager::Main()
#14 0x5623229a0f14 content::ContentMain()
#15 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562326ab0a42 headless::HeadlessBrowserMain()
#17 0x5623229a8f9d headless::HeadlessShellMain()
#18 0x5623210071ac ChromeMain
#19 0x7fbf1ac362e1 __libc_start_main
#20 0x56232100702a _start
  r8: 0000000000000000  r9: 00007ffd3adfc5d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3adfccc8 r13: 0000000000000161 r14: 00007ffd3adfccd0 r15: 00007ffd3adfc869
  di: 0000000000000002  si: 00007ffd3adfc5d0  bp: 00007ffd3adfc810  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbf1ac48fff  sp: 00007ffd3adfc648
  ip: 00007fbf1ac48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020214.892832:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c7f780 logging::LogMessage::~LogMessage()
#2 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#3 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5623229a1a00 content::RunNamedProcessTypeMain()
#7 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#8 0x5623229abf24 service_manager::Main()
#9 0x5623229a0f14 content::ContentMain()
#10 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x562326ab0a42 headless::HeadlessBrowserMain()
#12 0x5623229a8f9d headless::HeadlessShellMain()
#13 0x5623210071ac ChromeMain
#14 0x7fbf1ac362e1 __libc_start_main
#15 0x56232100702a _start

Received signal 6
#0 0x562322c66b0c base::debug::StackTrace::StackTrace()
#1 0x562322c66671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbf20b930c0 <unknown>
#3 0x7fbf1ac48fff gsignal
#4 0x7fbf1ac4a42a abort
#5 0x562322c65105 base::debug::BreakDebugger()
#6 0x562322c7fbca logging::LogMessage::~LogMessage()
#7 0x562321d0f2b1 content::ZygoteHostImpl::Init()
#8 0x562321981c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x562321987a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x562326ab19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5623229a1a00 content::RunNamedProcessTypeMain()
#12 0x5623229a22e8 content::ContentMainRunnerImpl::Run()
#13 0x5623229abf24 service_manager::Main()
#14 0x5623229a0f14 content::ContentMain()
#15 0x562326ab09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x562326ab0a42 headless::HeadlessBrowserMain()
#17 0x5623229a8f9d headless::HeadlessShellMain()
#18 0x5623210071ac ChromeMain
#19 0x7fbf1ac362e1 __libc_start_main
#20 0x56232100702a _start
  r8: 0000000000000000  r9: 00007ffd3adfc5d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd3adfccc8 r13: 0000000000000161 r14: 00007ffd3adfccd0 r15: 00007ffd3adfc869
  di: 0000000000000002  si: 00007ffd3adfc5d0  bp: 00007ffd3adfc810  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbf1ac48fff  sp: 00007ffd3adfc648
  ip: 00007fbf1ac48fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Navigation Timing Level 2

- URL: [https://www.w3.org/TR/navigation-timing-2/](https://www.w3.org/TR/navigation-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/navigation-timing/)
- Repository: [GitHub w3c/navigation-timing](https://github.com/w3c/navigation-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020218.066522:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b4246b8780 logging::LogMessage::~LogMessage()
#2 0x55b4237482b1 content::ZygoteHostImpl::Init()
#3 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4243daa00 content::RunNamedProcessTypeMain()
#7 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4243e4f24 service_manager::Main()
#9 0x55b4243d9f14 content::ContentMain()
#10 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4284e9a42 headless::HeadlessBrowserMain()
#12 0x55b4243e1f9d headless::HeadlessShellMain()
#13 0x55b422a401ac ChromeMain
#14 0x7f2ba7e982e1 __libc_start_main
#15 0x55b422a4002a _start

Received signal 6
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b42469f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2baddf50c0 <unknown>
#3 0x7f2ba7eaafff gsignal
#4 0x7f2ba7eac42a abort
#5 0x55b42469e105 base::debug::BreakDebugger()
#6 0x55b4246b8bca logging::LogMessage::~LogMessage()
#7 0x55b4237482b1 content::ZygoteHostImpl::Init()
#8 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4243daa00 content::RunNamedProcessTypeMain()
#12 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4243e4f24 service_manager::Main()
#14 0x55b4243d9f14 content::ContentMain()
#15 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4284e9a42 headless::HeadlessBrowserMain()
#17 0x55b4243e1f9d headless::HeadlessShellMain()
#18 0x55b422a401ac ChromeMain
#19 0x7f2ba7e982e1 __libc_start_main
#20 0x55b422a4002a _start
  r8: 0000000000000000  r9: 00007ffd2324b260 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2324b958 r13: 0000000000000161 r14: 00007ffd2324b960 r15: 00007ffd2324b4f9
  di: 0000000000000002  si: 00007ffd2324b260  bp: 00007ffd2324b4a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ba7eaafff  sp: 00007ffd2324b2d8
  ip: 00007f2ba7eaafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020218.066522:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b4246b8780 logging::LogMessage::~LogMessage()
#2 0x55b4237482b1 content::ZygoteHostImpl::Init()
#3 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b4243daa00 content::RunNamedProcessTypeMain()
#7 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#8 0x55b4243e4f24 service_manager::Main()
#9 0x55b4243d9f14 content::ContentMain()
#10 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b4284e9a42 headless::HeadlessBrowserMain()
#12 0x55b4243e1f9d headless::HeadlessShellMain()
#13 0x55b422a401ac ChromeMain
#14 0x7f2ba7e982e1 __libc_start_main
#15 0x55b422a4002a _start

Received signal 6
#0 0x55b42469fb0c base::debug::StackTrace::StackTrace()
#1 0x55b42469f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2baddf50c0 <unknown>
#3 0x7f2ba7eaafff gsignal
#4 0x7f2ba7eac42a abort
#5 0x55b42469e105 base::debug::BreakDebugger()
#6 0x55b4246b8bca logging::LogMessage::~LogMessage()
#7 0x55b4237482b1 content::ZygoteHostImpl::Init()
#8 0x55b4233bac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b4233c0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b4284ea9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b4243daa00 content::RunNamedProcessTypeMain()
#12 0x55b4243db2e8 content::ContentMainRunnerImpl::Run()
#13 0x55b4243e4f24 service_manager::Main()
#14 0x55b4243d9f14 content::ContentMain()
#15 0x55b4284e99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b4284e9a42 headless::HeadlessBrowserMain()
#17 0x55b4243e1f9d headless::HeadlessShellMain()
#18 0x55b422a401ac ChromeMain
#19 0x7f2ba7e982e1 __libc_start_main
#20 0x55b422a4002a _start
  r8: 0000000000000000  r9: 00007ffd2324b260 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd2324b958 r13: 0000000000000161 r14: 00007ffd2324b960 r15: 00007ffd2324b4f9
  di: 0000000000000002  si: 00007ffd2324b260  bp: 00007ffd2324b4a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ba7eaafff  sp: 00007ffd2324b2d8
  ip: 00007f2ba7eaafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Page Visibility Level 2

- URL: [https://www.w3.org/TR/page-visibility-2/](https://www.w3.org/TR/page-visibility-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/page-visibility/)
- Repository: [GitHub w3c/page-visibility](https://github.com/w3c/page-visibility)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020217.727419:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229199780 logging::LogMessage::~LogMessage()
#2 0x5642282292b1 content::ZygoteHostImpl::Init()
#3 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564228ebba00 content::RunNamedProcessTypeMain()
#7 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#8 0x564228ec5f24 service_manager::Main()
#9 0x564228ebaf14 content::ContentMain()
#10 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56422cfcaa42 headless::HeadlessBrowserMain()
#12 0x564228ec2f9d headless::HeadlessShellMain()
#13 0x5642275211ac ChromeMain
#14 0x7f9d6d12d2e1 __libc_start_main
#15 0x56422752102a _start

Received signal 6
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229180671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9d7308a0c0 <unknown>
#3 0x7f9d6d13ffff gsignal
#4 0x7f9d6d14142a abort
#5 0x56422917f105 base::debug::BreakDebugger()
#6 0x564229199bca logging::LogMessage::~LogMessage()
#7 0x5642282292b1 content::ZygoteHostImpl::Init()
#8 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564228ebba00 content::RunNamedProcessTypeMain()
#12 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#13 0x564228ec5f24 service_manager::Main()
#14 0x564228ebaf14 content::ContentMain()
#15 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56422cfcaa42 headless::HeadlessBrowserMain()
#17 0x564228ec2f9d headless::HeadlessShellMain()
#18 0x5642275211ac ChromeMain
#19 0x7f9d6d12d2e1 __libc_start_main
#20 0x56422752102a _start
  r8: 0000000000000000  r9: 00007ffcb3e83a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcb3e84148 r13: 0000000000000161 r14: 00007ffcb3e84150 r15: 00007ffcb3e83ce9
  di: 0000000000000002  si: 00007ffcb3e83a50  bp: 00007ffcb3e83c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9d6d13ffff  sp: 00007ffcb3e83ac8
  ip: 00007f9d6d13ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020217.727419:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229199780 logging::LogMessage::~LogMessage()
#2 0x5642282292b1 content::ZygoteHostImpl::Init()
#3 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x564228ebba00 content::RunNamedProcessTypeMain()
#7 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#8 0x564228ec5f24 service_manager::Main()
#9 0x564228ebaf14 content::ContentMain()
#10 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56422cfcaa42 headless::HeadlessBrowserMain()
#12 0x564228ec2f9d headless::HeadlessShellMain()
#13 0x5642275211ac ChromeMain
#14 0x7f9d6d12d2e1 __libc_start_main
#15 0x56422752102a _start

Received signal 6
#0 0x564229180b0c base::debug::StackTrace::StackTrace()
#1 0x564229180671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9d7308a0c0 <unknown>
#3 0x7f9d6d13ffff gsignal
#4 0x7f9d6d14142a abort
#5 0x56422917f105 base::debug::BreakDebugger()
#6 0x564229199bca logging::LogMessage::~LogMessage()
#7 0x5642282292b1 content::ZygoteHostImpl::Init()
#8 0x564227e9bc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x564227ea1a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56422cfcb9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x564228ebba00 content::RunNamedProcessTypeMain()
#12 0x564228ebc2e8 content::ContentMainRunnerImpl::Run()
#13 0x564228ec5f24 service_manager::Main()
#14 0x564228ebaf14 content::ContentMain()
#15 0x56422cfca9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56422cfcaa42 headless::HeadlessBrowserMain()
#17 0x564228ec2f9d headless::HeadlessShellMain()
#18 0x5642275211ac ChromeMain
#19 0x7f9d6d12d2e1 __libc_start_main
#20 0x56422752102a _start
  r8: 0000000000000000  r9: 00007ffcb3e83a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcb3e84148 r13: 0000000000000161 r14: 00007ffcb3e84150 r15: 00007ffcb3e83ce9
  di: 0000000000000002  si: 00007ffcb3e83a50  bp: 00007ffcb3e83c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9d6d13ffff  sp: 00007ffcb3e83ac8
  ip: 00007f9d6d13ffff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Payment Handler API

- URL: [https://www.w3.org/TR/payment-handler/](https://www.w3.org/TR/payment-handler/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-handler/)
- Repository: [GitHub w3c/payment-handler](https://github.com/w3c/payment-handler)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020218.089632:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f9f780 logging::LogMessage::~LogMessage()
#2 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#3 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#7 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#8 0x55d6d2ccbf24 service_manager::Main()
#9 0x55d6d2cc0f14 content::ContentMain()
#10 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#12 0x55d6d2cc8f9d headless::HeadlessShellMain()
#13 0x55d6d13271ac ChromeMain
#14 0x7f9091bd82e1 __libc_start_main
#15 0x55d6d132702a _start

Received signal 6
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f86671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9097b350c0 <unknown>
#3 0x7f9091beafff gsignal
#4 0x7f9091bec42a abort
#5 0x55d6d2f85105 base::debug::BreakDebugger()
#6 0x55d6d2f9fbca logging::LogMessage::~LogMessage()
#7 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#8 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#12 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#13 0x55d6d2ccbf24 service_manager::Main()
#14 0x55d6d2cc0f14 content::ContentMain()
#15 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#17 0x55d6d2cc8f9d headless::HeadlessShellMain()
#18 0x55d6d13271ac ChromeMain
#19 0x7f9091bd82e1 __libc_start_main
#20 0x55d6d132702a _start
  r8: 0000000000000000  r9: 00007ffc929285b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc92928ca8 r13: 0000000000000161 r14: 00007ffc92928cb0 r15: 00007ffc92928849
  di: 0000000000000002  si: 00007ffc929285b0  bp: 00007ffc929287f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9091beafff  sp: 00007ffc92928628
  ip: 00007f9091beafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020218.089632:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f9f780 logging::LogMessage::~LogMessage()
#2 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#3 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#7 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#8 0x55d6d2ccbf24 service_manager::Main()
#9 0x55d6d2cc0f14 content::ContentMain()
#10 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#12 0x55d6d2cc8f9d headless::HeadlessShellMain()
#13 0x55d6d13271ac ChromeMain
#14 0x7f9091bd82e1 __libc_start_main
#15 0x55d6d132702a _start

Received signal 6
#0 0x55d6d2f86b0c base::debug::StackTrace::StackTrace()
#1 0x55d6d2f86671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f9097b350c0 <unknown>
#3 0x7f9091beafff gsignal
#4 0x7f9091bec42a abort
#5 0x55d6d2f85105 base::debug::BreakDebugger()
#6 0x55d6d2f9fbca logging::LogMessage::~LogMessage()
#7 0x55d6d202f2b1 content::ZygoteHostImpl::Init()
#8 0x55d6d1ca1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d6d1ca7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d6d6dd19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d6d2cc1a00 content::RunNamedProcessTypeMain()
#12 0x55d6d2cc22e8 content::ContentMainRunnerImpl::Run()
#13 0x55d6d2ccbf24 service_manager::Main()
#14 0x55d6d2cc0f14 content::ContentMain()
#15 0x55d6d6dd09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d6d6dd0a42 headless::HeadlessBrowserMain()
#17 0x55d6d2cc8f9d headless::HeadlessShellMain()
#18 0x55d6d13271ac ChromeMain
#19 0x7f9091bd82e1 __libc_start_main
#20 0x55d6d132702a _start
  r8: 0000000000000000  r9: 00007ffc929285b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc92928ca8 r13: 0000000000000161 r14: 00007ffc92928cb0 r15: 00007ffc92928849
  di: 0000000000000002  si: 00007ffc929285b0  bp: 00007ffc929287f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9091beafff  sp: 00007ffc92928628
  ip: 00007f9091beafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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


## Payment Method: Basic Card

- URL: [https://www.w3.org/TR/payment-method-basic-card/](https://www.w3.org/TR/payment-method-basic-card/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-method-basic-card/)
- Repository: [GitHub w3c/payment-method-basic-card](https://github.com/w3c/payment-method-basic-card)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020218.639468:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x556912218780 logging::LogMessage::~LogMessage()
#2 0x5569112a82b1 content::ZygoteHostImpl::Init()
#3 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556911f3aa00 content::RunNamedProcessTypeMain()
#7 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#8 0x556911f44f24 service_manager::Main()
#9 0x556911f39f14 content::ContentMain()
#10 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556916049a42 headless::HeadlessBrowserMain()
#12 0x556911f41f9d headless::HeadlessShellMain()
#13 0x5569105a01ac ChromeMain
#14 0x7fb9b0c7c2e1 __libc_start_main
#15 0x5569105a002a _start

Received signal 6
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x5569121ff671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb9b6bd90c0 <unknown>
#3 0x7fb9b0c8efff gsignal
#4 0x7fb9b0c9042a abort
#5 0x5569121fe105 base::debug::BreakDebugger()
#6 0x556912218bca logging::LogMessage::~LogMessage()
#7 0x5569112a82b1 content::ZygoteHostImpl::Init()
#8 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556911f3aa00 content::RunNamedProcessTypeMain()
#12 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#13 0x556911f44f24 service_manager::Main()
#14 0x556911f39f14 content::ContentMain()
#15 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556916049a42 headless::HeadlessBrowserMain()
#17 0x556911f41f9d headless::HeadlessShellMain()
#18 0x5569105a01ac ChromeMain
#19 0x7fb9b0c7c2e1 __libc_start_main
#20 0x5569105a002a _start
  r8: 0000000000000000  r9: 00007ffe92081860 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe92081f58 r13: 0000000000000161 r14: 00007ffe92081f60 r15: 00007ffe92081af9
  di: 0000000000000002  si: 00007ffe92081860  bp: 00007ffe92081aa0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb9b0c8efff  sp: 00007ffe920818d8
  ip: 00007fb9b0c8efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020218.639468:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x556912218780 logging::LogMessage::~LogMessage()
#2 0x5569112a82b1 content::ZygoteHostImpl::Init()
#3 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x556911f3aa00 content::RunNamedProcessTypeMain()
#7 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#8 0x556911f44f24 service_manager::Main()
#9 0x556911f39f14 content::ContentMain()
#10 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#11 0x556916049a42 headless::HeadlessBrowserMain()
#12 0x556911f41f9d headless::HeadlessShellMain()
#13 0x5569105a01ac ChromeMain
#14 0x7fb9b0c7c2e1 __libc_start_main
#15 0x5569105a002a _start

Received signal 6
#0 0x5569121ffb0c base::debug::StackTrace::StackTrace()
#1 0x5569121ff671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb9b6bd90c0 <unknown>
#3 0x7fb9b0c8efff gsignal
#4 0x7fb9b0c9042a abort
#5 0x5569121fe105 base::debug::BreakDebugger()
#6 0x556912218bca logging::LogMessage::~LogMessage()
#7 0x5569112a82b1 content::ZygoteHostImpl::Init()
#8 0x556910f1ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x556910f20a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55691604a9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x556911f3aa00 content::RunNamedProcessTypeMain()
#12 0x556911f3b2e8 content::ContentMainRunnerImpl::Run()
#13 0x556911f44f24 service_manager::Main()
#14 0x556911f39f14 content::ContentMain()
#15 0x5569160499b9 headless::(anonymous namespace)::RunContentMain()
#16 0x556916049a42 headless::HeadlessBrowserMain()
#17 0x556911f41f9d headless::HeadlessShellMain()
#18 0x5569105a01ac ChromeMain
#19 0x7fb9b0c7c2e1 __libc_start_main
#20 0x5569105a002a _start
  r8: 0000000000000000  r9: 00007ffe92081860 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe92081f58 r13: 0000000000000161 r14: 00007ffe92081f60 r15: 00007ffe92081af9
  di: 0000000000000002  si: 00007ffe92081860  bp: 00007ffe92081aa0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb9b0c8efff  sp: 00007ffe920818d8
  ip: 00007fb9b0c8efff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Payment Request API

- URL: [https://www.w3.org/TR/payment-request/](https://www.w3.org/TR/payment-request/)
- Crawled version: [Editor's Draft](https://w3c.github.io/payment-request/)
- Repository: [GitHub w3c/payment-request](https://github.com/w3c/payment-request)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020219.112824:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086daf780 logging::LogMessage::~LogMessage()
#2 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#3 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563086ad1a00 content::RunNamedProcessTypeMain()
#7 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#8 0x563086adbf24 service_manager::Main()
#9 0x563086ad0f14 content::ContentMain()
#10 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56308abe0a42 headless::HeadlessBrowserMain()
#12 0x563086ad8f9d headless::HeadlessShellMain()
#13 0x5630851371ac ChromeMain
#14 0x7f43a6cfe2e1 __libc_start_main
#15 0x56308513702a _start

Received signal 6
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086d96671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43acc5b0c0 <unknown>
#3 0x7f43a6d10fff gsignal
#4 0x7f43a6d1242a abort
#5 0x563086d95105 base::debug::BreakDebugger()
#6 0x563086dafbca logging::LogMessage::~LogMessage()
#7 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#8 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563086ad1a00 content::RunNamedProcessTypeMain()
#12 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#13 0x563086adbf24 service_manager::Main()
#14 0x563086ad0f14 content::ContentMain()
#15 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56308abe0a42 headless::HeadlessBrowserMain()
#17 0x563086ad8f9d headless::HeadlessShellMain()
#18 0x5630851371ac ChromeMain
#19 0x7f43a6cfe2e1 __libc_start_main
#20 0x56308513702a _start
  r8: 0000000000000000  r9: 00007ffcd49af1c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd49af8b8 r13: 0000000000000161 r14: 00007ffcd49af8c0 r15: 00007ffcd49af459
  di: 0000000000000002  si: 00007ffcd49af1c0  bp: 00007ffcd49af400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43a6d10fff  sp: 00007ffcd49af238
  ip: 00007f43a6d10fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020219.112824:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086daf780 logging::LogMessage::~LogMessage()
#2 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#3 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563086ad1a00 content::RunNamedProcessTypeMain()
#7 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#8 0x563086adbf24 service_manager::Main()
#9 0x563086ad0f14 content::ContentMain()
#10 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x56308abe0a42 headless::HeadlessBrowserMain()
#12 0x563086ad8f9d headless::HeadlessShellMain()
#13 0x5630851371ac ChromeMain
#14 0x7f43a6cfe2e1 __libc_start_main
#15 0x56308513702a _start

Received signal 6
#0 0x563086d96b0c base::debug::StackTrace::StackTrace()
#1 0x563086d96671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43acc5b0c0 <unknown>
#3 0x7f43a6d10fff gsignal
#4 0x7f43a6d1242a abort
#5 0x563086d95105 base::debug::BreakDebugger()
#6 0x563086dafbca logging::LogMessage::~LogMessage()
#7 0x563085e3f2b1 content::ZygoteHostImpl::Init()
#8 0x563085ab1c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563085ab7a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x56308abe19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563086ad1a00 content::RunNamedProcessTypeMain()
#12 0x563086ad22e8 content::ContentMainRunnerImpl::Run()
#13 0x563086adbf24 service_manager::Main()
#14 0x563086ad0f14 content::ContentMain()
#15 0x56308abe09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x56308abe0a42 headless::HeadlessBrowserMain()
#17 0x563086ad8f9d headless::HeadlessShellMain()
#18 0x5630851371ac ChromeMain
#19 0x7f43a6cfe2e1 __libc_start_main
#20 0x56308513702a _start
  r8: 0000000000000000  r9: 00007ffcd49af1c0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcd49af8b8 r13: 0000000000000161 r14: 00007ffcd49af8c0 r15: 00007ffcd49af459
  di: 0000000000000002  si: 00007ffcd49af1c0  bp: 00007ffcd49af400  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f43a6d10fff  sp: 00007ffcd49af238
  ip: 00007f43a6d10fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Performance Timeline Level 2

- URL: [https://www.w3.org/TR/performance-timeline-2/](https://www.w3.org/TR/performance-timeline-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/performance-timeline/)
- Repository: [GitHub w3c/performance-timeline](https://github.com/w3c/performance-timeline)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020217.373059:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1ddb780 logging::LogMessage::~LogMessage()
#2 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#3 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#7 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cdb1b07f24 service_manager::Main()
#9 0x55cdb1afcf14 content::ContentMain()
#10 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#12 0x55cdb1b04f9d headless::HeadlessShellMain()
#13 0x55cdb01631ac ChromeMain
#14 0x7fbce2d442e1 __libc_start_main
#15 0x55cdb016302a _start

Received signal 6
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1dc2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbce8ca10c0 <unknown>
#3 0x7fbce2d56fff gsignal
#4 0x7fbce2d5842a abort
#5 0x55cdb1dc1105 base::debug::BreakDebugger()
#6 0x55cdb1ddbbca logging::LogMessage::~LogMessage()
#7 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#8 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#12 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cdb1b07f24 service_manager::Main()
#14 0x55cdb1afcf14 content::ContentMain()
#15 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#17 0x55cdb1b04f9d headless::HeadlessShellMain()
#18 0x55cdb01631ac ChromeMain
#19 0x7fbce2d442e1 __libc_start_main
#20 0x55cdb016302a _start
  r8: 0000000000000000  r9: 00007ffd00f3dec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd00f3e5b8 r13: 0000000000000161 r14: 00007ffd00f3e5c0 r15: 00007ffd00f3e159
  di: 0000000000000002  si: 00007ffd00f3dec0  bp: 00007ffd00f3e100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbce2d56fff  sp: 00007ffd00f3df38
  ip: 00007fbce2d56fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020217.373059:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1ddb780 logging::LogMessage::~LogMessage()
#2 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#3 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#7 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#8 0x55cdb1b07f24 service_manager::Main()
#9 0x55cdb1afcf14 content::ContentMain()
#10 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#12 0x55cdb1b04f9d headless::HeadlessShellMain()
#13 0x55cdb01631ac ChromeMain
#14 0x7fbce2d442e1 __libc_start_main
#15 0x55cdb016302a _start

Received signal 6
#0 0x55cdb1dc2b0c base::debug::StackTrace::StackTrace()
#1 0x55cdb1dc2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fbce8ca10c0 <unknown>
#3 0x7fbce2d56fff gsignal
#4 0x7fbce2d5842a abort
#5 0x55cdb1dc1105 base::debug::BreakDebugger()
#6 0x55cdb1ddbbca logging::LogMessage::~LogMessage()
#7 0x55cdb0e6b2b1 content::ZygoteHostImpl::Init()
#8 0x55cdb0addc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55cdb0ae3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55cdb5c0d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55cdb1afda00 content::RunNamedProcessTypeMain()
#12 0x55cdb1afe2e8 content::ContentMainRunnerImpl::Run()
#13 0x55cdb1b07f24 service_manager::Main()
#14 0x55cdb1afcf14 content::ContentMain()
#15 0x55cdb5c0c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55cdb5c0ca42 headless::HeadlessBrowserMain()
#17 0x55cdb1b04f9d headless::HeadlessShellMain()
#18 0x55cdb01631ac ChromeMain
#19 0x7fbce2d442e1 __libc_start_main
#20 0x55cdb016302a _start
  r8: 0000000000000000  r9: 00007ffd00f3dec0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd00f3e5b8 r13: 0000000000000161 r14: 00007ffd00f3e5c0 r15: 00007ffd00f3e159
  di: 0000000000000002  si: 00007ffd00f3dec0  bp: 00007ffd00f3e100  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fbce2d56fff  sp: 00007ffd00f3df38
  ip: 00007fbce2d56fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at Process.ChildProcess._handle.onexit (internal/child_process.js:198:12)


## Pointer Events

- URL: [https://www.w3.org/TR/pointerevents2/](https://www.w3.org/TR/pointerevents2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/pointerevents/)
- Repository: [GitHub w3c/pointerevents](https://github.com/w3c/pointerevents)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020222.238056:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f37456780 logging::LogMessage::~LogMessage()
#2 0x558f364e62b1 content::ZygoteHostImpl::Init()
#3 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558f37178a00 content::RunNamedProcessTypeMain()
#7 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#8 0x558f37182f24 service_manager::Main()
#9 0x558f37177f14 content::ContentMain()
#10 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558f3b287a42 headless::HeadlessBrowserMain()
#12 0x558f3717ff9d headless::HeadlessShellMain()
#13 0x558f357de1ac ChromeMain
#14 0x7f329b9082e1 __libc_start_main
#15 0x558f357de02a _start

Received signal 6
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f3743d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f32a18650c0 <unknown>
#3 0x7f329b91afff gsignal
#4 0x7f329b91c42a abort
#5 0x558f3743c105 base::debug::BreakDebugger()
#6 0x558f37456bca logging::LogMessage::~LogMessage()
#7 0x558f364e62b1 content::ZygoteHostImpl::Init()
#8 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558f37178a00 content::RunNamedProcessTypeMain()
#12 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#13 0x558f37182f24 service_manager::Main()
#14 0x558f37177f14 content::ContentMain()
#15 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558f3b287a42 headless::HeadlessBrowserMain()
#17 0x558f3717ff9d headless::HeadlessShellMain()
#18 0x558f357de1ac ChromeMain
#19 0x7f329b9082e1 __libc_start_main
#20 0x558f357de02a _start
  r8: 0000000000000000  r9: 00007ffd99a6ff30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd99a70628 r13: 0000000000000161 r14: 00007ffd99a70630 r15: 00007ffd99a701c9
  di: 0000000000000002  si: 00007ffd99a6ff30  bp: 00007ffd99a70170  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f329b91afff  sp: 00007ffd99a6ffa8
  ip: 00007f329b91afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020222.238056:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f37456780 logging::LogMessage::~LogMessage()
#2 0x558f364e62b1 content::ZygoteHostImpl::Init()
#3 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#5 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x558f37178a00 content::RunNamedProcessTypeMain()
#7 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#8 0x558f37182f24 service_manager::Main()
#9 0x558f37177f14 content::ContentMain()
#10 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#11 0x558f3b287a42 headless::HeadlessBrowserMain()
#12 0x558f3717ff9d headless::HeadlessShellMain()
#13 0x558f357de1ac ChromeMain
#14 0x7f329b9082e1 __libc_start_main
#15 0x558f357de02a _start

Received signal 6
#0 0x558f3743db0c base::debug::StackTrace::StackTrace()
#1 0x558f3743d671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f32a18650c0 <unknown>
#3 0x7f329b91afff gsignal
#4 0x7f329b91c42a abort
#5 0x558f3743c105 base::debug::BreakDebugger()
#6 0x558f37456bca logging::LogMessage::~LogMessage()
#7 0x558f364e62b1 content::ZygoteHostImpl::Init()
#8 0x558f36158c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x558f3615ea69 content::BrowserMainRunnerImpl::Initialize()
#10 0x558f3b2889a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x558f37178a00 content::RunNamedProcessTypeMain()
#12 0x558f371792e8 content::ContentMainRunnerImpl::Run()
#13 0x558f37182f24 service_manager::Main()
#14 0x558f37177f14 content::ContentMain()
#15 0x558f3b2879b9 headless::(anonymous namespace)::RunContentMain()
#16 0x558f3b287a42 headless::HeadlessBrowserMain()
#17 0x558f3717ff9d headless::HeadlessShellMain()
#18 0x558f357de1ac ChromeMain
#19 0x7f329b9082e1 __libc_start_main
#20 0x558f357de02a _start
  r8: 0000000000000000  r9: 00007ffd99a6ff30 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd99a70628 r13: 0000000000000161 r14: 00007ffd99a70630 r15: 00007ffd99a701c9
  di: 0000000000000002  si: 00007ffd99a6ff30  bp: 00007ffd99a70170  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f329b91afff  sp: 00007ffd99a6ffa8
  ip: 00007f329b91afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Pointer Lock 2.0

- URL: [https://www.w3.org/TR/pointerlock-2/](https://www.w3.org/TR/pointerlock-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/pointerlock/)
- Repository: [GitHub w3c/pointerlock](https://github.com/w3c/pointerlock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020220.794536:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db99a780 logging::LogMessage::~LogMessage()
#2 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#3 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5654db6bca00 content::RunNamedProcessTypeMain()
#7 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#8 0x5654db6c6f24 service_manager::Main()
#9 0x5654db6bbf14 content::ContentMain()
#10 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654df7cba42 headless::HeadlessBrowserMain()
#12 0x5654db6c3f9d headless::HeadlessShellMain()
#13 0x5654d9d221ac ChromeMain
#14 0x7fec9a8c42e1 __libc_start_main
#15 0x5654d9d2202a _start

Received signal 6
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db981671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7feca08210c0 <unknown>
#3 0x7fec9a8d6fff gsignal
#4 0x7fec9a8d842a abort
#5 0x5654db980105 base::debug::BreakDebugger()
#6 0x5654db99abca logging::LogMessage::~LogMessage()
#7 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#8 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5654db6bca00 content::RunNamedProcessTypeMain()
#12 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#13 0x5654db6c6f24 service_manager::Main()
#14 0x5654db6bbf14 content::ContentMain()
#15 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654df7cba42 headless::HeadlessBrowserMain()
#17 0x5654db6c3f9d headless::HeadlessShellMain()
#18 0x5654d9d221ac ChromeMain
#19 0x7fec9a8c42e1 __libc_start_main
#20 0x5654d9d2202a _start
  r8: 0000000000000000  r9: 00007ffe77c40460 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe77c40b58 r13: 0000000000000161 r14: 00007ffe77c40b60 r15: 00007ffe77c406f9
  di: 0000000000000002  si: 00007ffe77c40460  bp: 00007ffe77c406a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec9a8d6fff  sp: 00007ffe77c404d8
  ip: 00007fec9a8d6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020220.794536:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db99a780 logging::LogMessage::~LogMessage()
#2 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#3 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5654db6bca00 content::RunNamedProcessTypeMain()
#7 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#8 0x5654db6c6f24 service_manager::Main()
#9 0x5654db6bbf14 content::ContentMain()
#10 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5654df7cba42 headless::HeadlessBrowserMain()
#12 0x5654db6c3f9d headless::HeadlessShellMain()
#13 0x5654d9d221ac ChromeMain
#14 0x7fec9a8c42e1 __libc_start_main
#15 0x5654d9d2202a _start

Received signal 6
#0 0x5654db981b0c base::debug::StackTrace::StackTrace()
#1 0x5654db981671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7feca08210c0 <unknown>
#3 0x7fec9a8d6fff gsignal
#4 0x7fec9a8d842a abort
#5 0x5654db980105 base::debug::BreakDebugger()
#6 0x5654db99abca logging::LogMessage::~LogMessage()
#7 0x5654daa2a2b1 content::ZygoteHostImpl::Init()
#8 0x5654da69cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5654da6a2a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5654df7cc9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5654db6bca00 content::RunNamedProcessTypeMain()
#12 0x5654db6bd2e8 content::ContentMainRunnerImpl::Run()
#13 0x5654db6c6f24 service_manager::Main()
#14 0x5654db6bbf14 content::ContentMain()
#15 0x5654df7cb9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5654df7cba42 headless::HeadlessBrowserMain()
#17 0x5654db6c3f9d headless::HeadlessShellMain()
#18 0x5654d9d221ac ChromeMain
#19 0x7fec9a8c42e1 __libc_start_main
#20 0x5654d9d2202a _start
  r8: 0000000000000000  r9: 00007ffe77c40460 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe77c40b58 r13: 0000000000000161 r14: 00007ffe77c40b60 r15: 00007ffe77c406f9
  di: 0000000000000002  si: 00007ffe77c40460  bp: 00007ffe77c406a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fec9a8d6fff  sp: 00007ffe77c404d8
  ip: 00007fec9a8d6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Preload

- URL: [https://www.w3.org/TR/preload/](https://www.w3.org/TR/preload/)
- Crawled version: [Editor's Draft](https://w3c.github.io/preload/)
- Repository: [GitHub w3c/preload](https://github.com/w3c/preload)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020220.817759:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0d1780 logging::LogMessage::~LogMessage()
#2 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#3 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#7 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#8 0x55bfcddfdf24 service_manager::Main()
#9 0x55bfcddf2f14 content::ContentMain()
#10 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#12 0x55bfcddfaf9d headless::HeadlessShellMain()
#13 0x55bfcc4591ac ChromeMain
#14 0x7f89535bf2e1 __libc_start_main
#15 0x55bfcc45902a _start

Received signal 6
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0b8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f895951c0c0 <unknown>
#3 0x7f89535d1fff gsignal
#4 0x7f89535d342a abort
#5 0x55bfce0b7105 base::debug::BreakDebugger()
#6 0x55bfce0d1bca logging::LogMessage::~LogMessage()
#7 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#8 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#12 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#13 0x55bfcddfdf24 service_manager::Main()
#14 0x55bfcddf2f14 content::ContentMain()
#15 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#17 0x55bfcddfaf9d headless::HeadlessShellMain()
#18 0x55bfcc4591ac ChromeMain
#19 0x7f89535bf2e1 __libc_start_main
#20 0x55bfcc45902a _start
  r8: 0000000000000000  r9: 00007ffcbb66a8d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcbb66afc8 r13: 0000000000000161 r14: 00007ffcbb66afd0 r15: 00007ffcbb66ab69
  di: 0000000000000002  si: 00007ffcbb66a8d0  bp: 00007ffcbb66ab10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f89535d1fff  sp: 00007ffcbb66a948
  ip: 00007f89535d1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020220.817759:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0d1780 logging::LogMessage::~LogMessage()
#2 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#3 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#7 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#8 0x55bfcddfdf24 service_manager::Main()
#9 0x55bfcddf2f14 content::ContentMain()
#10 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#12 0x55bfcddfaf9d headless::HeadlessShellMain()
#13 0x55bfcc4591ac ChromeMain
#14 0x7f89535bf2e1 __libc_start_main
#15 0x55bfcc45902a _start

Received signal 6
#0 0x55bfce0b8b0c base::debug::StackTrace::StackTrace()
#1 0x55bfce0b8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f895951c0c0 <unknown>
#3 0x7f89535d1fff gsignal
#4 0x7f89535d342a abort
#5 0x55bfce0b7105 base::debug::BreakDebugger()
#6 0x55bfce0d1bca logging::LogMessage::~LogMessage()
#7 0x55bfcd1612b1 content::ZygoteHostImpl::Init()
#8 0x55bfccdd3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55bfccdd9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55bfd1f039a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55bfcddf3a00 content::RunNamedProcessTypeMain()
#12 0x55bfcddf42e8 content::ContentMainRunnerImpl::Run()
#13 0x55bfcddfdf24 service_manager::Main()
#14 0x55bfcddf2f14 content::ContentMain()
#15 0x55bfd1f029b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55bfd1f02a42 headless::HeadlessBrowserMain()
#17 0x55bfcddfaf9d headless::HeadlessShellMain()
#18 0x55bfcc4591ac ChromeMain
#19 0x7f89535bf2e1 __libc_start_main
#20 0x55bfcc45902a _start
  r8: 0000000000000000  r9: 00007ffcbb66a8d0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcbb66afc8 r13: 0000000000000161 r14: 00007ffcbb66afd0 r15: 00007ffcbb66ab69
  di: 0000000000000002  si: 00007ffcbb66a8d0  bp: 00007ffcbb66ab10  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f89535d1fff  sp: 00007ffcbb66a948
  ip: 00007f89535d1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Presentation API

- URL: [https://www.w3.org/TR/presentation-api/](https://www.w3.org/TR/presentation-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/presentation-api/)
- Repository: [GitHub w3c/presentation-api](https://github.com/w3c/presentation-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020222.256756:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a80202f780 logging::LogMessage::~LogMessage()
#2 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#3 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a801d51a00 content::RunNamedProcessTypeMain()
#7 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#8 0x55a801d5bf24 service_manager::Main()
#9 0x55a801d50f14 content::ContentMain()
#10 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a805e60a42 headless::HeadlessBrowserMain()
#12 0x55a801d58f9d headless::HeadlessShellMain()
#13 0x55a8003b71ac ChromeMain
#14 0x7f1b97b2b2e1 __libc_start_main
#15 0x55a8003b702a _start

Received signal 6
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a802016671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1b9da880c0 <unknown>
#3 0x7f1b97b3dfff gsignal
#4 0x7f1b97b3f42a abort
#5 0x55a802015105 base::debug::BreakDebugger()
#6 0x55a80202fbca logging::LogMessage::~LogMessage()
#7 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#8 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a801d51a00 content::RunNamedProcessTypeMain()
#12 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#13 0x55a801d5bf24 service_manager::Main()
#14 0x55a801d50f14 content::ContentMain()
#15 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a805e60a42 headless::HeadlessBrowserMain()
#17 0x55a801d58f9d headless::HeadlessShellMain()
#18 0x55a8003b71ac ChromeMain
#19 0x7f1b97b2b2e1 __libc_start_main
#20 0x55a8003b702a _start
  r8: 0000000000000000  r9: 00007ffc2ca91c80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2ca92378 r13: 0000000000000161 r14: 00007ffc2ca92380 r15: 00007ffc2ca91f19
  di: 0000000000000002  si: 00007ffc2ca91c80  bp: 00007ffc2ca91ec0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1b97b3dfff  sp: 00007ffc2ca91cf8
  ip: 00007f1b97b3dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020222.256756:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a80202f780 logging::LogMessage::~LogMessage()
#2 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#3 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55a801d51a00 content::RunNamedProcessTypeMain()
#7 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#8 0x55a801d5bf24 service_manager::Main()
#9 0x55a801d50f14 content::ContentMain()
#10 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55a805e60a42 headless::HeadlessBrowserMain()
#12 0x55a801d58f9d headless::HeadlessShellMain()
#13 0x55a8003b71ac ChromeMain
#14 0x7f1b97b2b2e1 __libc_start_main
#15 0x55a8003b702a _start

Received signal 6
#0 0x55a802016b0c base::debug::StackTrace::StackTrace()
#1 0x55a802016671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1b9da880c0 <unknown>
#3 0x7f1b97b3dfff gsignal
#4 0x7f1b97b3f42a abort
#5 0x55a802015105 base::debug::BreakDebugger()
#6 0x55a80202fbca logging::LogMessage::~LogMessage()
#7 0x55a8010bf2b1 content::ZygoteHostImpl::Init()
#8 0x55a800d31c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55a800d37a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55a805e619a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55a801d51a00 content::RunNamedProcessTypeMain()
#12 0x55a801d522e8 content::ContentMainRunnerImpl::Run()
#13 0x55a801d5bf24 service_manager::Main()
#14 0x55a801d50f14 content::ContentMain()
#15 0x55a805e609b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55a805e60a42 headless::HeadlessBrowserMain()
#17 0x55a801d58f9d headless::HeadlessShellMain()
#18 0x55a8003b71ac ChromeMain
#19 0x7f1b97b2b2e1 __libc_start_main
#20 0x55a8003b702a _start
  r8: 0000000000000000  r9: 00007ffc2ca91c80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc2ca92378 r13: 0000000000000161 r14: 00007ffc2ca92380 r15: 00007ffc2ca91f19
  di: 0000000000000002  si: 00007ffc2ca91c80  bp: 00007ffc2ca91ec0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1b97b3dfff  sp: 00007ffc2ca91cf8
  ip: 00007f1b97b3dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Push API

- URL: [https://www.w3.org/TR/push-api/](https://www.w3.org/TR/push-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/push-api/)
- Repository: [GitHub w3c/push-api](https://github.com/w3c/push-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020221.489147:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f23697b780 logging::LogMessage::~LogMessage()
#2 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#3 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f23669da00 content::RunNamedProcessTypeMain()
#7 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f2366a7f24 service_manager::Main()
#9 0x55f23669cf14 content::ContentMain()
#10 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f23a7aca42 headless::HeadlessBrowserMain()
#12 0x55f2366a4f9d headless::HeadlessShellMain()
#13 0x55f234d031ac ChromeMain
#14 0x7fe2c708f2e1 __libc_start_main
#15 0x55f234d0302a _start

Received signal 6
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f236962671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe2ccfec0c0 <unknown>
#3 0x7fe2c70a1fff gsignal
#4 0x7fe2c70a342a abort
#5 0x55f236961105 base::debug::BreakDebugger()
#6 0x55f23697bbca logging::LogMessage::~LogMessage()
#7 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#8 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f23669da00 content::RunNamedProcessTypeMain()
#12 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f2366a7f24 service_manager::Main()
#14 0x55f23669cf14 content::ContentMain()
#15 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f23a7aca42 headless::HeadlessBrowserMain()
#17 0x55f2366a4f9d headless::HeadlessShellMain()
#18 0x55f234d031ac ChromeMain
#19 0x7fe2c708f2e1 __libc_start_main
#20 0x55f234d0302a _start
  r8: 0000000000000000  r9: 00007ffc3d0d2fd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc3d0d36c8 r13: 0000000000000161 r14: 00007ffc3d0d36d0 r15: 00007ffc3d0d3269
  di: 0000000000000002  si: 00007ffc3d0d2fd0  bp: 00007ffc3d0d3210  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe2c70a1fff  sp: 00007ffc3d0d3048
  ip: 00007fe2c70a1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020221.489147:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f23697b780 logging::LogMessage::~LogMessage()
#2 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#3 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f23669da00 content::RunNamedProcessTypeMain()
#7 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#8 0x55f2366a7f24 service_manager::Main()
#9 0x55f23669cf14 content::ContentMain()
#10 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f23a7aca42 headless::HeadlessBrowserMain()
#12 0x55f2366a4f9d headless::HeadlessShellMain()
#13 0x55f234d031ac ChromeMain
#14 0x7fe2c708f2e1 __libc_start_main
#15 0x55f234d0302a _start

Received signal 6
#0 0x55f236962b0c base::debug::StackTrace::StackTrace()
#1 0x55f236962671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe2ccfec0c0 <unknown>
#3 0x7fe2c70a1fff gsignal
#4 0x7fe2c70a342a abort
#5 0x55f236961105 base::debug::BreakDebugger()
#6 0x55f23697bbca logging::LogMessage::~LogMessage()
#7 0x55f235a0b2b1 content::ZygoteHostImpl::Init()
#8 0x55f23567dc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f235683a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f23a7ad9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f23669da00 content::RunNamedProcessTypeMain()
#12 0x55f23669e2e8 content::ContentMainRunnerImpl::Run()
#13 0x55f2366a7f24 service_manager::Main()
#14 0x55f23669cf14 content::ContentMain()
#15 0x55f23a7ac9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f23a7aca42 headless::HeadlessBrowserMain()
#17 0x55f2366a4f9d headless::HeadlessShellMain()
#18 0x55f234d031ac ChromeMain
#19 0x7fe2c708f2e1 __libc_start_main
#20 0x55f234d0302a _start
  r8: 0000000000000000  r9: 00007ffc3d0d2fd0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc3d0d36c8 r13: 0000000000000161 r14: 00007ffc3d0d36d0 r15: 00007ffc3d0d3269
  di: 0000000000000002  si: 00007ffc3d0d2fd0  bp: 00007ffc3d0d3210  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe2c70a1fff  sp: 00007ffc3d0d3048
  ip: 00007fe2c70a1fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Remote Playback API

- URL: [https://www.w3.org/TR/remote-playback/](https://www.w3.org/TR/remote-playback/)
- Crawled version: [Editor's Draft](https://w3c.github.io/remote-playback/)
- Repository: [GitHub w3c/remote-playback](https://github.com/w3c/remote-playback)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020220.664404:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a352780 logging::LogMessage::~LogMessage()
#2 0x559d993e22b1 content::ZygoteHostImpl::Init()
#3 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559d9a074a00 content::RunNamedProcessTypeMain()
#7 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#8 0x559d9a07ef24 service_manager::Main()
#9 0x559d9a073f14 content::ContentMain()
#10 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559d9e183a42 headless::HeadlessBrowserMain()
#12 0x559d9a07bf9d headless::HeadlessShellMain()
#13 0x559d986da1ac ChromeMain
#14 0x7f682f6082e1 __libc_start_main
#15 0x559d986da02a _start

Received signal 6
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a339671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f68355650c0 <unknown>
#3 0x7f682f61afff gsignal
#4 0x7f682f61c42a abort
#5 0x559d9a338105 base::debug::BreakDebugger()
#6 0x559d9a352bca logging::LogMessage::~LogMessage()
#7 0x559d993e22b1 content::ZygoteHostImpl::Init()
#8 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559d9a074a00 content::RunNamedProcessTypeMain()
#12 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#13 0x559d9a07ef24 service_manager::Main()
#14 0x559d9a073f14 content::ContentMain()
#15 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559d9e183a42 headless::HeadlessBrowserMain()
#17 0x559d9a07bf9d headless::HeadlessShellMain()
#18 0x559d986da1ac ChromeMain
#19 0x7f682f6082e1 __libc_start_main
#20 0x559d986da02a _start
  r8: 0000000000000000  r9: 00007ffd43b1d8a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd43b1df98 r13: 0000000000000161 r14: 00007ffd43b1dfa0 r15: 00007ffd43b1db39
  di: 0000000000000002  si: 00007ffd43b1d8a0  bp: 00007ffd43b1dae0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f682f61afff  sp: 00007ffd43b1d918
  ip: 00007f682f61afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020220.664404:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a352780 logging::LogMessage::~LogMessage()
#2 0x559d993e22b1 content::ZygoteHostImpl::Init()
#3 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#5 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x559d9a074a00 content::RunNamedProcessTypeMain()
#7 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#8 0x559d9a07ef24 service_manager::Main()
#9 0x559d9a073f14 content::ContentMain()
#10 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#11 0x559d9e183a42 headless::HeadlessBrowserMain()
#12 0x559d9a07bf9d headless::HeadlessShellMain()
#13 0x559d986da1ac ChromeMain
#14 0x7f682f6082e1 __libc_start_main
#15 0x559d986da02a _start

Received signal 6
#0 0x559d9a339b0c base::debug::StackTrace::StackTrace()
#1 0x559d9a339671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f68355650c0 <unknown>
#3 0x7f682f61afff gsignal
#4 0x7f682f61c42a abort
#5 0x559d9a338105 base::debug::BreakDebugger()
#6 0x559d9a352bca logging::LogMessage::~LogMessage()
#7 0x559d993e22b1 content::ZygoteHostImpl::Init()
#8 0x559d99054c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x559d9905aa69 content::BrowserMainRunnerImpl::Initialize()
#10 0x559d9e1849a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x559d9a074a00 content::RunNamedProcessTypeMain()
#12 0x559d9a0752e8 content::ContentMainRunnerImpl::Run()
#13 0x559d9a07ef24 service_manager::Main()
#14 0x559d9a073f14 content::ContentMain()
#15 0x559d9e1839b9 headless::(anonymous namespace)::RunContentMain()
#16 0x559d9e183a42 headless::HeadlessBrowserMain()
#17 0x559d9a07bf9d headless::HeadlessShellMain()
#18 0x559d986da1ac ChromeMain
#19 0x7f682f6082e1 __libc_start_main
#20 0x559d986da02a _start
  r8: 0000000000000000  r9: 00007ffd43b1d8a0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd43b1df98 r13: 0000000000000161 r14: 00007ffd43b1dfa0 r15: 00007ffd43b1db39
  di: 0000000000000002  si: 00007ffd43b1d8a0  bp: 00007ffd43b1dae0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f682f61afff  sp: 00007ffd43b1d918
  ip: 00007f682f61afff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Resource Timing Level 2

- URL: [https://www.w3.org/TR/resource-timing-2/](https://www.w3.org/TR/resource-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/resource-timing/)
- Repository: [GitHub w3c/resource-timing](https://github.com/w3c/resource-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020221.101690:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb83780 logging::LogMessage::~LogMessage()
#2 0x55deeac132b1 content::ZygoteHostImpl::Init()
#3 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#7 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#8 0x55deeb8aff24 service_manager::Main()
#9 0x55deeb8a4f14 content::ContentMain()
#10 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55deef9b4a42 headless::HeadlessBrowserMain()
#12 0x55deeb8acf9d headless::HeadlessShellMain()
#13 0x55dee9f0b1ac ChromeMain
#14 0x7f57344a22e1 __libc_start_main
#15 0x55dee9f0b02a _start

Received signal 6
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb6a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f573a3ff0c0 <unknown>
#3 0x7f57344b4fff gsignal
#4 0x7f57344b642a abort
#5 0x55deebb69105 base::debug::BreakDebugger()
#6 0x55deebb83bca logging::LogMessage::~LogMessage()
#7 0x55deeac132b1 content::ZygoteHostImpl::Init()
#8 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#12 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#13 0x55deeb8aff24 service_manager::Main()
#14 0x55deeb8a4f14 content::ContentMain()
#15 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55deef9b4a42 headless::HeadlessBrowserMain()
#17 0x55deeb8acf9d headless::HeadlessShellMain()
#18 0x55dee9f0b1ac ChromeMain
#19 0x7f57344a22e1 __libc_start_main
#20 0x55dee9f0b02a _start
  r8: 0000000000000000  r9: 00007ffcf48e4e90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf48e5588 r13: 0000000000000161 r14: 00007ffcf48e5590 r15: 00007ffcf48e5129
  di: 0000000000000002  si: 00007ffcf48e4e90  bp: 00007ffcf48e50d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f57344b4fff  sp: 00007ffcf48e4f08
  ip: 00007f57344b4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020221.101690:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb83780 logging::LogMessage::~LogMessage()
#2 0x55deeac132b1 content::ZygoteHostImpl::Init()
#3 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#7 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#8 0x55deeb8aff24 service_manager::Main()
#9 0x55deeb8a4f14 content::ContentMain()
#10 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55deef9b4a42 headless::HeadlessBrowserMain()
#12 0x55deeb8acf9d headless::HeadlessShellMain()
#13 0x55dee9f0b1ac ChromeMain
#14 0x7f57344a22e1 __libc_start_main
#15 0x55dee9f0b02a _start

Received signal 6
#0 0x55deebb6ab0c base::debug::StackTrace::StackTrace()
#1 0x55deebb6a671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f573a3ff0c0 <unknown>
#3 0x7f57344b4fff gsignal
#4 0x7f57344b642a abort
#5 0x55deebb69105 base::debug::BreakDebugger()
#6 0x55deebb83bca logging::LogMessage::~LogMessage()
#7 0x55deeac132b1 content::ZygoteHostImpl::Init()
#8 0x55deea885c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55deea88ba69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55deef9b59a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55deeb8a5a00 content::RunNamedProcessTypeMain()
#12 0x55deeb8a62e8 content::ContentMainRunnerImpl::Run()
#13 0x55deeb8aff24 service_manager::Main()
#14 0x55deeb8a4f14 content::ContentMain()
#15 0x55deef9b49b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55deef9b4a42 headless::HeadlessBrowserMain()
#17 0x55deeb8acf9d headless::HeadlessShellMain()
#18 0x55dee9f0b1ac ChromeMain
#19 0x7f57344a22e1 __libc_start_main
#20 0x55dee9f0b02a _start
  r8: 0000000000000000  r9: 00007ffcf48e4e90 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf48e5588 r13: 0000000000000161 r14: 00007ffcf48e5590 r15: 00007ffcf48e5129
  di: 0000000000000002  si: 00007ffcf48e4e90  bp: 00007ffcf48e50d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f57344b4fff  sp: 00007ffcf48e4f08
  ip: 00007f57344b4fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Screen Capture

- URL: [https://www.w3.org/TR/screen-capture/](https://www.w3.org/TR/screen-capture/)
- Crawled version: [Editor's Draft](https://w3c.github.io/mediacapture-screen-share/)
- Repository: [GitHub w3c/mediacapture-screen-share](https://github.com/w3c/mediacapture-screen-share)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020223.393897:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a77278780 logging::LogMessage::~LogMessage()
#2 0x561a763082b1 content::ZygoteHostImpl::Init()
#3 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#7 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#8 0x561a76fa4f24 service_manager::Main()
#9 0x561a76f99f14 content::ContentMain()
#10 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#12 0x561a76fa1f9d headless::HeadlessShellMain()
#13 0x561a756001ac ChromeMain
#14 0x7f2ceed2f2e1 __libc_start_main
#15 0x561a7560002a _start

Received signal 6
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a7725f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2cf4c8c0c0 <unknown>
#3 0x7f2ceed41fff gsignal
#4 0x7f2ceed4342a abort
#5 0x561a7725e105 base::debug::BreakDebugger()
#6 0x561a77278bca logging::LogMessage::~LogMessage()
#7 0x561a763082b1 content::ZygoteHostImpl::Init()
#8 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#12 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#13 0x561a76fa4f24 service_manager::Main()
#14 0x561a76f99f14 content::ContentMain()
#15 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#17 0x561a76fa1f9d headless::HeadlessShellMain()
#18 0x561a756001ac ChromeMain
#19 0x7f2ceed2f2e1 __libc_start_main
#20 0x561a7560002a _start
  r8: 0000000000000000  r9: 00007ffe0b353560 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe0b353c58 r13: 0000000000000161 r14: 00007ffe0b353c60 r15: 00007ffe0b3537f9
  di: 0000000000000002  si: 00007ffe0b353560  bp: 00007ffe0b3537a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ceed41fff  sp: 00007ffe0b3535d8
  ip: 00007f2ceed41fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.393897:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a77278780 logging::LogMessage::~LogMessage()
#2 0x561a763082b1 content::ZygoteHostImpl::Init()
#3 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#7 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#8 0x561a76fa4f24 service_manager::Main()
#9 0x561a76f99f14 content::ContentMain()
#10 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#12 0x561a76fa1f9d headless::HeadlessShellMain()
#13 0x561a756001ac ChromeMain
#14 0x7f2ceed2f2e1 __libc_start_main
#15 0x561a7560002a _start

Received signal 6
#0 0x561a7725fb0c base::debug::StackTrace::StackTrace()
#1 0x561a7725f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f2cf4c8c0c0 <unknown>
#3 0x7f2ceed41fff gsignal
#4 0x7f2ceed4342a abort
#5 0x561a7725e105 base::debug::BreakDebugger()
#6 0x561a77278bca logging::LogMessage::~LogMessage()
#7 0x561a763082b1 content::ZygoteHostImpl::Init()
#8 0x561a75f7ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x561a75f80a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x561a7b0aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x561a76f9aa00 content::RunNamedProcessTypeMain()
#12 0x561a76f9b2e8 content::ContentMainRunnerImpl::Run()
#13 0x561a76fa4f24 service_manager::Main()
#14 0x561a76f99f14 content::ContentMain()
#15 0x561a7b0a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x561a7b0a9a42 headless::HeadlessBrowserMain()
#17 0x561a76fa1f9d headless::HeadlessShellMain()
#18 0x561a756001ac ChromeMain
#19 0x7f2ceed2f2e1 __libc_start_main
#20 0x561a7560002a _start
  r8: 0000000000000000  r9: 00007ffe0b353560 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe0b353c58 r13: 0000000000000161 r14: 00007ffe0b353c60 r15: 00007ffe0b3537f9
  di: 0000000000000002  si: 00007ffe0b353560  bp: 00007ffe0b3537a0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f2ceed41fff  sp: 00007ffe0b3535d8
  ip: 00007f2ceed41fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Selection API

- URL: [https://www.w3.org/TR/selection-api/](https://www.w3.org/TR/selection-api/)
- Crawled version: [Editor's Draft](https://w3c.github.io/selection-api/)
- Repository: [GitHub w3c/selection-api](https://github.com/w3c/selection-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020223.571330:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c20780 logging::LogMessage::~LogMessage()
#2 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#3 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f985942a00 content::RunNamedProcessTypeMain()
#7 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#8 0x55f98594cf24 service_manager::Main()
#9 0x55f985941f14 content::ContentMain()
#10 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f989a51a42 headless::HeadlessBrowserMain()
#12 0x55f985949f9d headless::HeadlessShellMain()
#13 0x55f983fa81ac ChromeMain
#14 0x7f430c1fb2e1 __libc_start_main
#15 0x55f983fa802a _start

Received signal 6
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c07671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43121580c0 <unknown>
#3 0x7f430c20dfff gsignal
#4 0x7f430c20f42a abort
#5 0x55f985c06105 base::debug::BreakDebugger()
#6 0x55f985c20bca logging::LogMessage::~LogMessage()
#7 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#8 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f985942a00 content::RunNamedProcessTypeMain()
#12 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#13 0x55f98594cf24 service_manager::Main()
#14 0x55f985941f14 content::ContentMain()
#15 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f989a51a42 headless::HeadlessBrowserMain()
#17 0x55f985949f9d headless::HeadlessShellMain()
#18 0x55f983fa81ac ChromeMain
#19 0x7f430c1fb2e1 __libc_start_main
#20 0x55f983fa802a _start
  r8: 0000000000000000  r9: 00007ffc85d16390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc85d16a88 r13: 0000000000000161 r14: 00007ffc85d16a90 r15: 00007ffc85d16629
  di: 0000000000000002  si: 00007ffc85d16390  bp: 00007ffc85d165d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f430c20dfff  sp: 00007ffc85d16408
  ip: 00007f430c20dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.571330:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c20780 logging::LogMessage::~LogMessage()
#2 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#3 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55f985942a00 content::RunNamedProcessTypeMain()
#7 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#8 0x55f98594cf24 service_manager::Main()
#9 0x55f985941f14 content::ContentMain()
#10 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55f989a51a42 headless::HeadlessBrowserMain()
#12 0x55f985949f9d headless::HeadlessShellMain()
#13 0x55f983fa81ac ChromeMain
#14 0x7f430c1fb2e1 __libc_start_main
#15 0x55f983fa802a _start

Received signal 6
#0 0x55f985c07b0c base::debug::StackTrace::StackTrace()
#1 0x55f985c07671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f43121580c0 <unknown>
#3 0x7f430c20dfff gsignal
#4 0x7f430c20f42a abort
#5 0x55f985c06105 base::debug::BreakDebugger()
#6 0x55f985c20bca logging::LogMessage::~LogMessage()
#7 0x55f984cb02b1 content::ZygoteHostImpl::Init()
#8 0x55f984922c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55f984928a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55f989a529a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55f985942a00 content::RunNamedProcessTypeMain()
#12 0x55f9859432e8 content::ContentMainRunnerImpl::Run()
#13 0x55f98594cf24 service_manager::Main()
#14 0x55f985941f14 content::ContentMain()
#15 0x55f989a519b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55f989a51a42 headless::HeadlessBrowserMain()
#17 0x55f985949f9d headless::HeadlessShellMain()
#18 0x55f983fa81ac ChromeMain
#19 0x7f430c1fb2e1 __libc_start_main
#20 0x55f983fa802a _start
  r8: 0000000000000000  r9: 00007ffc85d16390 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffc85d16a88 r13: 0000000000000161 r14: 00007ffc85d16a90 r15: 00007ffc85d16629
  di: 0000000000000002  si: 00007ffc85d16390  bp: 00007ffc85d165d0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f430c20dfff  sp: 00007ffc85d16408
  ip: 00007f430c20dfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Server Timing

- URL: [https://www.w3.org/TR/server-timing/](https://www.w3.org/TR/server-timing/)
- Crawled version: [Editor's Draft](https://w3c.github.io/server-timing/)
- Repository: [GitHub w3c/server-timing](https://github.com/w3c/server-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020224.000952:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d44d780 logging::LogMessage::~LogMessage()
#2 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#3 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55951d16fa00 content::RunNamedProcessTypeMain()
#7 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#8 0x55951d179f24 service_manager::Main()
#9 0x55951d16ef14 content::ContentMain()
#10 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55952127ea42 headless::HeadlessBrowserMain()
#12 0x55951d176f9d headless::HeadlessShellMain()
#13 0x55951b7d51ac ChromeMain
#14 0x7f75960b82e1 __libc_start_main
#15 0x55951b7d502a _start

Received signal 6
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d434671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f759c0150c0 <unknown>
#3 0x7f75960cafff gsignal
#4 0x7f75960cc42a abort
#5 0x55951d433105 base::debug::BreakDebugger()
#6 0x55951d44dbca logging::LogMessage::~LogMessage()
#7 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#8 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55951d16fa00 content::RunNamedProcessTypeMain()
#12 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#13 0x55951d179f24 service_manager::Main()
#14 0x55951d16ef14 content::ContentMain()
#15 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55952127ea42 headless::HeadlessBrowserMain()
#17 0x55951d176f9d headless::HeadlessShellMain()
#18 0x55951b7d51ac ChromeMain
#19 0x7f75960b82e1 __libc_start_main
#20 0x55951b7d502a _start
  r8: 0000000000000000  r9: 00007ffd339274b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd33927ba8 r13: 0000000000000161 r14: 00007ffd33927bb0 r15: 00007ffd33927749
  di: 0000000000000002  si: 00007ffd339274b0  bp: 00007ffd339276f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f75960cafff  sp: 00007ffd33927528
  ip: 00007f75960cafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020224.000952:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d44d780 logging::LogMessage::~LogMessage()
#2 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#3 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55951d16fa00 content::RunNamedProcessTypeMain()
#7 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#8 0x55951d179f24 service_manager::Main()
#9 0x55951d16ef14 content::ContentMain()
#10 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55952127ea42 headless::HeadlessBrowserMain()
#12 0x55951d176f9d headless::HeadlessShellMain()
#13 0x55951b7d51ac ChromeMain
#14 0x7f75960b82e1 __libc_start_main
#15 0x55951b7d502a _start

Received signal 6
#0 0x55951d434b0c base::debug::StackTrace::StackTrace()
#1 0x55951d434671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f759c0150c0 <unknown>
#3 0x7f75960cafff gsignal
#4 0x7f75960cc42a abort
#5 0x55951d433105 base::debug::BreakDebugger()
#6 0x55951d44dbca logging::LogMessage::~LogMessage()
#7 0x55951c4dd2b1 content::ZygoteHostImpl::Init()
#8 0x55951c14fc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55951c155a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55952127f9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55951d16fa00 content::RunNamedProcessTypeMain()
#12 0x55951d1702e8 content::ContentMainRunnerImpl::Run()
#13 0x55951d179f24 service_manager::Main()
#14 0x55951d16ef14 content::ContentMain()
#15 0x55952127e9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55952127ea42 headless::HeadlessBrowserMain()
#17 0x55951d176f9d headless::HeadlessShellMain()
#18 0x55951b7d51ac ChromeMain
#19 0x7f75960b82e1 __libc_start_main
#20 0x55951b7d502a _start
  r8: 0000000000000000  r9: 00007ffd339274b0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd33927ba8 r13: 0000000000000161 r14: 00007ffd33927bb0 r15: 00007ffd33927749
  di: 0000000000000002  si: 00007ffd339274b0  bp: 00007ffd339276f0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f75960cafff  sp: 00007ffd33927528
  ip: 00007f75960cafff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## The Screen Orientation API

- URL: [https://www.w3.org/TR/screen-orientation/](https://www.w3.org/TR/screen-orientation/)
- Crawled version: [Editor's Draft](https://w3c.github.io/screen-orientation/)
- Repository: [GitHub w3c/screen-orientation](https://github.com/w3c/screen-orientation)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020223.366184:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174fa8780 logging::LogMessage::~LogMessage()
#2 0x5651740382b1 content::ZygoteHostImpl::Init()
#3 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565174ccaa00 content::RunNamedProcessTypeMain()
#7 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#8 0x565174cd4f24 service_manager::Main()
#9 0x565174cc9f14 content::ContentMain()
#10 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565178dd9a42 headless::HeadlessBrowserMain()
#12 0x565174cd1f9d headless::HeadlessShellMain()
#13 0x5651733301ac ChromeMain
#14 0x7fb8a81ae2e1 __libc_start_main
#15 0x56517333002a _start

Received signal 6
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174f8f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb8ae10b0c0 <unknown>
#3 0x7fb8a81c0fff gsignal
#4 0x7fb8a81c242a abort
#5 0x565174f8e105 base::debug::BreakDebugger()
#6 0x565174fa8bca logging::LogMessage::~LogMessage()
#7 0x5651740382b1 content::ZygoteHostImpl::Init()
#8 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565174ccaa00 content::RunNamedProcessTypeMain()
#12 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#13 0x565174cd4f24 service_manager::Main()
#14 0x565174cc9f14 content::ContentMain()
#15 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565178dd9a42 headless::HeadlessBrowserMain()
#17 0x565174cd1f9d headless::HeadlessShellMain()
#18 0x5651733301ac ChromeMain
#19 0x7fb8a81ae2e1 __libc_start_main
#20 0x56517333002a _start
  r8: 0000000000000000  r9: 00007ffdf9f67520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf9f67c18 r13: 0000000000000161 r14: 00007ffdf9f67c20 r15: 00007ffdf9f677b9
  di: 0000000000000002  si: 00007ffdf9f67520  bp: 00007ffdf9f67760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb8a81c0fff  sp: 00007ffdf9f67598
  ip: 00007fb8a81c0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.366184:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174fa8780 logging::LogMessage::~LogMessage()
#2 0x5651740382b1 content::ZygoteHostImpl::Init()
#3 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x565174ccaa00 content::RunNamedProcessTypeMain()
#7 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#8 0x565174cd4f24 service_manager::Main()
#9 0x565174cc9f14 content::ContentMain()
#10 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x565178dd9a42 headless::HeadlessBrowserMain()
#12 0x565174cd1f9d headless::HeadlessShellMain()
#13 0x5651733301ac ChromeMain
#14 0x7fb8a81ae2e1 __libc_start_main
#15 0x56517333002a _start

Received signal 6
#0 0x565174f8fb0c base::debug::StackTrace::StackTrace()
#1 0x565174f8f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fb8ae10b0c0 <unknown>
#3 0x7fb8a81c0fff gsignal
#4 0x7fb8a81c242a abort
#5 0x565174f8e105 base::debug::BreakDebugger()
#6 0x565174fa8bca logging::LogMessage::~LogMessage()
#7 0x5651740382b1 content::ZygoteHostImpl::Init()
#8 0x565173caac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x565173cb0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x565178dda9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x565174ccaa00 content::RunNamedProcessTypeMain()
#12 0x565174ccb2e8 content::ContentMainRunnerImpl::Run()
#13 0x565174cd4f24 service_manager::Main()
#14 0x565174cc9f14 content::ContentMain()
#15 0x565178dd99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x565178dd9a42 headless::HeadlessBrowserMain()
#17 0x565174cd1f9d headless::HeadlessShellMain()
#18 0x5651733301ac ChromeMain
#19 0x7fb8a81ae2e1 __libc_start_main
#20 0x56517333002a _start
  r8: 0000000000000000  r9: 00007ffdf9f67520 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffdf9f67c18 r13: 0000000000000161 r14: 00007ffdf9f67c20 r15: 00007ffdf9f677b9
  di: 0000000000000002  si: 00007ffdf9f67520  bp: 00007ffdf9f67760  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fb8a81c0fff  sp: 00007ffdf9f67598
  ip: 00007fb8a81c0fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Touch Events

- URL: [https://www.w3.org/TR/touch-events/](https://www.w3.org/TR/touch-events/)
- Crawled version: [Editor's Draft](https://w3c.github.io/touch-events/)
- Repository: [GitHub w3c/touch-events](https://github.com/w3c/touch-events)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020223.591854:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c422a780 logging::LogMessage::~LogMessage()
#2 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#3 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#7 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e3c3f56f24 service_manager::Main()
#9 0x55e3c3f4bf14 content::ContentMain()
#10 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e3c805ba42 headless::HeadlessBrowserMain()
#12 0x55e3c3f53f9d headless::HeadlessShellMain()
#13 0x55e3c25b21ac ChromeMain
#14 0x7f1ebf6e42e1 __libc_start_main
#15 0x55e3c25b202a _start

Received signal 6
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c4211671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1ec56410c0 <unknown>
#3 0x7f1ebf6f6fff gsignal
#4 0x7f1ebf6f842a abort
#5 0x55e3c4210105 base::debug::BreakDebugger()
#6 0x55e3c422abca logging::LogMessage::~LogMessage()
#7 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#8 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#12 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e3c3f56f24 service_manager::Main()
#14 0x55e3c3f4bf14 content::ContentMain()
#15 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e3c805ba42 headless::HeadlessBrowserMain()
#17 0x55e3c3f53f9d headless::HeadlessShellMain()
#18 0x55e3c25b21ac ChromeMain
#19 0x7f1ebf6e42e1 __libc_start_main
#20 0x55e3c25b202a _start
  r8: 0000000000000000  r9: 00007ffd41b21740 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd41b21e38 r13: 0000000000000161 r14: 00007ffd41b21e40 r15: 00007ffd41b219d9
  di: 0000000000000002  si: 00007ffd41b21740  bp: 00007ffd41b21980  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1ebf6f6fff  sp: 00007ffd41b217b8
  ip: 00007f1ebf6f6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020223.591854:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c422a780 logging::LogMessage::~LogMessage()
#2 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#3 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#7 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#8 0x55e3c3f56f24 service_manager::Main()
#9 0x55e3c3f4bf14 content::ContentMain()
#10 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55e3c805ba42 headless::HeadlessBrowserMain()
#12 0x55e3c3f53f9d headless::HeadlessShellMain()
#13 0x55e3c25b21ac ChromeMain
#14 0x7f1ebf6e42e1 __libc_start_main
#15 0x55e3c25b202a _start

Received signal 6
#0 0x55e3c4211b0c base::debug::StackTrace::StackTrace()
#1 0x55e3c4211671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f1ec56410c0 <unknown>
#3 0x7f1ebf6f6fff gsignal
#4 0x7f1ebf6f842a abort
#5 0x55e3c4210105 base::debug::BreakDebugger()
#6 0x55e3c422abca logging::LogMessage::~LogMessage()
#7 0x55e3c32ba2b1 content::ZygoteHostImpl::Init()
#8 0x55e3c2f2cc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55e3c2f32a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55e3c805c9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55e3c3f4ca00 content::RunNamedProcessTypeMain()
#12 0x55e3c3f4d2e8 content::ContentMainRunnerImpl::Run()
#13 0x55e3c3f56f24 service_manager::Main()
#14 0x55e3c3f4bf14 content::ContentMain()
#15 0x55e3c805b9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55e3c805ba42 headless::HeadlessBrowserMain()
#17 0x55e3c3f53f9d headless::HeadlessShellMain()
#18 0x55e3c25b21ac ChromeMain
#19 0x7f1ebf6e42e1 __libc_start_main
#20 0x55e3c25b202a _start
  r8: 0000000000000000  r9: 00007ffd41b21740 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffd41b21e38 r13: 0000000000000161 r14: 00007ffd41b21e40 r15: 00007ffd41b219d9
  di: 0000000000000002  si: 00007ffd41b21740  bp: 00007ffd41b21980  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f1ebf6f6fff  sp: 00007ffd41b217b8
  ip: 00007f1ebf6f6fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## User Timing Level 2

- URL: [https://www.w3.org/TR/user-timing-2/](https://www.w3.org/TR/user-timing-2/)
- Crawled version: [Editor's Draft](https://w3c.github.io/user-timing/)
- Repository: [GitHub w3c/user-timing](https://github.com/w3c/user-timing)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020230.526288:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd878780 logging::LogMessage::~LogMessage()
#2 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#3 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#7 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5620dd5a4f24 service_manager::Main()
#9 0x5620dd599f14 content::ContentMain()
#10 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5620e16a9a42 headless::HeadlessBrowserMain()
#12 0x5620dd5a1f9d headless::HeadlessShellMain()
#13 0x5620dbc001ac ChromeMain
#14 0x7f40f6fc12e1 __libc_start_main
#15 0x5620dbc0002a _start

Received signal 6
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd85f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f40fcf1e0c0 <unknown>
#3 0x7f40f6fd3fff gsignal
#4 0x7f40f6fd542a abort
#5 0x5620dd85e105 base::debug::BreakDebugger()
#6 0x5620dd878bca logging::LogMessage::~LogMessage()
#7 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#8 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#12 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5620dd5a4f24 service_manager::Main()
#14 0x5620dd599f14 content::ContentMain()
#15 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5620e16a9a42 headless::HeadlessBrowserMain()
#17 0x5620dd5a1f9d headless::HeadlessShellMain()
#18 0x5620dbc001ac ChromeMain
#19 0x7f40f6fc12e1 __libc_start_main
#20 0x5620dbc0002a _start
  r8: 0000000000000000  r9: 00007fff727b2180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff727b2878 r13: 0000000000000161 r14: 00007fff727b2880 r15: 00007fff727b2419
  di: 0000000000000002  si: 00007fff727b2180  bp: 00007fff727b23c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f40f6fd3fff  sp: 00007fff727b21f8
  ip: 00007f40f6fd3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.526288:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd878780 logging::LogMessage::~LogMessage()
#2 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#3 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#7 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#8 0x5620dd5a4f24 service_manager::Main()
#9 0x5620dd599f14 content::ContentMain()
#10 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5620e16a9a42 headless::HeadlessBrowserMain()
#12 0x5620dd5a1f9d headless::HeadlessShellMain()
#13 0x5620dbc001ac ChromeMain
#14 0x7f40f6fc12e1 __libc_start_main
#15 0x5620dbc0002a _start

Received signal 6
#0 0x5620dd85fb0c base::debug::StackTrace::StackTrace()
#1 0x5620dd85f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f40fcf1e0c0 <unknown>
#3 0x7f40f6fd3fff gsignal
#4 0x7f40f6fd542a abort
#5 0x5620dd85e105 base::debug::BreakDebugger()
#6 0x5620dd878bca logging::LogMessage::~LogMessage()
#7 0x5620dc9082b1 content::ZygoteHostImpl::Init()
#8 0x5620dc57ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5620dc580a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5620e16aa9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5620dd59aa00 content::RunNamedProcessTypeMain()
#12 0x5620dd59b2e8 content::ContentMainRunnerImpl::Run()
#13 0x5620dd5a4f24 service_manager::Main()
#14 0x5620dd599f14 content::ContentMain()
#15 0x5620e16a99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5620e16a9a42 headless::HeadlessBrowserMain()
#17 0x5620dd5a1f9d headless::HeadlessShellMain()
#18 0x5620dbc001ac ChromeMain
#19 0x7f40f6fc12e1 __libc_start_main
#20 0x5620dbc0002a _start
  r8: 0000000000000000  r9: 00007fff727b2180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff727b2878 r13: 0000000000000161 r14: 00007fff727b2880 r15: 00007fff727b2419
  di: 0000000000000002  si: 00007fff727b2180  bp: 00007fff727b23c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f40f6fd3fff  sp: 00007fff727b21f8
  ip: 00007f40f6fd3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Vibration API (Second Edition)

- URL: [https://www.w3.org/TR/vibration/](https://www.w3.org/TR/vibration/)
- Crawled version: [Editor's Draft](https://w3c.github.io/vibration/)
- Repository: [GitHub w3c/vibration](https://github.com/w3c/vibration)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020230.501036:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd41c780 logging::LogMessage::~LogMessage()
#2 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#3 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#7 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55eadd148f24 service_manager::Main()
#9 0x55eadd13df14 content::ContentMain()
#10 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55eae124da42 headless::HeadlessBrowserMain()
#12 0x55eadd145f9d headless::HeadlessShellMain()
#13 0x55eadb7a41ac ChromeMain
#14 0x7fe1a598a2e1 __libc_start_main
#15 0x55eadb7a402a _start

Received signal 6
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd403671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe1ab8e70c0 <unknown>
#3 0x7fe1a599cfff gsignal
#4 0x7fe1a599e42a abort
#5 0x55eadd402105 base::debug::BreakDebugger()
#6 0x55eadd41cbca logging::LogMessage::~LogMessage()
#7 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#8 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#12 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55eadd148f24 service_manager::Main()
#14 0x55eadd13df14 content::ContentMain()
#15 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55eae124da42 headless::HeadlessBrowserMain()
#17 0x55eadd145f9d headless::HeadlessShellMain()
#18 0x55eadb7a41ac ChromeMain
#19 0x7fe1a598a2e1 __libc_start_main
#20 0x55eadb7a402a _start
  r8: 0000000000000000  r9: 00007ffcf7363a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf7364148 r13: 0000000000000161 r14: 00007ffcf7364150 r15: 00007ffcf7363ce9
  di: 0000000000000002  si: 00007ffcf7363a50  bp: 00007ffcf7363c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe1a599cfff  sp: 00007ffcf7363ac8
  ip: 00007fe1a599cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.501036:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd41c780 logging::LogMessage::~LogMessage()
#2 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#3 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#7 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#8 0x55eadd148f24 service_manager::Main()
#9 0x55eadd13df14 content::ContentMain()
#10 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55eae124da42 headless::HeadlessBrowserMain()
#12 0x55eadd145f9d headless::HeadlessShellMain()
#13 0x55eadb7a41ac ChromeMain
#14 0x7fe1a598a2e1 __libc_start_main
#15 0x55eadb7a402a _start

Received signal 6
#0 0x55eadd403b0c base::debug::StackTrace::StackTrace()
#1 0x55eadd403671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fe1ab8e70c0 <unknown>
#3 0x7fe1a599cfff gsignal
#4 0x7fe1a599e42a abort
#5 0x55eadd402105 base::debug::BreakDebugger()
#6 0x55eadd41cbca logging::LogMessage::~LogMessage()
#7 0x55eadc4ac2b1 content::ZygoteHostImpl::Init()
#8 0x55eadc11ec65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55eadc124a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55eae124e9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55eadd13ea00 content::RunNamedProcessTypeMain()
#12 0x55eadd13f2e8 content::ContentMainRunnerImpl::Run()
#13 0x55eadd148f24 service_manager::Main()
#14 0x55eadd13df14 content::ContentMain()
#15 0x55eae124d9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55eae124da42 headless::HeadlessBrowserMain()
#17 0x55eadd145f9d headless::HeadlessShellMain()
#18 0x55eadb7a41ac ChromeMain
#19 0x7fe1a598a2e1 __libc_start_main
#20 0x55eadb7a402a _start
  r8: 0000000000000000  r9: 00007ffcf7363a50 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcf7364148 r13: 0000000000000161 r14: 00007ffcf7364150 r15: 00007ffcf7363ce9
  di: 0000000000000002  si: 00007ffcf7363a50  bp: 00007ffcf7363c90  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fe1a599cfff  sp: 00007ffcf7363ac8
  ip: 00007fe1a599cfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Wake Lock API

- URL: [https://www.w3.org/TR/wake-lock/](https://www.w3.org/TR/wake-lock/)
- Crawled version: [Editor's Draft](https://w3c.github.io/wake-lock/)
- Repository: [GitHub w3c/wake-lock](https://github.com/w3c/wake-lock)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020230.642183:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d872298780 logging::LogMessage::~LogMessage()
#2 0x55d8713282b1 content::ZygoteHostImpl::Init()
#3 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#7 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d871fc4f24 service_manager::Main()
#9 0x55d871fb9f14 content::ContentMain()
#10 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d8760c9a42 headless::HeadlessBrowserMain()
#12 0x55d871fc1f9d headless::HeadlessShellMain()
#13 0x55d8706201ac ChromeMain
#14 0x7fd757c552e1 __libc_start_main
#15 0x55d87062002a _start

Received signal 6
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d87227f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd75dbb20c0 <unknown>
#3 0x7fd757c67fff gsignal
#4 0x7fd757c6942a abort
#5 0x55d87227e105 base::debug::BreakDebugger()
#6 0x55d872298bca logging::LogMessage::~LogMessage()
#7 0x55d8713282b1 content::ZygoteHostImpl::Init()
#8 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#12 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d871fc4f24 service_manager::Main()
#14 0x55d871fb9f14 content::ContentMain()
#15 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d8760c9a42 headless::HeadlessBrowserMain()
#17 0x55d871fc1f9d headless::HeadlessShellMain()
#18 0x55d8706201ac ChromeMain
#19 0x7fd757c552e1 __libc_start_main
#20 0x55d87062002a _start
  r8: 0000000000000000  r9: 00007ffe6a339ae0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe6a33a1d8 r13: 0000000000000161 r14: 00007ffe6a33a1e0 r15: 00007ffe6a339d79
  di: 0000000000000002  si: 00007ffe6a339ae0  bp: 00007ffe6a339d20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd757c67fff  sp: 00007ffe6a339b58
  ip: 00007fd757c67fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.642183:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d872298780 logging::LogMessage::~LogMessage()
#2 0x55d8713282b1 content::ZygoteHostImpl::Init()
#3 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#7 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#8 0x55d871fc4f24 service_manager::Main()
#9 0x55d871fb9f14 content::ContentMain()
#10 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55d8760c9a42 headless::HeadlessBrowserMain()
#12 0x55d871fc1f9d headless::HeadlessShellMain()
#13 0x55d8706201ac ChromeMain
#14 0x7fd757c552e1 __libc_start_main
#15 0x55d87062002a _start

Received signal 6
#0 0x55d87227fb0c base::debug::StackTrace::StackTrace()
#1 0x55d87227f671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd75dbb20c0 <unknown>
#3 0x7fd757c67fff gsignal
#4 0x7fd757c6942a abort
#5 0x55d87227e105 base::debug::BreakDebugger()
#6 0x55d872298bca logging::LogMessage::~LogMessage()
#7 0x55d8713282b1 content::ZygoteHostImpl::Init()
#8 0x55d870f9ac65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55d870fa0a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55d8760ca9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55d871fbaa00 content::RunNamedProcessTypeMain()
#12 0x55d871fbb2e8 content::ContentMainRunnerImpl::Run()
#13 0x55d871fc4f24 service_manager::Main()
#14 0x55d871fb9f14 content::ContentMain()
#15 0x55d8760c99b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55d8760c9a42 headless::HeadlessBrowserMain()
#17 0x55d871fc1f9d headless::HeadlessShellMain()
#18 0x55d8706201ac ChromeMain
#19 0x7fd757c552e1 __libc_start_main
#20 0x55d87062002a _start
  r8: 0000000000000000  r9: 00007ffe6a339ae0 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe6a33a1d8 r13: 0000000000000161 r14: 00007ffe6a33a1e0 r15: 00007ffe6a339d79
  di: 0000000000000002  si: 00007ffe6a339ae0  bp: 00007ffe6a339d20  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd757c67fff  sp: 00007ffe6a339b58
  ip: 00007fd757c67fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Web App Manifest

- URL: [https://www.w3.org/TR/appmanifest/](https://www.w3.org/TR/appmanifest/)
- Crawled version: [Editor's Draft](https://w3c.github.io/manifest/)
- Repository: [GitHub w3c/manifest](https://github.com/w3c/manifest)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020142.830890:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b06f780 logging::LogMessage::~LogMessage()
#2 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#3 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#7 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#8 0x563a6ad9bf24 service_manager::Main()
#9 0x563a6ad90f14 content::ContentMain()
#10 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563a6eea0a42 headless::HeadlessBrowserMain()
#12 0x563a6ad98f9d headless::HeadlessShellMain()
#13 0x563a693f71ac ChromeMain
#14 0x7f49fc9892e1 __libc_start_main
#15 0x563a693f702a _start

Received signal 6
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b056671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4a028e60c0 <unknown>
#3 0x7f49fc99bfff gsignal
#4 0x7f49fc99d42a abort
#5 0x563a6b055105 base::debug::BreakDebugger()
#6 0x563a6b06fbca logging::LogMessage::~LogMessage()
#7 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#8 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#12 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#13 0x563a6ad9bf24 service_manager::Main()
#14 0x563a6ad90f14 content::ContentMain()
#15 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563a6eea0a42 headless::HeadlessBrowserMain()
#17 0x563a6ad98f9d headless::HeadlessShellMain()
#18 0x563a693f71ac ChromeMain
#19 0x7f49fc9892e1 __libc_start_main
#20 0x563a693f702a _start
  r8: 0000000000000000  r9: 00007ffcfe867180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcfe867878 r13: 0000000000000161 r14: 00007ffcfe867880 r15: 00007ffcfe867419
  di: 0000000000000002  si: 00007ffcfe867180  bp: 00007ffcfe8673c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f49fc99bfff  sp: 00007ffcfe8671f8
  ip: 00007f49fc99bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020142.830890:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b06f780 logging::LogMessage::~LogMessage()
#2 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#3 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#7 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#8 0x563a6ad9bf24 service_manager::Main()
#9 0x563a6ad90f14 content::ContentMain()
#10 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#11 0x563a6eea0a42 headless::HeadlessBrowserMain()
#12 0x563a6ad98f9d headless::HeadlessShellMain()
#13 0x563a693f71ac ChromeMain
#14 0x7f49fc9892e1 __libc_start_main
#15 0x563a693f702a _start

Received signal 6
#0 0x563a6b056b0c base::debug::StackTrace::StackTrace()
#1 0x563a6b056671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f4a028e60c0 <unknown>
#3 0x7f49fc99bfff gsignal
#4 0x7f49fc99d42a abort
#5 0x563a6b055105 base::debug::BreakDebugger()
#6 0x563a6b06fbca logging::LogMessage::~LogMessage()
#7 0x563a6a0ff2b1 content::ZygoteHostImpl::Init()
#8 0x563a69d71c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x563a69d77a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x563a6eea19a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x563a6ad91a00 content::RunNamedProcessTypeMain()
#12 0x563a6ad922e8 content::ContentMainRunnerImpl::Run()
#13 0x563a6ad9bf24 service_manager::Main()
#14 0x563a6ad90f14 content::ContentMain()
#15 0x563a6eea09b9 headless::(anonymous namespace)::RunContentMain()
#16 0x563a6eea0a42 headless::HeadlessBrowserMain()
#17 0x563a6ad98f9d headless::HeadlessShellMain()
#18 0x563a693f71ac ChromeMain
#19 0x7f49fc9892e1 __libc_start_main
#20 0x563a693f702a _start
  r8: 0000000000000000  r9: 00007ffcfe867180 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffcfe867878 r13: 0000000000000161 r14: 00007ffcfe867880 r15: 00007ffcfe867419
  di: 0000000000000002  si: 00007ffcfe867180  bp: 00007ffcfe8673c0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f49fc99bfff  sp: 00007ffcfe8671f8
  ip: 00007f49fc99bfff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## Web MIDI API

- URL: [https://www.w3.org/TR/webmidi/](https://www.w3.org/TR/webmidi/)
- Crawled version: [Editor's Draft](http://webaudio.github.io/web-midi-api/)
- Repository: [GitHub webaudio/web-midi-api](https://github.com/webaudio/web-midi-api)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020230.994665:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701f1780 logging::LogMessage::~LogMessage()
#2 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#3 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#7 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#8 0x55b86ff1df24 service_manager::Main()
#9 0x55b86ff12f14 content::ContentMain()
#10 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b874022a42 headless::HeadlessBrowserMain()
#12 0x55b86ff1af9d headless::HeadlessShellMain()
#13 0x55b86e5791ac ChromeMain
#14 0x7fd998ac12e1 __libc_start_main
#15 0x55b86e57902a _start

Received signal 6
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701d8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd99ea1e0c0 <unknown>
#3 0x7fd998ad3fff gsignal
#4 0x7fd998ad542a abort
#5 0x55b8701d7105 base::debug::BreakDebugger()
#6 0x55b8701f1bca logging::LogMessage::~LogMessage()
#7 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#8 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#12 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#13 0x55b86ff1df24 service_manager::Main()
#14 0x55b86ff12f14 content::ContentMain()
#15 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b874022a42 headless::HeadlessBrowserMain()
#17 0x55b86ff1af9d headless::HeadlessShellMain()
#18 0x55b86e5791ac ChromeMain
#19 0x7fd998ac12e1 __libc_start_main
#20 0x55b86e57902a _start
  r8: 0000000000000000  r9: 00007fff23958b80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff23959278 r13: 0000000000000161 r14: 00007fff23959280 r15: 00007fff23958e19
  di: 0000000000000002  si: 00007fff23958b80  bp: 00007fff23958dc0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd998ad3fff  sp: 00007fff23958bf8
  ip: 00007fd998ad3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020230.994665:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701f1780 logging::LogMessage::~LogMessage()
#2 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#3 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#4 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#7 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#8 0x55b86ff1df24 service_manager::Main()
#9 0x55b86ff12f14 content::ContentMain()
#10 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#11 0x55b874022a42 headless::HeadlessBrowserMain()
#12 0x55b86ff1af9d headless::HeadlessShellMain()
#13 0x55b86e5791ac ChromeMain
#14 0x7fd998ac12e1 __libc_start_main
#15 0x55b86e57902a _start

Received signal 6
#0 0x55b8701d8b0c base::debug::StackTrace::StackTrace()
#1 0x55b8701d8671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7fd99ea1e0c0 <unknown>
#3 0x7fd998ad3fff gsignal
#4 0x7fd998ad542a abort
#5 0x55b8701d7105 base::debug::BreakDebugger()
#6 0x55b8701f1bca logging::LogMessage::~LogMessage()
#7 0x55b86f2812b1 content::ZygoteHostImpl::Init()
#8 0x55b86eef3c65 content::BrowserMainLoop::EarlyInitialization()
#9 0x55b86eef9a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x55b8740239a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x55b86ff13a00 content::RunNamedProcessTypeMain()
#12 0x55b86ff142e8 content::ContentMainRunnerImpl::Run()
#13 0x55b86ff1df24 service_manager::Main()
#14 0x55b86ff12f14 content::ContentMain()
#15 0x55b8740229b9 headless::(anonymous namespace)::RunContentMain()
#16 0x55b874022a42 headless::HeadlessBrowserMain()
#17 0x55b86ff1af9d headless::HeadlessShellMain()
#18 0x55b86e5791ac ChromeMain
#19 0x7fd998ac12e1 __libc_start_main
#20 0x55b86e57902a _start
  r8: 0000000000000000  r9: 00007fff23958b80 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff23959278 r13: 0000000000000161 r14: 00007fff23959280 r15: 00007fff23958e19
  di: 0000000000000002  si: 00007fff23958b80  bp: 00007fff23958dc0  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fd998ad3fff  sp: 00007fff23958bf8
  ip: 00007fd998ad3fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


## WebRTC 1.0: Real-time Communication Between Browsers

- URL: [https://www.w3.org/TR/webrtc/](https://www.w3.org/TR/webrtc/)
- Crawled version: [Editor's Draft](https://w3c.github.io/webrtc-pc/)
- Repository: [GitHub w3c/webrtc-pc](https://github.com/w3c/webrtc-pc)
- Spec could not be rendered: *INS* Error: Failed to launch chrome!
[0511/020243.352106:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42db780 logging::LogMessage::~LogMessage()
#2 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#3 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#7 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5611a4007f24 service_manager::Main()
#9 0x5611a3ffcf14 content::ContentMain()
#10 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5611a810ca42 headless::HeadlessBrowserMain()
#12 0x5611a4004f9d headless::HeadlessShellMain()
#13 0x5611a26631ac ChromeMain
#14 0x7f9678a512e1 __libc_start_main
#15 0x5611a266302a _start

Received signal 6
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f967e9ae0c0 <unknown>
#3 0x7f9678a63fff gsignal
#4 0x7f9678a6542a abort
#5 0x5611a42c1105 base::debug::BreakDebugger()
#6 0x5611a42dbbca logging::LogMessage::~LogMessage()
#7 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#8 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#12 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5611a4007f24 service_manager::Main()
#14 0x5611a3ffcf14 content::ContentMain()
#15 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5611a810ca42 headless::HeadlessBrowserMain()
#17 0x5611a4004f9d headless::HeadlessShellMain()
#18 0x5611a26631ac ChromeMain
#19 0x7f9678a512e1 __libc_start_main
#20 0x5611a266302a _start
  r8: 0000000000000000  r9: 00007fff68abb550 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff68abbc48 r13: 0000000000000161 r14: 00007fff68abbc50 r15: 00007fff68abb7e9
  di: 0000000000000002  si: 00007fff68abb550  bp: 00007fff68abb790  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9678a63fff  sp: 00007fff68abb5c8
  ip: 00007f9678a63fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md
 Error: Failed to launch chrome!
[0511/020243.352106:FATAL:zygote_host_impl_linux.cc(124)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42db780 logging::LogMessage::~LogMessage()
#2 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#3 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#4 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#5 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#6 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#7 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#8 0x5611a4007f24 service_manager::Main()
#9 0x5611a3ffcf14 content::ContentMain()
#10 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#11 0x5611a810ca42 headless::HeadlessBrowserMain()
#12 0x5611a4004f9d headless::HeadlessShellMain()
#13 0x5611a26631ac ChromeMain
#14 0x7f9678a512e1 __libc_start_main
#15 0x5611a266302a _start

Received signal 6
#0 0x5611a42c2b0c base::debug::StackTrace::StackTrace()
#1 0x5611a42c2671 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#2 0x7f967e9ae0c0 <unknown>
#3 0x7f9678a63fff gsignal
#4 0x7f9678a6542a abort
#5 0x5611a42c1105 base::debug::BreakDebugger()
#6 0x5611a42dbbca logging::LogMessage::~LogMessage()
#7 0x5611a336b2b1 content::ZygoteHostImpl::Init()
#8 0x5611a2fddc65 content::BrowserMainLoop::EarlyInitialization()
#9 0x5611a2fe3a69 content::BrowserMainRunnerImpl::Initialize()
#10 0x5611a810d9a8 headless::HeadlessContentMainDelegate::RunProcess()
#11 0x5611a3ffda00 content::RunNamedProcessTypeMain()
#12 0x5611a3ffe2e8 content::ContentMainRunnerImpl::Run()
#13 0x5611a4007f24 service_manager::Main()
#14 0x5611a3ffcf14 content::ContentMain()
#15 0x5611a810c9b9 headless::(anonymous namespace)::RunContentMain()
#16 0x5611a810ca42 headless::HeadlessBrowserMain()
#17 0x5611a4004f9d headless::HeadlessShellMain()
#18 0x5611a26631ac ChromeMain
#19 0x7f9678a512e1 __libc_start_main
#20 0x5611a266302a _start
  r8: 0000000000000000  r9: 00007fff68abb550 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007fff68abbc48 r13: 0000000000000161 r14: 00007fff68abbc50 r15: 00007fff68abb7e9
  di: 0000000000000002  si: 00007fff68abb550  bp: 00007fff68abb790  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007f9678a63fff  sp: 00007fff68abb5c8
  ip: 00007f9678a63fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md

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
    at _combinedTickCallback (internal/process/next_tick.js:138:11)


