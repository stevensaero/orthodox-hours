// Menaion V2 adapter — what the services read from a V2 day.
// Plan and rulings: menaion_v2_wirein_spec.md (0, 3, 6). Pure functions, no React.
//
// STATUS: the HOURS plan. Vespers, Typica and the dismissal are not built yet.
// RULE (Bill, 14 Nov 2026): no shims. The assemblers read these plans as they
// are; nothing here is flattened into the retired V1 field names.
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

// What each of the four Hours reads from the Menaion, by Fekula's rule for the
// section. ODS ch. 2 (weekdays) and ch. 1 (Sundays); the rule applied is returned
// in `rule` with its section number.
//
// opts.sunday: an ordinary Sunday (outside the Pentecostarion). A slot with role
//   'sunday' stands for the resurrectional troparion or kontakion of the tone; the
//   caller supplies it from the Octoechos.
// opts.oca: { troparion, kontakion, feast_troparion, ... } from the OCA layer when
//   "Prefer OCA" is on (ruling 11), else null. An OCA hymn takes the place of the
//   Menaion hymn; the Menaion node is kept beside it as `menaion`.
//
// opts.general: the General Menaion (loadMenaionV2General). Read only where the
//   service prints no troparion or kontakion of its own AND names its fallback
//   (`general_fallback`, hand-entered): encoding_rule_v2.md 2.1.
//
// Returns { section, cited, rank, kind, rule, saintName, hours: { <hour>: { troparia:
// [slot...], kontakion: slot } }, troparion_alt, notes }.
// slot = { role: 'sunday'|'feast'|'saint', source: 'octoechos'|'menaion'|'oca'|'none', node }.
const SUNDAY = Object.freeze({ role: 'sunday', source: 'octoechos', node: null });
const SUNDAY_SECTION = { simple: '1A', six_stichera: '1C', doxology: '1C', polyeleos: '1D', vigil: '1E', great_feast: '1E' };

export function hoursPlan(c, base, opts = {}) {
  const { oca = null, sunday = false, general = null } = opts;
  const h = hymnsOf(c, base); const notes = [];
  const feastDay = FEAST_KINDS.includes(c.kind);
  const section = c.fekula_section;
  const title = [].concat(c.title ?? []).map((t) => t.text ?? t).join(' ');
  const feastTrop = h.troparia.find(ofFeast) ?? null;
  const saintTrops = h.troparia.filter((n) => !ofFeast(n));
  const pick = (list, feast) => list.find((n) => ofFeast(n) === feast) ?? null;
  const feastKont = pick(h.ode6, true) ?? pick(h.ode3, true);
  const saintOde3 = pick(h.ode3, false); const saintOde6 = pick(h.ode6, false);
  const own = c.kind === 'feast' ? 'feast' : 'saint';

  const slot = (node, ocaSlot, role) => {
    const o = ocaSlot ? oca?.[ocaSlot] : null;
    if (o) return { role, source: 'oca', node: o, menaion: node ?? null };
    return node ? { role, source: 'menaion', node } : null;
  };
  // General Menaion fallback: the named service's hymn, with the printed
  // placeholder replaced by the saint's name in this copy only. The tone is the
  // one printed at the end of Vespers when the sites differ (ruling 3).
  const fromGeneral = (field, role) => {
    const g = c.general_fallback; const src = g && general?.[g.type]?.[field];
    if (!h.absent[field] || !isText(src)) return null;
    const text = src.text.replace(/\((name|names|Names)\)/g, g.name ?? '$&');
    const tone = src.tone ?? src.verified_sites?.[0]?.tone ?? null;
    notes.push(`${field}: the page prints none; taken from the General Menaion, ${g.type}.`);
    return { role, source: 'general', node: { ...src, text, tone, path: `general.${g.type}.${field}`, generalType: g.type } };
  };
  const gap = (what, absent) => {
    notes.push(absent
      ? `${what}: the Menaion prints none (${absent.reason}) and the entry names no General Menaion service for it.`
      : `${what}: none found in this service.`);
    return { role: what, source: 'none', node: null };
  };
  const firstSixth = (hr) => hr === '1st_hour' || hr === '6th_hour';
  let trop; let kont; let rule; let cited = section;

  if (feastDay) {
    const feast = slot(feastTrop, 'feast_troparion', 'feast') ?? gap('troparion of the feast');
    const saint = slot(saintTrops[0], 'troparion', 'saint');
    const fk = slot(feastKont, 'feast_kontakion', 'feast') ?? gap('kontakion of the feast');
    const sk = slot(saintOde6 ?? saintOde3, 'kontakion', 'saint');
    if (saintTrops.length > 1) notes.push(`${saintTrops.length} troparia of saints are printed; "if there be troparia for two saints, they are alternated" (2G1). The first is shown.`);
    const apodosis = section === '2G3';
    const high = section === '2G2' || section === '2G4';
    if (!sunday) {
      if (apodosis) {
        // 2G3 reads "troparion and kontakion of the feast". Where the day also prints a
        // troparion of its saints, ODS vol. III adds it at Glory (25 Nov, weekday: "At
        // each Hour: troparion of the feast; Glory, troparion of the Hieromartyrs ...
        // kontakion of the feast"). Printed first: it is read when the page prints one.
        trop = () => [feast, ...(saint ? [saint] : [])]; kont = () => fk;
        rule = saint ? '§2G3: troparion of the feast, Glory, of the saints (ODS vol. III, 25 November); kontakion of the feast.'
                     : '§2G3: troparion and kontakion of the feast.';
      }
      else {
        trop = () => [feast, ...(saint ? [saint] : [])];
        if ((high || c.rank === 'doxology') && sk) {
          const saintFirst = section === '2G4';
          kont = (hr) => (firstSixth(hr) === saintFirst ? sk : fk);
          rule = `§${section}: troparion of the feast, Glory, of the saint; kontakion of the ${saintFirst ? 'saint' : 'feast'} at the 1st and 6th Hours, of the ${saintFirst ? 'feast' : 'saint'} at the 3rd and 9th.`;
        } else { kont = () => fk; rule = `§${section}: troparion of the feast, Glory, of the saint; kontakion of the feast only.`; }
      }
    } else if (apodosis) {
      cited = '1F3';
      // ODS 2nd ed. note 25 reasons that nothing of the feast ought to be read at the
      // 9th Hour. It is NOT applied (ruled on the evidence, 14 Nov 2026): the 3rd
      // edition, vol. III, appoints the feast "at each Hour" or by name at the Ninth
      // in every apodosis entry it prints (8 of 8), Sunday and weekday alike.
      trop = () => [SUNDAY, feast];
      kont = (hr) => (firstSixth(hr) ? fk : SUNDAY);
      rule = '§1F3: Sunday troparion and troparion of the feast; kontakion of the feast at the 1st and 6th Hours, the Sunday kontakion at the 3rd and 9th.';
    } else {
      const four = high || c.rank === 'doxology';
      cited = high ? '1F2' : '1F1';
      trop = (hr) => [SUNDAY, firstSixth(hr) ? feast : (saint ?? feast)];
      kont = four
        ? (hr) => ({ '1st_hour': fk, '3rd_hour': SUNDAY, '6th_hour': sk ?? fk, '9th_hour': fk }[hr])
        : (hr) => (firstSixth(hr) ? fk : SUNDAY);
      rule = `§${cited}: Sunday troparion, with the troparion of the feast at the 1st and 6th Hours and of the saint at the 3rd and 9th; kontakion: ${four ? '1st feast, 3rd Sunday, 6th saint, 9th feast' : 'of the feast at the 1st and 6th Hours, the Sunday kontakion at the 3rd and 9th'}.`;
    }
  } else {
    const first = slot(saintTrops[0] ?? feastTrop, 'troparion', own) ?? fromGeneral('troparion', own) ?? gap('troparion', h.absent.troparion);
    const second = saintTrops[1] ? { role: 'saint', source: 'menaion', node: saintTrops[1] } : null;
    const double = section === '2B' && second;
    if (second && !double) notes.push(`${saintTrops.length} troparia are printed; the first is shown.`);
    // Two kontakia (after Ode III and after Ode VI): V1's rule is kept (ruling 10):
    // Ode III at the 1st and 6th Hours, Ode VI at the 3rd and 9th.
    const k6 = saintOde6 ?? feastKont; const k3 = saintOde3;
    const o = oca?.kontakion ? { role: own, source: 'oca', node: oca.kontakion, menaion: k6 ?? k3 ?? null } : null;
    const m6 = k6 ? { role: own, source: 'menaion', node: k6 } : null;
    const m3 = k3 ? { role: own, source: 'menaion', node: k3 } : null;
    const one = o ?? m6 ?? m3 ?? fromGeneral('kontakion', own) ?? null;
    const lordsFeast = c.rank === 'great_feast' && !/THEOTOKOS/i.test(title);
    if (sunday && lordsFeast) notes.push('A feast of the Lord on a Sunday supersedes the Sunday service (ODS ch. 5): the weekday order is given.');
    if (!sunday || lordsFeast) {
      trop = () => (double ? [first, second] : [first]);
      // An OCA hymn stands in for its own counterpart and nothing else (ruled 14 Nov
      // 2026): `replaces` names which of two Menaion kontakia the OCA text is.
      const rep = o?.node.replaces;
      if (o && m3 && m6 && !rep) notes.push('Two kontakia are printed and the OCA slot does not say which one its kontakion replaces.');
      if (o && m3 && m6 && (rep === 'ode3' || rep === 'ode6')) {
        kont = (hr) => (firstSixth(hr) ? (rep === 'ode3' ? o : m3) : (rep === 'ode6' ? o : m6));
        rule = `§${section}: troparion from the Menaion; two kontakia are printed: that after Ode III at the 1st and 6th Hours, that after Ode VI at the 3rd and 9th (the OCA text is the one after Ode ${rep === 'ode3' ? 'III' : 'VI'}).`;
      } else if (o) { kont = () => o; rule = `§${section}: troparion and kontakion (the OCA prints one kontakion${m3 && m6 ? ', which is neither of the Menaion\'s two' : ''}; it is read at every Hour).`; }
      else if (m3 && m6) { kont = (hr) => (firstSixth(hr) ? m3 : m6); rule = `§${section}: troparion from the Menaion; two kontakia are printed: that after Ode III at the 1st and 6th Hours, that after Ode VI at the 3rd and 9th.`; }
      else { kont = () => one ?? gap('kontakion', h.absent.kontakion); rule = `§${section}: troparion and kontakion from the Menaion.`; }
    } else {
      cited = double ? '1B' : (SUNDAY_SECTION[c.rank] ?? '1A');
      trop = (hr) => [SUNDAY, double && !firstSixth(hr) ? second : first];
      if (c.rank === 'great_feast') {
        kont = (hr) => (firstSixth(hr) ? SUNDAY : (one ?? SUNDAY));
        rule = '§1E, feast of the Theotokos: Sunday troparion, Glory, of the feast; the Sunday kontakion at the 1st and 6th Hours, that of the feast at the 3rd and 9th.';
      } else if (['doxology', 'polyeleos', 'vigil'].includes(c.rank)) {
        kont = (hr) => (firstSixth(hr) ? (one ?? SUNDAY) : SUNDAY);
        rule = `§${cited}: Sunday troparion, Glory, the troparion from the Menaion; the kontakion from the Menaion at the 1st and 6th Hours, the Sunday kontakion at the 3rd and 9th.`;
      } else {
        kont = () => SUNDAY;
        rule = `§${cited}: Sunday troparion, Glory, the troparion ${double ? 'of the first saint at the 1st and 6th Hours, of the second at the 3rd and 9th' : 'from the Menaion'}; only the Sunday kontakion is read.`;
      }
    }
  }
  const hours = Object.fromEntries(HOURS.map((hr) => [hr, { troparia: trop(hr), kontakion: kont(hr) }]));
  for (const hr of HOURS) for (const t of hours[hr].troparia) if (t.node && t.node.tone == null) notes.push(`The ${t.role} troparion is printed here with no tone.`);
  return { section, cited, rank: c.rank, kind: c.kind, rule, saintName: title, hours, troparion_alt: h.troparion_alt, notes: [...new Set(notes)] };
}

// What a service prints for the Liturgy, in print order: prokeimena, Alleluia,
// communion verses, the Epistle and Gospel references, and the hymn sung "instead
// of It is truly meet". Both stored shapes are read (one of each, or lists where a
// feast and a saint each have theirs); a verse is attached to the hymn it follows.
// Nothing is supplied that the page does not print.
export function liturgyPlan(c, base) {
  const l = c.liturgy ?? null;
  const title = [].concat(c.title ?? []).map((t) => t.text ?? t).join(' ');
  const empty = { has: false, title, prokeimena: [], alleluia: [], communion: [], epistles: [], gospels: [], zadostoinik: null };
  if (!l) return empty;
  const isVerse = (n) => labels(n).includes('refrain') || n.sourceLabel === 'Verse';
  const hymns = (single, verse, list) => {
    const out = [];
    const push = (n, path) => out.push({ tone: n.tone ?? null, text: n.text, stichoi: [], feast: ofFeast(n) || c.kind === 'feast', who: n.saint ?? null, path: `${base}.liturgy.${path}` });
    if (isText(l[single])) { push(l[single], single); if (isText(l[verse])) out[0].stichoi.push(l[verse].text); }
    (l[list] ?? []).forEach((n, i) => { if (!isText(n)) return; if (isVerse(n) && out.length) out[out.length - 1].stichoi.push(n.text); else push(n, `${list}[${i}]`); });
    return out;
  };
  const refs = (single, list) => [].concat(l[single] ?? [], l[list] ?? []).filter((r) => r && r.citation).map((r) => {
    const cit = r.citation; const ref = String(cit.verses).includes(':') ? `${cit.book} ${cit.verses}` : `${cit.book} ${cit.chapter}:${cit.verses}`;
    return { ref, pericope: cit.pericope_number ?? null, heading: r.heading ?? null, basis: r.citation_basis ?? 'printed', feast: ofFeast(r),
      // "Book c:v (§n)" is the form the lectionary helpers read.
      display: ref + (cit.pericope_number != null ? ` (§${cit.pericope_number})` : '') };
  });
  const zad = isText(l.megalynarion) || isText(l.megalynarion_refrain)
    ? { refrain: l.megalynarion_refrain?.text ?? null, irmos: l.megalynarion?.text ?? null, rubric: l.megalynarion_rubric?.text ?? null, path: `${base}.liturgy.megalynarion` } : null;
  return { has: true, title, section: c.fekula_section, prokeimena: hymns('prokeimenon', 'prokeimenon_verse', 'prokeimena'), alleluia: hymns('alleluia', 'alleluia_verse', 'alleluias'),
    communion: hymns('communion_verse', null, 'communion_verses'), epistles: refs('epistle', 'epistles'), gospels: refs('gospel', 'gospels'), zadostoinik: zad };
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
