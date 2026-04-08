const {
  readdirSync,
  readFileSync,
  promises: { readdir, readFile },
} = require("node:fs");
const { join, basename } = require("node:path");

function isDataFile(file) {
  return file.endsWith(".json") && file !== "package.json";
}

function sortDataFiles(files) {
  return files.filter(isDataFile).sort();
}

async function readDefinitionFile(folder, file) {
  const text = await readFile(join(folder, file), "utf8");
  return JSON.parse(text);
}

function readDefinitionFileSync(folder, file) {
  const text = readFileSync(join(folder, file), "utf8");
  return JSON.parse(text);
}

async function listAll({ folder = __dirname } = {}) {
  const all = {};
  for (const file of sortDataFiles(await readdir(folder))) {
    all[basename(file, ".json")] = await readDefinitionFile(folder, file);
  }
  return all;
}

function listAllSync({ folder = __dirname } = {}) {
  const all = {};
  for (const file of sortDataFiles(readdirSync(folder))) {
    all[basename(file, ".json")] = readDefinitionFileSync(folder, file);
  }
  return all;
}

module.exports = { listAll, listAllSync };
