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

  // This test should remain the last one as it slightly modifies objects in dfns in place.
  it('merging in partials/mixins', () => {
    const merged = merge(dfns, partials, includes);
  });
});
