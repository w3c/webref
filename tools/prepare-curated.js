/**
 * Prepare the curated data and save the result to the given folder.
 *
 * Curation means copying raw data to the given folder, applying patches (CSS,
 * elements, events, IDL) when needed and running post-processing modules that
 * need to run on curated data to generate the `idlparsed`, `idlnames` and
 * `idlnamesparsed` folders, and the merged `events.json` file
 *
 * The output folder gets created if it does not exist yet. Output folder
 * contents get deleted to start with if folder is not empty.
 *
 * The `csscomplete` post-processing module is supposed to have been run when
 * specs were crawled. We don't run it after curation because it could
 * re-introduce some of the CSS properties defined in prose that the
 * `dropCSSPropertyDuplicates` function removes during curation.
 *
 * node tools/prepare-curated.js [raw data folder] [curated folder]
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { rimraf } from 'rimraf';
import {
  createFolderIfNeeded,
  loadJSON,
  copyFolder } from './utils.js';
import { applyPatches } from './apply-patches.js';
import { dropCSSPropertyDuplicates } from './drop-css-property-duplicates.js';
import { curateEvents } from './amend-event-data.js';
import reffy from 'reffy';
const crawlSpecs = reffy.crawlSpecs;


/**
 * Remove the spec from curation process
*/
async function removeFromCuration(spec, curatedFolder) {
  for (const property of ['css', 'elements', 'events', 'idl']) {
    if (spec[property] &&
        (typeof spec[property] === 'string') &&
        spec[property].match(/^[^\/]+\/[^\/]+\.(json|idl)$/)) {
      const filename = path.join(curatedFolder, spec[property]);
      console.log(`Removing ${spec.standing} ${spec.title} from curation: del ${filename}`);
      await fs.unlink(filename);
    }
  }
}


/**
 * Remove links from given spec crawl result to extracts that no longer exist
 * once patches have been applied.
 *
 * @function
 * @param {Object} spec to parse and clean.
 */
async function cleanCrawlOutcome(spec) {
  for (const property of Object.keys(spec)) {
    // Only consider properties that link to an extract
    if (spec[property] &&
        (typeof spec[property] === 'string') &&
        spec[property].match(/^[^\/]+\/[^\/]+\.(json|idl)$/)) {
      try {
        await fs.lstat(path.join(curatedFolder, spec[property]));
      }
      catch (err) {
        delete spec[property];
      }
    }
  }
}


/**
 * Copy raw data and apply patches whenever needed.
 *
 * @function
 * @param {String} type Package name. Must match one of the existing folder
 *  names under "packages" (e.g. "css", "elements", "events", "idl")
 */
async function prepareCurated(rawFolder, curatedFolder) {
  console.log('Make sure that curated folder exists and is empty');
  await createFolderIfNeeded(curatedFolder);
  console.log('- folder exists');
  try {
    rimraf.sync(`${curatedFolder}/*`, { glob: true });
  }
  catch {
  }
  console.log('- folder is empty');

  console.log();
  console.log('Copy raw data to curated folder');
  await crawlSpecs({
    useCrawl: rawFolder,
    output: curatedFolder,
    quiet: true
  });
  console.log('- done');

  console.log();
  console.log('Apply patches');
  await applyPatches(rawFolder, curatedFolder, 'all');
  await curateEvents(curatedFolder);
  console.log('- patches applied');

  console.log();
  console.log('Adjust curated data and crawl index');
  const crawlIndexFile = path.join(curatedFolder, 'index.json');
  const crawlIndex = await loadJSON(crawlIndexFile);
  for (const spec of crawlIndex.results) {
    if (spec.standing !== 'good') {
      await removeFromCuration(spec, curatedFolder);
    }
    await cleanCrawlOutcome(spec);
  }
  await fs.writeFile(crawlIndexFile, JSON.stringify(crawlIndex, null, 2));
  console.log('- done');

  console.log();
  console.log('Drop duplicate CSS property definitions when possible');
  await dropCSSPropertyDuplicates(curatedFolder);
  console.log('- done');

  console.log();
  console.log('Run post-processing modules on curated data');
  await crawlSpecs({
    useCrawl: curatedFolder,
    output: curatedFolder,
    post: ['idlparsed', 'idlnames', 'events'],
    quiet: true
  });
  console.log('- done');
}


/*******************************************************************************
Kick things off
*******************************************************************************/
const rawFolder = process.argv[2] ?? "ed";
const curatedFolder = process.argv[3] ?? "curated";

prepareCurated(rawFolder, curatedFolder)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
