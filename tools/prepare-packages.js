/**
 * Prepare the NPM packages from curated data
 *
 * NPM packages include @webref/css, @webref/elements and @webref/idl.
 * 
 * These packages contain a filtered view of the curated data, which must have
 * been prepared prior to running this script (see tools/prepare-curated.js).
 * 
 * The script copies relevant files from the given "curated" folder to the
 * "packages" folders.
 *
 * node tools/prepare-packages.js [curated folder] [packages folder]
 */


const fs = require('fs').promises;
const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const { requireFromWorkingDirectory } = require('./utils');

async function preparePackages(curatedFolder, packagesFolder) {
  console.log('Load crawl index file');
  const crawlIndex = requireFromWorkingDirectory(path.join(curatedFolder, 'index.json'));
  console.log(`- ${crawlIndex.results.length} curated specs in index file`);

  const packages = [
    { name: 'css', fileExt: 'json' },
    { name: 'elements', fileExt: 'json' },
    { name: 'idl', fileExt: 'idl' }
  ];

  for (const { name, fileExt } of packages) {
    console.log();
    console.log(`Prepare the ${name} package`);

    // rm packages/${name}/*.${fileExt}
    const dstDir = path.join(packagesFolder, name);
    const dstFiles = await fs.readdir(dstDir);
    for (const file of dstFiles) {
      if (file.endsWith(`.${fileExt}`) && file !== 'package.json') {
        await fs.unlink(path.join(dstDir, file));
      }
    }
    console.log(`- cleaned ${dstDir} folder`);

    // Only keep specs targeted at browsers
    const specs = crawlIndex.results.filter(spec => spec[name]);
    console.log('- TODO: only keep specs targeted at browsers');
    console.log(`- ${specs.length}/${crawlIndex.results.length} specs to include in the package`);

    // cp ${curatedFolder}/${name}/*.${fileExt} packages/${name}
    const srcDir = path.join(curatedFolder, name);
    const srcFiles = await fs.readdir(srcDir);
    for (const file of srcFiles) {
      if (file.endsWith(`.${fileExt}`) &&
          specs.find(spec => spec[name] === `${name}/${file}`)) {
        await fs.copyFile(path.join(srcDir, file), path.join(dstDir, file));
      }
    }
    console.log(`- Curated extracts copied to ${dstDir}`);
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