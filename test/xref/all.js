/**
 * Test individual elements extracts.
 * 
 * The tests run against the `@webref/xref` package view of the data.
 */

import { describe, it, before } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setup, lookup } from '@webref/xref';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const rootFolder = path.join(scriptPath, '..', '..');

describe('The @webref/xref code', function () {
  before(function () {
    setup(rootFolder);
  });

  it('can lookup a dfn', function () {
    const url = 'https://html.spec.whatwg.org/multipage/webappapis.html#event-loop';
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.href, url);
    assert.strictEqual(entry.spec, 'html');
  });

  it('can lookup a heading', function () {
    const url = 'https://compat.spec.whatwg.org/#css-at-rules';
    const res = lookup(url);
    assert(res?.length, 'No heading found');
    assert.strictEqual(res[0].source, 'headings');
    const entry = res[0].entry;
    assert.strictEqual(entry.href, url);
    assert.strictEqual(entry.spec, 'compat');
  });

  it('can lookup a dfn through a dev link', function () {
    const url = 'https://html.spec.whatwg.org/multipage/introduction.html#typographic-conventions%3Ax-that';
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.links?.[0]?.href, url);
    assert.strictEqual(entry.spec, 'html');
  });

  it('can lookup a heading using an alternate ID', function () {
    const fragment = 'contents';
    const url = `https://drafts.csswg.org/css-ui-4/#${fragment}`;
    const res = lookup(url);
    assert(res?.length, 'No heading found');
    assert.strictEqual(res[0].source, 'headings');
    const entry = res[0].entry;
    assert.strictEqual(entry.alternateIds?.[0], fragment);
    assert.strictEqual(entry.spec, 'css-ui-4');
  });

  it('can lookup a dfn with a release URL', function () {
    const url = 'https://www.w3.org/TR/webcodecs/#videodecoder';
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.href, url);
    assert.strictEqual(entry.spec, 'webcodecs');
  });

  it('returns an empty list for an invalid fragment', function () {
    const url = 'https://compat.spec.whatwg.org/#idontexist';
    const res = lookup(url);
    assert.strictEqual(res?.length, 0);
  });
});
