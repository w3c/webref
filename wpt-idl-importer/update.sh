#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

reffy_sha=`git rev-parse --short HEAD`

git clone --single-branch https://github.com/web-platform-tests/wpt.git

rm wpt/interfaces/*.idl
cp whatwg/idl/*.idl wpt/interfaces/

cd wpt

git remote add fork https://autofoolip:$GH_TOKEN@github.com/autofoolip/wpt.git
git push fork master

# Handle added (untracked, --other), removed and modified files.
# A temp file is needed because `git ls-files` holds index.lock.
tmpfile=`mktemp`
git ls-files --others --exclude-standard | sed 's/^/Add /' > "$tmpfile"
git ls-files --deleted | sed 's/^/Remove /' >> "$tmpfile"
git ls-files --modified | sed 's/^/Update /' >> "$tmpfile"
cat "$tmpfile" | while read action path; do
    echo "Handling $path"
    shortname=`basename $path .idl`
    branchname="reffy-reports/$shortname"
    git checkout -b $branchname origin/master
    git add "$path"
    git commit -F - << EOM
$action $path

Source: https://github.com/tidoust/reffy-reports/blob/$reffy_sha/whatwg/idl/$shortname.idl
Build: https://travis-ci.org/tidoust/reffy-reports/builds/$TRAVIS_BUILD_ID
EOM
    git push -f fork $branchname
done
rm "$tmpfile"

# TODO: Check if wpt has IDL files not in reffy-reports and list them.
