/**
 * Bump the minor version of packages when the list of files has changed.
 *
 * node tools/bump-packages-minor.js
 *
 * This script is intended to be run at the end of a crawl before committing
 * the result back to the main branch (and after `clean-dropped-specs-files.js`)
 * to automatically bump the minor version in the `package.json` files under the
 * `packages` folders when the crawl folder contains new/deleted files to
 * commit.
 *
 * The script does not bump a version that matches x.y.0 because such a version
 * means a minor bump is already pending release.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { loadJSON } from './utils.js';
const scriptPath = path.dirname(fileURLToPath(import.meta.url));

async function checkPackage(type) {
  console.log(`Check ${type} package`);
  const packageFile = path.resolve(scriptPath, '..', 'packages', type, 'package.json');
  const package = await loadJSON(packageFile);
  const version = package.version;
  console.log(`- Current version: ${version}`);

  // Loosely adapted from semver:
  // https://github.com/npm/node-semver/blob/cb1ca1d5480a6c07c12ac31ba5f2071ed530c4ed/internal/re.js#L37
  // (not using semver directly to avoid having to install dependencies in job)
  const reVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
  const versionTokens = version.match(reVersion);
  const major = parseInt(versionTokens[1], 10);
  const minor = parseInt(versionTokens[2], 10);
  const patch = parseInt(versionTokens[3], 10);

  if (patch === 0) {
    console.log('- No bump needed, minor bump already pending');
    return;
  }

  const res = execSync(
    `git ls-files --others --deleted --exclude-standard --directory ed/${type}`,
    { encoding: 'utf8' }).trim();
  if (res) {
    console.log('- new/deleted files found');
    const newVersion = `${major}.${minor+1}.0`;
    package.version = newVersion;
    fs.writeFile(packageFile, JSON.stringify(package, null, 2), 'utf8');
    console.log(`- Version bumped to ${newVersion}`);
  }
  else {
    console.log('- No bump needed');
  }
}


async function checkPackages() {
  const packagesFolder = path.resolve(scriptPath, '..', 'packages');
  const types = await fs.readdir(packagesFolder);
  for (const type of types) {
    const stat = await fs.lstat(path.join(packagesFolder, type));
    if (stat.isDirectory()) {
      await checkPackage(type);
    }
  }
}


/*******************************************************************************
Main loop
*******************************************************************************/
checkPackages()
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });