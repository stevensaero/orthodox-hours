// tools/test_menaion_v2_mount.mjs — MOUNT the Menaion V2 browser and click through it.
// (Also: the Prefer OCA toggle on and off, and every captured OCA service text opened whole.)
//
// The render gate server-renders RCommemoration with data handed to it, which
// never runs the BROWSER component's own effects, rail or audit view. On 14 Nov
// 2026 that gap shipped: the date rail called .slice() on a commemoration title
// (a text node, not a string) and the whole page fell into the ErrorBoundary the
// moment a month with data existed. Nothing in the gate set could see it.
//
// This mounts the real component in jsdom, lets its effects load the data, and
// visits every encoded date and commemoration in both the reading and the audit
// view. Any thrown error or React error-boundary trip fails the gate.
// Needs jsdom (devDependency).
import { build } from 'vite';
import { JSDOM } from 'jsdom';
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const TMP = join(ROOT, '.mount-test'), OUT = join(ROOT, '.mount-test-out');
mkdirSync(join(TMP, 'src'), { recursive: true });
writeFileSync(join(TMP, 'src/entry.jsx'), `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import Browser from ${JSON.stringify(join(ROOT, 'src/components/menaion-v2-browser.jsx'))};
import { MONTH_LOADERS } from ${JSON.stringify(join(ROOT, 'src/data/menaion_v2/index.js'))};
export { MONTH_LOADERS };
export function mount(el) { const r = createRoot(el); flushSync(() => r.render(React.createElement(Browser))); return r; }
`);
await build({ root: TMP, configFile: false, logLevel: 'error',
  build: { ssr: join(TMP, 'src/entry.jsx'), outDir: OUT, emptyOutDir: true,
           rollupOptions: { external: ['react', 'react-dom', 'react-dom/client'] } } });
const bundle = readdirSync(OUT).find(f => /^entry\.m?js$/.test(f));

const sleep = ms => new Promise(r => setTimeout(r, ms));
const errors = [];
let visits = 0;

async function visit(url, label, expectText, opts = {}) {
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url, pretendToBeVisual: true });
  const { window } = dom;
  for (const k of ['window', 'document', 'localStorage', 'HTMLElement', 'Node', 'MutationObserver', 'getComputedStyle', 'requestAnimationFrame', 'cancelAnimationFrame'])
    Object.defineProperty(globalThis, k, { value: window[k]?.bind ? window[k].bind(window) : window[k], configurable: true, writable: true });
  Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true, writable: true });
  globalThis.window = window; globalThis.document = window.document;
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.scrollTo = () => {};
  const onErr = e => errors.push(`${label}: ${e?.error?.message ?? e?.message ?? e}`);
  window.addEventListener('error', onErr);
  const origErr = console.error;
  console.error = (...a) => { const m = a.map(String).join(' '); if (/Error|not a function|Cannot read|undefined is not/.test(m)) errors.push(`${label}: ${m.slice(0, 300)}`); };
  try {
    const mod = await import(join(OUT, bundle) + `?v=${visits}`);
    if (opts.preferOca != null) window.localStorage.setItem('prefer_oca', opts.preferOca ? '1' : '0');
    mod.mount(window.document.getElementById('root'));
    await sleep(opts.wait ?? 120);
    const text = window.document.body.textContent;
    for (const t of opts.must ?? []) if (!text.includes(t)) errors.push(`${label}: expected on the page: ${JSON.stringify(t)}`);
    for (const t of opts.mustNot ?? []) if (text.includes(t)) errors.push(`${label}: should not be on the page: ${JSON.stringify(t)}`);
    // Every hymn the services take from this page must be findable by its stored path:
    // that path is what the Hours tool's "source" link carries (#11-15.c0.troparion).
    for (const id of opts.ids ?? []) if (!window.document.getElementById(id)) errors.push(`${label}: no element with id ${JSON.stringify(id)}; a "source" link to this hymn would not find it`);
    // `clickOca`: click the first OCA badge, as a reader would; the OCA text must open at that hymn.
    if (opts.clickOca) { const b = [...window.document.querySelectorAll('[role="button"]')].find((x) => /^OCA \d{4}/.test(x.textContent.trim()));
      if (!b) errors.push(`${label}: no OCA badge to click`); else { b.click(); await sleep(400); const t2 = window.document.body.textContent;
        for (const t of opts.clickOca) if (!t2.includes(t)) errors.push(`${label}: after clicking the OCA badge, expected ${JSON.stringify(t)}`); } }
    if (expectText && !text.includes(expectText)) errors.push(`${label}: expected text not on the page: ${JSON.stringify(expectText.slice(0, 60))}`);
    // the audit view, by clicking the page's own button
    const auditBtn = [...window.document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Audit');
    if (auditBtn) { auditBtn.click(); await sleep(60); }
    else errors.push(`${label}: no Audit button found`);
    visits++;
  } catch (e) { errors.push(`${label}: THREW ${e.message}`); }
  finally { console.error = origErr; }
}

const { MONTH_LOADERS } = await import(join(OUT, bundle));
const { hymnsOf, entrancePlan } = await import('../src/data/menaion_v2/adapter.js');
let linked = 0;
const pathsOf = (c, base) => {
  const h = hymnsOf(c, base); const ep = entrancePlan(c, base, {});
  const nodes = [...h.troparia, h.troparion_alt, ...h.ode3, ...h.ode6, ...h.ikoi, ep.feast.troparion?.node, ep.feast.kontakion?.node, ...ep.saints.troparia.map((x) => x?.node), ...ep.saints.kontakia.map((x) => x?.node), ...(ep.beatitudes?.items ?? [])];
  const ids = [...new Set(nodes.map((n) => n?.path).filter((p) => p && p.startsWith(base + '.')))]; linked += ids.length; return ids;
};
for (const mm of Object.keys(MONTH_LOADERS)) {
  const data = await MONTH_LOADERS[mm]();
  for (const [dk, d] of Object.entries(data))
    for (let i = 0; i < d.commemorations.length; i++) {
      const e = d.commemorations[i];
      const probe = (typeof e.title === 'string' ? e.title : e.title?.text) ?? '';
      await visit(`https://example.org/orthodox-hours/menaion-v2?comm=${dk}#${encodeURIComponent(`${dk}.c${i}.matins`)}`, `${dk}.c${i}`, probe, { ids: pathsOf(e, `${dk}.c${i}`) });
    }
}
await visit('https://example.org/orthodox-hours/menaion-v2', 'no date selected', null);

// ── OCA texts in the viewer ──────────────────────────────────────────────────
// Prefer OCA on: a matched hymn shows the OCA's words (no brackets: they are
// underlines) with its mark, and the Menaion's own words for that hymn are not
// the ones on the page. Off: the page is the printed book again.
// The year is given, as the Hours tool gives it: an OCA text is "for this day" only in its own year.
const u = 'https://example.org/orthodox-hours/menaion-v2?comm=11-15&date=2026-11-15';
await visit(u, '11-15 prefer OCA on', null, { preferOca: true, wait: 400,
  must: ['Prefer OCA texts', 'OCA 2026', 'The most wise Abíbus, the wondrous Samónas', 'OCA text for this day'], mustNot: ['The all-wise Abibus, * the wondrous Samonas', '[Gúr]ias', 'Archive: OCA text'] });
// Another year (ruling, 15 Nov 2026): the same date's text is an archive record, loudly so,
// while a matched hymn is still shown hymn by hymn under "Prefer OCA texts".
await visit('https://example.org/orthodox-hours/menaion-v2?comm=11-15&date=2027-11-15', '11-15 in 2027: rail', null, { preferOca: true, wait: 400,
  must: ['Archive: OCA text for Nov 15, 2026', 'OCA 2026'], mustNot: ['OCA text for this day'] });
await visit('https://example.org/orthodox-hours/menaion-v2?oca=2026-1115-texts-tt-&date=2027-11-15', '11-15 in 2027: the text', null, { wait: 300,
  must: ['ARCHIVE. Published by the OCA for November 15, 2026.', 'Do not use it liturgically outside 2026.'] });
await visit('https://example.org/orthodox-hours/menaion-v2?oca=2026-1115-texts-tt-&date=2026-11-15', '11-15 in 2026: the text', null, { wait: 300,
  must: ['OCA service text for November 15, 2026', 'It was issued for this day in 2026'], mustNot: ['ARCHIVE.', 'Do not use it liturgically'] });
// The OCA badge on a hymn opens the OCA service text it came from, at that hymn.
await visit('https://example.org/orthodox-hours/menaion-v2?comm=11-15&date=2026-11-15', '11-15: the OCA badge', null, { preferOca: true, wait: 400,
  clickOca: ['the hymn you came from', 'OCA service text for', 'back to the Menaion'] });
// No year given: the calendar year stands in.
{ const now = new Date().getFullYear() === 2026;
  await visit('https://example.org/orthodox-hours/menaion-v2?comm=11-15', '11-15, no year given', null, { wait: 400,
    must: [now ? 'OCA text for this day' : 'Archive: OCA text for Nov 15, 2026'], mustNot: [now ? 'Archive: OCA text' : 'OCA text for this day'] }); }
await visit(u, '11-15 prefer OCA off', null, { preferOca: false, wait: 400,
  must: ['The all-wise Abibus, * the wondrous Samonas'], mustNot: ['OCA 2026', 'The most wise Abíbus'] });
// Every captured OCA service text opens whole.
const { ocaStems, loadOcaDoc, ocaTexts } = await import(join(ROOT, 'src/data/oca_hymns/index.js'));
for (const stem of ocaStems()) {
  const last = ocaTexts(await loadOcaDoc(stem)).at(-1).text.replace(/[\[\]^]/g, '').split(/ \| | \/\/ /)[0];
  await visit(`https://example.org/orthodox-hours/menaion-v2?oca=${encodeURIComponent(stem)}&date=${stem.slice(0, 4)}-01-01`, `OCA text ${stem}`, null, { wait: 250, must: ['OCA service text for', 'back to the Menaion', last] });
}

rmSync(TMP, { recursive: true, force: true }); rmSync(OUT, { recursive: true, force: true });
for (const e of errors) console.log('  ✗ ' + e);
console.log(`${linked} hymn paths the services use were looked for on their pages`);
console.log(`\nMenaion V2 browser mounted ${visits} time(s) (every encoded commemoration, reading and audit views) · ${errors.length} error(s)`);
if (errors.length) { console.log('FAIL'); process.exit(1); }
console.log('✓ Menaion V2 mount gate: PASS');
process.exit(0);
