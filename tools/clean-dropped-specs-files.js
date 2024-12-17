/**
 * Drop extract files that do not correspond to any of the specs in crawl
 * results.
 *
 * node tools/clean-dropped-specs-files.js [crawl folder]
 *
 * ... where:
 * - [crawl folder] is the folder that contains the crawl result and extracts.
 *
 * This script is intended to be run at the end of a crawl before committing
 * the result back to the main branch to automatically drop extract files that
 * we know for sure no longer need to be kept around.
 *
 * Note that extract files that correspond to a spec in the crawl result are
 * preserved even if crawl results do not link to them. This is on purpose. Such
 * files are to be handled by the "clean-abandoned-files.js" script and should
 * remain subject to human review.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { loadJSON } from './utils.js';

async function cleanExtractFolder(folder, crawlResults) {
  const dir = await fs.readdir(folder);
  for (const filename of dir) {
    const specname = path.basename(filename, path.extname(filename));
    const spec = crawlResults
      .find(s => s.shortname === specname ||
        s.series?.shortname === specname ||
        // CDDL extracts may end with CDDL module name
        s.shortname.startsWith(specname + '-')
      );
    if (!spec) {
      const fileToDrop = path.join(folder, filename);
      await fs.unlink(fileToDrop);
      console.log(`- ${fileToDrop} dropped`);
    }
  }
}

async function cleanCrawlFolder(crawlFolder) {
  console.log('Load crawl results');
  const indexFile = await loadJSON(path.join(crawlFolder, 'index.json'));
  const crawlResults = indexFile.results;
  if (!crawlResults) {
    throw new Error('The index.json file does not seem to contain crawl results');
  }
  console.log(`- ${crawlResults.length} specs found in crawl results`);

  const folders = await fs.readdir(crawlFolder);
  for (const folder of folders) {
    // Don't touch patches!
    if (folder.endsWith('patches')) {
      continue;
    }

    const fullPath = path.join(crawlFolder, folder);
    const stat = await fs.lstat(fullPath);
    if (stat.isDirectory()) {
      console.log('');
      console.log(`Clean folder ${fullPath}`);
      await cleanExtractFolder(fullPath, crawlResults);
      console.log(`- done`);
    }
  }
}


/*******************************************************************************
Retrieve crawl folder from command-line
*******************************************************************************/
const crawlFolder = process.argv[2] ?? "ed";

cleanCrawlFolder(crawlFolder)
  .then(() => {
    console.log();
    console.log("== The end ==");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });