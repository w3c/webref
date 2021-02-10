const fs = require("fs");

const ed = require("../ed/index.json");
const tr = require("../tr/index.json");

const subdirs = ["dfns", "css", "headings", "idl", "idlparsed", "links", "refs"];
const idlnamesSubdirs = ["idlnames", "idlnamesparsed"];


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

function checkIdlNames(path, index) {
  // Build the list of IDL names from idlparsed extracts
  const idlFiles = new Set(index.results.map(spec => spec.idlparsed).filter(s => !!s));
  let idlNames = new Set();
  for (const idlFile of idlFiles) {
    const idlparsed = require("../" + path + "/" + idlFile);
    if (!idlparsed || !idlparsed.idlparsed) {
      continue;
    }
    if (idlparsed.idlparsed.idlNames) {
      for (const name of Object.keys(idlparsed.idlparsed.idlNames)) {
        idlNames.add(name);
      }
    }
    if (idlparsed.idlparsed.idlExtendedNames) {
      for (const name of Object.keys(idlparsed.idlparsed.idlExtendedNames)) {
        idlNames.add(name);
      }
    }
  }

  // Parse subfolders that contain files named after IDL names
  for (const subdir of idlnamesSubdirs) {
    if (!fs.existsSync(path + "/" + subdir)) {
      continue;
    }
    const filenames = fs.readdirSync(path + "/" + subdir);
    for (const filename of filenames) {
      const name = filename.match(/(.+)\.[^\.]+$/)[1];
      if (!idlNames.has(name)) {
        fs.unlinkSync(path + "/" + subdir + "/" + filename);
      }
    }
  }
}

for (let dir of subdirs) {
  checkDir("ed/" + dir, ed);
  checkDir("tr/" + dir, tr);
}
checkIdlNames("ed", ed);
checkIdlNames("tr", tr);
