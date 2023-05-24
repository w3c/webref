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

const assert = require('assert').strict;
const path = require('path');
const idl = require('@webref/idl');
const { studyWebIdl } = require('strudy');

const views = [
  {
    name: 'curated',
    folder: path.join(__dirname, '..', '..', 'curated', 'idl')
  },
  {
    name: '@webref/idl package',
    folder: path.join(__dirname, '..', '..', 'packages', 'idl')
  }
];

// These anomalies are not currently enforced
const ignorableAnomalies = [
  'singleEnumValue',
  'wrongCaseEnumValue'
];


function writeAnomalies(report) {
  function writeAnomaly(anomaly) {
    return `- ${anomaly.name} in ${anomaly.specs.map(s => s.shortname).join(', ')}: ${anomaly.message}`;
  }

  return 'Web IDL anomalies found:\n' +
    report.map(writeAnomaly).join('\n');
}

views.forEach(({ name, folder }) => {
  describe(`The ${name} view of Web IDL extracts`, () => {
    it('passes Strudy\'s scrutiny', async function () {
      const all = await idl.listAll({ folder });
      const crawl = [];
      for (const [shortname, value] of Object.entries(all)) {
        crawl.push({ shortname, idl: await value.text() });
      }
      const report = studyWebIdl(crawl, [])
        .filter(anomaly => !ignorableAnomalies.includes(anomaly.name))
        .filter(anomaly => {
          // Filter out a couple of known anomalies triggered by specs extending
          // base interfaces and adding new features that require changes to the
          // base interfaces themselves

          // Known anomaly, tracked in:
          // https://github.com/w3c/media-source/issues/280
          if (anomaly.name === 'unexpectedEventHandler' &&
              anomaly.specs[0].shortname === 'window-management' &&
              anomaly.message === 'The interface "Screen" defines an event handler "onchange" but does not inherit from EventTarget') {
            return false;
          }

          // Known anomalies, noted in:
          // https://w3c.github.io/window-management/#api-extensions-to-screen
          if (anomaly.name === 'incompatiblePartialIdlExposure' &&
              anomaly.specs[0].shortname === 'media-source' &&
              anomaly.message.startsWith('The [Exposed] extended attribute of the partial interface')) {
            return false;
          }

          return true;
        });
      assert.equal(report.length, 0, writeAnomalies(report));
    });
  });
});