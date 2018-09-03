#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

export GH_USER=autofoolip

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

# Store a list of the remote reffy-reports/* branches so that ones which are no
# longer needed can be removed.
remotebranchfile=`mktemp`
git for-each-ref 'refs/remotes/fork/reffy-reports/*' \
    --format="%(refname:lstrip=3)" > "$remotebranchfile"

# Use `git status` to list added, removed and modified files.
# A temp file is needed because `git status` holds index.lock.
statusfile=`mktemp`
git status --porcelain > "$statusfile"
# Each branch pushed is appended to this file, so that PRs can be created.
branchfile=`mktemp`
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
    echo "$branchname" >> "$branchfile"

    # Create or update PR.
    node create-pr.js "$branchname"
    echo
done

# Delete branches which weren't handled.
echo "Deleting stale branches:"
comm -23 <(sort "$remotebranchfile") <(sort "$branchfile") | while read branch;
do
    echo "$branch"
    git push -q fork ":$branch"
done
