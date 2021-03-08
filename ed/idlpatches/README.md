# Web IDL patches

These are patches applied to the Web IDL scraped from specs to produce `@webref/idl` package. These patches can break as specs are updated and thus need ongoing maintenance.

## Creating patches

Using SVG as an example:

- Open a pull request or issue for the spec.
- Make the necessary changes to `ed/idl/SVG.idl` and commit that locally as a single commit. Reference the spec issue/PR in the commit message.
- Run `git format-patch -1` to create a patch file.
- Run `git reset HEAD~` to throw away the local commit.
- Move the patch to `ed/idlpatches/SVG.idl.patch` and commit the changes.

## Updating patches

Again using SVG as an example:

- Run `git am ed/idlpatches/SVG.idl.patch` to apply the patch locally, resolving any conflicts.
- Make the necessary changes to `ed/idl/SVG.idl`.
- Run `git commit --amend` to update the local commit.
- Run `git format-patch -1` to create a patch file.
- Run `git reset HEAD~` to throw away the local commit.
- Move the patch to `ed/idlpatches/SVG.idl.patch` and commit the changes.
