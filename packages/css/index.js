const fs = require('fs').promises;
const path = require('path');

async function listAll({folder = __dirname} = {}) {
  const json = await fs.readFile(path.join(folder, 'css.json'), 'utf8');
  return JSON.parse(json);
}

module.exports = {listAll};
