#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

reffy_sha=`git rev-parse --short HEAD`

git clone --single-branch https://github.com/web-platform-tests/wpt.git

rm wpt/interfaces/*.idl
cp whatwg/idl/*.idl wpt/interfaces/

cd wpt

echo "Status after syncing IDL files:"
git status --short
echo

git remote add fork https://autofoolip:$GH_TOKEN@github.com/autofoolip/wpt.git
git push -q fork master

# Use `git status` to list added, removed and modified files.
# A temp file is needed because `git status` holds index.lock.
statusfile=`mktemp`
git status --porcelain > "$statusfile"
# Each branch pushed is appended to this file, so that PRs can be created.
branchfile=`mktemp`
cat "$statusfile" | while read status path; do
    echo "Handling $path"
    case "$status" in
        M)
            action="Update"
            ;;
        D)
            action="Remove"
            ;;
        *) # "??" for untracked and anything else
            action="Add"
    esac
    shortname=`basename $path .idl`
    branchname="reffy-reports/$shortname"
    git checkout -q -b "$branchname" origin/master
    git add "$path"
    git commit -q -F - << EOM
$action $path

Source: https://github.com/tidoust/reffy-reports/blob/$reffy_sha/whatwg/idl/$shortname.idl
Build: https://travis-ci.org/tidoust/reffy-reports/builds/$TRAVIS_BUILD_ID
EOM
    # TODO: check if fork/$branchname already exists and if so don't push.
    git push -q -f fork "$branchname"
    echo "$branchname" >> "$branchfile"
    # show what was pushed
    git log --no-walk
    echo
done

echo "Branches updated:"
cat "$branchfile"
