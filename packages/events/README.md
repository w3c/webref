# Events of the Web platform and associated Web IDL interfaces

This package contains a list per spec of events that the spec defines, scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref), along with the name of the Web IDL interfaces that these events use and target. Fixes are applied to ensure that some [guarantees](#guarantees) hold.


# API

The async `listAll()` method resolves with an object where the keys are spec shortnames, and the values are the data for that spec. Example:

```js
const events = require('@webref/events');

events.listAll().then(all => {
  for (const [shortname, data] of Object.entries(all)) {
    // do something with the json object
  }
});
```

For each spec, value is an object with a `spec` property that describes the specification, and an `events` property that lists events defined in the spec, as an array of objects with `type`, `interface` and `target` properties:

```js
const events = require('@webref/events');

events.listAll().then(all => {
  for (const [shortname, data] of Object.entries(all)) {
    console.log();
    console.log(data.spec.title);
    for (const el of data.events) {
      console.log(`- ${el.name} defines a ${el.type} event`);
    }
  }
});
```

# Guarantees

The following guarantees are provided by this package:
- All events have a `type` attribute
- All Web IDL intefaces in `interface` attributes exist in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released.
- All Web IDL interfaces in `target` attributes exist in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released.
