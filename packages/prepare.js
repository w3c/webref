const fs = require('fs').promises;
const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'ed/idl');
const patchDir = path.join(rootDir, 'ed/idlpatches');
const dstDir = path.join(rootDir, 'packages/idl');

async function main() {
  // rm dstDir/*.idl
  const dstFiles = await fs.readdir(dstDir);
  for (const file of dstFiles) {
    if (file.endsWith('.idl')) {
      await fs.unlink(path.join(dstDir, file));
    }
  }

  // cp srcDir/*.idl dstDir/
  const srcFiles = await fs.readdir(srcDir);
  for (const file of srcFiles) {
    if (file.endsWith('.idl')) {
      await fs.copyFile(path.join(srcDir, file), path.join(dstDir, file));
    }
  }

  // The patches are against ed/idl/ and can be applied there using `git am`,
  // but apply them in packages/idl/ instead using `git apply`.
  const patchFiles = await fs.readdir(patchDir);
  for (const file of patchFiles) {
    if (file.endsWith('.patch')) {
      const patch = path.join(patchDir, file);
      console.log(`Applying ${file}`);
      await execFile('git', ['apply', '--directory=packages/idl', '-p3', patch], {
        cwd: rootDir
      });
    }
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1)
});
