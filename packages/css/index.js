const fs = require('fs').promises;
const path = require('path');

async function listAll({folder = __dirname} = {}) {
  const json = await fs.readFile(path.join(folder, 'css.json'), 'utf8');
  return JSON.parse(json);
}

async function index({folder = __dirname} = {}) {
  const nonIndexed = await listAll(folder);
  const indexed = {};
  for (const [category, features] of Object.entries(nonIndexed)) {
    indexed[category] = {};
    for (const feature of features) {
      // A handful of features have different definitions for different scopes.
      // When that happens, the feature identifier needs to be disambiguated.
      let id = feature.name;
      let dupl = null;
      if (feature.for) {
        dupl = features.find(f => f !== feature && f.name === feature.name);
      }
      if (dupl) {
        // Note: scopes of different definitions are necessarily disjoint
        id += ' for ' + feature.for[0];
      }
      indexed[category][id] = feature;

      // For at-rules, convert descriptors array into an indexed object too
      if (feature.descriptors) {
        const descriptors = feature.descriptors;
        feature.descriptors = {};
        for (const descriptor of descriptors) {
          feature.descriptors[descriptor.name] = descriptor;
        }
      }
    }
  }
  return indexed;
}

module.exports = {listAll, index};
