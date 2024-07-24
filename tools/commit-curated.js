/**
 * Commit curated data in the given folder to the `curated` branch and push the
 * result to GitHub.
 *
 * node tools/commit-curated.js [curated folder] [stay on curated branch]
 *
 * ... where:
 * - [curated folder] is the folder that contains the curated data that should
 * replace curated data in the "curated" branch
 * - [stay on curated branch] is set (any value) to remain on the "curated"
 * branch at the end of the script (script switches back to initial branch
 * otherwise)
 */

import util from 'node:util';
import path from 'node:path';
import fs from 'node:fs/promises';
import { execSync } from 'node:child_process';
import { rimraf } from 'rimraf';
import { copyFolder, createFolderIfNeeded } from './utils.js';


/**
 * Copy curated data from given folder to the `curated` branch, commit and push
 * the branch back to GitHub.
 *
 * @function
 */
async function commitCurated(curatedFolder, stayOnCurated) {
  console.log('Save name and commit ID of current branch');
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  const currentCommit = execSync('git log -n 1 --pretty=format:"%H"', { encoding: 'utf8' }).trim();
  console.log(`- on branch "${currentBranch}" at ${currentCommit}`);

  if (currentBranch !== 'curated') {
    console.log();
    console.log('Checkout branch "curated"');
    // Final '--' because presence of a 'curated' folder may confuse Git
    execSync(`git checkout curated --`);
    console.log('- done');
  }

  console.log();
  console.log('Reset "curated" branch to start from scratch');
  try {
    rimraf.sync(`ed/*`, { glob: true });
  }
  catch {
  }
  console.log('- done');

  console.log();
  console.log('Copy new curated data to the "curated" branch');
  await copyFolder(curatedFolder, 'ed', { excludeRoot: true });
  console.log('- done');

  console.log();
  console.log('Add static packages files to the "curated" branch');
  execSync('git checkout main -- packages');
  console.log('- done');

  console.log();
  console.log('Add stripped down version of package.json to the "curated" branch');
  execSync('git checkout main -- package.json');
  const packagejson = JSON.parse(await fs.readFile('package.json', 'utf8'));
  delete packagejson.devDependencies;
  delete packagejson.scripts;
  await fs.writeFile('package.json', JSON.stringify(packagejson, null, 2), 'utf8');
  execSync('git add package.json');
  console.log('- done');

  console.log();
  console.log('Commit changes to the "curated" branch');
  execSync('git add ed --all');
  execSync(`git commit -m "Publish curated data from ${currentCommit}" -m "Curated data generated from raw data at ${currentCommit}" || echo ""`);
  console.log('- done');

  if ((currentBranch !== 'curated') && !stayOnCurated) {
    console.log();
    console.log('Get back to initial branch');
    execSync(`git checkout ${currentBranch}`);
    console.log('- done');
  }
}


/*******************************************************************************
Retrieve GH_TOKEN from environment, prepare Octokit and kick things off
*******************************************************************************/
const curatedFolder = process.argv[2] ?? "curated";
const stayOnCurated = !!process.argv[3];

commitCurated(curatedFolder, stayOnCurated)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });