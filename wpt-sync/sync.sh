#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

export GH_USER=autofoolip

# Limit the number of PRs created/updated for a single run of this script.
# This is in order to not create 100+ PRs in the event of reformatting.
PR_LIMIT=5
prs_created=0

reffy_sha=`git rev-parse --short HEAD`

git clone --single-branch https://github.com/web-platform-tests/wpt.git

rm wpt/interfaces/*.idl
cp ../whatwg/idl/*.idl wpt/interfaces/

cd wpt
git config user.email "auto@foolip.org"
git config user.name "Automat af Gränssnitt"

echo "Status after syncing IDL files:"
git status --short
echo

git remote add fork https://$GH_USER:$GH_TOKEN@github.com/$GH_USER/wpt.git
git fetch -q fork
git push -q fork master

# Use `git status` to list added, removed and modified files.
# A temp file is needed because `git status` holds index.lock.
statusfile=`mktemp`
git status --porcelain > "$statusfile"
cat "$statusfile" | while read status path; do
    echo "Handling $path:"
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
    # Check if the remote branch already exists and if there are differences
    # for $path. Only push/update the branch if necessary.
    if git show-ref -q "fork/$branchname"; then
        if git diff --quiet "fork/$branchname" -- "$path"; then
            echo "Existing branch $branchname is up to date."
        else
            echo "Updating existing branch $branchname."
            git push -q --force-with-lease fork "$branchname"
        fi
    else
        echo "Pushing new branch $branchname."
        git push -q fork "$branchname"
    fi

    # Create or update PR.
    if (( $prs_created < $PR_LIMIT )); then
        node ../create-pr.js "$branchname"
        prs_created=$((prs_created + 1))
    else
        echo "WARNING: PR not created because limit ($PR_LIMIT) was exceeded"
    fi
    echo
done
