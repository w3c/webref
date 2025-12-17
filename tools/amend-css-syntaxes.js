/**
 * Amend extracted CSS data to add/update syntaxes that could not be extracted
 * from the specifications, typically because the syntax is defined in non
 * machine-readable prose. To run the script:
 *
 * node tools/amend-css-syntaxes.js [folder]
 * 
 * ... where:
 * - [folder] is the name of the folder that contains the data to parse and
 * update (default is "curated")
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadJSON } from './utils.js';
import { expandCrawlResult, isLatestLevelThatPasses } from 'reffy';
import patches from '../ed/csspatches/syntax-patches.js';

/**
 * Trim a patch syntax
 */
function trimSyntax(syntax) {
  return syntax.trim().replace(/\s+\|\s+/g, ' | ');
}

/**
 * Recursive function to look for a CSS construct within an extract.
 *
 * Levels are separated with '/'. When looking at a spec, pass `spec.css` as
 * second parameter. For example:
 *   const construct = findCssConstruct('@page/page/<page-size>', spec.css);
 */
function findCssConstruct(key, currentRoot) {
  if (!key) {
    return currentRoot;
  }
  const keys = key.split('/');
  const types = ['properties', 'atrules', 'selectors', 'values', 'descriptors'];
  for (const key of keys) {
    for (const type of types) {
      for (const entry of (currentRoot[type] ?? [])) {
        if (entry.name === keys[0]) {
          return findCssConstruct(keys.slice(1).join('/'), entry);
        }
      }
    }
  }
  return null;
}

/**
 * Apply patches that apply to the given spec.
 *
 * The function returns a list of errors, an empty array if all went fine.
 */
function applyCssSyntaxPatches(spec) {
  let errors = [];
  console.log(`- applying CSS syntax patches for ${spec.shortname}`);
  for (let [key, patch] of Object.entries(patches[spec.shortname])) {
    // Expand the patch as needed, and check it against current patching
    // constraints (note the logic could be extended over time to support more
    // scenarios if that proves needed).
    if (typeof patch === 'string') {
      patch = { value: patch };
    }
    if (!patch.value && !patch.useValues && !patch.newValues && !patch.sameAs) {
      errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} does not define any syntax`);
      continue;
    }
    if (patch.sameAs && (patch.value || patch.useValues || patch.newValues)) {
      errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} is invalid, cannot have "sameAs" and another syntax at the same time`);
      continue;
    }
    if (patch.value && patch.useValues) {
      errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} is invalid, cannot have "value" and "useValues" at the same time`);
      continue;
    }
    if (patch.value && patch.newValues) {
      errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} is invalid, cannot have "value" and "newValues" at the same time`);
      continue;
    }
    if (patch.newValues && !patch.useValues) {
      errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} is invalid, cannot have "newValues" without "useValues"`);
      continue;
    }

    // Locate the underlying CSS construct in the spec extract
    const construct = findCssConstruct(key, spec.css);
    if (!construct) {
      errors.push(`Could not find a CSS construct with name ${key} in ${spec.shortname} for syntax patching`);
      continue;
    }

    // Patching mechanism is for adding new syntaxes for now.
    // (It could be extended later on to override existing syntaxes)
    if (construct.value || construct.newValues) {
      errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} cannot be applied: construct already has a syntax`);
      continue;
    }
    
    if (patch.useValues) {
      if (!construct.values || construct.values.length === 0) {
        errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} cannot be applied: "useValues" is set but no values are associated with the construct`);
        continue;
      }
      construct.value = construct.values.map(v => v.value).join(' | ');
    }
    else if (patch.sameAs) {
      const sameConstruct = findCssConstruct(patch.sameAs, spec.css);
      if (!sameConstruct) {
        errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} cannot be applied: could not find "sameAs" target ${patch.sameAs}`);
        continue;
      }
      if (!sameConstruct.value) {
        errors.push(`The CSS syntax patch for ${key} in ${spec.shortname} cannot be applied: "sameAs" target ${patch.sameAs} has no syntax`);
        continue;
      }
    }
    else {
      construct.value = trimSyntax(patch.value);
    }
    if (patch.newValues) {
      construct.value += ' | ' + trimSyntax(patch.newValues);
    }
  }
  if (!errors.length) {
    spec.needsSaving = true;
  }
  return errors;
}

/**
 * Save the updated CSS extract of the spec
 *
 * Note: CSS extracts are named after the series shortname by default.
 */
async function saveCss(spec, folder, list) {
  let filename = spec.series.shortname;
  if ((spec.seriesComposition === 'delta') ||
      !isLatestLevelThatPasses(spec, list, spec => spec.css)) {
    filename = spec.shortname;
  }
  const pathname = path.join(folder, 'css', filename + '.json');
   const css = Object.assign({
      spec: {
        title: spec.title,
        url: spec.crawled
      }
    }, spec.css);
  const json = JSON.stringify(css, null, 2) + '\n';
  await fs.writeFile(pathname, json);
};


/**
 * Apply CSS syntax patch to the crawl results in the given folder.
 *
 * The function expects to find an `index.json` file in that folder that links
 * to individual CSS extracts.
 *
 * The function throws with a list of errors when patches could not all be
 * applied.
 */
async function amendCssSyntaxes(folder) {
  const rawIndex = await loadJSON(path.join(folder, 'index.json'));
  const index = JSON.parse(JSON.stringify(rawIndex));
  await expandCrawlResult(index, folder, ['css']);

  let errors = [];
  for (const specShortname of Object.keys(patches)) {
    const spec = index.results.find(s => s.shortname === specShortname);
    if (!spec) {
      errors.push(`Could not find spec with shortname ${specShortname} for CSS syntax patching`);
      continue;
    }
    if (!spec.css) {
      errors.push(`Could not find any CSS in spec with shortname ${specShortname} for CSS syntax patching`);
      continue;
    }
    errors = errors.concat(applyCssSyntaxPatches(spec));
  }

  for (const spec of index.results) {
    if (spec.needsSaving) {
      await saveCss(spec, folder, index.results);
      delete spec.needsSaving;
    }
  }

  if (errors.length) {
    throw new Error("\n- " + errors.join("\n- "));
  }
}


/******************************************************************************
 * Export methods for use as module
 *****************************************************************************/
export { amendCssSyntaxes };

/******************************************************************************
 * Code run if the code is run as a stand-alone module
 *****************************************************************************/
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const folder = process.argv[2] ?? 'curated';

  amendCssSyntaxes(folder).catch(e => {
    console.error(e);
    process.exit(1);
  });
}
