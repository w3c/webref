import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function listAll({ folder = __dirname } = {}) {
  const json = await readFile(join(folder, "events.json"), "utf8").catch(() =>
    "[]"
  );
  return JSON.parse(json);
}

export function listAllSync({ folder = __dirname } = {}) {
  const json = readFileSync(join(folder, "events.json"), "utf8", {
    flag: "a+",
  });
  return JSON.parse(json);
}

export default { listAll, listAllSync };
