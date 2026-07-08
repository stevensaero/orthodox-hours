# Octoechos V2 encoding generators (Phase 1, July 7 2026)

The byte-faithful generation pipeline used to encode `shared.js`,
`theotokia.js`, `tone2.js`, and `tone3.js` — committed so future
differential scans (tones 4–8, 1) adapt these instead of rebuilding.
**Nothing is ever hand-retyped:** text flows from `pdftotext` extractions
of the private `stevensaero/orthodox-sources` repo into the data files by
line-marker or paragraph-grammar extraction, with §9.10 homoglyph
normalization logged per node.

Environment: python3 + poppler `pdftotext`. Scripts expect extractions at
`/tmp/scan/` (`N-x.txt` plain for marker extraction and scanning;
`N-xL.txt` from `pdftotext -layout` for paragraph-grammar walking) and the
repo clone at `/tmp/oh2` — adjust paths at the top of each script.

Pipeline per source file (spec §10):
1. `tools/scan_source.mjs` on the plain extraction → review file to Bill
   BEFORE anything else (§9.10 ruling).
2. Generate with the file's walker; every parser assertion is a §4
   template check — an assertion failure is a FINDING, not a bug to paper
   over. Convert genuinely per-tone facts to findings-reporting (see the
   tone-3 variants), never loosen a byte assertion.
3. §5 verification: `verify_shared_t3.py` pattern — re-run the shared
   extraction manifest against the new tone's files; byte-compare; DIVERGENT
   items are stored per-tone (see `postpass_t3.py`), matching items ref shared.
4. Register/sic pinning in the SAME commit as the data (§2.3a / §9.12).

Scripts:
- `wk_lib.py` — layout tokenizer (centered-heading / 4-space-para / col-0
  continuation grammar; verse-class merge; canon-heading merge; "OD E I"
  de-spaced ode matching), node factory with homoglyph logs, §4.11 label
  splitting incl. compounds, incipit detection.
- `manifest.py` + `generate.py` + `checkall.py` — shared.js line-marker
  extraction (tone-2 print sites) + marker batch-verifier.
- `gen_theotokia.py` — heading-driven parse of Theotokia.pdf (all tones).
- `gen_tone2.py` / `gen_weekday.py` — tone-2 Sunday cycle / weekday+Compline+
  Saturday walkers (the reference derivation).
- `gen_tone3_sun.py` / `gen_weekday3.py` — the tone-3 DIFFERENTIAL variants:
  per-tone counts reported as findings instead of asserted, de-spaced
  service headings, 'The Verse:' forms, Trinitarian spelling, etc. START
  FROM THESE for tones 4–8/1.
- `gen_tone4_sun.py` / `gen_weekday4.py` — the tone-4 variants (paths:
  `/tmp/scan4/`, repo at `/tmp/oh`): single-space paragraph indents,
  mid-paragraph page breaks in 4-1 (formfeed = page separator, not a
  paragraph boundary), Spec. Mel. label variants ('Spec, Mel.'/'Spec.
  Mel:'/curly-left close — SPECMEL_RE), Glory/Both-now heading sic
  variants, the 4-7 'Repeat:'-labeled incipit device, split praises
  closer, Ode-I long sub-canon headings, fallback-tier Spec. Mel.
  START FROM THESE for tones 5–8/1.
- `gen_tone5_sun.py` / `gen_weekday5.py` — the tone-5 variants: 'Repeat:'-
  labeled incipit in LITTLE VESPERS (sun walker now handles the device);
  incipit REFERENT resolved by prefix match (tone 5 repeats the set-2
  opener at Friday-eve, not sticheron 1); heading forms ('Tone V.',
  'Then, in Tone IV:', 'The Sessional Hymn, in Tone V:', col-0 Liturgy
  Prokeimenon after a page break); the 'all ye peoples' missing-period
  verse guard. wk_lib formfeed rule now tone-wide (5-3/5-4/5-6/5-7 break
  pages mid-paragraph). START FROM THESE for tones 6–8/1.
- `gen_tone6_sun.py` / `gen_weekday6.py` — the tone-6 variants: multi-line
  Nocturns canon heading joined to its 'Tone VI:' terminator ('in'-less tone
  marker); LITURGY kontakion heading word-order variant ('Kontakion of the
  Resurrection' vs the Matins 'Resurrection Kontakion'); LV troparion 'be'-drop
  guarded EXACTLY at the multi-site §4.1 check (GV canonical); LV s1 full double
  print; Matins canon 'Resurrection Canons Tone VI.'. START FROM THESE for
  tones 7–8/1.
- `gen_tone7_sun.py` / `gen_weekday7.py` — the tone-7 variants: GV dismissal-
  theotokion heading without 'the'; God-is-the-Lord rubric 'At' for 'On';
  troparion multi-site check now WORD-exact with pointing (*/**) recorded
  per-site; unlabeled-irmos promotion (Tue-night Compline Ode III); canon
  titles joined through the centered 'Tone VII:' terminator. START FROM THESE
  for tone 8/1.
- `gen_tone8_sun.py` / `gen_weekday8.py` — the tone-8 variants: 8-1 is
  CONTAMINATED, so the Sunday node()/ode_of normalize homoglyphs (no clean
  assertion); 'AT NOCTURNES' spelling; virgin-rejoice with no 'Tone IV:'
  heading; anabathmoi = 4; gen_weekday8 accepts the '.Glory ...' stray-leading-
  period sessional closer. START FROM THESE for tone 1.
- `verify_shared_t3.py` / `postpass_t3.py` — §5 byte-verification against
  shared.js + per-tone storage of divergent items.
- `verify_shared_t4.py` / `postpass_t4.py` — the tone-4 §5 pass. CAUTION:
  extraction markers can be SHADOWED by earlier same-text sites (4-7
  Saturday sessional verses shadowed the Liturgy Alleluia markers —
  re-scope with search_after before calling a divergence).
- `verify_shared_t5.py` / `postpass_t5.py` — the tone-5 §5 pass: heaviest
  divergence set yet (polyeleos pointed throughout, virgin-rejoice single-*,
  Gregory ×3 stanzas, sun-eve 'mistress'); Gregory now stored per-tone in
  EVERY tone (RULED July 8 2026).

`wk_lib.py` carries the cumulative tolerances (tone-4 additions: HOMOGLYPHS
С/а, indent ≥ 1, 'ODE IX.' trailing period, comma-ended-verse merge guard,
'Both now...,' label variant). Tone-3 scripts import the same lib. Tone-6 addition:
`ode_of` normalizes the known homoglyph class BEFORE structural matching (6-7
prints a Cyrillic-О 'ОDE IX' at the Ode-IX heading — a structural-site
homoglyph; stored item nodes keep raw bytes + per-node log). Tone-7 additions: a non-terminal verse/refrain never absorbs a following
structural-unit start (STRUCT_START); col-0 canon headings ('Another canon',
'Canon of/to') start a paragraph (BLOCK_START) so an Ode-I canon heading is not
appended to the preceding theotokion. Tone-6 addition: `ode_of` normalizes the known
homoglyph class BEFORE structural matching (6-7 prints a Cyrillic-О 'ОDE IX' at
the Ode-IX heading — a structural-site homoglyph; stored nodes keep raw bytes
+ per-node log).

Known per-print gotchas the walkers already handle: split headings
("OD E I", "AT M AT IN S"), canon-1 heading printed before OR after ODE I,
"Canon to"/"Canon of", multi-line indented heading blocks, per-item
refrains (Saturday fallback canon), compound labels, quote/apostrophe
glyphs as per-print-site facts, digit-zero-as-O (ruled normalize-with-log).
