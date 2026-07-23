## Proposed approach for per-spec back references

Draft for https://github.com/w3c/webref/issues/1934 — implemented in this PR for review.

### Goal

For each term a specification **defines**, list the other specifications that **reference** it (the Streams editor use case from https://github.com/whatwg/streams/pull/1369#issuecomment-4291574446).

### Scope (v1)

- Public `dfns` only (`access !== "private"`, skip `type === "argument"`), matching [Webdex](https://github.com/dontcallmedom/webdex/blob/main/_tools/generate-pages.js).
- Nightly / curated `ed` data only.
- Only terms with ≥1 **external** referrer (self-references excluded).
- Derived curated view (`tools/prepare-backrefs.js`), not a Reffy crawl extract.
- Deferred: all IDs / headings; NPM package; TR.

### Schema

`ed/backrefs/[shortname].json` on the curated branch:

```json
{
  "spec": { "title": "Streams Standard", "url": "https://streams.spec.whatwg.org/" },
  "backrefs": [
    {
      "id": "readablestream",
      "href": "https://streams.spec.whatwg.org/#readablestream",
      "linkingText": ["ReadableStream"],
      "type": "interface",
      "referencedBy": [
        { "shortname": "fetch", "title": "Fetch Standard", "url": "https://fetch.spec.whatwg.org/" }
      ]
    }
  ]
}
```

### Algorithm

1. Index public dfns by `href` (plus HTML/ES multipage ↔ single-page aliases).
2. Expand each referring spec’s `links` (`rawlinks` + `autolinks`) into `url#anchor` values.
3. Match fragment URLs to dfns; accumulate referrers per defining term.
4. Write one file per defining spec that has at least one referenced term; point `index.json` at it.

Feedback welcome on folder name, `referencedBy` payload, and whether this should eventually move into Reffy as a `post` module.
