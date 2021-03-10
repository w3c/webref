const fs = require('fs').promises;
const path = require('path');

class CSSFile {
  constructor(dir, file) {
    this.filename = file;
    this.shortname = path.basename(file, '.json');
    this.path = path.join(dir, file);
  }

  async json() {
    const text = await fs.readFile(this.path, 'utf8');
    return JSON.parse(text);
  }
}

async function listAll() {
  const all = {};
  const files = await fs.readdir(__dirname);
  for (const f of files) {
    if (f.endsWith('.json') && f !== 'package.json') {
      const cssFile = new CSSFile(__dirname, f);
      all[cssFile.shortname] = cssFile;
    }
  }
  return all;
}

async function parseAll() {
  const all = await listAll();
  for (const [key, value] of Object.entries(all)) {
    all[key] = await value.json();
  }
  return all;
}

module.exports = {listAll, parseAll};
