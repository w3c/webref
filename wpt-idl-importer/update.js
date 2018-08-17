const octokit = require('@octokit/rest')();

async function updateBranch(branch, sha) {
    try {
        console.log(`Updating ${branch} (${sha})`);
        await octokit.gitdata.updateReference({
            owner: 'web-platform-tests',
            repo: 'wpt',
            ref: `heads/${branch}`, // no leading 'refs/'
            sha: sha,
            force: true,
        });
    } catch (e) {
        console.log(`Creating ${branch} (${sha}) instead`);
        await octokit.gitdata.createReference({
            owner: 'web-platform-tests',
            repo: 'wpt',
            ref: `refs/heads/${branch}`, // must start with 'refs/'
            sha: sha,
        });
    }
}

async function main() {
    octokit.authenticate({
        type: 'token',
        token: process.env.GH_TOKEN,
    });

    const master_sha = (await octokit.gitdata.getReference({
        owner: 'web-platform-tests',
        repo: 'wpt',
        ref: 'heads/master',
    })).data.object.sha;
    console.log(master_sha);

    const root_tree = (await octokit.gitdata.getTree({
        owner: 'web-platform-tests',
        repo: 'wpt',
        tree_sha: master_sha,
    })).data.tree;
    //console.log(root_tree);

    const interfaces_sha = root_tree.find(x => x.path === 'interfaces').sha;

    const interfaces_tree = (await octokit.gitdata.getTree({
        owner: 'web-platform-tests',
        repo: 'wpt',
        tree_sha: interfaces_sha,
    })).data.tree;
    console.log(interfaces_tree);

    return;

    const idl_files = (await octokit.repos.getContent({
        owner: 'web-platform-tests',
        repo: 'wpt',
        path: 'interfaces',
        ref: master_sha,
    })).data.filter(f => f.name.endsWith('.idl'));
    console.log(idl_files.length);
}

main();
