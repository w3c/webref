const assert = require('assert').strict;

const idl = require('@webref/idl');

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

describe('Web IDL consistency', () => {
  const dfns = [];
  const includes = [];
  const partials = [];

  before(async () => {
    const all = await idl.parseAll();

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

  it('unique definitions', () => {
    assert.equal(nameMap(dfns).size, dfns.length);
  });

  it('inheritance', () => {
    const map = nameMap(dfns);
    for (const dfn of map.values()) {
      if (dfn.inheritance) {
        const parent = map.get(dfn.inheritance);
        assert(parent, `${dfn.name} inherits from missing type: ${dfn.inheritance}`);
        assert.equal(dfn.type, parent.type, `${dfn.name} inherits from wrong type: ${parent.type}`);
      }
    }
  });

  // Validate that there are no unknown types.
  it('all used types are defined', () => {
    // There are types in lots of places in the AST (interface members,
    // arguments, return types) and rather than trying to cover them all, walk
    // the whole AST looking for "idlType".
    const usedTypes = new Set();

    // Serialize and reparse the ast to not have to worry about own properties
    // vs enumerable properties on the prototypes, etc.
    const pending = [JSON.parse(JSON.stringify([...dfns, ...partials]))];
    while (pending.length) {
      const node = pending.pop();
      for (const [key, value] of Object.entries(node)) {
        if (key === 'idlType' && typeof value === 'string') {
          usedTypes.add(value);
        } else if (typeof value === 'object' && value !== null) {
          pending.push(value);
        }
      }
    }

    const knownTypes = new Set([
      // Types defined by Web IDL itself:
      'any', // https://heycam.github.io/webidl/#idl-any
      'ArrayBuffer', // https://heycam.github.io/webidl/#idl-ArrayBuffer
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

      // TODO: drop void when it has been removed from all specs
      'void',

      // Types defined by other specs:
      'CSSOMString', // https://drafts.csswg.org/cssom/#cssomstring-type
      'WindowProxy' // https://html.spec.whatwg.org/multipage/window-object.html#windowproxy
    ]);

    // Add any types defined by the parsed IDL.
    for (const dfn of dfns) {
      knownTypes.add(dfn.name);
    }

    for (const usedType of usedTypes) {
      assert(knownTypes.has(usedType), `type ${usedType} is used but never defined`);
    }
  });

  // This test should remain the last one as it slightly modifies objects in dfns in place.
  it('merging in partials/mixins', () => {
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
