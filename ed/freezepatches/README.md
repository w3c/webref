# Freeze patches

These are patches applied to specs to freeze all the extracts for that spec to a past result, identified by a commit ID.

Each patch should be a JSON file named after the spec's shortname that defines a JSON object with two keys:

- `commit`: The full commit ID in Webref that identifies the crawl results to use for the spec.
- `pending`: The URL of an issue that tracks the problem. This allows to detect when the patch is no longer needed.
