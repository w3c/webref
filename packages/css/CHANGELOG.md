# Changelog

This file documents breaking changes introduced in major releases of the
`@webref/css` NPM package.

Webref adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html),
applied to data. A new major version is released whenever a breaking change is
made to the data structure.

## v7.0.x - 2025-TBD

CSS extracts are now consolidated into a single file.

### Breaking changes

- A single consolidated `css.json` file replaces CSS extracts per spec.

### How to upgrade

In version 6, `listAll()` resolved with an object where the keys were spec shortnames, and the values mostly matched the structure of the consolidated object that the function now returns. On top of the consolidation itself, main differences are:
- Functions and types were merged in a `values` category in version 6, they now appear in separate `functions` and `types` categories.
- Functions and types that were scoped to another CSS feature appeared nested under that CSS feature in version 6. They now appear directly under `functions` and `types` with a `for` key that contains the list of scoping features for that feature. A scoping feature may be a property, a function or a type. When the scoping feature is a type, its name in the `for` key is enclosed between `<` and `>`.
- Feature syntaxes were stored in a `value` key. That key is now named `syntax`. Actual syntax values are the same as before and can be parsed with CSSTree.
- The shortname of the spec (or specs) that defines a feature is no longer readily available (but note the `href` key targets the defining spec). If you need the specs' shortnames, please [raise an issue](https://github.com/w3c/webref/issues) to describe your use case.
- The consolidation removes duplicates, merging extended definitions into a single feature. The definition from the latest spec level is used when a feature is defined in more than one level. If you need the definition from earlier levels, please [raise an issue](https://github.com/w3c/webref/issues) to describe your needs!
- Some of the possible values that a CSS feature could take appeared nested under that feature definition in a `values` key in version 6. Such values are no longer reported in the new version: they were confusing in any case because they did not cover the whole range of values that a feature could take, and could contain values that were not atomic keyword values. Values could be re-introduced when CSS specs are more systematic about them. In the meantime, you will need to parse the feature's syntax (the `syntax` key) to extract keyword values.

Additionally, the package now also exposes a new `index()` async method that resolves with an object similar to that returned by `listAll()`, except that lists of features under each category are indexed by feature names. For scoped features, the feature name is used as identifier when it is unambiguous. If a  feature is defined differently for different scopes, the feature name is completed with the name of the first scoping feature to disambiguate. For example, `type() for @function`, `type() for attr()`.

## v6.0.0 - 2022-11-28

Major re-write of CSS extracts listed in the package, following the release
of [Reffy v11.0.0](https://github.com/w3c/reffy/blob/main/CHANGELOG.md#v1100---2022-11-28)

### Breaking changes

- Arrays are now used throughout instead of indexed objects.
- Function names are no longer enclosed in `<` and `>` because they are not
defined in specs with these characters (as opposed to types). Beware though,
references to functions in value syntax do use enclosing `<` and `>` characters.
- The property `valuespaces` at the root level is now named `values`. An array
is used there as well. The `values` property lists both `function` and `type`
definitions that are not namespaced to anything in particular (it used to also
contain namespaced definitions).

### Added

- Selectors are now reported under a `selectors` property at the root level.
- Possible values that some definition may take are now reported under a
`values` property directly within the definition.
- Functions and types that are namespaced to some other definition are included
in the list of `values` of that definition.
- Anomalies detected in the spec are now reported under a `warnings` property at
the root of the extract. Four types of anomalies are reported:
  1. **Missing definition**: when a production rule was found but when the spec
  does not include a corresponding `<dfn>` (or when that `<dfn>` does not have a
  `data-dfn-type` attribute that identifies a CSS construct)
  2. **Duplicate definition**: when the spec defines the same term twice.
  3. **Unmergeable definition**: when the spec defines the same property twice
  and both definitions cannot be merged.
  4. **Dangling value**: when the spec defines a CSS "value" definition
  (`value`, `function` or `type`) for something and that something cannot be
  found in the spec
- To distinguish between `function`, `type` and `value` definitions listed in a
`values` property, definitions that appear in a `values` property have a `type`
property.

### Additional notes

- Only namespaced values associated with a definition are listed under its
`values` property. Non-namespaced values are not. For instance, `<quote>` is not
listed as a value of the `<content-list>` type, even though its value syntax
references it. This is to avoid duplicating constructs in the extracts.
- Values are only listed under the deepest definition to which they apply. For
instance, `open-quote` is only listed as a value of `<quote>` but neither as a
value of the `<content-list>` type that references `<quote>` nor as a value of
the `content` property that references `<content-list>`. This is also to avoid
duplicating constructs in the extracts.
- Some of the extracts contain things that may look weird at first, but that is
"by design". For instance, [CSS Will
change](https://drafts.csswg.org/css-will-change-1/) defines a
[`<custom-ident>`](https://drafts.csswg.org/css-will-change-1/#valdef-will-change-custom-ident)
`value` construct whose actual value is the `<custom-ident>` `type` construct
defined in CSS Values. Having both a namespaced `value` and a non-namespaced
`<type>` is somewhat common in CSS specs.
