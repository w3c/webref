# Definitions of the web platform for cross-references purpose

This package contains all definitions and headings found in the latest versions of web platform specifications in [webref](https://github.com/w3c/webref) at the time of publication.

A new version of the package is published automatically on a weekly basis, unless no updates were found in specifications. The data is provided as-is without particular guarantees on top of structural data consistency.


## Usage

Two sync methods are exposed:

- `setup()`. The function loads all dfns and headings extracts per spec present in the package. The function should be called once (package contains ~100MB of data).
- `lookup()`. The function looks up a URL with fragment in the loaded data. It returns an array of matches, or an empty array if no match could be found. The `setup()` function must have been called before that function may be used.

Example:

```js
import * as xref from '@webref/xref';

xref.setup();

// A dfn, a dev link, a heading, an alternate heading URL, a dfn using a
// release URL and an invalid fragment
const urls = [
  'https://html.spec.whatwg.org/multipage/webappapis.html#event-loop',
  'https://html.spec.whatwg.org/multipage/introduction.html#typographic-conventions%3Ax-that',
  'https://compat.spec.whatwg.org/#css-at-rules',
  'https://drafts.csswg.org/css-ui-4/#contents',
  'https://www.w3.org/TR/webcodecs/#videodecoder',
  'https://compat.spec.whatwg.org/#idontexist'
];

for (const url of urls) {
  const res = xref.lookup(url);
  console.log(JSON.stringify(res, null, 2));
}
```

*Note:* The function returns an array because the same URL may be used for a dfn and a heading.

The `lookup()` function takes the URL to search for as first parameter. It also accepts a [lookup options](#lookup-options) object as second parameter.

### Lookup options

*Note:* Lookup options apply as a logical AND when combined.

#### `series` option

By default, the `lookup()` function assumes that the provided URL uses the nightly or release URL of a spec. Set the `series` boolean flag to find definitions and headings that match a URL that uses the [series](https://github.com/w3c/browser-specs/#series) URL of a spec.

Internally, the series URL gets converted to the nightly or release URL of the spec known to be the [current spec](https://github.com/w3c/browser-specs/#seriescurrentspecification) in the series.

```js
import * as xref from '@webref/xref';
xref.setup();

// URL that targets the CSS Paged Media Module series
const url = 'https://www.w3.org/TR/css-page/#page-selector';

// Default lookup won't return anything
const notfound = xref.lookup(url);

// With the `series` flag, lookup will convert the series
// URL to the URL of the current spec in the series. As of
// May 2026, the current spec in the css-page series is
// css-page-3. Returned dfn will have the URL:
// https://www.w3.org/TR/css-page-3/#page-selector
const found = xref.lookup(url, { series: true });
```

*Note:* The flag may be set even when the provided URL is not a series URL, lookup will just proceed as usual in this case.

#### `standing` option

The cross-references database contains definitions and headings from all crawled specs. The list of crawled specs in Webref matches the list of specs in [`browser-specs`](https://github.com/w3c/browser-specs) whose [`standing`](https://github.com/w3c/browser-specs/#standing) property is `"good"` or `"pending"`. For historical reasons, the list also include a few specific specs whose standing is `"discontinued"` (such as the DOM Level 2 Style spec).

Set the `standing` option to one of the possible standing values to only keep results from specs whose standing match the specified one.

```js
import * as xref from '@webref/xref';
xref.setup();

// As of May 2026, the Direct Sockets proposal is "pending"
const url = 'https://wicg.github.io/direct-sockets/#dfn-readable';

// Default lookup will return a dfn
const found = xref.lookup(url);

// No result if lookup is restricted to specs in good standing
const notfound = xref.lookup(url, { standing: 'good' });
```

#### `version` option

The cross-references database contains definitions and headings from both nightly and release versions of the specs.

Set the `version` option to one of `"nightly"` or `"release"` to only return results from the underlying version of a spec.

```js
import * as xref from '@webref/xref';
xref.setup();

// A URL that targets the release version of a spec
const url = 'https://www.w3.org/TR/css-page-3/#page-selector';

// Default lookup will return a dfn
const found = xref.lookup(url);

// No result if lookup is restricted to nightly versions
const notfound = xref.lookup(url, { version: 'nightly' });

// Note: This option is a convenience method for the
// following, which achieves the exact same thing
const same = xref.lookup(url)
  .filter(match => match.entry.version === 'nightly');
```

## Lookup matches

A match returned by the `lookup()` function is an object with two keys: `source` and `entry`.

### `source`

The `source` key describes where the match was found. It can take one of the following values:

- `"dfns"`: A matching definition was found. The value of the [`entry`](#entry) key is a [definition](#definitions) object.
- `"headings"`: A matching heading was found. The value of the [`entry`](#entry) key is a [heading](#headings) object.

### `entry`

The `entry` key describes the matching entry. It is either a [definition](#definitions) object or a [heading](#headings) object, depending on the value of the [`source`](#source) key.

#### Definitions

A definition represents a term explicitly defined in a specification through a `<dfn>` element.

The following keys are always set for definitions:
- [`id`](#id)
- [`href`](#href)
- [`linkingText`](#linkingtext)
- [`localLinkingText`](#locallinkingtext)
- [`type`](#type)
- [`for`](#for)
- [`access`](#access)
- [`informative`](#informative)
- [`heading`](#heading)
- [`definedIn`](#definedin)
- [`spec`](#spec)
- [`version`](#version)

The following keys may be set for definitions:
- [`links`](#links)
- [`htmlProse`](#htmlprose)

#### Headings

A heading represents the title of a section in a specification.

The following keys are always set for headings:
- [`id`](#id)
- [`href`](#href)
- [`title`](#title)
- [`level`](#level)
- [`spec`](#spec)
- [`version`](#version)

The following keys may be set for headings:
- [`number`](#number)
- [`alternateIds`](#alternateids)

## Entry keys

### `access`

One of `"private"` to indicate that a definition is intended for internal usage and reference within the spec itself, or `"public"` to indicate that the definition is exported and intended to be referenced from external documents.

### `alternateIds`

An array of local IDs that may also be used to target the heading in the DOM. This property is used to capture the cases where a section (e.g., a `<section>` element) and its underlying heading (e.g., a `<h3>` element) both define an ID, and when both IDs may be used to target the heading.

### `definedIn`

An indication of where the definition appears in the spec. Value can be one of `"dt"`, `"pre"`, `"table"`, `"heading"`, `"note"`, `"example"`, or `"prose"` (last one indicates that the definition appears in the main body of the spec).

### `for`

A possibly empty array of strings that represents the list of namespaces for a definition. See also [Namespacing](https://github.com/speced/spec-dfn-contract#namespacing-data-dfn-for) in the definitions contract.

### `heading`

Heading under which the term is defined. Value is a [heading](#headings) object.

### `href`

The absolute URL to the element. The value is unique across definitions, and unique across headings. A definition and a heading may share the same URL.

### `htmlProse`

A string that contains an HTML excerpt and describes the meaning of a definition. This property is only set for specs that explicitly flag definitions accordingly (using `data-defines` attributes).

### `id`

The local ID of the element in the DOM. The value is unique across definitions within a single spec page, and unique across headings within a single spec page. A definition and a heading may share the same ID.

### `informative`

A boolean flag set to `true` when the underlying definition appears in a non-normative section of a spec. The flag is set to `false` when the definition appears in a normative section.

### `level`

A number that represents the outline level of a heading in the spec. The main spec's title is at level 1.

### `linkingText`

An array of strings that represents the list of linking texts for a definition. See also [Linking text](https://github.com/speced/spec-dfn-contract#linking-text-data-lt) in the definitions contract.

### `links`

An array of interesting links with IDs that complete the definitions, notably non-normative descriptions that target web developers. Each entry is an object with the following keys:

- [`id`](#id)
- [`href`](#href)
- `type`: the type of link. `"dev"` is the only possible value for now, but the list may evolve over time.
- `name`: A string that represents the link's text content.

### `localLinkingText`

Additional [linking text](#linkingtext) can be used for local references.

### `number`

A *string* (despite the name) that describes the heading's number. For example, `"3.2.1"`. Value may contain arbitrary characters depending on the numbering scheme, and typically contains letters for appendices, such as `"C.1"`.

### `spec`

The shortname of the spec that contains the definition or heading.

### `title`

The heading's raw title as a string, excluding the section's number.

### `type`

A string that describes the type of a definition. See also [Types of definitions](https://github.com/speced/spec-dfn-contract#types-of-definitions-data-dfn-type) in the definitions contract for possible values, but note that new definition types may be introduced at any time.

### `version`

One of `"nightly"` or `"release"` to indicate the version of the spec that contains the definition or heading.

## Restrictions

- The `lookup()` function is mainly targeted at validating URLs with fragments. The function could get extended over time to support looking up actual terms and to offer additional lookup options. For example, to ease de-duplication, to only return definitions of a specific type, to only return exported definitions, etc.
- The `lookup()` function expects the caller to have used the nightly or release URL of the spec as defined in the `nightly.url` or `release.url` property in [`browser-specs`](https://github.com/w3c/browser-specs). Additional logic is needed to handle lookups of URLs that use, e.g., the series URL, or an alternate URL.
- The functions load but do not expose the database. The data appears in standalone JSON files within the package. These files may be parsed as JSON in any programming language if needed.
- No attempt has been made at optimizing the structure and memory consumption for now.

Please report any need you may have by [creating an issue on the `w3c/webref` GitHub repository](https://github.com/w3c/webref/issues).
