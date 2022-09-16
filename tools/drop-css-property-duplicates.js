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

const fs = require('fs').promises;
const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const loadJSON = require('./utils').loadJSON;
const expandCrawlResult = require('reffy').expandCrawlResult;


/**
 * Known superseding relationships between CSS/SVG specs
 */
const supersededBy = {
  // All CSS modules supersede CSS 2.x
  'CSS': '*',

  // All unit value spaces defined in CSS values supersede re-definitions that
  // just refine how the value needs to be interpreted in other specs
  // (happens for <integer> and <url> for instance)
  // NB: Reffy should rather take the `data-dfn-for` attribute to avoid having
  // to deal with that here, see https://github.com/w3c/reffy/issues/980
  'css-values': '*',

  // CSS Images defines the <image> value space. CSS Content merely explains
  // how it needs to be interpreted in the context of <content-list>
  // NB: Reffy should rather take the `data-dfn-for` attribute to avoid having
  // to deal with that here, see https://github.com/w3c/reffy/issues/980
  'css-images': 'css-content',

  // See note in https://drafts.csswg.org/css-align/#placement
  // "The property definitions here supersede those in [CSS-FLEXBOX-1]"
  'css-flexbox': 'css-align',

  // https://github.com/w3c/csswg-drafts/issues/6434#issuecomment-877447360
  'css-logical': 'css-position',

  // See https://github.com/w3c/csswg-drafts/issues/6435
  // (string-set property defined twice)
  'css-gcpm': 'css-content',

  // See https://github.com/w3c/csswg-drafts/issues/6433
  // (shape-inside should get dropped from css-round-display)
  'css-round-display': 'css-shapes',

  // New (09/2022) versions of animation properties are defined in Scroll
  // Animations and will move to CSS Animations afterwards
  // https://w3c.github.io/csswg-drafts/scroll-animations-1/#timeline-ranges
  'css-animations': 'scroll-animations',

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
    for (const [name, dfn] of Object.entries(spec.css.properties)) {
      if (dfn.newValues) {
        // Extension of a base definition, does not count as duplicate
        continue;
      }
      if (!properties[name]) {
        properties[name] = [];
      }
      properties[name].push(spec);
    }
  }

  const valuespaces = {};
  for (const spec of index.results) {
    if (!spec.css?.valuespaces) {
      continue;
    }
    for (const [name, dfn] of Object.entries(spec.css.valuespaces)) {
      if (!valuespaces[name]) {
        valuespaces[name] = [];
      }
      valuespaces[name].push(spec);
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
      delete spec.css[type][name];
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

  // Same logic for valuespaces, but there will remain a few duplicates
  // (e.g. "<rect()>" or "<path()>") and that's fine.
  for (const [name, specs] of Object.entries(valuespaces)) {
    if (specs.length > 1) {
      specs.filter(spec => filterSuperseded(spec, specs, 'valuespaces', name));
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
    Object.keys(cssIllogical.css.properties)
      .filter(prop => ['float', 'caption-side', 'clear', 'text-align'].includes(prop))
      .forEach(prop => {
        delete cssIllogical.css.properties[prop];
        cssIllogical.needsSaving = true;
      });
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
    const pathname = path.join(folder, 'css', spec.series.shortname + '.json')
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
module.exports.dropCSSPropertyDuplicates = dropCSSPropertyDuplicates;


/**************************************************
Code run if the code is run as a stand-alone module
**************************************************/
if (require.main === module) {
  const folder = process.argv[2] ?? 'curated';
  
  dropCSSPropertyDuplicates(folder).catch(e => {
    console.error(e);
    process.exit(1);
  });
}
