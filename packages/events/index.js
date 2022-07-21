const fs = require('fs').promises;
const path = require('path');
let events;

async function listAll({folder = __dirname} = {}) {
  if (!events) {
    const json = await fs.readFile(path.join(folder, 'events.json'), 'utf8');
    events = JSON.parse(json);
  }
  return events;
}

module.exports = {listAll};
