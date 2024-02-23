# Markup elements of the Web platform and associated Web IDL interfaces

This package contains a list per spec of markup elements that compose the Web platform, scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref), along with the name of the Web IDL interface that these elements implement. Fixes are applied to ensure that [guarantees](#guarantees).


# API

The async `listAll()` method resolves with an object where the keys are spec shortnames, and the values are the data for that spec. Example:

```js
const elements = require('@webref/elements');

elements.listAll().then(all => {
  for (const [shortname, data] of Object.entries(all)) {
    // do something with the json object
  }
});
```

For each spec, value is an object with a `spec` property that describes the specification, and an `elements` property that lists elements defined in the spec, as an array of objects with `name`, `interface`, `href`, and `obsolete` properties. The `interface` property is not present for elements that do not implement an interface:

```js
const elements = require('@webref/elements');

elements.listAll().then(all => {
  for (const [shortname, data] of Object.entries(all)) {
    console.log();
    console.log(data.spec.title);
    for (const el of data.elements) {
      if (el.interface) {
        console.log(`- ${el.name} implements ${el.interface}`);
      }
      else {
        console.log(`- ${el.name} does not implement an interface`);
      }
    }
  }
});
```

The `href` property is the URL to the definition of the element in the specification. The property is always set.

The `obsolete` property is a boolean flag, only present (and set to `true`) for elements that are obsolete.


# Guarantees

The following guarantees are provided by this package:
- All Web IDL interfaces exist in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/elements` package is released.
- All elements link back to their definition in the spec.
