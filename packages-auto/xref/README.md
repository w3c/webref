# Definitions of the web platform for cross-references purpose

This package contains all definitions and headings found in the latest versions of web platform specifications in [webref](https://github.com/w3c/webref) at the time of publication.

A new version of the package is published automatically on a weekly basis, unless no updates were found in specifications. The data is provided as-is without particular guarantees on top of structural data consistency.


## Usage

Two sync methods are exposed:

- `setup()`. The function loads all dfns and headings extracts per spec present in the package. The function should be called once (package contains ~50MB of data).
- `lookup()`. The function looks up a URL with fragment in the loaded data. It returns an array of matches, or an empty array if no match could be found. The `setup()` function must have been called before that function may be used.

A match returned by the `lookup()` function is an object with `source` and `entry` keys. The `source` key can take one of the following values:
- `"dfns"`: the `entry` key represents a dfn object. Same structure as in any Webref dfn extract, with an additional `spec` key that contains the shortname of the spec.
- `"links"`: the `entry` key also represents a dfn object. The match is with one of the (developer) links associated with the definition.
- `"headings"`: the `entry` key represents a heading object. Same structure as in any Webref dfn extract, with an additional `spec` key that contains the shortname of the spec.
- `"alternateIds"`: the `entry` key also represents a heading object. The match is on one of the alternative URLs associated with the heading.

Example:

```js
import xref from '@webref/xref';

xref.setup();

// A dfn, a dev link, a heading, an alternate heading URL, and an invalid
// fragment
const urls = [
  'https://html.spec.whatwg.org/multipage/webappapis.html#event-loop',
  'https://html.spec.whatwg.org/multipage/introduction.html#typographic-conventions%3Ax-that',
  'https://compat.spec.whatwg.org/#css-at-rules',
  'https://drafts.csswg.org/css-ui-4/#contents',
  'https://compat.spec.whatwg.org/#idontexist'
];

for (const url of urls) {
  const res = xref.lookup(url);
  console.log(JSON.stringify(res, null, 2));
}
```

*Note:* The function returns an array because the same URL may be used for a dfn and a heading.

## Restrictions

- The `lookup()` function is mainly targeted at validating URLs with fragments. The function could get extended over time to support looking up actual terms and to offer additional lookup options. For example, to ease de-duplication, to only return definitions of a specific type, to only return exported definitions, etc.
- The database only includes data from the [nightly](https://github.com/w3c/browser-specs/#nightly) versions of the specs. Data from the [release](https://github.com/w3c/browser-specs/#release) versions of the specs could be added over time.
- The `lookup()` function expects the caller to have used the nightly URL of the spec as defined in the `nightly.url` property in [`browser-specs`](https://github.com/w3c/browser-specs). Additional logic is needed to handle lookups of URLs that use, e.g., the series URL, or an alternate URL.
- The functions load but do not expose the database. The data appears in standalone JSON files within the package. These files may be parsed as JSON in any programming language if needed.
- No attempt has been made at optimizing the structure and memory consumption.

Please report any need you may have by [creating an issue on the `w3c/webref` GitHub repository](https://github.com/w3c/webref/issues).
