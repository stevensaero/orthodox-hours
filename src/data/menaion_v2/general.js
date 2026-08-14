// src/data/menaion_v2/general.js
// ─────────────────────────────────────────────────────────────────────────────
// The St. Sergius GENERAL MENAION — menaion_v2_spec.md §6.2.
//
// A first-class table whose every cell is a print site, exactly as Octoechos V2
// treated Theotokia.pdf. NOT a bag of substitution strings: these are 26 full
// Vigil services, 12–18 pages each, Vespers through Liturgy.
//
// ── The three rules that govern this file ───────────────────────────────────
//
// 1. PLACEHOLDERS ARE STORED VERBATIM AND UNSUBSTITUTED. The printed token is
//    lowercase `(name)` — 445 instances corpus-wide; `(Name)` and `(N.)` appear
//    ZERO times, notwithstanding encoding_rule_v2.md §2.1. Substitution happens
//    only in the DAILY entry that falls back here, and is recorded there as
//    `name_substituted: {placeholder: '(name)', value}`. This table never
//    carries a saint's name.
//
// 2. PLURAL FILES TAKE NO NAME. Apostles, Heirarchs, Heiromartyrs, Martyrs,
//    Martyresses, Monastics, MonasticMartyrs, and the four subject files name
//    nobody. `name_substituted` is FORBIDDEN on a fallback drawn from them —
//    see GENERAL_TAKES_NAME in the schema.
//
// 3. A DAILY FALLBACK STORES ITS OWN COPY, NOT A REF. Per-position storage
//    (§2.3) applies across books: a daily entry that falls back here stores the
//    text at its own position with `src: {file: 'Monastic.pdf', locus}`, and the
//    recurrence register links copy to cell. That is what lets a reader browse
//    this book on its own AND see, at any daily position, that the text came
//    from here and what was substituted in.
//
// ── Structure ───────────────────────────────────────────────────────────────
// Keyed by GENERAL_TYPES. Each value carries the same service shape a
// commemoration entry does, so the browser and the gate need no special case.
// Manifest paths use the `<g>` wildcard: `<g>.vespers.lic`, `<g>.matins.canons`.
//
// There is NO `AT VESPERS` heading in the source — Vespers is everything printed
// before `AT MATINS`. The section still keys as `vespers`; that the heading is
// absent is a source fact, not a gap.
//
// Odes run I, III–IX. Ode II appears in none of the 26.
//
// ── Encoding status: SCAFFOLD ONLY ──────────────────────────────────────────
// Phase 2 chunk 2b. No cells encoded yet. Chunks 2c onward fill this in batches
// of four to five files, each batch its own commit, each gated before the next.
// Batch order (singular type first so the `(name)` mechanics are proven early):
//   2c  Monastic · Monastics · Martyr · Martyrs
//   2d  Apostle · Apostles · Heirarch · Heirarchs
//   2e  Hieromartyr · Heiromartyrs · MonasticMartyr · MonasticMartyrs
//   2f  Nun · Nuns · NunMartyr · Martyress · Martyresses
//   2g  Prophet · Angels · Fools · HieroConfessor · Unmercenaries
//   2h  Cross · Holy Fathers · St John Baptist · Theotokos   (subject files)
// ─────────────────────────────────────────────────────────────────────────────

const GENERAL = {
  // "Monastic": { title: {…}, troparion: {…}, vespers: {…}, matins: {…}, liturgy: {…} },
};

export default GENERAL;
