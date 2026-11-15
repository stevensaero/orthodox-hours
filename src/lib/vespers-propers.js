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
// BUILT SO FAR: "Lord, I have cried" — the Glory and the Both now.
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
