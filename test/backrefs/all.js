/**
 * Test per-spec back-reference extracts.
 *
 * The tests run against the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadJSON } from '../../tools/utils.js';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated');
const backrefsFolder = path.join(curatedFolder, 'backrefs');

describe('The curated view of backrefs extracts', async () => {
  const index = await loadJSON(path.join(curatedFolder, 'index.json'));
  assert.ok(index, 'curated/index.json must exist (run npm run curate first)');

  const shortnames = new Set(index.results.map(s => s.shortname));
  const specsWithBackrefs = index.results.filter(s => s.backrefs);

  it('lists backrefs extracts only for specs that have a backrefs file', async () => {
    for (const spec of specsWithBackrefs) {
      await fs.access(path.join(curatedFolder, spec.backrefs));
    }
  });

  it('only creates files for specs that appear in the crawl index', async () => {
    let files = [];
    try {
      files = await fs.readdir(backrefsFolder);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        assert.fail('curated/backrefs folder is missing (run npm run curate first)');
      }
      throw err;
    }
    for (const file of files) {
      if (!file.endsWith('.json')) {
        continue;
      }
      const shortname = file.replace(/\.json$/, '');
      assert.ok(
        shortnames.has(shortname),
        `Found backrefs file for unknown shortname ${shortname}`
      );
    }
  });

  it('never includes private or argument definitions', async () => {
    for (const spec of specsWithBackrefs) {
      const data = await loadJSON(path.join(curatedFolder, spec.backrefs));
      for (const term of data.backrefs) {
        assert.notEqual(term.type, 'argument', `${spec.backrefs} contains an argument dfn`);
        // access is not copied into the extract; cross-check against dfns when present
      }
      if (spec.dfns) {
        const dfns = await loadJSON(path.join(curatedFolder, spec.dfns));
        const byHref = new Map((dfns?.dfns || []).map(d => [d.href, d]));
        for (const term of data.backrefs) {
          const dfn = byHref.get(term.href);
          if (dfn) {
            assert.notEqual(dfn.access, 'private', `${term.href} is private`);
            assert.notEqual(dfn.type, 'argument', `${term.href} is an argument`);
          }
        }
      }
    }
  });

  it('lists only external referrers that exist in the crawl index', async () => {
    for (const spec of specsWithBackrefs) {
      const data = await loadJSON(path.join(curatedFolder, spec.backrefs));
      assert.ok(data.backrefs.length > 0, `${spec.backrefs} should not be empty`);
      for (const term of data.backrefs) {
        assert.ok(term.referencedBy.length > 0, `${term.href} has no referrers`);
        for (const ref of term.referencedBy) {
          assert.ok(shortnames.has(ref.shortname), `Unknown referrer ${ref.shortname}`);
          assert.notEqual(
            ref.shortname,
            spec.shortname,
            `${term.href} lists the defining spec as a referrer`
          );
          assert.ok(ref.title, `Referrer ${ref.shortname} is missing a title`);
          assert.ok(ref.url, `Referrer ${ref.shortname} is missing a url`);
        }
      }
    }
  });

  it('records Fetch as referencing Streams ReadableStream', async () => {
    const streams = specsWithBackrefs.find(s => s.shortname === 'streams');
    assert.ok(streams, 'streams spec should have a backrefs extract');
    const data = await loadJSON(path.join(curatedFolder, streams.backrefs));
    const readableStream = data.backrefs.find(t =>
      t.id === 'readablestream' ||
      t.linkingText?.includes('ReadableStream')
    );
    assert.ok(readableStream, 'ReadableStream should appear in streams backrefs');
    assert.ok(
      readableStream.referencedBy.some(r => r.shortname === 'fetch'),
      'Fetch should reference Streams ReadableStream'
    );
  });
});
