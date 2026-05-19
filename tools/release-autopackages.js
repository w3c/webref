/**
 * Publish packages that can be published automatically to npm.
 *
 * Note: the script runs `git` CLI commands and expects that it can push to a
 * remote named `origin`.
 *
 * Actual publication to NPM requires an NPM_TOKEN (if the script is run
 * locally), or works through OpenID Connect by adding the release workflow as
 * a trusted publisher, see: https://docs.npmjs.com/trusted-publishers
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from "node:child_process";
import { npmPublish } from "@jsdevtools/npm-publish";
import { createFolderIfNeeded, loadJSON } from "./utils.js";


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

  console.log();
  console.log('Bump the package version');
  const packageFile = path.join(packageFolder, 'package.json');
  const packageContents = await loadJSON(packageFile);
  const version = packageContents.version;
  console.log(`- current version: ${version}`);
  const reVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)?$/;
  const versionTokens = version.match(reVersion);
  const major = parseInt(versionTokens[1], 10);
  const minor = parseInt(versionTokens[2], 10);
  const patch = parseInt(versionTokens[3], 10);
  const newVersion = `${major}.${minor}.${patch+1}`;
  console.log(`- new version: ${version}`);
  packageContents.version = newVersion;
  await fs.writeFile(packageFile, JSON.stringify(packageContents, null, 2), 'utf8');

  console.log();
  console.log('Commit/Push new version');
  execSync(`git add ${packageFile}`);
  execSync(`git commit -m "Bump @webref/xref version from ${version} to ${newVersion}"`);
  execSync('git push origin HEAD:main');
  console.log('- done');
  console.log();

  console.log();
  console.log('Publish new version to npm');
  console.log(`- publish packages-auto/xref folder to npm`);
  const pubOptions = {
    package: packageFile
    //, debug: console.debug
  };
  if (NPM_TOKEN) {
    pubOptions.token = NPM_TOKEN;
  }
  const pubResult = await npmPublish(pubOptions);
  console.log(`- published version was ${pubResult.oldVersion}`);
  console.log(`- published version is ${pubResult.version}`);

  console.log();
  console.log('Tag released commit');
  const prefix = '@webref/xref@';
  const tag = prefix + pubResult.version;
  execSync('git tag ${tag}');
  execSync('git push origin ${tag}');

  console.log();
  console.log('Update @webref/xref@latest branch');
  const latest = prefix + 'latest';
  execSync(`git push origin main:${latest}`);
}


/*******************************************************************************
Retrieve tokens from environment and kick things off
*******************************************************************************/
// An NPM token is needed to run the script from a local machine.
// Authentication from a GitHub workflow rather relies on OpenID Connect
const NPM_TOKEN = config?.NPM_TOKEN ?? process.env.NPM_TOKEN;

releaseXrefPackage()
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
