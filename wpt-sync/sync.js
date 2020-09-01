'use strict';

const assert = require('assert');
const child = require('child_process');
const fs = require('fs');
const flags = require('flags');
const Octokit = require('@octokit/rest');

const PR_BOILERPLATE = `This PR was automatically created by a bot.

Before merging, please check that any tests that depend on the updated IDL files still work.

If additional changes are needed, please manually create another PR based on this one.

See the [README](https://github.com/web-platform-tests/wpt/blob/master/interfaces/README.md) for how the IDL files in this directory are used.`

const CSSOM_PREAMBLE = `// GENERATED PREAMBLE - DO NOT EDIT
// This preamble was added by webref for web-platform-tests.
// CSSOMString is an implementation-defined type of either DOMString or
// USVString in CSSOM: https://drafts.csswg.org/cssom/#cssomstring-type
// For web-platform-tests, use DOMString because USVString has additional
// requirements in type conversion and could result in spurious failures for
// implementations that use DOMString.
typedef DOMString CSSOMString;

`;

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
    function git(args, options) {
        return child.execSync(`git ${args}`, Object.assign({ cwd: dstDir, encoding: 'utf-8' }, options));
    }

    // Returns the sha of any commit not mentioning reffy-reports touching
    // `file` in `dstDir` since `since`, if any, and a falsy value otherwise.
    // See https://github.com/w3c/webref/issues/25 for background.
    function lastManualCommitSince(file, since) {
        return git(`log -1 --since=${since} --grep reffy-reports --invert-grep --format=%h -- ${file}`).trim();
    }

    // Returns any extra lines to put in the commit messages as an array.
    function commitMessageExtras(file) {
        const SINCE_MS = 7 * 24 * 3600 * 1000; // 1 week
        const since = new Date(Date.now() - SINCE_MS).toISOString();
        const sha = lastManualCommitSince(file, since);
        if (!sha) {
            return [];
        }
        return [`Note: This file was recently manually updated in commit ${sha}.`,
                `      This commit may revert some of those changes.`];
    }

    const branches = new Set;

    // Commits changes to `file` in `dstDir` on a new branch and adds the
    // branch name to `branches`.
    function commitToBranch(verb, file) {
        assert(file.endsWith('.idl'));
        const shortName = file.substr(0, file.length - 4);
        const branch = `reffy-reports/${shortName}`;

        git(`checkout -q -b ${branch} origin/master`);
        git(`add ${file}`);

        const extras = commitMessageExtras(file);
        const message = makeCommitMessage(verb, file, extras);
        git(`commit -q -F -`, { input: message });

        branches.add(branch);
        console.log(`    Created local branch: ${branch}`);
    }

    const reffyFiles = findIDLFiles(srcDir);
    const wptFiles = findIDLFiles(dstDir);

    for (const file of reffyFiles) {
        let reffyBytes = fs.readFileSync(`${srcDir}/${file}`);

        if (file === 'cssom.idl') {
            reffyBytes = Buffer.concat([Buffer.from(CSSOM_PREAMBLE), reffyBytes]);
        }

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
            commitToBranch('Add', file);
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
    const DRY_RUN = flags.get('dry-run');

    function git(args) {
        const command = `git ${args}`;
        if (DRY_RUN) {
            return 'Mock git stdout in dry run';
        }
        return child.execSync(command, { cwd: dir, encoding: 'utf-8' });
    }

    const PR_LIMIT = flags.get('pr-limit');
    let pr_counter = 0;

    const owner = process.env.GH_USER;

    const octokit = new Octokit({
        auth: process.env.GH_TOKEN,
    });

    if (DRY_RUN) {
        octokit.hook.wrap('request', (request, options) => {
            let data = {};
            if (options.url === '/repos/:owner/:repo/pulls') {
                if (options.method === 'GET') {
                    data = [];
                } else if (options.method === 'POST') {
                    data = {html_url:'mock://url-in-dry-run'};
                }
            }
            return {data};
        });
    }

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
                console.log(`  Remote branch is up to date: ${branch}`);
            }
        } else {
            git(`push ${remote} ${branch}`);
            console.log(`  Created new remote branch: ${branch}`);
        }

        // Next create or update a PR for the branch. Use the remote branch's
        // commit message to create the PR title/body, so that they cannot
        // get out of sync. Note that this will also update the boilerplate of
        // existing PRs even if the branch was not updated. This is intentional.
        const pr_title = git(`show --format=%s --no-patch ${remote}/${branch}`).trim();
        const commit_body = git(`show --format=%b --no-patch ${remote}/${branch}`);
        const pr_body = `${PR_BOILERPLATE}\n\n<hr>\n\n${commit_body}`;

        // Look for open PRs for the same branch.
        const open_prs = (await octokit.pulls.list({
            owner: 'web-platform-tests',
            repo: 'wpt',
            state: 'open',
            head: `${owner}:${branch}`,
        })).data;

        if (open_prs.length) {
            // If there is an existing PR, just update its title/body.
            const existing_pr = open_prs[0];

            await octokit.pulls.update({
                owner: 'web-platform-tests',
                repo: 'wpt',
                pull_number: existing_pr.number,
                title: pr_title,
                body: pr_body,
            });

            console.log(`  Updated PR title/body: ${existing_pr.html_url}`);
        } else {
            if (pr_counter < PR_LIMIT) {
                // Create a new PR.
                const created_pr = (await octokit.pulls.create({
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
            await octokit.git.deleteRef({
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

async function main() {
    if (!process.env.GH_USER || !process.env.GH_TOKEN) {
        throw new Error('GH_USER and GH_TOKEN must be set, see README.md');
    }

    flags.defineString('wpt-dir', undefined, 'Path to wpt checkout (required)');
    flags.defineString('wpt-remote', 'fork', 'Git remote to push branches to');
    flags.defineString('build-url', undefined, 'Build URL to include in commit message (optional)');
    flags.defineString('pr-limit', 5, 'Maxium number of new PRs to create');
    flags.defineBoolean('dry-run', false, 'Run without pushing branches or creating PRs');
    flags.parse();

    const srcDir = `${__dirname}/../ed/idl`;
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

    function makeCommitMessage(verb, file, extras) {
        let message = `${verb} interfaces/${file}\n\n`;
        if (extras && extras.length) {
            message += extras.join('\n') + '\n\n';
        }
        message += `Source: https://github.com/w3c/webref/blob/${buildSha}/ed/idl/${file}\n`;
        if (buildUrl) {
            message += `Build: ${buildUrl}\n`;
        }
        return message;
    }

    console.log('Creating local branches:');
    const localBranches = createLocalBranches(srcDir, dstDir, makeCommitMessage);
    const remote = flags.get('wpt-remote');
    const remoteBranches = listRemoteBranches(wptDir, remote);

    await updatePullRequests(wptDir, localBranches, remote, remoteBranches);
}

main().catch(reason => {
    console.error(reason);
    process.exit(1);
});
