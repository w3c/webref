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

describe('The @webref/xref lookup() function', function () {
  before(function () {
    setup(rootFolder);
  });

  it('can find a dfn', function () {
    const url = 'https://html.spec.whatwg.org/multipage/webappapis.html#event-loop';
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.href, url);
    assert.strictEqual(entry.spec, 'html');
  });

  it('can find a heading', function () {
    const url = 'https://compat.spec.whatwg.org/#css-at-rules';
    const res = lookup(url);
    assert(res?.length, 'No heading found');
    assert.strictEqual(res[0].source, 'headings');
    const entry = res[0].entry;
    assert.strictEqual(entry.href, url);
    assert.strictEqual(entry.spec, 'compat');
  });

  it('can find a dfn through a dev link', function () {
    const url = 'https://html.spec.whatwg.org/multipage/introduction.html#typographic-conventions%3Ax-that';
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.links?.[0]?.href, url);
    assert.strictEqual(entry.spec, 'html');
  });

  it('can find a dfn when the hash is not percent-encoded', function () {
    const hash = 'typographic-conventions:x-that';
    const baseUrl = 'https://html.spec.whatwg.org/multipage/introduction.html#';
    const url = baseUrl + hash;
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.links?.[0]?.href, baseUrl + encodeURIComponent(hash));
    assert.strictEqual(entry.spec, 'html');
  });

  it('can find a heading using an alternate ID', function () {
    const fragment = 'contents';
    const url = `https://drafts.csswg.org/css-ui-4/#${fragment}`;
    const res = lookup(url);
    assert(res?.length, 'No heading found');
    assert.strictEqual(res[0].source, 'headings');
    const entry = res[0].entry;
    assert.strictEqual(entry.alternateIds?.[0], fragment);
    assert.strictEqual(entry.spec, 'css-ui-4');
  });

  it('can find a dfn with a release URL', function () {
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

  it('throws when no URL is given', function () {
    assert.throws(lookup, {
      name: 'Error',
      message: 'The `lookup()` function was called without argument.'
    });
  });

  it('throws when the URL is invalid', function () {
    assert.throws(function () {
      lookup('invalid');
    }, {
      name: 'Error',
      message: 'The `lookup()` function was called with an invalid URL.'
    });
  });

  it('considers that a hash with a `%` not followed by digits is decoded', function () {
    const hash = 'sec-%foriniteratorprototype%-object';
    const baseUrl = 'https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#';
    const url = baseUrl + hash;
    const res = lookup(url);
    assert(res?.length, 'No dfn found');
    assert.strictEqual(res[0].source, 'dfns');
    const entry = res[0].entry;
    assert.strictEqual(entry.href, baseUrl + encodeURIComponent(hash));
  });
});
