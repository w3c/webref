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
- All events have a `type` attribute that match the name of the event
- All events have a `interface` attribute to describe the interface used by the Event. The Web IDL interface exists in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released, and represents an actual interface (i.e. not a mixin).
- All events have a `targets` attribute with a non-empty list of target interfaces on which the event may fire. All Web IDL interfaces in the list exist in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released, and represent an actual interface (i.e. not a mixin).
- The `bubbles` attribute is always set for events that can fire at interfaces linked to a tree (DOM, IndexedDB, Web Bluetooth).
- The `bubbles` attribute is not set otherwise.
