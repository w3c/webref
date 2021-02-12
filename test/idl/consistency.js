const assert = require('assert');

const idl = require('@webref/idl');

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
          `Invalid overload of ${describeMember(targetMember)} from ${describeDfn(source)}`);
    }
  }
  // Now merge members.
  target.members.push(...source.members);
}

// This could be useful part of the public API, but for now just run the
// flattening in order to find problems. Modifies the input in place, and
// afterwards |dfns| is the only thing needed.
function flatten(dfns, partials, includes) {
  // merge partials
  for (const partial of partials) {
    const target = dfns.get(partial.name);
    assert(target, `target definition of partial ${partial.type} ${partial.name} not found`);
    assert.strictEqual(partial.type, target.type, `${partial.name} inherits from wrong type: ${target.type}`);
    // TODO: account for extended attributes on the partial definition
    mergeMembers(target, partial);
  }

  // mix in the mixins
  const mixinNames = new Set();
  for (const include of includes) {
    assert(include.target);
    const target = dfns.get(include.target);
    assert(target, `missing target of includes statement: ${include.target}`);
    assert.strictEqual(target.type, 'interface');

    assert(include.includes);
    const mixin = dfns.get(include.includes);
    assert(mixin, `missing source of includes statement: ${include.includes}`);
    assert.strictEqual(mixin.type, 'interface mixin');

    mergeMembers(target, mixin);

    mixinNames.add(mixin.name);
  }

  // remove the mixins
  for (const name of mixinNames.values()) {
    dfns.delete(name);
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
        throw new Error(`duplicate definition of ${dfn.name} member ${member.name}`);
      } else {
        namedMembers.set(member.name, member);
      }
    }
  }
}

describe('Web IDL consistency', () => {
  const dfns = new Map();
  const includes = [];
  const partials = [];

  it('unique definitions', async () => {
    const all = await idl.parseAll();

    for (const [spec, ast] of Object.entries(all)) {
      for (const dfn of ast) {
        if (dfn.partial) {
          partials.push(dfn);
        } else if (dfn.type === 'includes') {
          includes.push(dfn);
        } else {
          assert(dfn.name, `definition with no name in ${spec}`);
          assert(!dfns.has(dfn.name), `duplicate definition of ${dfn.type} ${dfn.name}`);
          dfns.set(dfn.name, dfn);
        }
      }
    }
  });

  it('inheritance', () => {
    for (const dfn of dfns.values()) {
      if (dfn.inheritance) {
        const parent = dfns.get(dfn.inheritance);
        assert(parent, `${dfn.name} inherits from missing type: ${dfn.inheritance}`);
        assert.strictEqual(dfn.type, parent.type, `${dfn.name} inherits from wrong type: ${parent.type}`);
      }
    }
  });

  it('flattening partials/mixins', () => {
    flatten(dfns, partials, includes);
  });
});
