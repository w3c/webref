const fs = require('fs').promises;
const path = require('path');

const WebIDL2 = require('webidl2');

class IDLFile {
  constructor(dir, file) {
    this.filename = file;
    this.shortname = path.basename(file, '.idl');
    this.path = path.join(dir, file);
  }

  async text() {
    const text = await fs.readFile(this.path, 'utf8');
    return text;
  }

  async parse() {
    const text = await this.text();
    return WebIDL2.parse(text);
  }
}

async function listAll() {
  const all = {};
  const files = await fs.readdir(__dirname);
  for (const f of files) {
    if (f.endsWith('.idl')) {
      const idlFile = new IDLFile(__dirname, f);
      all[idlFile.shortname] = idlFile;
    }
  }
  return all;
}

async function parseAll() {
  const all = await listAll();
  for (const [key, value] of Object.entries(all)) {
    all[key] = await value.parse();
  }
  return all;
}

module.exports = {listAll, parseAll};
