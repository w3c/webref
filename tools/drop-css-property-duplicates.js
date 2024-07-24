/**
 * Drop CSS property definition duplicates for situations where definition in
 * one spec is known to override the same definition in another spec.
 *
 *
 * node tools/drop-css-property-duplicates.js [folder]
 * 
 * ... where:
 * - [folder] is the name of the folder that contains the data to parse
 * and update (default is "curated")
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';
import { fileURLToPath } from 'node:url';
import { execFile as execFileCb } from 'node:child_process';
import { loadJSON } from './utils.js';
import reffy from 'reffy';
const expandCrawlResult = reffy.expandCrawlResult;
const execFile = util.promisify(execFileCb);


/**
 * Known superseding relationships between CSS/SVG specs
 */
const supersededBy = {
  // All CSS modules supersede CSS 2.x
  'CSS': '*',

  // Definition of <position> in CSS Values supersedes that in CSS Backgrounds
  'css-backgrounds': 'css-values',

  // See note in https://drafts.csswg.org/css-align/#placement
  // "The property definitions here supersede those in [CSS-FLEXBOX-1]"
  'css-flexbox': 'css-align',

  // https://github.com/w3c/csswg-drafts/issues/6434#issuecomment-877447360
  // https://drafts.csswg.org/css-borders-4/#level-changes
  'css-logical': [
    'css-position',
    'css-borders'
  ],

  // See https://github.com/w3c/csswg-drafts/issues/6435
  // (string-set property defined twice)
  // Also, GCPM defines an "element()" function for "content" that is different
  // from the official "element()" function defined in CSS Images 4
  'css-gcpm': [
    'css-content',
    'css-images'
  ],

  // See https://github.com/w3c/csswg-drafts/issues/6433
  // (shape-inside should get dropped from css-round-display)
  'css-round-display': 'css-shapes',

  // New (09/2022) versions of animation properties are defined in Scroll
  // Animations and will move to CSS Animations afterwards
  // https://w3c.github.io/csswg-drafts/scroll-animations-1/#timeline-ranges
  'css-animations': 'scroll-animations',

  // "<font-tech> should be imported from css-fonts-4, not defined here."
  // https://drafts.csswg.org/css-conditional-5/#at-supports-ext
  'css-conditional': 'css-fonts',

  // css-backgrounds-3 was split into css-backgrounds-4 and css-borders-4.
  // This override can be dropped once css-backgrounds-4 becomes the current
  // specification in the css-backgrounds series.
  'css-backgrounds': 'css-borders',

  // The Selectors spec defines the ":fullscreen" selector, which is refined in
  // Fullscreen. The Fullscreen definition should probably be flagged as non
  // exported. Or turned into a reference to the Selectors spec.
  // Same thing for the "::backdrop" pseudo-element, defined in CSS Position 4.
  'fullscreen': [
    'selectors',
    'css-position'
  ],

  // CSS Values borrows the definition of <integer> from CSS Syntax. Either
  // definition is fine, but references tend to be to CSS Values, so let's
  // dismiss the CSS Syntax definition.
  'css-syntax': 'css-values',

  // CSS Color HDR extends CSS Color to enable HDR:
  // https://drafts.csswg.org/css-color-hdr/#color-function
  'css-color': 'css-color-hdr',

  // See note in https://svgwg.org/specs/strokes/#sotd
  // "In the future, this specification will supersede the SVG 2 Stroke
  // definition, however at this time the SVG 2 Stroke definition must be
  // considered the normative definition."
  'svg-strokes': 'SVG',

  // TODO: confirm that CSS modules supersede SVG 2
  'SVG': [
    'css-images',   // image-rendering
    'css-logical',  // inline-size
    'css-shapes',   // shape-inside, shape-margin
    'css-ui',       // pointer-events
    'fill-stroke'   // all properties in fill-stroke
  ]
};


async function dropCSSPropertyDuplicates(folder) {
  const rawIndex = await loadJSON(path.join(folder, 'index.json'));
  const index = await expandCrawlResult(rawIndex, folder, ['css']);
  
  const properties = {};
  for (const spec of index.results) {
    if (!spec.css?.properties) {
      continue;
    }
    for (const dfn of spec.css.properties) {
      if (dfn.newValues) {
        // Extension of a base definition, does not count as duplicate
        continue;
      }
      if (!properties[dfn.name]) {
        properties[dfn.name] = [];
      }
      properties[dfn.name].push(spec);
    }
  }

  const selectors = {};
  for (const spec of index.results) {
    if (!spec.css?.selectors) {
      continue;
    }
    for (const dfn of spec.css.selectors) {
      if (!selectors[dfn.name]) {
        selectors[dfn.name] = [];
      }
      selectors[dfn.name].push(spec);
    }
  }

  const values = {};
  for (const spec of index.results) {
    if (!spec.css?.values) {
      continue;
    }
    for (const dfn of spec.css.values) {
      if (!values[dfn.name]) {
        values[dfn.name] = [];
      }
      values[dfn.name].push(spec);
    }
  }

  function filterSuperseded(spec, specs, type, name) {
    const shortname = spec.series.shortname;
    if ((spec.seriesComposition === 'delta') &&
        specs.find(s => s !== spec && s.series.shortname === shortname)) {
      // Property name both defined in delta spec and in base full spec,
      // let's ignore the duplication.
      return false;
    }

    const superseding = [supersededBy[shortname]].flat();
    if (superseding[0] === '*' ||
        specs.find(s => superseding.includes(s.series.shortname))) {
      // Property name defined in a spec that supersedes the current one,
      // drop the property definition from the current spec
      spec.css[type] = spec.css[type].filter(dfn => dfn.name !== name);
      spec.needsSaving = true;
      return false;
    }
    return true;
  }

  let duplicates = 0;
  for (const [name, specs] of Object.entries(properties)) {
    if (specs.length > 1) {
      properties[name] = specs.filter(spec => filterSuperseded(spec, specs, 'properties', name));
    }
    if (properties[name].length > 1) {
      console.error(`- ${name} defined in ${properties[name].map(spec => `[${spec.shortTitle}](${spec.url})`).join(', ')}`);
      duplicates += 1;
    }
  }

  // Same logic for selectors
  for (const [name, specs] of Object.entries(selectors)) {
    if (specs.length > 1) {
      selectors[name] = specs.filter(spec => filterSuperseded(spec, specs, 'selectors', name));
    }
    if (selectors[name].length > 1) {
      console.error(`- ${name} defined in ${selectors[name].map(spec => `[${spec.shortTitle}](${spec.url})`).join(', ')}`);
      duplicates += 1;
    }
  }

  // Same logic for values
  for (const [name, specs] of Object.entries(values)) {
    if (specs.length > 1) {
      values[name] = specs.filter(spec => filterSuperseded(spec, specs, 'values', name));
    }
    if (values[name].length > 1) {
      console.error(`- ${name} defined in ${values[name].map(spec => `[${spec.shortTitle}](${spec.url})`).join(', ')}`);
      duplicates += 1;
    }
  }

  // Special case for css-logical:
  // Extensions of base properties in that spec actually extend base definitions
  // in CSS 2, and not base definitions in specific and more recent CSS modules.
  // As of 2022-05-02, all extensions defined in css-logical are for base
  // properties re-defined in newer CSS modules (css-text, css-page-floats and
  // css-tables), so let's ignore all of them. The new definition of
  // "caption-side" in css-tables does not have "inline-start" and "inline-end"
  // but that seems to be on purpose as these values are only for
  // implementations that support the non-defined "left" and "right" values,
  // which css-tables explicitly notes it does not currently try to define.
  const cssIllogical = index.results.find(spec => spec.shortname === 'css-logical-1');
  if (cssIllogical?.css?.properties) {
    const filtered = cssIllogical.css.properties
      .filter(prop => !['float', 'caption-side', 'clear', 'text-align'].includes(prop.name));
    if (filtered.length < cssIllogical.css.properties.length) {
      cssIllogical.css.properties = filtered;
      cssIllogical.needsSaving = true;
    }
  }

  function getBaseJSON(spec) {
    return {
      spec: {
        title: spec.title,
        url: spec.crawled
      }
    };
  }

  async function saveCss(spec) {
    // There are no comments in JSON, so include the spec title+URL as the
    // first property instead.
    const css = Object.assign({
      spec: {
        title: spec.title,
        url: spec.crawled
      }
    }, spec.css);
    const json = JSON.stringify(css, null, 2) + '\n';
    const filename = spec.shortname === spec.series.currentSpecification ?
      spec.series.shortname :
      spec.shortname
    const pathname = path.join(folder, 'css', filename + '.json');
    await fs.writeFile(pathname, json);
  };

  for (const spec of index.results) {
    if (spec.needsSaving) {
      await saveCss(spec);
    }
  }

  if (duplicates) {
    throw new Error('Duplicate CSS properties found, see log for details');
  }
}


/**************************************************
Export methods for use as module
**************************************************/
export { dropCSSPropertyDuplicates };


/**************************************************
Code run if the code is run as a stand-alone module
**************************************************/
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const folder = process.argv[2] ?? 'curated';
  
  dropCSSPropertyDuplicates(folder).catch(e => {
    console.error(e);
    process.exit(1);
  });
}
