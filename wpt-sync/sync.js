'use strict';

const assert = require('assert');
const child = require('child_process');
const fs = require('fs');
const flags = require('flags');
const octokit = require('@octokit/rest')();

const PR_BOILERPLATE = `This PR was automatically created by a bot.

Before merging, please check that any tests that depend on the updated IDL files still work.

If additional changes are needed, please manually create another PR based on this one.

See the [README](https://github.com/web-platform-tests/wpt/blob/master/interfaces/README.md) for how the IDL files in this directory are used.`

function findIDLFiles(dir) {
    const files = fs.readdirSync(dir);
    files.sort();
    // Exclude *.tentative.idl as those don't have a spec.
    return new Set(files.filter(name => name.endsWith('.idl') &&
                                        !name.includes('.tentative.')));
}

// Finds and compares IDL files in `srcDir` and `dstDir`, creating
// reffy-reports/* branches in the `dstDir` repo for any differences.
// The `makeCommitMessage` callback is used to create the commit message.
// Returns the created branch names.
function createLocalBranches(srcDir, dstDir, makeCommitMessage) {
    const branches = new Set;

    // Commits changes to `file` in `dstDir` on a new branch and adds the
    // branch name to `branches`.
    function commitToBranch(verb, file) {
        function git(args, options) {
            return child.execSync(`git ${args}`, Object.assign({ cwd: dstDir }, options));
        }

        assert(file.endsWith('.idl'));
        const shortName = file.substr(0, file.length - 4);
        const branch = `reffy-reports/${shortName}`;

        git(`checkout -q -b ${branch} origin/master`);
        git(`add ${file}`);

        const message = makeCommitMessage(verb, file);
        git(`commit -q -F -`, { input: message });

        branches.add(branch);
        console.log(`    Created local branch: ${branch}`);
    }

    const reffyFiles = findIDLFiles(srcDir);
    const wptFiles = findIDLFiles(dstDir);

    for (const file of reffyFiles) {
        const reffyBytes = fs.readFileSync(`${srcDir}/${file}`);
        if (wptFiles.has(file)) {
            const wptBytes = fs.readFileSync(`${dstDir}/${file}`);
            if (reffyBytes.equals(wptBytes)) {
                console.log(`  ${file} is up to date`);
            } else {
                console.log(`  ${file} is modified`);
                fs.writeFileSync(`${dstDir}/${file}`, reffyBytes);
                commitToBranch('Update', file);
            }
        } else {
            console.log(`  ${file} is added`);
            fs.writeFileSync(`${dstDir}/${file}`, reffyBytes);
            commitToBranch('Update', file);
        }
    }

    for (const file of wptFiles) {
        if (!reffyFiles.has(file)) {
            console.log(`  ${file} is deleted`);
            fs.unlinkSync(`${dstDir}/${file}`);
            commitToBranch('Remove', file);
        }
    }

    return branches;
}

// Returns remote reffy-reports/* branches.
function listRemoteBranches(dir, remote) {
    const remoteBranches = child.execSync(`git for-each-ref "refs/remotes/${remote}/reffy-reports/*" --format="%(refname:lstrip=3)"`, {
            cwd: dir, encoding: 'ascii'
        }).split('\n').filter(l => l != '');
    remoteBranches.sort();
    return new Set(remoteBranches);
}

// Creates or updates pull requests for any branches where the remote branch
// (if any) doesn't have the same changes as the local branch. Then remove
// remote-only branches to close pull requests that are now no-ops.
async function updatePullRequests(dir, localBranches, remote, remoteBranches) {
    function git(args) {
        return child.execSync(`git ${args}`, { cwd: dir, encoding: 'utf-8' });
    }

    const PR_LIMIT = flags.get('pr-limit');
    let pr_counter = 0;

    const owner = process.env.GH_USER;

    octokit.authenticate({
        type: 'token',
        token: process.env.GH_TOKEN,
    });

    console.log('Updating pull requests:');
    for (const branch of localBranches) {
        assert(branch.startsWith('reffy-reports/'));

        // First create or update the remote branch, if not already up to date.
        if (remoteBranches.has(branch)) {
            // Check if there are any differences between the local and remote
            // branch in the files touched by the local branch. This to avoid
            // updating the branch with unrelated changes, which would trigger
            // another Travis run of any existing PR for the branch.
            const affectedFiles = git(`diff --name-only ${branch} ${branch}^`).replace(/\n/g, ' ');
            const diff = git(`diff ${branch} ${remote}/${branch} -- ${affectedFiles}`).trim();
            if (diff) {
                git(`push -f ${remote} ${branch}`);
                console.log(`  Updated remote branch: ${branch}`);
            } else {
                console.log(`  Existing remote branch already up to date: ${branch}`);
            }
        } else {
            git(`push ${remote} ${branch}`);
            console.log(`  Created new remote branch: ${branch}`);
        }

        // Next create or update a PR for the branch. Use the remote branch's
        // commit message to create the PR title/body, so that they cannot
        // get out of sync. Note that this will also update the boilerplate of
        // existing PRs even if the branch was not updated. This is intentional.
        const pr_title = git(`show --format=%s --no-patch ${remote}/${branch}`);
        const commit_body = git(`show --format=%b --no-patch ${remote}/${branch}`);
        const pr_body = `${PR_BOILERPLATE}\n\n<hr>\n\n${commit_body}`;

        // Look for open PRs for the same branch.
        const open_prs = (await octokit.pullRequests.getAll({
            owner: 'web-platform-tests',
            repo: 'wpt',
            state: 'open',
            head: `${owner}:${branch}`,
        })).data;

        if (open_prs.length) {
            // If there is an existing PR, just update its title/body.
            const existing_pr = open_prs[0];

            await octokit.pullRequests.update({
                owner: 'web-platform-tests',
                repo: 'wpt',
                number: existing_pr.number,
                title: pr_title,
                body: pr_body,
            });

            console.log(`  Existing PR updated: ${existing_pr.html_url}`);
        } else {
            if (pr_counter < PR_LIMIT) {
                // Create a new PR.
                const created_pr = (await octokit.pullRequests.create({
                    owner: 'web-platform-tests',
                    repo: 'wpt',
                    head: `${owner}:${branch}`,
                    base: 'master',
                    title: pr_title,
                    body: pr_body,
                    // Disallow edits as they would be overwritten automatically.
                    maintainer_can_modify: false,
                })).data;

                console.log(`  Created PR: ${created_pr.html_url}`);
                pr_counter++;
            } else {
                console.warn(`  No PR created as limit (${PR_LIMIT}) was reached`);
            }
        }
    }

    console.log('Removing remote-only branches:');
    for (const branch of remoteBranches) {
        if (!localBranches.has(branch)) {
            await octokit.gitdata.deleteReference({
                owner: 'autofoolip',
                repo: 'wpt',
                ref: `heads/${branch}`,
            });
            console.log(`  Deleted ${branch}`);
        }
    }

    console.log('Done');
}

// Convenience function to check if `path` is a directory.
function isDir(path) {
    try {
        return fs.statSync(path).isDirectory();
    } catch(e) {
        return false;
    }
}

function main() {
    flags.defineString('wpt-dir', undefined, 'Path to wpt checkout (required)');
    flags.defineString('wpt-remote', 'fork', 'Git remote to push branches to');
    flags.defineString('build-url', undefined, 'Build URL to include in commit message (optional)');
    flags.defineString('pr-limit', 5, 'Maxium number of new PRs to create');
    flags.parse();

    const srcDir = `${__dirname}/../whatwg/idl`;
    assert(isDir(srcDir));

    const wptDir = flags.get('wpt-dir');
    const dstDir = `${wptDir}/interfaces`;
    if (!wptDir || !isDir(dstDir)) {
        console.error(`--wpt-dir (${wptDir}) is not a wpt checkout`);
        process.exit(1);
    }

    const buildSha = child.execSync('git rev-parse --short HEAD', { cwd: srcDir, encoding: 'ascii' }).trim();
    assert(buildSha.length >= 4);

    const buildUrl = flags.get('build-url');

    function makeCommitMessage(verb, file) {
        let message = `${verb} interfaces/${file}\n\n`;
        message += `Source: https://github.com/tidoust/reffy-reports/blob/${buildSha}/whatwg/idl/${file}\n`;
        if (buildUrl) {
            message += `Build: ${buildUrl}\n`;
        }
        return message;
    }

    console.log('Creating local branches:');
    const localBranches = createLocalBranches(srcDir, dstDir, makeCommitMessage);
    const remote = flags.get('wpt-remote');
    const remoteBranches = listRemoteBranches(wptDir, remote);

    // `updatePullRequests` is async and should be invoked last.
    updatePullRequests(wptDir, localBranches, remote, remoteBranches);
}

main();
