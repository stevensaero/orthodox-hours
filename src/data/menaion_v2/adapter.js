// Menaion V2 adapter — what the services read from a V2 day.
// Plan and rulings: menaion_v2_wirein_spec.md (0, 3, 6). Pure functions, no React.
//
// STATUS: the HOURS slice (identity, troparia, kontakia) and the V1-shaped view of
// those fields. Vespers, Typica and the dismissal are not built yet.
//
// A V2 day is { commemorations: [c0, c1...] }. Each commemoration is ONE printed
// service (ruling 4); saints sharing a service are tagged `saint` on its hymns.
import { ocaHymn, ocaSlotsForKey, stripCaret } from '../oca_hymns/index.js';

export const HOURS = ['1st_hour', '3rd_hour', '6th_hour', '9th_hour'];
const isText = (n) => !!n && typeof n.text === 'string';
const isAbsent = (n) => !!n && n.absent === true;
const labels = (n) => [].concat(n?.label ?? []);
const ofFeast = (n) => labels(n).includes('of_the_feast') || ['feast', 'forefeast'].includes(n?.saint);
const isIkos = (n) => n?.sourceLabel === 'Ikos';
const FEAST_KINDS = ['forefeast', 'afterfeast', 'apodosis'];

// The services of a day, default first (ruling 8: the one marked oca_primary).
export function servicesOf(day, key) {
  const list = (day?.commemorations ?? []).map((c, index) => ({ c, index, path: `${key}.c${index}` }));
  return list.sort((a, b) => (b.c.oca_primary ? 1 : 0) - (a.c.oca_primary ? 1 : 0) || a.index - b.index);
}

const vespersOf = (c) => (c.great_vespers ? ['great_vespers', c.great_vespers] : ['vespers', c.vespers ?? {}]);

// Every troparion and kontakion a service prints, in print order, each with the
// path it is stored at. Shape A (entry-level fields) and shape B (positional
// lists) come out alike. Nothing is invented: an absence node stays an absence.
export function hymnsOf(c, base) {
  const [vname, v] = vespersOf(c); const m = c.matins ?? {};
  const tag = (n, path) => ({ ...n, path: `${base}.${path}` });
  const out = { troparia: [], troparion_alt: null, ode3: [], ode6: [], ikoi: [], absent: {} };
  if (isText(c.troparion)) out.troparia.push(tag(c.troparion, 'troparion'));
  else if (isAbsent(c.troparion)) out.absent.troparion = c.troparion;
  (v.troparia ?? []).forEach((n, i) => isText(n) && out.troparia.push(tag(n, `${vname}.troparia[${i}]`)));
  if (isText(v.troparion_alternate)) out.troparion_alt = tag(v.troparion_alternate, `${vname}.troparion_alternate`);
  // Entry-level kontakion: the page prints it once, after Ode VI.
  if (isText(c.kontakion)) out.ode6.push(tag(c.kontakion, 'kontakion'));
  else if (isAbsent(c.kontakion)) out.absent.kontakion = c.kontakion;
  if (isText(c.ikos)) out.ikoi.push(tag(c.ikos, 'ikos'));
  for (const [list, key] of [[out.ode3, 'kontakia_ode3'], [out.ode6, 'kontakia_ode6']])
    (m[key] ?? []).forEach((n, i) => {
      if (!isText(n)) return;
      (isIkos(n) ? out.ikoi : list).push(tag(n, `matins.${key}[${i}]`));
    });
  return out;
}

// What the four Hours read on a WEEKDAY, by Fekula's rule for the section
// (ODS ch. 2; project doc "fekula hours rules"). The Sunday rule (1A: the
// resurrectional troparion first, the Sunday kontakion only) is laid over this
// by the assembler, which knows the day of the week.
//
// `oca`: { troparion, kontakion, feast_troparion, ... } from the OCA layer when
// "Prefer OCA" is on (ruling 11), else null. An OCA hymn replaces the Menaion
// hymn in the same place; the Menaion node is kept beside it as `menaion`.
export function hoursPlan(c, base, oca = null) {
  const h = hymnsOf(c, base); const notes = [];
  const feastDay = FEAST_KINDS.includes(c.kind);
  const section = c.fekula_section;
  const feastTrop = h.troparia.find(ofFeast) ?? null;
  const saintTrops = h.troparia.filter((n) => !ofFeast(n));
  const kont = (list, feast) => list.find((n) => ofFeast(n) === feast) ?? null;
  const feastKont = kont(h.ode6, true) ?? kont(h.ode3, true);
  const saintOde3 = kont(h.ode3, false); const saintOde6 = kont(h.ode6, false);

  const over = (node, slot, role) => {
    const o = oca?.[slot];
    if (o) return { role, source: 'oca', node: o, menaion: node ?? null };
    if (node) return { role, source: 'menaion', node };
    return null;
  };
  const gap = (what, absent) => {
    notes.push(absent
      ? `${what}: the Menaion prints none (${absent.reason}); General Menaion fallback not yet wired.`
      : `${what}: none found in this service.`);
    return { role: what, source: 'none', node: null };
  };

  let troparia; let byHour; let rule;
  if (feastDay) {
    const feast = over(feastTrop, 'feast_troparion', 'feast');
    const saint = over(saintTrops[0], 'troparion', 'saint');
    const fk = over(feastKont, 'feast_kontakion', 'feast');
    const sk = over(saintOde6 ?? saintOde3, 'kontakion', 'saint');
    if (section === '2G3') {
      troparia = [feast ?? gap('troparion of the feast')];
      byHour = () => fk; rule = '2G3: troparion and kontakion of the feast.';
    } else {
      troparia = [feast ?? gap('troparion of the feast'), ...(saint ? [saint] : [])];
      if (saintTrops.length > 1) notes.push(`${saintTrops.length} troparia of saints are printed; "if there be troparia for two saints, they are alternated" (2G1). The first is shown.`);
      const alternate = section === '2G2' || section === '2G4' || c.rank === 'doxology';
      if (alternate && sk) {
        const saintFirst = section === '2G4';
        byHour = (hr) => ((hr === '1st_hour' || hr === '6th_hour') === saintFirst ? sk : fk);
        rule = `${section}: troparion of the feast, Glory, of the saint; kontakion of the ${saintFirst ? 'saint' : 'feast'} at the 1st and 6th Hours, of the ${saintFirst ? 'feast' : 'saint'} at the 3rd and 9th.`;
      } else {
        byHour = () => fk;
        rule = `${section}: troparion of the feast, Glory, of the saint; kontakion of the feast only.`;
      }
    }
  } else {
    const own = c.kind === 'feast' ? 'feast' : 'saint';
    const first = over(saintTrops[0] ?? feastTrop, 'troparion', own);
    troparia = [first ?? gap('troparion', h.absent.troparion)];
    if (saintTrops.length > 1 && section === '2B') {
      troparia.push({ role: 'saint', source: 'menaion', node: saintTrops[1] });
    } else if (saintTrops.length > 1) notes.push(`${saintTrops.length} troparia are printed; the first is shown.`);
    // Two kontakia (after Ode III and after Ode VI): V1's rule is kept (ruling 10):
    // the Ode III kontakion at the 1st and 6th Hours, the Ode VI at the 3rd and 9th.
    const k6 = saintOde6 ?? feastKont; const k3 = saintOde3;
    const o = oca?.kontakion ? { role: own, source: 'oca', node: oca.kontakion, menaion: k6 ?? k3 ?? null } : null;
    const m6 = k6 ? { role: own, source: 'menaion', node: k6 } : null;
    const m3 = k3 ? { role: own, source: 'menaion', node: k3 } : null;
    if (o) { byHour = () => o; rule = `${section}: troparion and kontakion (OCA prints one kontakion; it is read at every Hour).`; }
    else if (m3 && m6) { byHour = (hr) => (hr === '1st_hour' || hr === '6th_hour' ? m3 : m6); rule = `${section}: troparion from the Menaion; two kontakia are printed: Ode III at the 1st and 6th Hours, Ode VI at the 3rd and 9th.`; }
    else { const only = m6 ?? m3; byHour = () => only; rule = `${section}: troparion and kontakion from the Menaion.`; }
  }
  for (const t of troparia) if (t.node && t.node.tone == null) notes.push(`The ${t.role} troparion is printed here with no tone.`);
  const kontakion = Object.fromEntries(HOURS.map((hr) => [hr, byHour(hr) ?? gap('kontakion', h.absent.kontakion)]));
  return { section, rank: c.rank, kind: c.kind, rule, troparia, kontakion, troparion_alt: h.troparion_alt, notes: [...new Set(notes)] };
}

// The OCA hymns for a date, as { slot: node }, or null when there are none.
export async function ocaFor(key) {
  const slots = ocaSlotsForKey(key);
  if (!slots.length) return null;
  const out = {};
  for (const s of slots) { const n = await ocaHymn(key, s); if (n) out[s] = n; }
  return Object.keys(out).length ? out : null;
}

// Text as shown or sung: the undefined OCA '^' mark hidden (Q-0007).
export const shown = (node) => (node ? stripCaret(node.text) : null);

// The V1 field names the present assemblers read, filled from V2 for the Hours.
export function toV1Hours(c, base, oca = null) {
  const p = hoursPlan(c, base, oca);
  const v1 = (slot) => (slot?.node ? { ...slot.node, text: shown(slot.node), _source: slot.source } : null);
  return {
    saint: [].concat(c.title ?? []).map((t) => t.text ?? t).join(' '),
    rank: c.rank, fekula_section: c.fekula_section, oca_primary: !!c.oca_primary, note: c.note,
    ...(FEAST_KINDS.includes(c.kind) ? { fekula_section_override: c.fekula_section } : {}),
    troparion: v1(p.troparia[0]), troparion_second: v1(p.troparia[1]),
    kontakion_ode3: v1(p.kontakion['1st_hour']), kontakion_ode6: v1(p.kontakion['3rd_hour']),
    _plan: p, _path: base,
  };
}
