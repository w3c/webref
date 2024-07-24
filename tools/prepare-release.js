/**
 * Prepare a Webref package release pull request if needed.
 *
 * The pull request contains the diff as description, and bumps the version
 * patch number of the corresponding `package.json` file.
 *
 * Pre-requisites:
 * - The local repo must be up-to-date with the remote repo on GitHub. That is
 * typically the case when this script runs as part of a GitHub job.
 * - The current branch in the local repo should be the main branch.
 * - The `prepare-curated.js` and `prepare-packages.js` utilities must have
 * been run to generate the relevant data in the `packages` folder.
 *
 * If the PR is merged, the "release-package.js" job should run and actually
 * release the package at the commit on which the pre-release PR was based.
 *
 * If the PR is closed, nothing should happen.
 *
 * If a PR created by this script is still open, the script (force) updates the
 * PR.
 *
 * Possible TODO improvements:
 * - Invalidate or re-request review when PR is updated?
 */

import Octokit from "./octokit.js";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";
import { rimraf } from "rimraf";

// Repository to process
const owner = "w3c";
const repo = "webref";

// Current package version in npm
let latestReleasedVersion = "";


function btoa(str) {
  return Buffer.from(str).toString("base64");
}

function MissingPackageError(message) {
  this.name = "MissingPackageError";
  this.message = (message || "");
}
MissingPackageError.prototype = Error.prototype;


/**
 * Compute diff between the released npm package and the contents of the repo
 *
 * @function
 * @param {String} type Package name. Must match one of the existing folder
 *  names under "packages" (e.g. "css", "elements", "events", "idl")
 * @return {String} The results of running the diff. An empty string if contents
 *   match.
 */
function computeDiff(type) {
  // Install @webref package in tmp folder
  const tmpFolder = fs.mkdtempSync(path.join(os.tmpdir(), "webref-"));
  try {
    execSync(`npm install @webref/${type}`, {
      cwd: tmpFolder
    });
  }
  catch (err) {
    throw new MissingPackageError(`Package @webref/${type} does not exist or could not be installed.`);
  }

  // Extract released version (will be used in the body of the pre-release PR)
  latestReleasedVersion = require(path.join(tmpFolder, "node_modules", "@webref", type, "package.json")).version;

  // Diff does not take the package.json file into account because "npm install"
  // adds properties that start with "_" to that file which do not exist in the
  // repo version of the file.
  // The "diff" command exits with a non zero status code when there is a diff,
  // which would throw an exception. Final "echo" command turns that status
  // code to 0 to avoid the exception.
  // Note diff can be very large when the structure of all extracts are changed,
  // hence the need to enlarge the size of the stdout/stderr buffer.
  const installedFiles = path.join(tmpFolder, "node_modules", "@webref", type);
  let diff = execSync(
    `diff ${installedFiles} packages/${type} --ignore-trailing-space --exclude=package.json --exclude=README.md --exclude=CHANGELOG.md --unified=3 || echo -n`,
    { encoding: "utf8", maxBuffer: 100 * 1024 * 1024 });

  const diffReadme = execSync(
    `diff ${installedFiles}/README.md packages/${type}/README.md --ignore-trailing-space --unified=3 || echo -n`,
    { encoding: "utf8" });

  // Diff includes added/removed files but they are hard to detect inline,
  // let's extract them and list them separately
  const reAdded = new RegExp(`^Only in packages/${type}: (.*)$`, "gm");
  const added = Array.from(diff.matchAll(reAdded)).map(res => res[1]);
  diff = diff.replace(reAdded, "");

  const reDeleted = new RegExp(`^Only in ${installedFiles.replace(/\\/g, "\\\\")}: (.*)$`, "gm");
  const deleted = Array.from(diff.matchAll(reDeleted)).map(res => res[1]);
  diff = diff.replace(reDeleted, "");

  // Clean up tmp folder
  try {
    rimraf.sync(tmpFolder);
  }
  catch {
  }

  // On Windows, the "echo -n" command actually outputs "-n"
  // Also replace tmp folder name and file date in diff to make it possible to
  // compare diff with diff that may already exist in a pending pre-release PR
  // Note the diff command doubles backslashes, which also need to be doubled
  // in the string passed to RegExp for them not to be interpreted (In practice,
  // these backslashes also only appear on Windows)
  // Note: Regexp to replace date looks for lines that start with "---" or "+++"
  // followed by the right path (that can sometimes be enclosed in double quotes
  // in Windows environments) and that ends with something that looks like a
  // full date with time and timezone offset.
  diff = diff
    .replace(/\-n\s*$/, "")
    .replace(new RegExp(tmpFolder.replace(/\\/g, "\\\\\\\\"), "g"), "webref")
    .replace(/^(\-\-\- "?webref[^" ]+?"?)\s+[\d\-\s:\.\+]+$/mg, "$1")
    .replace(/^(\+\+\+ "?packages[^" ]+?"?)\s+[\d\-\s:\.\+]+$/mg, "$1");

  // Prepend diff with new and deleted files
  diff = diff
    .replace(/\n+(diff --ignore-trailing-space )/g, "\n\n$1")
    .trim();

  if (deleted.length > 0) {
    diff = "Released package files that no longer exist in the repo:\n" +
      deleted.map(file => `- ${file}`).join("\n") +
      "\n\n" +
      diff;
  }

  if (added.length > 0) {
    diff = "New repo files that are not yet in the released package:\n" +
      added.map(file => `+ ${file}`).join("\n") +
      "\n\n" +
      diff;
  }

  if (diffReadme) {
    diff = "Static file(s) changed:\n" +
      "+ README.md" +
      "\n\n" +
      diff;
  }

  return diff;
}


/**
 * Create or update pre-release pull request
 *
 * @function
 * @param {String} type Package name. Must match one of the existing folder
 *  names under "packages" (e.g. "css", "elements", "events", "idl")
 */
async function prepareRelease(type) {
  // Compute a reasonably unique ID
  const uid = (new Date()).toISOString().replace(/[\-T:\.Z]/g, "");

  console.log("Get latest commit on current branch");
  const latestCommitSha = execSync('git log -n 1 --pretty=format:"%H"', { encoding: 'utf8' }).trim();
  console.log(`- Current branch is at ${latestCommitSha}`);

  console.log();
  console.log("Get corresponding commit on curated branch");
  const latestCommitCuratedSha = execSync(
    `git log -n 1 --pretty=format:"%H" --grep="Publish curated data from ${latestCommitSha}" --branches`,
    { encoding: 'utf8' }).trim();
  if (latestCommitCuratedSha) {
    console.log(`- Corresponding commit on curated branch: ${latestCommitCuratedSha}`);
  }
  else {
    console.log(`- No corresponding commit on curated branch`);
    return;
  }

  // Note the reference to the commit on the curated branch is more than purely
  // informational. The `release-package.js` script will use it to tag the
  // commit when a package is released.
  const curatedRef = latestCommitCuratedSha ?
    ` triggered by curated data at ${latestCommitCuratedSha}` : '';

  console.log();
  console.log("Look for a pending pre-release PR");
  const searchResponse = await octokit.search.issuesAndPullRequests({
    q: `repo:${owner}/${repo} type:pr state:open head:release-${type}-`
  });
  const found = searchResponse?.data?.items?.[0];

  const pendingPRResponse = found ?
    await octokit.pulls.get({
      owner, repo,
      pull_number: found.number
    }) :
    null;
  const pendingPR = pendingPRResponse?.data;
  console.log(pendingPR ?
    `- Found pending pre-release PR: ${pendingPR.title} (#${pendingPR.number})` :
    "- No pending pre-release PR");

  console.log();
  console.log("Compute diff between package and repo contents");
  let diff = computeDiff(type);
  console.log(`- Diff length: ${diff?.length}`);
  if (!diff) {
    if (pendingPR) {
      console.log("- No release needed, close pending pre-release PR");
      await octokit.pulls.update({
        owner, repo, pull_number: pendingPR.number,
        body: "This pull request is no longer needed. No more diff to release.",
        state: "closed"
      });
    }

    console.log("- No diff found, return");
    return;
  }
  if (diff.length > 60000) {
    console.log("- Diff is too long, dump it to the console and truncate");
    console.log();
    console.log("----- DIFF BEGINS -----")
    console.log(diff);
    console.log("----- DIFF ENDS -----")
    diff = `IMPORTANT:
- Diff is too long to render in a PR description: ${diff.length} characters
- First 60000 characters shown below
- Check the action log for the full diff

${diff.substring(0, 60000)}`;
  }

  console.log();
  console.log("Extract and bump version number");
  const packageFile = require(`../packages/${type}/package.json`);
  const version = packageFile.version;
  const bumpedVersion = version
    .split(".")
    .map((nb, idx) => parseInt(nb, 10) + ((idx === 2) ? 1 : 0))
    .join(".");
  packageFile.version = bumpedVersion;
  const bumpedPackageFileContents = btoa(JSON.stringify(packageFile, null, 2));
  console.log(`- Version to release: ${version}`);
  console.log(`- Bumped version: ${bumpedVersion}`);

  console.log();
  console.log("Prepare pre-release PR title and body");
  const title = `📦 Release @webref/${type}@${version}`;
  const body = `
**⚠ NEVER add commits to this pull request.**

🤖 This pull request was automatically created to facilitate human review of \`@webref/${type}\` changes${curatedRef}.

🧐 Please review the diff below and version numbers. If all looks good, merge this pull request to release the changes to npm.

📦 Latest released \`@webref/${type}\` package was **v${latestReleasedVersion}**. Merging this pull request will release **v${version}**. Make sure that the bump is the right one for the changes.

✍ If any change needs to be made before release, **do not add a commit** to this pull request. Changes should rather be handled in a separate pull request and pushed to the main branch. You may leave this pull request open in the meantime, or close it. The pre-release job will automatically update this pull request or create a new one once the updates have made their way to the main branch.

🛈 The actual change introduced by this pull request is a version bump in \`packages/${type}/package.json\`. You do not need to review that change. The bumped version is not the version that will be released when this pull request is merged, but rather the version that will be released next time.

\`\`\`diff
${diff}
\`\`\``;
  console.log(`- title: ${title}`);

  console.log();
  console.log("Prepare branch for pre-release PR");
  const prRef = `release-${type}-${uid}`;
  const commitBumpedVersion =       // Create a new branch for the PR if:
    !pendingPR ||                   // 1. it does not exist yet; or
    pendingPR.title !== title ||    // 2. version to release has changed; or
    pendingPR.body !== body;        // 3. diff has changed
  if (commitBumpedVersion) {
    console.log(`- Create new branch ${prRef} for the PR`);
    await octokit.git.createRef({
      owner, repo,
      ref: `refs/heads/${prRef}`,
      sha: latestCommitSha
    });
  }
  else {
    console.log("- No additional changes to release, no need to rebase existing pre-release PR");
  }

  console.log();
  console.log("Commit bumped version to PR branch");
  if (commitBumpedVersion) {
    console.log(`- Bump version to ${bumpedVersion}`);
    const fileResponse = await octokit.repos.getContent({
      owner, repo, path: `packages/${type}/package.json`
    });

    const resp = await octokit.repos.createOrUpdateFileContents({
      owner, repo,
      branch: prRef,
      path: `packages/${type}/package.json`,
      message: `Bump @webref/${type} version from ${version} to ${bumpedVersion}`,
      content: bumpedPackageFileContents,
      sha: fileResponse.data.sha,
    });
    const bumpedVersionSha = resp.data.commit.sha;
    console.log(`- Bumped version commit is ${bumpedVersionSha}`);

    if (pendingPR) {
      // Note: when a pending PR exists, we could in theory reuse the PR branch
      // directly instead of creating (and then deleting) another one. However,
      // that would mean force updating that branch to the latest commit of the
      // main branch before adding a commit with the bumped version. The force
      // update would effectively close the PR (because the PR would then have
      // no commit).
      console.log(`- Force update PR branch ${pendingPR.head.ref} to target ${prRef} branch commit`);
      await octokit.git.updateRef({
        owner, repo,
        ref: `heads/${pendingPR.head.ref}`,
        sha: bumpedVersionSha, force: true
      });

      console.log(`- Delete now useless ${prRef} branch`);
      await octokit.git.deleteRef({
        owner, repo,
        ref: `heads/${prRef}`
      });
    }
  }
  else {
    console.log("- No need to bump version, PR already up-to-date");
  }

  console.log();
  console.log("Create/Update pre-release PR");
  if (pendingPR) {
    if (pendingPR.title === title && pendingPR.body === body) {
      console.log("- Pre-release PR already exists and no need to update title and body");
    }
    else {
      console.log("- Update title and body of existing pre-release PR");
      await octokit.pulls.update({
        owner, repo,
        pull_number: pendingPR.number,
        title, body
      });
    }
  }
  else {
    console.log("- Create pre-release PR");
    const defaultBranchResponse = await octokit.repos.get({ owner, repo });
    const defaultBranch = defaultBranchResponse.data.default_branch;
    const prResponse = await octokit.pulls.create({
      owner, repo,
      head: prRef,
      base: defaultBranch,
      title, body
    });
  }
}


/*******************************************************************************
Retrieve GH_TOKEN from environment, prepare Octokit and kick things off
*******************************************************************************/
const GH_TOKEN = (() => {
  try {
    return require("../config.json").GH_TOKEN;
  } catch {
    return process.env.GH_TOKEN;
  }
})();
if (!GH_TOKEN) {
  console.error("GH_TOKEN must be set to some personal access token as an env variable or in a config.json file");
  process.exit(1);
}

const octokit = new Octokit({
  auth: GH_TOKEN,
  //log: console
});

const packageType = process.argv[2] ?? "idl";

prepareRelease(packageType)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    if (err.name === "MissingPackageError") {
      // Package does not exist yet, no way to compute diff
      console.log(err.message);
      console.log('No pull request created as a result!');
      console.log();
      console.log("== The end ==");
    }
    else {
      console.error(err);
      process.exit(1);
    }
  });
