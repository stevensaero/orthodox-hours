// HAND-KEPT. A person's decisions about which hymn of the tool's own books an OCA
// hymn is. These are final: tools/match_oca_hymns.mjs never overwrites an id that
// is decided here, and leaves it out of the generated files.
//
//   o1a2b3c4d5e: { mate: 'menaion:11-15.c0.vespers.lic[0]', mateHash: 'm…', by: 'human', decided: '2026-11-15', note: '…' },
//   o1a2b3c4d5e: { mate: null, by: 'human', decided: '2026-11-15', note: 'no mate: the OCA appoints a hymn the Menaion does not print' },
//
// `mate: null` is a decision too ("this has no mate"), and stops the hymn being
// offered for review again. `mateHash` is the hash the matcher printed for the
// candidate (matches_review.js); the validator checks it still names that text.
export const OCA_MATCHES_HUMAN = {
};
