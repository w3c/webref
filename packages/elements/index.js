import { readdir, readFile } from "node:fs/promises";
import { readdirSync, readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

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

export async function listAll({ folder = __dirname } = {}) {
  const all = {};
  for (const file of sortDataFiles(await readdir(folder))) {
    all[basename(file, ".json")] = await readDefinitionFile(folder, file);
  }
  return all;
}

export function listAllSync({ folder = __dirname } = {}) {
  const all = {};
  for (const file of sortDataFiles(readdirSync(folder))) {
    all[basename(file, ".json")] = readDefinitionFileSync(folder, file);
  }
  return all;
}

export default { listAll, listAllSync };
