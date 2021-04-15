# Webref

This repository contains **machine-readable references of CSS properties, definitions, IDL, and other useful terms that can be automatically extracted from web browser specifications**. The contents of the repository are updated automatically **every 6 hours** (although note information about published _[/TR/](https://www.w3.org/TR/)_ versions of specifications are updated only once per week). Subsets of that content are published as NPM [packages](https://github.com/w3c/webref/tree/master/packages), [@webref/idl](https://www.npmjs.com/package/@webref/idl) and [@webref/css](https://www.npmjs.com/package/@webref/css), updated on a weekly basis when the underlying content has changed.

Specifications covered by this repository are technical Web specifications that are directly implemented or that will be implemented by Web browsers; in other words, those that appear in [browser-specs](https://github.com/w3c/browser-specs).

This repository contains information about latest Editor's Drafts of these specifications in the [ed](ed) folder, as well as about the latest published version (for _[/TR/](https://www.w3.org/TR/)_ specifications) in the [tr](tr) folder.

The following subfolders contain individual machine-readable JSON or text files generated for each specification:

- [ed/css](ed/css) and [tr/css](tr/css): CSS terms (properties, descriptors, value spaces). One file per specification [series](https://github.com/w3c/browser-specs/#series).
- [ed/dfns](ed/dfns) and [tr/dfns](tr/dfns): `<dfn>` terms, along with metadata such as linking text, access level, namespace. One file per specification.
- [ed/headings](ed/headings) and [tr/headings](tr/headings): Section headings. One file per specification.
- [ed/idl](ed/idl) and [tr/idl](tr/idl): Raw WebIDL index. One file per specification [series](https://github.com/w3c/browser-specs/#series).
- [ed/idlparsed](ed/idlparsed) and [tr/idlparsed](tr/idlparsed): Parsed WebIDL. One file per specification.
- [ed/links](ed/links) and [tr/links](tr/links): Links to other documents, along with targeted fragments. One file per specification.
- [ed/refs](ed/refs) and [tr/refs](tr/refs): Normative and informative references to other specifications. One file per specification.

Individual files are named after the shortname of the specification, or after the shortname of the specification series for CSS definitions and raw IDL files. Individual files are only created when needed, meaning when the specification actually includes relevant terms.

The [ed/index.json](ed/index.json) and [tr/index.json](tr/index.json) files contain the index of specifications that have been crawled, and relative links to individual files that have been created.

This repository uses [Reffy](https://github.com/w3c/reffy), a Web spec exploration tool, to crawl the specifications and generate the data. In particular, the data it contains is the result of running Reffy. The repository does not contain any more data.

Raw WebIDL extracts are used in [web-platform-tests](https://github.com/web-platform-tests/wpt), please see their [interfaces/README.md](https://github.com/web-platform-tests/wpt/blob/master/interfaces/README.md) for details.


## Potential spec anomalies

On top of data extracted from the specifications, this repository also contains [analyses of potential anomalies](https://w3c.github.io/webref) that specifications may have, such as missing references and invalid WebIDL definitions. Anomaly reports may contain false positives.


## How to suggest changes or report an error

Feel free to raise [issues in this repository](https://github.com/w3c/webref/issues) as needed. Note that most issues likely more directly apply to underlying tools:

- Errors in the data are most likely caused by bugs or missing features in [Reffy](https://github.com/w3c/reffy), which is the tool that crawls and parses specifications under the hoods. If you spot an error, please report it in [Reffy's issue tracker](https://github.com/w3c/reffy/issues/new).
- If you believe that a spec is missing from the list, please check [browser-specs](https://github.com/w3c/browser-specs/#how-to-addupdatedelete-a-spec) and report it [there](https://github.com/w3c/browser-specs/issues/new).


## Development notes

- The huge (~27MB) `ed/crawl.json` and `tr/crawl.json` files are still generated but do not contain more info than `index.json` and individual files per specification. They should be considered obsolete and will be dropped from the repository in the future.
- Data update tasks are defined as GitHub Actions. A typical crawl takes about **10mn** to complete. Tasks fail from time to time due to network glitches or temporarily unreachable specs. Well, they also fail from time to time due to bugs, of course...
