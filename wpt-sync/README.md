This code copies `*.idl` files from [whatwg/idl/](/whatwg/idl/) in this repo
into [interfaces/](https://github.com/web-platform-tests/wpt/tree/master/interfaces) in wpt.

## Running locally

Required environment variables:
 * `GH_USER` must be set to a GitHub user name which has a fork of
   [wpt](https://github.com/web-platform-tests/wpt)
 * `GH_TOKEN` must be set to a
   [personal access token](https://github.com/settings/tokens/new) with the
   "Access public repositories" (public_repo) scope enabled.

A local checkout of wpt must exist with a remote named `fork` pointing to
`GH_USER`'s wpt fork.

Then, run the script as `node sync.js --wpt-dir /path/to/wpt`.

Run `node sync.js --help` for all supported options.
