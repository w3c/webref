/**
 * Common functions for use in tools
 */

const fs = require('fs').promises;
const path = require('path');

async function createFolderIfNeeded(folder) {
  try {
    await fs.mkdir(folder);
  }
  catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
};


/**
 * Load a JSON file as JS object.
 *
 * @function
 * @param {String} filename The path to the file to require
 * @return {Object} The result of loading and parsing the file relative to the
 *   current working directory.
 */
async function loadJSON(filename) {
  try {
    const json = await fs.readFile(filename, 'utf8');
    return JSON.parse(json);
  }
  catch (err) {
    return null;
  }
};


/**
 * Copy the contents of the given folder to the target folder recursively.
 *
 * @function
 * @param {String} source The folder to copy
 * @param {String} target The folder that should contain the copy. The folder
 *    gets created if it does not exist.
 * @param {Object} options Copy options. Set "excludeRoot" to exclude the root
 *    folder from the copy and start the copy with its contents
 * @return {Promise} The promise to have copied the folder's contents.
 */
async function copyFolder(source, target, { excludeRoot = false } = {}) {
  // Check if folder needs to be created or integrated
  const targetFolder = excludeRoot ?
    target :
    path.join(target, path.basename(source));
  await createFolderIfNeeded(targetFolder);

  const folderContent = await fs.readdir(source);
  return Promise.all(folderContent.map(async name => {
    const fileOrFolder = path.join(source, name);
    const stat = await fs.lstat(fileOrFolder);
    if (stat.isDirectory()) {
      return copyFolder(fileOrFolder, targetFolder);
    }
    else {
      return fs.copyFile(fileOrFolder, path.join(targetFolder, name));
    }
  }));
};


module.exports = {
  createFolderIfNeeded,
  loadJSON,
  copyFolder
};