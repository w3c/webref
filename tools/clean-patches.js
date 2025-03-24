/**
 * Check GitHub issues and pull requests referenced by patches and create
 * a pull request to drop patches that should no longer be needed.
 */

import fs from "node:fs";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import core from '@actions/core';
import Octokit from "./octokit.js";
import { loadJSON } from "./utils.js";
const scriptPath = path.dirname(fileURLToPath(import.meta.url));

/**
 * Check GitHub issues and PR referenced by patch files and drop patch files
 * that only reference closed issues and PR.
 * 
 * @function
 * @return {String} A GitHub flavored markdown string that describes what
 *   patches got dropped and why. To be used in a possible PR. Returns an
 *   empty string when there are no patches to drop.
 */
async function dropPatchesWhenPossible() {
  const rootDir = path.join(scriptPath, "..", "ed");

  console.log("Gather patch files");
  let patches = [];
  const subDirs = fs.readdirSync(rootDir);
  for (const subDir of subDirs) {
    if (subDir.endsWith("patches")) {
      const files = fs.readdirSync(path.join(rootDir, subDir));
      for (const file of files) {
        if (file.endsWith(".patch") || file.endsWith(".json")) {
          const patch = path.join(subDir, file);
          console.log(`- add "${patch}"`);
          patches.push({ name: patch });
        }
      }
    }
  }

  console.log();
  console.log("Extract list of issues");
  const diffStart = /^---$/m;
  const issueUrl = /(?<=^|\s)https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/(issues|pull)\/(\d+)(?=\s|$)/g;
  for (const patch of patches) {
    let patchIssues;
    const contents = fs.readFileSync(path.join(rootDir, patch.name), "utf8");
    if (patch.name.endsWith(".json")) {
      const json = JSON.parse(contents);
      patchIssues = [...(json.pending ?? '').matchAll(issueUrl)];
    }
    else {
      const desc = contents.substring(0, contents.match(diffStart)?.index);
      patchIssues = [...desc.matchAll(issueUrl)];
    }
    for (const patchIssue of patchIssues) {
      if (!patch.issues) {
        patch.issues = [];
      }
      const issue = {
        owner: patchIssue[1],
        repo: patchIssue[2],
        number: parseInt(patchIssue[4], 10),
        url: `https://github.com/${patchIssue[1]}/${patchIssue[2]}/${patchIssue[3]}/${patchIssue[4]}`
      }
      console.log(`- "${patch.name}" linked to ${issue.url}`);
      patch.issues.push(issue);
    }

    if (patchIssues.length === 0) {
      console.log(`- "${patch.name}" not linked to any issue`);
    }
  }
  patches = patches.filter(patch => patch.issues);

  console.log();
  console.log("Check status of GitHub issues/PR");
  for (const patch of patches) {
    for (const issue of patch.issues) {
      const response = await octokit.issues.get({
        owner: issue.owner,
        repo: issue.repo,
        issue_number: issue.number
      });
      issue.state = response?.data?.state ?? "unknown";
      console.log(`- [${issue.state}] ${issue.url}`);
    }
  }

  console.log();
  console.log("Drop patches when possible");
  patches = patches.filter(patch => patch.issues.every(issue => issue.state === "closed"));
  if (patches.length > 0) {
    const res = [];
    for (const patch of patches) {
      console.log(`- drop "${patch.name}"`);
      fs.unlinkSync(path.join(rootDir, patch.name));
      res.push(`- \`${patch.name}\` was linked to now closed: ` +
        patch.issues.map(issue => `[${issue.owner}/${issue.repo}#${issue.number}](${issue.url})`).join(", "));
    }
    return res.join("\n");
  }
  else {
    console.log("- No patch to drop at this time");
    return "";
  }
}


/*******************************************************************************
Retrieve GH_TOKEN from environment, prepare Octokit and kick things off
*******************************************************************************/
const config = await loadJSON("config.json");
const GH_TOKEN = config?.GH_TOKEN ?? process.env.GH_TOKEN;
if (!GH_TOKEN) {
  console.error("GH_TOKEN must be set to some personal access token as an env variable or in a config.json file");
  process.exit(1);
}

const octokit = new Octokit({
  auth: GH_TOKEN,
  //log: console
});


dropPatchesWhenPossible()
  .then(res => {
    core.exportVariable("dropped_patches", res);
    console.log();
    console.log("Set dropped_variables env variable");
    console.log(res);
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });