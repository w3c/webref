# Webref

## Description

This repository contains **machine-readable references of CSS properties, definitions, IDL, and other useful terms that can be automatically extracted from web browser specifications**. The contents of the repository are updated automatically **every 6 hours** (although note information about published _[/TR/](https://www.w3.org/TR/)_ versions of specifications are updated only once per week).

Specifications covered by this repository are technical Web specifications that are directly implemented or that will be implemented by Web browsers; in other words, those that appear in [browser-specs](https://github.com/w3c/browser-specs).

The `main` branch of this repository contains **automatically-generated raw extracts** from web browser specifications. These extracts come with no guarantee on validity or consistency. For instance, if a specification defines invalid IDL snippets or uses an unknown IDL type, the corresponding IDL extract in this repository will be invalid as well.

The `curated` branch contains **curated extracts**. Curated extracts are generated from raw extracts in the [ed](ed) folder by applying manually-maintained patches to fix invalid content and provide [validity and consistency guarantees](#curation-guarantees). The `curated` branch is updated automatically whenever the `main` branch is updated, unless patches need to be modified (which requires manual intervention). Curated extracts are published under https://w3c.github.io/webref/ed/.

Additionally, subsets of the curated content get manually reviewed and published as **NPM [packages](https://github.com/w3c/webref/tree/main/packages)** on a weekly basis:
- [@webref/idl](https://www.npmjs.com/package/@webref/idl) contains a [curated](packages/idl#guarantees) version of the [ed/idl](ed/idl) folder.
- [@webref/css](https://www.npmjs.com/package/@webref/css) contains a [curated](packages/css#guarantees) version of the [ed/css](ed/css) folder.
- [@webref/elements](https://www.npmjs.com/package/@webref/elements) contains a [curated](packages/elements#guarantees) version of the [ed/elements](ed/elements) folder.
- [@webref/events](https://www.npmjs.com/package/@webref/events) contains a [curated](packages/events#guarantees) version of the [ed/events](ed/events) folder.

**Important:** Unless you are ready to deal with invalid content, we strongly recommend that you process contents of the `curated` branch or NPM packages instead of raw content in the `main` branch.


## Available extracts

This repository contains raw and curated information about latest Editor's Drafts of Web specifications in the [ed](https://github.com/w3c/webref/tree/curated/ed) folder, as well as raw information about the latest published version (for _[/TR/](https://www.w3.org/TR/)_ specifications) in the [tr](tr) folder.

More often that not, published versions of specifications are much older than their latest Editor's Draft. Data in the [tr](tr) folder is more invalid/inconsistent than data in the [ed](ed) folder as a result. Additionally, no attempt is being made at curating data in the [tr](tr) folder, so use that folder at your own risk!

The following subfolders in the `curated` branch contain individual machine-readable JSON or text files generated from specifications:

- [ed/css](https://github.com/w3c/webref/tree/curated/ed/css): CSS terms (properties, descriptors, value spaces). One file per specification [series](https://github.com/w3c/browser-specs/#series).
- [ed/dfns](https://github.com/w3c/webref/tree/curated/ed/dfns): `<dfn>` terms, along with metadata such as linking text, access level, namespace. One file per specification.
- [ed/elements](https://github.com/w3c/webref/tree/curated/ed/elements): Markup elements defined, along with the interface that they implement. One file per specification.
- [ed/headings](https://github.com/w3c/webref/tree/curated/ed/headings): Section headings. One file per specification.
- [ed/idl](https://github.com/w3c/webref/tree/curated/ed/idl): Raw WebIDL index. One file per specification [series](https://github.com/w3c/browser-specs/#series).
- [ed/idlnames](https://github.com/w3c/webref/tree/curated/ed/idlnames): WebIDL definitions per referenceable IDL name. One file per IDL name.
- [ed/idlnamesparsed](https://github.com/w3c/webref/tree/curated/ed/idlnamesparsed): Parsed WebIDL structure of definitions in the `idlnames` folder. One file per IDL name.
- [ed/idlparsed](https://github.com/w3c/webref/tree/curated/ed/idlparsed): Parsed WebIDL structure of definitions in the `idl` folder. One file per specification.
- [ed/ids](https://github.com/w3c/webref/tree/curated/ed/ids): Fragments defined in the specification. One file per specification.
- [ed/links](https://github.com/w3c/webref/tree/curated/ed/links): Links to other documents, along with targeted fragments. One file per specification.
- [ed/refs](https://github.com/w3c/webref/tree/curated/ed/refs): Normative and informative references to other specifications. One file per specification.

Individual files are named after the shortname of the specification, or after the shortname of the specification series for CSS definitions and raw IDL files. Individual files are only created when needed, meaning when the specification actually includes relevant terms.

The [ed/index.json](https://github.com/w3c/webref/tree/curated/ed/index.json) file contains the index of specifications that have been crawled, and relative links to individual files that have been created.

This repository uses [Reffy](https://github.com/w3c/reffy), a Web spec exploration tool, to crawl the specifications and generate the data. In particular, the data it contains is the result of running Reffy. The repository does not contain any more data.

Raw WebIDL extracts are used in [web-platform-tests](https://github.com/web-platform-tests/wpt), please see their [interfaces/README.md](https://github.com/web-platform-tests/wpt/blob/master/interfaces/README.md) for details.


## Curation guarantees

Data curation brings the following guarantees.

### Web IDL extracts

- All IDL files can be parsed by the version of [webidl2.js](https://github.com/w3c/webidl2.js/) referenced in `package.json`.
- `WebIDL2.validate` passes with the exception of the "no-nointerfaceobject" rule about `[LegacyNoInterfaceObject]`, which is in wide use.
- All types are defined by some specification.
- All extended attributes are defined by some specification.
- No duplicate top-level definitions or members.
- No missing or mismatched types in inheritance chains.
- No conflicts when applying mixins and partials.

### CSS extracts

- All values in CSS files can be parsed by the version of [CSSTree](https://github.com/csstree/csstree) used in `peerDependencies` in `package.json`.
- No duplicate definitions of CSS properties provided that CSS extracts of [delta specs](https://github.com/w3c/browser-specs/#seriescomposition) are not taken into account (such extracts end with `-n.json`, where `n` is a level number).
- CSS extracts contain a base definition of all CSS properties that get extended by other CSS property definitions (those for which `newValues` is set).

### Elements extracts

- All Web IDL interfaces referenced by elements exist in Web IDL extracts.

### Events extracts

- All events have a `type` attribute that match the name of the event
- All events have a `interface` attribute to describe the interface used by the Event. The Web IDL interface exists in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released, and represents an actual interface (i.e. not a mixin).
- All events have a `targets` attribute with a non-empty list of target interfaces on which the event may fire. All Web IDL interfaces in the list exist in the latest version of the [`@webref/idl` package](https://www.npmjs.com/package/@webref/idl) at the time the `@webref/events` package is released, and represent an actual interface (i.e. not a mixin).
- The `bubbles` attribute is always set to a boolean value for target interfaces that belong to a bubbling tree (DOM, IndexedDB, Serial API, Web Bluetooth).
- The `bubbles` attribute is only set for target interfaces that belong to a bubbling tree.
- The `bubblingPath` attribute is only set for target interfaces on which the event bubbles.
- The `targets` attribute contains the top most interfaces in an inheritance chain, unless bubbling conditions differ. For instance, the list may contain `{ "target": "Element", "bubbles": true }` but not also `{ "target": "HTMLElement", "bubbles": true }` since `HTMLElement` inherits from `Element`.
- For target interfaces that belong to a bubbling tree, the `targets` attribute only contains the deepest interface in the bubbling tree on which the event may fire and bubble. For instance, the list may contain `{ "target": "HTMLElement", "bubbles": true }`, but not also `{ "target": "Document" }` since event would de facto fire at `Document` through bubbling.

## Potential spec anomalies

This repository used to contain analyses of potential spec anomalies, such as missing references and invalid Web IDL definitions. These analyses are now published in the companion [w3c/webref-analysis](https://github.com/w3c/webref-analysis) repository.


## How to suggest changes or report an error

Feel free to raise [issues in this repository](https://github.com/w3c/webref/issues) as needed. Note that most issues likely more directly apply to underlying tools:

- Errors in the data are most likely caused by bugs or missing features in [Reffy](https://github.com/w3c/reffy), which is the tool that crawls and parses specifications under the hoods. If you spot an error, please report it in [Reffy's issue tracker](https://github.com/w3c/reffy/issues/new).
- If you believe that a spec is missing from the list, please check [browser-specs](https://github.com/w3c/browser-specs/#how-to-addupdatedelete-a-spec) and report it [there](https://github.com/w3c/browser-specs/issues/new).


## Development notes

GitHub Actions workflows are used to automate most of the tasks in this repo.

### Data update

- [Update ED report](https://github.com/w3c/webref/actions/workflows/update-ed.yml) - crawls the latest version of Editor's Drafts and updates the contents of the [`ed`](ed) folder. Workflow runs every 6 hours. A typical crawl takes about **10mn** to complete.
- [Update TR report](https://github.com/w3c/webref/actions/workflows/update-tr.yml) - crawls the published version of Editor's Drafts and updates the contents of the [`tr`](tr) folder. Workflow runs once per week on Monday. A typical crawl takes about **10mn** to complete.
- [Curate data &amp; Prepare package PRs](https://github.com/w3c/webref/actions/workflows/curate.yml) - runs whenever crawled data gets updated and updates the `curated` branch accordingly (provided all tests pass). The job also creates pull requests to release new versions of NPM packages when needed. Each pull request details the diff that would be released, and bumps the package version in the relevant `packages/xxx/package.json` file.
- [Clean up abandoned files](https://github.com/w3c/webref/actions/workflows/cleanup.yml) - checks the contents of repository to detect orphan crawl files that are no longer targeted by the latest crawl's result and creates a PR to delete these files from the repository. Runs once per week on Wednesday. The crawl workflows does not delete these files automatically because crawl sometimes fails on a spec due to transient network or spec errors.
- [Test](https://github.com/w3c/webref/actions/workflows/test.yml) - runs tests on pull requests.
- [Clean patches when issues/PR are closed](https://github.com/w3c/webref/actions/workflows/clean-patches.yml) - drops patches that no longer need to apply because underlying issues got fixed. Runs once per week.

### Releases to NPM

- [Publish @webref package if needed](https://github.com/w3c/webref/actions/workflows/release-package.yml) - publishes a new version of the `@webref/css`, `@webref/elements`, `@webref/events` or `@webref/idl` package to NPM, tags the corresponding commits on the `main` and `curated` branches, and updates the relevant `@webref/xxx@latest` tag to point to the right commit on the `curated` branch. Runs whenever a pre-release PR is merged. Note that the released version is the version that appeared in `packages/css/package.json`, `packages/elements/package.json`, `packages/events/package.json` or `packages/idl/package.json` **before** the pre-release PR is merged.
- [@webref release: Request review of pre-release PR] - assigns reviewers to NPM package pull requests. Runs once per week.
