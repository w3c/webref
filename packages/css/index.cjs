const { promises: fs, readFileSync } = require("node:fs");
const path = require("node:path");

function createEmptyCssData() {
  return {
    atrules: [],
    functions: [],
    properties: [],
    selectors: [],
    types: [],
  };
}

function createIndexedCssData() {
  return {
    atrules: {},
    functions: {},
    properties: {},
    selectors: {},
    types: {},
  };
}

function createFeatureId(feature, features) {
  let id = feature.name;
  if (feature.for) {
    const dupl = features.find((f) => f !== feature && f.name === feature.name);
    if (dupl) {
      id += ` for ${feature.for[0]}`;
    }
  }
  return id;
}

function createDescriptorIndex(descriptors) {
  const indexed = {};
  for (const descriptor of descriptors) {
    indexed[descriptor.name] = descriptor;
  }
  return indexed;
}

function createIndex(nonIndexed) {
  const indexed = createIndexedCssData();
  for (const category of Object.keys(indexed)) {
    const features = nonIndexed[category] ?? [];
    for (const feature of features) {
      const id = createFeatureId(feature, features);
      let descriptors = feature.descriptors;
      descriptors &&= createDescriptorIndex(descriptors);
      indexed[category][id] = { ...feature, descriptors };
    }
  }
  return indexed;
}

async function listAll({ folder = __dirname } = {}) {
  const json = await fs.readFile(path.join(folder, "css.json"), "utf8")
    .catch(() => JSON.stringify(createEmptyCssData()));
  return JSON.parse(json);
}

function listAllSync({ folder = __dirname } = {}) {
  try {
    const json = readFileSync(path.join(folder, "css.json"), "utf8", {
      flag: "a+",
    });
    return JSON.parse(json || JSON.stringify(createEmptyCssData()));
  } catch {
    return createEmptyCssData();
  }
}

async function index(options) {
  return createIndex(await listAll(options));
}

function indexSync(options) {
  return createIndex(listAllSync(options));
}

module.exports = { listAll, listAllSync, index, indexSync };
