import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));

/**
 * The cross-references database
 */
const xref = {
  dfns: [],
  headings: []
};

/**
 * An indexed view of the database by URL
 */
const urlIndex = {};

/**
 * True when the `setup()` function has been called
 */
let initialized = false;

/**
 * Helper function to index a URL
 */
function indexUrl(url, what) {
  if (!urlIndex[url]) {
    urlIndex[url] = [];
  }
  urlIndex[url].push(what);
}

/**
 * Helper function to load either dfns or headings extracts in memory
 */
function setupExtracts(type, rootFolder) {
  for (const version of ['nightly', 'release']) {
    const versionFolder = version === 'nightly' ? 'ed' : 'tr';
    const folder = path.join(rootFolder, versionFolder, type);
    const extracts = fs.readdirSync(folder);
    for (const extract of extracts) {
      if (!extract.endsWith('.json')) {
        continue;
      }
      const spec = path.parse(extract).name;
      const json = JSON.parse(
        fs.readFileSync(path.join(folder, extract), 'utf8')
      );
      for (const entry of json[type]) {
        entry.spec = spec;
        entry.version = version;
        xref[type].push(entry);

        indexUrl(entry.href, { source: type, entry });

        if (entry.links) {
          for (const link of entry.links) {
            indexUrl(link.href, { source: 'dfns', entry });
          }
        }
        if (entry.alternateIds) {
          for (const id of entry.alternateIds) {
            const url = new URL(entry.href);
            url.hash = id;
            const href = url.toString();
            indexUrl(href, { source: 'headings', entry });
          }
        }
      }
    }
  }
}


/**
 * Load the definitions in memory
 *
 * Note: ~50MB of JSON data gets loaded and indexed.
 */
export function setup(rootFolder = scriptPath) {
  if (initialized) {
    return;
  }
  for (const type of ['dfns', 'headings']) {
    setupExtracts(type, rootFolder);
  }
  initialized = true;
}


/**
 * Lookup a URL in the loaded database
 *
 * The function returns an array of entries. Each entry is an object with a
 * `source` key set to "dfns", "headings", "links", or "alternateIds"; and a
 * `entry` key set to either a dfn object when `source` is "dfns" or "links",
 * or a heading object when `source` is "headings" or "alternateIds".
 */
export function lookup(url) {
  if (!initialized) {
    throw new Error('Cannot run lookup before the `setup()` function gets called');
  }
  const res = urlIndex[url];
  return structuredClone(res) ?? [];
}
