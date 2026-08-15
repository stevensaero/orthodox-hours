// src/data/menaion_v2/sic_register.js — menaion_v2_spec.md §7.4 / §9.12
//
// Spelling and typography stay STRICT VERBATIM. This register is what guards
// that ruling against a well-meaning later "fix": the gate verifies each recorded
// sic still byte-matches the stored text at its locus, so silently correcting one
// is a hard failure rather than an invisible improvement.
export default [
  { path: 'general.Monastic.vespers.dogmatikon_rubric', file: 'Monastic.pdf', locus: 'p1',
    verbatim: 'that service ):',
    note: 'Stray space and ) before the colon. Monastics/Martyrs print the same; Martyr.pdf closes it up as "service):" — the sic is not uniform across the corpus.' },

  { path: 'general.Monastic.matins.canons[0].odes.6.irmos', file: 'Monastic.pdf', locus: 'p9 Ode VI',
    verbatim: 'Raise me up from corruption, O',
    note: 'The printed irmos BREAKS OFF mid-phrase with no closing. Confirmed against both a plain and a dedupe_chars extraction, so it is the page and not the extractor. Almost certainly "O God" — which is exactly why it is not completed here.' },

  { path: 'general.Monastic.matins.doxology_glory', file: 'Monastic.pdf', locus: 'p12',
    verbatim: 'O Father Sergius',
    note: 'A SPECIFIC NAME left in a GENERAL service that elsewhere prints the (name) placeholder. Editorial slip in the source; stored as printed.' },

  { path: 'general.Monastic.liturgy.epistle', file: 'Monastic.pdf', locus: 'p15',
    verbatim: 'GALATIONS',
    note: 'For "Galatians". Also in Monastics.pdf. Missed by the high-precision sic checks — a misspelled proper noun trips none of them; the SCRIPTURE_BOOK_NAMES canon check exists for this class.' },
];
