const fs = require('fs').promises;
const path = require('path');

async function listAll() {
  const all = {};
  const files = await fs.readdir(__dirname);
  for (const f of files) {
    if (f.endsWith('.json') && f !== 'package.json') {
      const text = await fs.readFile(path.join(__dirname, f), 'utf8');
      all[path.basename(f, '.json')] = JSON.parse(text);
    }
  }
  return all;
}

module.exports = {listAll};
