// HAND-KEPT. BACKEND ONLY since 15 Nov 2026 (ruled by Bill): the running tool no longer reads
// this file. It records what the OCA appointed on a date IN 2026, so the tests can compare the
// tool's own render of that day with the OCA text (by_date.js). What the reader sees under
// "Prefer OCA texts" comes from the match register alone, hymn by hymn.
//
// Which OCA hymn fills which place on a Menaion date.
// `doc` is a captured document (docs/<doc>.js); `head` is the heading the hymn is
// printed under in it, copied exactly. Only dates Menaion V2 holds are mapped; the
// other captured documents wait in docs/ until their dates are encoded.
// tools/validate_oca_hymns.mjs fails if a head is missing or resolves to two texts.
//
// Slots: troparion, kontakion = the day's own commemoration (the oca_primary service).
//        troparion_alt, kontakion_alt = printed as an alternative ("or this Troparion").
//        troparion_2, kontakion_2 = a further commemoration of the day.
//        feast_troparion, feast_kontakion = the feast, on its afterfeast and leavetaking days.
//
// `replaces` (ruled 14 Nov 2026): an OCA hymn stands in for ITS OWN counterpart in
// the Menaion and for nothing else. Where the Menaion prints two kontakia for the
// saint, the kontakion slot must say which one the OCA text is: 'ode3' or 'ode6'
// (the same hymn in another translation), or 'all' when it is neither, in which
// case the OCA's one kontakion is read at every Hour. Give [head, replaces].
const at = (doc, slots) => Object.fromEntries(Object.entries(slots).map(([k, v]) =>
  [k, Array.isArray(v) ? { doc, head: v[0], replaces: v[1] } : { doc, head: v }]));

export const OCA_SLOTS = {
  '09-06': at('2026-0906-texts-tt', {
    troparion: 'Tone 4 Troparion (Archangel Michael)', kontakion: 'Tone 2 Kontakion (Archangel Michael)' }),
  '09-08': at('2026-0908-texts-tt', { troparion: 'Tone 4 Troparion', kontakion: 'Tone 4 Kontakion' }),
  '09-27': at('2026-0927-texts-tt--', {
    // "Like stars you have shone upon the world" is neither of the Menaion's two (Tone 4 after
    // Ode III, "The Church, making every effort"; Tone 4 after Ode VI, "Having endured").
    troparion: 'Tone 3 Troparion (St. Callistratus)', kontakion: ['Tone 4 Kontakion (St. Callistratus)', 'all'] }),
  '10-04': at('2026-1004-texts-tt', {
    // "Hierarch of Athens, we praise thee ... awesome and ineffable things" is the Menaion's
    // Tone 8 kontakion after Ode III ("Taught by thee things strange and ineffable").
    troparion: 'Tone 1 Troparion (St. Hierotheus)', kontakion: ['Tone 8 Kontakion (St. Hierotheus)', 'ode3'] }),
  '11-14': at('2026-1114-texts-tt', { troparion: 'Tone 3 Troparion', kontakion: 'Tone 8 Kontakion' }),
  '11-15': at('2026-1115-texts-tt-', {
    troparion: 'Tone 5 Troparion (Martyrs)', kontakion: 'Tone 2 Kontakion (Martyrs)' }),
  '11-16': at('2026-1116-texts-tt', {
    troparion: 'Tone 3 Troparion', troparion_alt: 'Tone 3 (or this Troparion)', kontakion: 'Tone 4 Kontakion' }),
  '11-21': at('2026-1121-texts-tt', { troparion: 'Tone 4 Troparion', kontakion: 'Tone 4 Kontakion' }),
  '11-22': at('2026-1122-texts-tt', {
    troparion: 'Tone 3 Troparion (Apostles)', kontakion: 'Tone 2 Kontakion (Apostles)',
    feast_troparion: 'Tone 4 Troparion (Feast)', feast_kontakion: 'Tone 4 Kontakion (Feast)' }),
  // The OCA prints St. Clement's troparion first and, under a starred note, the
  // troparion and kontakion "when both Hieromartyr Clement and Hieromartyr Peter
  // are celebrated together". No kontakion of St. Clement alone is printed.
  '11-25': at('2026-1125-texts-tt', {
    troparion: 'Tone 4* Troparion (St. Clement)',
    troparion_alt: 'Tone 4 Troparion (Sts. Clement and Peter)', kontakion_alt: 'Tone 4 Kontakion (Sts. Clement and Peter)',
    feast_troparion: 'Tone 4 Troparion (Feast)', feast_kontakion: 'Tone 4 Kontakion (Feast)' }),
  '11-29': at('2026-1129-texts-tt', {
    troparion: 'Tone 4 Troparion (Martyrs)', kontakion: 'Tone 4 Kontakion (Martyrs)' }),
  '11-30': at('2026-1130-texts-tt', { troparion: 'Tone 4 Troparion', kontakion: 'Tone 2 Kontakion' }),
};

// A date the Menaion holds, with an OCA service text, that has nothing to place: the
// date and WHY. tools/validate_oca_hymns.mjs fails on an encoded date with an OCA text
// that is in neither list (encoding_rule_v2.md 3.7).
export const OCA_NO_SLOTS = {};
