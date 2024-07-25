/**
 * Publish a Webref package to npm, using the commit on which the pre-release
 * PR is based.
 */

import Octokit from "./octokit.js";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";
import { rimraf } from "rimraf";
import { npmPublish } from "@jsdevtools/npm-publish";
import { loadJSON } from "./utils.js";

const owner = "w3c";
const repo = "webref";


/**
 * Release package at the requested version.
 *
 * @function
 * @param {Number} prNumber Pre-release PR number
 */
async function releasePackage(prNumber) {
  console.log(`Retrieve pre-release PR`);
  const prResponse = await octokit.pulls.get({
    owner, repo,
    pull_number: prNumber
  });
  const preReleasePR = prResponse?.data;
  if (!preReleasePR) {
    console.log("- Given PR does not seem to exist, nothing to release");
    return;
  }

  // Extract type from PR title
  console.log(`- Given PR title: ${preReleasePR.title}`);
  const match = preReleasePR.title.match(/^📦 Release @webref\/(.*)@(.*)$/);
  if (!match) {
    console.log("- Given PR is not a pre-release PR, nothing to release");
    return;
  }
  const type = match[1];

  if (!["css", "elements", "events", "idl"].includes(type)) {
    console.log(`- Unknown package type "${type}", nothing to release`);
    return;
  }

  // Extract commit to release from PR
  const preReleaseSha = preReleasePR.base.sha;
  console.log(`- Found commit to release: ${preReleaseSha}`);

  // Find corresponding commit in curated branch from PR body
  const curatedShaRegex = /triggered by curated data at ([0-9a-f]+)./;
  const curatedShaArr = curatedShaRegex.exec(preReleasePR.body);
  const curatedSha = curatedShaArr[1];
  if (curatedSha) {
    console.log(`- Found corresponding commit on curated branch: ${curatedSha}`);
  }
  else {
    console.log('- No corresponding commit on curated branch');
  }

  console.log();
  console.log("Publish package to npm");
  console.log("- Checkout repo at right commit in temporary folder");
  const tmpFolder = fs.mkdtempSync(path.join(os.tmpdir(), "webref-"));

  try {
    execSync(`git clone https://github.com/${owner}/${repo}`, {
      cwd: tmpFolder
    });
    const installFolder = path.join(tmpFolder, "webref");
    execSync(`git reset --hard ${preReleaseSha}`, {
      cwd: installFolder
    });
    console.log(`- Installation folder: ${installFolder}`);

    console.log("- Prepare package files");
    execSync("npm ci", {
      cwd: installFolder
    });
    execSync("npm run curate", {
      cwd: installFolder
    });

    console.log(`- Publish packages/${type} folder to npm`);
    const packageFolder = path.join(installFolder, "packages", type, "package.json");
    const pubResult = await npmPublish({
      package: packageFolder,
      token: NPM_TOKEN
      //, debug: console.debug
    });
    console.log(`- Published version was ${pubResult.oldVersion}`);
    console.log(`- Version bump: ${pubResult.type}`);
    console.log(`- Published version is ${pubResult.version}`);

    console.log();
    console.log("Add release tag to commit");
    if (pubResult.version === pubResult.oldVersion) {
      console.log("- Skip, no actual package released");
    }
    else {
      const rawTag = `@webref/raw-${type}@${pubResult.version}`;
      await octokit.git.createRef({
        owner, repo,
        ref: `refs/tags/${rawTag}`,
        sha: preReleaseSha
      });
      console.log(`- Tagged released commit ${preReleaseSha} with tag "${rawTag}"`);

      if (curatedSha) {
        const curatedTag = `@webref/${type}@${pubResult.version}`;
        await octokit.git.createRef({
          owner, repo,
          ref: `refs/tags/${curatedTag}`,
          sha: curatedSha
        });
        console.log(`- Tagged curated commit ${curatedSha} with tag "${curatedTag}"`);

        await octokit.git.updateRef({
          owner, repo,
          ref: `heads/@webref/${type}@latest`,
          sha: curatedSha
        });
        console.log(`- Updated ${type}-latest to point to curated commit ${curatedSha}`);
      }
      else {
        console.log(`- No commit to tag on curated branch, ${type}-latest tag not updated`);
      }
    }
  }
  finally {
    console.log("Clean temporary folder");
    try {
      rimraf.sync(tmpFolder);
      console.log("- done");
    }
    catch {
    }
  }
}


/*******************************************************************************
Retrieve tokens from environment, prepare Octokit and kick things off
*******************************************************************************/
const config = await loadJSON("config.json");
const GH_TOKEN = config?.GH_TOKEN ?? process.env.GH_TOKEN;
if (!GH_TOKEN) {
  console.error("GH_TOKEN must be set to some personal access token as an env variable or in a config.json file");
  process.exit(1);
}

const NPM_TOKEN = config?.NPM_TOKEN ?? process.env.NPM_TOKEN;
if (!NPM_TOKEN) {
  console.error("NPM_TOKEN must be set to an npm token as an env variable or in a config.json file");
  process.exit(1);
}

// Note: npm-publish has a bug and needs an "INPUT_TOKEN" env variable:
// https://github.com/JS-DevTools/npm-publish/issues/15
// (we're passing the token to the function directly, no need to set it here)
process.env.INPUT_TOKEN = "";

const octokit = new Octokit({
  auth: GH_TOKEN
  //, log: console
});

const prereleasePR = parseInt(process.argv[2], 10);

releasePackage(prereleasePR)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
