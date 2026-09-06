#!/usr/bin/env python3
"""
fix_running_headers.py
======================
One-off repair for a verse-numbering defect in public/bible/*.json.

THE DEFECT
----------
`parse_scripture.py` skips the book-title line that opens each source chapter
file via this test in parse_chapter_file():

    if re.match(r'^[A-Z][a-z]+(\\s+[A-Z][a-z]*)*\\.$', line): continue

That pattern requires the title to begin with an uppercase *letter* and to
consist of Capitalised-then-lowercase words. Four real title shapes fail it:

    "1 Corinthians."      numeral-initial
    "Chronicles II."      trailing all-caps numeral
    "NEHEMIAH."           all-caps
    "Ezra and Nehemiah."  lowercase conjunction

When the title survives the filter it is emitted as verse 1, and every genuine
verse in that chapter is pushed down by one. The chapter then reports one verse
more than it has. No text is lost — the shift is a pure insertion.

    2 Corinthians 2 as shipped:  18 entries
      2:1  "2 Corinthians."                      <- the running page header
      2:2  "But I determined this with myself…"  <- the real 2:1
      …
      2:18 "For we are not as many…"             <- the real 2:17

Read aloud from the tool, today's epistle (2 Corinthians 1:21-2:4) therefore
opens its second half with the words "2 Corinthians." and stops one verse short.

THE REPAIR
----------
For each (file, header) pair in HEADERS, in every chapter whose verse 1 text is
exactly that header string: drop that entry and decrement the `verse` number of
every remaining entry by one. Lossless and idempotent — a second run finds
nothing to do.

WHAT IS DELIBERATELY NOT REPAIRED
---------------------------------
Psalms 107 verse 1, "Song of a Psalm by David.", trips the same detector but is
GENUINE — it is the psalm's LXX superscription, which Brenton numbers as verse
1. Independent confirmation: src/data/psalter.js encodes the same Brenton text
separately as

    107: {sub: 'Song of a Psalm by David.',
          v: [[2, "O God, my heart is ready, my heart is ready; …"]]}

with its verses likewise beginning at 2. It is the only Psalm of 151 flagged,
which is itself the tell. ps.json is absent from HEADERS; this script will not
touch it.

FORMATTING
----------
The shipped JSON is pretty-printed at indent=2 with CRLF line endings and no
trailing newline. All three are preserved, so the diff shows only the verses
that actually changed.

USAGE
-----
    python3 tools/fix_running_headers.py --check    # report only, write nothing
    python3 tools/fix_running_headers.py --apply    # perform the repair
"""

import argparse
import json
import sys
from pathlib import Path

# ─── ALLOWLIST ───────────────────────────────────────────────────────────────
# file -> the exact verse-1 string to remove. Derived by scanning the shipped
# data, then confirming case by case that verse 2 carries the real verse 1. An
# exact-match allowlist is used rather than a heuristic so that no genuine short
# verse or superscription can ever be deleted.
HEADERS = {
    "1cor.json":  "1 Corinthians.",
    "1john.json": "1 John.",
    "1pet.json":  "1 Peter.",
    "1thes.json": "1 Thessalonians.",
    "1tim.json":  "1 Timothy.",
    "2chr.json":  "Chronicles II.",
    "2cor.json":  "2 Corinthians.",
    "2mac.json":  "Maccabees II.",
    "2pet.json":  "2 Peter.",
    "2sam.json":  "Kings II.",
    "2thes.json": "2 Thessalonians.",
    "2tim.json":  "2 Timothy.",
    "3mac.json":  "Maccabees III.",
    "4mac.json":  "Maccabees IV.",
    "bel.json":   "Bel and the Dragon.",
    "ezra.json":  "Ezra and Nehemiah.",
    "lje.json":   "Epistle of Jeremy.",
    "neh.json":   "NEHEMIAH.",
    "prman.json": "The Prayer of Manasses.",
    "song.json":  "Song of Solomon.",
    "wis.json":   "Wisdom of Solomon.",
}

# Affected-chapter counts observed in the shipped data. If a file reports a
# different number, the run aborts without writing anything, because the data is
# not what this script was written against.
EXPECTED = {
    "1cor.json": 15, "1john.json": 4,  "1pet.json": 4,  "1thes.json": 4,
    "1tim.json": 5,  "2chr.json": 36,  "2cor.json": 12, "2mac.json": 15,
    "2pet.json": 2,  "2sam.json": 24,  "2thes.json": 2, "2tim.json": 3,
    "3mac.json": 7,  "4mac.json": 18,  "bel.json": 1,   "ezra.json": 23,
    "lje.json": 1,   "neh.json": 1,    "prman.json": 1, "song.json": 8,
    "wis.json": 1,
}

DEFAULT_DIR = Path(__file__).resolve().parent.parent / "public" / "bible"


def load(path):
    """Read a book file, returning (data, newline) with newlines untranslated."""
    with open(path, "r", encoding="utf-8", newline="") as fh:
        raw = fh.read()
    newline = "\r\n" if "\r\n" in raw else "\n"
    return json.loads(raw), newline


def dump(path, data, newline):
    """Write a book file back in the shipped style: indent=2, original line
    endings, no trailing newline."""
    text = json.dumps(data, ensure_ascii=False, indent=2)
    if newline != "\n":
        text = text.replace("\n", newline)
    with open(path, "w", encoding="utf-8", newline="") as fh:
        fh.write(text)


def plan_book(path, header):
    """Return (data, newline, rows) without mutating the file.
    rows = [(chapter, verses_before, verses_after)]"""
    data, newline = load(path)
    rows = []
    for chapter in data.get("chapters", []):
        verses = chapter.get("verses") or []
        if not verses:
            continue
        first = verses[0]
        if first.get("verse") != 1 or first.get("text", "").strip() != header:
            continue
        before = len(verses)
        remaining = verses[1:]
        for verse in remaining:
            verse["verse"] -= 1
        chapter["verses"] = remaining
        rows.append((chapter["chapter"], before, len(remaining)))
    return data, newline, rows


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    mode = ap.add_mutually_exclusive_group(required=True)
    mode.add_argument("--check", action="store_true", help="report only, write nothing")
    mode.add_argument("--apply", action="store_true", help="perform the repair")
    ap.add_argument("--dir", type=Path, default=DEFAULT_DIR, help="bible JSON directory")
    args = ap.parse_args()

    if not args.dir.is_dir():
        sys.exit(f"error: no such directory: {args.dir}")

    # ── Pass one: plan every book and validate. Nothing is written yet. ──
    planned = []
    problems = []
    for filename in sorted(HEADERS):
        path = args.dir / filename
        if not path.exists():
            problems.append(f"{filename}: file not found")
            continue
        data, newline, rows = plan_book(path, HEADERS[filename])
        expected = EXPECTED[filename]
        if len(rows) != expected:
            problems.append(
                f"{filename}: {len(rows)} affected chapters, expected {expected}")
        planned.append((path, data, newline, rows))

    if problems:
        print("ABORTED — the data is not what this script expects. "
              "Nothing was written.\n", file=sys.stderr)
        for line in problems:
            print(f"  {line}", file=sys.stderr)
        print("\nIf the repair has already been applied, every count will read 0 "
              "and this is the expected result of a second run.", file=sys.stderr)
        sys.exit(1)

    # ── Pass two: write. ──
    total = sum(len(rows) for _, _, _, rows in planned)
    if args.apply:
        for path, data, newline, rows in planned:
            if rows:
                dump(path, data, newline)

    verb = "Repaired" if args.apply else "Would repair"
    print(f"{verb} {total} chapters across {len(HEADERS)} books "
          f"({total} spurious verses removed)\n")
    for path, _, _, rows in planned:
        chapters = ", ".join(str(c) for c, _, _ in rows)
        print(f"  {path.name:<12} {HEADERS[path.name]:<26} {len(rows):>2} ch  [{chapters}]")
    print("\n  ps.json      Song of a Psalm by David.   -- SKIPPED, genuine LXX "
          "superscription (see module docstring)")

    if not args.apply:
        print("\nDry run. Re-run with --apply to write.")


if __name__ == "__main__":
    main()
