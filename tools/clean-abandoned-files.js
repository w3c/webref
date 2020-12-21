const fs = require("fs");

const ed = require("../ed/index.json");
const tr = require("../tr/index.json");

const subdirs = ["dfns", "css", "headings", "idl", "idlparsed", "links", "refs"];


const removeExtension = f => {
  const components = f.split(".");
  return components.slice(0, components.length - 1).join(".");
}

function checkDir(path, index) {
  const dir = fs.readdirSync(path);
  for (let filename of dir) {
    const subdir = path.split("/")[1];
    if (!index.results.find(spec => spec[subdir] === subdir + "/" + filename)) {
      fs.unlinkSync(path + "/" + filename);
    }
  }
}

for (let dir of subdirs) {
  checkDir("ed/" + dir, ed);
  checkDir("tr/" + dir, tr);
}
