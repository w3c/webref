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


/**
 * Tree hierarchies on which events may bubble
 *
 * First interface is the tree root, further interfaces are deeper levels in
 * the tree.
 */
const trees = {
  // DOM tree:
  // https://dom.spec.whatwg.org/#node-trees
  'dom': ['Window', 'Document', 'Element', 'Node'],

  // IndexedDB tree (defined through "get the parent" algorithms)
  // https://www.w3.org/TR/IndexedDB/#ref-for-get-the-parent%E2%91%A0
  // https://www.w3.org/TR/IndexedDB/#ref-for-get-the-parent%E2%91%A1
  'IndexedDB': ['IDBDatabase', 'IDBTransaction', 'IDBRequest'],

  // Web Bluetooth tree
  // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-tree-bluetooth-tree
  'web-bluetooth': [
    'Bluetooth', 'BluetoothDevice', 'BluetoothRemoteGATTService',
    'BluetoothRemoteGATTCharacteristic', 'BluetoothRemoteGATTDescriptor'],

  // Serial tree
  // https://wicg.github.io/serial/#serialport-interface
  'serial': ['Serial', 'SerialPort']
};


/**
 * Return information about the tree hierarchy the IDL interface is linked to.
 *
 * @function
 * @param {String} iface Name of the IDL interface to link to a tree
 * @param {Array(Object)} interfaces A list of all known IDL interfaces with
 *   inheritance information in an "inheritance" property.
 * @return {Object} An object with a "tree" property set to the shortname of the
 *   spec that defines the tree hierarchy, an "interface" property set to the
 *   interface name of the closest interface in the inheritance chain of the
 *   given interface that belongs to the tree, and a "depth" property that gives
 *   the depth of that interface in the tree hierarchy (where 0 is the tree
 *   root). The object is null if the interface cannot be associated with a
 *   tree.
 */
function getTreeInfo(iface, interfaces) {
  while (iface) {
    for (const [tree, nodes] of Object.entries(trees)) {
      if (nodes.includes(iface)) {
        return {
          tree,
          interface: iface,
          depth: nodes.findIndex(i => i === iface)
        };
      }
    }
    iface = interfaces.find(i => i.name === iface)?.inheritance;
  }
  return null;
}


module.exports = {
  createFolderIfNeeded,
  loadJSON,
  copyFolder,
  getTreeInfo
};