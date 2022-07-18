const fs = require("fs");

const ed = require("../ed/index.json");
const tr = require("../tr/index.json");

const removeExtension = f => {
  const components = f.split(".");
  return components.slice(0, components.length - 1).join(".");
}

function checkDir(path, index) {
  if (!fs.existsSync(path)) {
    return;
  }
  const dir = fs.readdirSync(path);
  for (let filename of dir) {
    const subdir = path.split("/")[1];
    if (!index.results.find(spec => spec[subdir] === subdir + "/" + filename)) {
      fs.unlinkSync(path + "/" + filename);
    }
  }
}

const folders = fs.readdirSync("ed").filter(folder =>
    !folder.endsWith('patches') && !folder.includes('.'));
for (let dir of folders) {
  checkDir("ed/" + dir, ed);
  checkDir("tr/" + dir, tr);
}
