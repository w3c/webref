const fs = require('fs').promises;
const path = require('path');

async function listAll({folder = __dirname} = {}) {
  const all = {};
  const files = await fs.readdir(folder);
  for (const f of files) {
    if (f.endsWith('.json') && f !== 'package.json') {
      const text = await fs.readFile(path.join(folder, f), 'utf8');
      all[path.basename(f, '.json')] = JSON.parse(text);
    }
  }
  return all;
}

module.exports = {listAll};
