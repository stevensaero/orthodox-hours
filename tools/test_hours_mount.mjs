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
  ['2026-11-15', 'vespers', ['When He who trieth our hearts', '(1 of 2)', 'When Christ called thee', 'Prophet David, the ancestor of God', 'Like a high-flying eagle', 'Christ the Lord, my Creator and Redeemer', 'O holy Apostle and Evangelist Matthew', 'Old Testament Lessons', '1 John 3:21-4:6', 'Wisdom, Aright'], ['not yet entered', 'Kontakion (Both now', 'not yet encoded for this date', '1 Peter 1:1-2:6', 'appointed by the OCA']],   // Sunday evening for 11-16: 8 stichera with repeats, Glory, the printed dogmaticon
  ['2026-11-16', 'typica', ['Their sound hath gone forth into all the earth', 'Matthew 9:9-13', 'Kontakion — ', '· Tone 4'], ['OCA: sung', 'OCA: not in the OCA text', 'The OCA service text for this day']],                               // Monday, Apostle Matthew: the Menaion's prokeimenon and Gospel
  ['2026-11-24', 'vespers', ['Today is the prelude'], ['Wisdom, Aright', 'Kontakion (Both now']],                                   // Tuesday evening for 11-25, doxology: no entrance, no kontakion
  ['2026-11-29', 'vespers', ['Litiya', 'The apostle Andrew, O Lord', 'Let us praise Andrew, the preacher'], ['not yet entered']],   // Sunday evening for 11-30: the Litiya the page prints
  ['2026-11-21', 'vespers', ['O most glorious wonder', 'As a branch of the Vine of life', 'Let heaven rejoice today', 'Troparion of the Resurrection', 'O holy apostles', 'Today is the prelude of the good will', 'Litiya', 'Today the Theotokos, the temple'], ['not yet entered', 'Kontakion (Both now']],                                        // Saturday evening for 11-22: feast and saint stichera, Glory of the feast
  ['2026-11-22', 'liturgy', ['Troparion 7 of 10', 'Ode I'], ['Festal Antiphons']],                    // Sunday afterfeast: six of the resurrection, four of the feast as the page prints
  ['2026-11-21', 'liturgy', ['Troparion 1 of 8', 'Troparion of the Feast', 'Today is the prelude of the good will'], ['Festal Antiphons']], // feast of the Theotokos: the Typika with its printed troparia; the OCA troparion
  ['2026-11-25', 'liturgy', ['Philippians 3:20-4:3', 'Hebrews 9:1-7', 'Matthew 5:14-19'], []],        // Wednesday apodosis: ODS vol. III appoints the day's, the feast's and the hieromartyrs' readings
  ['2026-11-25', '6th_hour', ['Today is the prelude of the good will', 'O God of our fathers'], ['not yet encoded', 'thou didst gloriously amaze']],     // feast (its matched OCA text), Glory, of the hieromartyrs (the Menaion's: no matched OCA text; nothing is taken from the OCA text by its date) (the vol. III order; its citation is behind the Fekula badge)
  ['2026-11-30', 'typica', ['the holy and all-praised Apostle Andrew the First-called, whose memory we celebrate'], ['COMMEMORATION OF']], // the dismissal names the saint by the hand-entered name
  ['2026-11-21', 'typica', ['have mercy upon us and save us'], ['whose memory we celebrate']],                                         // a feast of the Theotokos: no saint is added
  ['2026-11-14', '1st_hour', ['Multiple services available', 'Gregory Palamas', 'The holy and all-praised Apostle Philip', 'Prefer OCA texts', 'Polyeleos', 'Assembled per Fekula §2E'], ['COMMEMORATION OF', 'Assembled per Fekula §2A']], // the chooser lists the V2 services by name, the OCA's first
  ['2026-11-14', '1st_hour', ['Prefer OCA texts'], ['entreat the merciful God', 'not yet encoded'], { prefer_oca: '0' }],                                         // Prefer OCA off: the Menaion's troparion, not the OCA's
  ['2026-11-14', '1st_hour', ['O wonderworker Gregory, instructor in Orthodoxy'], ['not yet encoded'], null, 1],   // choosing the second service re-assembles the Hour for it
  ['2027-11-15', '6th_hour', ['You received grace from on high'], ['not yet encoded'], { prefer_oca: '1' }, null, [/\/menaion-v2\?date=2027-11-15&from=tool#11-15\.c0\.kontakion$/, /\/octoechos-v2\?.*#\d\d-\d\d\./]],   // a hymn shown in the OCA's words links to the place in OUR book it stands in (the viewer shows the OCA text there too)
  ['2026-11-16', '1st_hour', ['O come, let us worship'], ['not yet encoded'], { prefer_oca: '0' }, null, [/\/menaion-v2\?.*#11-16\.c0/, /\/octoechos-v2\?.*#\d\d-\d\d\./]],   // a Menaion hymn links to its own place in the Menaion (Prefer OCA off, so the Menaion's texts show)
  // ── Dates the retired summarized Menaion used to serve (v0.53.0). Each service must still
  // assemble: the Pentecostarion's own material where it governs, "not yet encoded" where the
  // Menaion would supply a hymn, and no error.
  ['2026-05-17', '3rd_hour', ['O come, let us worship'], []],   // Sunday of the Blind Man (P+35)
  ['2026-05-17', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Sunday of the Blind Man (P+35)
  ['2026-05-17', 'liturgy', ['Blessed is the Kingdom'], []],   // Sunday of the Blind Man (P+35)
  ['2026-05-17', 'typica', ['Bless the Lord, O my soul'], []],   // Sunday of the Blind Man (P+35)
  ['2026-05-20', '3rd_hour', ['O come, let us worship'], []],   // Pentecostarion weekday (P+38)
  ['2026-05-20', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Pentecostarion weekday (P+38)
  ['2026-05-20', 'liturgy', ['Blessed is the Kingdom'], []],   // Pentecostarion weekday (P+38)
  ['2026-05-20', 'typica', ['Bless the Lord, O my soul'], []],   // Pentecostarion weekday (P+38)
  ['2026-05-21', '3rd_hour', ['O come, let us worship'], []],   // Ascension (P+39)
  ['2026-05-21', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Ascension (P+39)
  ['2026-05-21', 'liturgy', ['Blessed is the Kingdom'], []],   // Ascension (P+39)
  ['2026-05-21', 'typica', ['Bless the Lord, O my soul'], []],   // Ascension (P+39)
  ['2026-05-31', '3rd_hour', ['O come, let us worship'], []],   // Pentecost (P+49)
  ['2026-05-31', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Pentecost (P+49)
  ['2026-05-31', 'liturgy', ['Blessed is the Kingdom'], []],   // Pentecost (P+49)
  ['2026-05-31', 'typica', ['Bless the Lord, O my soul'], []],   // Pentecost (P+49)
  ['2026-06-13', '3rd_hour', ['O come, let us worship'], []],   // Saturday evening before All Saints of North America
  ['2026-06-13', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Saturday evening before All Saints of North America
  ['2026-06-13', 'liturgy', ['Blessed is the Kingdom'], []],   // Saturday evening before All Saints of North America
  ['2026-06-13', 'typica', ['Bless the Lord, O my soul'], []],   // Saturday evening before All Saints of North America
  ['2026-06-14', '3rd_hour', ['O come, let us worship'], []],   // All Saints of North America (P+63)
  ['2026-06-14', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // All Saints of North America (P+63)
  ['2026-06-14', 'liturgy', ['Blessed is the Kingdom'], []],   // All Saints of North America (P+63)
  ['2026-06-14', 'typica', ['Bless the Lord, O my soul'], []],   // All Saints of North America (P+63)
  ['2026-06-30', '3rd_hour', ['O come, let us worship'], []],   // ordinary weekday in June
  ['2026-06-30', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // ordinary weekday in June
  ['2026-06-30', 'liturgy', ['Blessed is the Kingdom'], []],   // ordinary weekday in June
  ['2026-06-30', 'typica', ['Bless the Lord, O my soul'], []],   // ordinary weekday in June
  ['2026-07-19', '3rd_hour', ['O come, let us worship'], []],   // ordinary Sunday in July
  ['2026-07-19', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // ordinary Sunday in July
  ['2026-07-19', 'liturgy', ['Blessed is the Kingdom'], []],   // ordinary Sunday in July
  ['2026-07-19', 'typica', ['Bless the Lord, O my soul'], []],   // ordinary Sunday in July
  ['2026-09-20', '3rd_hour', ['O come, let us worship'], []],   // Sunday in the afterfeast of the Cross
  ['2026-09-20', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Sunday in the afterfeast of the Cross
  ['2026-09-20', 'liturgy', ['Blessed is the Kingdom'], []],   // Sunday in the afterfeast of the Cross
  ['2026-09-20', 'typica', ['Bless the Lord, O my soul'], []],   // Sunday in the afterfeast of the Cross
  ['2026-10-01', '3rd_hour', ['O come, let us worship'], []],   // Protection, not yet captured
  ['2026-10-01', 'vespers', ['Now lettest Thou Thy servant depart in peace'], []],   // Protection, not yet captured
  ['2026-10-01', 'liturgy', ['Blessed is the Kingdom'], []],   // Protection, not yet captured
  ['2026-10-01', 'typica', ['Bless the Lord, O my soul'], []],   // Protection, not yet captured
];
let bad = 0;
for (const [iso, service, must, mustNot, local, pick, links] of CASES) {
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', { url: 'http://localhost/orthodox-hours/', pretendToBeVisual: true });
  const { window } = dom;
  window.sessionStorage.setItem('hours.date', iso); window.sessionStorage.setItem('hours.serviceKey', service);
  for (const [k, v] of Object.entries(local ?? {})) window.localStorage.setItem(k, v);   // a reader's saved setting
  window.sessionStorage.setItem('hours.contextOpen', '1');   // the context card open, as a reader leaves it
  for (const k of Object.getOwnPropertyNames(window)) { if (k in globalThis) continue; try { Object.defineProperty(globalThis, k, { value: window[k], configurable: true, writable: true }); } catch { /* skip */ } }
  for (const k of ['window', 'document', 'navigator', 'localStorage', 'sessionStorage']) Object.defineProperty(globalThis, k, { value: k === 'window' ? window : window[k], configurable: true, writable: true });
  class Obs { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  for (const k of ['IntersectionObserver', 'ResizeObserver']) { window[k] = window[k] || Obs; globalThis[k] = window[k]; }
  window.scrollTo = () => {}; window.matchMedia = window.matchMedia || (() => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }));
  const errs = []; const ce = console.error; console.error = (...a) => errs.push(a.map(String).join(' ').slice(0, 200));
  let text = ''; let hrefs = [];
  try {
    const mod = await import(join(OUT, bundle) + '?d=' + iso + service + (local ? JSON.stringify(local) : ''));
    mod.mount(window.document.getElementById('root'));
    // `pick`: choose the n-th service in the chooser, as a reader would, once it is drawn.
    if (pick != null) { for (let i = 0; i < 40; i++) { await sleep(100); const r = window.document.querySelectorAll('input[name="serviceSelector"]'); if (r.length > pick) { r[pick].click(); break; } } }
    for (let i = 0; i < 40; i++) { await sleep(100); text = window.document.body.textContent; if (must.every((m) => text.includes(m))) break; }
    hrefs = [...window.document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href'));
  } catch (e) { errs.push('THREW ' + (e.stack || e).toString().slice(0, 400)); }
  console.error = ce;
  const miss = must.filter((m) => !text.includes(m)); const extra = mustNot.filter((m) => text.includes(m));
  // `links`: [a pattern some link must match, a pattern no link may match].
  if (links) { if (!hrefs.some((h) => links[0].test(h))) miss.push('link ' + links[0]); if (hrefs.some((h) => links[1].test(h))) extra.push('link ' + links[1]); }
  const fatal = errs.filter((e) => /THREW|Error boundary|Something went wrong|is not defined|Cannot read/.test(e));
  if (miss.length || extra.length || fatal.length) { bad++; console.log(`FAIL ${iso} ${service}: missing ${JSON.stringify(miss)} unexpected ${JSON.stringify(extra)}`); fatal.slice(0, 3).forEach((e) => console.log('   ', e)); console.log('    page text length', text.length, '|', text.replace(/\s+/g, ' ').slice(0, 300)); }
  else console.log(`ok   ${iso} ${service}: ${must.join(' | ')}`);
  window.close();
}
rmSync(TMP, { recursive: true, force: true }); rmSync(OUT, { recursive: true, force: true });
console.log(bad ? `${bad} case(s) failed` : 'Hours mount: OK');
process.exit(bad ? 1 : 0);
