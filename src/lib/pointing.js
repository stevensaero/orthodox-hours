// ── POINTING ENGINE (extracted from tone-trainer.jsx) ────────────────────────
// Pure sylls→roles logic: no React, no component state, no audio/score concerns.
// Extracted to a shared module so both the component AND tools/test_pointing_roles.mjs
// import the SAME implementation — no replicated copy to drift (the drift hazard that
// hid the Tone 2 Final pre-slur regression). The text→sylls parsing layer remains in
// the component for now (Pass 2 of this refactor).
//
// Exports: flatten(line), anchorIndex(flat), pointLine(line, phDefs, activeTone),
//          distribute(figure, count).

// Flatten a line into a per-syllable list with word context.
export function flatten(line) {
  const flat = [];
  line.words.forEach((w) =>
    w.sylls.forEach((s, si) =>
      flat.push({
        text: s.text,
        accent: s.accent,
        source: s.source,          // carries lexicon source for the toggle indicator
        single: w.sylls.length === 1,
        wordLast: si === w.sylls.length - 1,
      })
    )
  );
  return flat;
}

// CORRECTED ANCHOR RULE (Drillock & Ealy, Tone 1):
// The cadence begins on the last INTERNAL accent of the phrase. "Internal" means:
// if the final syllable is an accented one-syllable word (e.g. "Law", "saw",
// "Him", "Christ"), the cadence cannot launch on it, so it backs up to the
// previous accent. Trailing unaccented syllables after the anchor ride on the
// anchor's pitch until the final syllable.
export function anchorIndex(flat) {
  const acc = [];
  flat.forEach((s, i) => { if (s.accent) acc.push(i); });
  if (!acc.length) return Math.max(0, flat.length - 1);

  const lastIdx = flat.length - 1;
  let a = acc[acc.length - 1];

  // One-syllable-final-word backup: if the very last syllable is an accented
  // standalone monosyllable, step back to the previous accent (the last internal
  // accent), when one exists.
  const last = flat[lastIdx];
  if (a === lastIdx && last.single && last.accent && acc.length >= 2) {
    a = acc[acc.length - 2];
  }
  return a;
}

// pointLine: maps a line's syllables to roles (recite/inton/prep/cad/cad1/preslur).
// phDefs: the active tone's phrase definition table (e.g. PH_DEFS[1] or PH_DEFS[2]).
// Pass PH (the component-derived active table) when calling from inside the component.
//
// Tone 3 Final Phrase two-part cadence:
//   Part 1 (cad1): mi(H) do(Q) re(Q) — launches at anchor1 (first director mark)
//   Part 2 (cad):  mi(Q) fa(Q) re(H) do(W) — launches at anchor2 (second director mark)
// anchor1 = second-to-last stressed syllable (findFirstFinalAnchor); anchor2 = anchorIndex().
// Scope guard: activeTone===3 && phrase==='Final' && two accented syllables present.
// When guard is false, falls through to existing single-anchor logic unchanged.
export function pointLine(line, phDefs, activeTone) {
  const def = phDefs[line.phrase];
  const flat = flatten(line);

  // ── Tone 3 Final Phrase: two-part cadence (cad1 + cad) ──────────────────
  if (activeTone === 3 && line.phrase === "Final") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a2 = anchorIndex(flat); // anchor2 — unchanged, last internal accent
      // anchor1: second-to-last stressed syllable (same monosyllable backup as anchorIndex).
      const lastIdx = flat.length - 1;
      let a1 = acc[acc.length - 2];
      if (a1 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a1 = acc[acc.length - 3];
      if (a1 >= 0 && a1 < a2) {
        // Valid two-part split found.
        const body  = flat.slice(0, a1);
        const cad1  = flat.slice(a1, a2);
        const cad   = flat.slice(a2);
        const roles = [];
        // body → recite
        body.forEach((s) => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        // cad1 → distribute Part 1 figure [mi, do, re]
        const dist1 = distribute(["mi", "do", "re"], cad1.length);
        cad1.forEach((s, i) =>
          roles.push({ role: "cad1", pitches: dist1[i] || ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
        );
        // cad → distribute Part 2 figure (def.cad)
        const dist2 = distribute(def.cad, cad.length);
        cad.forEach((s, i) =>
          roles.push({ role: "cad", pitches: dist2[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
        );
        return roles;
      }
      // a1 not valid (same as a2, or >= a2) — fall through to single-anchor logic.
    }
  }

  // ── Tone 1 Phrase D: two-accent cadence (ti · do fills · re · do fills · ti) ──
  // Five structural positions driven by two director marks.
  // Primary anchor (ti, pos 1)   = first accented syllable in the line → cadence boundary.
  // Secondary anchor (re, pos 3) = last internal accented syllable (anchorIndex logic).
  // Fills between positions = do. Close = ti.
  // Fallback: if fewer than 2 accents, or secondary = close, fall through to distribute().
  if (activeTone === 1 && line.phrase === "D") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a1 = acc[0];                          // first accent → cadence boundary, ti
      const lastIdx = flat.length - 1;
      // secondary = last internal accent (not the close syllable)
      let a2 = acc[acc.length - 1];
      if (a2 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a2 = acc[acc.length - 2];
      // Valid split: a1 is before a2, and a2 is not the close
      if (a1 < a2 && a2 < lastIdx) {
        const body = flat.slice(0, a1);
        const cad  = flat.slice(a1);
        const roles = [];
        // body → recite
        body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        // secondary accent index within cad
        const secIdxInCad = a2 - a1;
        const cadLast = cad.length - 1;
        cad.forEach((s, i) => {
          let pitch;
          if (i === 0)               pitch = "ti"; // anchor pos 1
          else if (i < secIdxInCad)  pitch = "do"; // fills pos 2
          else if (i === secIdxInCad) pitch = "re"; // secondary pos 3
          else if (i < cadLast)      pitch = "do"; // fills pos 4
          else                       pitch = "ti"; // close pos 5
          roles.push({ role: "cad", pitches: [pitch], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 });
        });
        return roles;
      }
    }
    // Fallback: single accent or invalid split — distribute() as machine best-effort
  }

  // ── Tone 4 Phrase E: bracket-driven melisma segmentation ────────────────
  // Six-pitch cadence figure [do,re,mi,re,do,ti]. Unlike every other Tone 4
  // phrase, melisma placement here is NOT derivable from a generic
  // last-internal-accent search — it's driven by however many syllables
  // carry an EXPLICIT director bracket (TRUTH-mode accent, source==="truth")
  // within the phrase. Confirmed at 1 or 2 brackets; the director never
  // brackets three or more (confirmed directly by Bill, not inferred).
  // Zero-bracket lines fall through to the standard path below as an
  // honest best-effort — Director Pointing territory, same as any other
  // semantic-weight anchor case in this tool: getting an unbracketed line
  // to render correctly requires the encoder to add the bracket based on
  // their own reading of the score (confirmed directly against "to you,
  // all-praised Lady," which has no bracket in the source and whose
  // melisma placement is not derivable from the text alone).
  //
  // 1 bracket: the full 6-pitch figure compresses onto whatever syllables
  //   remain from the bracket to the end of the line, with ALL excess
  //   piling onto the bracketed syllable itself, remaining syllables one
  //   note each in sequence. Confirmed: "Apostles" (pos=5 notes, tles=1),
  //   "mediatrix" (a=3 notes, trix/of/life=1 each).
  // 2 brackets: fixed shape — bracket1 absorbs figure[0,1] as a melisma,
  //   the connecting syllable(s) absorb figure[2] (repeating if >1
  //   syllable falls between the brackets — untested), bracket2 absorbs
  //   figure[3,4], the trailing syllable(s) absorb figure[5] (repeating if
  //   >1 — untested). Confirmed twice independently ("when I call upon
  //   Thee!", "up[on] His [shoul]der"), both triggered by "upon" hitting
  //   the same connecting-syllable shape. NOTE: if the two brackets are
  //   immediately adjacent (zero connecting syllables) or the second
  //   bracket is the line's last syllable (zero trailing syllables),
  //   figure[2] or figure[5] respectively would not be emitted by any
  //   syllable — never observed, not handled specially, flagged here
  //   rather than silently accepted.
  // 3+ brackets: falls through to plain distribute() on the full figure —
  //   never observed, not confirmed, same honest-fallback convention as
  //   Tone 1 Phrase D's own untested-case handling above.
  if (activeTone === 4 && line.phrase === "E") {
    const bracketIdxs = flat
      .map((s, i) => (s.accent && s.source === "truth") ? i : -1)
      .filter(i => i >= 0);
    const figure = def.cad; // [do,re,mi,re,do,ti]

    if (bracketIdxs.length === 1) {
      const bStart = bracketIdxs[0];
      const body = flat.slice(0, bStart);
      const cad = flat.slice(bStart);
      const roles = [];
      body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
      const excess = Math.max(0, figure.length - cad.length);
      cad.forEach((s, i) => {
        const pitches = (i === 0) ? figure.slice(0, 1 + excess) : [figure[i + excess]];
        roles.push({ role: "cad", pitches, accent: s.accent, text: s.text, source: s.source, anchor: i === 0 });
      });
      return roles;
    }

    if (bracketIdxs.length === 2) {
      const [b1, b2] = bracketIdxs;
      const body = flat.slice(0, b1);
      const between = flat.slice(b1 + 1, b2);
      const after = flat.slice(b2 + 1);
      const roles = [];
      body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
      roles.push({ role: "cad", pitches: [figure[0], figure[1]], accent: flat[b1].accent, text: flat[b1].text, source: flat[b1].source, anchor: true });
      between.forEach(s => roles.push({ role: "cad", pitches: [figure[2]], accent: s.accent, text: s.text, source: s.source }));
      roles.push({ role: "cad", pitches: [figure[3], figure[4]], accent: flat[b2].accent, text: flat[b2].text, source: flat[b2].source });
      after.forEach(s => roles.push({ role: "cad", pitches: [figure[5]], accent: s.accent, text: s.text, source: s.source }));
      return roles;
    }
    // 0 or 3+ brackets — fall through to standard single-anchor logic below.
  }

  // ── Tone 4 Phrase C: variable-length stepping intonation ────────────────
  // Structure: [prep: do×(n-1), re×1 immediately before accent] → mi(H)
  // accent → [mi(Q) extension if one extra unaccented syllable follows] →
  // re(Q) closing the intonation → reciting body (do×0+) → cadence (shared
  // distribute(), same cad figure as Phrase B, confirmed identical).
  // Prep rule confirmed at 1/2/3 preps: re; do,re; do,do,re. Mi-extension
  // confirmed to fire when exactly one extra unaccented syllable sits
  // between the accent and the closing re; capped at one extension here —
  // never observed beyond that, not confirmed past it.
  // Cadence launch: found via anchorIndex() applied to the REMAINDER of the
  // line after the intonation's closing re — reuses the same standard
  // single-anchor search used everywhere else in this tone, per the
  // tone-isolation approach (share only where the shared logic already
  // fits; the intonation itself does not, so it gets this dedicated block).
  if (activeTone === 4 && line.phrase === "C") {
    const firstAcc = flat.findIndex(s => s.accent);
    if (firstAcc >= 0) {
      const roles = [];
      const preps = flat.slice(0, firstAcc);
      preps.forEach((s, i) => {
        const pitch = (i === preps.length - 1) ? "re" : "do";
        roles.push({ role: "prep", pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
      });
      roles.push({ role: "inton", pitches: ["mi"], accent: flat[firstAcc].accent, text: flat[firstAcc].text, source: flat[firstAcc].source });

      // Intonation tail: always exactly 1 syllable (the closing re), not a
      // variable 1-or-2 as an earlier draft assumed. Both real, complete
      // verse examples with an actual cadence ("and when they saw...
      // heaven," "[Lord], I call upon Thee...[hear] me!") show exactly one
      // tail syllable. A 2-syllable tail with an mi-extension DOES appear in
      // the tutorial's own short generic teaching snippets ("held in your
      // arms," "through the abundance of goodness"), but no rule for when it
      // fires held up under testing (see tone_trainer_tone4_analysis.md,
      // Phrase C section) — it isn't tied to word boundaries, syllable
      // count, or any bracket we could find, and would require already
      // knowing where the reciting body starts to even check, which is
      // circular. Rather than encode an unproven "sometimes 2" rule that
      // could silently misfire on a real verse, this is deliberately scoped
      // to the confirmed case only. KNOWN GAP, not an oversight: if a real
      // verse is ever found needing the 2-syllable tail, this needs
      // revisiting — flagged here for exactly that future session.
      const afterAccent = flat.slice(firstAcc + 1);
      const tailLen = Math.min(1, afterAccent.length);
      const tail = afterAccent.slice(0, tailLen);
      const rest = afterAccent.slice(tailLen);

      tail.forEach((s) => {
        roles.push({ role: "inton", pitches: ["re"], accent: s.accent, text: s.text, source: s.source });
      });

      // Cadence only exists if a genuine director-bracketed accent appears
      // in "rest" — confirmed this session: short Phrase C snippets with no
      // further bracket are plain reciting tone with NO cadence at all (the
      // second major correction to this document's Phrase C model). Using
      // anchorIndex()'s generic no-accent fallback here would incorrectly
      // treat the last reciting syllable as a 1-syllable cadence anchor —
      // caught by direct testing against "held in your | arms" during
      // implementation, not assumed to be safe.
      const hasBracket = rest.some(s => s.accent && s.source === "truth");
      let body, cad;
      if (hasBracket) {
        const a = anchorIndex(rest);
        body = rest.slice(0, a);
        cad = rest.slice(a);
      } else {
        body = rest;
        cad = [];
      }
      body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
      const dist = distribute(def.cad, cad.length);
      cad.forEach((s, i) =>
        roles.push({ role: "cad", pitches: dist[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
      );
      return roles;
    }
    // No accent at all — degenerate case, not observed. Falls through.
  }

  // ── Tone 4 Final Phrase: fixed two-note descending prep ─────────────────
  // Standard prep mechanism only supports one pitch; this phrase needs two
  // (do, ti — descending, confirmed directly against the tutorial's own
  // printed "ascending," which Bill confirmed is an error in the source
  // text itself). Cadence (do,ti,la) reuses the shared distribute() exactly
  // like every other phrase in this tone — only the prep needed dedicated
  // handling.
  //
  // CORRECTED (bug caught by Bill against the live tool's actual rendering,
  // not just code review): the pre-cadence content has THREE conceptual
  // positions, not two — the reciting-to-prep transition (re) plus the two
  // fixed prep notes (do, ti). An earlier version of this guard only ever
  // peeled the LAST 2 body syllables into the fixed prep pair and treated
  // anything shorter as a lazy "ti alone" fallback, which silently dropped
  // both the re and the do whenever fewer than 2 syllables existed before
  // the anchor. Confirmed wrong directly against "[Hear] [me], O Lord!" —
  // with only "Hear" available before the anchor ("me"), the real score
  // compresses ALL THREE positions onto that one syllable as a melisma
  // (re·do·ti), not just "ti" alone. Fixed using the same melisma-
  // compression principle already used for Phrase E's single-bracket case:
  // when fewer than 3 syllables are available, the earliest one(s) absorb
  // the excess from the front of the [re,do,ti] figure.
  if (activeTone === 4 && line.phrase === "Final") {
    const a = anchorIndex(flat);
    const body = flat.slice(0, a);
    const cad = flat.slice(a);
    const roles = [];

    const PREFIG = ["re", "do", "ti"];
    if (body.length >= 3) {
      // Confirmed shape for every 3+-syllable example: earliest syllables
      // are plain reciting (re each), last two are the fixed prep pair.
      const reciteBody = body.slice(0, body.length - 2);
      const prep = body.slice(body.length - 2);
      reciteBody.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
      prep.forEach((s, i) => {
        const pitch = i === 0 ? "do" : "ti";
        roles.push({ role: "prep", pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
      });
    } else {
      // Fewer than 3 syllables before the anchor: melisma-compress the full
      // [re,do,ti] figure, excess piling onto the earliest syllable.
      // Confirmed at body.length===1 ("[Hear] [me], O Lord!" → re·do·ti on
      // "Hear"). body.length===2 is an untested extrapolation of the same
      // principle, not independently confirmed.
      const excess = Math.max(0, PREFIG.length - body.length);
      body.forEach((s, i) => {
        const pitches = (i === 0) ? PREFIG.slice(0, 1 + excess) : [PREFIG[i + excess]];
        roles.push({ role: "prep", pitches, accent: s.accent, text: s.text, source: s.source });
      });
    }

    const dist = distribute(def.cad, cad.length);
    cad.forEach((s, i) =>
      roles.push({ role: "cad", pitches: dist[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
    );
    return roles;
  }

  // ── Tone 1 Phrase A: anchor-driven cadence boundary ─────────────────────
  // Phrase A: recite(re) · inton(re·H) · ... · prep(ti) · cad(do)+
  // Structure:
  //   - Intonation = first accented syllable (forward pass, body only)
  //   - Anchor     = anchorIndex() — last internal accent (backward pass)
  //   - IF anchor === intonation (director only marked the intonation, not the
  //     cadence): fall back to last syllable as cad, second-to-last as prep.
  //     Rationale: director marks intonation with bracket; cadence anchor is
  //     structurally always the last stressed word — but in TRUTH mode the
  //     director doesn't re-mark it. When both passes land on the same syllable,
  //     the anchor is unknowable from director marks alone; use positional fallback.
  //   - IF anchor ≠ intonation: anchor IS the cadence start (director marked both)
  //   - Prep  = syllable immediately before cadence start → ti
  //   - Cad   = cadence start + all remaining syllables → all do
  // Score examples:
  //   "Let my [prayer] arise" → 1 accent (prayer=inton); anchor falls back to
  //     last syll (rise); prep=a, cad=[rise] ✅
  //   "[Lord]..Thee,[hear]me!" → 2 accents (Lord=inton, hear=anchor≠inton);
  //     prep=Thee, cad=[hear,me!] ✅
  //   "when I [call] up[on] Thee!//" → 2 accents (call=inton, on=anchor≠inton);
  //     prep=up, cad=[on,Thee!] ✅
  if (activeTone === 1 && line.phrase === "A" && flat.length >= 2) {
    const a        = anchorIndex(flat);   // last internal accent (backward pass)
    const firstAcc = flat.findIndex(s => s.accent); // intonation candidate (forward pass)
    const roles    = [];

    // Determine cadence start:
    // If anchor === intonation (or no accent at all), director only marked the
    // intonation — fall back to positional: cad starts at last syllable,
    // prep at second-to-last.
    const cadStart = (firstAcc === -1 || a === firstAcc)
      ? flat.length - 1   // positional fallback
      : a;                // anchor is distinct from intonation — use it

    const prepIdx = cadStart - 1;

    if (prepIdx < 0) {
      // Degenerate: no room for prep — fall through to standard logic
    } else {
      const body  = flat.slice(0, prepIdx);
      const prepS = flat[prepIdx];
      const cad   = flat.slice(cadStart);

      // Intonation = last accented body syllable, fallback to body[0]
      const bodyAccIdxs = body.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
      const intonIdx = bodyAccIdxs.length > 0
        ? bodyAccIdxs[bodyAccIdxs.length - 1]
        : (body.length > 0 ? 0 : -1);

      body.forEach((s, i) => {
        const role = (i === intonIdx) ? "inton" : "recite";
        roles.push({ role, pitches: [def.recite], accent: s.accent, text: s.text, source: s.source });
      });

      // prep → ti (one syllable before cadence anchor)
      roles.push({ role: "prep", pitches: [def.prep], accent: prepS.accent, text: prepS.text, source: prepS.source });

      // cadence → all syllables from anchor onwards, all on do
      // First syllable is anchor; remaining syllables are fills/close, also do
      cad.forEach((s, i) =>
        roles.push({ role: "cad", pitches: ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
      );
      return roles;
    }
  }

  // ── Standard single-anchor logic (all other tones/phrases) ──────────────
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  // Pre-slur detection. If the phrase has a prep note AND the syllable immediately
  // before the cadence anchor is a single accented monosyllable, that syllable gets
  // role="preslur" with pitches [recite, prep] (re→ti for Tone 2 Final). It leans the
  // reciting tone into the prep on one word; the prep is the second note of the melisma.
  // SCOPED to Tone 2 Final (prime directive). The generic standard-path guard was
  // removed when Tone 1 Phrase A's (unsupported) pre-slur was removed; Tone 2 Final
  // depends on it and has no dedicated early-return block, so it regressed to a lone
  // prep ti. Downstream (lineToNotes + lineToRolesWithDuration, both) already expand the
  // preslur role to re(H·)·ti(Q) when no reciting tone precedes; this just re-emits it.
  // Tone 1 Phrase A has a dedicated path above that returns before reaching here.
  let preslurIdx = -1;
  if (activeTone === 2 && line.phrase === "Final" && def.prep && body.length >= 1) {
    const cand = body[body.length - 1];
    if (cand?.accent && cand?.single) preslurIdx = body.length - 1;
  }

  // For phrases with intonation, find the first accented body syllable.
  // That syllable is the tutorial's intonation half note (role="inton", accent=true → H).
  // Unaccented syllables before it are lead-ins on the same pitch (role="recite" → Q).
  // Fallback: if no accented body syllable exists, body[0] gets the inton role.
  const intonIdx = def.inton
    ? (body.findIndex(s => s.accent) >= 0 ? body.findIndex(s => s.accent) : 0)
    : -1;

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (def.inton && i === intonIdx) role = "inton";
    // Pre-slur fires on the body syllable just before prep; its pitches are [recite, prep].
    if (preslurIdx >= 0 && i === preslurIdx) {
      role = "preslur";
      roles.push({ role, pitches: [def.recite, def.prep], accent: s.accent, text: s.text, source: s.source });
      return;
    }
    if (def.prep && i === body.length - 1 && preslurIdx < 0) { role = "prep"; pitch = def.prep; }
    roles.push({ role, pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
  });

  const dist = distribute(def.cad, cad.length);
  cad.forEach((s, i) =>
    roles.push({
      role: "cad",
      pitches: dist[i] || [def.cad[def.cad.length - 1]],
      accent: s.accent,
      text: s.text,
      source: s.source,
      anchor: i === 0,
      // wordBoundary: true when this syllable is the last syllable of its word.
      // Drives whole note triggers for Tone 2 Phrases B, C, D.
      // A syllable is a word boundary when the next cad syllable belongs to a
      // different word — detected by checking whether the current syllable ends
      // the word (no hyphen suffix) or the next begins a new word (capitalised
      // or preceded by space in source text).
      wordBoundary: (i === cad.length - 1) ||
        (!s.text.endsWith("-") && !s.source?.endsWith("-")),
    })
  );
  return roles;
}

// Distribute a cadence pitch figure across the cadence syllables.
// Per the tutorial score and OCA recording analysis:
// - The anchor always carries the first (held) note of the figure.
// - When count == n: one note per syllable.
// - When count > n: first and last syllables get their notes; middle syllables
//   repeat the penultimate note to fill gaps.
// - When count < n: take the first `count` notes of the figure sequentially —
//   the trailing notes of the figure simply don't appear. Verified from the OCA
//   Tone 1 unison recording: Phrase D "this·is·He·Who·spoke·in·the·Proph·ets"
//   shows cadence in·the·Proph·ets = ti·do·re·do (4 notes for 4 syllables,
//   the final ti of the 5-note figure belongs to the next phrase, not this one).
export function distribute(figure, count) {
  const n = figure.length;
  if (count <= 1) return [figure.slice()];         // one syllable carries the whole figure
  if (count === n) return figure.map((f) => [f]);   // one note per syllable — exact fit
  if (count > n) {                                  // more syllables than notes
    const out = [[figure[0]]];
    const mid = figure.slice(1, n - 1);
    const ms = count - 2;
    for (let i = 0; i < ms; i++) out.push([mid[i] ?? figure[Math.max(0, n - 2)]]);
    out.push([figure[n - 1]]);
    return out;
  }
  // count < n: take the first `count` notes sequentially — one per syllable.
  // Trailing notes of the figure are unused (they belong to the next phrase).
  return figure.slice(0, count).map((f) => [f]);
}
