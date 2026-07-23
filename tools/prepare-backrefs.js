/**
 * Prepare per-spec back-reference extracts.
 *
 * For each definition that a specification owns, list other specifications that
 * link to it. Algorithm follows Webdex's invert-links step: index public dfns
 * by href, expand outbound links with anchors to fragment URLs, match, then
 * group by defining spec.
 *
 * Only terms with at least one external reference are written. Self-references
 * are excluded. Private dfns and argument dfns are skipped (same as Webdex).
 *
 * Output: [folder]/backrefs/[shortname].json and updates index.json.
 *
 * node tools/prepare-backrefs.js [folder]
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rimraf } from 'rimraf';
import { createFolderIfNeeded, loadJSON } from './utils.js';
import { expandCrawlResult } from 'reffy';


/**
 * Index a dfn href and HTML/ECMAScript multipage ↔ single-page aliases.
 */
function indexDfnHref(linksIndex, href, entry) {
  linksIndex.set(href, entry);
  if (href.startsWith('https://html.spec.whatwg.org/multipage/') ||
      href.startsWith('https://tc39.es/ecma262/multipage/')) {
    const singlePageUrl = href.replace(/\/multipage\/[^#]+#/, '/#');
    linksIndex.set(singlePageUrl, entry);
  }
  else if (href.startsWith('https://html.spec.whatwg.org/#') ||
           href.startsWith('https://tc39.es/ecma262/#')) {
    // Single-page form is already indexed; multipage variants appear as
    // outbound links and are handled when looking up the link URL itself.
  }
}


/**
 * Expand a referring spec's links extracts into absolute fragment URLs.
 */
function expandFragmentLinks(spec) {
  const links = spec.links;
  if (!links) {
    return [];
  }
  const bases = new Set([
    ...Object.keys(links.rawlinks || {}),
    ...Object.keys(links.autolinks || {})
  ]);
  const fullLinks = [];
  for (const link of bases) {
    const anchors = [
      ...(links.rawlinks?.[link]?.anchors || []),
      ...(links.autolinks?.[link]?.anchors || [])
    ];
    for (const frag of anchors) {
      fullLinks.push(`${link}#${frag}`);
    }
  }
  return [...new Set(fullLinks)];
}


/**
 * Normalize multipage HTML/ES links to the single-page form used by many dfns.
 */
function alternateLinkForms(link) {
  const forms = [link];
  if (link.startsWith('https://html.spec.whatwg.org/multipage/') ||
      link.startsWith('https://tc39.es/ecma262/multipage/')) {
    forms.push(link.replace(/\/multipage\/[^#]+#/, '/#'));
  }
  return forms;
}


/**
 * Build and write backrefs extracts for the crawl in the given folder.
 */
async function prepareBackrefs(folder) {
  const rawIndex = await loadJSON(path.join(folder, 'index.json'));
  if (!rawIndex) {
    throw new Error(`Could not load crawl index from ${folder}/index.json`);
  }
  const index = JSON.parse(JSON.stringify(rawIndex));
  await expandCrawlResult(index, folder, ['dfns', 'links']);

  // href → { definingShortname, dfn }
  const linksIndex = new Map();
  // definingShortname → Map(dfnHref → { dfn fields, referencedBy: Map })
  const byDefiningSpec = new Map();

  for (const spec of index.results) {
    for (const dfn of (spec.dfns || [])) {
      if (dfn.access === 'private') {
        continue;
      }
      if (dfn.type === 'argument') {
        continue;
      }

      const entry = {
        definingShortname: spec.shortname,
        dfn
      };
      indexDfnHref(linksIndex, dfn.href, entry);

      if (!byDefiningSpec.has(spec.shortname)) {
        byDefiningSpec.set(spec.shortname, {
          spec,
          terms: new Map()
        });
      }
      const terms = byDefiningSpec.get(spec.shortname).terms;
      if (!terms.has(dfn.href)) {
        terms.set(dfn.href, {
          id: dfn.id,
          href: dfn.href,
          linkingText: dfn.linkingText,
          type: dfn.type,
          referencedBy: new Map()
        });
      }
    }
  }

  for (const spec of index.results) {
    const referrer = {
      shortname: spec.shortname,
      title: spec.title,
      url: spec.nightly?.url || spec.crawled || spec.url
    };
    for (const link of expandFragmentLinks(spec)) {
      let match = null;
      for (const form of alternateLinkForms(link)) {
        match = linksIndex.get(form);
        if (match) {
          break;
        }
      }
      if (!match) {
        continue;
      }
      // Exclude self-references
      if (match.definingShortname === spec.shortname) {
        continue;
      }
      const bucket = byDefiningSpec.get(match.definingShortname);
      const term = bucket?.terms.get(match.dfn.href);
      if (!term) {
        continue;
      }
      if (!term.referencedBy.has(referrer.shortname)) {
        term.referencedBy.set(referrer.shortname, referrer);
      }
    }
  }

  const backrefsDir = path.join(folder, 'backrefs');
  await createFolderIfNeeded(backrefsDir);
  try {
    rimraf.sync(`${backrefsDir}/*`, { glob: true });
  }
  catch {
  }

  // Clear previous backrefs pointers from index
  for (const spec of index.results) {
    delete spec.backrefs;
  }

  let filesWritten = 0;
  for (const [shortname, { spec, terms }] of byDefiningSpec) {
    const backrefs = [];
    for (const term of terms.values()) {
      if (term.referencedBy.size === 0) {
        continue;
      }
      backrefs.push({
        id: term.id,
        href: term.href,
        linkingText: term.linkingText,
        type: term.type,
        referencedBy: [...term.referencedBy.values()]
          .sort((a, b) => a.shortname.localeCompare(b.shortname))
      });
    }
    if (backrefs.length === 0) {
      continue;
    }
    backrefs.sort((a, b) => a.id.localeCompare(b.id));

    const extractPath = `backrefs/${shortname}.json`;
    const payload = {
      spec: {
        title: spec.title,
        url: spec.crawled || spec.nightly?.url || spec.url
      },
      backrefs
    };
    await fs.writeFile(
      path.join(folder, extractPath),
      JSON.stringify(payload, null, 2) + '\n',
      'utf8'
    );
    const indexSpec = rawIndex.results.find(s => s.shortname === shortname);
    if (indexSpec) {
      indexSpec.backrefs = extractPath;
    }
    filesWritten++;
  }

  await fs.writeFile(
    path.join(folder, 'index.json'),
    JSON.stringify(rawIndex, null, 2) + '\n',
    'utf8'
  );

  console.log(`- wrote ${filesWritten} backrefs extract(s)`);
  return filesWritten;
}


export { prepareBackrefs };


if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const folder = process.argv[2] ?? 'curated';
  prepareBackrefs(folder)
    .then(() => {
      console.log('== The end ==');
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}
