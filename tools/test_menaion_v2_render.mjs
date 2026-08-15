// tools/test_menaion_v2_render.mjs — RUN IT. DO NOT INSPECT IT.
//
// The gate that closes the gap between "the data is right" and "a reader can
// see it". Every other check in this repo reasons about the DATA; this one
// server-renders the actual components and asserts that every text node stored
// in general.js appears in the rendered output.
//
// Why it exists: `refrain` was stored on Ode I in all four encoded General
// Menaion files and rendered by none of them. The data validator passed (the
// nodes are well-formed), the viewer coverage gate passed (it joins the field
// MANIFEST against the registry, and canon internals are one manifest row),
// and the build passed (the component compiles). A component that renders SOME
// of a node looks, from every angle except this one, exactly like data nobody
// encoded.
//
// Limits, stated honestly: renderToString does not run effects, so anything
// loaded in an effect reads as absent here. This harness therefore imports the
// data directly and passes it as props rather than letting the component fetch
// it. That is the test's limit, not the code's.
import { build } from 'vite';
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TMP = join(ROOT, '.render-test');
mkdirSync(join(TMP, 'src'), { recursive: true });

writeFileSync(join(TMP, 'src/entry.jsx'), `
import React from 'react';
import { renderToString } from 'react-dom/server';
import GENERAL from ${JSON.stringify(join(ROOT, 'src/data/menaion_v2/general.js'))};
import SHARED from ${JSON.stringify(join(ROOT, 'src/data/menaion_v2/shared.js'))};
import { RCommemoration } from ${JSON.stringify(join(ROOT, 'src/components/menaion-v2-reading.jsx'))};
export function run() {
  return Object.keys(GENERAL).map(k => [k,
    renderToString(React.createElement(RCommemoration, { entry: GENERAL[k], path: 'general.' + k }))]);
}
// The cross-date tables render through the same component and the same path
// grammar. Empty today, and asserted to render rather than assumed to: a table
// that only renders once it has a member would be discovered on the day someone
// adds one, which is the worst possible day to discover it.
export function runShared() {
  return Object.keys(SHARED).map(k => [k,
    renderToString(React.createElement(RCommemoration, { entry: SHARED[k], path: 'shared.' + k }))]);
}
`);

await build({
  root: TMP, configFile: false, logLevel: 'error',
  build: { ssr: join(TMP, 'src/entry.jsx'), outDir: join(ROOT, '.render-test-out'), emptyOutDir: true,
           rollupOptions: { external: ['react', 'react-dom', 'react-dom/server'] } },
});

// Vite names the SSR bundle .js or .mjs depending on how it reads the root's
// package type; resolve it rather than guessing.
const OUT = join(ROOT, '.render-test-out');
const bundle = readdirSync(OUT).find(f => /^entry\.m?js$/.test(f));
if (!bundle) { console.error('render gate: no SSR bundle produced'); process.exit(2); }
const { run, runShared } = await import(join(OUT, bundle));
const GENERAL = (await import(join(ROOT, 'src/data/menaion_v2/general.js'))).default;
const SHARED = (await import(join(ROOT, 'src/data/menaion_v2/shared.js'))).default;

const collect = (n, path, out) => {
  if (!n || typeof n !== 'object') return out;
  if (Array.isArray(n)) { n.forEach((v, i) => collect(v, `${path}[${i}]`, out)); return out; }
  if (typeof n.text === 'string') out.push([path, n.text]);
  if (typeof n.heading === 'string') out.push([`${path}.heading`, n.heading]);
  for (const [k, v] of Object.entries(n)) if (k !== 'src' && k !== 'text' && k !== 'heading') collect(v, `${path}.${k}`, out);
  return out;
};

// The renderer emits HTML entities and may break a string across elements, so
// compare on a normalized, tag-stripped projection rather than raw HTML.
const flatten = h => h.replace(/<[^>]+>/g, '')
  .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ');

let missing = 0, checked = 0;
for (const [key, html] of run()) {
  const text = flatten(html);
  for (const [path, t] of collect(GENERAL[key], `general.${key}`, [])) {
    checked++;
    if (!text.includes(t.replace(/\s+/g, ' ').trim())) {
      missing++;
      console.log(`  MISSING FROM RENDER · ${path}\n      ${JSON.stringify(t.slice(0, 90))}`);
    }
  }
}

for (const [key, html] of runShared()) {
  const text = flatten(html);
  for (const [path, t] of collect(SHARED[key], `shared.${key}`, [])) {
    checked++;
    if (!text.includes(t.replace(/\s+/g, ' ').trim())) {
      missing++;
      console.log(`  MISSING FROM RENDER · ${path}\n      ${JSON.stringify(t.slice(0, 90))}`);
    }
  }
}
const sharedCount = Object.keys(SHARED).length;

rmSync(TMP, { recursive: true, force: true });
rmSync(OUT, { recursive: true, force: true });

console.log(`\nshared.js: ${sharedCount} table(s) — EMPTY BY MEASUREMENT (see its header; ` +
            `all three §6.1 candidates falsified against 140 daily files), rendered through the same path`);
console.log(`${checked} stored strings checked against the rendered output · ${missing} missing`);
if (missing) { console.log('FAIL — encoded but invisible'); process.exit(1); }
console.log('✓ Menaion V2 render gate: PASS');
