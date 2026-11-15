// tools/test_hours_mount.mjs — MOUNT the tool itself and read the Hours it shows.
// The Hours gate proves the selection code; this proves the page really uses it:
// the app is mounted in jsdom on fixed dates and the rendered Hour is searched
// for the hymns the Menaion V2 plan appoints. Needs jsdom (devDependency).
import { build } from 'vite';
import { JSDOM } from 'jsdom';
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const ROOT = process.cwd();
const TMP = join(ROOT, '.hours-mount'), OUT = join(ROOT, '.hours-mount-out');
mkdirSync(join(TMP, 'src'), { recursive: true });
writeFileSync(join(TMP, 'src/entry.jsx'), `
import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from ${JSON.stringify(join(ROOT, 'src/components/hours-tool.jsx'))};
export function mount(el) { const r = createRoot(el); flushSync(() => r.render(React.createElement(MemoryRouter, null, React.createElement(App)))); return r; }
`);
await build({ root: TMP, configFile: false, logLevel: 'error',
  build: { ssr: join(TMP, 'src/entry.jsx'), outDir: OUT, emptyOutDir: true,
           rollupOptions: { external: ['react', 'react-dom', 'react-dom/client', 'react-router-dom'] } } });
const bundle = readdirSync(OUT).find((f) => /^entry\.m?js$/.test(f));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// [date, service, text that must appear, text that must not]. The date and service
// are set the way the tool itself remembers them (sessionStorage). Vespers on a
// date is the Vespers that opens the NEXT day.
const CASES = [
  ['2026-11-14', '1st_hour', ['entreat the merciful God'], ['not yet encoded']],                      // Saturday, polyeleos, OCA troparion
  ['2026-11-23', '3rd_hour', ['Today is the prelude', 'O God of our fathers'], ['not yet encoded']],  // Monday afterfeast: feast, Glory, saint
  ['2026-11-10', '1st_hour', ['not yet encoded'], []],                                                // a weekday V2 does not hold
  ['2026-11-15', 'vespers', ['When He who trieth our hearts', '(1 of 2)', 'When Christ called thee', 'Prophet David, the ancestor of God'], ['not yet entered']],   // Sunday evening for 11-16: 8 stichera with repeats, Glory, the printed dogmaticon
  ['2026-11-21', 'vespers', ['O most glorious wonder', 'As a branch of the Vine of life', 'Let heaven rejoice today'], ['not yet entered']],                                        // Saturday evening for 11-22: feast and saint stichera, Glory of the feast
];
let bad = 0;
for (const [iso, service, must, mustNot] of CASES) {
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/orthodox-hours/', pretendToBeVisual: true });
  const { window } = dom;
  window.sessionStorage.setItem('hours.date', iso); window.sessionStorage.setItem('hours.serviceKey', service);
  for (const k of Object.getOwnPropertyNames(window)) { if (k in globalThis) continue; try { Object.defineProperty(globalThis, k, { value: window[k], configurable: true, writable: true }); } catch { /* skip */ } }
  for (const k of ['window', 'document', 'navigator', 'localStorage', 'sessionStorage']) Object.defineProperty(globalThis, k, { value: k === 'window' ? window : window[k], configurable: true, writable: true });
  class Obs { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  for (const k of ['IntersectionObserver', 'ResizeObserver']) { window[k] = window[k] || Obs; globalThis[k] = window[k]; }
  window.scrollTo = () => {}; window.matchMedia = window.matchMedia || (() => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }));
  const errs = []; const ce = console.error; console.error = (...a) => errs.push(a.map(String).join(' ').slice(0, 200));
  let text = '';
  try {
    const mod = await import(join(OUT, bundle) + '?d=' + iso + service);
    mod.mount(window.document.getElementById('root'));
    for (let i = 0; i < 40; i++) { await sleep(100); text = window.document.body.textContent; if (must.every((m) => text.includes(m))) break; }
  } catch (e) { errs.push('THREW ' + (e.stack || e).toString().slice(0, 400)); }
  console.error = ce;
  const miss = must.filter((m) => !text.includes(m)); const extra = mustNot.filter((m) => text.includes(m));
  const fatal = errs.filter((e) => /THREW|Error boundary|Something went wrong|is not defined|Cannot read/.test(e));
  if (miss.length || extra.length || fatal.length) { bad++; console.log(`FAIL ${iso} ${service}: missing ${JSON.stringify(miss)} unexpected ${JSON.stringify(extra)}`); fatal.slice(0, 3).forEach((e) => console.log('   ', e)); console.log('    page text length', text.length, '|', text.replace(/\s+/g, ' ').slice(0, 300)); }
  else console.log(`ok   ${iso} ${service}: ${must.join(' | ')}`);
  window.close();
}
rmSync(TMP, { recursive: true, force: true }); rmSync(OUT, { recursive: true, force: true });
console.log(bad ? `${bad} case(s) failed` : 'Hours mount: OK');
process.exit(bad ? 1 : 0);
