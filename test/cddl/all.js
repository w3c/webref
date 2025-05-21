/**
 * Test individual CDDL extracts.
 * 
 * The tests run against the curated view of the extracts.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadJSON } from '../../tools/utils.js';
import { expandCrawlResult } from 'reffy';
import { study } from 'strudy';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated');

function writeAnomalies(report) {
  return 'CDDL anomalies found:\n' +
    report.map(anomaly => anomaly.content).join('\n');
}

describe('The curated view of CDDL extracts', {timeout: 30000}, function () {
  // Long timeout as first run may download micropip and cddlparser packages

  it('passes Strudy\'s scrutiny', async function () {
    const crawlFile = path.join(curatedFolder, 'index.json');
    let crawl = await loadJSON(crawlFile);
    crawl = await expandCrawlResult(crawl, curatedFolder);

    const studyOptions = { what: ['cddl'], structure: 'flat' };
    const report = await study(crawl.results, studyOptions);
    const results = report.results;
    assert.equal(results.length, 0, writeAnomalies(results));
  });
});
