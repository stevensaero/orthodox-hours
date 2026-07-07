# Octoechos V2 Data Specification

**Status: Phase 0 DRAFT — NOT COMPLETE.** This spec is being proven against every
piece of Tone 2 St. Sergius source material before it can be called done (Bill's
explicit condition, project_notes.md, July 6 2026 planning session). Open gaps
are listed in §9. **Do not begin Phase 1 scaffolding against this document until
Bill confirms the spec complete.**

**Source material proven against so far:**
1. **2-1.pdf** (St. Sergius, Drive; the canonical N-1 file for Tone 2):
   Saturday evening Little Vespers + Great Vespers, **Saturday night
   Compline**, **Sunday Nocturns**, Sunday Matins, Sunday Liturgy — scanned
   in full, July 6 2026 session. An earlier same-session paste of the same
   chapter ("Tone2.pdf") lacked the Compline and Nocturns sections and shows
   at least one OCR-level variance against 2-1.pdf (§8, last row); **2-1.pdf
   is the canonical encode source.**
2. 2026-06-21 OCA docx JSON (one Sunday's booklet) — prior session; OCA
   layering is a later phase and does not drive this spec.

**Still needed (§9):** weekday Vespers (Sun eve–Thu eve), Friday evening,
weekday Compline, weekday Nocturns presence/absence — expected in the
remaining per-tone Drive files (2-2 … 2-7 per the N-2…N-7 naming).

---

## 1. Scope and relationship to V1

Complete replacement for `src/data/octoechos/` (tone1–8.js, index.js,
schema.js). Built in parallel under `src/data/octoechos_v2/`; the old system
stays live and untouched until Phase 5 cutover (all 8 tones complete and
verified, side-by-side render comparison passed). Known V1 errors (§8) are
**not** patched in V1; they are corrected by V2 encoding from source.

Source for V2 encoding: **St. Sergius per-tone chapters only.** OCA
director-pointed backfill is a later phase, after cutover.

## 2. Principles

1. **Nothing tone-keyed is ever statically imported.** Dynamic per-tone
   loading is the only pattern (the `lic_opening` /
   `loadOctoechosTone` / `_octoechosCache` precedent). This is not an
   optimization to revisit; it is Bill's stated architectural principle:
   liturgical data lives apart from the tool, full stop. V1's `index.js`
   static tables (RESURRECTIONAL_TROPARIA, SUNDAY_KONTAKIA, etc.) are the
   anti-pattern V2 exists to eliminate.
2. **Verbatim per-position storage. No dereferencing between services.**
   Evidence (2-1.pdf, same chapter): the first aposticha sticheron reads
   "hath enlightened the whole **inhabited world**; * **and by it** Thou
   hast called back" at Little Vespers but "hath enlightened the whole
   **universe**; * **and** Thou hast called back" at Great Vespers. Texts
   that "look the same" across services are encoded independently, each
   from its own print site. (Exception, §4.1: the tone's canonical
   troparion/kontakion/theotokia fields, where multiple print sites are
   *verified identical* before a single field is used.)
3. **No deduplication across near-duplicates.** Evidence: the Kathisma III
   closing theotokion ("Thou art **highly** blessed ... Hades hath been
   **taken captive** ... therefore **with hymns** we cry") and the Praises
   theotokion ("Thou art **most** blessed ... Hades hath been **captured**
   ... Therefore **in praise** we cry") are distinct texts a careless
   encoder or validator would collapse. Likewise **irmoi repeat across the
   chapter's three canons** (Ode 1 "In the deep of old" and Ode 6 "Whirled
   about in the abyss" appear in all three; Ode 8 "In Babylon" in two) —
   each canon stores its own irmoi as printed, no cross-canon references.
   Validators must never flag near-duplicates or true duplicates across
   positions for merging.
4. **§3 of encoding_rule_v2.md governs pointing** (read live each session).
   St. Sergius `*` / `**` retained verbatim as source provenance;
   normalized only at render via `normalizeSergius`. Tier assignment per
   source: stichera/troparia/kontakion/sessionals/irmoi are Tier 2
   (`*`/`**`); canon troparia (all three canons) and the Ikos are Tier 1
   prose (no markers — a property of the source, not an error).
5. **Every field carries provenance**, including the source's own label
   when it differs from our field name (e.g. St. Sergius labels the
   post-Evlogitaria hymn "The Sessional Hymn"; we store it as `hypakoe`
   with `sourceLabel`), and composer/acrostic metadata where the source
   prints it (Nocturns canon: "the composition of Metrophanes of Smyrna",
   acrostic "I hymn Thee, the threefold light of the Godhead").
6. **Rubric text is data, not hymn text.** Printed rubrics (e.g. "10
   Stichera: 7 Resurrection and 3 of the saint, or 4 and 6 if Polyeleos")
   are stored verbatim in `rubric` fields on the section they govern —
   never as bracketed placeholders inside hymn arrays (V1's
   `aposticha_glory: "[Glory from Menaion if appointed]"` is the
   anti-pattern; the chapter prints a real fallback Theotokion, §4.3).
   Assembly *decisions* still trace to Fekula; the printed rubric is
   source evidence beside it. Invariable Horologion frames printed in the
   chapter (Compline/Nocturns openings, psalm lists) are stored as
   `frame_rubric` verbatim; the frame texts themselves are excluded (§5).
7. **Repeats mirror the source's own device** (pending Bill, §9.4): where
   the source prints a text out in full twice (Little Vespers LIC first
   sticheron), store two positional entries; where the source prints a
   "(Twice)" marker (Nocturns canon, Odes 6–8 first troparion), store
   `repeat: 2` on the item — the Menaion repeatIndex analog. Never convert
   one device into the other.

## 3. File layout

```
src/data/octoechos_v2/
  tone1.js … tone8.js      — one default-export object per tone (§4)
  shared.js                — tone-independent tables (§5), also dynamically loaded
  schema_v2.js             — drift-gate schema (§6)
tools/validate_octoechos_v2.mjs — gate runner (§6)
```

Loader: `loadOctoechosV2Tone(tone)` mirroring the existing
`loadOctoechosTone` / `_octoechosCache` mechanism, plus
`loadOctoechosV2Shared()`. The cache must support holding multiple tones at
once: the God-is-the-Lord rubric ("Glory ..., the Troparion from the
Menaion, otherwise ... the Theotokion, in Tone II, **(or in the Tone of that
from the Menaion)**") requires the assembler to fetch *another* tone's
`dismissal_theotokion` when the Menaion troparion's tone differs.

## 4. Per-tone file structure

```js
export default {
  tone: 2,
  _encoded: [],            // drift-gate section claims (§6)

  // §4.1 Canonical tone-level hymns (single field, multi-site verified)
  troparion: {...},              // Resurrection Troparion
  dismissal_theotokion: {...},   // "All of thy most glorious mysteries..."
  kontakion: {...},
  ikos: {...},                   // Tier 1 prose

  little_vespers: {...},         // §4.2
  great_vespers: {...},          // §4.3
  vespers_weekday: {...},        // §4.4 — GAP, awaiting 2-2…2-7
  compline_saturday: {...},      // §4.5 — NEW (2-1.pdf)
  nocturns: {...},               // §4.6 — NEW (2-1.pdf); Sunday
  matins: {...},                 // §4.7
  liturgy: {...},                // §4.8
}
```

Hymn value shape (every pointed or prose text): `{ text, source, tier,
sourceLabel?, spec_mel?, director?, repeat? }` — `text` in the source's own
marker dialect per §3.3 of encoding_rule_v2.md. Where a field is a bare
string in the examples below, the full shape is still meant.

### 4.1 Canonical tone-level hymns — the multi-site identity rule

The Resurrection Troparion is printed at **four sites** in the chapter
(Little Vespers dismissal, Great Vespers if-no-Vigil, Matins God-is-the-Lord,
Liturgy). The Kontakion at two (after Ode VI; Liturgy). The Dismissal
Theotokion at two (Great Vespers if-no-Vigil; God-is-the-Lord). These are
the same hymn re-printed, not different hymns — so they get ONE canonical
field each, **but only after the encoder verifies every print site is
identical**. Any wording divergence between sites is a finding: log it,
flag for Bill, do not silently pick one.

Tone 2 verification result (2-1.pdf): all four troparion sites agree on
wording and pointing ("radiant brilliance"); punctuation-only variance
exists (Little Vespers wraps the final line in quotation marks, the other
three sites do not). **OPEN DECISION (§9.5):** which site's punctuation is
canonical for the stored text.

### 4.2 `little_vespers`

A whole service V1 has no concept of. From the chapter:

```js
little_vespers: {
  rubric: "On “Lord, I have cried ...,” 4 Stichera: ...",
  lic: [s1, s1, s2, s3],        // FOUR positions AS PRINTED — the first
                                 // Resurrection sticheron is printed out in
                                 // full twice, under two different verses.
                                 // Stored positionally, both copies, verbatim
                                 // (§2.7 device rule; decision §9.4).
  lic_verses: [...4],            // "From the morning watch ..." set — printed
                                 // here; sharing hypothesis §5.
  lic_theotokion: "Contemplating the wonder of the great mystery! ...",
  prokeimenon: { ref: 'shared.saturday_vespers_prokeimenon' },
                                 // chapter says only "The Prokeimenon: 'The
                                 // Lord is King ...,' with its verses" — the
                                 // full text is printed at Great Vespers.
  aposticha: {
    resurrection: [a1],          // 1 sticheron = GV aposticha #1 *as printed
                                 // here* (wording differs from GV — §2.2)
    theotokos: [t1, t2, t3],     // 3 stichera of the Theotokos
    theotokos_verses: [...3],    // "I shall commemorate thy name ...", etc.
  },
  aposticha_theotokion: "Who can worthily praise thee ...",
  // dismissal: troparion (canonical field). The chapter marks a
  // "Glory ..., Both now ..., Theotokion:" after it WITHOUT printing a
  // text. rubric-recorded; resolution is an assembly question (Fekula),
  // not a data gap to invent. — §9.6
}
```

**Finding:** Little Vespers contributes **two more distinct Theotokia**
("Contemplating the wonder" at LIC; "Who can worthily praise thee" at
aposticha) beyond the three identified last session. Counting every fixed
position (Kathisma closers, Beatitudes, Compline sessional, Nocturns
sessional theotokia, per-ode canon Theotokia) the operative principle is:
one field per position, no reuse, ever.

### 4.3 `great_vespers`

```js
great_vespers: {
  rubric: "On “Lord I have cried ...,” 10 Stichera: 7 Resurrection ... or 4 and 6 if ... Polyeleos.",
  lic: [s1 … s7],               // 7 Resurrection stichera; ss.4–7 carry the
                                 // source's "Other Stichera, by Anatolius"
                                 // sub-group label (record as provenance on
                                 // those items — cf. §3.2 sub-group tiering)
  lic_verses: [...7],            // Ps 129/116 ladder as printed
  lic_menaion_verses: [...3],    // the 3 verses printed for the Menaion stichera
  dogmatikon: "The shadow of the law ...",
  dogmatikon_rubric: "Glory from the Menaion, if appointed. Otherwise: ...",
  aposticha: [a1 … a4],
  aposticha_verses: [...3],      // "The Lord is King ..." set (first sticheron unversed)
  aposticha_theotokion: "O new wonder greater than all the wonders of old! ...",
                                 // THE REAL FALLBACK — replaces V1's bracketed
                                 // placeholder. Chapter rubric: "Glory from the
                                 // Menaion, if appointed, otherwise:"
  // then: shared.theotokos_virgin_rejoice + vigil rubric (§5);
  // if no Vigil: canonical troparion + dismissal_theotokion.
}
```

### 4.4 `vespers_weekday` — **GAP**

Sunday evening through Friday evening; expected in Drive files 2-2 … 2-7.
Structure unknown until scanned. Expected per Fekula's Friday rule: Friday
evening takes 6 stichera + the **week's dogmatikon** — whether that is the
same text as `great_vespers.dogmatikon` or a distinct print site must be
answered from source, not assumed (§2.2). Do not scaffold this section's
shape until scanned.

### 4.5 `compline_saturday` — NEW (2-1.pdf)

Saturday-night Compline carries tone-keyed Octoechos content: a full canon
of supplication to the Theotokos plus a mid-canon sessional. The invariable
Compline frame (opening prayers, Pss 50/69/142, Doxology, Creed, "It is
truly meet") is Horologion material — `frame_rubric` verbatim, texts
excluded (§5).

```js
compline_saturday: {
  frame_rubric: "The priest saith: Blessed is our God..., ... and the Symbol of Faith (I believe in one God...).",
  canon: {                       // Shape B canon (§4.7.2)
    title: "Canon of supplication to the most holy Theotokos",
    odes: { 1: {...}, 3: {...}, … 9: {...} },
                                 // each ode: irmos (Tier 2) + 4 items:
                                 // 2 plain, 1 glory, 1 both_now (Tier 1)
  },
  after_ode6: {
    rubric: "Lord, have mercy, (Thrice). Glory ..., Both now ...,",
    sessional: "We earnestly cry out to thee, O Lady Theotokos ...",
  },
  closing_rubric: "Then, “It is truly meet ...,” and the rest as usual. Dismissal.",
}
```

**Weekday Compline remains a GAP** — the Octoechos traditionally appoints
different Theotokos canons per night; verify from 2-2 … 2-7, do not assume
the Saturday shape.

### 4.6 `nocturns` — NEW (2-1.pdf); Sunday

An entire service category absent from V1 and from the planning-session
gap list. Sunday Nocturns carries a tone-keyed canon to the Holy Trinity
with composer + acrostic metadata, TWO mid-canon sessional pairs (both with
a Spec. Mel. label), and closes with the hymn of Gregory the Sinaite
(invariable — "chanted every Sunday after the canon" — lives in shared.js,
§5).

```js
nocturns: {
  frame_rubric: "The priest saith: “Blessed is our God ...,” ... Psalm 50 (Have mercy on me, O God ...,)",
  canon: {                       // Shape B canon (§4.7.2)
    title: "Canon to the Holy & Life-creating Trinity",
    composer: "Metrophanes of Smyrna",
    acrostic: "I hymn Thee, the threefold light of the Godhead",
    odes: { 1: {...}, 3: {...}, … 9: {...} },
                                 // Odes 1,3,4,5,9: 2 plain + glory + both_now.
                                 // Odes 6,7,8: 1 plain marked "(Twice)"
                                 // (repeat: 2, §2.7) + glory + both_now.
                                 // Item counts are per-ode source facts.
  },
  after_ode3: {
    sessional: { text: "When Thou didst form Adam in the beginning ...",
                 spec_mel: "Of the loving-kindness ..." },
    theotokion: "When God was well pleased to come unto us ...",
  },
  after_ode6: {
    sessional: { text: "O merciful One, beginningless Trinity and Unity ...",
                 spec_mel: "Of the loving-kindness ..." },
    theotokion: "Thou art merciful, O good Theotokos ...",
  },
  // after the canon: shared.gregory_sinaite_hymn (§5)
  closing_rubric: "The rest of Nocturns, and the Dismissal.",
}
```

**Weekday Nocturns**: presence or absence of Octoechos content on weekdays
is a GAP — answer from 2-2 … 2-7.

### 4.7 `matins`

```js
matins: {
  god_is_lord_rubric: "... (or in the Tone of that from the Menaion)",
                                 // uses canonical troparion (Twice) +
                                 // dismissal_theotokion; cross-tone lookup §3.
  sessionals: [                  // exactly 2 sets (Kathisma II, Kathisma III)
    { hymns: [h1, h2],           // 2 hymns; a psalm verse between them
      verse: "Arise, O Lord my God, let Thy hands be lifted on high ...",
      closer: { type: 'stavrotheotokion', text: "Thou art highly glorified ..." } },
    { hymns: [h1, h2],
      verse: "I will confess Thee, O Lord, with my whole heart ...",
      closer: { type: 'theotokion', text: "Thou art highly blessed ..." } },
  ],                             // NOTE: in Tone 2 only Kathisma II's closer is
                                 // a Stavrotheotokion; the type field records
                                 // what the source labels it. Do not assume the
                                 // same distribution in other tones.
  hypakoe: { text: "The women coming to Thy grave ...",
             sourceLabel: "The Sessional Hymn" },   // St. Sergius's label; sung
                                 // after the Evlogitaria + small litany.
  anabathmoi: [                  // Songs of Ascent — absent from V1 and from
                                 // the planning-session gap list.
    { troparia: [t1, t2], gloria: "To the Holy Spirit belongeth sovereignty ..." },
    { troparia: [t1, t2], gloria: "To the Holy Spirit belongeth the source of life ..." },
    { troparia: [t1, t2], gloria: "By the Holy Spirit all wisdom doth flow forth ..." },
  ],                             // 3 antiphons in Tone 2; count is per-tone
                                 // (verify each tone from its own chapter —
                                 // do NOT hard-require 3 in the gate; §9.7)
  prokeimenon: { text: "Arouse Thyself, O Lord my God, in the commandment ...",
                 verse: "O Lord my God, in Thee have I put my hope ..." },
                                 // MATINS prokeimenon — a distinct field from
                                 // liturgy.prokeimenon. V1's single
                                 // SUNDAY_PROKEIMENON conflated these (§8).
  canon: {...},                  // Shape A (§4.7.1)
  // kontakion + ikos: canonical fields, sung after Ode VI (position is
  // assembly knowledge; the data lives at tone level).
  exapostilarion_rubric: "... taken from the prescribed Eothinon according to the Resurrection Gospel ...",
                                 // Eothinon-keyed (by Gospel number, 1–11),
                                 // NOT tone-keyed — no per-tone field; rubric only.
  praises: {
    rubric: "8 Stichera of the Resurrection, however, if ... ‘feasted’ ... first 4 ... last 4 from the Menaion ...",
    stichera: [p1 … p8],         // pp.5–8 carry "Other Stichera of Anatolius"
    verses: [...8],
    gloria_rubric: "Glory ..., The Eothinon of the Resurrection Gospel ...",
    theotokion: "Thou art most blessed, O Virgin Theotokos ...",
  },
  doxology_troparion: "Having risen from the tomb, and having burst the bonds of Hades ...",
                                 // per-tone field, exactly as the chapter
                                 // prints it. (Which tones print which of the
                                 // two Doxology troparia is a per-chapter
                                 // fact to be read, not a rule to be assumed;
                                 // assembler-side rule verification vs Fekula
                                 // is out of data-layer scope.)
}
```

#### 4.7.1 Canon Shape A — multi-canon block (Sunday Matins Resurrection canon)

Nine-ode canon, Ode II absent as usual: keys `1,3,4,5,6,7,8,9`. Each ode:

```js
{ irmos: {...},                  // Tier 2 (pointed with * / **)
  resurrection: {
    refrain: "Glory to Thy holy Resurrection O Lord.",
    troparia: [...],             // Tier 1 prose; count varies per ode
    closer: { type: 'theotokion' | 'trinitarion', text: ..., refrain?: ... } },
                                 // Odes 1–8: Theotokion (refrain "Most holy
                                 // Theotokos save us"). Ode 9: TRINITARION with
                                 // its own refrain "We bless the Father, Son
                                 // and Holy Spirit, the Lord." — structural
                                 // irregularity the gate must allow (require
                                 // trinitarion at 9, theotokion elsewhere,
                                 // per-tone verified).
  cross_resurrection: {
    refrain: "Glory to Thy precious Cross and Resurrection O Lord.",
    troparia: [...] },           // 2 troparia in most odes; 3 in Ode 7 —
                                 // counts are per-ode source facts.
  theotokos: {
    refrain: "Most holy Theotokos save us.",
    troparia: [...] },           // 2 or 3 per ode as printed.
}
```

#### 4.7.2 Canon Shape B — single labeled canon (Compline, Nocturns)

Same ode keys. **No printed refrains** — the ode is a flat item list with
labels, matching the source's inline "Glory ...," / "Both now ...,"
prefixes:

```js
{ irmos: {...},                  // Tier 2
  items: [
    { label: 'plain', text: ..., repeat?: 2 },   // repeat only where the
    { label: 'plain', text: ... },               // source prints "(Twice)"
    { label: 'glory', text: ... },
    { label: 'both_now', text: ... },
  ] }
```

Canon-level metadata (either shape): `title` (verbatim source heading),
`composer?`, `acrostic?`. Mid-canon sessional insertions belong to the
**service** section (`after_ode3` / `after_ode6`), not the canon object —
they are positioned by ode but are not canon content. Katavasiae are
**not** Octoechos content ("then the appointed Katavasia") — excluded, as
is the Magnificat machinery (§5 exclusions). The Ode VIII "We praise, we
bless, we worship the Lord ..." verse is invariable → shared.

### 4.8 `liturgy`

```js
liturgy: {
  beatitudes: {
    troparia: [b1 … b6],
    gloria: "Let us all now glorify the Father ...",      // Triadicon
    theotokion: "Rejoice throne formed of fire ...",
  },
  // troparion + kontakion: canonical fields.
  prokeimenon: { text: "The Lord is my strength and my song ...",
                 verse: "With chastisement hath The Lord chastened me ..." },
  alleluia: { verses: ["The Lord hear thee in the day of affliction ...",
                        "O Lord, save the king and hearken unto us ..."] },
}
```

## 5. `shared.js` — tone-independent tables

Everything below is printed in the Tone 2 chapter but is invariable across
tones (**hypothesis — every item must be re-verified against each tone's
chapter as it is encoded; any divergence found is a finding, and the item
moves into the per-tone files**):

- `lic_verse_ladder` — the Ps 129/116 "Lord I have cried" verse sequence
  (GV prints 7 + 3 Menaion positions; LV uses the tail-4 subset).
- `saturday_gv_aposticha_verses` — "The Lord is King ..." 3-verse set.
- `lv_theotokos_aposticha_verses` — "I shall commemorate thy name ..." set.
- `saturday_vespers_prokeimenon` — Tone VI "The Lord is King" + 3 verses
  (printed in full at GV; referenced at LV).
- `theotokos_virgin_rejoice` — Tone IV, with the vigil rubric note
  (Thrice / feast troparion / Twice+Once coincidence rule) stored as
  `rubric`.
- `evlogitaria` — full text printed in the chapter (V1 keeps these in
  index.js; compare at encode time and log any divergence).
- `praises_verse_ladder` — the 8-verse Praises sequence.
- `polyeleos` — select verses + the pre-Lent Ps 136 note + the
  Megalynarion parish-practice rubric (verbatim rubric storage).
- `ode8_hymn_verse` — "We praise, we bless, we worship the Lord ...".
- `gregory_sinaite_hymn` — "It is truly meet to glorify Thee, the Word of
  God ..." (7 stanzas, Tier 1); source note "(which is chanted every
  Sunday after the canon)" at Nocturns. NEW (2-1.pdf).

**Excluded from V2 entirely** (Horologion/other-book material printed in
the chapter for convenience — record the exclusion so the audit trail shows
it was seen and deliberately not encoded here): "Having beheld the
Resurrection", Psalm 50 troparia ("Through the prayers ...", Tone VI, +
"Jesus having risen"), the Magnificat verses + "More honorable" refrain,
Katavasiae, Exapostilaria/Eothina (Gospel-keyed 11-set — its own future
table, not per-tone), the Compline frame (opening prayers, Pss 50/69/142,
Doxology, Creed, "It is truly meet"), the Nocturns frame.

`shared.js` is dynamically loaded like the tone files — nothing from V2 is
ever statically imported into `hours-tool.jsx` (§2.1).

## 6. Drift gate — `schema_v2.js` + `validate_octoechos_v2.mjs`

Designed alongside the fields, not bolted on (planning-session condition).

- `_encoded` section claims, V1-style, gating REQUIRED shapes per section:
  `little_vespers`, `great_vespers`, `vespers_weekday`, `compline_saturday`,
  `nocturns`, `matins`, `canon`, `liturgy`, plus tone-level `core`
  (troparion / dismissal_theotokion / kontakion / ikos).
- **Structural checks** (only for claimed sections): LV lic length 4 with
  parallel verses; GV lic 7 + 7 verses + 3 Menaion verses; aposticha 4 + 3
  verses; sessionals exactly 2 sets of `{hymns[2], verse, closer{type,text}}`;
  anabathmoi ≥ 3 antiphons of `{troparia[2], gloria}` (count per-tone, not
  hard-coded 3); Shape A canon keys exactly `1,3,4,5,6,7,8,9`, three
  sub-canons per ode, `closer.type === 'trinitarion'` required at Ode 9 /
  `'theotokion'` elsewhere, troparia arrays non-empty; Shape B canon same
  ode keys, items non-empty with labels from `plain|glory|both_now`,
  exactly one `glory` and one `both_now` per ode, `repeat` only valued 2
  and only on `plain` items; Compline/Nocturns `after_odeN` insertions
  present as speced; praises 8 + 8 verses + theotokion; beatitudes 6 +
  gloria + theotokion; matins and liturgy prokeimena both present and
  **not equal to each other** (the V1 conflation trap, §8).
- **Pointing checks:** Tier-2 St. Sergius fields contain `*` and exactly one
  `**`, never `|`/`//` (dialect purity — the stored dialect IS the
  provenance record, §3.3); Tier-1 fields (canon troparia in all three
  canons, ikos, Gregory-the-Sinaite stanzas) contain no markers at all; no
  `[` brackets in any St. Sergius-dialect field.
- **Placeholder detection:** no bracketed placeholder strings in any hymn
  text field; rubric prose only in `rubric` / `*_rubric` / `frame_rubric`
  fields.
- **Anti-dedup guard:** the validator must NOT contain any near-duplicate
  detection that suggests merging (§2.3). A plain-equality check between
  the Kathisma III closer and the Praises theotokion (they must differ) is
  the correct assertion for Tone 2; equality of Ode-1 irmoi across the
  three canons (they must match, each stored separately) is likewise a
  legitimate per-tone assertion — encoded facts, not dedup triggers.
- Provenance required: every claimed section carries `source` (file) and
  `sourceLabel` where our name differs from the source's; canon
  `composer`/`acrostic` where printed.

Gate joins the standing sequence: `test_pointing_paths.mjs`,
`test_sunday_vespers.mjs`, `validate_octoechos.mjs` (V1, still live),
`validate_octoechos_v2.mjs`, `vite build`.

## 7. Truthing tool (Phase 2 requirement, recorded here)

Purpose-built V2 browser before any real encoding. Requirements from the
planning-session audit-gap finding: every field visible **under its service
context** (no "Index Tables" burial — a tone's troparion/kontakion appear
where they are sung: LV dismissal, GV, God-is-the-Lord, Liturgy; Compline
and Nocturns appear as services in their own right), every field greppable,
dialect badge per §3.4, and a V1↔V2 side-by-side view for the cutover
comparison.

## 8. Tone 2 discrepancy register (V1 vs 2-1.pdf)

| V1 field | V1 reads | Chapter reads | Class |
|---|---|---|---|
| `RESURRECTIONAL_TROPARIA[2]` | "slay Hades with the **lightning** of Thy Divinity" | "**radiant brilliance**" (all 4 print sites) | wording variant (OCA docx has "splendor" — 3 sources, 3 wordings; V2 encodes St. Sergius) |
| `SUNDAY_KONTAKIA[2]` | "Hades was **terrified**" | "Hades was **struck with fear**" (both sites) | wording variant |
| `RESURRECTIONAL_DISMISSAL_THEOTOKIA[2]` | — | word-for-word match | confirmed correct |
| `SUNDAY_PROKEIMENON[2]` | "Arise, O Lord my God, let Thy hand be lifted high; forget not Thy poor forever" | Matins: "Arouse Thyself ..." (Ps 7); Liturgy: "The Lord is my strength and my song" | **genuine error** — matches neither moment. Observation: the V1 text is (in another translation) the Kathisma-II sessional verse / Praises verse 7 ("Arise, O Lord my God, let Thy hands be lifted on high; forget not Thy paupers to the end") — likely sourced from a psalm-verse table, not a prokeimenon. |
| `SUNDAY_ALLELUIA[2]` | "O Lord, in Thy strength the king shall be glad ..." (Ps 20) | "The Lord hear thee in the day of affliction ... / O Lord, save the king ..." (Ps 19) | **genuine error** — adjacent psalm, matches neither moment |
| `SUNDAY_APOSTICHA_THEOTOKIA[2]` | "Rejoice, O Theotokos Mary, thou indestructible and surpassingly holy temple ..." | GV aposticha theotokion: "O new wonder greater than all the wonders of old!" | **mismatch, now source-confirmed** — direct evidence for the suspected Theotokia.pdf mis-sourcing (open item). Whether the V1 text is valid in some *other* slot is a separate rubrical question for Bill; it is not the Saturday GV aposticha Both-now. |
| `HYPAKOE[2]` | "The women coming to Thy grave ..." | identical | confirmed correct (source labels it "The Sessional Hymn") |
| `tone2.js` `vespers.sat` lic + aposticha + dogmatikon | — | word-for-word match (spot-checked incl. sticheron 6 "terrified", the restored Anatolius 7th) | confirmed correct |
| `tone2.js` `aposticha_glory` | `[Glory from Menaion if appointed]` placeholder | real fallback exists (see SUNDAY_APOSTICHA_THEOTOKIA row) | placeholder → real text in V2 |
| — (source-vs-source) | earlier "Tone2.pdf" paste: "He hath arisen as **All-powerful**" (GV lic #4) | 2-1.pdf: "**all-powerful**" | OCR-level variance between two provisions of the same chapter; **2-1.pdf canonical**. Full byte-diff between a paste and a PDF extraction is impractical — encode from 2-1.pdf only. |

## 9. OPEN — gaps and decisions blocking spec completion

1. **Weekday Vespers** (Sun eve opening Mon, through Thu eve opening Fri):
   structure entirely unscanned; expected in 2-2 … 2-7. §4.4 is a stub.
2. **Friday evening**: 6 stichera + week dogmatikon per Fekula's Friday
   rule — same-text-or-distinct-print-site question (§4.4).
3. **Compline**: Saturday night RESOLVED (§4.5, 2-1.pdf). **Weekday
   Compline still open** — per-night Theotokos canons expected; verify
   from 2-2 … 2-7. **Weekday Nocturns** presence/absence likewise open.
4. **Repeat devices** (§2.7): proposal on the table — mirror the source's
   own device (full double print → two positional entries; "(Twice)" →
   `repeat: 2`). Both devices now attested in 2-1.pdf (LV lic; Nocturns
   Odes 6–8). Bill's confirmation needed.
5. **Canonical-field punctuation** (§4.1): four troparion print sites agree
   on wording/pointing but differ in quotation marks. Which site is
   canonical for the stored string. Bill's call.
6. **LV dismissal Theotokion** (§4.2): chapter marks the slot without
   printing a text. Resolve from Fekula/source at assembly-spec time; V2
   stores the rubric verbatim and no invented text.
7. **Anabathmoi antiphon count** (§4.7): per-tone fact; gate must not
   hard-code 3. Verify per tone as each chapter is scanned.
8. **Shared-table scope boundary** (§5): confirm the proposed
   shared-vs-excluded split, especially Evlogitaria (currently V1
   index.js), the Polyeleos block, and `gregory_sinaite_hymn` (invariable
   per its own source note, but printed inside a tone chapter).
9. **Kathisma sessional verses**: possibly invariable across tones (the
   Tone 2 pair reappears as Praises verses 7–8); treat as per-tone until
   two more tones confirm or deny.
