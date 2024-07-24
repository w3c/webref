/**
 * Prepare the NPM packages from curated data
 *
 * NPM packages include @webref/css, @webref/elements, @webref/events
 * and @webref/idl.
 * 
 * These packages contain a filtered view of the curated data, which must have
 * been prepared prior to running this script (see tools/prepare-curated.js).
 * 
 * The script copies relevant files from the given "curated" folder to the
 * "packages" folders.
 *
 * node tools/prepare-packages.js [curated folder] [packages folder]
 */


import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';
import { execFile as execFileCb } from 'node:child_process';
import { loadJSON } from './utils.js';
const execFile = util.promisify(execFileCb);

async function preparePackages(curatedFolder, packagesFolder) {
  console.log('Load crawl index file');
  const crawlIndex = await loadJSON(path.join(curatedFolder, 'index.json'));
  console.log(`- ${crawlIndex.results.length} curated specs in index file`);

  const packages = [
    { name: 'css', fileExt: 'json' },
    { name: 'elements', fileExt: 'json' },
    { name: 'events', fileExt: 'json', index: 'events.json', folder: null },
    { name: 'idl', fileExt: 'idl' }
  ];

  for (let { name, fileExt, index, folder } of packages) {
    console.log();
    console.log(`Prepare the ${name} package`);

    // Copy extract files from folder with same name as package by default,
    // unless told to use a different folder or not to copy anything (when
    // value is null)
    if (folder === undefined) {
      folder = name;
    }

    // TODO: consider adding index file from crawl result file (see #554),
    // unless index is already set to a specific file

    // rm packages/${name}/*.${fileExt}
    const dstDir = path.join(packagesFolder, name);
    const dstFiles = await fs.readdir(dstDir);
    for (const file of dstFiles) {
      if (file.endsWith(`.${fileExt}`) && file !== 'package.json') {
        await fs.unlink(path.join(dstDir, file));
      }
    }
    console.log(`- cleaned ${dstDir} folder`);

    if (folder) {
      // Only keep extracts from specs in good standing targeted at browsers
      const specs = crawlIndex.results
        .filter(spec => spec[name])
        .filter(spec => spec.categories?.includes('browser') && spec.standing === 'good');
      console.log(`- ${specs.length}/${crawlIndex.results.length} specs to include in the package`);

      // cp ${curatedFolder}/${folder}/*.${fileExt} packages/${name}
      const srcDir = path.join(curatedFolder, folder);
      const srcFiles = await fs.readdir(srcDir);
      for (const file of srcFiles) {
        if (file.endsWith(`.${fileExt}`) &&
            specs.find(spec => spec[name] === `${name}/${file}`)) {
          await fs.copyFile(path.join(srcDir, file), path.join(dstDir, file));
        }
      }
      console.log(`- Curated extracts copied to ${dstDir}`);
    }

    if (index) {
      // cp ${curatedFolder}/${index} packages/${name}/${index}
      await fs.copyFile(path.join(curatedFolder, index), path.join(dstDir, index));
      console.log(`- Index file copied to ${dstDir}`);
    }
  }
}

/*******************************************************************************
Kick things off
*******************************************************************************/
const curatedFolder = process.argv[2] ?? "curated";
const packagesFolder = process.argv[3] ?? "packages";

preparePackages(curatedFolder, packagesFolder)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });