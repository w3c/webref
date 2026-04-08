const { readdirSync, readFileSync, promises: fs } = require("node:fs");
const path = require("node:path");
const WebIDL2 = require("webidl2");

class IDLFile {
  constructor(dir, file) {
    this.filename = file;
    this.shortname = path.basename(file, ".idl");
    this.path = path.join(dir, file);
  }

  async text() {
    return fs.readFile(this.path, "utf8");
  }

  textSync() {
    return readFileSync(this.path, "utf8");
  }

  async parse() {
    return WebIDL2.parse(await this.text());
  }

  parseSync() {
    return WebIDL2.parse(this.textSync());
  }
}

function sortIdlFiles(files) {
  return files.filter((file) => file.endsWith(".idl")).sort();
}

async function listAll({ folder = __dirname } = {}) {
  const all = {};
  for (const file of sortIdlFiles(await fs.readdir(folder))) {
    const idlFile = new IDLFile(folder, file);
    all[idlFile.shortname] = idlFile;
  }
  return all;
}

function listAllSync({ folder = __dirname } = {}) {
  const all = {};
  for (const file of sortIdlFiles(readdirSync(folder))) {
    const idlFile = new IDLFile(folder, file);
    all[idlFile.shortname] = idlFile;
  }
  return all;
}

async function parseAll(options) {
  const all = await listAll(options);
  for (const [key, value] of Object.entries(all)) {
    all[key] = await value.parse();
  }
  return all;
}

function parseAllSync(options) {
  const all = listAllSync(options);
  for (const [key, value] of Object.entries(all)) {
    all[key] = value.parseSync();
  }
  return all;
}

module.exports = { listAll, listAllSync, parseAll, parseAllSync };
