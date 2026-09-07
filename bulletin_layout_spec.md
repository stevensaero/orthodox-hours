# Paginating to a Printed Page

**How the bulletin computes its own line budget and flows into pages.**
Written September 2026, against tool v0.46.4. The working code is
`src/lib/bulletin-metrics.js`, `src/lib/bulletin-layout.js`,
`src/lib/bulletin-css.js` and `src/components/bulletin.jsx`; the tests are
`tools/test_bulletin_layout.mjs`.

This is a reference for the next time something has to fit a fixed page. It is
written to be read by someone who has forgotten all of this, so it explains the
reasoning and the dead ends as well as the result. The dead ends are the useful
part: every one of them looked correct while being wrong.

---

## 1. The problem, stated honestly

A liturgical day has a variable amount of text. A page does not vary. Some days
carry three troparia, some carry eleven, plus stichera, an aposticha
doxasticon, an exapostilarion, and up to four full scripture readings.

The naive approach — hand it to CSS `column-count: 2` and let the browser
balance — fails in four specific ways:

1. **It breaks wherever it lands.** Mid-troparion, mid-verse, across a page turn
   with no notice. A choir turning a page in the middle of a sung unit is a
   liturgical problem, not a typographic preference.
2. **It cannot be asked anything in advance.** There is no way to answer "will
   this day fit" without rendering it and looking. That makes every day an
   experiment.
3. **It gives no way to annotate a break.** You cannot say "continued on page 3"
   if you do not know where the break will be until after it has happened.
4. **Its failures are silent.** A sheet that overruns by one line produces a
   second, nearly blank page. Nothing errors. Nobody notices until it is
   photocopied ninety times.

Point 4 is the theme of this document. **Every failure in this subsystem has
been silent.** None of them threw. Most of them looked right on screen. That
shapes every decision below and explains why the tests are structural rather
than visual.

---

## 2. Architecture

Four layers, each testable without the one above it.

```
  bulletin-metrics.js   type metrics + line breaking     (pure, no DOM)
          ↓
  bulletin-layout.js    measure blocks, pack columns     (pure, no DOM)
          ↓
  bulletin-css.js       the stylesheet, as a string      (shared, no DOM)
          ↓
  bulletin.jsx          render + measure back + correct  (React)
  render_bulletin.mjs   render to static HTML            (node, no DOM)
```

The critical property: **the first two layers are pure functions with no DOM
dependency**, so the entire budget can be exercised in node, against real
encoded data, in a test that runs in milliseconds. If layout logic can only be
tested by rendering it, it will not be tested.

The stylesheet is a **string in a module**, not a `.css` file, so that the React
component and the static proof renderer inline literally the same rules. A proof
sheet that is a copy of the stylesheet is worthless the moment it drifts.

---

## 3. Measuring text — what did not work

### 3.1 Chars per line (rejected)

The obvious model: calibrate "this style fits N characters per line", then
`lines = ceil(chars / N)`.

It fails because a proportional face has no such N. In Georgia:

| glyph | advance (em) |
|---|---|
| `i` | 0.293 |
| `l` | 0.286 |
| `O` | 0.744 |
| `m` | 0.881 |
| `W` | 0.976 |

A line of `l`s and a line of `W`s differ by more than three times. Liturgical
English swings between both — *"O supreme commander of the heavenly hosts"*
against *"and to raise the dead by His glorious Resurrection"*.

Calibrated against the real hymns and biased **never to underestimate** — the
only safe bias, since underestimating puts text off the page — the model was
wrong by **up to six lines on a nine-line sticheron**. A 66% overestimate would
have wasted roughly a third of every column.

The instructive part: the bias is what broke it. To be safe on the worst string,
`N` had to be small enough to be badly wrong on every other string. A model that
must be conservative to be safe is a model that is wrong nearly everywhere.

### 3.2 Bulk advance width (rejected)

Better: sum the real advance widths and divide by column width.
`lines = ceil(totalAdvance / usableWidth)`.

This fails on the last line. A paragraph ending halfway through its final line
has "wasted" width that the division cannot see, so the effective usable width
inferred from short paragraphs is far too low. Same over-prediction, subtler
cause.

---

## 4. Measuring text — what works

**Simulate the browser's line-breaking algorithm.** Not approximate it —
reproduce it.

Greedy word wrap is simple and deterministic: take words in order; if the next
word fits on the current line, add it; otherwise start a new line.

```js
export function wrapText(text, fontPt, usableIn, italic = false) {
  const words = String(text).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [""];

  const emPerIn = fontPt / 72;          // 1em = the font size
  const usableEm = usableIn / emPerIn;  // column width, in ems
  const space = widthEm(" ", italic);

  const lines = [];
  let current = [], cursor = 0;
  for (const word of words) {
    const w = widthEm(word, italic);
    if (!current.length) { current = [word]; cursor = w; continue; }
    if (cursor + space + w <= usableEm) { current.push(word); cursor += space + w; }
    else { lines.push(current.join(" ")); current = [word]; cursor = w; }
  }
  if (current.length) lines.push(current.join(" "));
  return lines;
}
```

**Result: twelve of twelve real strings predicted exactly**, at both 10.5pt and
11pt, against Chrome rendering at the sheet's true 3.43in measure. Not close —
identical, line for line, including where each line breaks.

### 4.1 Getting the metrics

Advance widths come from the browser once, stored as a fraction of the em so
they are size-independent:

```js
const cv = document.createElement('canvas').getContext('2d');
cv.font = "1000px Georgia, 'Times New Roman', serif";
const emWidth = cv.measureText('O').width / 1000;
```

**Verify the font is not silently falling back before trusting a byte of this.**
Georgia and Times give different widths for `O` (0.7441 vs 0.7222); if they come
back equal, the browser has substituted and every number is wrong. This check
belongs in any re-derivation.

### 4.2 Why ignoring hyphenation is correct

The simulation does not model `hyphens: auto`. That is deliberate and it is safe
in one direction only: **hyphenation lets more text fit on a line**, so ignoring
it can only ever predict the same number of lines or one too many. The error is
toward reserving space that turns out not to be needed, never toward text
falling off the page.

Whenever a modelling shortcut is taken, work out which way it errs and take only
the shortcuts that err safely.

---

## 5. Vertical space: the collapsing-margin trap

Line counts are half the budget. The other half is the space between blocks, and
this is where the first working model was wrong by **14% of a column**.

The packer summed each block's `spaceAfter` and the next block's `spaceBefore`.
**CSS does not.** Adjacent vertical margins *collapse*: the gap between two
stacked blocks is the **larger** of the two, never the sum.

```js
function stackRuns(runs) {
  let contentPt = 0;
  for (let i = 0; i < runs.length; i++) {
    contentPt += runs[i].textPt;
    const next = runs[i + 1];
    if (next) contentPt += Math.max(runs[i].spaceAfter, next.spaceBefore);
  }
  return { contentPt,
           spaceBefore: runs[0]?.spaceBefore ?? 0,
           spaceAfter: runs.at(-1)?.spaceAfter ?? 0 };
}
```

Over six block boundaries the difference was enough to declare that 6 September
needed two pages, when the rendered sheet measured 10.97in of 11.

Two related traps, both of which rendered height that was never budgeted:

- **A margin at the top of a column** pushes the first line off the baseline the
  budget assumed. Removed at source: `.oh-col > *:first-child { margin-top: 0 }`.
- **A margin at the foot of a column.** A grid item does *not* collapse its last
  child's bottom margin away, so up to 12pt per column was drawn and uncounted.
  Removed the same way: `.oh-col > *:last-child { margin-bottom: 0 }`.

**General rule: every pixel the browser will draw must appear in the model, or
the model must forbid the browser from drawing it.** Removing the margin in CSS
is better than teaching the model to expect it — one fewer thing to keep in
sync.

---

## 6. The stylesheet and the model must agree, and be made to prove it

The metrics table restates every size and leading from the stylesheet. Two
declarations of the same fact will drift.

So the test **fails if they disagree**:

```js
for (const [key, selector, pt, leading] of CSS_CHECK) {
  const decl = css.slice(css.indexOf(selector)).split("}")[0];
  check(`${selector} font-size`, parseFloat(/font-size:\s*([0-9.]+)pt/.exec(decl)[1]),
        STYLES[key].pt);
  check(`${selector} line-height`, parseFloat(/line-height:\s*([0-9.]+)/.exec(decl)[1]),
        STYLES[key].leading);
}
```

Related: **every leading in the stylesheet is now pinned explicitly.** Any style
left to inherit `line-height: normal` cannot be modelled, because "normal" is a
font- and browser-dependent value the metrics cannot know.

> A budget computed from stale numbers is worse than no budget at all. No budget
> makes you cautious; a wrong budget makes you confident.

---

## 7. Pagination

### 7.1 The rules, in priority order

1. **A hymn is never split.** A troparion, kontakion or sticheron is a sung
   unit. It moves whole to the next column or page, even at the cost of white
   space. This is a liturgical requirement, not an aesthetic one, and it
   outranks density.
2. **A heading never ends a column.** It moves with what it introduces.
3. **A reading may split**, but never leaves fewer than two lines on either side
   of the break — the standard widow/orphan rule.
4. **A split is announced at both ends.**

### 7.2 Keeping a heading with its content

A heading needs room for itself *plus a foothold* of what follows, or it starts
the next column with it:

```js
if (block.keepWithNext) {
  const next = blocks[i + 1];
  const foothold = next
    ? (next.atomic ? Math.min(next.contentPt, 2 * next.runs[0].linePt)
                   : next.headPt + MIN_LINES_EITHER_SIDE * next.linePt)
    : 0;
  if (costOf(block) + foothold > remaining() && current.items.length) newColumn();
  place(block, block.contentPt);
}
```

The foothold for an atomic block is `min(whole block, two lines)` — a short
block must fit entirely, a long one need only show that it started.

### 7.3 Splitting a reading, and the circular dependency

Whether a part needs a trailing "continued…" notice depends on how many lines it
takes; how many lines it can take depends on whether it needs the notice. Break
the circle by trying the optimistic case first:

```js
const roomPt = remaining() - gapBefore(block) - headPt;
let canTake = Math.floor(roomPt / block.linePt);
if (canTake < linesLeft) canTake = Math.floor((roomPt - noticePt) / block.linePt);
```

Missing this cost about 14.7pt per split. On a readings page with three splits
that is three lines — enough to push the page over and produce a second, almost
entirely white sheet. **This was found by a user printing it, not by any test**,
which is why §9's column-budget invariant now exists.

### 7.4 Slicing text without losing structure

The paginator cuts a passage at line boundaries, so a lection body must exist as
a **string**. But verse numbers need markup — small gold superscripts — and a
string cannot carry markup.

Resolved with **sentinel control characters** that cannot occur in scripture:

```js
text: r.verses.map(v => `${VERSE_OPEN}${v.verse}${VERSE_CLOSE}${v.text}`).join(" ")
```

They measure as zero width, survive slicing and joining, and are turned back
into `<sup>` at render.

**Recovering the numbers by pattern afterwards was explicitly rejected.**
Scripture contains numerals of its own, so a regex would be a heuristic that is
right almost always — which is the exact shape of every quiet defect in this
subsystem's history.

### 7.5 Continuation notices

Announced loudly across a page and quietly across a column, because a reader's
eye already goes to the next column:

```
continued on page 3 →          …continued from page 2
continued in the next column → …continued from the previous column
```

Page numbering is continuous across the propers sheet and the readings
supplement — `Page 2 of 4` — so a stapled or loose bulletin is unambiguous.

---

## 8. Negotiated slack: measure the cost before spending it

A budget that exactly fills the page is one rounding error from spilling. The
obvious remedy is to hold back a safety margin — two lines, say.

**Measure what that costs before imposing it.** For 6 September 2026:

| slack | propers sheet | readings sheet |
|---|---|---|
| **0pt** | **1 page** — 99%, 97% fill | 2 pages |
| 6pt | **2 pages** — 82%, 84%, 32%, 0% | 2 pages |
| 16.5pt | 2 pages | 2 pages |
| 33pt | 2 pages — 86%, 88%, 33%, 0% | 2 pages |

**The cost is a cliff, not a gradient.** A third of a line costs the propers
sheet an entire page with a third column a third full — while the readings
sheet, the one that actually overran, is unaffected at any slack.

So slack is **negotiated per sheet**: try a descending ladder and keep the most
generous setting that still uses the fewest pages.

```js
export function paginateBest(items, options = {}) {
  let best = null;
  for (const slackPt of SLACK_LADDER) {           // 33 → 22 → 16.5 → 10 → 6 → 0
    const laid = paginate(items, { ...options,
      page: { ...base, columnHeightPt: chrome - slackPt } });
    // Descending ladder + strictly-lower comparison ⇒ ties keep the roomier entry.
    if (!best || laid.totalPages < best.totalPages) best = { ...laid, slackPt };
  }
  return best;
}
```

The first version of this **broke out of the loop on its first iteration** and
always returned maximum slack. A descending search must run to the bottom before
it knows what the minimum is.

---

## 9. Verification: predict, render, measure, correct

A computed budget is a prediction. Predictions about someone else's rendering
engine should be checked against that engine.

On mount the component measures the real masthead, footer and column width from
the rendered sheet, and re-paginates if they differ from the baked geometry.
Then it measures whether any column rendered **taller** than its budget and
shrinks the budget by that drift. That catches what the metrics cannot know
about: a font substitution, a browser zoom, an unexpected glyph.

### 9.1 This is where the bugs live

Two shipped, both instructive.

**It oscillated.** The first version had no direction and no end:

1. render at the full budget; a column sets a few points deeper than predicted
2. shrink by that drift, re-break — now everything fits
3. measure again: no drift, so the budget **returns to full**
4. which reproduces step 1

In Chrome's print preview that showed as text flickering and re-ordering,
because every pass re-sliced where each reading broke.

**Two properties fix it, and both are needed:**

- **MONOTONIC** — within a settling run the budget only ever shrinks, so a pass
  cannot undo the one before it. This starves the loop.
- **CAPPED** — settling stops after `MAX_LAYOUT_PASSES` regardless of what the
  measurement says. This stops a pathological measurement spinning.

Either alone still permits a spin. Extracted as a pure function,
`reconcileBudget()`, so it is **tested rather than reasoned about**. A floor
(three quarters of the column) stops a runaway measurement squeezing the columns
toward nothing; it reports instead.

Settling runs in `useLayoutEffect`, **before paint**, so it is not something the
reader watches happen.

**It deadlocked.** The second version opened with early returns:

```js
if (!sheet) return;
if (!mast || !foot || !col) return;
```

Both leave the pass counter unchanged and `settled` false, and **none of the
effect's dependencies change** — so it never runs again. Under React StrictMode,
whose simulated unmount detaches refs part-way through mounting, this is a live
path. Every exit must now either settle or schedule a retry.

> A loop that can stop making progress must say so or try again. It must not
> simply stop.

### 9.2 The rule that matters most

The stalled settle loop also **removed the Print button**, which was disabled
while `!settled`.

That gating was wrong independently of the deadlock. The layout is valid at
every pass — settling only refines the budget by a point or two. Blocking the
primary action on a background refinement bought nothing and, when the
refinement failed, left right-click as the only way to print.

> **An internal optimisation must never be able to withhold a user's primary
> action.** If it fails, the feature degrades to the un-optimised behaviour, not
> to nothing.

---

## 10. Printing

Print bugs deserve their own warning, because one cost a release.

**Inline styles beat stylesheet rules.** The modal was `position: fixed` with
`overflow: auto` as *inline* styles. Inline wins over any stylesheet rule
without `!important`, so the entire `@media print` block was inert. A
`position: fixed` element **prints on the first page only** in Chrome, and
`overflow: auto` clipped the rest — 27 inches of sheets compressed into a 0.88in
scroll box. One page, no readings, dead scrollbar in preview.

The fix is not more `!important`. Style the overlay **from the stylesheet**, so
the print block wins by ordinary cascade order.

**Print must unwind four containments**, each of which breaks pagination
independently:

```css
.oh-overlay {
  position: static !important;   /* fixed prints one page */
  inset: auto !important;        /* top+bottom pinned = one viewport tall */
  height: auto !important;
  overflow: visible !important;  /* auto clips to the box */
}
```

**Paper geometry belongs to `@media screen` only.** The on-screen 8.5×11 box
with its padding is a *preview device*. In print the `@page` box supplies size
and margins and the sheet carries none of its own:

```css
@page { size: 8.5in 11in; margin: 0.55in 0.65in 0.45in; }
.oh-sheet { width: auto; min-height: 0; padding: 0; }
```

A fixed 8.5in-wide box on a zero-margin 8.5in page is where stray blank pages
come from — two competing definitions of the same page box.

For contrast: the St Mary's templates reviewed alongside this work declare **no
`@page` rule at all** and put geometry on a `.page` div, which prints correctly
only if the operator sets Margins to None. On default margins the browser scales
the whole page down and shrinks the type.

---

## 11. Type sizing

The first cut sized the sheet for its **on-screen preview** — 8.5in rendered at
72dpi is 612px — then set type in *pixels* against that box. On screen it looked
reasonable. On paper it printed at roughly **6pt**.

**Specify print type in points, and make the on-screen sheet the same physical
size**, so the preview and the page are the same object and nothing has to be
mentally rescaled.

Current values, with 10.5pt as a hard floor for reading in a dim church:

| element | size | leading |
|---|---|---|
| hymn text | 10.5pt | 1.42 |
| reading text, references | 11pt | 1.5 / 1.25 |
| section headings | 10pt | 1.25 |
| date | 19pt | 1.15 |
| verse numbers | 7.5pt superscript | — |

When a sheet overflows, **reclaim from chrome, never from type**: page padding,
masthead margins, heading leading, footer margin. If that is not enough, the
sheet takes another page.

Two things that silently never rendered:

- `column-rule: 0.5pt` rounds to a sub-pixel and **does not paint**. 0.75pt is
  the thinnest that does.
- `hyphens: auto` needs both a document language and the `-webkit-` prefix.

---

## 12. Testing a layout engine

Layout failures are silent, so the tests are **structural and invariant-based**,
not visual. Nothing here requires looking at a page.

1. **Model against reality.** Twelve real strings with line counts measured in
   Chrome, asserted exactly. If the wrap simulation drifts from the browser,
   this fails first and everything else is meaningless.
2. **Model against the stylesheet.** Every size and leading in the metrics must
   match the CSS.
3. **The rules.** A hymn appears exactly once and is never marked as a part; no
   column ends with a heading; every part of a split reading keeps two lines;
   exactly one part shows the heading and exactly one is marked last.
4. **The invariant that would have caught the missing notice:**
   *no column may exceed the budget its own layout chose.* Cheap, total, and it
   catches any future unbudgeted element.
5. **A day heavier than anything encoded.** The point of a budget is days nobody
   has looked at, so a synthetic Vigil-weight day — four troparia, three
   kontakia, eight stichera — is asserted to paginate without overflow.
6. **Sequences, not snapshots.** The convergence test drives an *adversarial*
   measurement that reports drift again every time the budget returns to full —
   the exact shape of the shipped oscillation — and asserts it settles, settles
   within the cap, and never grows back.
7. **Structural guards on the component.** Settling must run before paint, go
   through `reconcileBudget`, have a settled gate, reset on content change, and
   **not** gate printing. The suite fails outright if the old unbounded effect
   reappears.

`tools/render_bulletin.mjs` renders any date to standalone HTML from the real
data path and the real stylesheet, for reviewing a layout change without npm or
a dev server:

```
node tools/render_bulletin.mjs 2026-09-06 --readings > proof.html
```

---

## 13. If you are doing this again

The order that worked:

1. **Get real font metrics.** Everything downstream is guesswork without them.
   Verify the font is not substituting.
2. **Reproduce the layout algorithm rather than approximating it.** Greedy word
   wrap is twenty lines and exact. An approximation needs a safety factor, and a
   safety factor large enough to be safe is large enough to be useless.
3. **Model vertical space with the same care as horizontal.** Margins collapse.
   Column edges suppress margins. Every drawn pixel must be budgeted or
   forbidden.
4. **Make the model and the stylesheet prove they agree**, in a test.
5. **Own the breaks.** Give the packer explicit rules in priority order, with the
   domain requirement (never split a hymn) ranked above density.
6. **Measure the cost of a safety margin before imposing one.** It may be a
   cliff.
7. **Verify against the rendering engine — monotonically and with a cap.**
8. **Never let the verification machinery drive the UI.** It informs; it does not
   gate.

And the one worth writing on the wall:

> Every failure in this subsystem was silent. Not one threw an error, and most
> looked correct on screen. Build the invariant that makes the failure loud
> before you build the feature that can fail.
