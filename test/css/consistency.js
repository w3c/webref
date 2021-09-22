const assert = require('assert').strict;

const css = require('@webref/css');

describe('The @webidl/css module', () => {
  before(async () => {
    const all = await css.listAll();

    const properties = [];
    const descriptors = [];
    const valuespaces = [];

    for (const [shortname, data] of Object.entries(all)) {
      for (const [name, desc] of Object.entries(data.properties)) {
        desc.spec = shortname;
        properties.push(desc);
      }
      for (const [name, desc] of Object.entries(data.descriptors)) {
        desc.forEach(d => d.spec = shortname);
        descriptors.push(...desc);
      }
      for (const [name, desc] of Object.entries(data.valuespaces)) {
        desc.spec = shortname;
        valuespaces.push(desc);
      }
    }

    describe('The @webref/css module', () => {
      const propertyNames = {};
      for (const prop of properties) {
        propertyNames[prop.name] = propertyNames[prop.name] ?? [];
        propertyNames[prop.name].push(prop);
      }

      for (const [name, dfns] of Object.entries(propertyNames)) {
        it(`(almost) has a base dfn for the "${name}" property`, () => {
          const consider = dfns.filter(p => !p.newValues);
          assert(consider.length >= 1, `No base definition found`);
        });
        it(`(almost) has a unique dfn for the "${name}" property`, () => {
          // - Many CSS 2.x properties are redefined in dedicated CSS modules.
          // - Delta specs are often not pure delta specs
          // - css-align > css-flexbox, see:
          //     https://drafts.csswg.org/css-align/#placement
          // - css-position > css-logical, see:
          //     https://github.com/w3c/csswg-drafts/issues/6434
          const consider = dfns
            .filter(p => !p.newValues)
            .filter(p => p.spec !== 'CSS')
            .filter(p => !p.spec.match(/-\d+$/))
            .filter(p => p.spec !== 'css-flexbox' || !dfns.find(d => d.spec === 'css-align'))
            .filter(p => p.spec !== 'css-logical' || !dfns.find(d => d.spec === 'css-position'));
          assert(consider.length <= 1, `Multiple definitions found in ${dfns.map(p => p.spec).join(',')}`);
        });
      }
    });
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('can initialize data', () => {});
});
