# Octoechos V2 Data Specification

**Status: Phase 0 DRAFT — NOT COMPLETE.** This spec is being proven against every
piece of Tone 2 St. Sergius source material before it can be called done (Bill's
explicit condition, project_notes.md, July 6 2026 planning session). Open gaps
are listed in §9. **Do not begin Phase 1 scaffolding against this document until
Bill confirms the spec complete.**

**Source material proven against so far:**
1. **2-1.pdf** (St. Sergius, Drive; canonical N-1 file for Tone 2): Saturday
   evening Little Vespers + Great Vespers, Saturday-night Compline, Sunday
   Nocturns, Sunday Matins, Sunday Liturgy — scanned in full, July 6 2026.
   An earlier same-session paste of the same chapter ("Tone2.pdf") lacked
   the Compline and Nocturns sections and shows at least one OCR-level
   variance against 2-1.pdf (§8); **2-1.pdf is canonical.**
2. **2-2.pdf** (St. Sergius, Drive): Sunday evening Vespers, Sunday-night
   Compline, Monday Matins, Monday Liturgy — scanned in full, July 6 2026.
   Establishes the weekday-day structure (§4.4–§4.6, §4.8–§4.9). **Text
   layer is contaminated with Cyrillic homoglyphs** (U+041E "О" for Latin
   "O") — §2.8, §9.10.
3. **2-3.pdf** (St. Sergius, Drive): Monday evening Vespers, Monday-night
   Compline, Tuesday Matins, Tuesday Liturgy — scanned in full, July 6
   2026. Confirms the 2-2 weekday template (no shape changes needed);
   same Cyrillic-homoglyph contamination as 2-2. Identifies V1
   `LIC_THEOTOKIA` as another weekday→Resurrection mis-slot (§8).
4. **2-4.pdf** (St. Sergius, Drive): Tuesday evening Vespers, Tuesday-night
   Compline, Wednesday Matins, Wednesday Liturgy — scanned in full, July 6
   2026. Template holds for a third day. Discovers the **incipit-abbreviated
   irmos device** in the weekday double-canon (§2.7, §9.4) and proves a
   V1 LIC→aposticha mis-slot at `tone2.js vespers.tue` (§8). Same Cyrillic
   О (U+041E) contamination as 2-2/2-3 (×143; only non-Latin codepoint).
5. 2026-06-21 OCA docx JSON (one Sunday's booklet) — prior session; OCA
   layering is a later phase and does not drive this spec.

**Still needed (§9):** Wednesday evening through Friday evening (files
2-5 … 2-7 expected), i.e. Thu–Sat Matins/Liturgy days, remaining Compline
nights, the Friday-evening dogmatikon question, weekday exapostilarion
texts, weekday Nocturns presence/absence.

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
3. **No deduplication across near-duplicates or true duplicates.**
   Evidence so far, all within Tone 2:
   - Kathisma III closer "Thou art **highly** blessed ... **taken
     captive** ... **with hymns** we cry" vs Praises theotokion "Thou art
     **most** blessed ... **captured** ... **in praise** we cry" (2-1).
   - Sunday-night Compline sessional "As the **wellspring** of
     loving-kindness ..." vs Monday Kathisma-1 theotokion "As the
     **well-spring** of loving-kindness ..." — same hymn at two positions
     with a hyphenation variance (2-2). Each stored at its own position,
     variance and all.
   - Irmoi repeat across the chapter's canons (Ode 1 "In the deep of old"
     in five canons now; Nocturns Odes 3/4/5/8/9 irmoi reappear in the
     Sunday-night Compline canon) — each canon stores its own irmoi as
     printed, no cross-canon references.
   - The recurring weekday aposticha compunction stichera vary between
     days: Sunday evening "Have mercy **on** me, О God!" vs Monday evening
     "Have mercy **upon** me, О God!" (2-3). Same-hymn-different-day is a
     distinct print site; store per day.
   - The Spec. Mel. label itself varies: Monday Matins set 3 "As **a**
     wellspring of loving-kindness ..." vs Tuesday "As **the** wellspring
     ..." (2-3) — labels stored verbatim per site.
   - Ode 9 irmos, Sunday Matins Resurrection canon: "The **Son of the
     beginningless Father**, God and Lord ..." vs Ode 9 irmos, Tuesday
     Forerunner canon: "The **beginningless Son of God the Father** and
     the Lord ..." (2-3) — two renderings of the same irmos at two
     positions; the strongest dedup trap found so far.
   - **The "We magnify thee, O Theotokos" family (2-4):** three hymns, one
     opening. (a) Tuesday Matins set-1 closer "... * Thou art the un-burnt
     bush ..." (2-3) recurs, pointing included, as the Tuesday-NIGHT
     Compline after-Ode-VI sessional (2-4) — same hymn, two positions.
     (b) Wednesday Matins set-1 closer opens identically but continues
     "... Rejoice, thou cloud of the unwaning Light ..." — a different
     hymn. (c) Monday set-2 closer "... O cloud of the never-setting
     Sun ..." (2-2) — similar imagery, third distinct text. The strongest
     same-opening trap found so far.
   - Cross-service irmos recurrence (2-4): the Wednesday Matins Theotokos
     canon shares its Odes I/III/V/VI irmoi ("Come, O ye people"; "O Lord,
     who didst slay sin upon the Tree"; "O Lord, Bestower of light";
     "Whirled about in the abyss of sin") with the Tuesday-night Compline
     canon; Tuesday-night Compline Ode VIII repeats Monday night's "God
     Who descended into the fiery furnace" (second attestation). Each
     stored at its own position.
   - **Pointing-placement variance across print sites, both St. Sergius
     (2-4 vs 07-24):** the stavrotheotokion "Having endured many pangs" is
     printed at the Tuesday-evening Vespers aposticha (2-4) AND at July 24's
     LIC (`july.js` `lic_stavrotheotokion`, encoded from the Menaion PDF) —
     same hymn, same dialect, *different `*` line breaks* (Menaion breaks
     after "pangs" but not after "Virgin,"; the Octoechos print the
     reverse). Per-position storage keeps each site's own pointing.
   - Incipit micro-variance inside the reference device itself (2-4): the
     Wednesday Theotokos canon's Ode IX incipit reads "The Son of the
     **B**eginningless Father ...," where canon 1's full print has
     lowercase "beginningless" — verbatim storage preserves it.
   Validators must never flag duplicates across positions for merging.
4. **§3 of encoding_rule_v2.md governs pointing** (read live each session).
   St. Sergius `*` / `**` retained verbatim as source provenance;
   normalized only at render via `normalizeSergius`. Tier assignment per
   source: stichera/troparia/kontakion/sessionals/irmoi are Tier 2
   (`*`/`**`); canon troparia (all canons seen so far) and the Ikos are
   Tier 1 prose (no markers — a property of the source, not an error).
   Long weekday aposticha psalm verses are themselves Tier 2 (pointed).
5. **Every field carries provenance**, including the source's own label
   when it differs from our field name (e.g. St. Sergius labels the
   post-Evlogitaria hymn "The Sessional Hymn"; we store it as `hypakoe`
   with `sourceLabel`), Spec. Mel. labels where printed, and
   composer/acrostic metadata where the source prints it (Nocturns:
   Metrophanes of Smyrna; Monday repentance canon: Joseph; Monday angels
   canon: Theophanes — each with a printed acrostic).
6. **Rubric text is data, not hymn text.** Printed rubrics are stored
   verbatim in `rubric` fields on the section they govern — never as
   bracketed placeholders inside hymn arrays (V1's `aposticha_glory:
   "[Glory from Menaion if appointed]"` is the anti-pattern). Assembly
   *decisions* still trace to Fekula; the printed rubric is source
   evidence beside it. Invariable Horologion frames printed in the chapter
   are `frame_rubric` verbatim; the frame texts themselves are excluded
   (§5).
7. **Repeats mirror the source's own device** (pending Bill, §9.4): full
   double print (LV LIC first sticheron) → two positional entries;
   "(Twice)" marker (Nocturns Odes 6–8; Monday angels canon Odes 3/5/6/7/9)
   → `repeat: 2` on the item. Never convert one device into the other.
   **Third device (NEW, 2-4): incipit-abbreviated irmos.** In the Wednesday
   double-canon, the second canon prints its irmos in FULL where it differs
   from canon 1's for that ode (Odes I, III, V, VI) but as an
   incipit-plus-ellipsis reference where it is the same (Odes IV, VII,
   VIII, IX: "Irmos: From a Virgin didst Thou come forth ...," etc.).
   Proposed storage (pending Bill, §9.4): store the incipit string verbatim
   with an explicit reference marker (`irmos_ref: 'canon1'`); the gate
   verifies the incipit prefix-matches canon 1's irmos for that ode. Never
   silently resolve the incipit into full text.
8. **Homoglyph hygiene (NEW, 2-2.pdf).** The 2-2 text layer substitutes
   Cyrillic О (U+041E) for Latin O throughout ("О Lord", "О God"); 2-1
   does not. Proposed rule (§9.10, Bill's confirmation needed): normalize
   known homoglyphs to Latin at encode time, logging each normalization in
   the session's analysis file; the V2 validator hard-fails on ANY
   non-Latin letter codepoint in a text field so contamination can never
   land silently. This is an OCR artifact, not source content — verbatim
   storage does not extend to the extractor's character-set errors.

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
once: the God-is-the-Lord rubric ("... the Theotokion, in Tone II, **(or in
the Tone of that from the Menaion)**") requires the assembler to fetch
*another* tone's `dismissal_theotokion` when the Menaion troparion's tone
differs.

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
  vespers_weekday: {             // §4.4 — keyed by the EVENING (day it opens)
    sun: {...},                  //   Sunday evening (opens Monday) — 2-2.pdf
    mon: …, tue: …, wed: …, thu: …, fri: …,   // GAP: 2-3 … 2-7
  },
  compline: {                    // §4.5 — keyed by NIGHT; per-night canons differ
    sat: {...},                  //   2-1.pdf
    sun: {...},                  //   2-2.pdf
    mon: …, … fri: …,            // GAP
  },
  nocturns: {...},               // §4.6 — Sunday only so far (2-1.pdf)
  matins: {...},                 // §4.7 — Sunday (2-1.pdf)
  matins_weekday: {              // §4.8 — keyed by MORNING day
    mon: {...},                  //   2-2.pdf
    tue: …, … sat: …,            // GAP
  },
  liturgy: {...},                // §4.9 — Sunday (2-1.pdf)
  liturgy_weekday: {             // §4.10 — keyed by day
    mon: {...},                  //   2-2.pdf
    tue: …, … sat: …,            // GAP
  },
}
```

Hymn value shape (every pointed or prose text): `{ text, source, tier,
sourceLabel?, spec_mel?, director?, repeat? }` — `text` in the source's own
marker dialect per §3.3 of encoding_rule_v2.md. Where a field is a bare
string in the examples below, the full shape is still meant.

### 4.1 Canonical tone-level hymns — the multi-site identity rule

The Resurrection Troparion is printed at **four sites** in 2-1 (Little
Vespers dismissal, Great Vespers if-no-Vigil, Matins God-is-the-Lord,
Liturgy). The Kontakion at two. The Dismissal Theotokion at two. Same hymn
re-printed → ONE canonical field each, **but only after the encoder
verifies every print site is identical**. Any wording divergence between
sites is a finding: log it, flag for Bill, do not silently pick one.

Tone 2 verification result (2-1.pdf): all four troparion sites agree on
wording and pointing ("radiant brilliance"); punctuation-only variance
exists (Little Vespers wraps the final line in quotation marks, the other
three sites do not). **OPEN DECISION (§9.5):** which site's punctuation is
canonical for the stored text.

### 4.2 `little_vespers`

A whole service V1 has no concept of. From 2-1:

```js
little_vespers: {
  rubric: "On “Lord, I have cried ...,” 4 Stichera: ...",
  lic: [s1, s1, s2, s3],        // FOUR positions AS PRINTED — the first
                                 // Resurrection sticheron is printed out in
                                 // full twice, under two different verses.
                                 // Stored positionally, both copies, verbatim
                                 // (§2.7 device rule; decision §9.4).
  lic_verses: [...4],            // "From the morning watch ..." set — printed
                                 // here; ladder hypothesis §5.
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

**Finding (2-1):** Little Vespers contributes two more distinct Theotokia
("Contemplating the wonder" at LIC; "Who can worthily praise thee" at
aposticha) beyond the three identified last session. Counting every fixed
position across both files the operative principle is: **one field per
position, no reuse, ever.**

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
                                 // THE REAL Saturday fallback — replaces V1's
                                 // bracketed placeholder. Chapter rubric:
                                 // "Glory from the Menaion, if appointed, otherwise:"
  // then: shared.theotokos_virgin_rejoice + vigil rubric (§5);
  // if no Vigil: canonical troparion + dismissal_theotokion.
}
```

### 4.4 `vespers_weekday` — day-keyed; structure established by 2-2 (Sunday evening)

```js
vespers_weekday: {
  sun: {                         // Sunday evening, opening Monday
    lic: {
      octoechos: [s1, s2, s3],   // 3 stichera "of repentance",
                                 // Spec. Mel. "When from the Tree ..."
      octoechos_verses: [...3],  // "If Thou shouldest mark ..." — the
                                 // 6-stichera entry point of the LIC ladder,
                                 // consistent with the shared-ladder hypothesis
      menaion_rubric: "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the incorporeal hosts, in the same melody:",
      menaion_fallback: [f1, f2, f3],
                                 // *** the Octoechos prints its OWN
                                 // Menaion-absence fallback set (Monday =
                                 // incorporeal hosts), inheriting the Spec.
                                 // Mel. ("in the same melody"). A whole
                                 // fallback tier V1 has no concept of, and a
                                 // direct hook for the Fekula Alleluia-day
                                 // fallback chain at assembly time. ***
      menaion_verses: [...3],    // "For with the Lord ..." tail of the ladder
    },
    lic_theotokion: "With thrice-holy voices ...",
    prokeimenon: { tone: 8, text: "Behold now, bless ye the Lord ...",
                   verse: "Ye that stand in the house of the Lord ..." },
                                 // DAILY prokeimenon — day-of-week cycle;
                                 // shared-by-day hypothesis §5, verify per tone
    aposticha: {
      items: [
        { label: 'plain', text: "Like the prodigal son I have sinned ..." },
        { label: 'plain', text: "With the cry of the publican ..." },
        { label: 'martyrs', text: "Having hated the pleasures of the earth ..." },
      ],                         // 'To the martyrs:' is a source label →
                                 // label vocabulary §4.11
      verses: [...2],            // two LONG pointed psalm verses, printed in
                                 // full ("Unto Thee have I lifted up mine
                                 // eyes ..."; "Have mercy on us, O Lord ...");
                                 // first sticheron unversed
    },
    aposticha_theotokion: "Rejoice, O Theotokos Mary, thou indestructible and surpassingly holy temple ...",
                                 // ← the text V1 mis-slots as
                                 // SUNDAY_APOSTICHA_THEOTOKIA[2] — §8
    closing_rubric: "Then, “Now lettest Thou Thy servant depart ...,” ... and Dismissal.",
  },
  mon: { ... },                  // Monday evening (2-3): SAME shape as sun —
                                 // the 2-2 template holds unchanged. Facts:
                                 // fallback set is "of the holy forerunner"
                                 // (Tuesday's theme); daily prokeimenon Tone
                                 // IV "The Lord will hearken unto me";
                                 // aposticha theotokion "All of my hope do I
                                 // place on thee ..." (short, pointed).
  tue: { ... },                  // Tuesday evening (2-4): SAME shape — third
                                 // day the template holds. Facts: LIC = 3
                                 // stichera of the precious Cross, Spec. Mel.
                                 // "When from the Tree ..." (Tier 2); fallback
                                 // set "of the most holy Theotokos" (Cross-day
                                 // theme: the Virgin at the Cross), "in the
                                 // same melody"; daily prokeimenon Tone I "Thy
                                 // mercy, O Lord, shall pursue me"; aposticha
                                 // ITEMS are Tier 1 prose while their psalm
                                 // verses and both closers are Tier 2 — mixed
                                 // tiers inside one section (§3.2 per-item
                                 // rule); BOTH closers are labeled
                                 // **Stavrotheotokion** (LIC: "The light of
                                 // the sun and moon dimmed ..."; aposticha:
                                 // "Having endured many pangs ...", Spec. Mel.
                                 // "When from the Tree ...").
  // wed … fri: GAP (2-5 … 2-7). Friday evening expected: 6 stichera + the
  // week's dogmatikon per Fekula's Friday rule — same-text-or-distinct-
  // print-site question answered from source only (§2.2).
}
```

**Closer typing (NEW, 2-4).** On Cross days the weekday closers are printed
as Stavrotheotokia, not Theotokia. The weekday `lic_theotokion` /
`aposticha_theotokion` fields therefore adopt the sessional-closer
convention — `{type: 'theotokion' | 'stavrotheotokion', text, spec_mel?,
...}` — recording exactly what the source labels the hymn rather than
flattening the label into a field name. The same applies to the weekday
Matins aposticha closer (§4.8).

**Per-evening LIC Theotokia.** Each evening has its OWN Glory/Both-now LIC
Theotokion (Sunday "With thrice-holy voices ..."; Monday "Tribulation,
cruel assaults ..."): six per tone across the weekday evenings. V1 holds a
single `LIC_THEOTOKIA[tone]` — see §8 for the mis-slot this produced.

**Day-themed fallback sets.** The Menaion-absence fallback stichera follow
the daily commemoration cycle (Sunday evening → incorporeal hosts; Monday
evening → the Forerunner). Record the theme as printed in the rubric; the
cycle itself is Fekula's domain at assembly time.

### 4.5 `compline` — night-keyed; per-night canons CONFIRMED different (2-2)

Saturday's and Sunday's canons are different compositions (different
troparia throughout; several different irmoi; different mid-canon
sessionals). Structure per night:

```js
compline: {
  sat: {
    frame_rubric: "The priest saith: Blessed is our God..., ... Symbol of Faith ...",
                                 // frame printed ONCE, at Saturday; the frame
                                 // itself is Horologion → excluded (§5)
    canon: { title: "Canon of supplication to the most holy Theotokos",
             odes: {...} },      // Shape B (§4.11): 2 plain + glory + both_now
    after_ode6: { rubric: "Lord, have mercy, (Thrice). Glory ..., Both now ...,",
                  sessional: "We earnestly cry out to thee, O Lady Theotokos ..." },
    closing_rubric: "Then, “It is truly meet ...,” and the rest as usual. Dismissal.",
  },
  sun: {
    canon: { title: "Canon of supplication to the most holy Theotokos",
             odes: {...} },      // different composition; NO frame_rubric
                                 // printed this night
    after_ode6: { rubric: "Lord, have mercy, (Thrice). Glory ..., Both now ...,",
                  sessional: "As the wellspring of loving-kindness, O Theotokos ..." },
    closing_rubric: "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., And the rest as usual. Dismissal.",
                                 // closing rubrics differ per night — verbatim
  },
  mon: { ... },                  // 2-3: third distinct canon (different
                                 // composition + partially different irmoi,
                                 // incl. Ode VIII "God Who descended into the
                                 // fiery furnace", first attestation); own
                                 // after-Ode-VI sessional; closing rubric =
                                 // Sunday night's.
  tue: { ... },                  // 2-4: FOURTH distinct canon (same title;
                                 // 2 plain + glory + both_now per ode; own
                                 // troparia throughout; Ode VIII irmos =
                                 // Monday night's "God Who descended into the
                                 // fiery furnace", second attestation). The
                                 // after-Ode-VI sessional is Tier 2 POINTED —
                                 // "We magnify thee, O Theotokos ... un-burnt
                                 // bush ..." — and is the same hymn as the
                                 // Tuesday Matins set-1 closer (§2.3);
                                 // sessional tier is a per-night source fact.
                                 // Closing rubric ≈ Sunday night's ("and
                                 // prostration" vs "and a prostration" —
                                 // verbatim per night).
  // wed … fri: GAP
}
```

### 4.6 `nocturns` — Sunday (2-1)

Trinity canon with composer + acrostic ("Metrophanes of Smyrna" / "I hymn
Thee, the threefold light of the Godhead"), TWO mid-canon sessional pairs
(both Spec. Mel. "Of the loving-kindness ..."), Gregory-the-Sinaite hymn
after the canon (invariable per its own source note → shared, §5).

```js
nocturns: {
  frame_rubric: "The priest saith: “Blessed is our God ...,” ... Psalm 50 ...",
  canon: { title: "Canon to the Holy & Life-creating Trinity",
           composer: "Metrophanes of Smyrna",
           acrostic: "I hymn Thee, the threefold light of the Godhead",
           odes: {...} },        // Shape B; Odes 6,7,8 first item repeat: 2
  after_ode3: { sessional: { text: "When Thou didst form Adam ...",
                             spec_mel: "Of the loving-kindness ..." },
                theotokion: "When God was well pleased ..." },
  after_ode6: { sessional: { text: "O merciful One, beginningless Trinity ...",
                             spec_mel: "Of the loving-kindness ..." },
                theotokion: "Thou art merciful, O good Theotokos ..." },
  closing_rubric: "The rest of Nocturns, and the Dismissal.",
}
```

**Weekday Nocturns**: presence/absence of Octoechos content is a GAP —
2-2 prints none for Monday, but absence in one file is not yet proof of a
rule; confirm across 2-3 … 2-7.

### 4.7 `matins` — Sunday (2-1)

```js
matins: {
  god_is_lord_rubric: "... (or in the Tone of that from the Menaion)",
                                 // uses canonical troparion (Twice) +
                                 // dismissal_theotokion; cross-tone lookup §3.
  sessionals: [                  // exactly 2 sets on Sunday (Kathisma II, III);
                                 // weekday shape differs — §4.8
    { items: [ {label:'plain', text: h1}, {label:'plain', text: h2} ],
      verses: [ "Arise, O Lord my God, let Thy hands be lifted on high ..." ],
      closer: { type: 'stavrotheotokion', text: "Thou art highly glorified ..." } },
    { items: [ {label:'plain', text: h1}, {label:'plain', text: h2} ],
      verses: [ "I will confess Thee, O Lord, with my whole heart ..." ],
      closer: { type: 'theotokion', text: "Thou art highly blessed ..." } },
  ],                             // NOTE: in Tone 2 only Kathisma II's closer is
                                 // a Stavrotheotokion; the type field records
                                 // what the source labels it. Do not assume the
                                 // same distribution in other tones.
  hypakoe: { text: "The women coming to Thy grave ...",
             sourceLabel: "The Sessional Hymn" },
  anabathmoi: [                  // Songs of Ascent — absent from V1 and from
                                 // the planning-session gap list.
    { troparia: [t1, t2], gloria: "To the Holy Spirit belongeth sovereignty ..." },
    { troparia: [t1, t2], gloria: "To the Holy Spirit belongeth the source of life ..." },
    { troparia: [t1, t2], gloria: "By the Holy Spirit all wisdom doth flow forth ..." },
  ],                             // 3 antiphons in Tone 2; count is per-tone —
                                 // do NOT hard-require 3 in the gate; §9.7
  prokeimenon: { text: "Arouse Thyself, O Lord my God, in the commandment ...",
                 verse: "O Lord my God, in Thee have I put my hope ..." },
                                 // MATINS prokeimenon — distinct from
                                 // liturgy.prokeimenon; V1 conflated these (§8)
  canon: {...},                  // Shape A (§4.11)
  // kontakion + ikos: canonical fields, sung after Ode VI (position is
  // assembly knowledge; the data lives at tone level).
  exapostilarion_rubric: "... taken from the prescribed Eothinon according to the Resurrection Gospel ...",
                                 // Eothinon-keyed (Gospel 1–11), NOT tone-keyed
  praises: {
    rubric: "8 Stichera of the Resurrection, however, if ... ‘feasted’ ...",
    stichera: [p1 … p8],         // pp.5–8: "Other Stichera of Anatolius"
    verses: [...8],
    gloria_rubric: "Glory ..., The Eothinon of the Resurrection Gospel ...",
    theotokion: "Thou art most blessed, O Virgin Theotokos ...",
  },
  doxology_troparion: "Having risen from the tomb, and having burst the bonds of Hades ...",
                                 // per-tone field, exactly as printed. Which
                                 // tones print which Doxology troparion is a
                                 // per-chapter fact to be read, not assumed.
}
```

### 4.8 `matins_weekday` — day-keyed; structure established by 2-2 (Monday)

Weekday Matins Octoechos content differs structurally from Sunday: **three**
sessional sets with flexible internals, **two** canons appointed together
(each with its own per-ode irmos, composer, acrostic), and its own
**aposticha with theotokion** — a section Sunday Matins does not have. No
God-is-the-Lord block, no hypakoe/anabathmoi, no praises stichera, no
doxology troparion.

```js
matins_weekday: {
  mon: {
    sessionals: [                // THREE sets; internals vary — flexible shape
      { rubric: "After the 1st chanting of the Psalter, The Sessional Hymns of compunction ...",
        items: [ {label:'plain'}, {label:'plain'} ],
        verses: [ "O Lord, rebuke me not in Thine anger ..." ],
        closer: { type:'theotokion', text: "As the well-spring of loving-kindness ..." } },
      { items: [ {label:'plain'}, {label:'plain'}, {label:'martyrs'} ],
        verses: [ "O Lord, rebuke me not in Thine anger ...",
                  "Wondrous is God in His saints ..." ],
        closer: { type:'theotokion', text: "We magnify thee, O Theotokos ... O cloud of the never-setting Sun ..." } },
      { spec_mel: "As a wellspring of loving-kindness ...",
        items: [ {label:'plain'}, {label:'plain'} ],
        verses: [],
        closer: { type:'theotokion', text: "O pure, unwedded Theotokos ..." } },
    ],
    canons: [                    // TWO canons, interleaved by ode in print;
                                 // stored whole, assembler interleaves
      { title: "Canon of repentance to our Lord Jesus Christ and His holy martyrs",
        composer: "Joseph",
        acrostic: "Grant me an outpouring of tears, O Word of God",
        odes: {...} },           // Shape B items incl. 'martyrs' labels:
                                 // typically 2 plain + 2 martyrs + theotokion
      { title: "Canon of the holy, incorporeal angelic hosts of heaven",
        composer: "Theophanes",
        acrostic: "I sing praise to the angelic choir",
        odes: {...} },           // Shape B; "(Twice)" repeat markers on several
                                 // first items; on Monday each canon has its
                                 // own irmos per ode — but that is a PER-DAY
                                 // SOURCE FACT, not a rule: Wednesday (2-4)
                                 // shares 4 of 8 between its two canons via
                                 // the incipit device (§2.7)
    ],
    magnificat_rubric: "We then chant the hymn of the Theotokos (the Magnificat), with the refrain: “More honorable than the cherubim ...,” and make prostrations.",
                                 // printed between Odes VIII and IX
    post_canon_rubric: "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ...,",
                                 // weekday exapostilarion referenced WITHOUT
                                 // text — source location GAP (§9.11)
    aposticha: {
      items: [ {label:'plain'}, {label:'plain'}, {label:'martyrs'} ],
      verses: [...2],            // "We were filled in the morning ..." etc. —
                                 // long pointed verses printed in full
    },
    aposticha_theotokion: "We have placed our trust in thee, O Theotokos ...",
    closing_rubric: "Then, “It is good to give thanks ...,” ... First Hour, and Dismissal.",
  },
  tue: { ... },                  // 2-3: SAME shape as mon — template holds.
                                 // Facts: canons = repentance (Joseph,
                                 // acrostic "Thou accedest to my lamentations,
                                 // O Savior") + Forerunner (ALSO Joseph,
                                 // acrostic "O Baptist, accept this entreaty")
                                 // — composer varies per day per canon (Monday
                                 // second canon was Theophanes); canon irmoi
                                 // are day-specific compositions; Matins
                                 // aposticha theotokion is "Rejoice, O
                                 // Theotokos Mary ..." (§8 recurrence).
  wed: { ... },                  // 2-4: SAME shape — fourth day. Facts: ALL
                                 // three sessional closers + the Matins
                                 // aposticha closer are Stavrotheotokia
                                 // (Cross day); sessional ITEMS Tier 1, their
                                 // closers Tier 2 (mixed tiers again);
                                 // sessional verses are day-themed ("Exalt ye
                                 // the Lord our God ..."; "God is our King
                                 // ...") with the martyrs verse "Wondrous is
                                 // God in His saints" recurring; set-3 Spec.
                                 // Mel. printed "As the wellspring ..."
                                 // (= Tuesday's form, vs Monday's "As a
                                 // wellspring"); canon 1 = precious Cross,
                                 // heading prints acrostic BEFORE composer
                                 // ("The setting up of the Cross is the fall
                                 // of the demons", Joseph) and includes the
                                 // tone; canon 2 = "Another canon, of the
                                 // most holy Theotokos" — FIRST weekday canon
                                 // with NO composer and NO acrostic printed
                                 // (confirms both fields optional); canon-2
                                 // items are unlabeled (all 'plain'), with
                                 // "(Twice)" on the first item of Odes VII
                                 // and IX; canon-2 irmoi use the incipit
                                 // device for Odes IV/VII/VIII/IX (§2.7);
                                 // Matins aposticha closer "Upon beholding
                                 // the ripe Cluster ...", Spec. Mel. "When
                                 // from the Tree ...".
  // thu … sat: GAP
}
```

**Sessional closers mix tiers within one day.** Tuesday set 1's theotokion
is pointed Tier 2 ("We magnify thee ... * Thou art the un-burnt bush ..."),
set 3's is Tier 1 prose — per §3.2 of encoding_rule_v2.md, tier is a
per-item source fact; never force uniformity across a day's sets.

### 4.9 `liturgy` — Sunday (2-1)

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
                                 // NOTE: Sunday section prints NO communion
                                 // verse; Monday does (§4.10) — do not invent
                                 // one for Sunday; assembly sources it elsewhere.
}
```

### 4.10 `liturgy_weekday` — day-keyed (2-2, Monday)

```js
liturgy_weekday: {
  mon: {
    beatitudes: {
      items: [ {label:'plain'}, {label:'plain'}, {label:'plain'},
               {label:'martyrs'}, {label:'glory'}, {label:'both_now'} ],
                                 // Both-now item is the Theotokion
    },
    prokeimenon: { tone: 4, text: "He maketh His angels spirits ...",
                   verse: "Bless the Lord, O my soul ..." },
    alleluia:    { tone: 5, verses: ["Praise Him, all ye His angels ...",
                                     "For He spake, and they came to be ..."] },
    communion:   "He maketh His angels spirits, and His ministers a flame of fire.",
                                 // KOINONIKON — a field class Sunday's section
                                 // does not print. Day-of-week cycle; shared-
                                 // by-day hypothesis §5, verify per tone.
  },
  tue: { ... },                  // 2-3: same shape. Prokeimenon Tone VII "The
                                 // righteous man shall be glad ..."; Alleluia
                                 // Tone IV; Communion "In everlasting
                                 // remembrance ...". Beatitudes include a
                                 // day-theme (Forerunner) plain item.
  wed: { ... },                  // 2-4: same shape. Day-explicit prokeimenon
                                 // heading device: "On Wednesday, the
                                 // Prokeimenon, in Tone III:" with the source
                                 // label "the hymn of the Theotokos" — "My
                                 // soul doth magnify the Lord" (Theotokos
                                 // propers on the Cross day is the printed
                                 // fact; record, do not rationalize).
                                 // Alleluia Tone VIII "Hearken, O daughter
                                 // ..."; Communion "I will take the cup of
                                 // salvation ...".
  // thu … sat: GAP
}
```

### 4.11 Canon shapes and the item-label vocabulary

Label vocabulary (all labeled-item arrays — canons, weekday sessionals,
weekday aposticha, weekday beatitudes):
`plain | martyrs | glory | both_now | theotokion | trinitarion`
('martyrs' = the source's "To the martyrs:" prefix; the prefix is the
label, not part of the text).

**Shape A — multi-canon block** (Sunday Matins Resurrection canon, 2-1):
ode keys `1,3,4,5,6,7,8,9`; per ode ONE irmos + three sub-canons
(`resurrection` / `cross_resurrection` / `theotokos`), each with a printed
refrain and Tier-1 troparia; the resurrection sub-canon closes with
`{type:'theotokion'}` in Odes 1–8 and `{type:'trinitarion', refrain:"We
bless the Father, Son and Holy Spirit, the Lord."}` at Ode 9. Troparia
counts are per-ode source facts (e.g. 3 in Ode 7 cross_resurrection).

**Shape B — labeled canon** (Compline both nights, Nocturns, both Monday
Matins canons): ode keys as above; per ode `irmos` + flat `items` array of
labeled Tier-1 troparia; no printed refrains. Compline/Nocturns odes run
2-plain + glory + both_now (with "(Twice)" reducing plain count); Monday
repentance canon runs plain + martyrs + theotokion mixes; the angels canon
runs plain + theotokion with repeats. **Exactly which labels appear, and
how many items, is a per-ode source fact — the gate checks label validity
and non-emptiness, not a fixed census.**

Canon-level metadata (either shape): `title` (verbatim heading),
`composer?`, `acrostic?`. Mid-canon sessional insertions belong to the
**service** section (`after_ode3` / `after_ode6`), not the canon object.
Weekday double-canons print interleaved by ode; V2 stores each canon whole
and the assembler interleaves — storage follows composition, print order is
an assembly concern. Katavasiae are **not** Octoechos content — excluded,
as is the Magnificat machinery (§5). The Ode VIII "We praise, we bless ..."
verse is invariable → shared.

## 5. `shared.js` — tone-independent tables

Every item below is printed in a Tone 2 file but hypothesized invariable
across tones (**each must be re-verified against every tone's chapter as it
is encoded; any divergence found is a finding, and the item moves into the
per-tone files**):

- `lic_verse_ladder` — the Ps 129/116 "Lord I have cried" sequence. Now
  attested at three entry points (GV 10-position; LV tail-4; Sunday-evening
  6-position "If Thou shouldest mark ...") — consistent so far.
- `saturday_gv_aposticha_verses` — "The Lord is King ..." 3-verse set.
- `lv_theotokos_aposticha_verses` — "I shall commemorate thy name ..." set.
- `weekday_aposticha_verses` — day-keyed: the long pointed Vespers pair
  ("Unto Thee have I lifted up mine eyes ..." / "Have mercy on us ...") and
  the Matins pair ("We were filled in the morning ..." / "And let the
  brightness ..."). Hypothesis: invariable daily-cycle texts; verify.
- `daily_vespers_prokeimena` — day-keyed cycle (Sunday evening: Tone VIII
  "Behold now, bless ye the Lord"). Verify per tone.
- `daily_liturgy_propers` — day-keyed prokeimenon/alleluia/communion
  (Monday: Tone IV "He maketh His angels spirits" / Tone V alleluia /
  koinonikon). Verify per tone.
- `saturday_vespers_prokeimenon` — Tone VI "The Lord is King" + 3 verses.
- `theotokos_virgin_rejoice` — Tone IV, with the vigil rubric note.
- `evlogitaria` — full text printed in 2-1 (V1 keeps these in index.js;
  compare at encode time and log any divergence).
- `praises_verse_ladder` — the 8-verse Praises sequence.
- `polyeleos` — select verses + pre-Lent Ps 136 note + Megalynarion rubric.
- `ode8_hymn_verse` — "We praise, we bless, we worship the Lord ...".
- `gregory_sinaite_hymn` — 7 stanzas, Tier 1; source note "(which is
  chanted every Sunday after the canon)".

**Excluded from V2 entirely** (Horologion/other-book material printed for
convenience — record each exclusion so the audit trail shows it was seen
and deliberately not encoded): "Having beheld the Resurrection", Psalm 50
troparia, Magnificat verses + "More honorable" refrain, Katavasiae,
Exapostilaria/Eothina (Gospel-keyed 11-set — its own future table),
Compline and Nocturns frames, weekday Matins/Compline frame elements named
in rubrics ("It is truly meet", Trisagion, First Hour).

`shared.js` is dynamically loaded like the tone files — nothing from V2 is
ever statically imported into `hours-tool.jsx` (§2.1).

## 6. Drift gate — `schema_v2.js` + `validate_octoechos_v2.mjs`

Designed alongside the fields, not bolted on (planning-session condition).

- `_encoded` section claims, V1-style, gating REQUIRED shapes per section:
  `core`, `little_vespers`, `great_vespers`, `vespers_weekday.<day>`,
  `compline.<night>`, `nocturns`, `matins`, `matins_weekday.<day>`,
  `liturgy`, `liturgy_weekday.<day>` — weekday claims are per-day so a
  partially encoded tone gates only what it claims.
- **Structural checks** (only for claimed sections): LV lic 4 + parallel
  verses; GV lic 7 + 7 + 3 Menaion verses; GV aposticha 4 + 3 verses;
  Sunday sessionals exactly 2 sets / weekday exactly 3 sets, each set
  `{items[], verses[], closer{type,text}}` with per-set flexible counts;
  weekday LIC = octoechos 3 + fallback 3 + verse arrays parallel; Shape A
  canon: keys `1,3,4,5,6,7,8,9`, three sub-canons, trinitarion at 9 /
  theotokion elsewhere, non-empty troparia; Shape B canon: same keys,
  non-empty labeled items, labels from the §4.11 vocabulary, `repeat`
  only 2 and only where the source device is "(Twice)"; weekday
  `canons` length 2, each with an irmos per ode — either full text or an
  incipit reference (`irmos_ref`, §2.7) whose incipit prefix-matches the
  first canon's irmos for that ode (never an empty or invented irmos);
  weekday vespers and weekday Matins-aposticha closers carry `type` from
  {theotokion, stavrotheotokion} per the source's own label (§4.4); praises 8 + 8 + theotokion;
  Sunday beatitudes 6 + gloria + theotokion / weekday beatitudes labeled
  items with exactly one glory + one both_now; matins and liturgy
  prokeimena both present and **not equal to each other** (V1 conflation
  trap, §8); weekday liturgy includes `communion`, Sunday liturgy must NOT
  (not printed — §4.9).
- **Pointing checks:** Tier-2 St. Sergius fields contain `*` and exactly one
  `**`, never `|`/`//`; Tier-1 fields contain no markers; no `[` brackets
  in any St. Sergius-dialect field.
- **Character-set check (NEW):** hard-fail on any non-Latin letter
  codepoint in any text field (Cyrillic homoglyph contamination, §2.8) —
  normalization happens at encode time with a logged record, never
  silently, never at render.
- **Placeholder detection:** no bracketed placeholder strings in hymn text
  fields; rubric prose only in `rubric` / `*_rubric` / `frame_rubric`
  fields.
- **Anti-dedup guard:** no near-duplicate detection that suggests merging
  (§2.3). Encoded-fact equality assertions are legitimate (e.g. Kathisma
  III closer ≠ Praises theotokion; Ode-1 irmoi across canons equal but
  separately stored; Compline-sun sessional vs Monday Kathisma-1
  theotokion differ only by "wellspring"/"well-spring").
- Provenance required: every claimed section carries `source` (file);
  `sourceLabel` where our name differs; `spec_mel`, `composer`, `acrostic`
  where printed.

Gate joins the standing sequence: `test_pointing_paths.mjs`,
`test_sunday_vespers.mjs`, `validate_octoechos.mjs` (V1, still live),
`validate_octoechos_v2.mjs`, `vite build`.

## 7. Truthing tool (Phase 2 requirement, recorded here)

Purpose-built V2 browser before any real encoding. Requirements from the
planning-session audit-gap finding: every field visible **under its service
context** (no "Index Tables" burial — Compline nights, Nocturns, and each
weekday appear as services in their own right), every field greppable,
dialect badge per §3.4, and a V1↔V2 side-by-side view for the cutover
comparison.

## 8. Tone 2 discrepancy register (V1 vs 2-1/2-2)

| V1 field | V1 reads | Source reads | Class |
|---|---|---|---|
| `RESURRECTIONAL_TROPARIA[2]` | "slay Hades with the **lightning** of Thy Divinity" | "**radiant brilliance**" (all 4 print sites, 2-1) | wording variant (OCA docx has "splendor" — 3 sources, 3 wordings; V2 encodes St. Sergius) |
| `SUNDAY_KONTAKIA[2]` | "Hades was **terrified**" | "Hades was **struck with fear**" (both sites, 2-1) | wording variant |
| `RESURRECTIONAL_DISMISSAL_THEOTOKIA[2]` | — | word-for-word match | confirmed correct |
| `SUNDAY_PROKEIMENON[2]` | "Arise, O Lord my God, let Thy hand be lifted high; forget not Thy poor forever" | Matins: "Arouse Thyself ..." (Ps 7); Liturgy: "The Lord is my strength and my song" (2-1) | **genuine error** — matches neither moment. The V1 text is (another translation of) the Kathisma-II sessional verse / Praises verse 7 — likely sourced from a psalm-verse table, not a prokeimenon. |
| `SUNDAY_ALLELUIA[2]` | "O Lord, in Thy strength the king shall be glad ..." (Ps 20) | "The Lord hear thee in the day of affliction ... / O Lord, save the king ..." (Ps 19, 2-1) | **genuine error** — adjacent psalm, matches neither moment |
| `SUNDAY_APOSTICHA_THEOTOKIA[2]` | "Rejoice, O Theotokos Mary, thou indestructible and surpassingly holy temple ..." | Saturday GV aposticha theotokion: "O new wonder ..." (2-1). The V1 text appears **word-for-word, pointing included, as the SUNDAY-EVENING weekday aposticha theotokion** (2-2) — and again as the **Tuesday-morning Matins aposticha theotokion** (2-3): a text that legitimately recurs at multiple weekday positions. | **RESOLVED: mis-slotted, not fabricated.** V1's "Sunday" table holds a weekday-cycle text where the Saturday-evening (Resurrection cycle) text belongs. Directly confirms the suspected mis-sourcing; V2's day-keyed structure makes the slot collision impossible. |
| `LIC_THEOTOKIA[2]` | "Tribulation, cruel assaults, and divers passions bestorm my lowly soul ..." (used at hours-tool.jsx:3771/3933/4065 as the **Saturday GV Dogmatikon fallback**) | The text is the **MONDAY-EVENING weekday LIC theotokion** (2-3, pointed Tier 2; V1 stores it unpointed). The source has SIX per-evening LIC theotokia per tone; the Saturday slot's proper text is the Dogmatikon itself (2-1). | **same failure class as the aposticha row** — weekday-cycle text mis-slotted into a Resurrection-cycle role, and a 6-way day distinction collapsed to one entry. V2: per-evening fields; no cross-cycle fallback in data. |
| `HYPAKOE[2]` | "The women coming to Thy grave ..." | identical (2-1; source labels it "The Sessional Hymn") | confirmed correct |
| `tone2.js` `vespers.sat` lic + aposticha + dogmatikon | — | word-for-word match (2-1, spot-checked) | confirmed correct |
| `tone2.js` `aposticha_glory` | `[Glory from Menaion if appointed]` placeholder | real Saturday fallback exists ("O new wonder ...") | placeholder → real text in V2 |
| — (source-vs-source) | earlier "Tone2.pdf" paste: "**All**-powerful" (GV lic #4) | 2-1.pdf: "**all**-powerful" | OCR-level variance between two provisions of the same chapter; **2-1.pdf canonical** |
| — (source quality) | — | 2-2.pdf text layer: Cyrillic О (U+041E) for Latin O throughout | extractor homoglyph contamination — §2.8 rule + gate check; **not** source content |
| `tone2.js` `vespers.tue.aposticha_glory` | "The light of the sun and moon dimmed ..." | Per 2-4 that text is the Tuesday-evening **LIC** Glory/Both-now Stavrotheotokion; the aposticha closer is "Having endured many pangs ..." (Stavrotheotokion, Spec. Mel. "When from the Tree ...") | **LIC→aposticha mis-slot** — same slot-collision class as the SUNDAY_APOSTICHA_THEOTOKIA / LIC_THEOTOKIA rows, now inside V1's own weekday block |
| `tone2.js` `vespers.tue.aposticha[2]` (martyrs) | "We fight on behalf of the King of the powers on high; though ye give us up to fire and torment, we shall not deny ..." | 2-4: "We fight for the King of hosts! And even if ye have subjected us to fire and tortures, we will not reject ..." | wording variant — different translation of the same martyrs sticheron; V2 encodes St. Sergius (note V1's own `fri.lic` carries a third near-variant of this text) |
| — (V1 inventory) | `tone2.js` `vespers` carries a full day-keyed weekday block (sun–fri: lic ×3, aposticha ×3, aposticha_glory; fri: 6 lic with the first printed twice + `lic_dogmatikon` = the GV dogmatikon text; all unpointed, no verses/fallback sets/prokeimena/closer types) previously uninventoried by this spec; `hours-tool.jsx` ~2828 also carries a static 7-day vespers-prokeimena table (anti-pattern location) whose sun/mon/tue rows match 2-2/2-3/2-4 exactly | — | V1 comparison surface for weekday Vespers and the daily-prokeimena shared table. The `fri` rows are **V1 state only, NOT evidence** for §9.2 — the Friday dogmatikon question is answered by 2-7 |

## 9. OPEN — gaps and decisions blocking spec completion

1. **Weekday Vespers, Wednesday evening – Friday evening** (2-5 … 2-7):
   Sunday, Monday, and Tuesday evenings scanned; template holding across
   three days. Remaining days unproven.
2. **Friday evening**: 6 stichera + week dogmatikon per Fekula's Friday
   rule — same-text-or-distinct-print-site question (§4.4).
3. **Compline Wed–Fri nights** and **weekday Nocturns** presence/absence:
   none of 2-2, 2-3, or 2-4 prints weekday Nocturns content (Mon, Tue, Wed
   mornings — three consecutive absences); still not proof of a rule.
4. **Repeat/reference devices** (§2.7): proposal — mirror the source's
   device (full double print → two positional entries; "(Twice)" →
   `repeat: 2`; incipit-abbreviated irmos → verbatim incipit string +
   `irmos_ref: 'canon1'`, gate-checked prefix match). All three devices
   attested (2-1 LV lic; 2-1 Nocturns; 2-2 Monday canons; 2-4 Wednesday
   Theotokos canon Odes IV/VII/VIII/IX). Bill's confirmation needed —
   one decision now covers all three.
5. **Canonical-field punctuation** (§4.1): which troparion print site's
   punctuation is canonical. Bill's call.
6. **LV dismissal Theotokion** (§4.2): slot marked without text; resolve
   from Fekula at assembly-spec time; no invented text.
7. **Anabathmoi antiphon count** (§4.7): per-tone fact; gate must not
   hard-code 3.
8. **Shared-table scope boundary** (§5): confirm shared-vs-excluded split —
   Evlogitaria, Polyeleos block, Gregory hymn, and now the day-keyed
   cycles (daily Vespers prokeimena, daily Liturgy propers, weekday
   aposticha verse pairs).
9. **Kathisma sessional verses**: possible cross-tone invariance; treat as
   per-tone until two more tones confirm or deny. Note "O Lord, rebuke me
   not in Thine anger" repeats within Monday itself (sets 1 and 2).
10. **Homoglyph normalization** (§2.8): confirm normalize-at-encode-with-log
    + validator hard-fail. Attestation: 2-1 clean; 2-2, 2-3, 2-4 all
    contaminated (2-4: U+041E ×143, the only non-Latin codepoint). Bill's
    confirmation needed.
11. **Weekday exapostilarion texts**: the Monday, Tuesday, and Wednesday
    Matins post-canon rubrics (2-2, 2-3, 2-4) all name the Exapostilarion
    without printing it; locate the source (appendix file?) before the
    weekday assembler is specced.
12. **OCR spelling artifacts — sic-list rule (NEW, 2-4)**: distinct from
    the §9.10 charset issue, 2-4's text layer carries spelling-level
    artifacts ("exeedingly"; "Wondrous art. Thou" with a stray period;
    "those Sick with corruption" mid-sentence capital). Proposal: charset
    normalizes per §9.10; spelling stays STRICT VERBATIM plus a logged
    sic-list in the session analysis file — no silent correction. Bill's
    confirmation needed.
