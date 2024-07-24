/**
 * Apply patches
 *
 * The output folder gets created if it does not exist yet.
 *
 * node tools/apply-patches.js [raw folder] [output folder] [type]
 * 
 * ... where:
 * - [raw folder] is the name of the folder that contains the raw data and the
 * patches (default is "ed");
 * - [output folder] the name of the folder that is to contain the results of
 * applying the patches (default is "curated");
 * - [type] is the type of patches to apply: "css", "elements", "idl", or "all"
 * (default is "all").
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';
import { fileURLToPath } from 'node:url';
import { execFile as execCb } from 'node:child_process';
import { createFolderIfNeeded } from './utils.js';
const execFile = util.promisify(execCb);

async function applyPatches(rawFolder, outputFolder, type) {
  type = (type === 'all') ? ['css', 'elements', 'idl'] : [type];

  const packages = [
    {
      name: 'css',
      srcDir: path.join(rawFolder, 'css'),
      dstDir: path.join(outputFolder, 'css'),
      dstDirForCli: [outputFolder, 'css'].join('/'),
      patchDir: path.join(rawFolder, 'csspatches'),
      fileExt: 'json'
    },
    {
      name: 'elements',
      srcDir: path.join(rawFolder, 'elements'),
      dstDir: path.join(outputFolder, 'elements'),
      dstDirForCli: [outputFolder, 'elements'].join('/'),
      patchDir: path.join(rawFolder, 'elementspatches'),
      fileExt: 'json'
    },
    {
      name: 'idl',
      srcDir: path.join(rawFolder, 'idl'),
      dstDir: path.join(outputFolder, 'idl'),
      dstDirForCli: [outputFolder, 'idl'].join('/'),
      patchDir: path.join(rawFolder, 'idlpatches'),
      fileExt: 'idl'
    }
  ];

  await createFolderIfNeeded(outputFolder);

  for (const { name, srcDir, dstDir, patchDir, fileExt } of packages) {
    if (!type.includes(name)) {
      continue;
    }

    await createFolderIfNeeded(dstDir);

    // rm dstDir/*.${fileExt}
    const dstFiles = await fs.readdir(dstDir);
    for (const file of dstFiles) {
      if (file.endsWith(`.${fileExt}`) && file !== 'package.json') {
        await fs.unlink(path.join(dstDir, file));
      }
    }

    // cp srcDir/*.${fileExt} dstDir/
    const srcFiles = await fs.readdir(srcDir);
    for (const file of srcFiles) {
      if (file.endsWith('.' + fileExt)) {
        await fs.copyFile(path.join(srcDir, file), path.join(dstDir, file));
      }
    }

    // The patches are against srcDir and can be applied there using `git am`,
    // but apply them in dstDir instead using `git apply`.
    // See ed/idlpatches/README.md for how to maintain these patches.
    const patchFiles = await fs.readdir(patchDir);
    for (const file of patchFiles) {
      if (file.endsWith('.patch')) {
        const patch = path.join(patchDir, file);
        console.log(`Applying ${path.relative(rawFolder, patch)}`);
        await execFile('git', ['apply', `--directory=${outputFolder}/${name}`, '-p3', patch]);
      }
    }
  }
}


/**************************************************
Export methods for use as module
**************************************************/
export { applyPatches };


/**************************************************
Code run if the code is run as a stand-alone module
**************************************************/
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const rawFolder = process.argv[2] ?? 'ed';
  const outputFolder = process.argv[3] ?? 'curated';
  const type = process.argv[4] ?? 'all';
  
  applyPatches(rawFolder, outputFolder, type).catch(e => {
    console.error(e);
    process.exit(1);
  });
}
