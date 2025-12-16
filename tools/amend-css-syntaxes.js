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

/******************************************************************************
 * List of CSS syntax patches to apply.
 *
 * The list is an indexed object where keys are the shortnames of the
 * specifications to patch and where values are themselves an indexed object
 * where:
 * - keys are the name of the CSS constructs to patch, for example:
 *     `<system-color>`
 * - values define the patch to apply
 *
 * If the CSS construct to target is nested (for example, the descriptor of an
 * at-rule), start with the name of the root constructor, add a `/`, and then
 * the name of the actual construct. For example: `@page/page/<page-size>` to
 * target the `<page-size>` type of the `page` descriptor of the `@page`
 * at-rule.
 *
 * The patch value can either be:
 * - A string, which gets interpreted as the CSS syntax to set. For example:
 *     '<custom-ident>'
 * - An object with one or more of the following keys:
 *   - `useValues`: a boolean flag. When set, the code builds the syntax of the
 *     CSS construct from the list of CSS values that are defined for it in the
 *     spec (and that could be extracted).
 *   - `newValues`: a string that contains some additional syntax to add on top
 *     of existing values. The `useValues` flag must also be set (there is no
 *     way to set the syntax of an extended definition for now)
 *   - `sameAs`: a reference to another CSS construct in the same spec that
 *     provides the syntax to use. Cannot be used with any of the other keys.
 *
 * Trailing spaces in syntaxes are trimmed, and so are extra spaces. That's
 * to ease patch readability. For example: `
 *    <basic-shape-rect> |
 *    <circle()>  |  <ellipse()>
 *  `
 * ... becomes '<basic-shape-rect> | <circle()> | <ellipse()>'
 *
 * It is good practice to start a patch with a comment that links to the
 * the construct definition in the spec.
 *
 * Patches should only be used for syntaxes that cannot be correctly extracted
 * from specs.
 *
 * Note: the logic could be extended over time as needed to:
 * - Allow overriding an existing syntax. That would allow replacing most
 *   patches in "csspatches". The underlying PR should be reported in a
 *   `pending` key and/or the incorrect syntax should be recorded to make
 *   sure we do not miss updates.
 * - Allow dropping an existing syntax. That has never been needed until now.
 * - Allow adding/overriding new values of an extended definition. That could
 *   also prove useful.
 *****************************************************************************/
const patches = {
  // https://drafts.csswg.org/css-cascade-6/#scope-syntax
  'css-cascade-6': {
    '<scope-start>': '<selector-list>',
    '<scope-end>': '<selector-list>'
  },

  // https://drafts.csswg.org/css-color-4/#typedef-system-color
  // https://drafts.csswg.org/css-color-4/#typedef-deprecated-color
  // https://drafts.csswg.org/css-color-4/#typedef-named-color
  'css-color-4': {
    '<system-color>': {
      useValues: true,
      newValues: '<deprecated-color>'
    },
    '<deprecated-color>': {
      useValues: true
    },
    '<named-color>': {
      useValues: true,
      newValues: 'transparent'
    }
  },

  // https://drafts.csswg.org/css-counter-styles-3/#typedef-counter-style-name
  'css-counter-styles-3': {
    '<counter-style-name>': '<custom-ident>'
  },

  // https://drafts.csswg.org/css-fonts-4/#typedef-font-palette-palette-identifier
  'css-fonts-4': {
    'font-palette/<palette-identifier>': '<dashed-ident>'
  },

  // https://drafts.csswg.org/css-lists-3/#typedef-counter-name
  'css-lists-3': {
    '<counter-name>': '<custom-ident>'
  },

  // https://drafts.csswg.org/css-overflow-5/#typedef-scroll-button-direction
  'css-overflow-5': {
    '<scroll-button-direction>': {
      useValues: true
    }
  },

  // https://drafts.csswg.org/css-page-3/#typedef-page-size-page-size
  'css-page-3': {
    '@page/size/<page-size>': {
      useValues: true
    }
  },

  // https://drafts.csswg.org/css-shapes-1/#supported-basic-shapes
  'css-shapes-1': {
    '<basic-shape>': `
      <basic-shape-rect> |
      <circle()> | <ellipse()> | <polygon()> |
      <path()> | <shape()>
    `
  },

  // https://drafts.csswg.org/css-syntax-3/#the-anb-type
  'css-syntax-3': {
    '<n-dimension>': '<dimension-token>',
    '<ndash-dimension>': '<dimension-token>',
    '<ndashdigit-dimension>': '<dimension-token>',
    '<ndashdigit-ident>': '<ident-token>',
    '<dashndashdigit-ident>': '<ident-token>',
    '<signed-integer>': '<number-token>',
    '<signless-integer>': '<number-token>'
  },

  // https://drafts.csswg.org/css-transforms-2/#transform-functions
  'css-transforms-2': {
    '<transform-function>': `
      <scale()> | <scaleX()> | <scaleY()> | <scaleZ()> |
      <translate3d()> | <translate()> | <translateX()> | <translateY()> | <translateZ()> |
      <rotate3d()> <rotate()> | <rotateX()> | <rotateY()> | <rotateZ()> |
      <skew()> | <skewX()> | <skewY()> |
      <matrix3d()> | <matrix()> | <perspective()>
    `,
  },

  // https://drafts.csswg.org/css-ui-4/#propdef--webkit-user-select
  // https://drafts.csswg.org/css-ui-4/#typedef-outline-line-style
  'css-ui-4': {
    '-webkit-user-select': {
      sameAs: 'user-select'
    },
    // Same as <line-style> but 'auto' replaces 'hidden'
    '<outline-line-style>': `
      none | auto | dotted | dashed | solid | double |
      groove | ridge | inset | outset
    `
  },

  // https://drafts.csswg.org/css-values-4/#integers
  'css-values-4': {
    '<integer>': '<number-token>'
  },

  // https://drafts.csswg.org/css2/#value-def-absolute-size
  // https://drafts.csswg.org/css2/#value-def-relative-size
  // https://drafts.csswg.org/css2/#value-def-shape
  'CSS2': {
    '<absolute-size>': `
      xx-small | x-small | small | medium |
      large | x-large | xx-large
    `,
    '<relative-size>': 'larger | smaller',
    '<shape>': 'rect(<top>, <right>, <bottom>, <left>)'
  },

  // https://svgwg.org/svg2-draft/pservers.html#StopColorProperty
  // https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty
  'SVG2': {
    'stop-color': `<'color'>`,
    'stop-opacity': `<'opacity'>`
  }
};


/******************************************************************************
 * Patching logic
 *****************************************************************************/
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadJSON } from './utils.js';
import { expandCrawlResult, isLatestLevelThatPasses } from 'reffy';

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
