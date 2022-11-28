# CSS definitions of the web platform

This package contains CSS property definitions scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref), with fixes applied to ensure ([almost](#guarantees)) all CSS value definitions can be parsed with [CSSTree](https://github.com/csstree/csstree).

# API

The async `listAll()` method resolves with an object where the keys are spec shortnames, and the values are the data for that spec. Example:

```js
const css = require('@webref/css');

const parsedFiles = await css.listAll();
for (const [shortname, data] of Object.entries(parsedFiles)) {
  // do something with the json object
}
```

CSS fragments that appear in the objects, in other words the contents of the `properties[].value`, `properties[].newValues`, `atrules[].value`, `atrules[].descriptors[].value`, `selectors[].value` and `values[].value` properties can be parsed with the [CSSTree Value Definition Syntax parser](https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md#value-definition-syntax). Example:

```js
const css = require('@webref/css');
const { definitionSyntax } = require('css-tree');

const parsedFiles = await css.listAll();
for (const [shortname, data] of Object.entries(parsedFiles)) {
  for (const property of data.properties) {
    if (property.value) {
      try {
        const ast = definitionSyntax.parse(property.value);
        // do something with the ast
      }
      catch {
        // one of the few value definitions that cannot yet be parsed by CSSTree
      }
    }
  }
}
```

# Guarantees

The following guarantees are provided by this package:
- All values in CSS files can be parsed by the version of [CSSTree](https://github.com/csstree/csstree) used in `peerDependencies` in `package.json`.
- No duplicate definitions of CSS properties provided that CSS extracts of [delta specs](https://github.com/w3c/browser-specs/#seriescomposition) are not taken into account (such extracts end with `-n.json`, where `n` is a level number).
- CSS extracts contain a base definition of all CSS properties that get extended by other CSS property definitions (those for which `newValues` is set).
