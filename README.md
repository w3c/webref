# Webref

This repository contains **machine-readable references of CSS properties, definitions, IDL, and other useful terms that can be automatically extracted from web browser specifications**. The contents of the repository are updated automatically **every 6 hours** (although note information about published _[/TR/](https://www.w3.org/TR/)_ versions of specifications are updated only once per week). Subsets of that content are published as NPM [packages](https://github.com/w3c/webref/tree/master/packages), [@webref/idl](https://www.npmjs.com/package/@webref/idl), [@webref/css](https://www.npmjs.com/package/@webref/css) and [@webref/elements](https://www.npmjs.com/package/@webref/elements), updated on a weekly basis when the underlying content has changed.

Specifications covered by this repository are technical Web specifications that are directly implemented or that will be implemented by Web browsers; in other words, those that appear in [browser-specs](https://github.com/w3c/browser-specs).

This repository contains information about latest Editor's Drafts of these specifications in the [ed](ed) folder, as well as about the latest published version (for _[/TR/](https://www.w3.org/TR/)_ specifications) in the [tr](tr) folder.

The following subfolders contain individual machine-readable JSON or text files generated for each specification:

- [ed/css](ed/css) and [tr/css](tr/css): CSS terms (properties, descriptors, value spaces). One file per specification [series](https://github.com/w3c/browser-specs/#series).
- [ed/dfns](ed/dfns) and [tr/dfns](tr/dfns): `<dfn>` terms, along with metadata such as linking text, access level, namespace. One file per specification.
- [ed/elements](ed/elements) and [tr/elements](tr/elements): Markup elements defined, along with the interface that they implement. One file per specification.
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

GitHub Actions workflows are used to automate most of the tasks in this repo.

### Data update

- [Update ED report](https://github.com/w3c/webref/actions/workflows/update-ed.yml) - crawls the latest version of Editor's Drafts and updates the contents of the [`ed`](ed) folder. Workflow runs every 6 hours. A typical crawl takes about **10mn** to complete.
- [Update TR report](https://github.com/w3c/webref/actions/workflows/update-tr.yml) - crawls the published version of Editor's Drafts and updates the contents of the [`tr`](tr) folder. Workflow runs once per week on Monday. A typical crawl takes about **10mn** to complete.
- [Test](https://github.com/w3c/webref/actions/workflows/test.yml): tests the contents of the repo. Runs each time there is a push against the default branch.
- [Clean up abandoned files](https://github.com/w3c/webref/actions/workflows/cleanup.yml) - Checks the contents of repository to detect orphan crawl files that are no longer targeted by the latest crawl's result and creates a PR to delete these files from the repository. Runs once per week on Wednesday. The crawl workflows does not delete these files automatically because crawl sometimes fails on a spec due to transient network or spec errors.


### Releases to NPM

- [`@webref/css`: Prepare release PR if needed](https://github.com/w3c/webref/actions/workflows/prepare-css-release.yml) - Checks latest CSS extracts and create a pre-release PR if a new version of the `@webref/css` npm package should be released. Runs after each crawl and whenever a push is made to the default branch on CSS files (except when this push is on the `packages` folder to avoid re-entrance issues). The pre-release PR details the diff that would be released, and bumps the package version in [`packages/css/package.json`](packages/css/package.json).
- [`@webref/elements`: Prepare release PR if needed](https://github.com/w3c/webref/actions/workflows/prepare-elements-release.yml) - Checks latest elements extracts and create a pre-release PR if a new version of the `@webref/elements` npm package should be released. Runs after each crawl and whenever a push is made to the default branch on elements files (except when this push is on the `packages` folder to avoid re-entrance issues). The pre-release PR details the diff that would be released, and bumps the package version in [`packages/elements/package.json`](packages/elements/package.json).
- [`@webref/idl`: Prepare release PR if needed](https://github.com/w3c/webref/actions/workflows/prepare-idl-release.yml) - Checks latest IDL extracts and create a pre-release PR if a new version of the `@webref/idl` npm package should be released. Runs after each crawl and whenever a push is made to the default branch on IDL files (except when this push is on the `packages` folder to avoid re-entrance issues). The pre-release PR details the diff that would be released, and bumps the package version in [`packages/idl/package.json`](packages/idl/package.json).
- [`@webref` release: Request review of pre-release PR](https://github.com/w3c/webref/actions/workflows/request-pr-review.yml) - Assigns reviewers to pre-release CSS/IDL PRs if they exist. Runs once per week on Thursday.
- [Publish `@webref` package if needed](https://github.com/w3c/webref/actions/workflows/release-package.yml) - Publishes a new version of the `@webref/css`, `@webref/elements` or `@webref/idl` package to npm and tags the corresponding commit on the default branch. Runs whenever a pre-release PR is merged. Note that the released version is the version that appeared in `packages/css/package.json`, `packages/elements/package.json` or `packages/idl/package.json` **before** the pre-release PR is merged.
