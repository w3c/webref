/**
 * Add longhands field to CSS shorthand properties.
 *
 * This script reads individual CSS spec files and adds a `longhands` array
 * to shorthand properties, listing their constituent longhands in CSS
 * specification order.
 *
 * node tools/add-css-longhands.js [folder]
 *
 * ... where:
 * - [folder] is the name of the folder that contains the data to parse and
 * update (default is "curated")
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


/**
 * Known orderings for positional shorthands that use the {1,4} pattern.
 * These follow CSS spec order: top, right, bottom, left (clockwise from top)
 */
const POSITIONAL_ORDERINGS = {
  'margin': ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  'padding': ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
  'inset': ['top', 'right', 'bottom', 'left'],
  'border-width': ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
  'border-style': ['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
  'border-color': ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
  'scroll-margin': ['scroll-margin-top', 'scroll-margin-right', 'scroll-margin-bottom', 'scroll-margin-left'],
  'scroll-padding': ['scroll-padding-top', 'scroll-padding-right', 'scroll-padding-bottom', 'scroll-padding-left']
};


/**
 * Border-radius uses a different order: top-left, top-right, bottom-right, bottom-left
 */
const CORNER_ORDERINGS = {
  'border-radius': [
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius'
  ]
};


/**
 * Known shorthand expansions for complex cases that can't be auto-detected
 * from the syntax field.
 */
const MANUAL_EXPANSIONS = {
  // Two-value shorthands
  'gap': ['row-gap', 'column-gap'],
  'overflow': ['overflow-x', 'overflow-y'],
  'overscroll-behavior': ['overscroll-behavior-x', 'overscroll-behavior-y'],
  'place-content': ['align-content', 'justify-content'],
  'place-items': ['align-items', 'justify-items'],
  'place-self': ['align-self', 'justify-self'],

  // Flexbox
  'flex': ['flex-grow', 'flex-shrink', 'flex-basis'],
  'flex-flow': ['flex-direction', 'flex-wrap'],

  // Grid
  'grid': [
    'grid-template-rows',
    'grid-template-columns',
    'grid-template-areas',
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow'
  ],
  'grid-template': [
    'grid-template-rows',
    'grid-template-columns',
    'grid-template-areas'
  ],
  'grid-area': ['grid-row-start', 'grid-column-start', 'grid-row-end', 'grid-column-end'],
  'grid-row': ['grid-row-start', 'grid-row-end'],
  'grid-column': ['grid-column-start', 'grid-column-end'],

  // Multi-column
  'columns': ['column-width', 'column-count'],
  'column-rule': ['column-rule-width', 'column-rule-style', 'column-rule-color'],

  // Lists and UI
  'list-style': ['list-style-type', 'list-style-position', 'list-style-image'],
  'outline': ['outline-width', 'outline-style', 'outline-color'],

  // Text decoration
  'text-decoration': ['text-decoration-line', 'text-decoration-style', 'text-decoration-color'],
  'text-emphasis': ['text-emphasis-style', 'text-emphasis-color'],

  // Background
  'background': [
    'background-image',
    'background-position',
    'background-size',
    'background-repeat',
    'background-attachment',
    'background-origin',
    'background-clip',
    'background-color'
  ],
  'background-position': ['background-position-x', 'background-position-y'],

  // Font
  'font': [
    'font-style',
    'font-variant',
    'font-weight',
    'font-stretch',
    'font-size',
    'line-height',
    'font-family'
  ],
  'font-variant': [
    'font-variant-ligatures',
    'font-variant-caps',
    'font-variant-alternates',
    'font-variant-numeric',
    'font-variant-east-asian',
    'font-variant-position',
    'font-variant-emoji'
  ],
  'font-synthesis': ['font-synthesis-weight', 'font-synthesis-style', 'font-synthesis-small-caps'],

  // Animation and transition
  'animation': [
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state',
    'animation-timeline'
  ],
  'animation-range': ['animation-range-start', 'animation-range-end'],
  'transition': [
    'transition-property',
    'transition-duration',
    'transition-timing-function',
    'transition-delay'
  ],

  // Border shorthands
  'border': ['border-width', 'border-style', 'border-color'],
  'border-top': ['border-top-width', 'border-top-style', 'border-top-color'],
  'border-right': ['border-right-width', 'border-right-style', 'border-right-color'],
  'border-bottom': ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
  'border-left': ['border-left-width', 'border-left-style', 'border-left-color'],

  // Logical border shorthands
  'border-block': ['border-block-start', 'border-block-end'],
  'border-inline': ['border-inline-start', 'border-inline-end'],
  'border-block-start': ['border-block-start-width', 'border-block-start-style', 'border-block-start-color'],
  'border-block-end': ['border-block-end-width', 'border-block-end-style', 'border-block-end-color'],
  'border-inline-start': ['border-inline-start-width', 'border-inline-start-style', 'border-inline-start-color'],
  'border-inline-end': ['border-inline-end-width', 'border-inline-end-style', 'border-inline-end-color'],
  'border-block-width': ['border-block-start-width', 'border-block-end-width'],
  'border-block-style': ['border-block-start-style', 'border-block-end-style'],
  'border-block-color': ['border-block-start-color', 'border-block-end-color'],
  'border-inline-width': ['border-inline-start-width', 'border-inline-end-width'],
  'border-inline-style': ['border-inline-start-style', 'border-inline-end-style'],
  'border-inline-color': ['border-inline-start-color', 'border-inline-end-color'],

  // Border image
  'border-image': [
    'border-image-source',
    'border-image-slice',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat'
  ],

  // Logical inset/margin/padding
  'inset-block': ['inset-block-start', 'inset-block-end'],
  'inset-inline': ['inset-inline-start', 'inset-inline-end'],
  'margin-block': ['margin-block-start', 'margin-block-end'],
  'margin-inline': ['margin-inline-start', 'margin-inline-end'],
  'padding-block': ['padding-block-start', 'padding-block-end'],
  'padding-inline': ['padding-inline-start', 'padding-inline-end'],

  // Scroll margin/padding logical
  'scroll-margin-block': ['scroll-margin-block-start', 'scroll-margin-block-end'],
  'scroll-margin-inline': ['scroll-margin-inline-start', 'scroll-margin-inline-end'],
  'scroll-padding-block': ['scroll-padding-block-start', 'scroll-padding-block-end'],
  'scroll-padding-inline': ['scroll-padding-inline-start', 'scroll-padding-inline-end'],

  // Sizing
  'contain-intrinsic-size': ['contain-intrinsic-width', 'contain-intrinsic-height'],

  // Container
  'container': ['container-name', 'container-type'],

  // Motion path
  'offset': ['offset-path', 'offset-distance', 'offset-rotate', 'offset-anchor', 'offset-position'],

  // Masking
  'mask': [
    'mask-image',
    'mask-position',
    'mask-size',
    'mask-repeat',
    'mask-origin',
    'mask-clip',
    'mask-composite',
    'mask-mode'
  ],
  'mask-border': [
    'mask-border-source',
    'mask-border-slice',
    'mask-border-width',
    'mask-border-outset',
    'mask-border-repeat',
    'mask-border-mode'
  ],

  // CSS Backgrounds 4
  'box-shadow': [
    'box-shadow-color',
    'box-shadow-offset',
    'box-shadow-blur',
    'box-shadow-spread',
    'box-shadow-position'
  ],

  // CSS Borders 4 corner radius shorthands
  'border-top-radius': ['border-top-left-radius', 'border-top-right-radius'],
  'border-right-radius': ['border-top-right-radius', 'border-bottom-right-radius'],
  'border-bottom-radius': ['border-bottom-left-radius', 'border-bottom-right-radius'],
  'border-left-radius': ['border-top-left-radius', 'border-bottom-left-radius'],
  'border-block-start-radius': ['border-start-start-radius', 'border-start-end-radius'],
  'border-block-end-radius': ['border-end-start-radius', 'border-end-end-radius'],
  'border-inline-start-radius': ['border-start-start-radius', 'border-end-start-radius'],
  'border-inline-end-radius': ['border-start-end-radius', 'border-end-end-radius'],

  // CSS Text 4
  'text-spacing': ['text-spacing-trim', 'text-autospace'],

  // CSS Overflow 4
  'overflow-clip-margin': [
    'overflow-clip-margin-top',
    'overflow-clip-margin-right',
    'overflow-clip-margin-bottom',
    'overflow-clip-margin-left'
  ],
  'overflow-clip-margin-block': ['overflow-clip-margin-block-start', 'overflow-clip-margin-block-end'],
  'overflow-clip-margin-inline': ['overflow-clip-margin-inline-start', 'overflow-clip-margin-inline-end'],

  // Scroll animations
  'scroll-timeline': ['scroll-timeline-name', 'scroll-timeline-axis'],
  'view-timeline': ['view-timeline-name', 'view-timeline-axis'],

  // CSS Text 4 (white-space becomes a shorthand)
  'white-space': ['white-space-collapse', 'text-wrap-mode'],
  'text-wrap': ['text-wrap-mode', 'text-wrap-style'],

  // CSS Text 3/4 (text-align becomes a shorthand)
  'text-align': ['text-align-all', 'text-align-last'],

  // SVG marker shorthand
  'marker': ['marker-start', 'marker-mid', 'marker-end'],

  // CSS Overflow 4 (line-clamp and -webkit-line-clamp)
  'line-clamp': ['max-lines', 'block-ellipsis', 'continue'],
  '-webkit-line-clamp': ['max-lines', 'block-ellipsis', 'continue'],

  // CSS Gap Decorations (row-rule is like column-rule)
  'row-rule': ['row-rule-width', 'row-rule-style', 'row-rule-color'],

  // CSS Gap Decorations - combined rule-* shorthands (set both column and row)
  'rule': ['column-rule', 'row-rule'],
  'rule-width': ['column-rule-width', 'row-rule-width'],
  'rule-break': ['column-rule-break', 'row-rule-break'],
  'rule-color': ['column-rule-color', 'row-rule-color'],
  'rule-style': ['column-rule-style', 'row-rule-style'],
  'rule-edge-inset': ['column-rule-edge-inset', 'row-rule-edge-inset'],
  'rule-interior-inset': ['column-rule-interior-inset', 'row-rule-interior-inset'],
  'rule-inset': ['column-rule-inset', 'row-rule-inset'],
  'rule-inset-start': ['column-rule-inset-start', 'row-rule-inset-start'],
  'rule-inset-end': ['column-rule-inset-end', 'row-rule-inset-end'],

  // CSS Gap Decorations - edge/interior inset shorthands
  'column-rule-edge-inset': ['column-rule-edge-inset-start', 'column-rule-edge-inset-end'],
  'row-rule-edge-inset': ['row-rule-edge-inset-start', 'row-rule-edge-inset-end'],
  'column-rule-interior-inset': ['column-rule-interior-inset-start', 'column-rule-interior-inset-end'],
  'row-rule-interior-inset': ['row-rule-interior-inset-start', 'row-rule-interior-inset-end'],

  // CSS Gap Decorations - combined inset shorthands (set both edge and interior)
  'column-rule-inset': [
    'column-rule-edge-inset-start',
    'column-rule-edge-inset-end',
    'column-rule-interior-inset-start',
    'column-rule-interior-inset-end'
  ],
  'row-rule-inset': [
    'row-rule-edge-inset-start',
    'row-rule-edge-inset-end',
    'row-rule-interior-inset-start',
    'row-rule-interior-inset-end'
  ],

  // CSS Gap Decorations - start/end inset shorthands
  'column-rule-inset-start': ['column-rule-edge-inset-start', 'column-rule-interior-inset-start'],
  'column-rule-inset-end': ['column-rule-edge-inset-end', 'column-rule-interior-inset-end'],
  'row-rule-inset-start': ['row-rule-edge-inset-start', 'row-rule-interior-inset-start'],
  'row-rule-inset-end': ['row-rule-edge-inset-end', 'row-rule-interior-inset-end'],

  // CSS UI - interest-delay
  'interest-delay': ['interest-delay-start', 'interest-delay-end'],

  // CSS Inline - vertical-align
  'vertical-align': ['alignment-baseline', 'baseline-shift', 'baseline-source'],

  // CSS Compat - -webkit-text-stroke
  '-webkit-text-stroke': ['-webkit-text-stroke-width', '-webkit-text-stroke-color'],

  // CSS Text Decor 4 - text-decoration-skip
  'text-decoration-skip': [
    'text-decoration-skip-self',
    'text-decoration-skip-box',
    'text-decoration-skip-spaces',
    'text-decoration-skip-ink'
  ],

  // CSS Borders 4 - corner-shape shorthands
  'corner-shape': [
    'corner-top-left-shape',
    'corner-top-right-shape',
    'corner-bottom-right-shape',
    'corner-bottom-left-shape'
  ],
  'corner-top-shape': ['corner-top-left-shape', 'corner-top-right-shape'],
  'corner-right-shape': ['corner-top-right-shape', 'corner-bottom-right-shape'],
  'corner-bottom-shape': ['corner-bottom-left-shape', 'corner-bottom-right-shape'],
  'corner-left-shape': ['corner-top-left-shape', 'corner-bottom-left-shape'],
  'corner-block-start-shape': ['corner-start-start-shape', 'corner-start-end-shape'],
  'corner-block-end-shape': ['corner-end-start-shape', 'corner-end-end-shape'],
  'corner-inline-start-shape': ['corner-start-start-shape', 'corner-end-start-shape'],
  'corner-inline-end-shape': ['corner-start-end-shape', 'corner-end-end-shape'],

  // CSS Borders 4 - corner shorthands (set both radius and shape)
  'corner-top-left': ['border-top-left-radius', 'corner-top-left-shape'],
  'corner-top-right': ['border-top-right-radius', 'corner-top-right-shape'],
  'corner-bottom-right': ['border-bottom-right-radius', 'corner-bottom-right-shape'],
  'corner-bottom-left': ['border-bottom-left-radius', 'corner-bottom-left-shape'],
  'corner-start-start': ['border-start-start-radius', 'corner-start-start-shape'],
  'corner-start-end': ['border-start-end-radius', 'corner-start-end-shape'],
  'corner-end-start': ['border-end-start-radius', 'corner-end-start-shape'],
  'corner-end-end': ['border-end-end-radius', 'corner-end-end-shape'],
  'corner-top': ['border-top-radius', 'corner-top-shape'],
  'corner-right': ['border-right-radius', 'corner-right-shape'],
  'corner-bottom': ['border-bottom-radius', 'corner-bottom-shape'],
  'corner-left': ['border-left-radius', 'corner-left-shape'],
  'corner-block-start': ['border-block-start-radius', 'corner-block-start-shape'],
  'corner-block-end': ['border-block-end-radius', 'corner-block-end-shape'],
  'corner-inline-start': ['border-inline-start-radius', 'corner-inline-start-shape'],
  'corner-inline-end': ['border-inline-end-radius', 'corner-inline-end-shape'],

  // CSS Borders 4 - border-clip shorthands
  'border-clip': [
    'border-top-clip',
    'border-right-clip',
    'border-bottom-clip',
    'border-left-clip'
  ],
  'border-block-clip': ['border-block-start-clip', 'border-block-end-clip'],
  'border-inline-clip': ['border-inline-start-clip', 'border-inline-end-clip']
};


/**
 * Extract property references from CSS value syntax.
 * Looks for patterns like <'property-name'>.
 */
function extractPropertyRefs(syntax) {
  if (!syntax) {
    return [];
  }
  const matches = syntax.matchAll(/<'([^']+)'>/g);
  return [...matches].map(m => m[1]);
}


/**
 * Properties with incorrect metadata that are NOT actually shorthands.
 * These have "see individual properties" in some field but are actually longhands
 * or have other issues.
 */
const NOT_SHORTHANDS = new Set([
  // background-tbd is a placeholder property
  'background-tbd'
]);


/**
 * Check if a property is a shorthand based on its definition.
 * A property is a shorthand if it has "see individual properties" in computedValue,
 * initial, or animationType (case-insensitive).
 * Note: percentages alone doesn't indicate a shorthand.
 */
function isShorthand(prop) {
  // Skip known false positives
  if (NOT_SHORTHANDS.has(prop.name)) return false;

  // Check the main indicators of a shorthand (case-insensitive comparison)
  const seeIndividual = /^see individual properties$/i;
  if (seeIndividual.test(prop.computedValue)) return true;
  if (seeIndividual.test(prop.initial)) return true;
  if (seeIndividual.test(prop.animationType)) return true;
  // Note: percentages === 'see individual properties' alone is NOT a reliable indicator

  if (MANUAL_EXPANSIONS[prop.name]) return true;
  if (POSITIONAL_ORDERINGS[prop.name]) return true;
  if (CORNER_ORDERINGS[prop.name]) return true;

  return false;
}


/**
 * Get longhands for a shorthand property.
 * Returns an array of longhand names, or null if no longhands could be determined.
 * The `all` property is skipped (returns 'SKIP') as consumers need dedicated logic for it.
 */
function getLonghands(prop, allProperties) {
  const name = prop.name;

  // Skip the `all` property - consumers need dedicated logic for it
  if (name === 'all') {
    return 'SKIP';
  }

  // Check manual expansions first
  if (MANUAL_EXPANSIONS[name]) {
    return MANUAL_EXPANSIONS[name];
  }

  // Check positional orderings
  if (POSITIONAL_ORDERINGS[name]) {
    return POSITIONAL_ORDERINGS[name];
  }

  // Check corner orderings
  if (CORNER_ORDERINGS[name]) {
    return CORNER_ORDERINGS[name];
  }

  // Try to extract from syntax
  const syntaxRefs = extractPropertyRefs(prop.value);
  if (syntaxRefs.length > 0) {
    const validRefs = syntaxRefs.filter(ref => allProperties.has(ref));
    if (validRefs.length > 0) {
      return validRefs;
    }
  }

  return null;
}


/**
 * Add longhands field to CSS shorthand properties in the given folder.
 *
 * The function reads individual CSS spec files from the css subfolder,
 * identifies shorthand properties, and adds a longhands array listing
 * their constituent longhands.
 */
async function addCssLonghands(folder) {
  const cssDir = path.join(folder, 'css');

  // Get all CSS spec files
  const files = (await fs.readdir(cssDir))
    .filter(f => f.endsWith('.json') && f !== 'css.json');

  console.log(`Found ${files.length} CSS spec files`);

  // First pass: collect all property names
  const allProperties = new Set();
  const specData = new Map();

  for (const file of files) {
    const filepath = path.join(cssDir, file);
    const content = await fs.readFile(filepath, 'utf8');
    const data = JSON.parse(content);
    specData.set(file, { data, filepath });

    if (data.properties) {
      for (const prop of data.properties) {
        allProperties.add(prop.name);
      }
    }
  }

  console.log(`Found ${allProperties.size} unique properties`);

  // Second pass: add longhands to shorthands
  let shorthands = 0;
  let withLonghands = 0;
  let skipped = 0;
  let withoutLonghands = [];
  let modifiedFiles = [];

  for (const [file, { data, filepath }] of specData) {
    if (!data.properties) {
      continue;
    }

    let modified = false;

    for (const prop of data.properties) {
      if (!isShorthand(prop)) {
        continue;
      }
      if (prop.longhands) {
        // Already has longhands, skip
        continue;
      }

      shorthands++;

      const longhands = getLonghands(prop, allProperties);
      if (longhands === 'SKIP') {
        // Special case (e.g., `all` property) - skip without error
        skipped++;
        continue;
      }
      else if (longhands && longhands.length > 0) {
        const validLonghands = longhands.filter(lh => allProperties.has(lh));
        if (validLonghands.length > 0) {
          prop.longhands = validLonghands;
          modified = true;
          withLonghands++;
        }
        else {
          withoutLonghands.push(prop.name);
        }
      }
      else {
        withoutLonghands.push(prop.name);
      }
    }

    if (modified) {
      const json = JSON.stringify(data, null, 2) + '\n';
      await fs.writeFile(filepath, json);
      modifiedFiles.push(file);
    }
  }

  // Report results
  console.log();
  console.log(`Shorthands found: ${shorthands}`);
  console.log(`With longhands: ${withLonghands}`);
  console.log(`Skipped (e.g., all): ${skipped}`);
  console.log(`Without longhands: ${withoutLonghands.length}`);
  console.log(`Files modified: ${modifiedFiles.length}`);

  // Throw if any shorthands couldn't be resolved
  if (withoutLonghands.length > 0) {
    const uniqueWithout = [...new Set(withoutLonghands)].sort();
    throw new Error(
      `Failed to determine longhands for ${uniqueWithout.length} shorthand(s):\n` +
      uniqueWithout.map(n => `  - ${n}`).join('\n') +
      '\n\nAdd manual mappings to MANUAL_EXPANSIONS in tools/add-css-longhands.js'
    );
  }

  return { shorthands, withLonghands, skipped, withoutLonghands, modifiedFiles };
}


/**************************************************
Export methods for use as module
**************************************************/
export { addCssLonghands };


/**************************************************
Code run if the code is run as a stand-alone module
**************************************************/
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const folder = process.argv[2] ?? 'curated';

  addCssLonghands(folder).catch(e => {
    console.error(e);
    process.exit(1);
  });
}
