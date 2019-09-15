This code copies `*.idl` files from [ed/idl/](/ed/idl/) in this repo
into [interfaces/](https://github.com/web-platform-tests/wpt/tree/master/interfaces) in wpt.

Branches are maintained on a fork of [wpt](https://github.com/web-platform-tests/wpt),
and pull requests are automatically created based on those branches.

## Running locally

Required environment variables:
 * `GH_USER` must be set to the name of a GitHub which has a fork of wpt.
 * `GH_TOKEN` must be set to a
   [personal access token](https://github.com/settings/tokens/new) with the
   "Access public repositories" (public_repo) scope enabled.

A local checkout of wpt must exist with a remote named `fork` pointing to
`GH_USER`'s fork of wpt.

Then, run the script as `node sync.js --wpt-dir /path/to/wpt`.

Run `node sync.js --help` for all supported options.
