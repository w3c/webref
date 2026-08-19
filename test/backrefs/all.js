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

  it('copies identifying dfn fields including for and access', async () => {
    for (const spec of specsWithBackrefs) {
      const data = await loadJSON(path.join(curatedFolder, spec.backrefs));
      const dfns = await loadJSON(path.join(curatedFolder, spec.dfns));
      for (const term of data.backrefs) {
        assert.ok(term.id, `${spec.backrefs} entry is missing id`);
        assert.ok(term.href, `${spec.backrefs} entry is missing href`);
        assert.ok(Array.isArray(term.linkingText), `${term.href} linkingText is not an array`);
        assert.ok(term.type, `${term.href} is missing type`);
        assert.ok(Array.isArray(term.for), `${term.href} for is not an array`);
        assert.ok(
          term.access === 'public' || term.access === 'private',
          `${term.href} has unexpected access ${term.access}`
        );
        const dfn = dfns.dfns.find(t => t.href === term.href);
        assert.ok(dfn, `${spec.backrefs} entry ${term.href} does not exist in the dfns extract`);
        assert.equal(term.id, dfn.id, `${spec.backrefs} entry ${term.href} should have the same id as the dfn`);
        assert.deepEqual(term.linkingText, dfn.linkingText, `${spec.backrefs} entry ${term.href} should have the same linking texts as the dfn`);
        assert.equal(term.type, dfn.type, `${spec.backrefs} entry ${term.href} should have the same type as the dfn`);
        assert.deepEqual(term.for, dfn.for, `${spec.backrefs} entry ${term.href} should have the same scope as the dfn`);
        assert.equal(term.access, dfn.access, `${spec.backrefs} entry ${term.href} should have the same access level as the dfn`);
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
