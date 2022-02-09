/**
 * Test the consistency of Web IDL extracts.
 * 
 * These tests go beyond mere Web IDL validation to make sure that the combined
 * Web IDL that the extracts define does not reference unknown types, does not
 * use unknown extended attributes...
 * 
 * The tests run against the curated and package views of the data. An extract
 * that passes a test in the curated view may fail the same test in the package
 * view because of some missing IDL definition in that view.
 */


const assert = require('assert').strict;
const path = require('path');
const idl = require('@webref/idl');

const views = [
  {
    name: 'curated',
    folder: path.join(__dirname, '..', '..', 'curated', 'idl')
  },
  {
    name: '@webref/idl package',
    folder: path.join(__dirname, '..', '..', 'packages', 'idl')
  }
];

// Helper to get a map of unique definitions in |dfns|, for convenience and to
// avoid O(n^2) in the common `for (dfn of dfns) { dfns.find(...) }`.
function nameMap(dfns) {
  assert(Array.isArray(dfns));

  const map = new Map();
  for (const dfn of dfns) {
    assert(!map.has(dfn.name), `duplicate definition of ${dfn.name}`);
    map.set(dfn.name, dfn);
  }
  return map;
}

function getExtAttr(node, name) {
  return node.extAttrs && node.extAttrs.find((attr) => attr.name === name);
}

// Helper to test if two members define the same thing, such as the same
// attribute or the same method. Should match requirements in spec:
// https://heycam.github.io/webidl/#idl-overloading
function isOverloadedOperation(a, b) {
  if (a.type !== 'constructor' && a.type !== 'operation') {
    return false;
  }
  if (a.type !== b.type) {
    return false;
  }
  // Note that |name| or |special| could be null/undefined, but even then
  // they have to be the same for both members.
  if (a.name !== b.name) {
    return false;
  }
  if (a.special !== b.special) {
    return false;
  }
  return true;
}

function describeDfn(dfn) {
  let desc = dfn.type;
  if (dfn.name) {
    desc += ' ' + dfn.name;
  }
  if (dfn.partial) {
    desc = 'partial ' + desc;
  }
  return desc;
}

function describeMember(member) {
  let desc = member.type;
  if (member.name) {
    desc += ' ' + member.name;
  }
  if (member.special) {
    desc = member.special + ' ' + desc;
  }
  return desc;
}

function mergeMembers(target, source) {
  // Check for overloaded operation across partials/mixins. This is O(n^2) and
  // could be improved, but it's fast enough (and simple) for testing.
  for (const targetMember of target.members) {
    for (const sourceMember of source.members) {
      assert(!isOverloadedOperation(targetMember, sourceMember),
          `invalid overload of ${describeMember(targetMember)} from ${describeDfn(source)}`);
    }
  }
  // Now merge members.
  target.members.push(...source.members);
}

// This could be useful part of the public API, but for now just run the
// merging in order to find problems. Modifies some definitions in place,
// and returns a list of only the merged definitions.
function merge(dfns, partials, includes) {
  assert(Array.isArray(dfns));
  assert(Array.isArray(partials));
  assert(Array.isArray(includes));

  dfns = nameMap(dfns); // replace |dfns| to avoid using it

  // merge partials (including partial mixins)
  for (const partial of partials) {
    const target = dfns.get(partial.name);
    assert(target, `target definition of partial ${partial.type} ${partial.name} not found`);
    assert.equal(partial.type, target.type, `${partial.name} inherits from wrong type: ${target.type}`);
    // TODO: account for extended attributes on the partial definition
    mergeMembers(target, partial);
  }

  // mix in the mixins
  for (const include of includes) {
    assert(include.target);
    const target = dfns.get(include.target);
    assert(target, `missing target of includes statement: ${include.target}`);
    assert.equal(target.type, 'interface');

    assert(include.includes);
    const mixin = dfns.get(include.includes);
    assert(mixin, `missing source of includes statement: ${include.includes}`);
    assert.equal(mixin.type, 'interface mixin');

    mergeMembers(target, mixin);
  }

  // remove all mixins, whether used or not
  for (const [name, dfn] of dfns) {
    if (dfn.type === 'interface mixin') {
      dfns.delete(name);
    }
  }

  // now check for duplicate members
  for (const dfn of dfns.values()) {
    if (!dfn.members) {
      continue;
    }
    const namedMembers = new Map();
    for (const member of dfn.members) {
      if (!member.name) {
        continue;
      }
      const firstMember = namedMembers.get(member.name);
      if (firstMember) {
        // Overloaded operations are OK.
        if (isOverloadedOperation(member, firstMember)) {
          continue;
        }
        // Non-overlapping exposure sets are OK. Assume it's OK if either
        // members has an [Exposed] extended attribute. TODO: do better.
        if (getExtAttr(firstMember, 'Exposed') || getExtAttr(member, 'Exposed')) {
          continue;
        }
        assert.fail(`duplicate definition of ${dfn.name} member ${member.name}`);
      } else {
        namedMembers.set(member.name, member);
      }
    }
  }

  // finally return a sorted list of merged definitions
  return Array.from(dfns.values());
}


views.forEach(({ name, folder }) => {
  describe(`The ${name} view of Web IDL extracts`, () => {
    const dfns = [];
    const includes = [];
    const partials = [];

    before(async () => {
      const all = await idl.parseAll({ folder });

      for (const [spec, ast] of Object.entries(all)) {
        for (const dfn of ast) {
          if (dfn.partial) {
            partials.push(dfn);
          } else if (dfn.type === 'includes') {
            includes.push(dfn);
          } else if (dfn.name) {
            dfns.push(dfn);
          } else {
            assert.fail(`unknown definition in ${spec}: ${JSON.stringify(dfn)}`);
          }
        }
      }
    });

    it('contains IDL names linked to only one "dfn"', function () {
      assert.equal(nameMap(dfns).size, dfns.length);
    });

    it('contains IDL names that inherit from known types', function () {
      const map = nameMap(dfns);
      for (const dfn of map.values()) {
        if (dfn.inheritance) {
          const parent = map.get(dfn.inheritance);
          assert(parent, `${dfn.name} inherits from missing type: ${dfn.inheritance}`);
          assert.equal(dfn.type, parent.type, `${dfn.name} inherits from wrong type: ${parent.type}`);
        }
      }
    });

    // Validate that there are no unknown types or extended attributes.
    it('uses only known types and extended attributes', function () {
      this.slow(2000);
      // There are types in lots of places in the AST (interface members,
      // arguments, return types) and rather than trying to cover them all, walk
      // the whole AST looking for "idlType".
      const usedTypes = new Set();
      const usedExtAttrs = new Set();

      // Serialize and reparse the ast to not have to worry about own properties
      // vs enumerable properties on the prototypes, etc.
      const pending = [JSON.parse(JSON.stringify([...dfns, ...partials]))];
      while (pending.length) {
        const node = pending.pop();
        for (const [key, value] of Object.entries(node)) {
          if (key === 'idlType' && typeof value === 'string') {
            usedTypes.add(value);
          } else if (key === 'extAttrs' && Array.isArray(value)) {
            for (const extAttr of value) {
              usedExtAttrs.add(extAttr.name);
            }
          } else if (typeof value === 'object' && value !== null) {
            pending.push(value);
          }
        }
      }

      const knownTypes = new Set([
        // Types defined by Web IDL itself:
        'any', // https://heycam.github.io/webidl/#idl-any
        'ArrayBuffer', // https://heycam.github.io/webidl/#idl-ArrayBuffer
        'bigint', // https://heycam.github.io/webidl/#idl-bigint
        'boolean', // https://heycam.github.io/webidl/#idl-boolean
        'byte', // https://heycam.github.io/webidl/#idl-byte
        'ByteString', // https://heycam.github.io/webidl/#idl-ByteString
        'DataView', // https://heycam.github.io/webidl/#idl-DataView
        'DOMString', // https://heycam.github.io/webidl/#idl-DOMString
        'double', // https://heycam.github.io/webidl/#idl-double
        'float', // https://heycam.github.io/webidl/#idl-float
        'Float32Array', // https://heycam.github.io/webidl/#idl-Float32Array
        'Float64Array', // https://heycam.github.io/webidl/#idl-Float64Array
        'Int16Array', // https://heycam.github.io/webidl/#idl-Int16Array
        'Int32Array', // https://heycam.github.io/webidl/#idl-Int32Array
        'Int8Array', // https://heycam.github.io/webidl/#idl-Int8Array
        'long long', // https://heycam.github.io/webidl/#idl-long-long
        'long', // https://heycam.github.io/webidl/#idl-long
        'object', // https://heycam.github.io/webidl/#idl-object
        'octet', // https://heycam.github.io/webidl/#idl-octet
        'short', // https://heycam.github.io/webidl/#idl-short
        'symbol', // https://heycam.github.io/webidl/#idl-symbol
        'BigUint64Array', // https://heycam.github.io/webidl/#idl-BigUint64Array
        'BigInt64Array', // https://heycam.github.io/webidl/#idl-BigInt64Array
        'Uint16Array', // https://heycam.github.io/webidl/#idl-Uint16Array
        'Uint32Array', // https://heycam.github.io/webidl/#idl-Uint32Array
        'Uint8Array', // https://heycam.github.io/webidl/#idl-Uint8Array
        'Uint8ClampedArray', // https://heycam.github.io/webidl/#idl-Uint8ClampedArray
        'unrestricted double', // https://heycam.github.io/webidl/#idl-unrestricted-double
        'unrestricted float', // https://heycam.github.io/webidl/#idl-unrestricted-float
        'unsigned long long', // https://heycam.github.io/webidl/#idl-unsigned-long-long
        'unsigned long', // https://heycam.github.io/webidl/#idl-unsigned-long
        'unsigned short', // https://heycam.github.io/webidl/#idl-unsigned-short
        'USVString', // https://heycam.github.io/webidl/#idl-USVString
        'undefined', // https://heycam.github.io/webidl/#idl-undefined

        // Types defined by other specs:
        'CSSOMString', // https://drafts.csswg.org/cssom/#cssomstring-type
        'WindowProxy' // https://html.spec.whatwg.org/multipage/window-object.html#windowproxy
      ]);

      const knownExtAttrs = new Set([
        // Extended attributes defined by Web IDL itself:
        'AllowShared', // https://heycam.github.io/webidl/#AllowShared
        'Clamp', // https://heycam.github.io/webidl/#Clamp
        'CrossOriginIsolated', // https://heycam.github.io/webidl/#CrossOriginIsolated
        'Default', // https://heycam.github.io/webidl/#Default
        'EnforceRange', // https://heycam.github.io/webidl/#EnforceRange
        'Exposed', // https://heycam.github.io/webidl/#Exposed
        'Global', // https://heycam.github.io/webidl/#Global
        'LegacyFactoryFunction', // https://heycam.github.io/webidl/#LegacyFactoryFunction
        'LegacyLenientSetter', // https://heycam.github.io/webidl/#LegacyLenientSetter
        'LegacyLenientThis', // https://heycam.github.io/webidl/#LegacyLenientThis
        'LegacyNamespace', // https://heycam.github.io/webidl/#LegacyNamespace
        'LegacyNoInterfaceObject', // https://heycam.github.io/webidl/#LegacyNoInterfaceObject
        'LegacyNullToEmptyString', // https://heycam.github.io/webidl/#LegacyNullToEmptyString
        'LegacyOverrideBuiltIns', // https://heycam.github.io/webidl/#LegacyOverrideBuiltIns
        'LegacyTreatNonObjectAsNull', // https://heycam.github.io/webidl/#LegacyTreatNonObjectAsNull
        'LegacyUnenumerableNamedProperties', // https://heycam.github.io/webidl/#LegacyUnenumerableNamedProperties
        'LegacyUnforgeable', // https://heycam.github.io/webidl/#LegacyUnforgeable
        'LegacyWindowAlias', // https://heycam.github.io/webidl/#LegacyWindowAlias
        'NewObject', // https://heycam.github.io/webidl/#NewObject
        'PutForwards', // https://heycam.github.io/webidl/#PutForwards
        'Replaceable', // https://heycam.github.io/webidl/#Replaceable
        'SameObject', // https://heycam.github.io/webidl/#SameObject
        'SecureContext', // https://heycam.github.io/webidl/#SecureContext
        'Unscopable', // https://heycam.github.io/webidl/#Unscopable

        // Extended attributes defined by other specs:
        'CEReactions', // https://html.spec.whatwg.org/multipage/custom-elements.html#cereactions
        'HTMLConstructor', // https://html.spec.whatwg.org/multipage/dom.html#htmlconstructor
        'Serializable', // https://html.spec.whatwg.org/multipage/structured-data.html#serializable
        'StringContext', // https://w3c.github.io/webappsec-trusted-types/dist/spec/#webidl-string-context-xattr
        'Transferable', // https://html.spec.whatwg.org/multipage/structured-data.html#transferable
        'WebGLHandlesContextLoss' // https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14
      ]);

      // Add any types defined by the parsed IDL, while also forbidding some that
      // can be used mistakenly. Should match https://heycam.github.io/webidl/#idl-types.
      const knownInvalidTypes = new Map();
      for (const dfn of dfns) {
        if (dfn.type === 'interface mixin' || dfn.type === 'namespace') {
          knownInvalidTypes.set(dfn.name, dfn.type);
        } else {
          knownTypes.add(dfn.name);
        }
      }

      for (const usedType of usedTypes) {
        assert(!knownInvalidTypes.has(usedType),
            `${knownInvalidTypes.get(usedType)} ${usedType} cannot be used as a type`);
        assert(knownTypes.has(usedType), `type ${usedType} is used but never defined`);
      }

      for (const attr of usedExtAttrs) {
        assert(knownExtAttrs.has(attr), `extended attribute ${attr} is used but never defined`);
      }
    });

    // Validate that Exposed attributes use only the identifiers from Global
    // attributes.
    it('contains consistent Exposed and Global extended attributes', function () {
      // Get the identifiers (strings) from an extended attribute value as an
      // array. Returns an array for both [Exposed=Window] and
      // [Exposed=(Window,Worker)], '*' for the special [Exposed=*] wildcard and
      // null for missing attribute.
      function getExtAttrIdentifiers(node, name) {
        const attr = getExtAttr(node, name);
        if (!attr) {
          return null;
        }
        switch (attr.rhs.type) {
          case 'identifier':
            return [attr.rhs.value];
          case 'identifier-list':
            return attr.rhs.value.map(({value}) => value);
          case '*':
            return '*';
          default:
            console.log(attr.rhs.type)
            throw new Error(`Unexpected RHS for extended attribute ${name} on ${node.name}`);
        }
      }

      // Collect the known global identifiers.
      const globals = new Set();
      for (const dfn of dfns) {
        const ids = getExtAttrIdentifiers(dfn, 'Global');
        if (!ids) {
          continue;
        }
        assert(Array.isArray(ids));
        for (const id of ids) {
          globals.add(id);
        }
      }

      // Check that some well known global were found.
      assert(globals.has('Window'), 'List of known globals does not include "Window"');
      assert(globals.has('ServiceWorker'), 'List of known globals does not include "ServiceWorker"');

      // Validate the Exposed extended attributes of top-level definitions and
      // their members.
      for (const dfn of dfns) {
        const ids = getExtAttrIdentifiers(dfn, 'Exposed');
        if (Array.isArray(ids)) {
          for (const id of ids) {
            assert(globals.has(id), `Exposed attribute value ${id} on ${dfn.name} does not match any known global name`);
          }
        }
        if (dfn.members) {
          for (const member of dfn.members) {
            const ids = getExtAttrIdentifiers(member, 'Exposed');
            if (Array.isArray(ids)) {
              for (const id of ids) {
                assert(globals.has(id), `Exposed attribute value ${id} on ${dfn.name}.${member.name} does not match any known global name`);
              }
            }
          }
        }
      }
    });

    // This test should remain the last one as it slightly modifies objects in dfns in place.
    it('yields consistent IDL when partials/mixins are merged', function () {
      this.slow(1000);
      const merged = merge(dfns, partials, includes);
      // To guard against new things being added to Web IDL which need special handling,
      // such as dictionary mixins, check that the merged result has only known types.
      // Also check that everything has a name and that no partials remain.
      const knownTypes = new Set([
        'callback interface',
        'callback',
        'dictionary',
        'enum',
        'interface',
        'namespace',
        'typedef'
      ]);
      for (const dfn of merged) {
        assert(dfn.name, 'definition has a name');
        assert(!dfn.partial, 'definition is not partial');
        assert(knownTypes.has(dfn.type), `unknown definition type: ${dfn.type}`)
      }
    });
  });
});