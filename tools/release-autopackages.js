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

import crawl from "../ed/index.json" with { type: "json" };


/**
 * Release package at the requested version.
 *
 * @function
 * @param {Number} prNumber Pre-release PR number
 */
async function releaseXrefPackage(minorBump) {
  console.log();
  console.log(`Prepare the xref package`);

  const packageFolder = path.join('packages-auto', 'xref');
  await createFolderIfNeeded(packageFolder);

  // Prepare the list of specs from the crawl's result, keeping information
  // that we may use for filtering (or display purpose). This list is
  // essentially web-specs.
  // Note: we'll use the "ed" list, which should be more up-to-date than the
  // "tr" one, and we'll ignore "tr" extracts that cannot be mapped to a spec.
  const specs = crawl.results.map(result => Object.assign({
    url: result.url,
    seriesComposition: result.seriesComposition,
    shortname: result.shortname,
    series: result.series,
    categories: result.categories,
    organization: result.organization,
    groups: result.groups,
    nightly: result.nightly,
    release: result.release,
    title: result.title,
    shortTitle: result.shortTitle,
    standing: result.standing,
    crawled: result.crawled,
    date: result.date
  }));
  await fs.writeFile(path.join(packageFolder, 'specs.json'), JSON.stringify(specs, null, 2), 'utf8');
  console.log('- wrote the list of specs');

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
          const spec = specs.find(s => `${s.shortname}.json` === file);
          if (spec) {
            await fs.copyFile(path.join(srcDir, file), path.join(dstDir, file));
          }
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
  const newVersion = `${major}.${minorBump ? minor+1 : minor}.${minorBump ? '0' : patch+1}`;
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
const config = await loadJSON("config.json");
const NPM_TOKEN = config?.NPM_TOKEN ?? process.env.NPM_TOKEN;

const minorBump = process.argv[2] === "minor";

releaseXrefPackage(minorBump)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
