# Events of the Web platform and associated Web IDL interfaces

This package contains a consolidated list of events defined across specs, scraped from the latest versions of web platform specifications in [webref](https://github.com/w3c/webref), along with the name of the Web IDL interfaces that these events use and target. Fixes are applied to ensure that [guarantees](#guarantees) hold.


# API

The async `listAll()` method resolves with a list of events. Example:

```js
const events = require('@webref/events');

events.listAll().then(all => {
  for (const event of all) {
    // do something with the json object that describes the event
  }
});
```

Each event is described by an object that has a `type` property that contains the name of the event, an `interface` property that describes the IDL interface used by the event, a `targets` property that lists the target interfaces on which the event may fire (each target being an object with a `target` property that gives the interface name, and optionally a `bubbles` property when the interface belongs to a bubbling tree to assert whether the event bubbles). The object may also contain a `href` property that is a URL to the event definition in a spec, and an `src` property that describes where the extraction first detected that the event is fired in the spec:

```js
const events = require('@webref/events');

events.listAll().then(all => {
  for (const event of all) {
    console.log();
    console.log(`Event type=${event.type}
      interface=${event.interface}
      targets=${event.targets
        .map(t => t.target +
          (t.bubbles === undefined ? '' : ` (bubbles: ${t.bubbles})`))
        .join(', ')}`);
  }
});
```

# Guarantees

The following guarantees are provided by this package:
- All events have a `type` attribute that match the name of the event
- All events have a `interface` attribute to describe the interface used by the Event. The Web IDL interface exists in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released, and represents an actual interface (i.e. not a mixin).
- All events have a `targets` attribute with a non-empty list of target interfaces on which the event may fire. All Web IDL interfaces in the list exist in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released, and represent an actual interface (i.e. not a mixin).
- The `bubbles` attribute is always set to a boolean value for target interfaces that belong to a bubbling tree (DOM, IndexedDB, Serial API, Web Bluetooth).
- The `bubbles` attribute is not set for target interface that do not belong to a bubbling tree.
- The `targets` attribute contains the top most interfaces in an inheritance chain, unless bubbling conditions differ. For instance, the list may contain `{ "target": "Element", "bubbles": true }` but not also `{ "target": "HTMLElement", "bubbles": true }` since `HTMLElement` inherits from `Element`.
- For target interfaces that belong to a bubbling tree, the `targets` attribute only contains the deepest interface in the bubbling tree on which the event may fire and bubble. For instance, the list may contain `{ "target": "HTMLElement", "bubbles": true }`, but not also `{ "target": "Document" }` since event would de facto fire at `Document` through bubbling.
