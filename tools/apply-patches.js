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
import { createFolderIfNeeded, loadJSON, getTargetedExtracts } from './utils.js';
const execFile = util.promisify(execCb);

async function applyPatches(rawFolder, outputFolder, type) {
  type = (type === 'all') ? ['css', 'elements', 'idl'] : [type];

  const packages = [
    {
      name: 'cddl',
      srcDir: path.join(rawFolder, 'cddl'),
      dstDir: path.join(outputFolder, 'cddl'),
      dstDirForCli: [outputFolder, 'cddl'].join('/'),
      patchDir: path.join(rawFolder, 'cddlpatches'),
      fileExt: 'cddl'
    },
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
  await applyFreezePatches(rawFolder, outputFolder);

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


/**
 * Apply "freeze" patches, which freeze curation data for a spec to the results
 * of a previous crawl result, identified by a commit ID.
 *
 * Freeze patches are meant to be used for specs that are (hopefully
 * temporarily) severely broken.
 */
async function applyFreezePatches(rawFolder, outputFolder) {
  const patchDir = path.join(rawFolder, 'freezepatches');
  const patchFiles = await fs.readdir(patchDir);

  const outputIndex = await loadJSON(path.join(outputFolder, 'index.json'));
  let patchApplied = false;

  for (const file of patchFiles) {
    if (!file.endsWith('.json')) {
      continue;
    }

    const shortname = file.replace(/\.json$/, '');
    const patch = path.join(patchDir, file);
    const json = await loadJSON(patch);

    console.log(`Applying ${path.relative(rawFolder, patch)}`);
    const outputSpecPos = outputIndex.results.findIndex(spec => spec.shortname === shortname);

    // Get back to the patch commit
    // (note this does not touch the `curated` folder because it is in
    // the `.gitignore` file)
    await execFile('git', ['checkout', json.commit]);

    const crawlIndex = await loadJSON(path.join(rawFolder, 'index.json'));
    const crawlSpec = crawlIndex.results.find(spec => spec.shortname === shortname);

    for (const propValue of Object.values(crawlSpec)) {
      const extractFiles = getTargetedExtracts(propValue);
      for (const extractFile of extractFiles) {
        await fs.copyFile(
          path.join(rawFolder, extractFile),
          path.join(outputFolder, extractFile)
        );
      }
      outputIndex.results.splice(outputSpecPos, 1, crawlSpec);
    }

    await execFile('git', ['checkout', 'main']);
    patchApplied = true;
  }

  // Update curated version of the index.json file
  if (patchApplied) {
    await fs.writeFile(
      path.join(outputFolder, 'index.json'),
      JSON.stringify(outputIndex, null, 2),
      'utf8'
    );
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
