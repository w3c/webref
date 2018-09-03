const octokit = require('@octokit/rest')();

const PR_BOILERPLATE = `This PR was automatically created by a bot.

Before merging, please check that any tests that depend on the updated IDL files still work.

If additional changes are needed, please manually create another PR based on this one.

See the [README](https://github.com/web-platform-tests/wpt/blob/master/interfaces/README.md) for how the IDL files in this directory are used.`

function splitCommitMessage(message) {
    const index = message.indexOf('\n');
    const subject = message.substr(0, index);
    const body = message.substr(index).trim();
    return [subject, body];
}

async function main() {
    const owner = process.env.GH_USER;
    const branch = process.argv[2];

    octokit.authenticate({
        type: 'token',
        token: process.env.GH_TOKEN,
    });

    // Get the commit to base the PR title/body on.
    const commit_sha = (await octokit.gitdata.getReference({
        owner: owner,
        repo: 'wpt',
        ref: `heads/${branch}`,
    })).data.object.sha;

    const commit = (await octokit.gitdata.getCommit({
        owner: owner,
        repo: 'wpt',
        commit_sha: commit_sha,
    })).data;

    const [pr_title, commit_body] = splitCommitMessage(commit.message);
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

        console.log("Existing PR updated:", existing_pr.html_url);
    } else {
        // Otherwise create a new PR.
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

        console.log("Created PR:", created_pr.html_url);
    }
}

main();
