# CSS patches

These are patches applied to the CSS extracts scraped from specs to produce the `@webref/css` package. These patches can break as specs are updated and thus need ongoing maintenance.

For details on how to create and update patches, please see the [Web IDL patches documentation](../idlpatches/README.md).

Note that Webref has two additional mechanisms to patch CSS data:
- The [`tools/drop-css-property-duplicates.js`](../../tools/drop-css-property-duplicates.js) script drops duplicates for situations where definition in one spec is known to override the same definition in another spec.
- The [`tools/amend-css-syntaxes.js`](../../tools/amend-css-syntaxes.js) script adds syntaxes of CSS constructs in situations where the spec details a syntax in non-machine-readable prose, e.g., because the syntax needs to be derived from a list of values.
