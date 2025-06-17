# CSS definitions of the web platform

This package contains a consolidated list of CSS features defined across specs, scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref). Fixes are applied to ensure that [guarantees](#guarantees) hold, including the ability to parse syntaxes associated with CSS features with [CSSTree](https://github.com/csstree/csstree).

**Important:** If you're migrating from version 6, see the [changelog](https://github.com/w3c/webref/blob/main/packages/css/CHANGELOG.md) for "How to upgrade" considerations.

# API

Two async methods are exposed: `listAll()` and `index()`. They both resolve with an object that lists CSS features by feature type: `atrules`, `functions`, `properties`, `selectors` and `types`.

The difference between the two functions is that, under each feature type, `listAll()` returns an array of features, whereas `index()` returns an object indexed by feature name to ease direct lookups (and [transition from `mdn/data`](#transition-from-mdndata). Both functions return the same features.

Example using `listAll()`:

```js
const css = require('@webref/css');

const { atrules, functions, properties, selectors, types } = await css.listAll();

for (const feature of functions) {
  // do something with the object that describes the CSS function
}
```

Example using `index()`:

```js
const css = require('@webref/css');

const { atrules, functions, properties, selectors, types } = await css.index();

// Do something with the object that describes the abs() function
const abs = functions['abs()'];
```

Each CSS feature is described by:
- a `name` key that contains the name of the feature
- an `href` key that contains the URL (with a fragment) of the CSS spec that defines the feature

Many CSS features also have a `syntax` key that describes the syntax of the feature, as defined in the spec. This syntax can be parsed with the [CSSTree Value Definition Syntax parser](https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md#value-definition-syntax). Example:

```js
const css = require('@webref/css');
const { definitionSyntax } = require('css-tree');

const { properties } = await css.index();
const ast = definitionSyntax.parse(properties['flex'].syntax);
// do something with the abstract syntax tree
```

Additional keys may be set depending on the type of the CSS feature. For example:

- At-rules have a `descriptors` key that contains the list of descriptors defined for the given at-rule.
- Functions and types that are scoped to a property or other feature have a `for` key that contains the list of scoping features for that feature. A scoping feature may be a property, a function or a type. When the scoping feature is a type, its name in the `for` key is enclosed between `<` and `>`.
- Properties have a `styleDeclaration` key that contains the list of IDL attribute names that the property generates. A number of other keys may be set to describe the property's initial value, animation type and other parameters.

Additional notes:
- Features returned by `index()` are indexed by their feature name, but there are exceptional cases where a given feature is defined differently (with a different syntax) for different scopes. In such cases the feature is indexed by its name completed with ` for ` and the name of the first scoping feature to which the definition applies. For example, `type() for @function`, `type() for attr()`. As of June 2025, this affects a handful of functions and types.
- When a feature is defined across different levels in the same spec series, the definition from the latest level is used.
- When a property is extended with new values in different specs, `href` links to the base definition and `syntax` is the union (using `|`) of the syntaxes of the base and extended definitions.
- When new descriptors are defined for an at-rule in different specs, `descriptors` contains the merged list of known descriptors.
- When specs define the syntax of an at-rule in terms of `<declaration-list>` or `<declaration-rule-list>`, the `syntax` key contains an "expanded" syntax that leverages the syntax of the at-rule's descriptors.

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


# Guarantees

The following guarantees are provided by this package:
- All syntax values (the `syntax` keys) can be parsed by the version of [CSSTree](https://github.com/csstree/csstree) set in `peerDependencies` in `package.json`.
- Feature names (the `name` keys) are unique per type provided that the `for` key is also taken into account for functions and types.
- All features have an `href` key that targets the CSS spec that defines the feature. When the feature is extended across CSS specs, this URL targets the base definition.

*Note:* there is no guarantee that functions, properties and types referenced by other constructs actually exist. The grammar is known to be incomplete.