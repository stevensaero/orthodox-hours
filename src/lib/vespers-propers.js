// Vespers: which hymn stands at each movable place. Plain module, no React, so the
// gate (tools/test_menaion_v2_vespers.mjs) runs the same code the tool does.
//
// PRINTED FIRST (Bill, 14 Nov 2026). At every place the Menaion page is read
// before any rule is applied:
//   1. the page prints the hymn        -> that hymn
//   2. the page prints only a rubric   -> the Octoechos, in the tone the rubric names
//   3. the page prints nothing         -> Fekula's rule for the section
// The Sunday cycle (Saturday evening) is laid over all three, as ch. 1 directs.
// V1 went wrong here because it started at step 3.
//
// BUILT SO FAR: "Lord, I have cried" (stichera, Glory, Both now); the Aposticha
// (whose stichera, Glory, Both now).
const ROMAN = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };
const EVES = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri']; // the evening Vespers is sung on
const isText = (n) => !!n && typeof n.text === 'string';
export const rubricTone = (node) => {
  const m = isText(node) && node.text.match(/\bTone ([IV]+)\b/);
  return m ? ROMAN[m[1]] ?? null : null;
};

// c: a Menaion V2 commemoration; base: its path ('11-16.c0').
// eveDow: the evening of the week Vespers is sung on, 0 = Sunday evening ... 5 =
//   Friday evening, 6 = Saturday evening (the Sunday service).
// tone: the tone of the week that evening belongs to.
// octo: { sundayDogmatikon(tone), dogmatikon(tone), doxTheotokion(tone, eve), evening(tone, eve) }
// Returns { glory, bothNow, combined, rule, notes }. A slot is
//   { kind: 'doxasticon'|'feast'|'theotokion'|'dogmatikon'|'stavrotheotokion',
//     source: 'menaion'|'octoechos', tone, node, basis: 'printed'|'rubric'|'rule' }.
// `combined`: Glory and Both now are sung together before the one hymn in bothNow.
export function resolveLicClosers({ c, base, eveDow, tone, octo }) {
  const vname = c.great_vespers ? 'great_vespers' : 'vespers'; const v = c[vname] ?? {};
  const at = (key, node) => ({ ...node, path: `${base}.${vname}.${key}` });
  const notes = [];
  const printed = (key, kind) => (isText(v[key]) ? { kind, source: 'menaion', tone: v[key].tone ?? null, node: at(key, v[key]), basis: 'printed' } : null);
  const fromOcto = (kind, t, node, basis) => (node ? { kind, source: 'octoechos', tone: node.tone ?? t, node, basis } : null);
  const dox = printed('lic_glory', 'doxasticon');
  const closerKind = v.lic_closer?.type === 'of_the_feast' ? 'feast' : 'theotokion';
  const closer = printed('lic_closer', closerKind);
  const feast = closer?.kind === 'feast' ? closer : null;
  const theot = closer?.kind === 'theotokion' ? closer : null;
  const dogma = printed('dogmatikon', 'dogmatikon');
  const stavro = printed('lic_stavrotheotokion', 'stavrotheotokion');
  const named = rubricTone(v.lic_closer_rubric);
  const saturday = eveDow === 6; const friday = eveDow === 5;
  const eve = EVES[eveDow];
  const stavroEvening = eveDow === 2 || eveDow === 4; // Tuesday and Thursday evenings: Wednesday and Friday
  const theotokosFeast = c.kind === 'feast' && c.rank === 'great_feast';
  const high = ['doxology', 'polyeleos', 'vigil'].includes(c.rank);
  const out = (glory, bothNow, rule, combined = false) => ({ glory, bothNow, combined, rule, notes });

  // A great feast: Glory, Both now, the doxasticon of the feast, on any evening (ch. 1 §1E for Sunday).
  if (theotokosFeast && feast) return out(null, feast, 'Glory, Both now: the doxasticon of the feast, as the page prints it (Sunday: §1E, a feast of the Theotokos).', true);

  if (saturday) {
    // ch. 1, every section: "Now and ever ... the dogmaticon in the tone of the week."
    // §1F1: Glory is the saint's doxasticon, "otherwise the doxasticon of the feast (written at Now and ever)".
    const glory = dox ?? feast;
    if (theot || dogma || named) notes.push('The page prints a weekday Both now; on a Saturday evening the dogmaticon in the tone of the week is sung instead (ch. 1).');
    return out(glory, fromOcto('dogmatikon', tone, octo.sundayDogmatikon(tone), 'rule'),
      `Saturday evening: Glory, ${glory ? (glory.kind === 'feast' ? 'the doxasticon of the feast' : 'the doxasticon from the Menaion') : 'none'}; Both now, the dogmaticon in the tone of the week (Fekula ch. 1).`);
  }

  // ── weekday evenings ──
  if (feast) {
    // §2G3: "if it be Friday evening: Glory ... of the feast; Now and ever ... dogmaticon in the tone of the week."
    if (friday && c.fekula_section === '2G3' && !dox) {
      return out(feast, fromOcto('dogmatikon', tone, octo.dogmatikon(tone), 'rule'), '§2G3, Friday evening: Glory, of the feast; Both now, the dogmaticon in the tone of the week.');
    }
    return out(dox, feast, dox ? 'Glory, the doxasticon of the saint; Both now, of the feast, as the page prints them.' : 'Glory, Both now: of the feast, as the page prints it.', !dox);
  }
  const fridayProper = () => fromOcto('dogmatikon', tone, octo.evening(tone, 'fri'), 'rule');
  if (dogma) {
    // The page prints the dogmatic theotokion itself (polyeleos and above).
    if (friday && dogma.tone !== tone) {
      notes.push(`The page prints the dogmaticon in Tone ${dogma.tone}; on Friday evening Fekula ch. 6 §III appoints the tone of the week (Tone ${tone}).`);
      return out(dox, fromOcto('dogmatikon', tone, octo.dogmatikon(tone), 'rule'), 'Friday evening: Both now, the dogmaticon in the tone of the week (Fekula ch. 6 §III).');
    }
    return out(dox, dogma, 'Both now: the dogmatic theotokion the page prints.');
  }
  if (theot || named != null || stavro) {
    if (stavroEvening && stavro) return out(dox, stavro, 'Tuesday or Thursday evening: the stavrotheotokion the page prints.');
    if (friday) return out(dox, fridayProper(), 'Friday evening: Both now, the dogmatic theotokion in the tone of the week (Fekula §2A).');
    if (theot) return out(dox, theot, 'Both now: the theotokion the page prints.');
    const t = named ?? dox?.tone ?? tone;
    const node = octo.doxTheotokion(t, eve);
    if (node) return out(dox, fromOcto('theotokion', t, node, named != null ? 'rubric' : 'rule'), `Both now: the theotokion in Tone ${t}${named != null ? ', the tone the page\'s rubric names' : ', the tone of the Glory'}, from the Octoechos (Fekula ch. 6 §II).`);
    notes.push('No Octoechos theotokion was found for this tone and evening.');
  }
  // Nothing printed for the Both now: the rule for the section.
  if (high) {
    const t = friday ? tone : (dox?.tone ?? tone);
    return out(dox, fromOcto('dogmatikon', t, octo.dogmatikon(t), 'rule'), `Both now: the dogmaticon in the tone of the ${friday ? 'week (Friday evening)' : 'Glory'} (Fekula ch. 6 §III).`);
  }
  if (dox && !friday) {
    const node = octo.doxTheotokion(dox.tone, eve);
    if (node) return out(dox, fromOcto('theotokion', dox.tone, node, 'rule'), `Both now: the theotokion in the tone of the Glory (Tone ${dox.tone}), from the Octoechos (Fekula ch. 6 §II).`);
  }
  if (friday) return out(dox, fridayProper(), 'Friday evening: Both now, the dogmatic theotokion in the tone of the week (Fekula §2A).');
  return out(dox, fromOcto('theotokion', tone, octo.evening(tone, eve), 'rule'), 'Both now: the theotokion of the evening in the tone of the week, from the Octoechos (Fekula §2A).');
}

// ── "Lord, I have cried": the stichera ──────────────────────────────────────
// The page says how many stichera of the day are sung and prints them, with
// "Twice" / "Thrice" where one is repeated. That is read first:
//   weekday   the page's own count; where it prints fewer than six (a simple
//             service prints three) the Octoechos supplies the first ones (§2A).
//   Saturday  ten in all (ch. 1). The Octoechos gives the resurrection stichera
//   evening   and the page's are fitted to what is left: 7 + 3 simple (§1A),
//             4 + 3 + 3 two saints (§1B), 6 + 4 six-stichera and doxology (§1C),
//             4 + 6 polyeleos, vigil and feasts of the Theotokos (§1D, §1E),
//             4 + 3 + 3 or 3 + 3 + 4 in a forefeast or afterfeast (§1F1, §1F2),
//             4 + 6 at an apodosis (§1F3).
// octo adds: sundayLic(tone) -> the 7 resurrection stichera; eveningLic(tone, eve).
// Returns { count, stichera: [{ text, tone, source, group, path, spec_mel, nth, of }], rule, notes }.
const SUNDAY_MENAION = { simple: 3, six_stichera: 4, doxology: 4, polyeleos: 6, vigil: 6, great_feast: 6 };
const feastTag = (n) => ['feast', 'forefeast'].includes(n.saint) || [].concat(n.label ?? []).includes('of_the_feast');

// n singings shared over the printed stichera, front-loaded and even: 3 into 4 is
// [1,1,2,3]; 3 into 6 is each twice; 3 into 8 is 3,3,2. With more printed than sung,
// the first n are taken.
function fit(items, n) {
  if (n <= 0 || !items.length) return [];
  if (items.length >= n) return items.slice(0, n).map((it) => ({ ...it, nth: 1, of: 1 }));
  const each = Math.floor(n / items.length); const extra = n % items.length; const out = [];
  items.forEach((it, i) => { const k = each + (i < extra ? 1 : 0); for (let j = 1; j <= k; j++) out.push({ ...it, nth: j, of: k }); });
  return out;
}

export function resolveLicStichera({ c, base, eveDow, tone, octo }) {
  const vname = c.great_vespers ? 'great_vespers' : 'vespers'; const v = c[vname] ?? {};
  const notes = []; const saturday = eveDow === 6; const eve = EVES[eveDow];
  // The printed stichera, each with the tone it stands under (printed once per group).
  let lastTone = null; let lastMel = null;
  const printed = (v.lic ?? []).filter(isText).map((n, i) => {
    if (n.tone != null) { lastTone = n.tone; lastMel = n.spec_mel ?? null; }
    return { text: n.text, tone: lastTone, spec_mel: n.spec_mel ?? lastMel, source: 'Menaion', path: `${base}.${vname}.lic[${i}]`,
      group: feastTag(n) || c.kind === 'feast' ? 'feast' : 'saint', who: n.saint ?? null, times: n.repeat ?? 1 };
  });
  const asPrinted = printed.flatMap((it) => Array.from({ length: it.times }, (_, j) => ({ ...it, nth: j + 1, of: it.times })));
  const fromOcto = (list, k) => (list ?? []).slice(0, k).map((n) => ({ text: n.text, tone: n.tone ?? tone, source: 'Octoechos', group: 'resurrection', node: n, nth: 1, of: 1 }));
  const done = (stichera, rule) => ({ count: stichera.length, stichera, rule, notes });

  if (!saturday) {
    const total = Math.max(6, asPrinted.length);
    const k = total - asPrinted.length;
    const first = fromOcto(octo.eveningLic(tone, eve), k).map((x) => ({ ...x, group: 'octoechos' }));
    if (first.length < k) notes.push(`The Octoechos gave ${first.length} of the ${k} stichera it owes for this evening.`);
    return done([...first, ...asPrinted], k
      ? `${total} stichera: ${k} from the Octoechos, then the ${asPrinted.length} the page prints (Fekula §2A).`
      : `${total} stichera, as the page prints them${printed.some((p) => p.times > 1) ? ', with its repeats' : ''}.`);
  }

  // Saturday evening: ten, the resurrection stichera first.
  const groups = [];
  for (const it of printed) { const g = groups[groups.length - 1]; if (g && g.key === it.group + '|' + it.who) g.items.push(it); else groups.push({ key: it.group + '|' + it.who, group: it.group, items: [it] }); }
  const sums = groups.map((g) => g.items.reduce((a, it) => a + it.times, 0));
  let plan; let rule;
  const feastDay = ['forefeast', 'afterfeast', 'apodosis'].includes(c.kind);
  if (!groups.length) { plan = []; rule = 'Ten stichera, all of the resurrection: the Menaion prints none for this date.'; }
  else if (c.fekula_section === '2G3' || (c.kind === 'apodosis' && groups.length === 1)) {
    plan = [fit(groups.flatMap((g) => g.items), 6)]; rule = '§1F3: four of the resurrection and six of the feast.';
  } else if (groups.length >= 2) {
    // Two bodies of stichera (feast and saint, or two saints). Three and three leave four
    // for the resurrection (§1B; §1F1 simple). Where the saint has more, the resurrection
    // gives up one: three, three of the feast, four of the saint (§1F1 six-stichera, §1F2).
    const total = sums.reduce((a, b) => a + b, 0);
    if (total <= 6) { plan = groups.map((g, i) => fit(g.items, sums[i])); rule = `§${feastDay ? '1F1' : '1B'}: four of the resurrection, then ${sums.join(' and ')} as the page prints them.`; }
    else { plan = groups.map((g, i) => fit(g.items, i === groups.length - 1 ? 7 - sums.slice(0, -1).reduce((a, b) => a + Math.min(b, 3), 0) : Math.min(sums[i], 3))); rule = `§${feastDay ? '1F2' : '1B'}: three of the resurrection, three, and four of the saint.`; }
  } else {
    const n = SUNDAY_MENAION[c.rank] ?? 3;
    plan = [fit(groups[0].items, n)];
    rule = `§${{ simple: '1A', six_stichera: '1C', doxology: '1C', polyeleos: '1D' }[c.rank] ?? '1E'}: ${10 - n} of the resurrection and ${n} from the Menaion.`;
    if (groups[0].items.length > n) notes.push(`The page prints ${groups[0].items.length} different stichera; ${n} are sung on a Saturday evening and the first ${n} are taken. Not confirmed against a source.`);
  }
  const menaion = plan.flat();
  const res = fromOcto(octo.sundayLic(tone), 10 - menaion.length);
  if (res.length < 10 - menaion.length) notes.push(`The Octoechos gave ${res.length} of the ${10 - menaion.length} resurrection stichera.`);
  return done([...res, ...menaion], 'Saturday evening, ten stichera. ' + rule);
}

// ── The Aposticha ───────────────────────────────────────────────────────────
// Whose stichera, then the Glory and the Both now. Printed first, as above.
//   stichera  the page prints its own with their verses (polyeleos and feasts) or
//             says nothing, and then they are the Octoechos's. On a Saturday evening
//             they are always the Octoechos's (ch. 1), save on a feast of the Theotokos.
//   Glory     the doxasticon the page prints. Where the page heads it "Glory ...,
//             Both now ...", it is sung once for both.
//   Both now  the hymn the page prints (of the feast, or a theotokion); else the
//             Octoechos theotokion in the tone of the Glory; else that of the evening.
// octo adds: apostichaTheotokion(tone) (the resurrectional one, by the tone of the
//   Glory), sundayApostichaTheotokion(tone), eveningApostichaTheotokion(tone, eve).
// Returns { stichera: { source: 'menaion', items } | { source: 'octoechos' }, glory,
//   bothNow, combined, rule, notes }.
export function resolveAposticha({ c, base, eveDow, tone, octo }) {
  const vname = c.great_vespers ? 'great_vespers' : 'vespers'; const v = c[vname] ?? {};
  const at = (key, node) => ({ ...node, path: `${base}.${vname}.${key}` });
  const notes = []; const saturday = eveDow === 6; const friday = eveDow === 5; const eve = EVES[eveDow];
  const stavroEvening = eveDow === 2 || eveDow === 4;
  const printed = (key, kind) => (isText(v[key]) ? { kind, source: 'menaion', tone: v[key].tone ?? null, node: at(key, v[key]), basis: 'printed' } : null);
  const fromOcto = (kind, t, node, basis) => (node ? { kind, source: 'octoechos', tone: node.tone ?? t, node, basis } : null);
  const dox = printed('aposticha_glory', 'doxasticon');
  const doxIsBoth = dox && [].concat(v.aposticha_glory.label ?? []).includes('both_now');
  const closer = printed('aposticha_closer', v.aposticha_closer?.type === 'of_the_feast' ? 'feast' : 'theotokion');
  const feast = closer?.kind === 'feast' ? closer : null;
  const theot = closer?.kind === 'theotokion' ? closer : null;
  const stavro = printed('aposticha_stavrotheotokion', 'stavrotheotokion');
  const named = rubricTone(v.aposticha_closer_rubric);
  const theotokosFeast = c.kind === 'feast' && c.rank === 'great_feast';
  // The page's own stichera with their verses, each under the tone it is printed in.
  let lastTone = null;
  const own = Array.isArray(v.aposticha) ? v.aposticha.filter(isText).map((n, i) => {
    const verse = [].concat(n.label ?? []).includes('refrain');
    if (!verse && n.tone != null) lastTone = n.tone;
    return { kind: verse ? 'verse' : 'sticheron', text: n.text, tone: verse ? null : lastTone, spec_mel: n.spec_mel ?? null, path: `${base}.${vname}.aposticha[${i}]` };
  }) : null;
  const useOwn = own && own.length && (!saturday || theotokosFeast);
  const stichera = useOwn ? { source: 'menaion', items: own } : { source: 'octoechos' };
  if (own && own.length && !useOwn) notes.push('The page prints stichera for the Aposticha; on a Saturday evening the stichera of the Octoechos are sung (ch. 1).');
  const whose = useOwn ? 'the stichera the page prints, with their verses' : `the stichera of the Octoechos${saturday ? ' (resurrection)' : ''}`;
  const out = (glory, bothNow, rule, combined = false) => ({ stichera, glory, bothNow, combined, rule: `Aposticha: ${whose}. ${rule}`, notes });

  if (doxIsBoth) return out(null, dox, 'Glory, Both now: the one hymn the page prints for both.', true);
  if (feast) return out(dox, feast, dox ? 'Glory, the doxasticon; Both now, of the feast, as the page prints them.' : 'Glory, Both now: of the feast, as the page prints it.', !dox);
  if (saturday) {
    if (dox) return out(dox, fromOcto('theotokion', dox.tone, octo.apostichaTheotokion(dox.tone), 'rule'), `Glory, the doxasticon from the Menaion; Both now, the resurrectional theotokion in the tone of the Glory (Tone ${dox.tone}; Fekula §1C).`);
    return out(null, fromOcto('theotokion', tone, octo.sundayApostichaTheotokion(tone), 'rule'), 'Glory, Both now: the theotokion of the Sunday Aposticha in the tone of the week (Fekula §1A).', true);
  }
  if (stavroEvening && stavro) return out(dox, stavro, 'Tuesday or Thursday evening: the stavrotheotokion the page prints.', !dox);
  if (theot) return out(dox, theot, 'Both now: the theotokion the page prints.', !dox);
  const t = named ?? dox?.tone ?? null;
  if (t != null) {
    const node = octo.doxTheotokion(t, friday ? 'fri' : eve);
    if (node) return out(dox, fromOcto('theotokion', t, node, named != null ? 'rubric' : 'rule'), `Both now: the theotokion in Tone ${t}${named != null ? ', the tone the page\'s rubric names' : ', the tone of the Glory'}, from the Octoechos (Fekula ch. 6 §II).`, !dox);
    if (stavro) return out(dox, stavro, 'Both now: the stavrotheotokion the page prints (the Octoechos has no theotokion at this place for this evening).', !dox);
    notes.push('No Octoechos theotokion was found for this tone and evening.');
  }
  return out(dox, fromOcto('theotokion', tone, octo.eveningApostichaTheotokion(tone, eve), 'rule'), 'Both now: the theotokion of the evening\'s Aposticha in the tone of the week, from the Octoechos.', !dox);
}
