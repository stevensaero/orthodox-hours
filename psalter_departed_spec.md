# Psalter — Service of the Psalter & "For the Departed" Mode (Spec)

**Status:** Spec / pre-implementation. No code written yet.
**Phase:** 1 (depends on Phase 0 refactor below).
**Source authority for this rite:** *A Psalter for Prayer* (Holy Trinity Monastery,
Jordanville). Psalm verses retain their existing Brenton LXX attribution.

---

## 1. Premise & architecture decision

The standalone `psalter.jsx` was always intended as a **data / truthing viewer**.
The Service of the Psalter for the Departed is an **assembly**: a fixed skeleton of
prayers + movable parts + rubrical citations — which is exactly what the hours-tool
already does. After working through the options, the decision is:

- **Leave the standalone psalter as a pure data viewer.** Behavior unchanged. No
  departed toggle is added to the standalone app.
- **Build a proper "Service of the Psalter" inside the hours-tool**, with a normal
  reading mode and a "For the Departed" mode.
- The standalone app and the new service **both consume the same extracted data**.

### Why the hours-tool, not a standalone toggle
The deciding factor is the *Rule of the Holy Fathers* (Typicon Ch. 17, Phase 2):
once **which kathismata you read** is itself calendar-driven, the centre of gravity
moves to the date engine — and that engine (`computePascha`, Pascha-offset logic,
seasonal anchors) already lives in the hours-tool. Rebuilding it in a
date-independent viewer would duplicate exactly the machinery we already have. The
hours-tool also assembles the **proper beginning** from the date for free (O Heavenly
King vs. Christ is Risen vs. bare Trisagion), with no season selector and no
"render-default-plus-note" crutch.

---

## 2. Phase 0 — prerequisite refactor

Extract the psalm data out of the rendering component, matching the
`menaion/ • pentecostarion.js • octoechos/` convention:

- Create `src/data/psalter.js` exporting `PSALMS` and `KATHISMA_MAP` (and the small
  `getPsalmRange` helper if convenient).
- `src/components/psalter.jsx` becomes a thin viewer importing from `src/data/psalter.js`.
  **Standalone behavior must be byte-for-byte unchanged** (it stays the truther).
- Consider lazy-loading `psalter.jsx` to match the other browsers (optional, not required).

This refactor is small, safe, independently worthwhile, and unblocks Phase 1 and Phase 2.

---

## 3. The four parameters

The rite is parameterized by the departed person and the ministerial context — **not
by the calendar** (the reading is continuous):

1. **Name** (`N.`) — text input, default `N.`
2. **Gender** — masculine (servant / him / his / he) vs. feminine (handmaiden / her / her / she).
3. **Orthodox / Non-Orthodox** — governs the two long prayers (see §6).
4. **Priest present / Reader (no priest)** — **reuse the tool's existing priest/reader
   toggle**, already wired to Fekula §10. Governs only the genuinely clergy-conditional
   elements (opening exclamation, Lord's Prayer ending, the end-of-Psalter conclusion form).

All other material (Tone VI troparia, LHM ×40, the pre-reading prayer, O come, and the
entire departed-rite divider/conclusion material) is **common to both priest and reader**.
Decision (confirmed): the troparia are read in both cases — at the lectern the reader
says them whether or not a priest is present; parish practice is most often a reader
reading over the departed or the general laity.

---

## 4. The assembled beginning (pp. 33–35)

Decision (confirmed): the parish uses the hours-tool's already-encoded ordinary
beginning; two different wordings of the same prayer in one tool would confuse readers.
**Rule: same prayer / different wording → reuse what is already encoded. Genuinely new
Psalter-specific parts → append from Jordanville.**

Verified against the code:
- Opening exclamations are already encoded — "Blessed is our God…" (priest) and
  "Through the prayers of our holy fathers…" (reader).
- The three Jordanville parts (Tone VI troparia, LHM ×40, the pre-reading prayer) are
  confirmed **absent** → they are appended.

Assembled order:

| # | Element | Provenance | Source label on badge |
|---|---------|------------|------------------------|
| 1 | Opening exclamation (priest / reader branch) | **reuse** | HTM / Fekula §10 |
| 2 | O Heavenly King (+ Paschal/Ascension handling — date-driven in the service) | **reuse** | HTM |
| 3 | Trisagion → O Most Holy Trinity → Glory/Both now → Lord's Prayer | **reuse** | HTM |
| 4 | Lord's Prayer ending (For Thine is the kingdom / reader substitute) | **reuse** | HTM / Fekula §10 |
| 5 | **Tone VI troparia** (Have mercy upon us / the Prophet troparion / the Theotokion) | **new** | *A Psalter for Prayer*, pp. 33–35 |
| 6 | **Lord have mercy ×40 + prostrations** | **new** | *A Psalter for Prayer*, pp. 33–35 |
| 7 | **Most Holy Trinity, God and Creator of the whole world** (pre-reading prayer) | **new** | *A Psalter for Prayer*, pp. 33–35 |
| 8 | O come, let us worship (×3) | **reuse** | HTM |
| 9 | Rubric ("Stand a while…, then Psalm 1") | **new** | *A Psalter for Prayer*, pp. 33–35 |

**Attribution rule:** reused spine keeps its existing HTM / §10 labels; the three new
parts cite *A Psalter for Prayer* (Jordanville). This gives readers the single
consistent wording they already pray while keeping the teaching badges truthful.

**Paschal/Ascension handling:** date-driven in the service (no selector). The existing
machinery yields O Heavenly King, or Christ is Risen (Pascha→Ascension), or the bare
Trisagion (Ascension→Pentecost) for the date.

### New text — Tone VI troparia (append)
> Have mercy upon us, O God, have mercy upon us; for at a loss for any defense, this
> prayer do we sinners offer unto Thee, as Master: have mercy upon us!
>
> *Glory…* The Church hath shown forth the honored feast of Thy prophet, O Lord, to be
> as heaven, for thereon the angels join chorus with men. Through his prayers, O Christ
> God, guide our life in peace, that we may sing unto Thee: Alleluia!
>
> *Both now…* Unto thee have I fled, O pure Theotokos, in need of salvation from the
> many multitudes of my transgressions. Visit thou my suffering soul, and entreat thy
> Son and our God, that He grant me remission of the evil things I have done, O thou
> who alone art blessed.

Then **Lord, have mercy [40]**, with as many prostrations as one is able.

### New text — pre-reading prayer (append)
> Most Holy Trinity, God and Creator of the whole world, come and direct my heart to
> begin with understanding and to end with good works this divinely inspired book,
> which the Holy Spirit uttered through the lips of David… (full text per pp. 33–35;
> to be transcribed verbatim at encoding time).

---

## 5. Per-kathisma departed-rite structure (pp. 320–323)

Each kathisma has three stases. In departed mode:

**After the 1st and 2nd stasis:** the first Glory as printed, Alleluia ×3, Lord have
mercy ×3 — but **in place of the second Glory**, this prayer **×3** (bow at each line):

> Remember, O Lord, the soul of Thy departed servant [handmaiden], N. *(Bow)*
> Have mercy upon him [her], for whatever sins [s]he hath humanly committed, as Thou
> art a God Who lovest mankind. *(Bow)*
> Deliver him [her] from eternal torment. *(Bow)*
> Make him [her] a sharer of the Kingdom of Heaven. *(Bow)*
> And do what is profitable for his [her] soul. *(Bow)*

**After the 3rd stasis (kathisma end):** Trisagion → Lord's Prayer (as usual), then in
place of the printed troparia/prayer, four troparia in **Tone IV**:

> 1. With the souls of the righteous that have finished their course, give rest, O
>    Savior, to the soul of Thy servant [handmaiden], keeping it in the blessed life
>    which is with Thee, O Lover of mankind.
> 2. In the place of Thy rest, O Lord, where all Thy saints repose, give rest also to
>    the soul of Thy servant [handmaiden], for Thou alone art the Lover of mankind.
> *Glory…* 3. Thou art the God Who descended into hell and loosed the chains of the
>    captives; do Thou Thyself give rest also to the soul of Thy servant [handmaiden].
> *Both now…* 4. O only pure and immaculate Virgin, who without seed gavest birth unto
>    God, pray that his [her] soul be saved.

Then **Lord, have mercy [40]**, and the long prayer:

> Remember, O Lord our God, Thy servant [handmaiden] who hath departed in the faith and
> hope of eternal life, our brother [sister], N., and, as Thou art good and lovest
> mankind, pardon his [her] sins and consume his [her] unrighteousness; release, remit
> and forgive all his [her] sins, voluntary and involuntary. Deliver him [her] from
> eternal torment and from the fire of Gehenna, and grant unto him [her] participation
> and enjoyment of Thine eternal blessings, prepared for them that love Thee. For if
> [s]he sinned, yet [s]he did not renounce Thee and believed undoubtingly in Thee as
> God: the Father, the Son, and the Holy Spirit, glorified in Trinity, and confessed
> the Unity in Trinity and the Trinity in Unity in Orthodox fashion, even until his
> [her] last breath. Therefore, be merciful unto him [her], and impute his [her] faith
> in Thee instead of deeds and, as One gracious, grant unto him [her] rest with Thy
> saints. For there is no man who liveth and sinneth not, and Thou, alone, art without
> sin, and Thy righteousness is righteousness forever. For Thou alone art a God of mercy
> and compassion, and unto Thee do we ascribe glory, to the Father, and to the Son, and
> to the Holy Spirit; now, and ever, and unto the ages of ages. Amen.

**Between kathismata:** "O come, let us worship…" then the next kathisma. (Maps to the
kathisma navigation in the service.)

---

## 6. Non-Orthodox substitutions

Decision (confirmed): the **short thrice-prayer after stases 1 & 2 is left intact** for
a non-Orthodox departed — the footnotes are silent on it, so the substitution does not
reach it (spirit of the text).

For a non-Orthodox departed, the **long kathisma-end prayer** ("Remember, O Lord our
God…") is replaced by this prayer, **×3** (bow at each line):

> Remember, O Lord, if it is possible, the soul of Thy servant [handmaiden], N. *(Bow)*
> departed to eternal life in separation from Thy holy Orthodox Church. *(Bow)*
> Unsearchable are Thy judgments. *(Bow)*
> Account not this my prayer as sin. *(Bow)*
> But may Thy holy will be done. *(Bow)*

**⚠ OPEN — footnote scope discrepancy.** Footnote 1 (at the kathisma-end) says replace
*the prayer* only. Footnote 2 (in the conclusion section) says replace *the prayer
**and its accompanying troparia***. Working assumption pending Bill's read of the
physical book: for non-Orthodox, replace **both the four Tone IV troparia and the long
prayer** with "if it is possible…" ×3. The end-of-Psalter conclusion's own dismissal/
memorial prayers (§7) are treated as **unchanged** for non-Orthodox unless confirmed
otherwise. **Confirm against the book before encoding.**

---

## 7. End-of-Psalter conclusion (pp. 322–323)

Branches on the priest/reader toggle.

**Priest present:**
- "It is truly meet…" *(Prostration)*
- Priest: "Glory to Thee, O Christ God, our hope, glory to Thee."
- Choir/Reader: Glory… Both now… Amen. Lord, have mercy *(thrice)*. Father, bless.
- Priest: "O Christ our true God, Who didst rise from the dead… commend Thou the soul of
  Thy servant [handmaiden], N., who hath departed from us, to the habitations of the
  righteous; grant him [her] rest in the bosom of Abraham, number him [her] with the
  righteous, and have mercy upon us, for Thou art good and lovest mankind."
- Choir: Amen.
- Priest (or deacon): "In a blessed falling asleep, grant, O Lord, eternal rest unto Thy
  departed servant [handmaiden], N., and make his [her] memory to be eternal."
- Choir: "Eternal memory!" *(thrice)*

**Reader / layman (no priest):**
- "It is truly meet…" *(Prostration)*
- Glory… Both now… Amen. Lord, have mercy *(thrice)*. Bless, O Lord.
- "O Lord Jesus Christ, through the prayers of Thy most pure Mother, of our holy
  venerable and God-bearing fathers, and of all the saints, have mercy and grant rest
  unto the soul of Thy departed servant [handmaiden], N., unto unceasing ages, for Thou
  art good and lovest mankind. Amen."
- Proclaimed *(thrice)*: "To the servant [handmaiden] of God, N., Eternal memory!"
- Choir/reader: "Eternal memory!" *(thrice)*

---

## 8. Date behavior (the clean rule)

- **The date drives the beginning in BOTH modes** (proper opening for the day).
- **The date drives kathisma distribution only in NORMAL mode** (Phase 2, Rule of the
  Holy Fathers).
- **Departed mode walks all 20 kathismata in sequence, continuously, regardless of the
  day** — per the rite (continuous reading from the departure of the soul until burial,
  and in memory after).

---

## 9. Rendering (structural requirement, not a nicety)

This service spans **20 kathismata** — far larger than Vespers or Typica, which render
a single assembled element list. Therefore:

- **Paged, per-kathisma rendering** (lazy-loaded via dynamic import, the
  `_menaionLoaders` pattern; pulling 150 psalms eagerly into the ~10k-line tool would
  wreck the initial bundle).
- A **kathisma tracker** (the ServiceOutline pattern, generalized) showing the opening,
  all 20 kathismata, and the conclusion, tracking current position.
- **Resume across visits** (localStorage in the deployed app) is pastorally apt for a
  continuous reading — candidate for v1.1, not required for v1.

This per-kathisma paging is a **genuinely new pattern** in the hours-tool and is the
main design risk to get right.

---

## 10. Pastoral guidance to surface (p. 320)

- The Psalter is read over the body of a departed deacon, monastic, or layperson. **For
  departed priests and bishops, the Four Gospels are read — not the Psalter.**
- Read **standing, from a lectern at the west end of the coffin**, the coffin placed so
  the **feet of the departed are to the east**.
- Read **continuously**, except during a Pannykhida or Litia.
- From the conclusion of the Rite Following the Departure of the Soul from the Body
  until burial, and in memory after burial.
- **Any pious layperson may read**; doing so is a good work.

---

## 11. Open items
- **§6 footnote scope:** do the Tone IV troparia get replaced for non-Orthodox (footnote
  2), or only the long prayer (footnote 1)? Confirm against the physical book.
- **Conclusion under non-Orthodox:** confirm the dismissal/memorial prayers in §7 are
  unchanged.
- Transcribe the full "Most Holy Trinity, God and Creator…" pre-reading prayer verbatim
  at encoding time.
- Confirm placement/UX of the four-parameter input panel and the pastoral-guidance
  disclosure within the service.

---

## 12. Provenance
- Beginning: *A Psalter for Prayer* (Jordanville), pp. 33–35 — "Prayers Before Reading
  the Psalter."
- Departed rite: same volume, pp. 320–323 — "Reading the Psalter for the Departed."
- Reused beginning spine: hours-tool HTM constants / Fekula §10.
- Psalm verses: Brenton LXX (existing data).
