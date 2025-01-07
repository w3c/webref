/**
 * Create a patch from last commit in current branch provided it touched one
 * CSS, elements, or IDL extract file, rollback that commit, copy the patch file
 * to ed/[xxx]patches as needed, and commit the file in a new branch, leaving
 * just a few manual steps to actually integrate the patch into Webref.
 *
 * node tools/create-patch.js
 */

import fs from 'node:fs/promises';
import util from 'node:util';
import path from 'node:path';
import { exec as execCb, execFile as execFileCb } from 'node:child_process';
const exec = util.promisify(execCb);
const execFile = util.promisify(execFileCb);

async function main() {
  console.log('Check last commit touches one and only one CDDL/CSS/Elements/IDL file...');
  const { stdout: diffOut } = await execFile('git', ['diff', '--name-only', 'HEAD', 'HEAD~1']);
  const files = diffOut.split(/[\r\n]/).filter(f => !!f);
  if (files.length !== 1) {
    throw new Error('Last commit should only touch one CDDL/CSS/Elements/IDL file');
  }
  const commitFile = files[0];
  if (!commitFile.startsWith('ed/idl/') &&
      !commitFile.startsWith('ed/cddl/') &&
      !commitFile.startsWith('ed/css/') &&
      !commitFile.startsWith('ed/elements/')) {
    throw new Error('Last commit did not touch a CDD/CSS/Elements/IDL file');
  }
  const patchType =
    commitFile.startsWith('ed/idl/') ? 'idl' :
    commitFile.startsWith('ed/elements/') ? 'elements' :
    commitFile.startsWith('ed/cddl/') ? 'cddl' : 'css';
  const patchFile = commitFile.substring(`ed/${patchType}/`.length);
  console.log('  done');

  console.log('Retrieve commit title...');
  const { stdout: titleOut } = await execFile('git', ['log', '-1', '--pretty=%s']);
  const patchTitle = titleOut.trim();
  console.log(`  found "${patchTitle}"`);

  console.log('Create patch file from last commit...');
  const { stdout: patchOut } = await execFile('git', ['format-patch', '-1']);
  const rawPatchFile = patchOut.trim();
  console.log('  done');

  console.log('Rollback last commit...');
  await execFile('git', ['reset', 'HEAD~']);
  await execFile('git', ['restore', commitFile]);
  console.log('  done');

  console.log('Move patch file to appropriate patch folder...');
  const finalPatchFile = path.join('ed', patchType + 'patches', patchFile + '.patch');
  await fs.copyFile(rawPatchFile, finalPatchFile);
  await fs.unlink(rawPatchFile);
  console.log(`  moved to ${finalPatchFile}`);

  console.log('Commit patch file to a separate branch...');
  const branchName = 'patch-' + (new Date()).toISOString().replace(/[^\d]/g, '');
  await execFile('git', ['checkout', '-b', branchName]);
  await execFile('git', ['add', finalPatchFile]);
  await execFile('git', ['commit', '-m', `Add patch for ${commitFile}`, '-m', patchTitle]);
  console.log(`  committed to branch ${branchName}`);

  console.log();
  console.log('Next steps:');
  console.log(`1. Make sure that ${finalPatchFile} looks good`);
  console.log(`2. Push branch to GitHub: git push origin ${branchName}`);
  console.log(`3. Go to https://github.com/w3c/webref and create a pull request`);
  console.log(`4. Once happy, switch back to default branch locally and delete branch ${branchName}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
