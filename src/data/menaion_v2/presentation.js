// src/data/menaion_v2/presentation.js
// ─────────────────────────────────────────────────────────────────────────────
// PRESENTATION REGISTRY (menaion_v2_spec.md §8.1) — rendering HINTS keyed off
// schema_menaion_v2.js's FIELD_MANIFEST paths.
//
// THIS FILE CONTAINS NO LITURGICAL TEXT, EVER (§7.4, no display copies).
// Headings, ordering, and grouping only. A heading here names a slot; it never
// quotes what goes in it. The no-display-copies lint greps component and
// registry sources for canonical-table fragments precisely to keep this true.
//
// Rules of the contract:
//   • Every FIELD_MANIFEST path must appear here, either as an entry or as
//     hidden: {reason}. tools/validate_viewer_coverage.mjs enforces the join —
//     a field added without coverage is a SAME-SESSION build failure.
//   • Hiding is opt-in only; OMISSION IS A GATE FAILURE, not a hidden field.
//   • Any data field with no entry still renders through the viewer's GENERIC
//     FALLBACK, visibly badged "unregistered field". The registry can make a
//     field look good; it can never make a field invisible.
//
// Entry shape: { heading, order, group?, hidden?: {reason} }
// ─────────────────────────────────────────────────────────────────────────────

import { SERVICES } from './schema_menaion_v2.js';

// Print order of services within a commemoration. This is the DEFAULT spine of
// the reading view; an individual service's own element order comes from its
// `order` array in the data (§5.1), never from here.
export const SERVICE_ORDER = [
  'identity', 'little_vespers', 'great_vespers', 'vespers', 'compline',
  'matins', 'liturgy',
];

export const SERVICE_HEADINGS = {
  identity:       'Commemoration',
  little_vespers: 'At Little Vespers',
  great_vespers:  'At Great Vespers',
  vespers:        'At Vespers',
  compline:       'At Compline',
  matins:         'At Matins',
  liturgy:        'At Liturgy',
  shared:         'Menaion-wide tables',
  general:        'General Menaion (by saint type)',
};

export const KIND_HEADINGS = {
  saint: 'Saint', forefeast: 'Forefeast', feast: 'Feast',
  afterfeast: 'Afterfeast', apodosis: 'Apodosis',
};

const R = {};

// ── identity ─────────────────────────────────────────────────────────────────
R['<c>.title'] = { heading: 'Title', order: 1 };
R['<c>.note']  = { heading: 'Encoding note', order: 99 };

// ── canonical hymns (§2.4) ───────────────────────────────────────────────────
R['<c>.troparion'] = { heading: 'Troparion', order: 10, group: 'canonical' };
R['<c>.kontakion'] = { heading: 'Kontakion', order: 11, group: 'canonical' };
R['<c>.ikos']      = { heading: 'Ikos',      order: 12, group: 'canonical' };

// ── little_vespers ───────────────────────────────────────────────────────────
R['<c>.little_vespers.rubric']              = { heading: 'Rubric', order: 1 };
R['<c>.little_vespers.lic']                 = { heading: 'At "Lord, I have cried" — stichera', order: 2, group: 'lic' };
R['<c>.little_vespers.lic_verses']          = { heading: 'Verses', order: 3, group: 'lic' };
R['<c>.little_vespers.lic_closer']          = { heading: 'Glory / Both now', order: 4, group: 'lic' };
R['<c>.little_vespers.aposticha_rubric']    = { heading: 'Aposticha rubric', order: 5, group: 'aposticha' };
R['<c>.little_vespers.aposticha']           = { heading: 'Aposticha', order: 6, group: 'aposticha' };
R['<c>.little_vespers.aposticha_closer']    = { heading: 'Glory / Both now', order: 7, group: 'aposticha' };
R['<c>.little_vespers.dismissal_troparion'] = { heading: 'Dismissal troparion', order: 8 };
R['<c>.little_vespers.closing_rubric']      = { heading: 'Closing rubric', order: 9 };

// ── great_vespers / vespers — identical shape, identical registry ────────────
for (const sv of ['great_vespers', 'vespers']) {
  R[`<c>.${sv}.rubric`]              = { heading: 'Rubric', order: 1 };
  R[`<c>.${sv}.lic`]                 = { heading: 'At "Lord, I have cried" — stichera', order: 2, group: 'lic' };
  R[`<c>.${sv}.lic_verses`]          = { heading: 'Verses', order: 3, group: 'lic' };
  R[`<c>.${sv}.lic_glory`]           = { heading: 'Glory (doxasticon)', order: 4, group: 'lic' };
  R[`<c>.${sv}.lic_closer`]          = { heading: 'Both now', order: 5, group: 'lic' };
  R[`<c>.${sv}.entrance_rubric`]     = { heading: 'Entrance', order: 6 };
  R[`<c>.${sv}.prokeimenon`]         = { heading: 'Prokeimenon', order: 7 };
  R[`<c>.${sv}.readings`]            = { heading: 'Lessons (paremias)', order: 8 };
  R[`<c>.${sv}.litiya`]              = { heading: 'At the Litiya', order: 9, group: 'litiya' };
  R[`<c>.${sv}.aposticha_rubric`]    = { heading: 'Aposticha rubric', order: 10, group: 'aposticha' };
  R[`<c>.${sv}.aposticha`]           = { heading: 'Aposticha', order: 11, group: 'aposticha' };
  R[`<c>.${sv}.aposticha_glory`]     = { heading: 'Glory', order: 12, group: 'aposticha' };
  R[`<c>.${sv}.aposticha_closer`]    = { heading: 'Both now', order: 13, group: 'aposticha' };
  R[`<c>.${sv}.blessing_of_loaves`]  = { heading: 'Blessing of the loaves', order: 14 };
  R[`<c>.${sv}.dismissal_troparion`] = { heading: 'Dismissal troparion', order: 15 };
  R[`<c>.${sv}.closing_rubric`]      = { heading: 'Closing rubric', order: 16 };
}

// ── compline ─────────────────────────────────────────────────────────────────
R['<c>.compline.frame_rubric']   = { heading: 'Frame rubric', order: 1 };
R['<c>.compline.canon']          = { heading: 'Canon', order: 2 };
R['<c>.compline.after_ode6']     = { heading: 'After Ode VI', order: 3 };
R['<c>.compline.closing_rubric'] = { heading: 'Closing rubric', order: 4 };

// ── matins ───────────────────────────────────────────────────────────────────
R['<c>.matins.matins_format']            = { heading: 'Matins form', order: 1 };
R['<c>.matins.god_is_lord_rubric']       = { heading: 'God is the Lord', order: 2, group: 'opening' };
R['<c>.matins.troparion_rubric']         = { heading: 'Troparion rubric', order: 3, group: 'opening' };
R['<c>.matins.sessionals']               = { heading: 'Sessional hymns', order: 4, group: 'kathismata' };
R['<c>.matins.polyeleos_rubric']         = { heading: 'Polyeleos', order: 5, group: 'polyeleos' };
R['<c>.matins.magnification']            = { heading: 'Magnification', order: 6, group: 'polyeleos' };
R['<c>.matins.selected_psalm_verse']     = { heading: 'Selected Psalm verse', order: 7, group: 'polyeleos' };
R['<c>.matins.sessional_post_polyeleos'] = { heading: 'Sessional after the Polyeleos', order: 8, group: 'polyeleos' };
R['<c>.matins.anabathmoi_rubric']        = { heading: 'Songs of Ascent', order: 9, group: 'gospel' };
R['<c>.matins.prokeimenon']              = { heading: 'Prokeimenon', order: 10, group: 'gospel' };
R['<c>.matins.gospel']                   = { heading: 'Gospel', order: 11, group: 'gospel' };
R['<c>.matins.psalm50_sticheron']        = { heading: 'Sticheron after Psalm 50', order: 12, group: 'gospel' };
R['<c>.matins.canons']                   = { heading: 'Canons', order: 13, group: 'canon' };
R['<c>.matins.after_ode3']               = { heading: 'After Ode III', order: 14, group: 'canon' };
R['<c>.matins.after_ode6']               = { heading: 'After Ode VI', order: 15, group: 'canon' };
R['<c>.matins.synaxarion']               = { heading: 'Synaxarion', order: 16, group: 'canon' };
R['<c>.matins.katavasiae']               = { heading: 'Katavasiae', order: 17, group: 'canon' };
R['<c>.matins.exapostilarion']           = { heading: 'Exapostilarion', order: 18, group: 'exapostilarion' };
R['<c>.matins.exapostilarion_closer']    = { heading: 'Glory / Both now', order: 19, group: 'exapostilarion' };
R['<c>.matins.praises']                  = { heading: 'At the Praises', order: 20, group: 'praises' };
R['<c>.matins.great_doxology_rubric']    = { heading: 'Great Doxology', order: 21, group: 'praises' };
R['<c>.matins.doxology_troparion']       = { heading: 'Doxology troparion', order: 22, group: 'praises' };
R['<c>.matins.aposticha']                = { heading: 'Aposticha', order: 23, group: 'aposticha' };
R['<c>.matins.aposticha_glory']          = { heading: 'Glory', order: 24, group: 'aposticha' };
R['<c>.matins.aposticha_closer']         = { heading: 'Both now', order: 25, group: 'aposticha' };
R['<c>.matins.closing_rubric']           = { heading: 'Closing rubric', order: 26 };

// ── liturgy ──────────────────────────────────────────────────────────────────
R['<c>.liturgy.antiphons']             = { heading: 'Antiphons', order: 1 };
R['<c>.liturgy.entrance_verse']        = { heading: 'Entrance verse', order: 2 };
R['<c>.liturgy.beatitudes']            = { heading: 'Beatitudes', order: 3 };
R['<c>.liturgy.troparia_rubric']       = { heading: 'Troparia', order: 4, group: 'propers' };
R['<c>.liturgy.kontakion_rubric']      = { heading: 'Kontakion', order: 5, group: 'propers' };
R['<c>.liturgy.trisagion_replacement'] = { heading: 'In place of the Trisagion', order: 6 };
R['<c>.liturgy.prokeimenon']           = { heading: 'Prokeimenon', order: 7, group: 'readings' };
R['<c>.liturgy.epistle']               = { heading: 'Epistle', order: 8, group: 'readings' };
R['<c>.liturgy.alleluia']              = { heading: 'Alleluia', order: 9, group: 'readings' };
R['<c>.liturgy.gospel']                = { heading: 'Gospel', order: 10, group: 'readings' };
R['<c>.liturgy.communion_verse']       = { heading: 'Communion verse', order: 11 };
R['<c>.liturgy.megalynarion']          = { heading: 'Megalynarion', order: 12 };
R['<c>.liturgy.closing_rubric']        = { heading: 'Closing rubric', order: 13 };

// ── cross-date tables ────────────────────────────────────────────────────────
R['shared']  = { heading: 'Menaion-wide tables', order: 1 };
R['general'] = { heading: 'General Menaion', order: 2 };

// ── General Menaion cells (§6.2) — `<g>` ranges over GENERAL_TYPES ──────────
R['<g>.title']             = { heading: 'Title', order: 1 };
R['<g>.subject']           = { heading: 'Subject', order: 2 };
R['<g>.troparion']         = { heading: 'Troparion', order: 3, group: 'canonical' };
R['<g>.kontakion']         = { heading: 'Kontakion', order: 4, group: 'canonical' };
R['<g>.vespers']           = { heading: 'At Vespers', order: 5 };
R['<g>.matins']            = { heading: 'At Matins', order: 6 };
R['<g>.liturgy']           = { heading: 'At Liturgy', order: 7 };
R['<g>.dogmatikon_rubric'] = { heading: 'Dogmatikon (from the Octoechos)', order: 8 };

export const REGISTRY = R;

// Resolve a concrete data path onto its generic manifest path.
//   08-15.c0.great_vespers.lic[2]  →  <c>.great_vespers.lic
// With up to 366 date keys and several commemorations each, the Menaion needs
// this far more than the Octoechos did (§10.3).
export function registryLookup(path) {
  if (REGISTRY[path]) return REGISTRY[path];
  const generic = path
    .replace(/^(\d{2}-\d{2})\.c\d+\./, '<c>.')
    .replace(/^general\.[^.]+\./, '<g>.')
    .replace(/\[\d+\]/g, '');
  return REGISTRY[generic] ?? null;
}

// Convenience for the viewer's service-level ordering.
export function serviceHeading(svc) { return SERVICE_HEADINGS[svc] ?? svc; }
export const KNOWN_SERVICES = new Set([...SERVICES, 'identity', 'shared', 'general']);
