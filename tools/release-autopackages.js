/**
 * Publish the automatic packages to npm.
 */

import Octokit from './octokit.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execSync } from "node:child_process";
import { rimraf } from "rimraf";
import { npmPublish } from "@jsdevtools/npm-publish";
import { createFolderIfNeeded, loadJSON } from "./utils.js";

const owner = "w3c";
const repo = "webref";


/**
 * Release package at the requested version.
 *
 * @function
 * @param {Number} prNumber Pre-release PR number
 */
async function releaseXrefPackage() {
  console.log();
  console.log(`Prepare the xref package`);

  const packageFolder = path.join('packages-auto', 'xref');
  await createFolderIfNeeded(packageFolder);

  for (const version of ['ed', 'tr']) {
    await createFolderIfNeeded(path.join(packageFolder, version));
    for (const type of ['dfns', 'headings']) {
      const dstDir = path.join(packageFolder, version, type);
      await createFolderIfNeeded(dstDir);
      const dstFiles = await fs.readdir(dstDir);
      for (const file of dstFiles) {
        if (file.endsWith(`.json`)) {
          await fs.unlink(path.join(dstDir, file));
        }
      }
      console.log(`- cleaned ${dstDir} folder`);

      const srcDir = path.join(version, type);
      const srcFiles = await fs.readdir(srcDir);
      for (const file of srcFiles) {
        if (file.endsWith(`.json`)) {
          await fs.copyFile(path.join(srcDir, file), path.join(dstDir, file));
        }
      }
      console.log(`- ${type} extracts copied to ${dstDir}`);
    }
  }

  // TODO: Increase the version number in the package.json file
  // TODO: Commit/Push the change (and create a tag?)
  // TODO: Publish the npm package.
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

// An NPM token is needed to run the script from a local machine.
// Authentication from a GitHub workflow rather relies on OpenID Connect
// and the release workflow must be added as a trusted publisher for each
// npm package that can be released, see:
// https://docs.npmjs.com/trusted-publishers
const NPM_TOKEN = config?.NPM_TOKEN ?? process.env.NPM_TOKEN;

// Note: npm-publish has a bug and needs an "INPUT_TOKEN" env variable:
// https://github.com/JS-DevTools/npm-publish/issues/15
// (we're passing the token to the function directly, no need to set it here)
process.env.INPUT_TOKEN = "";

const octokit = new Octokit({
  auth: GH_TOKEN
  //, log: console
});

releaseXrefPackage()
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
