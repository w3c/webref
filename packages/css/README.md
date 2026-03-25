# CSS definitions of the web platform

This package contains a consolidated list of CSS features defined across specs, scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref). Fixes are applied to ensure that [guarantees](#guarantees) hold, including the ability to parse syntaxes associated with CSS features with [CSSTree](https://github.com/csstree/csstree).

**Important:** If you're migrating from version 6, see the [changelog](https://github.com/w3c/webref/blob/main/packages/css/CHANGELOG.md) for "How to upgrade" considerations.

## Table of Contents

- [Usage](#usage)
- [CSS features](#css-features)
- [Feature keys](#feature-keys)
- [Migrating from `mdn/data`](#migrating-from-mdndata)
- [Guarantees](#guarantees)


## Usage

Two async methods are exposed: `listAll()` and `index()`. They both resolve with an object that lists CSS features by feature type: `atrules`, `functions`, `properties`, `selectors` and `types`.

The difference between the two functions is that, under each feature type, `listAll()` returns an array of features, whereas `index()` returns an object indexed by feature name to ease direct lookups (and [transition from `mdn/data`](#transition-from-mdndata)). Both functions return the same features.

*Note:* The NPM package targets JavaScript runtimes more directly but the data appears in a standalone `css.json` file within the package. This file may be parsed as JSON in any programming language to yield the same object as that returned by the `listAll()` method.

Example using `listAll()`:

```js
import css from '@webref/css';

const { atrules, functions, properties, selectors, types } = await css.listAll();

for (const feature of functions) {
  // do something with the object that describes the CSS function
}
```

Example using `index()`:

```js
import css from '@webref/css';

const { atrules, functions, properties, selectors, types } = await css.index();

// Do something with the object that describes the abs() function
const abs = functions['abs()'];
```

Features returned by `index()` are indexed by their feature name, but there are exceptional cases where a given feature is defined differently (with a different syntax) for different scopes. In such cases the feature is indexed by its name completed with ` for ` and the name of the first scoping feature to which the definition applies. For example, `type() for @function`, `type() for attr()`. As of June 2025, this affects a handful of functions and types. See also the description of the [`for`](#for) key.


## CSS features

The package contains data about different CSS feature types, represented by objects in the JSON structure.

**Important:** When a CSS feature is defined in different levels in the same spec series, the data matches the definition from the latest level. This may mean that, e.g., the [`syntax`](#syntax) is more forward-looking than what is currently implemented in browsers.

### At-rules

Correspond to [at-rules](https://www.w3.org/TR/css-syntax/#at-rules) defined in CSS specs. They are listed under the `atrules` root key.

The following keys are always set for at-rules:
- [`descriptors`](#descriptors-1)
- [`href`](#href)
- [`name`](#name)

Additional keys may be set:
- [`for`](#for)
- [`prose`](#prose)
- [`syntax`](#syntax)

### Descriptors

Correspond to at-rule [descriptors](https://www.w3.org/TR/css-syntax/#css-descriptor) defined in CSS specs. They are listed under the [`descriptors`](#descriptors-1) key of individual at-rules.

The following keys are always set for descriptors:
- [`href`](#href)
- [`name`](#name)

Additional keys may be set:
- [`initial`](#initial)
- [`syntax`](#syntax)
- [`type`](#type)

### Functions

Correspond to [functions](https://www.w3.org/TR/css-values/#functional-notations) defined in CSS specs and usually referenced from the syntax of other CSS features. They are listed under the `functions` root key.

The following keys are always set for functions:
- [`href`](#href)
- [`name`](#name)

Additional keys may be set:
- [`for`](#for)
- [`prose`](#prose)
- [`syntax`](#syntax)

### Properties

Correspond to [properties](https://www.w3.org/TR/css-cascade/#css-property) defined in CSS specs. They are listed under the `properties` root key.

The following keys are always set for properties:
- [`extended`](#extended)
- [`href`](#href)
- [`name`](#name)

Additional keys may be set:
- [`animationType`](#animationType)
- [`appliesTo`](#appliesTo)
- [`canonicalOrder`](#canonicalOrder)
- [`computedValue`](#computedValue)
- [`inherited`](#inherited)
- [`initial`](#initial)
- [`legacyAliasOf`](#legacyaliasof)
- [`logicalPropertyGroup`](#logicalPropertyGroup)
- [`media`](#media)
- [`longhands`](#longhands)
- [`percentages`](#percentages)
- [`prose`](#prose)
- [`resetLonghands`](#resetLonghands)
- [`styleDeclaration`](#styleDeclaration)
- [`syntax`](#syntax)

### Selectors

Correspond to [selectors](https://www.w3.org/TR/selectors/) defined in CSS specs. They are listed under the `selectors` root key.

The following keys are always set for selectors:
- [`href`](#href)
- [`name`](#name)

Additional keys may be set:
- [`prose`](#prose)
- [`syntax`](#syntax)

### Types

Correspond to [non-terminal types](https://www.w3.org/TR/css-values/#component-types) defined in CSS specs and usually referenced from the syntax of other CSS features. They are listed under the `types` root key.

The following keys are always set for types:
- [`href`](#href)
- [`name`](#name)

Additional keys may be set:
- [`for`](#for)
- [`prose`](#prose)
- [`syntax`](#syntax)

## Feature keys

All CSS features have:
- a [`name`](#name) key that contains the name of the feature
- an [`href`](#href) key that contains the URL (with a fragment) of the CSS spec that defines the feature

In practice, all CSS features also have an [`extended`](#extended) key that contains a list of URLs of specs that extend the feature, but the key is currently only meaningful for properties. The key yields an empty array for all other features.

Many CSS features have a [`syntax`](#syntax) key that describes the formal syntax of the feature, as defined in the spec. Additional keys are set depending on the type of the CSS feature.

**Important:** Various keys map to parts of a [CSS property definition](https://www.w3.org/TR/CSS2/about.html#property-defs). Unless otherwise specified, values for these keys are strings extracted from the spec, without any attempt at normalizing or checking the values. Specs may use prose to define the values, either on a temporary basis or to signal specific constraints. Projects consuming the data should expect to bump into values that appear invalid or not part of the enumeration that the underlying key may be associated with.

#### `animationType`

The `animationType` key is only set for properties, when value is not empty. It maps to the [Animation type](https://www.w3.org/TR/web-animations/#animation-type) part of a CSS property definition. Values may be one of the animation types (e.g., [`discrete`](https://www.w3.org/TR/web-animations/#discrete)), or prose.

#### `appliesTo`

The `appliesTo` key is only set for properties, when value is not empty. It maps to the [Applies to](https://www.w3.org/TR/CSS2/about.html#applies-to) part of a CSS property definition.

#### `canonicalOrder`

The `canonicalOrder` key is only set for properties, when value is not empty. It maps to the [Canonical order](https://www.w3.org/TR/cssom/#serializing-css-values) part of a CSS property definition, which affects how CSS values are serialized.

#### `computedValue`

The `computedValue` key is only set for properties, when value is not empty. It maps to the [Computed value](https://www.w3.org/TR/CSS2/about.html#computed-defs) part of a CSS property definition.

#### `descriptors`

The `descriptors` key is only set, and is always set, for at-rules. Value is an array of [descriptor](#descriptors) objects. The array is empty when the at-rule does not have any known descriptor. Descriptors are sorted by alphabetic order of their name.

When descriptors of an at-rule are defined in multiple specs, `descriptors` contains the merged list of known descriptors.

*Note:* The list may not be exhaustive. For example, it does not contain descriptors that are only implicitly defined in specs, such as families of properties that some at-rules accept as descriptors (e.g., `@position-try`).

#### `extended`

The `extended` key is set for all CSS feature types, and is always set, but it is only meaningful (and not an empty array) for properties for now. Value is an array that lists absolute URLs that target the nightly version (as [defined in browser-specs](https://github.com/w3c/browser-specs/?tab=readme-ov-file#nightly)) of the specifications that extend a property definition. The URLs include a fragment when possible.

*Note:* Check the [`href`](#href) key if you need the base definition of a property.

For example, `align-items` is defined in [CSS Box Alignment](https://drafts.csswg.org/css-align-3/#propdef-align-items) and extended in [CSS Anchor Positioning](https://drafts.csswg.org/css-anchor-position-1/#propdef-align-items), its `extended` key has `https://drafts.csswg.org/css-anchor-position-1/#propdef-align-items`.

URLs that appear in `extended` are guaranteed to appear in [`web-specs`](https://www.npmjs.com/package/web-specs) (from the [browser-specs](https://github.com/w3c/browser-specs/) project). See [`href`](#href) for logic you may use to retrieve additional information about the specs.

#### `for`

The `for` key is only set for at-rules, functions and types, when value is not empty. Value is an array that lists the names of the CSS feature that the underlying CSS feature is namespaced to in the spec.

For an at-rule, names are names of other at-rules. The `for` relationship encodes the fact that the at-rule can only appear nested under the at-rule(s) targeted by the `for` key. For example, the `@annotation` at-rule has a `for` key that targets `@font-feature-values`.

At-rules may be nested through other means, but the data does not capture such possibilities. For example, `@scope` at-rules may be nested but the data does not say anything about it.

For a function or type, names may be names of properties, functions, or types. When the scoping feature is a type, its name in the `for` key is enclosed between `<` and `>`  to make it possible to disambiguate between the possibilities: any name that starts with `<` and ends with `>` targets a type, any name that ends with `()` targets a function, any other name targets a property. The `for` relationship captures the fact that the function or type can only appear in the context of the scoping property, function, or type. For example, the `blur()` function has a `for` key that targets the `filter` property.

There exist a handful of functions and types that are defined with different syntax for different scopes. In such cases, there exist multiple entries in the list with the same `name` key but different `for` keys. For example, the `fit-content()` function has two entries with slightly different syntaxes:
- one for `grid-template-columns` and `grid-template-rows`,
- the other for `height`, `max-height`, `max-width`, `min-height`, `min-width`, and `width`.

CSS features targeted by `for` keys are guaranteed to exist.

#### `href`

The `href` key is set for all CSS feature types, and is always set. Value is a string representing an absolute URL (with a fragment) that targets the main definition of the underlying CSS feature in the nightly version (as [defined in browser-specs](https://github.com/w3c/browser-specs/?tab=readme-ov-file#nightly)) of the spec that defines it.

The `href` key always targets the base definition of a CSS feature. Check the [`extended`](#extended) key to gather information about possible extensions.

For example:
- `https://drafts.csswg.org/css-values-4/#funcdef-abs` for the [`abs()`](https://drafts.csswg.org/css-values-4/#funcdef-abs) function.
- `https://drafts.csswg.org/css-display-4/#propdef-display` for the [`display`](https://drafts.csswg.org/css-display-4/#propdef-display) property. The property is extended in [CSS Ruby](https://drafts.csswg.org/css-ruby-1/#ruby-display) but `href` rather targets the base definition in [CSS Display](https://drafts.csswg.org/css-display-4/).

URLs that appear in `href` are guaranteed to appear in [`web-specs`](https://www.npmjs.com/package/web-specs) (from the [browser-specs](https://github.com/w3c/browser-specs/) project). You may use the following logic if you need to retrieve information about the underlying specs,  (note that it also gathers information about extensions):

```js
import webref from '@webref/css';
import webspecs from 'web-specs' with { type: 'json' };

const css = await webref.listAll();

for (const category of Object.keys(css)) {
  for (const feature of css[category]) {
    const featureSpecs = [feature.href, feature.extended ?? []]
      .flat()
      .map(href => {
        // Get rid of the fragment to ease mapping to spec URLs
        const url = new URL(href);
        url.hash = '';
        return url.toString();
      })
      // Note: some specs don't have a "nightly" version in web-specs.
      // They are not crawled, no CSS content in them
      .map(url => webspecs.find(spec =>
        [spec.nightly?.url, spec.nightly?.pages].flat().includes(url)
      ));

    const markdown = featureSpecs
      .map(s => `[${s.title}](${s.nightly.url})`)
      .join(', ');
    console.log(`- Sources for ${feature.name}: ${markdown}`);
  }
}
```

#### `inherited`

The `inherited` key is only set for properties, when value is not empty. It maps to the [Inherited](https://www.w3.org/TR/CSS2/about.html#inherited-prop) part of a CSS property definition.

#### `initial`

The `initial` key is only set for properties, when value is not empty. It maps to the [Initial](https://www.w3.org/TR/CSS2/about.html#initial-value) part of a CSS property definition.

*Note:* Value is a valid syntax most of the time, but there is no guarantee that this is always the case (See also [issue #707](https://github.com/w3c/webref/issues/707)).

#### `legacyAliasOf`

The `legacyAliasOf` key is only set for properties that are [legacy name aliases](https://www.w3.org/TR/css-cascade/#legacy-name-alias) of another property. Value is the name of the newer property. For example, `-webkit-align-content` is a legacy name alias for `align-content`.

*Note:* A number of legacy properties defined in [Compatibility](https://compat.spec.whatwg.org/) map to new properties, but are not *legacy name aliases* for these properties and do not have a `legacyAliasOf` key as a result. For example, `-webkit-box-align` maps to `box-align` but is not a legacy name alias for `box-align`.

#### `logicalPropertyGroup`

The `logicalPropertyGroup` key is only set for properties, when value is not empty. It maps to the [Logical property group](https://www.w3.org/TR/css-logical/#logical-property-group) part of a CSS property definition.

#### `longhands`

The `longhands` key is only set for [shorthand properties](https://www.w3.org/TR/css-cascade/#shorthand). Value is an array that lists the names of the longhand sub-properties that the shorthand property sets, in specification order.

For example, the `background-position` shorthand property lists `background-position-x` and `background-position-y` as `longhands` values.

Longhand sub-properties may themselves be shorthand properties. For example, [`border`](https://drafts.csswg.org/css-borders-4/#propdef-border) is defined as a shorthand for `border-width`, `border-style` and `border-color` and, e.g., [`border-width`](https://drafts.csswg.org/css-borders-4/#propdef-border-width) is itself a shorthand for `border-top-width`, `border-right-width`, `border-bottom-width` and `border-left-width`. Expand all longhand sub-properties to get the full list of longhands that a shorthand property sets.

*Note:* Shorthand properties may also reset a few properties to their initial value without setting them. Reset-only sub-properties are listed in the [`resetLonghands`](#resetlonghands) key.

#### `media`

The `media` key is only set for properties, when value is not empty. It maps to the [Media groups](https://www.w3.org/TR/CSS2/about.html#media-applies) part of a CSS property definition.

### `name`

The `name` key is set for all CSS feature types, and is always set. It contains the name of the feature as a string.

Within a feature type, names are generally unique... provided that one considers the [`for`](#for) key to account for the cases when the syntax of the CSS feature differs depending on the context.

Notes:
- At-rule names start with `@`. For example, `@media`.
- Function names end with `()`. Parameter names are never provided in the name itself but appear in the syntax (see `syntax` key). For example, `abs()`.
- Property names appear as defined. For example, `animation-duration`.
- Legacy property names may start with `-`. For example, `-webkit-mask`.
- With the exception of combinators (`+`, `&`, `~`, `>`, `||`), selector names start with one (or two) `:`. For example, `:visited`.
- Selectors that are also functions end with `()`. For example, `:is()`.
- Type names are *not* wrapped in enclosing `<>`. For example, `angle`.

#### `percentages`

The `percentages` key is only set for properties, when value is not empty. It maps to the [Percentages](https://www.w3.org/TR/CSS2/about.html#percentage-wrt) part of a CSS property definition.

#### `prose`

The `prose` key is set for all CSS feature types, when value is not empty. It contains a text excerpt from the spec near the definition of the CSS feature. The value is more intended for human review and debugging purpose. It should not be used for documentation purpose, both because it does not faithfully describe the feature at hand and because it may contain unrelated prose.

#### `resetLonghands`

The `resetLonghands` key is only set for [shorthand properties](https://www.w3.org/TR/css-cascade/#shorthand). Value is an array that lists the names of the [reset-only sub-properties](https://www.w3.org/TR/css-cascade/#reset-only-sub-property) that the shorthand reset to their initial values, in specification order.

Reset-only sub-properties may themselves be shorthand properties. Expand all reset-only sub-properties to get the full list of longhands that get reset by a shorthand.

For example, the `border` shorthand property has `border-image` in `resetLonghands`, and `border-image` is a shorthand for `border-image-source`, `border-image-slice`, `border-image-width`, `border-image-outset` and `border-image-repeat`.

*Note:* See also the [`longhands`](#longhands) key for the list of longhand sub-properties that a shorthand property sets.

#### `styleDeclaration`

The `styleDeclaration` key is only set, and is always set, for properties. It contains the list of IDL attribute names that the property generates, as defined in [CSS Object Model](https://www.w3.org/TR/cssom/#the-cssstyledeclaration-interface), in other words, the names that would replace `_camel_cased_attribute`, `_webkit_cased_attribute`, `_dashed_attribute` in:

```webidl
partial interface CSSStyleDeclaration {
  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString _camel_cased_attribute;
};
partial interface CSSStyleDeclaration {
  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString _webkit_cased_attribute;
};
partial interface CSSStyleDeclaration {
  [CEReactions] attribute [LegacyNullToEmptyString] CSSOMString _dashed_attribute;
};
```

The list may contain one, two, or three names, depending on the number of names that the property generates. For example:

- The `width` property only generates a `width` IDL attribute.
- The `white-space` property generates `white-space` and `whiteSpace` IDL attributes.
- The legacy `-webkit-align-content` property generates `-webkit-align-content`, `WebkitAlignContent`, `webkitAlignContent` IDL attributes.

#### `syntax`

Most CSS features have a `syntax` key that contains a string that describes the formal syntax of the feature, as defined in the spec. For properties, this syntax maps to the [Value](https://www.w3.org/TR/CSS2/about.html#value-defs) part of the CSS property definition.

*Note:* The syntax aligns with the spec and does not include historical values and proprietary extensions that browsers may support.

Patches are applied to the values extracted from the specs to guarantee that the value of a `syntax` key can always be parsed with the [CSSTree Value Definition Syntax parser](https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md#value-definition-syntax). Example:

```js
import css from '@webref/css';
import { definitionSyntax } from 'css-tree';

const { properties } = await css.index();
const ast = definitionSyntax.parse(properties['flex'].syntax);
// do something with the abstract syntax tree
```

When a property is extended with new values in different specs, the `syntax` key contains the union (using `|`) of the syntaxes of the base and extended definitions.For example, the syntax (as of March 2026) of the `top` property is `auto | <length-percentage> | <anchor()> | <anchor-size()>`, noting that the former part of the syntax comes from [CSS Position](https://drafts.csswg.org/css-position-3/#propdef-top) while the latter part comes from [CSS Anchor Positioning](https://drafts.csswg.org/css-anchor-position-1/#anchor-pos).

*Note:* There is no guarantee that functions, properties and types referenced in the syntax actually exists. The grammar is known to be incomplete.

#### `type`

The `type` key is only set for properties, when value is not empty. It maps to the [Media feature type](https://www.w3.org/TR/mediaqueries/#mq-ranges) part of a CSS property definition. Value should be one of `discrete` or `range`, but data may contain additional values depending on what specs actually define.


## Migrating from `mdn/data`

The structure of the consolidated list of CSS features aligns with CSS data in [`mdn/data`](https://github.com/mdn/data). If you use the `index()` method, the `@webref/css` package can *almost* serve as a drop-in replacement for the `mdn/data` package **for syntaxes**, with the following structural nuances:

- `mdn/data` reports at-rules under an `atRules` key. `@webref/css` reports them under an `atrules` key.
- `mdn/data` stores syntaxes of functions and types under a separate `syntaxes` key. `@webref/css` stores them in their feature definition. If you need to reproduce the `syntaxes` list, merge the entries under `functions` and `types`.
- `mdn/data` assumes all features are unscoped. `@webref/css` reports scopes where needed in a `for` key. Note that a few functions have a different syntax depending on the scope under which they are used.
- `@webref/css` does not contain information about CSS units.

Beyond structural nuances, differences in content may also affect transition:
- `mdn/data` contains deprecated features, proprietary features or feature variants that are not defined in specs. `@webref/css` only contains features defined in specs.
- `mdn/data` describes features as implemented in main browsers. `@webref/css` "lives on the edge", listing features and syntaxes from latest levels of CSS specs, regardless of the spec's maturity level and support across browsers.
- `mdn/data` turns specs prose into syntax when needed, `@webref/css` only has syntaxes that are explicitly defined in specs. It should be possible to improve the specs, consider submitting missing syntax reports (against the specs themselves if possible, in [Webref](https://github.com/w3c/webref/issues) otherwise).


## Guarantees

The following guarantees are provided by this package:
- All syntax values (the `syntax` keys) can be parsed by the version of [CSSTree](https://github.com/csstree/csstree) set in `peerDependencies` in `package.json`.
- Feature names (the `name` keys) are unique per type provided that the `for` key is also taken into account for functions and types.
- CSS features targeted by `for`, `legacyAliasOf`, `longhands` and `resetLonghands` keys are guaranteed to exist in the package.
- All features have an `href` key that targets the CSS spec that defines the feature. When the feature is extended across CSS specs, this URL targets the base definition.
- All URLs (without fragment) that appear in `href` and `extended` keys are guaranteed to exist in the version of [`web-specs`](https://www.npmjs.com/package/web-specs) that was used to identify the specs to extract data from. The exact version that was used is not yet surfaced in the data though. In most cases, it should be the latest published version at the time when the data is released.

There is **no** guarantee that:
- Functions, properties and types referenced by other constructs actually exist. The grammar is known to be incomplete.
- Key values can be parsed with a formal grammar or map to a closed set of values, except for `styleDeclaration` and `syntax` key values.