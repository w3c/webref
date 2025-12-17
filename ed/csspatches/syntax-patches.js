/******************************************************************************
 * List of CSS syntax patches
 *
 * The list follows a JSON-like structure, represented as a JS object so that
 * comments can be added and so that backticks may be used to split long
 * syntaxes over multiple lines to ease readability.
 *
 * Syntax patches are currently restricted to adding a syntax to CSS constructs
 * for which no syntax could be extracted from the underlying spec. They cannot
 * be used to override the syntax of a CSS construct (a full patch file is
 * needed for that, check the instructions in the README).
 *
 * Also, patches should only be used for situations where the spec cannot
 * easily be updated to make the syntax more explicit, e.g., because defining
 * the syntax in prose is seen as more convenient.
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
 * Trailing spaces in syntaxes will be trimmed, and so will extra spaces.
 * That's to ease patch readability. For example: `
 *    <basic-shape-rect> |
 *    <circle()>  |  <ellipse()>
 *  `
 * ... becomes `<basic-shape-rect> | <circle()> | <ellipse()>` once the patch
 * is applied.
 *
 * It is good practice to start a patch with a comment that links to the
 * the construct definition in the spec.
 *
 * The underlying patching logic is in tools/amend-css-syntaxes.js.
 *
 * Note: the logic could be extended over time as needed to:
 * - Allow overriding an existing syntax. That would allow replacing most
 *   patch files in this folder. The underlying PR should be reported in a
 *   `pending` key and/or the incorrect syntax should be recorded to make
 *   sure we do not miss updates.
 * - Allow dropping an existing syntax. That has never been needed until now.
 * - Allow adding/overriding new values of an extended definition. That could
 *   also prove useful.
 *****************************************************************************/
export default {
  // https://drafts.csswg.org/css-cascade-6/#scope-syntax
  "css-cascade-6": {
    "<scope-start>": "<selector-list>",
    "<scope-end>": "<selector-list>"
  },

  // https://drafts.csswg.org/css-color-4/#typedef-system-color
  // https://drafts.csswg.org/css-color-4/#typedef-deprecated-color
  // https://drafts.csswg.org/css-color-4/#typedef-named-color
  "css-color-4": {
    "<system-color>": {
      "useValues": true,
      "newValues": "<deprecated-color>"
    },
    "<deprecated-color>": {
      "useValues": true
    },
    "<named-color>": {
      "useValues": true,
      "newValues": "transparent"
    }
  },

  // https://drafts.csswg.org/css-counter-styles-3/#typedef-counter-style-name
  "css-counter-styles-3": {
    "<counter-style-name>": "<custom-ident>"
  },

  // https://drafts.csswg.org/css-fonts-4/#typedef-font-palette-palette-identifier
  "css-fonts-4": {
    "font-palette/<palette-identifier>": "<dashed-ident>"
  },

  // https://drafts.csswg.org/css-lists-3/#typedef-counter-name
  "css-lists-3": {
    "<counter-name>": "<custom-ident>"
  },

  // https://drafts.csswg.org/css-overflow-5/#typedef-scroll-button-direction
  "css-overflow-5": {
    "<scroll-button-direction>": {
      "useValues": true
    }
  },

  // https://drafts.csswg.org/css-page-3/#typedef-page-size-page-size
  "css-page-3": {
    "@page/size/<page-size>": {
      "useValues": true
    }
  },

  // https://drafts.csswg.org/css-shapes-1/#supported-basic-shapes
  "css-shapes-1": {
    "<basic-shape>": `
      <basic-shape-rect> |
      <circle()> | <ellipse()> | <polygon()> |
      <path()> | <shape()>
    `
  },

  // https://drafts.csswg.org/css-syntax-3/#the-anb-type
  "css-syntax-3": {
    "<n-dimension>": "<dimension-token>",
    "<ndash-dimension>": "<dimension-token>",
    "<ndashdigit-dimension>": "<dimension-token>",
    "<ndashdigit-ident>": "<ident-token>",
    "<dashndashdigit-ident>": "<ident-token>",
    "<signed-integer>": "<number-token>",
    "<signless-integer>": "<number-token>"
  },

  // https://drafts.csswg.org/css-transforms-2/#transform-functions
  "css-transforms-2": {
    "<transform-function>": `
      <scale()> | <scaleX()> | <scaleY()> | <scaleZ()> |
      <translate3d()> | <translate()> | <translateX()> | <translateY()> | <translateZ()> |
      <rotate3d()> <rotate()> | <rotateX()> | <rotateY()> | <rotateZ()> |
      <skew()> | <skewX()> | <skewY()> |
      <matrix3d()> | <matrix()> | <perspective()>
    `
  },

  // https://drafts.csswg.org/css-ui-4/#propdef--webkit-user-select
  // https://drafts.csswg.org/css-ui-4/#typedef-outline-line-style
  "css-ui-4": {
    "-webkit-user-select": {
      "sameAs": "user-select"
    },
    // Same as <line-style> but "auto" replaces "hidden"
    "<outline-line-style>": `
      none | auto | dotted | dashed | solid | double |
      groove | ridge | inset | outset
    `
  },

  // https://drafts.csswg.org/css-values-4/#integers
  "css-values-4": {
    "<integer>": "<number-token>"
  },

  // https://drafts.csswg.org/css2/#value-def-absolute-size
  // https://drafts.csswg.org/css2/#value-def-relative-size
  // https://drafts.csswg.org/css2/#value-def-shape
  "CSS2": {
    "<absolute-size>": `
      xx-small | x-small | small | medium |
      large | x-large | xx-large
    `,
    "<relative-size>": "larger | smaller",
    "<shape>": "rect(<top>, <right>, <bottom>, <left>)"
  },

  // https://svgwg.org/svg2-draft/pservers.html#StopColorProperty
  // https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty
  "SVG2": {
    "stop-color": `<'color'>`,
    "stop-opacity": `<'opacity'>`
  }
};
