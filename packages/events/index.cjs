const { promises: fs, readFileSync } = require("node:fs");
const path = require("node:path");

async function listAll({ folder = __dirname } = {}) {
  const json = await fs.readFile(path.join(folder, "events.json"), "utf8");
  return JSON.parse(json);
}

function listAllSync({ folder = __dirname } = {}) {
  const json = readFileSync(path.join(folder, "events.json"), "utf8", {
    flag: "a+",
  });
  return JSON.parse(json);
}

module.exports = { listAll, listAllSync };
