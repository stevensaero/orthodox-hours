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
  const al = a.split(/\r?\n/), bl = b.split(/\r?\n/);
  let p = 0;
  while (p < al.length && p < bl.length && al[p] === bl[p]) p++;
  let sa = al.length, sb = bl.length;
  while (sa > p && sb > p && al[sa - 1] === bl[sb - 1]) { sa--; sb--; }
  const out = [];
  for (let i = p; i < sa; i++) out.push('- ' + al[i]);
  for (let i = p; i < sb; i++) out.push('+ ' + bl[i]);
  return out.join('\n');
}

// ── Concatenation support (BinaryExpression of string literals) ──────────────
// Most long text fields are stored as multi-line  "a " + "b " + …  source for
// readability; the runtime value is one string. We edit by replacing the whole
// concatenation's SOURCE SPAN with a freshly re-wrapped chain — byte-splicing on
// the node's location rather than recast-printing (which would inline the chain).
const WRAP_WIDTH = 58;

// pure + chain of string literals → [segment values], else null
function flattenConcat(node) {
  if (node.type === 'StringLiteral') return [node.value];
  if (node.type === 'BinaryExpression' && node.operator === '+') {
    const l = flattenConcat(node.left), r = flattenConcat(node.right);
    return (l && r) ? [...l, ...r] : null;
  }
  return null;
}

// Re-wrap a value into source lines. Marks (| // or * /**, either dialect) → one
// chant line each, marks kept VERBATIM at line end. No marks → greedy word-wrap at
// WRAP_WIDTH. join(lines) === value exactly, so the stored text is never altered.
function rewrap(value) {
  if (/\s\*\*?\s/.test(value) || /\s\|\s|\s\/\/\s/.test(value)) {
    const parts = value.split(/( \*\*? | \| | \/\/ )/); // [t0, sep0, t1, sep1, …, tN]
    const lines = [];
    for (let i = 0; i < parts.length; i += 2) lines.push(parts[i] + (parts[i + 1] || ''));
    return lines;
  }
  const toks = value.split(/(\s+)/); // [word, ws, word, ws, …]
  const lines = []; let cur = '';
  for (let i = 0; i < toks.length; i++) {
    if (cur.length + toks[i].length > WRAP_WIDTH && cur.trim() !== '') { lines.push(cur); cur = ''; }
    cur += toks[i];
  }
  if (cur !== '') lines.push(cur);
  return lines.length ? lines : [value];
}

function nodeRange(node, src) {
  // Compute offsets from loc against the RAW source. node.start/.end are offsets into
  // a line-ending-normalized copy (recast/@babel collapse CRLF→LF before parsing), so
  // on a CRLF file they are short by one char per preceding line and the splice cuts
  // in the wrong place. loc (line/column) survives normalization, so it is reliable.
  const lineStarts = [0];
  for (let i = 0; i < src.length; i++) if (src[i] === '\n') lineStarts.push(i + 1);
  const off = (loc) => lineStarts[loc.line - 1] + loc.column;
  return [off(node.loc.start), off(node.loc.end)];
}

// true if no recorded literal changed except (optionally) the target path
function onlyTargetChanged(before, after, targetKey) {
  for (const k of new Set([...before.keys(), ...after.keys()])) {
    if (k === targetKey) continue;
    if (before.get(k) !== after.get(k)) return false;
  }
  return true;
}

function editConcat(src, ast, target, path, newValue, expectedOld) {
  const segs = flattenConcat(target);
  if (!segs) return { ok: false, error: 'unsupported expression (not a pure string concatenation)' };
  if (typeof newValue !== 'string') return { ok: false, error: 'type mismatch: target is a string' };
  const oldValue = segs.join('');
  if (expectedOld !== undefined && oldValue !== expectedOld)
    return { ok: false, error: 'stale: on-disk value differs from expectedOld', oldValue };

  const before = collectLiterals(ast);
  const indent = ' '.repeat(target.loc.start.column);
  const nl = /\r\n/.test(src) ? '\r\n' : '\n'; // preserve the file's line ending
  const [start, end] = nodeRange(target, src);
  const replacement = rewrap(newValue).map((s) => JSON.stringify(s)).join(' +' + nl + indent);
  const newSrc = src.slice(0, start) + replacement + src.slice(end);

  let ast2, t2;
  try { ast2 = parseModule(newSrc); } catch (e) { return { ok: false, error: 'round-trip reparse failed: ' + e.message }; }
  try { t2 = locate(ast2, path); } catch (e) { return { ok: false, error: 'round-trip locate failed: ' + e.message }; }
  const reVal = t2.type === 'BinaryExpression' ? (flattenConcat(t2) || []).join('') : literalValue(t2);
  if (reVal !== newValue) return { ok: false, error: 'round-trip verify failed: value mismatch' };
  if (!onlyTargetChanged(before, collectLiterals(ast2), JSON.stringify(path)))
    return { ok: false, error: 'round-trip verify failed: another field changed' };

  return { ok: true, newSrc, oldValue, newValue, diff: makeLineDiff(src, newSrc) };
}

// High-level v1 op. Returns { ok, newSrc, oldValue, newValue, diff } or { ok:false, error }.
export function editSetValue(src, path, newValue, expectedOld) {
  let ast;
  try { ast = parseModule(src); } catch (e) { return { ok: false, error: 'parse failed: ' + e.message }; }

  let target;
  try { target = locate(ast, path); } catch (e) { return { ok: false, error: 'locate failed: ' + e.message }; }

  if (target.type === 'BinaryExpression')
    return editConcat(src, ast, target, path, newValue, expectedOld);

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
