/**
 * Test the consistency of Web IDL extracts.
 * 
 * These tests go beyond mere Web IDL validation to make sure that the combined
 * Web IDL that the extracts define does not reference unknown types, does not
 * use unknown extended attributes...
 * 
 * The tests run against the curated and package views of the data. An extract
 * that passes a test in the curated view may fail the same test in the package
 * view because of some missing IDL definition in that view.
 */

import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import idl from '@webref/idl';
import { study } from 'strudy';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const views = [
  {
    name: 'curated',
    folder: path.join(scriptPath, '..', '..', 'curated', 'idl')
  },
  {
    name: '@webref/idl package',
    folder: path.join(scriptPath, '..', '..', 'packages', 'idl')
  }
];

// These anomalies are not currently enforced
const ignorableAnomalies = [
  'incompatiblePartialIdlExposure',
  'singleEnumValue',
  'unexpectedEventHandler',
  'wrongCaseEnumValue'
];


function writeAnomalies(report) {
  return 'Web IDL anomalies found:\n' +
    report.map(anomaly => anomaly.content).join('\n');
}

views.forEach(({ name, folder }) => {
  describe(`The ${name} view of Web IDL extracts`, () => {
    it('passes Strudy\'s scrutiny', async function () {
      const all = await idl.listAll({ folder });
      const crawl = [];
      for (const [shortname, value] of Object.entries(all)) {
        crawl.push({ shortname, title: shortname, crawled: '', idl: await value.text() });
      }
      const studyOptions = { what: ['webidl'], structure: 'flat' };
      const report = await study(crawl, studyOptions);
      const results = report.results
        .filter(anomaly => !ignorableAnomalies.includes(anomaly.name));
      assert.equal(results.length, 0, writeAnomalies(results));
    });
  });
});