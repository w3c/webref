import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));

/**
 * The cross-references database
 */
const xref = {
  dfns: [],
  headings: [],
  specs: []
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
            url.hash = encodeURIComponent(id);
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
  if (rootFolder === scriptPath) {
    // We're in "package" mode, the root folder contains a `specs.json` file.
    xref.specs = JSON.parse(fs.readFileSync(path.join(rootFolder, 'specs.json'), 'utf8'));
  }
  else {
    // We're in "use crawl results" mode, the root folder won't contain a
    // `specs.json` file, but the `ed` folder should have a crawl index with a
    // list of specs.
    const crawl = JSON.parse(fs.readFileSync(path.join(rootFolder, 'ed', 'index.json'), 'utf8'));
    xref.specs = crawl.results;
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
 * `source` key set to "dfns" or "headings"; and a `entry` key set to either a
 * dfn object when `source` is "dfns" or a heading object when `source` is
 * "headings".
 *
 * The function accepts a lookup options object as second parameter that sets
 * lookup capabilities and filters. Check the README for details.
 */
export function lookup(url, { standing, version, series } = {}) {
  if (!initialized) {
    throw new Error('The `lookup()` function was called before `setup()`.');
  }
  if (!url) {
    throw new Error('The `lookup()` function was called without argument.');
  }

  // URL hashes in Webref extracts are percent-encoded. Goal is to support
  // lookup of both percent-encoded and non percent-encoded URLs. To make sure
  // that we end up with what we need, let's force a decode (this will be a
  // no-op if the fragment is not percent-encoded) before we re-encode.
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  }
  catch (err) {
    throw new Error('The `lookup()` function was called with an invalid URL.', err);
  }
  let decodedHash;
  try {
    decodedHash = decodeURIComponent(parsedUrl.hash);
  }
  catch {
    decodedHash = parsedUrl.hash;
  }
  parsedUrl.hash = encodeURIComponent(decodedHash.replace(/^#/, ''));
  let lookupUrl = parsedUrl.toString();

  // If the series flag is set, the provided URL may also be a spec series URL,
  // which we need to convert to the URL of the current spec in the series.
  if (series && !urlIndex[lookupUrl.toString()]) {
    // Drop the hash to match spec URLs
    const hash = parsedUrl.hash;
    parsedUrl.hash = '';
    const specUrl = parsedUrl.toString();
    const spec = xref.specs.find(spec =>
      spec.shortname === spec.series.currentSpecification &&
      (spec.series.nightlyUrl === specUrl || spec.series.releaseUrl === specUrl)
    );
    if (spec) {
      // The lookup URL matches a series URL indeed, let's change it to the URL
      // of the current spec in the series
      const currentUrl = new URL(
        (spec.series.nightlyUrl === specUrl) ? spec.nightly.url : spec.release.url
      );
      currentUrl.hash = hash;
      lookupUrl = currentUrl.toString();
    }
  }

  // Look for the resulting URL and filter results as needed
  let res = urlIndex[lookupUrl.toString()] ?? [];
  const hasSpecFilter = standing || version;
  if (hasSpecFilter) {
    res = res.filter(match => {
      const entry = match.entry;
      const spec = xref.specs.find(spec => spec.shortname === entry.spec);
      return (!standing || spec.standing === standing) &&
        (!version || entry.version === version);
    });
  }
  return structuredClone(res);
}
