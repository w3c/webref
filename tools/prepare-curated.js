/**
 * Prepare the curated data and save the result to the given folder.
 *
 * Curation means copying raw data to the given folder, applying patches (CSS,
 * elements, IDL) when needed, re-generating the `idlparsed` folder, and
 * re-generating the `idlnames` and `idlnamesparsed` folders for relevant
 * browser specs.
 *
 * The output folder gets created if it does not exist yet. Output folder
 * contents get deleted to start with if folder is not empty.
 *
 * node tools/prepare-curated.js [raw data folder] [curated folder]
 */

const fs = require('fs').promises;
const path = require('path');
const rimraf = require('rimraf');
const {
  expandCrawlResult,
  generateIdlNames, saveIdlNames,
  generateIdlParsed, saveIdlParsed } = require('reffy');
const {
  createFolderIfNeeded,
  loadJSON,
  copyFolder } = require('./utils');
const { applyPatches } = require('./apply-patches');
const { dropCSSPropertyDuplicates } = require('./drop-css-property-duplicates');


/**
 * Remove links from given spec crawl result to extracts that no longer exist
 * once patches have been applied.
 *
 * @function
 * @param {Object} spec to parse and clean.
 */
async function cleanCrawlOutcome(spec) {
  await Promise.all(Object.keys(spec).map(async property => {
    // Only consider properties that link to an extract
    if (!spec[property] ||
        (typeof spec[property] !== 'string') ||
          !spec[property].match(/^[^\/]+\/[^\/]+\.(json|idl)$/)) {
      return;
    }

    try {
      await fs.lstat(path.join(curatedFolder, spec[property]));
    }
    catch (err) {
      delete spec[property];
    }
  }));
}


/**
 * Copy raw data and apply patches whenever needed.
 *
 * @function
 * @param {String} type Package name. Must match one of the existing folder
 *  names under "packages" (e.g. "css", "elements", "idl")
 */
async function prepareCurated(rawFolder, curatedFolder) {
  console.log('Make sure that curated folder exists and is empty');
  await createFolderIfNeeded(curatedFolder);
  console.log('- folder exists');
  try {
    rimraf.sync(`${curatedFolder}/*`);
  }
  catch {
  }
  console.log('- folder is empty');

  console.log();
  console.log('Copy crawl outcome (index.json)');
  await fs.copyFile(
    path.join(rawFolder, 'index.json'),
    path.join(curatedFolder, 'index.json'));
  console.log('- done');

  console.log();
  console.log('Copy raw data to curated folder');
  const folders = await fs.readdir(rawFolder);
  await Promise.all(folders.filter(folder =>
      !folder.endsWith('patches') && !folder.includes('.') &&
      !['idlnames', 'idlnamesparsed', 'idlparsed'].includes(folder)
  ).map(async folder => {
    await copyFolder(
      path.join(rawFolder, folder),
      curatedFolder);
    console.log(`- "${folder}" folder copied`);
  }));

  console.log();
  console.log('Apply patches');
  await applyPatches(rawFolder, curatedFolder, 'all');
  console.log('- patches applied');

  let crawlIndexFile = path.join(curatedFolder, 'index.json');
  let crawlIndex = await loadJSON(crawlIndexFile);
  await Promise.all(crawlIndex.results.map(cleanCrawlOutcome));
  await fs.writeFile(crawlIndexFile, JSON.stringify(crawlIndex, null, 2));
  console.log('- crawl outcome adjusted');

  console.log();
  console.log('Drop duplicate CSS property definitions when possible');
  await dropCSSPropertyDuplicates(curatedFolder);
  console.log('- done');

  console.log();
  console.log('Re-generate the idlparsed folder');
  const idlExtracts = {};
  crawlIndex.results.forEach(spec => {
    if (spec.idl) {
      idlExtracts[spec.url] = spec.idl;
    }
  });
  console.log('- backup of links to IDL extracts in crawl outcome done');
  let crawlResults = await expandCrawlResult(crawlIndex, curatedFolder, ['idl']);
  console.log('- IDL expanded in crawl outcome');

  await Promise.all(crawlResults.results.map(async spec => {
    if (spec.idl) {
      await generateIdlParsed(spec);
      spec.idlparsed = await saveIdlParsed(spec, curatedFolder);
      // Rollback IDL property to a link
      if (idlExtracts[spec.url]) {
        spec.idl = idlExtracts[spec.url];
      }
    }
  }));
  console.log('- parsed IDL generated');
  await fs.writeFile(crawlIndexFile, JSON.stringify(crawlIndex, null, 2));
  console.log('- crawl outcome adjusted');

  console.log();
  console.log('Re-generate the idlnames and idlnamesparsed folders');
  crawlResults = await expandCrawlResult(crawlIndex, curatedFolder, ['idlparsed', 'dfns']);
  crawlResults.results = crawlResults.results.filter(spec => spec.categories?.includes('browser'));
  const idlNames = generateIdlNames(crawlResults.results, { dfns: true });
  await saveIdlNames(idlNames, curatedFolder);
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