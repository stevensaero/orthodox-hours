# Menaion V2 wire-in and V1 retirement — spec

Opened 14 November 2026. Pattern: `octoechos_wirein_spec.md` (the July cutover).
Status: **§§1-5 done (slot map; six overlap dates encoded, nine files). §§6-9
are the plan and await Bill's confirmation before any assembler code changes.**

## 0. Rulings (Bill, 14 November 2026)

1. **Everything switches together**: Hours, Vespers, Typica, post-communion,
   dismissal, bulletin, browser. Not Hours first.
2. **No V1 fallback.** A date with no V2 entry shows "not encoded". That includes
   May through October at the switch, except the overlap dates of §5.
3. **Print site for the Hours** where one hymn is pointed differently at
   different sites: the end-of-Vespers printing.
4. **Two files on one date are two services.** The first file (c0) is shown by
   default with a visible choice to switch to the second.
5. **Two kontakia for one saint (11-28):** logged as an open question; the Ode VI
   kontakion is read at all four Hours meanwhile.
6. **A small overlap set is encoded in V2** so each service can be assembled from
   both datasets and compared. V1 is not the answer key: Bill expects V2 to be
   RIGHT where V1 was often wrong, notably the theotokia and dogmatika at Vespers.
7. The Fekula texts never enter the repo.
8. **(14 Nov, after the OCA texts were read)** The service shown by default on a
   two-file date is the one marked `oca_primary`: the first file, except 5
   September. The other is offered as a choice. This replaces "c0 by default".
9. **Rank words:** a forefeast or afterfeast day with 3 + 3 stichera and no
   doxology is `six_stichera` (V1's word). Apostles Philip, Matthew, Andrew and
   the second-file services of Palamas, Innocent and the Kursk-Root Icon are
   `polyeleos`, provisional (Q-0001, Q-0002). The waterfall takes Vigil only
   where a Little Vespers is printed.
10. **Kontakion at the Hours** when a saint has two: V1's existing rule
    (`getKontakionForHour`) is kept; ruling 5 is withdrawn. The Hours read the
    Matins print site, Typica the Liturgy site.
11. **An OCA hymns layer is added**, with a "Prefer OCA" toggle that switches
    OCA hymns on wholesale wherever they exist, so OCA pointed hymns appear in
    the services and can be handed to the Tone Trainer. The layer grows only as
    the OCA publishes service texts: it does not publish one for every day.
12. A hand-entered short `name` per commemoration for the dismissal, checked
    against the OCA title line.
13. (14 Nov) The reader sees "The Menaion": no "V2" in the book title or in the
    services. "(V2)" may stand in the Library's small cover line, as on the
    Octoechos. File paths and routes keep "v2" (`menaion_v2`, `/menaion-v2`): no
    renames, no redirects.

## 1. The fact that shapes the work

V1 (`src/data/menaion/`): May, June, July, September, October; 92 dates, 121
entries. V2 (`src/data/menaion_v2/november.js`): 14-30 November; 17 dates, 22
entries. **No date exists in both.** Hence §5.

V1 is a FLAT record per commemoration, typed by hand, holding what the
assemblers needed. V2 is the printed service, whole, lifted from the page, in
positional order. The adapter's job is to answer the assemblers' questions from
the fuller record; it does not reshape V2 into V1.

## 2. Who reads V1 today (measured, `hours-tool.jsx` unless noted)

| Consumer | V1 fields read |
|---|---|
| `assembleHour`, `getKontakionForHour` | rank, fekula_section, fekula_section_override, saint, troparion, troparion_2, kontakion_ode3, kontakion_ode6 |
| `resolveTempleTroparion` / `resolveTempleKontakion` | troparion, kontakion_ode6, saint |
| `assembleVespers`, `srcVespersDay` | rank, fekula_section(+override), saint, stichera_lord_i_call, stichera_lord_i_call_count, stichera_glory, stichera_glory_absent, lic_theotokion, has_litya, litya_stichera, litya_glory, litya_both_now, stichera_aposticha, aposticha_glory, aposticha_glory_absent, aposticha_both_now, troparion, troparion_2, kontakion_ode3, kontakion_ode6, prokeimenon_text |
| `computeVespersParoemias` | rank, paroemia_1, paroemia_2, paroemia_3 |
| `assembleTypica` | rank, fekula_section, saint, kontakion_ode6 (+ troparion via shared helpers) |
| `buildDismissal`, `_dismissalSaintName`, `buildDismissalText` | saint, rank, beatitudes_troparia |
| `assemblePostCommunion` | takes the entry; reads no V1 field directly |
| Feast readings (main component) | feast_e, feast_g |
| Explainers and panels (`RankExplainer`, `HowItWorksPanel`, `OrdinaryBeginning`, `LiturgicalLibrary`, `ServiceBlock`) | rank, note, saint, oca_primary, and a sampling of the above for display |
| `menaion-browser.jsx` (V1 browser) | nearly every V1 field: retired with V1, replaced by the V2 browser |
| `tools/render_bulletin.mjs` | feast_e, feast_g, troparion, kontakion_ode3/6, aposticha_glory, exapostilarion, prokeimenon_tone/text, communion_verse, rank, fekula_section, saint |
| Gates: `validate_entries`, `test_sunday_vespers`, `test_liturgy_assembly`, `test_bulletin_*`, `test_edit_engine`, `test_ref_resolution` | import V1 months; re-baselined or retired in §8 |

59 of V1's 93 distinct fields are read by nothing but the V1 browser. They are
not mapped.

## 3. Slot map — V1 field to V2 source

`c` is one V2 commemoration. "site" means a positional print site.

### 3.1 Identity and rank

| V1 | V2 | Note |
|---|---|---|
| `saint` | `c.title.text` | V2 keeps the printed title line(s), in capitals as printed. The dismissal needs a NAME, not a title: see §4.1. |
| `rank` | `c.rank` | Same vocabulary. V2 adds a provisional state via the entry note and the open-questions register; the adapter exposes `rankProvisional` where a Q row points at the entry. |
| `fekula_section`, `fekula_section_override` | `c.fekula_section` | V2 has no override field; the section is stated once. |
| `oca_primary` | `c.oca_primary` | Same. |
| `note` | `c.note` | Same role. |
| two entries in an array | `c0`, `c1` by FILE | V1 arrays mixed two meanings (two services; two saints). In V2 an array is always separate services (ruling 4); saints sharing a service are one entry with `saint` tags. |

### 3.2 Troparia and kontakia (Hours, Vespers, Typica, temple, bulletin)

Three V2 shapes; the adapter normalizes them to an ordered list of
`{ text, tone, saint?, role, path }`.

| V1 | V2 shape A (one saint) | V2 shape B (several) |
|---|---|---|
| `troparion` | `c.troparion` | first item of `c.vespers.troparia` (or `great_vespers`) |
| `troparion_2` / `troparion_second` | none | later items of the same list, by their `label` (glory / both_now / of_the_feast) and `saint` |
| alternate ("Or this Troparion") | `c.<vespers>.troparion_alternate` | list item printed under "Or this Troparion" |
| `kontakion_ode6` | `c.kontakion` | `c.matins.kontakia_ode6[0]` |
| `kontakion_ode3` | none | `c.matins.kontakia_ode3[0]` |
| `ikos` | `c.ikos` | the `Ikos` item in `kontakia_ode6` |

- Print site for the Hours: end of Vespers (ruling 3). Where the entry-level
  field exists it IS that site unless `liturgy_troparion` / `liturgy_kontakion`
  records a divergent Liturgy printing; Typica reads the Liturgy site.
- Absence nodes (`{absent, reason}`) at `c.troparion` / `c.kontakion` (11-29)
  send the adapter to the fallback chain, `encoding_rule_v2.md` §1 and §2.1:
  General Menaion (`general.js`) by class of saint.
- A saint named in the title may have NO hymn of his own (the Compline saints of
  11-27, 11-28, 11-29). The adapter must not expect one per name.
- An afterfeast day's troparion of the feast is read from that day's own list,
  never from the feast day's canonical field (the texts differ: 11-21 vs 11-22+).

### 3.3 Vespers

| V1 | V2 | Note |
|---|---|---|
| `stichera_lord_i_call` | `<v>.lic` | V2 items carry `repeat`, `spec_mel`, `tone`, `saint`. |
| `stichera_lord_i_call_count` | derived: sum of `repeat` (default 1) over `<v>.lic`; cross-checked against the number in `<v>.lic_rubric` | V1 typed the number. |
| `stichera_glory`, `stichera_glory_absent` | `<v>.lic_glory`; absent when the key is missing | |
| `lic_theotokion` | `<v>.lic_closer` (typed theotokion / of_the_feast), `<v>.dogmatikon` where printed, `<v>.lic_stavrotheotokion` with its rubric | **Where V1 was weakest.** V2 stores exactly what the page prints and nothing else: when the page prints only a rubric ("Theotokion, or this Stavrotheotokion") the theotokion is NOT in the Menaion and must come from the Octoechos by tone and day (Fekula ch. 6). The adapter returns `{ source: 'octoechos', tone }` in that case, never an invented text. |
| `has_litya`, `litya_stichera`, `litya_glory`, `litya_both_now` | `<v>.litiya`, `<v>.litiya_glory`, `<v>.litiya_closer` | `has_litya` = key present. |
| `stichera_aposticha` | `<v>.aposticha` (stichera and verses interleaved, labeled) or an absence node `governed_by_octoechos` | |
| `aposticha_glory`, `aposticha_glory_absent`, `aposticha_both_now` | `<v>.aposticha_glory`, `<v>.aposticha_closer`, `<v>.aposticha_stavrotheotokion` | |
| `paroemia_1..3` | `<v>.readings[0..2]` | V2 holds heading + citation only (R-4); the scripture viewer supplies the text. `citation_basis: 'identified'` readings are shown with that caveat. |
| `prokeimenon_text` (Vespers use) | not in the Menaion: "Prokeimenon of the Day" | `<v>.entrance_rubric` |

`<v>` is `great_vespers`, else `vespers`; `little_vespers` is separate and V1
never had it.

### 3.4 Liturgy / Typica / bulletin

| V1 | V2 |
|---|---|
| `beatitudes_troparia` | `c.liturgy.beatitudes` (+ `beatitudes_rubric`) |
| `prokeimenon_tone`, `prokeimenon_text`, `prokeimenon_stichos` | `c.liturgy.prokeimenon` (+ `_verse`), or the list `prokeimena` |
| `alleluia_*` | `c.liturgy.alleluia` (+ `_verse`), or `alleluias` |
| `feast_e`, `feast_g` | `c.liturgy.epistle.citation`, `.gospel.citation`, or the lists `epistles`, `gospels` |
| `communion_verse` | `c.liturgy.communion_verse`, or `communion_verses` |
| zadostoinik fields | `c.liturgy.megalynarion_refrain`, `megalynarion` |
| `exapostilarion`, `aposticha_glory` (bulletin) | `c.matins.exapostilarion`; §3.3 |

### 3.5 Flags V1 typed and V2 derives

`has_great_doxology` = `matins.great_doxology_rubric` present. `has_polyeleos` =
`matins.megalynarion` or `sessional_polyeleos` present. `has_paroemias` =
`<v>.readings` present. `magnificat_sung` = no rubric suppressing it in Ode IX.
None is read by an assembler today; listed so they are not re-typed.

## 4. What the map exposed

1. **The dismissal needs a short name** ("Holy Apostle Andrew the First-called"),
   and V2 stores the printed title in capitals, sometimes two commemorations in
   one line. Options: (a) a `name` field per commemoration, hand-entered and
   checked against oca.org; (b) derive from the title by rule. (a) is safer and
   small. NEEDS BILL'S RULING.
2. **Theotokia and dogmatika not printed in the Menaion** are an Octoechos
   lookup. The Octoechos V2 adapter already serves them by tone; the Menaion
   adapter says WHICH is called for and from where.
3. **Pointing.** V1 stored pointed text in its own notation; V2 stores the St.
   Sergius asterisks verbatim. `normalizeSergius` already converts at render.
4. **Readings.** V1 strings ("Hebrews 9:1-7") become structured citations. The
   scripture viewer's resolver takes the structured form.
5. **Provisional ranks** (Q-0001, Q-0002, Q-0006) reach the Hours through the
   kontakion rule. The adapter marks them; the UI shows the mark.

## 5. Overlap dates (encoded in V2 for comparison)

One per shape. Chosen from V1's September and October:

| Date | Files | Shape | V1 rank | Vol. III |
|---|---|---|---|---|
| 09-27 | 09-27 | plain single saint | simple / 2A | none |
| 10-04 | 10-04, 10-04A | two services, both simple | 2A, 2A | none |
| 09-05 | files of the date | polyeleos, lessons, Litiya | polyeleos / 2E | `ods3-0905-wkd` |
| 09-06 | 09-06 | six stichera | 2C | none |
| 09-07 | 09-07 | forefeast | 2G1 | none |
| 09-08 | 09-08, 09-08A | Great Feast of the Theotokos; second service | great_feast / 2F | check index |

V1 has no date that falls back to the General Menaion; 11-29 covers that path.

**Encoded 14 November 2026**, whole files, all gates green: 09-05 (c0 six
stichera, c1 polyeleos), 09-06, 09-07, 09-08 (c0 Great Feast, c1 Kursk-Root
Icon), 09-27, 10-04 (c0, c1). `september.js` and `october.js` exist in V2 and
are in `MONTH_LOADERS`. The recurrence sweep (`recur.mjs`) has NOT been run on
these two months; only the within-file rows needed by the maps are registered.

### 5a. What the overlap encoding already showed (before any harness)

1. **V1 encoded only one file where a date has two.** 09-05: V1 holds 09-05A
   (polyeleos) and never 09-05 (six stichera). V2 holds both as c0 and c1, so
   on this date the service of the day is c1, not c0. "c0 by default" (ruling
   4) is therefore WRONG as a blanket rule: the default must follow
   `oca_primary`, which is true on 09-05 c1 and false on c0. NEEDS BILL.
2. **One rank word is used two ways.** A forefeast or afterfeast day with 3 + 3
   stichera and no doxology is `six_stichera` in V1 (09-07) and `simple` in the
   November V2 entries (11-20, 11-22, 11-23). Both sit under Fekula 2G1, so the
   section agrees and the Hours do not change; the word must be made one.
   09-07 follows V1 for now.
3. **One printed service, two ranks.** The Kursk-Root Icon service is printed
   twice, as 09-08A and 11-27A. V1 ranked it polyeleos; I had stored 11-27A as
   vigil. 09-08A follows V1. Q-0002.
4. **Pointing differs between print sites again**: 10-04 (Ode III kontakion
   unpointed at Matins, pointed at Liturgy) and 09-08 (kontakion's last phrase
   "*" at Ode VI, "**" at Liturgy). Six cases in all now. Ruling 3 (take the
   end-of-Vespers site) covers the troparion; the KONTAKION has no Vespers
   site. Proposed: the Hours take the Ode VI (or Ode III) site, Typica the
   Liturgy site.
5. **Two kontakia for one saint is common, not rare**: 09-27, 10-04, 11-28.
   V1 already carried both as kontakion_ode3 / kontakion_ode6 and
   `getKontakionForHour` already chooses between them. So ruling 5 can be
   replaced by "do what V1's rule does"; the harness will show what that is.
6. **Readings without a printed reference**: for the overlap dates the V2
   citation is V1's identification, marked `identified`.


Each difference found is classed: **expected** (V2 lifts bytes, V1 was typed),
**V1 error**, **V2 or adapter error**, or **for Bill**. Register: §4a, to be
written with the harness.

### 5b. What the OCA service texts show (read 14 November 2026)

Source: the OCA Department of Liturgical Music and Translations service texts
for 2026, on Bill's machine in `Orthodox Hours/OCA_service_texts/` (reference
only, like the Fekula volume; never in the repo). Twelve were read: 6, 8, 27
September; 4 October; 14, 15, 16, 21, 22, 25, 29, 30 November. They carry
Vespers and Liturgy propers (Matins too on the two Great Feasts), in the OCA's
own translation, so they check SELECTION and ORDER, not wording. Seven of the
twelve fall on a Sunday in 2026.

1. **Two files, one service.** On every two-file date covered, the OCA serves
   one service and is silent about the other: Philip (not Palamas), Hierotheus
   (not Paul the Simple), the Nativity of the Theotokos (not the Kursk Icon).
   Each is the FIRST file. No OCA text covers 5 September, the one date where
   vol. III and V1 take the second file.
2. **The Compline saints are not mentioned** (Eudoxius on 6 Sept; Acacius on 29
   Nov), consistent with their having no troparion or kontakion.
3. **The OCA often sings a different troparion or kontakion than the Menaion
   prints.** 4 Oct: OCA troparion "We the faithful all praise Hierotheus" (Tone
   1) where the Menaion prints a general hieromartyr troparion (Tone IV). 27
   Sept: OCA troparion Tone 3 and kontakion "Like stars you have shone" where
   the Menaion prints the general martyrs' troparion (Tone IV) and two other
   kontakia. 29 Nov: OCA gives Paramon a troparion and a kontakion (both Tone
   4); the Menaion prints NEITHER. 25 Nov: OCA sings a troparion of St. Clement
   alone ("O holy athlete") that the Menaion prints only in its Sunday
   appendix, with "O God of our fathers" as the alternative when Clement and
   Peter are kept together. This is the encoding_rule_v2.md 1 / 2.1 case: OCA
   overrides with a saint-specific proper. **V2 does not hold the OCA texts.**
   The adapter needs a place for them (as V1 had), or the Hours on those days
   read the Menaion's general text. NEEDS BILL.
4. **Which kontakion, when a saint has two.** 4 Oct: the OCA sings the Tone 8
   kontakion, which is the Menaion's ODE III one, not the Ode VI one.
5. **Philip's troparion (Q-0005).** The OCA service text prints the first
   (general) troparion; oca.org's saint page gives the "Ethiopia" one. The two
   OCA sources disagree.
6. **Apostles' rank (Q-0001).** Philip, Matthew and Andrew all get Great
   Vespers, lessons from 1 Peter, and a Litya "if the rector desires": the
   Polyeleos form with a Vigil optional. Nothing marks them Vigil.
7. **Vespers on a Sunday**: resurrection stichera, then the saint's; Glory of
   the saint; the DOGMATIKON in the tone of the week; aposticha of the
   resurrection with the saint's Glory and a theotokion in that tone;
   resurrectional dismissal theotokion in the tone of the last troparion.
   Exactly the Octoechos lookups section 3.3 assigns to the adapter.
8. **Lessons confirmed.** 21 Nov: Exodus 40:1-5, 9, 10, 16, 34-35; 3 Kings
   7:51, 8:1, 3-7, 9-11; Ezekiel 43:27-44:4, as identified. 8 Sept: Genesis
   28:10-17, Ezekiel (printed "43:2-44:4", presumably 43:27), Proverbs 9:1-11.
   The apostles' lessons: 1 Peter 1:1-2:6, 2:21-3:9, 4:1-11, as 11-30 prints.
9. **Short names** for the dismissal are on the title lines: "Holy and
   All-praised Apostle Philip", "Hieromartyr Hierotheus, Bishop of Athens",
   "Martyr Paramon and 370 Martyrs in Bithynia".

### 5c. The OCA hymns layer — PLAN (awaiting Bill's confirmation of the open points)

**What it is.** A separate dataset beside the Menaion capture, never mixed into
it: `src/data/oca_hymns/`. The Menaion V2 files stay a faithful copy of the St.
Sergius page; the OCA layer is a second witness the tool can prefer.

**Source and method.** The OCA `-tt` service texts carry Tier 3 director
pointing (encoding_rule_v2.md 3.2): one hymn line per paragraph, `//` printed
before the last line, stressed syllables UNDERLINED. An extractor reads the
docx XML and writes line breaks as ` | `, keeps `//`, wraps underlined runs in
`[brackets]` (merging `][`), exactly as the V1 precedent did (06-17, 10-04).
Text is lifted, never retyped; a gate re-extracts and byte-compares. The docx
files stay on Bill's machine.

**Shape (one record per hymn).**
`{ id, kind (troparion | kontakion | sticheron | theotokion | prokeimenon ...),
subject, tone, text, tier: 3, slot, src: { file, locus }, seen_in: [files] }`
keyed by the commemoration's Menaion date (`10-04`), or by tone for
resurrectional hymns (which belong to the Octoechos, not to a date). `slot`
names the place it fills (`troparion`, `kontakion`, `vespers.lic[2]`), so the
adapter can lay it over the Menaion text at that place.

**The toggle.** One setting, "Prefer OCA", remembered per reader. On: wherever
an OCA hymn exists for a slot it is shown, marked as OCA, with the Menaion text
one tap away. Off: the Menaion text. Where no OCA hymn exists the Menaion text
shows either way. Every element says which source it came from.

**Phases.** A: troparia and kontakia of the dated commemorations (what the
Hours and Typica read). B: the dated stichera, Glory and theotokia at Vespers.
C: resurrectional hymns by tone. D: the Tone Trainer reads the layer directly.

**Settled (Bill, 14 Nov).** The toggle is ON by default. Every document is
captured whole from the start: never a partial capture. The `^` mark is stored
as printed and stripped at display, and is open question Q-0007.

**Built (14 Nov).** Extractor, 45 documents captured, `slots.js` for the 12
shared dates, `index.js`, gate `tools/validate_oca_hymns.mjs`. Rule:
`encoding_rule_v2.md` 3.6. Not built: the toggle, and the adapter that lays an
OCA hymn over the Menaion text.

## 6. Adapter (`src/data/menaion_v2/adapter.js`) — PLAN

Pure functions over loaded month data; no React. `getDay(date)` returns
`{ encoded, services: [c0, c1...] }`. Per service: `identity()`, `hours()`
(troparia in order, kontakion by Fekula's rule for the section, fallback
resolved, provisional mark), `vespers()`, `typica()`, `dismissalName()`. Every
returned node carries `path` for the V2 reading-view deep link, as the
Octoechos adapter does.

### 6a. RULING (Bill, 14 Nov): rewrite the logic; no shims

The adapter returns PLANS in V2's own terms and the assemblers lay them in.
The V1-shaped function built first was a shim and is deleted. Reason: V1's
errors against the OCA texts came from the assembler calculating hymns by rule
without reading the page; V1's field names have no place for what the page
prints, so a V1-shaped entry would have carried the fault over.

A plan names, for each movable place, one of: printed here (the node);
rubric only (fetch from the Octoechos in the tone the rubric names); nothing
printed (the rule for the section applies). Selection logic lives in plain
modules under `src/lib/` so gates run the tool's own code; the 17,000-line
component only lays elements out.

Done on branch `v2-wirein`: the Hours (`hoursPlan`, `src/lib/hours-propers.js`).

### 6b. Size of the rest (measured 14 Nov)

| Part | Lines | Selection logic to rewrite |
|---|---|---|
| Hours | 628 | ~130 — DONE |
| Vespers | 1,920 | ~1,400: Lord I call ~500, Litiya ~190, Aposticha ~330, troparia ~200, rule helpers ~175 |
| Typica + `liturgy-propers.js` | 472 + 257 | ~100 — DONE |
| `liturgy-entrance.js` (Little Entrance, Beatitudes) | 493 | ~150 — DONE (`entrancePlan`; the tables by temple unchanged) |
| Dismissal | ~130 | ~30 (needs the short `name`) |
| Bulletin, audit, explainers, library | — | ~80 lines of field reads |

Vespers interleaves Pentecostarion, Sunday Octoechos and Menaion in the same
blocks, so its sections are restructured, not patched. The Pentecostarion
logic is carried over unchanged and marked as not reworked. The Sunday Vespers
and bulletin gates pin today's output; each change is listed with the OCA text
or Fekula section that justifies it.

What the Hours showed: see project_notes.md (forefeast and afterfeast days;
the Sunday kontakion wrong at every rank in V1; 11-23 feast troparion printed
with no tone; 11-24 three troparia of saints; 11-29 needs the General Menaion).

## 7. Gates — status

- BUILT `tools/test_menaion_v2_liturgy.mjs`: the Little Entrance order from the
  tool's own code against what the OCA prints "(at the Divine Liturgy)" on every
  shared date, with Prefer OCA on and off; every Beatitudes rubric read and its
  count checked against the troparia printed. KNOWN list with reasons.

- BUILT `tools/test_menaion_v2_hours.mjs`: every encoded service yields the
  Hours plan with and without the OCA layer; `--table` prints the per-date
  table. It reads the adapter, not yet the assembled Hours.
- BUILT (Hours fields only) `tools/compare_menaion_v1_v2.mjs`: V1 against V2
  on the overlap dates. Vespers and Typica to be added with their slices.
- BUILT `tools/validate_oca_hymns.mjs`.
- 25 November Hours checked against vol. III (`ods3-1125-wkd`).
- The existing V2 gates and the mount gate unchanged.

## 8. Switch and retirement — PLAN (on Bill's go)

1. Loader table reads V2; "not encoded" state in every consumer.
2. Service chooser where a date has more than one service.
3. Delete `src/data/menaion/*.js`, `menaion-browser.jsx`, the V1 editor adapter.
4. Re-baseline or retire the V1 gates listed in §2.
5. Version 0.53.0; release note; project notes.

## 9. Out of scope

Encoding the rest of the year; the Triodion; Sunday combination rules beyond
what the assemblers already do; the vol. III Hours bulk run (71 entries).
