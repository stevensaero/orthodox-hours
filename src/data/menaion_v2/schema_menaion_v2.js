// src/data/menaion_v2/schema_menaion_v2.js
// ─────────────────────────────────────────────────────────────────────────────
// Menaion V2 — THE SINGLE CONTRACT (menaion_v2_spec.md §7).
//
// Three consumers key off this one module and nothing else:
//   • tools/validate_menaion_v2.mjs        — the §7.4 drift gate
//   • src/data/menaion_v2/presentation.js + the V2 browser — §8.1 rendering
//   • tools/validate_viewer_coverage.mjs   — §7.7 coverage gate (schema ⋈ registry)
//
// Data cannot exist outside this contract (vocabulary guard, §7.4), and nothing
// inside it can be invisible (coverage gate + generic fallback rendering). To add
// a genuinely new field: add it HERE deliberately — that deliberate edit IS the
// gate — and the coverage gate will demand a registry entry (or an explicit
// hidden-with-reason) in the same session.
//
// GOVERNING PRINCIPLE (§2.2): Menaion V2 captures everything its source prints
// for a date. Rank governs what the ASSEMBLER selects; it never governs what the
// ENCODER captures. This supersedes encoding_rule_v2.md §6.
//
// SCOPE TAGS (§2.12): every structural claim below is tagged.
//   [A-attested]              confirmed against the 37 August files
//   [expected month-invariant] believed general; verified in one month only
//   [month-specific]          demoted; holds for the named months only
//   [unattested]             asserted from general knowledge — DO NOT BUILD ON
// Demotion is a normal commit, in the same change as the data revealing it.
// ─────────────────────────────────────────────────────────────────────────────

export const SPEC_REV = 2;

export const MONTHS = ['01','02','03','04','05','06','07','08','09','10','11','12'];

// ── Commemoration kinds (§5.2) ───────────────────────────────────────────────
// 'afterfeast' and 'forefeast' [A-attested]: the source prints them as titled
// peer bodies of propers inside the daily file (AFTERFEAST OF THE DORMITION),
// and its hymn headings name them ("Troparion of the forefeast").
// 'feast' and 'apodosis' [unattested] — confirmed or dropped at close reading.
// NOTE: 'temple' is deliberately NOT a kind. The Litiya temple sticheron is not
// Menaion content (§5.4); only its rubric is stored.
export const COMMEMORATION_KINDS = [
  'saint', 'forefeast', 'feast', 'afterfeast', 'apodosis',
];

// ── Rank (§9) ────────────────────────────────────────────────────────────────
// The vocabulary ONLY. Rank determination is encoding_rule_v2.md §1.1's ordered
// waterfall, read live, applied by a human against the day's rubric.
// THE GATE DOES NOT ADJUDICATE RANK — deriving rank from section presence and
// then checking section presence against rank is circular (§9).
export const RANKS = [
  'great_feast', 'vigil', 'polyeleos', 'doxology', 'six_stichera', 'simple',
];

// ── Services (§5) ────────────────────────────────────────────────────────────
// File counts across the 37 August files, for scope:
//   liturgy 37 · matins 36 · vespers 27 · great_vespers 10 · little_vespers 8
//   compline 2 (08-05, 08-07 — Transfiguration cycle only)
export const SERVICES = [
  'little_vespers', 'great_vespers', 'vespers', 'compline', 'matins', 'liturgy',
];

// ── Canon odes (§5.6) ────────────────────────────────────────────────────────
// [A-attested] All 37 August files print I, III, IV, V, VI, VII, VIII, IX.
// Ode II appears in NONE of them.
// Ode 2 is nonetheless declared OPTIONAL rather than removed: the Menaion prints
// it in Lenten-period canons — a claim tagged [unattested] and held only until a
// Lenten month is scanned. This is deliberately NOT a copy of the Octoechos
// CANON_ODES constant. August alone would justify copying it, which is precisely
// why copying it would have been the error (PRIME DIRECTIVE, applied cross-book).
export const CANON_ODES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const CANON_ODES_OPTIONAL = [2];

// ── Item-label vocabulary (§7.1) ─────────────────────────────────────────────
// Labels COMPOUND: an item's `label` is a string from this list OR an array of
// them, in the source's printed order. Extended only on attestation, never by
// inference.
export const LABELS = [
  'plain', 'martyrs', 'glory', 'both_now', 'theotokion', 'stavrotheotokion',
  'of_the_feast', 'forefeast', 'afterfeast', 'for_the_reposed', 'refrain',
];

// ── Typed closers (§5.8) ─────────────────────────────────────────────────────
// The `type` records what the source labels the hymn; it is NEVER flattened into
// a field name. Evidence (§1.7 label scan, all 37 files): the source prints
//   "Glory ..., Both now ..., Theotokion"        (36 in Matins alone)
//   "Both now ..., Theotokion"                   (5)
//   "Both now ..., of the feast"                 (9)
//   "Glory ..., Both now ..., in the same melody" (10)
//   bare "Both now ..."                          (4)
// — different labels on ONE structural slot. `sourceLabel` stores the label
// verbatim; `type` is the normalized form.
export const CLOSER_TYPES = [
  'theotokion', 'stavrotheotokion', 'dogmatic_theotokion',
  'of_the_feast', 'in_the_same_melody', 'plain',
  // The General Menaion declines to fix the type, because it depends on the day
  // the general service is used (Wed/Fri take the Stavrotheotokion). 80
  // instances across 21 of the 26 files — pervasive, not marginal. Storing a
  // concrete type here would invent a decision Fekula makes at assembly.
  'theotokion_or_stavrotheotokion',
];

// ── Pointing (§2.5; encoding_rule_v2.md §3) ──────────────────────────────────
// Tier 1: no markers (prose).
// Tier 2: St. Sergius `*` + exactly one `**`; never `|` or `//`; no `[`.
// Tier 3: OCA dialect `|` + exactly one `//` + `[brackets]`; director: true.
// [A-attested] All 37 August files are St. Sergius dialect: 7,051 `*`, 643 `**`,
// zero `|`, zero `//`. Tier 3 is DEFINED but NOT PRODUCED in August (§2.9, R-2).
// Marker consistency is checked PER `spec_mel` SUB-GROUP, never across a whole
// array — one array may legitimately mix tiers (encoding_rule_v2.md §3.2).
export const TIERS = [1, 2, 3];
export const DIALECTS = ['sergius', 'oca'];

// ── Absence (§2.10, §7.3) ────────────────────────────────────────────────────
// Every source-conditional field is a text node OR an absence node. A missing
// key is a hard-fail — absence is declared, never inferred.
//
// `not_yet_encoded` is DELIBERATELY ABSENT from this vocabulary. It would
// reintroduce exactly the silence the mechanism exists to remove. Work in
// progress is expressed by not claiming the section in `_encoded`.
export const ABSENCE_REASONS = [
  'not_printed_in_source',        // the book prints nothing here. Settled.
  'source_unavailable',           // we lack the page. Revisitable — delivery gap.
  'no_daily_source',              // the source produces no file at all — 08-23. Closed.
  'governed_by_octoechos',
  'governed_by_pentecostarion',
  'other_book',                   // named-but-not-printed (§6.3); names the book
  'source_illegible',
];

// `src {file, locus}` is required only where a locus can exist.
export const ABSENCE_REASONS_REQUIRING_SRC = [
  'source_illegible',
];
export const ABSENCE_REASONS_REQUIRING_BOOK = [
  'other_book', 'governed_by_octoechos', 'governed_by_pentecostarion',
];

// ── Absence verification basis (§7.3a) ───────────────────────────────────────
// This is what keeps "full capture" honest. A capture that records "nothing
// printed here" identically whether the encoder ran a heading scan or read the
// page is not complete — it merely looks complete, and re-scanning it reproduces
// the gap. Since re-derivation runs against the capture rather than the PDF
// (§2.12a), the capture must carry its own confidence.
export const ABSENCE_BASIS = [
  'close_reading',   // encoder read the relevant span. Default for encoded dates.
  'heading_scan',    // PROVISIONAL — gate reports these as an outstanding worklist
  'physical_book',   // checked against the printed book, beyond the PDF
  'structural',      // no source file exists at all (no_daily_source)
];

// ── Source files (§7.1) ──────────────────────────────────────────────────────
// Every text node's src.file must come from this list. Extended deliberately as
// sources are inventoried. Note 08-23 is ABSENT and permanently so (§1.2).
const AUGUST_DATES = [
  '08-01','08-01A','08-02','08-03','08-03A','08-04','08-05','08-06','08-07',
  '08-08','08-08A','08-09','08-10','08-11','08-12','08-13','08-14','08-15',
  '08-16','08-17','08-18','08-18A','08-19','08-20','08-21','08-22',
  /* 08-23 does not exist — §1.2, permanent */
  '08-24','08-25','08-26','08-26A','08-27','08-28','08-28A','08-29','08-30',
  '08-30A','08-31',
];
export const SOURCE_FILES = AUGUST_DATES.map(d => `${d}.pdf`);
// ── The General Menaion (§6.2) — enumerated FROM THE FOLDER ─────────────────
// Never from encoding_rule_v2.md §2.1's prose, which is wrong in three ways:
// it names a "Venerable.pdf" that does not exist (the file is Monastic.pdf),
// and it gives the placeholder as "(Name) / (N.)" when the printed token is
// lowercase `(name)` — 445 instances corpus-wide, `(Name)` and `(N.)` zero.
export const GENERAL_TYPES = [
  'Angels', 'Apostle', 'Apostles', 'Cross', 'Fools', 'Heirarch', 'Heirarchs',
  'Heiromartyrs', 'HieroConfessor', 'Hieromartyr', 'Holy Fathers', 'Martyr',
  'Martyress', 'Martyresses', 'Martyrs', 'Monastic', 'MonasticMartyr',
  'MonasticMartyrs', 'Monastics', 'Nun', 'NunMartyr', 'Nuns', 'Prophet',
  'St John Baptist', 'Theotokos', 'Unmercenaries',
];
export const GENERAL_MENAION_FILES = GENERAL_TYPES.map(x => `${x}.pdf`);

// Four of the 26 are not saint TYPES at all — they are general services to a
// specific subject. The table keys by both axes (§6.2).
export const GENERAL_SUBJECTS = ['Cross', 'Holy Fathers', 'St John Baptist', 'Theotokos'];

// Only these carry the `(name)` placeholder; the plural/collective files name
// nobody. `name_substituted` is EXPECTED on a fallback drawn from a file in
// this list and FORBIDDEN on one drawn from any other.
export const GENERAL_TAKES_NAME = [
  'Angels', 'Apostle', 'Fools', 'Heirarch', 'HieroConfessor', 'Hieromartyr',
  'Martyr', 'Martyress', 'Monastic', 'MonasticMartyr', 'Nun', 'NunMartyr',
  'Nuns', 'Prophet', 'Unmercenaries',
];
export const NAME_PLACEHOLDER = '(name)';   // lowercase, verbatim

// ── The universal text node (§5.1) ───────────────────────────────────────────
// `src` (with BOTH file and locus) and `tier` are MANDATORY on every text node.
// Absence of a tier is a hard-fail, not "unpointed".
export const TEXT_NODE = {
  required: ['text', 'tier', 'src'],
  optional: [
    'sourceLabel',       // the source's own label where it differs from ours
    'spec_mel',          // Spec. Mel. label, verbatim per print site
    'director',          // Tier-3 only (encoding_rule_v2.md §3.5)
    'repeat',            // "(Twice)" device → exactly 2 (§2.8)
    'incipit_ref',       // incipit device → path of referent; gate prefix-checks
    'refrain',
    'label',             // string or array from LABELS
    'type',              // typed closers: from CLOSER_TYPES
    'tone',
    'dialect',           // from DIALECTS; default 'sergius'
    'provenance_note',
    'homoglyph_log',     // [{from, to, count}] — August is clean (§1.3)
    'composer',          // [A-attested] "The composition of Joseph|Cosmas of Maiuma"
    'acrostic',
    'saint',             // which commemoration, where a section interleaves two
    'name_substituted',  // {placeholder, value} — General Menaion (§6.2)
    'verified_sites',    // R-1 multi-site verification record. Entries are
                         // { locus, tone? } — NOT bare strings. Martyr.pdf prints
                         // one troparion text at TWO DECLARED TONES (III at
                         // Matins, IV at Liturgy). Bill's ruling: stay true to
                         // the text, keep ONE field, and record the tone PER
                         // SITE. A single top-level `tone` would have had to
                         // pick one and silently discard the other.
    'label_inline',      // TRUE where the source runs `sourceLabel` INTO the text on
                         // one line ("Stavrotheotokion: The unblemished ewe-lamb …")
                         // rather than printing it on its own line ("Glory ..., Both
                         // now ..., Theotokion, in Tone VIII:" then the hymn beneath).
                         // The book does BOTH, deliberately; without this the reading
                         // view has to guess at a typographic fact the source states.
  ],
};

// ── Derived citations (§2.11, R-4 as ruled) ─────────────────────────────────
// The General Menaion prints its three Vespers lessons with NO verse reference —
// 26 such headings across the 26 files, against 83 that do carry one. Bill's
// ruling: derive the citation by matching the printed text against the corpus.
//
// A derived citation is stored ONLY if it ROUND-TRIPS: the candidate range is
// pulled back out of public/bible and compared against the printed text as a
// whole. This guard is not optional and not a nicety. A naive similarity match
// returns a confident citation for ANY prose — the first pass of this matcher
// stamped "Wisdom of Solomon 4:2-7:19" onto a Tier-1 HYMN. Real readings
// reconstruct at 0.89-0.93; that hymn reconstructed at 0.20 and is refused.
//
// Below threshold: NO citation is stored and the field takes an absence node.
// Never a guess.
export const DERIVED_CITATION_FLOOR = 0.72;
export const DERIVED_NODE = {
  required: ['method', 'reconstruction'],   // e.g. { method: 'corpus-match', reconstruction: 0.92 }
};

// An absence node stands wherever a text node may. Mutually exclusive with `text`.
export const ABSENCE_NODE = {
  required: ['absent', 'reason', 'basis'],
  optional: ['src', 'book', 'note'],
};

// ── Reading citations (§2.11, R-4) ───────────────────────────────────────────
// The scripture tool owns reading TEXT. The Menaion stores the citation only.
// Both forms are required: the source's citation formats vary across files
// ("§ 320 (HEB. 9: 1-7)", "§330 (11 :33-40)", "(MT. 5:14-19)"), so the verbatim
// string preserves the print site and the normalized form is resolvable.
// Where a citation COMES FROM is provenance, exactly as `basis` is for absence.
// Three sources, and the viewer/gate must be able to tell them apart:
//   printed    — the source prints the reference. Trusted.
//   derived    — matched against public/bible and ROUND-TRIP VERIFIED (§2.11).
//   identified — a human recognised the passage where derivation REFUSED,
//                because the Menaion's translation diverges from the corpus.
//                Carries no reconstruction score and must never be presented as
//                if it were verified.
export const CITATION_BASIS = ['printed', 'derived', 'identified'];

export const READING_NODE = {
  required: ['heading'],
  // `citation_verbatim` is required only where the source PRINTS a reference.
  // The General Menaion's Vespers lessons print none; those carry `derived`
  // instead, and the gate re-runs the reconstruction rather than trusting it.
  optional: ['src', 'citation_verbatim', 'citation', 'citation_basis', 'derived', 'note'],
  citation: { required: ['book', 'chapter', 'verses'], optional: ['pericope_number'] },
};

// ── Field kinds (§7.1) ───────────────────────────────────────────────────────
export const FIELD_KINDS = [
  'rubric', 'text', 'closer', 'text_array', 'labeled_items', 'sessional_sets',
  'canon', 'canons', 'after_ode', 'prokeimenon', 'alleluia', 'reading',
  'readings', 'praises', 'aposticha', 'beatitudes', 'litiya', 'group',
];

// ── Claim vocabulary (§4) ────────────────────────────────────────────────────
// Claims are per-commemoration-per-service: `c0.great_vespers`, never a bare
// `great_vespers`. A date-level claim could not distinguish c0's Great Vespers
// from c1's, which is the entire point of the commemoration axis (§5.2).
export const CLAIMABLE = ['identity', ...SERVICES];
export const CLAIM_RE = /^c(\d+)\.(identity|little_vespers|great_vespers|vespers|compline|matins|liturgy)$/;

// ── Canon contract (§7.6) ────────────────────────────────────────────────────
// One shape. Per ode: `irmos` (full text node OR incipit_ref device) plus a
// non-empty array of labeled items. WHICH labels appear and HOW MANY items is a
// per-ode SOURCE FACT — the gate checks label validity and non-emptiness, never
// a census (§7.5).
// `composer` and `acrostic` are independent and both optional; the Octoechos
// found all four combinations.
// Octoechos "Shape A" (three sub-canons per ode) has NO Menaion analogue and is
// not carried — it is a resurrectional-cycle shape.
export const CANON = {
  known: ['title', 'composer', 'acrostic', 'tone', 'condition', 'heading_rubric', 'odes'],
  required: ['odes'],
  odeKeys: CANON_ODES,
  odeOptional: CANON_ODES_OPTIONAL,
  ode: { required: ['irmos', 'items'], optional: ['katavasia', 'theotokion'] },
};

// ── Vocabulary guards (§7.4) ─────────────────────────────────────────────────
// "Data cannot exist outside this contract" is a CHECK, not a slogan. Revision 1
// asserted it without one.
export const MONTH_TOP = {
  dateKey: /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  date: { known: ['_encoded', 'commemorations'], required: ['_encoded', 'commemorations'] },
};

export const ENTRY_TOP = {
  known: [
    'kind', 'title', 'feast_ref', 'day_of', 'rank', 'fekula_section',
    'oca_primary', 'source_file', 'note',
    'troparion', 'kontakion', 'ikos',
    ...SERVICES,
  ],
  required: ['kind', 'title', 'rank', 'source_file'],
};

// Every service object carries `order` — its element keys in PRINTED sequence
// (§5.1). Named fields keep the data addressable for the assembler; `order`
// preserves the page so the reading view reproduces it. Without this, a date
// whose page order differs from the template renders in template order and the
// divergence is invisible. The gate checks `order` names exactly the keys
// present — no more, no fewer.
export const SERVICE_REQUIRES_ORDER = true;

// ── Section rules (§7.5) ─────────────────────────────────────────────────────
// DELIBERATELY THIN. The only counts August attests are section PRESENCE counts,
// not item counts, and the standing rule is: never hard-code a count the source
// varies. Rules are added as close reading attests them.
export const SECTION_RULES = {
  matins: {
    // Surfaced as a FINDING, not a hard-fail: the evidence is one V1 entry
    // (06-29, Matins T4 vs Liturgy T8) and no August attestation either way.
    prokeimenonDiffersFrom: 'liturgy.prokeimenon',
  },
};

// ── Placeholder patterns (§7.4) ──────────────────────────────────────────────
// Seeded from V1's audit.js set plus the Octoechos set.
export const PLACEHOLDER_PATTERNS = [
  /TODO/i,
  /not yet encoded/i,
  /to be encoded/i,
  /pending encoding/i,
  /\[NYE\]/i,
  /\[Menaion sticheron/i,
  /\[stichera not yet/i,
  /\[aposticha stichera not yet/i,
  /Track B/i,
  /Phase 2/i,
  /\[Glory from Menaion[^\]]*\]/i,   // the V1 bracketed-rubric anti-pattern
  /^\s*\.\.\.\s*$/,
];

// ── Registers (§2.3a, §2.9, §7.4) ────────────────────────────────────────────
//   identical — gate requires BYTE-MATCH
//   variant   — gate requires the two texts NOT to byte-match
//   family    — same hymn attested at both, byte-status not pinned; informational
//               only, and MUST be upgraded in the commit that encodes either
//               position. Steady state is zero.
export const RECURRENCE_RELATIONS = ['identical', 'variant', 'family'];

// Recurrence paths may cross books (§10.4). An unqualified path means this book.
export const BOOK_PREFIXES = ['menaion', 'octoechos', 'pentecostarion'];
export const QUALIFIED_PATH_RE = /^(menaion|octoechos|pentecostarion):(.+)$/;

// Anchor grammar (§10.1): `${MM-DD}.c${idx}.${schemaPath}`. Every commemoration
// carries .c0 even when it is the only one, so the grammar has no special case.
export const ANCHOR_RE = /^(\d{2}-\d{2})\.c(\d+)\.(.+)$/;

// ── Extractor hygiene (§1.4, §2.13) ──────────────────────────────────────────
// Overprinted display glyphs are an EXTRACTOR SETTING, not an artifact class:
// pdfplumber's dedupe_chars() takes 527 doubled lines across the 37 files down to
// 3. There is no doubled_glyph_log, no normalizer, no threshold. The pattern
// below is a TRIPWIRE only, in case a future file defeats the tolerance.
export const DOUBLED_RUN_TRIPWIRE = /\b(?:([A-Za-z])\1){3,}/;
export const NON_LATIN_LETTER = /\p{L}/u;          // paired with an a-z test
export const DIGIT_ZERO_AS_O = /\b0\s+[A-Z]/;

// ── Scripture book-name canon (§7.4) ─────────────────────────────────────────
// The high-precision sic checks do not catch a misspelled proper noun —
// "THE EPISTLE TO THE GALATIONS" (Monastic.pdf, Monastics.pdf) slipped past
// them. Reading headings are checked against this list; a near-miss is a
// FINDING, surfaced with the nearest canonical name, never auto-corrected.
export const SCRIPTURE_BOOK_NAMES = [
  'Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth',
  'Kings','Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs',
  'Ecclesiastes','Song of Songs','Wisdom of Solomon','Sirach','Isaiah','Jeremiah',
  'Lamentations','Baruch','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah',
  'Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi',
  'Maccabees','Tobit','Judith','Esdras',
  'Matthew','Mark','Luke','John','Acts','Romans','Corinthians','Galatians',
  'Ephesians','Philippians','Colossians','Thessalonians','Timothy','Titus',
  'Philemon','Hebrews','James','Peter','Jude','Revelation',
];

// ── Translation-register lint (§7.4) ─────────────────────────────────────────
// Carried from validate_entries.mjs Check F, but applied to EVERY text node
// rather than a hand-listed set of 11 field names.
export const REGISTER_MODERN = /\b(You|Your|Yours)\b/;
export const REGISTER_MODERN_LC = /\b(you|your|yours)\b/;
export const REGISTER_ARCHAIC = /\b(thee|thou|thy|thine|ye)\b/i;

// PLURAL ADDRESS. The register lint was built on the Octoechos, whose hymns
// mostly address God, Christ, or the Theotokos in the SINGULAR — where "you"
// really is a modern-register tell against "thou". The General Menaion's plural
// files address the saints in the PLURAL, and in this translation plural address
// legitimately takes "you / your" (singular thou · plural you). Monastics.pdf's
// three LIC stichera fired the lint three times for correct text.
//
// A text carrying a plural vocative is therefore NOT flagged for "you".
export const REGISTER_PLURAL_ADDRESS =
  /\b(fathers|mothers|ones|saints|martyrs|martyresses|apostles|hierarchs|monastics|nuns|prophets|God-bearers|unmercenaries|children)\b/i;

// ── FIELD MANIFEST (§7.2) ────────────────────────────────────────────────────
// Every renderable field path. Paths are COMMEMORATION-GENERIC, using a <c>
// wildcard; presentation.js's registryLookup() resolves a concrete path
// (08-15.c0.great_vespers.lic) onto its generic form. `required` is evaluated
// only when the owning claim appears in `_encoded`. Counts live in SECTION_RULES.
//
// Fields tagged [unattested] exist so the coverage gate can see them. AN ENCODER
// MUST NOT CREATE ONE WITHOUT A PRINT SITE.
export const FIELD_MANIFEST = [
  // ── identity ──────────────────────────────────────────────────────────────
  { path: '<c>.title',          kind: 'text',   service: 'identity', required: true,  tag: 'A-attested', label: 'Commemoration title, verbatim heading' },
  { path: '<c>.note',           kind: 'rubric', service: 'identity', required: false, tag: 'A-attested', label: 'Encoding note' },

  // ── canonical hymns (§2.4, R-1) — one field per (commemoration, hymn type) ─
  { path: '<c>.troparion', kind: 'text', service: 'identity', required: false, tag: 'A-attested',
    label: 'Troparion (canonical; multi-site verified §2.4 — August sites match, median 98.9%)' },
  { path: '<c>.kontakion', kind: 'text', service: 'identity', required: false, tag: 'A-attested',
    label: 'Kontakion (canonical; multi-site verified §2.4)' },
  { path: '<c>.ikos',      kind: 'text', service: 'identity', required: false, tag: 'unattested',
    label: 'Ikos (Tier 1 prose)' },

  // ── little_vespers (§5.3) — 8 of 37 files ─────────────────────────────────
  { path: '<c>.little_vespers.rubric',            kind: 'rubric',      service: 'little_vespers', required: false, tag: 'A-attested', label: 'LV rubric' },
  { path: '<c>.little_vespers.lic',               kind: 'labeled_items', service: 'little_vespers', required: true,  tag: 'A-attested', label: 'LV Lord-I-have-cried stichera' },
  { path: '<c>.little_vespers.lic_verses',        kind: 'text_array',  service: 'little_vespers', required: false, tag: 'unattested', label: 'LV LIC verses' },
  { path: '<c>.little_vespers.lic_closer',        kind: 'closer',      service: 'little_vespers', required: false, tag: 'A-attested', label: 'LV LIC closer — typed (§5.8)' },
  { path: '<c>.little_vespers.aposticha_rubric',  kind: 'rubric',      service: 'little_vespers', required: false, tag: 'A-attested', label: '"On the Aposticha, these Stichera" (5 instances)' },
  { path: '<c>.little_vespers.aposticha',         kind: 'aposticha',   service: 'little_vespers', required: false, tag: 'A-attested', label: 'LV aposticha' },
  { path: '<c>.little_vespers.aposticha_closer',  kind: 'closer',      service: 'little_vespers', required: false, tag: 'A-attested', label: 'LV aposticha closer — typed' },
  { path: '<c>.little_vespers.dismissal_troparion', kind: 'text',      service: 'little_vespers', required: false, tag: 'A-attested', label: 'LV dismissal troparion' },
  { path: '<c>.little_vespers.closing_rubric',    kind: 'rubric',      service: 'little_vespers', required: false, tag: 'unattested', label: 'LV closing rubric' },

  // ── great_vespers / vespers (§5.4) — same shape ───────────────────────────
  ...['great_vespers', 'vespers'].flatMap(sv => [
    { path: `<c>.${sv}.rubric`,            kind: 'rubric',        service: sv, required: false, tag: 'A-attested', label: 'Rubric' },
    { path: `<c>.${sv}.lic`,               kind: 'labeled_items', service: sv, required: true,  tag: 'A-attested', label: 'At "Lord, I have cried" — stichera' },
    { path: `<c>.${sv}.lic_verses`,        kind: 'text_array',    service: sv, required: false, tag: 'unattested', label: 'LIC verses' },
    { path: `<c>.${sv}.lic_glory`,         kind: 'text',          service: sv, required: false, tag: 'A-attested', label: 'LIC Glory / doxasticon' },
    { path: `<c>.${sv}.lic_closer`,        kind: 'closer',        service: sv, required: false, tag: 'A-attested', label: 'LIC closer — typed (§5.8)' },
    { path: `<c>.${sv}.entrance_rubric`,   kind: 'rubric',        service: sv, required: false, tag: 'A-attested', label: '"Entrance. Prokeimenon of the day. Three Lessons" (11 instances)' },
    { path: `<c>.${sv}.prokeimenon`,       kind: 'prokeimenon',   service: sv, required: false, tag: 'unattested', label: 'Vespers prokeimenon' },
    { path: `<c>.${sv}.readings`,          kind: 'readings',      service: sv, required: false, tag: 'A-attested', label: 'Paremias — citation + link only (§2.11, R-4)' },
    { path: `<c>.${sv}.litiya`,            kind: 'litiya',        service: sv, required: false, tag: 'A-attested', label: 'Litiya (9 files)' },
    { path: `<c>.${sv}.aposticha_rubric`,  kind: 'rubric',        service: sv, required: false, tag: 'A-attested', label: '"On the Aposticha, these Stichera"' },
    { path: `<c>.${sv}.aposticha`,         kind: 'aposticha',     service: sv, required: false, tag: 'A-attested', label: 'Aposticha' },
    { path: `<c>.${sv}.aposticha_glory`,   kind: 'text',          service: sv, required: false, tag: 'A-attested', label: 'Aposticha Glory' },
    { path: `<c>.${sv}.aposticha_closer`,  kind: 'closer',        service: sv, required: false, tag: 'A-attested', label: 'Aposticha closer — typed' },
    { path: `<c>.${sv}.blessing_of_loaves`,kind: 'group',         service: sv, required: false, tag: 'A-attested', label: 'Blessing of the loaves' },
    { path: `<c>.${sv}.dismissal_troparion`, kind: 'text',        service: sv, required: false, tag: 'A-attested', label: 'Dismissal troparion' },
    { path: `<c>.${sv}.closing_rubric`,    kind: 'rubric',        service: sv, required: false, tag: 'unattested', label: 'Closing rubric' },
  ]),

  // ── compline (§5.5) — 2 of 37 files ───────────────────────────────────────
  { path: '<c>.compline.frame_rubric',   kind: 'rubric',    service: 'compline', required: false, tag: 'unattested', label: 'Frame rubric' },
  { path: '<c>.compline.canon',          kind: 'canon',     service: 'compline', required: true,  tag: 'A-attested', label: 'Compline canon' },
  { path: '<c>.compline.after_ode6',     kind: 'after_ode', service: 'compline', required: false, tag: 'unattested', label: 'After Ode VI' },
  { path: '<c>.compline.closing_rubric', kind: 'rubric',    service: 'compline', required: false, tag: 'unattested', label: 'Closing rubric' },

  // ── matins (§5.6) — the largest section, 517 label instances ──────────────
  { path: '<c>.matins.matins_format',              kind: 'text',           service: 'matins', required: false, tag: 'unattested',  label: "'alleluia' | 'god_is_the_lord' — V1 vocabulary, unattested against August" },
  { path: '<c>.matins.god_is_lord_rubric',         kind: 'rubric',         service: 'matins', required: false, tag: 'A-attested', label: 'God-is-the-Lord rubric' },
  { path: '<c>.matins.troparion_rubric',           kind: 'rubric',         service: 'matins', required: false, tag: 'unattested',  label: 'Troparion rubric' },
  { path: '<c>.matins.sessionals',                 kind: 'sessional_sets', service: 'matins', required: false, tag: 'A-attested', label: 'Sessional hymns ("Sessional Hymn of the …", 11)' },
  { path: '<c>.matins.polyeleos_rubric',           kind: 'rubric',         service: 'matins', required: false, tag: 'unattested',  label: 'Polyeleos rubric' },
  { path: '<c>.matins.magnification',              kind: 'text',           service: 'matins', required: false, tag: 'A-attested', label: 'Magnification (11 files)' },
  { path: '<c>.matins.selected_psalm_verse',       kind: 'text',           service: 'matins', required: false, tag: 'A-attested', label: '"Selected Psalm verse" (11)' },
  { path: '<c>.matins.sessional_post_polyeleos',   kind: 'sessional_sets', service: 'matins', required: false, tag: 'A-attested', label: '"After the Polyeleos, the Sessional Hymn" (12)' },
  { path: '<c>.matins.anabathmoi_rubric',          kind: 'rubric',         service: 'matins', required: false, tag: 'A-attested', label: '"Song of Ascents, the first antiphon of Tone IV" (4) — RUBRIC ONLY, per R-5' },
  { path: '<c>.matins.prokeimenon',                kind: 'prokeimenon',    service: 'matins', required: false, tag: 'unattested',  label: 'Matins prokeimenon' },
  { path: '<c>.matins.gospel',                     kind: 'reading',        service: 'matins', required: false, tag: 'A-attested', label: 'Matins Gospel — citation + link only (R-4)' },
  { path: '<c>.matins.psalm50_sticheron',          kind: 'text',           service: 'matins', required: false, tag: 'A-attested', label: '"After Psalm 50, this Sticheron" (9)' },
  { path: '<c>.matins.canons',                     kind: 'canons',         service: 'matins', required: false, tag: 'A-attested', label: 'Canons ("The composition of Joseph|Cosmas of Maiuma", 10)' },
  { path: '<c>.matins.after_ode3',                 kind: 'after_ode',      service: 'matins', required: false, tag: 'A-attested', label: 'After Ode III — sessional / kontakion print site (§5.9)' },
  { path: '<c>.matins.after_ode6',                 kind: 'after_ode',      service: 'matins', required: false, tag: 'A-attested', label: 'After Ode VI — kontakion + ikos print site (§5.9)' },
  { path: '<c>.matins.synaxarion',                 kind: 'text',           service: 'matins', required: false, tag: 'unattested',  label: 'Synaxarion — NO heading found in any August file (§1.5)' },
  { path: '<c>.matins.katavasiae',                 kind: 'text_array',     service: 'matins', required: false, tag: 'unattested',  label: 'Katavasiae — no label found' },
  { path: '<c>.matins.exapostilarion',             kind: 'text',           service: 'matins', required: false, tag: 'A-attested', label: 'Exapostilarion (37/37 files) — Menaion content, NOT the gospel-keyed Evangelical set (R-3)' },
  { path: '<c>.matins.exapostilarion_closer',      kind: 'closer',         service: 'matins', required: false, tag: 'A-attested', label: '"Glory …, Both now …, Exapostilarion" (7)' },
  { path: '<c>.matins.praises',                    kind: 'praises',        service: 'matins', required: false, tag: 'A-attested', label: 'Praises (22 files)' },
  { path: '<c>.matins.great_doxology_rubric',      kind: 'rubric',         service: 'matins', required: false, tag: 'A-attested', label: 'Great Doxology rubric' },
  { path: '<c>.matins.doxology_troparion',         kind: 'text',           service: 'matins', required: false, tag: 'unattested',  label: 'Doxology troparion' },
  { path: '<c>.matins.aposticha',                  kind: 'aposticha',      service: 'matins', required: false, tag: 'unattested',  label: 'Matins aposticha' },
  { path: '<c>.matins.aposticha_glory',            kind: 'text',           service: 'matins', required: false, tag: 'unattested',  label: 'Matins aposticha Glory' },
  { path: '<c>.matins.aposticha_closer',           kind: 'closer',         service: 'matins', required: false, tag: 'unattested',  label: 'Matins aposticha closer — typed' },
  { path: '<c>.matins.closing_rubric',             kind: 'rubric',         service: 'matins', required: false, tag: 'unattested',  label: 'Closing rubric' },

  // ── liturgy (§5.7) — 107 label instances, almost all propers ──────────────
  { path: '<c>.liturgy.antiphons',            kind: 'group',       service: 'liturgy', required: false, tag: 'month-specific', label: 'Festal antiphons — attested in 08-06 ONLY (1/37); 08-15 prints none (§13.2 item 6)' },
  { path: '<c>.liturgy.entrance_verse',       kind: 'text',        service: 'liturgy', required: false, tag: 'A-attested',     label: 'Entry Hymn (Introit) — 08-06' },
  { path: '<c>.liturgy.beatitudes',           kind: 'beatitudes',  service: 'liturgy', required: false, tag: 'unattested',     label: 'Beatitude troparia' },
  { path: '<c>.liturgy.troparia_rubric',      kind: 'rubric',      service: 'liturgy', required: false, tag: 'A-attested',     label: 'Troparia rubric' },
  { path: '<c>.liturgy.kontakion_rubric',     kind: 'rubric',      service: 'liturgy', required: false, tag: 'A-attested',     label: 'Kontakion rubric' },
  { path: '<c>.liturgy.trisagion_replacement',kind: 'text',        service: 'liturgy', required: false, tag: 'unattested',     label: '"As many as have been baptized"' },
  { path: '<c>.liturgy.prokeimenon',          kind: 'prokeimenon', service: 'liturgy', required: false, tag: 'unattested',     label: 'Liturgy prokeimenon' },
  { path: '<c>.liturgy.epistle',              kind: 'reading',     service: 'liturgy', required: false, tag: 'A-attested',     label: 'Epistle — citation + link only (R-4)' },
  { path: '<c>.liturgy.alleluia',             kind: 'alleluia',    service: 'liturgy', required: false, tag: 'unattested',     label: 'Alleluia' },
  { path: '<c>.liturgy.gospel',               kind: 'reading',     service: 'liturgy', required: false, tag: 'A-attested',     label: 'Gospel — citation + link only (R-4)' },
  { path: '<c>.liturgy.communion_verse',      kind: 'text',        service: 'liturgy', required: false, tag: 'unattested',     label: 'Communion verse (koinonikon)' },
  { path: '<c>.liturgy.megalynarion',         kind: 'text',        service: 'liturgy', required: false, tag: 'unattested',     label: 'Megalynarion / zadostoinik' },
  { path: '<c>.liturgy.closing_rubric',       kind: 'rubric',      service: 'liturgy', required: false, tag: 'unattested',     label: 'Closing rubric' },

  // ── cross-date tables (§6) ────────────────────────────────────────────────
  { path: 'shared',  kind: 'group', service: 'shared',  required: false, tag: 'unattested', label: 'Menaion-wide tables — candidates only until two months confirm (§6.1)' },
  { path: 'general', kind: 'group', service: 'general', required: false, tag: 'A-attested', label: 'St. Sergius General Menaion — 26 full Vigil services, by saint type and by subject (§6.2)' },

  // ── General Menaion cells (§6.2) ──────────────────────────────────────────
  // `<g>` ranges over GENERAL_TYPES. Structure is IDENTICAL across all 26 files
  // — singular and plural differ only in wording and Spec. Mel. forms, not in
  // shape (chunk 2a scan). One template covers the book.
  // NOTE: there is no `AT VESPERS` heading; Vespers is everything printed
  // before `AT MATINS`. The section still keys as `vespers`.
  { path: '<g>.title',    kind: 'text',   section: 'general', required: true,  tag: 'A-attested', label: 'Service title, verbatim heading' },
  { path: '<g>.subject',  kind: 'text',   section: 'general', required: false, tag: 'A-attested', label: 'Subject, where the file is a subject rather than a saint type' },
  { path: '<g>.troparion',kind: 'text',   section: 'general', required: false, tag: 'A-attested', label: 'Troparion' },
  { path: '<g>.kontakion',kind: 'text',   section: 'general', required: false, tag: 'A-attested', label: 'Kontakion' },
  { path: '<g>.vespers',  kind: 'group',  section: 'general', required: false, tag: 'A-attested', label: 'At Vespers (unheaded in the source — everything before AT MATINS)' },
  { path: '<g>.matins',   kind: 'group',  section: 'general', required: false, tag: 'A-attested', label: 'At Matins' },
  { path: '<g>.liturgy',  kind: 'group',  section: 'general', required: false, tag: 'A-attested', label: 'At Liturgy' },
  { path: '<g>.dogmatikon_rubric', kind: 'rubric', section: 'general', required: false, tag: 'A-attested',
    label: 'Cross-book rubric pointing at the Octoechos dogmatikon (18 files) — rubric stored, text NOT fetched (R-5)' },
];

// ── Exclusion register (§6.3) ────────────────────────────────────────────────
// NOT empty. Every exclusion is recorded, with a reason, so the audit trail shows
// the material was seen and deliberately not encoded. Adding a row requires a
// stated reason.
export const EXCLUSIONS = [
  { what: 'Texts named-but-not-printed by a rubric (Trisagion through Our Father; It is truly meet; the Tone IV Anabathmoi antiphon)',
    reason: 'R-5 — another book\'s content. The RUBRIC is stored; the named text is not fetched.' },
  { what: 'The Litiya sticheron of the temple',
    reason: 'Not in the Menaion — future parish configuration (encoding_rule_v2.md §6). The rubric is stored.' },
  { what: 'Paremia / Epistle / Gospel bodies',
    reason: 'R-4 — the scripture tool owns reading text. Citation + resolvable link stored.' },
];
