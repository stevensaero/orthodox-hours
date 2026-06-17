// tools/edit-engine.mjs
// ─────────────────────────────────────────────────────────────────────────────
// DEV-ONLY edit engine for the in-context liturgical data editor.
// Imported by tools/vite-edit-plugin.mjs (dev server middleware). Never bundled
// into the browser app — it is Node-side recast/AST machinery.
//
// v1 operation: setValue(path, value) — replace ONE existing simple literal
// (String / Numeric / Boolean) at a known path under the module's default export.
// recast reprints only the touched node; all comments, formatting, and every other
// entry are byte-preserved. Tier-2 structural ops (insert/remove/repeatMarker) are
// designed-for via the same locator but not implemented here. See local_editing_spec.md.
// ─────────────────────────────────────────────────────────────────────────────
import * as recast from 'recast';
import * as babelParser from '@babel/parser';

// Minimal parser — these are plain-JS ESM data modules (no JSX/TS). recast's
// bundled babel preset pulls plugins that error under @babel/parser v8, so we
// supply our own with only what we need. tokens:true is required by recast.
const parser = {
  parse(source) {
    return babelParser.parse(source, {
      sourceType: 'module',
      tokens: true,
      ranges: true,
      plugins: [],
    });
  },
};

export function parseModule(src) {
  return recast.parse(src, { parser });
}

const keyName = (k) =>
  k.type === 'StringLiteral' ? k.value
  : k.type === 'Identifier' ? k.name
  : k.type === 'NumericLiteral' ? String(k.value)
  : null;

// Resolve `export default X` (or `export default {…}`) to the root ObjectExpression.
function rootObject(ast) {
  let decl = null;
  recast.types.visit(ast, {
    visitExportDefaultDeclaration(p) { decl = p.node.declaration; return false; },
  });
  if (!decl) throw new Error('no `export default` found in module');
  if (decl.type === 'ObjectExpression') return decl;
  if (decl.type === 'Identifier') {
    const name = decl.name;
    let init = null;
    recast.types.visit(ast, {
      visitVariableDeclarator(p) {
        if (p.node.id.type === 'Identifier' && p.node.id.name === name) { init = p.node.init; return false; }
        this.traverse(p);
      },
    });
    if (!init || init.type !== 'ObjectExpression')
      throw new Error(`export default \`${name}\` does not resolve to an object literal`);
    return init;
  }
  throw new Error('unsupported `export default` form: ' + decl.type);
}

function descend(node, segment) {
  if (typeof segment === 'number') {
    if (node.type !== 'ArrayExpression') throw new Error(`expected array at index segment ${segment}, got ${node.type}`);
    const el = node.elements[segment];
    if (!el) throw new Error(`array index out of range: ${segment}`);
    return el;
  }
  if (node.type !== 'ObjectExpression') throw new Error(`expected object at key "${segment}", got ${node.type}`);
  for (const pr of node.properties) {
    if ((pr.type === 'ObjectProperty' || pr.type === 'Property') && keyName(pr.key) === segment) return pr.value;
  }
  throw new Error(`key not found: "${segment}"`);
}

export function locate(ast, path) {
  let node = rootObject(ast);
  for (const seg of path) node = descend(node, seg);
  return node;
}

function literalValue(node) {
  switch (node.type) {
    case 'StringLiteral': return node.value;
    case 'NumericLiteral': return node.value;
    case 'BooleanLiteral': return node.value;
    case 'NullLiteral': return null;
    default: return undefined;
  }
}

function setLiteral(node, newValue) {
  const t = node.type;
  if (t === 'StringLiteral') {
    if (typeof newValue !== 'string') throw new Error('type mismatch: target is a string');
    node.value = newValue; delete node.extra; // force reprint from .value (proper escaping)
  } else if (t === 'NumericLiteral') {
    if (typeof newValue !== 'number') throw new Error('type mismatch: target is a number');
    node.value = newValue; delete node.extra;
  } else if (t === 'BooleanLiteral') {
    if (typeof newValue !== 'boolean') throw new Error('type mismatch: target is a boolean');
    node.value = newValue; delete node.extra;
  } else {
    throw new Error(`unsupported target node type for setValue: ${t} (v1 handles String/Numeric/Boolean literals only)`);
  }
}

// Map every simple-literal value to its path-key, for the single-leaf invariant.
export function collectLiterals(ast) {
  const map = new Map();
  (function walk(node, path) {
    if (!node) return;
    if (node.type === 'ObjectExpression') {
      for (const pr of node.properties) {
        if (pr.type === 'ObjectProperty' || pr.type === 'Property') walk(pr.value, [...path, keyName(pr.key)]);
      }
    } else if (node.type === 'ArrayExpression') {
      node.elements.forEach((el, i) => walk(el, [...path, i]));
    } else {
      const v = literalValue(node);
      if (v !== undefined || node.type === 'NullLiteral') map.set(JSON.stringify(path), v);
    }
  })(rootObject(ast), []);
  return map;
}

function makeLineDiff(a, b) {
  const al = a.split('\n'), bl = b.split('\n');
  const out = [];
  for (let i = 0; i < Math.max(al.length, bl.length); i++) {
    if (al[i] !== bl[i]) {
      if (al[i] !== undefined) out.push('- ' + al[i]);
      if (bl[i] !== undefined) out.push('+ ' + bl[i]);
    }
  }
  return out.join('\n');
}

// High-level v1 op. Returns { ok, newSrc, oldValue, newValue, diff } or { ok:false, error }.
export function editSetValue(src, path, newValue, expectedOld) {
  let ast;
  try { ast = parseModule(src); } catch (e) { return { ok: false, error: 'parse failed: ' + e.message }; }

  let target;
  try { target = locate(ast, path); } catch (e) { return { ok: false, error: 'locate failed: ' + e.message }; }

  const oldValue = literalValue(target);
  if (oldValue === undefined && target.type !== 'NullLiteral')
    return { ok: false, error: `target is not a simple literal (${target.type})` };

  // Compare-and-swap: refuse if the on-disk value drifted from what the editor read.
  if (expectedOld !== undefined && oldValue !== expectedOld)
    return { ok: false, error: 'stale: on-disk value differs from expectedOld', oldValue };

  const before = collectLiterals(ast);
  try { setLiteral(target, newValue); } catch (e) { return { ok: false, error: e.message }; }

  let newSrc;
  try { newSrc = recast.print(ast).code; } catch (e) { return { ok: false, error: 'print failed: ' + e.message }; }

  // Round-trip verify: re-parse, assert valid, assert EXACTLY one leaf changed at our path.
  let ast2, after;
  try { ast2 = parseModule(newSrc); after = collectLiterals(ast2); }
  catch (e) { return { ok: false, error: 'round-trip reparse failed: ' + e.message }; }

  const targetKey = JSON.stringify(path);
  const changed = [];
  for (const k of new Set([...before.keys(), ...after.keys()])) {
    if (!before.has(k) || !after.has(k) || before.get(k) !== after.get(k)) changed.push(k);
  }
  if (changed.length !== 1 || changed[0] !== targetKey)
    return { ok: false, error: 'round-trip verify failed: changed leaves=' + JSON.stringify(changed) };
  if (after.get(targetKey) !== newValue)
    return { ok: false, error: 'round-trip verify failed: new value not present after reparse' };

  return { ok: true, newSrc, oldValue, newValue, diff: makeLineDiff(src, newSrc) };
}
