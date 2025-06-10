# CSS definitions of the web platform

This package contains a consolidated list of CSS features defined across specs, scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref). Fixes are applied to ensure that [guarantees](#guarantees) hold, including the ability to parse syntaxes associated with CSS features with [CSSTree](https://github.com/csstree/csstree).

**Important:** If you're migrating from version 6, see the [changelog](CHANGELOG.md) for "How to upgrade" considerations.

# API

The async `listAll()` method resolves with an object that contains lists of features grouped by feature type: `atrules`, `functions`, `properties`, `selectors` and `types`. Example:

```js
const css = require('@webref/css');

const { atrules, functions, properties, selectors, types } = await css.listAll();

for (const feature of functions) {
  // do something with the object that describes the CSS function
}
```

Each CSS feature is described by:
- a `name` key that contains the name of the feature
- an `href` key that contains the URL (with a fragment) of the CSS spec that defines the feature

Many CSS features also have a `value` key that describes the syntax of the feature, as defined in the spec. This syntax can be parsed with the [CSSTree Value Definition Syntax parser](https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md#value-definition-syntax). Example:

```js
const css = require('@webref/css');
const { definitionSyntax } = require('css-tree');

const { properties } = await css.listAll();
for (const property of properties) {
  if (!property.value) {
    continue;
  }
  const ast = definitionSyntax.parse(property.value);
  // do something with the abstract syntax tree
}
```

Additional keys may be set depending on the type of the CSS feature. For example:

- At-rules have a `descriptors` key that contains the list of descriptors defined for the given at-rule.
- Functions and types that are scoped to a property or other feature have a `for` key that contains the name of the scoping property or other feature.
- Properties have a `styleDeclaration` key that contains the list of IDL attribute names that the property generates. A number of other keys may be set to describe the property's initial value, animation type and other parameters.

Additional notes:
- Type names are enclosed in `<>`. For example: `<frequency-percentage>`.
- When a feature is defined across different levels in the same spec series, the definition from the latest level is used.
- When a property is extended with new values in different specs, `href` links to the base definition and `value` is the union (using `|`) of the syntaxes of the base and extended definitions.
- When new descriptors are defined for an at-rule in different specs, `descriptors` contains the merged list of known descriptors.
- When specs define the syntax of an at-rule in terms of `<declaration-list>` or `<declaration-rule-list>`, the `value` key contains an "expanded" syntax that leverages the syntax of the at-rule's descriptors.

# Guarantees

The following guarantees are provided by this package:
- All syntax values (the `value` keys) can be parsed by the version of [CSSTree](https://github.com/csstree/csstree) set in `peerDependencies` in `package.json`.
- Feature names (the `name` keys) are unique per type provided that the `for` key is also taken into account for functions and types.
- All features have an `href` key that targets the CSS spec that defines the feature. When the feature is extended across CSS specs, this URL targets the base definition.

*Note:* there is no guarantee that functions, properties and types referenced by other constructs actually exist. The grammar is known to be incomplete.