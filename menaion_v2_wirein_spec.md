# Menaion V2 wire-in and V1 retirement — spec

Opened 14 November 2026. Pattern: `octoechos_wirein_spec.md` (the July cutover).
Status: **§§1-4 written (slot map); §5 overlap dates in progress; §§6-9 are the
plan and await Bill's confirmation before any assembler code changes.**

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

Each difference found is classed: **expected** (V2 lifts bytes, V1 was typed),
**V1 error**, **V2 or adapter error**, or **for Bill**. Register: §4a, to be
written with the harness.

## 6. Adapter (`src/data/menaion_v2/adapter.js`) — PLAN

Pure functions over loaded month data; no React. `getDay(date)` returns
`{ encoded, services: [c0, c1...] }`. Per service: `identity()`, `hours()`
(troparia in order, kontakion by Fekula's rule for the section, fallback
resolved, provisional mark), `vespers()`, `typica()`, `dismissalName()`. Every
returned node carries `path` for the V2 reading-view deep link, as the
Octoechos adapter does.

## 7. Gates — PLAN

- `tools/test_menaion_v2_hours.mjs`: every encoded date assembles all four Hours
  with no gap; prints the per-date table for Bill.
- `tools/compare_menaion_v1_v2.mjs`: assembles Hours, Vespers and Typica from
  both datasets on the overlap dates and reports differences by class.
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
