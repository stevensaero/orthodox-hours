// src/data/liturgy/registry.js
// ─────────────────────────────────────────────────────────────────────────────
// The closed movement vocabulary for the Divine Liturgy data module
// (divine_liturgy_chrysostom_encoding_spec.md §3, v6, v7) promoted out of the
// preview page's <script> into data, as spec v13 anticipated.
//
// Every unit in chrysostom.js carries exactly one `movement` from this list,
// in this order. The assembler (liturgy_assembler_spec.md) and the validator
// (tools/validate_liturgy.mjs) both key off this file and nothing else.
//
//   id       — the `movement` value on each unit
//   label    — outline label
//   part     — catechumens | faithful | after (derived here, never stored per unit)
//   core     — true for the overview outline (liturgy_assembler_spec.md §2.4);
//              the expanded outline lists every movement
//   movable  — the book's own rubrics say this movement varies by day/season
//              (spec v13 table — each entry traced to a printed line, not
//              asserted from outside knowledge)
// ─────────────────────────────────────────────────────────────────────────────

export const MOVEMENT_REGISTRY = [
  { id: "opening_doxology",            label: "Blessed is the Kingdom",                    part: "catechumens", core: true,  movable: false },
  { id: "great_litany",                label: "The Great Litany",                          part: "catechumens", core: true,  movable: false },
  { id: "antiphon_1",                  label: "First Antiphon",                            part: "catechumens", core: true,  movable: true  },
  { id: "litany_small_1",              label: "Small Litany",                              part: "catechumens", core: false, movable: false },
  { id: "antiphon_2",                  label: "Second Antiphon",                           part: "catechumens", core: true,  movable: true  },
  { id: "litany_small_2",              label: "Small Litany",                              part: "catechumens", core: false, movable: false },
  { id: "antiphon_3",                  label: "Third Antiphon / Beatitudes",               part: "catechumens", core: true,  movable: true  },
  { id: "little_entrance",             label: "Little Entrance",                           part: "catechumens", core: true,  movable: true  },
  { id: "troparia_kontakia",           label: "Troparia and Kontakia",                     part: "catechumens", core: true,  movable: true  },
  { id: "trisagion",                   label: "Trisagion Hymn",                            part: "catechumens", core: true,  movable: true  },
  { id: "prokeimenon",                 label: "Prokeimenon",                               part: "catechumens", core: true,  movable: true  },
  { id: "epistle",                     label: "Epistle",                                   part: "catechumens", core: true,  movable: true  },
  { id: "alleluia",                    label: "Alleluia",                                  part: "catechumens", core: true,  movable: true  },
  { id: "gospel",                      label: "Gospel",                                    part: "catechumens", core: true,  movable: true  },
  { id: "litany_fervent_supplication", label: "Litany of Fervent Supplication",            part: "catechumens", core: false, movable: false },
  { id: "litany_departed",             label: "Litany for the Departed (weekdays)",        part: "catechumens", core: false, movable: true  },
  { id: "litany_catechumens",          label: "Litany & Dismissal of the Catechumens",     part: "catechumens", core: false, movable: false },
  { id: "litany_faithful_1",           label: "First Litany of the Faithful",              part: "faithful",    core: false, movable: false },
  { id: "litany_faithful_2",           label: "Second Litany of the Faithful",             part: "faithful",    core: false, movable: false },
  { id: "cherubic_hymn",               label: "Cherubic Hymn",                             part: "faithful",    core: true,  movable: false },
  { id: "great_entrance",              label: "Great Entrance",                            part: "faithful",    core: true,  movable: false },
  { id: "litany_of_supplication",      label: "Litany of Supplication",                    part: "faithful",    core: false, movable: false },
  { id: "kiss_of_peace",               label: "Kiss of Peace",                             part: "faithful",    core: false, movable: false },
  { id: "creed",                       label: "The Creed",                                 part: "faithful",    core: true,  movable: false },
  { id: "anaphora_dialogue",           label: "Anaphora — Opening Dialogue",               part: "faithful",    core: true,  movable: false },
  { id: "anaphora_preface",            label: "Anaphora — Preface",                        part: "faithful",    core: false, movable: false },
  { id: "anaphora_sanctus",            label: "Anaphora — Sanctus",                        part: "faithful",    core: false, movable: false },
  { id: "anaphora_institution",        label: "Anaphora — Words of Institution",           part: "faithful",    core: false, movable: false },
  { id: "anaphora_anamnesis",          label: "Anaphora — Anamnesis / Oblation",           part: "faithful",    core: false, movable: false },
  { id: "anaphora_epiclesis",          label: "Anaphora — Epiclesis",                      part: "faithful",    core: false, movable: false },
  { id: "commemorations",              label: "Commemorations / Hymn to the Theotokos",    part: "faithful",    core: true,  movable: true  },
  { id: "litany_before_lords_prayer",  label: "Litany before the Lord's Prayer",           part: "faithful",    core: false, movable: false },
  { id: "lords_prayer",                label: "The Lord's Prayer",                         part: "faithful",    core: true,  movable: false },
  { id: "bowing_of_heads",             label: "Prayer of the Bowing of Heads",             part: "faithful",    core: false, movable: false },
  { id: "elevation_and_fraction",      label: "Elevation, Fraction and Communion Hymn",    part: "faithful",    core: true,  movable: true  },
  { id: "communion_of_clergy",         label: "Communion of the Clergy",                   part: "faithful",    core: false, movable: false },
  { id: "communion_of_faithful",       label: "Communion of the Faithful",                 part: "faithful",    core: true,  movable: false },
  { id: "thanksgiving_for_communion",  label: "Thanksgiving for Communion",                part: "faithful",    core: false, movable: false },
  { id: "prayer_behind_ambo",          label: "Prayer Behind the Ambo",                    part: "faithful",    core: true,  movable: false },
  { id: "dismissal",                   label: "Dismissal",                                 part: "faithful",    core: true,  movable: true  },
  { id: "after_the_dismissal",         label: "After the Dismissal",                       part: "after",       core: false, movable: false },
];

export const MOVEMENT_ORDER = MOVEMENT_REGISTRY.map(m => m.id);
export const MOVEMENT_BY_ID = Object.fromEntries(MOVEMENT_REGISTRY.map(m => [m.id, m]));
export const MOVABLE_MOVEMENTS = new Set(MOVEMENT_REGISTRY.filter(m => m.movable).map(m => m.id));
export const CORE_MOVEMENTS = new Set(MOVEMENT_REGISTRY.filter(m => m.core).map(m => m.id));

// Rubric units that DICTATE a movable part — the book telling the reader what
// is appointed today. These are the teaching content of the Hours tool and are
// never hidden by the "rubrics" view layer (liturgy_assembler_spec.md §2.3,
// decision 1). Each id is the unit the spec v13 table traced the movable
// status to, plus the rubric a hook inserts after.
export const TEACHING_RUBRICS = new Set([
  "a1-footnote", "a2-footnote",   // On Feast Days, special Antiphons are sung
  "a3-01", "a3-footnote",         // Beatitudes with troparia (if Sunday or as appointed)
  "le-11",                        // Entrance verse day-type clause table
  "tk-01",                        // The choir now sings the appointed Troparia and Kontakia
  "tr-footnote",                  // Trisagion replaced on certain Feast Days
  "pk-07",                        // Prokeimenon and its verse(s)
  "ep-05",                        // The appointed Epistle pericope
  "al-03",                        // The Alleluia Verses
  "go-14",                        // The appointed Gospel pericope
  "ld-01",                        // Litany for the Departed, except Sundays and Feast Days
  "cm-footnote",                  // Hymn to the Theotokos replaced by the 9th Ode
  "ef-footnote",                  // Communion Hymn: Sunday text; other days have special hymns
  "di-footnote",                  // Dismissal: Sunday form; other days see Appendix III
]);

export const VARIANT_TITLES = {
  chrysostom: "Divine Liturgy of Saint John Chrysostom",
  basil: "Divine Liturgy of Saint Basil the Great",
};
