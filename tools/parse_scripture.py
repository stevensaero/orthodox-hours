#!/usr/bin/env python3
"""
parse_scripture.py
==================
Converts Brenton LXX and KJV NT chapter text files into per-book JSON files
suitable for use with scripture.jsx (Orthodox Hours Tool).

Input format (one file per chapter):
  eng-Brenton_NNN_BOOK_CC_read.txt  — Brenton LXX
  eng-kjv2006_NNN_BOOK_CC_read.txt  — KJV NT

File structure:
  Line 1: Book title (e.g. "Genesis." or "THE GOSPEL ACCORDING TO ST. MATTHEW.")
  Line 2: "Chapter N."
  Lines 3+: One verse per line, ending with trailing space
  Some KJV lines begin with a pilcrow (¶) paragraph marker — stripped automatically.

Output: public/scripture/[book-id].json per book

Usage:
  python3 parse_scripture.py --brenton /path/to/brenton_lxx/ --kjv /path/to/kjv_nt/ --out ./public/scripture/
  python3 parse_scripture.py --brenton /path/to/brenton_lxx/ --out ./public/scripture/ --book GEN
  python3 parse_scripture.py --kjv /path/to/kjv_nt/ --out ./public/scripture/ --book MAT
  python3 parse_scripture.py --verify --out ./public/scripture/   # verify all existing JSON files

Options:
  --brenton DIR   Path to folder containing Brenton LXX chapter files
  --kjv DIR       Path to folder containing KJV NT chapter files
  --out DIR       Output directory for JSON files (default: ./public/scripture/)
  --book CODE     Only process this book abbreviation (e.g. GEN, MAT)
  --verify        Verify all JSON files in --out against known verse counts
  --verbose       Print detailed progress
"""

import os
import re
import json
import base64
import argparse
import sys
from pathlib import Path
from collections import defaultdict

# ─── BOOK REGISTRY ───────────────────────────────────────────────────────────
# Maps 3-letter file code → canonical book metadata
# Ordered by canonical sequence within each testament

OT_BOOKS = [
    # Law
    ("GEN", "Gen",   "Genesis",                      "Law",           50),
    ("EXO", "Ex",    "Exodus",                        "Law",           40),
    ("LEV", "Lev",   "Leviticus",                     "Law",           27),
    ("NUM", "Num",   "Numbers",                        "Law",           36),
    ("DEU", "Deut",  "Deuteronomy",                   "Law",           34),
    # History
    ("JOS", "Josh",  "Joshua",                         "History",       24),
    ("JDG", "Judg",  "Judges",                         "History",       21),
    ("RUT", "Ruth",  "Ruth",                           "History",        4),
    ("1KI", "1Sam",  "1 Kingdoms (1 Samuel)",          "History",       31),
    ("2KI", "2Sam",  "2 Kingdoms (2 Samuel)",          "History",       24),
    ("3KI", "1Ki",   "3 Kingdoms (1 Kings)",           "History",       22),
    ("4KI", "2Ki",   "4 Kingdoms (2 Kings)",           "History",       25),
    ("1CH", "1Chr",  "1 Chronicles",                   "History",       29),
    ("2CH", "2Chr",  "2 Chronicles",                   "History",       36),
    ("EZR", "Ezra",  "Ezra",                           "History",       10),
    ("NEH", "Neh",   "Nehemiah",                       "History",       13),
    ("TOB", "Tob",   "Tobit",                          "History",       14),
    ("JDT", "Jdt",   "Judith",                         "History",       16),
    ("EST", "Esth",  "Esther",                         "History",       10),
    ("1ES", "1Esd",  "1 Esdras",                      "History",        9),
    # Wisdom
    ("JOB", "Job",   "Job",                            "Wisdom",        42),
    ("PSA", "Ps",    "Psalms",                         "Wisdom",       151),
    ("PRO", "Prov",  "Proverbs",                       "Wisdom",        31),
    ("ECC", "Eccl",  "Ecclesiastes",                   "Wisdom",        12),
    ("SNG", "Song",  "Song of Songs",                  "Wisdom",         8),
    ("WIS", "Wis",   "Wisdom of Solomon",              "Wisdom",        19),
    ("SIR", "Sir",   "Sirach (Ecclesiasticus)",        "Wisdom",        51),
    # Major Prophets
    ("ISA", "Isa",   "Isaiah",                         "Prophets Major", 66),
    ("JER", "Jer",   "Jeremiah",                       "Prophets Major", 52),
    ("LAM", "Lam",   "Lamentations",                   "Prophets Major",  5),
    ("BAR", "Bar",   "Baruch",                         "Prophets Major",  5),
    ("LJE", "LJe",   "Letter of Jeremiah",             "Prophets Major",  1),
    ("EZK", "Ezek",  "Ezekiel",                        "Prophets Major", 48),
    ("DAG", "Dan",   "Daniel (with additions)",        "Prophets Major", 14),
    ("SUS", "Sus",   "Susanna",                        "Prophets Major",  1),
    ("BEL", "Bel",   "Bel and the Dragon",             "Prophets Major",  1),
    # Minor Prophets
    ("HOS", "Hos",   "Hosea",                          "Prophets Minor", 14),
    ("JOL", "Joel",  "Joel",                           "Prophets Minor",  3),
    ("AMO", "Amos",  "Amos",                           "Prophets Minor",  9),
    ("OBA", "Obad",  "Obadiah",                        "Prophets Minor",  1),
    ("JNA", "Jonah", "Jonah",                          "Prophets Minor",  4),
    ("MIC", "Mic",   "Micah",                          "Prophets Minor",  7),
    ("NAM", "Nah",   "Nahum",                          "Prophets Minor",  3),
    ("HAB", "Hab",   "Habakkuk",                       "Prophets Minor",  3),
    ("ZEP", "Zeph",  "Zephaniah",                      "Prophets Minor",  3),
    ("HAG", "Hag",   "Haggai",                         "Prophets Minor",  2),
    ("ZEC", "Zech",  "Zechariah",                      "Prophets Minor", 14),
    ("MAL", "Mal",   "Malachi",                        "Prophets Minor",  4),
    # Deuterocanonical
    ("MAN", "PrMan", "Prayer of Manasseh",             "Deuterocanon",   1),
    ("1MA", "1Mac",  "1 Maccabees",                    "Deuterocanon",  16),
    ("2MA", "2Mac",  "2 Maccabees",                    "Deuterocanon",  15),
    ("3MA", "3Mac",  "3 Maccabees",                    "Deuterocanon",   7),
    ("4MA", "4Mac",  "4 Maccabees",                    "Deuterocanon",  18),
    ("PS2", "Ps151", "Psalm 151",                      "Deuterocanon",   1),
]

NT_BOOKS = [
    # Gospels
    ("MAT", "Matt",  "Matthew",                        "Gospels",       28),
    ("MRK", "Mark",  "Mark",                           "Gospels",       16),
    ("LUK", "Luke",  "Luke",                           "Gospels",       24),
    ("JHN", "John",  "John",                           "Gospels",       21),
    # Apostolos
    ("ACT", "Acts",  "Acts",                           "Apostolos",     28),
    ("ROM", "Rom",   "Romans",                         "Apostolos",     16),
    ("1CO", "1Cor",  "1 Corinthians",                  "Apostolos",     16),
    ("2CO", "2Cor",  "2 Corinthians",                  "Apostolos",     13),
    ("GAL", "Gal",   "Galatians",                      "Apostolos",      6),
    ("EPH", "Eph",   "Ephesians",                      "Apostolos",      6),
    ("PHP", "Phil",  "Philippians",                    "Apostolos",      4),
    ("COL", "Col",   "Colossians",                     "Apostolos",      4),
    ("1TH", "1Thes", "1 Thessalonians",                "Apostolos",      5),
    ("2TH", "2Thes", "2 Thessalonians",                "Apostolos",      3),
    ("1TI", "1Tim",  "1 Timothy",                      "Apostolos",      6),
    ("2TI", "2Tim",  "2 Timothy",                      "Apostolos",      4),
    ("TIT", "Tit",   "Titus",                          "Apostolos",      3),
    ("PHM", "Phlm",  "Philemon",                       "Apostolos",      1),
    ("HEB", "Heb",   "Hebrews",                        "Apostolos",     13),
    ("JAS", "Jas",   "James",                          "Apostolos",      5),
    ("1PE", "1Pet",  "1 Peter",                        "Apostolos",      5),
    ("2PE", "2Pet",  "2 Peter",                        "Apostolos",      3),
    ("1JN", "1John", "1 John",                         "Apostolos",      5),
    ("2JN", "2John", "2 John",                         "Apostolos",      1),
    ("3JN", "3John", "3 John",                         "Apostolos",      1),
    ("JUD", "Jude",  "Jude",                           "Apostolos",      1),
    # Out of scope for liturgical tool but files exist
    ("REV", "Rev",   "Revelation",                     "Out of Scope",  22),
]

ALL_BOOKS = OT_BOOKS + NT_BOOKS

# Build lookup dicts
BOOK_BY_CODE = {}   # file code (GEN, MAT) → metadata tuple
for entry in ALL_BOOKS:
    BOOK_BY_CODE[entry[0]] = entry

def book_id_for_code(code):
    """Return the canonical book id (lowercase abbreviation) for a file code."""
    if code in BOOK_BY_CODE:
        return BOOK_BY_CODE[code][1].lower().replace(" ", "")
    return code.lower()

def book_meta(code):
    if code in BOOK_BY_CODE:
        fc, abbr, name, group, chapters = BOOK_BY_CODE[code]
        testament = "OT" if (fc, abbr, name, group, chapters) in [(e[0],e[1],e[2],e[3],e[4]) for e in OT_BOOKS] else "NT"
        # Re-derive testament
        testament = "OT" if any(b[0] == code for b in OT_BOOKS) else "NT"
        return {"id": abbr, "name": name, "testament": testament, "group": group, "expectedChapters": chapters}
    return None

# ─── FILE PARSING ─────────────────────────────────────────────────────────────

def parse_chapter_file(filepath):
    """
    Parse a single chapter text file.
    Returns (chapter_num, verses_list) where verses_list = [{"verse": N, "text": "..."}]
    """
    path = Path(filepath)
    filename = path.stem  # e.g. eng-Brenton_002_GEN_01_read

    # Extract chapter number from filename
    parts = filename.split("_")
    # Format: eng-Brenton_002_GEN_01_read  → parts[-2] = '01'
    # Format: eng-kjv2006_070_MAT_01_read → parts[-2] = '01'
    try:
        chapter_num = int(parts[-2])
    except (IndexError, ValueError):
        raise ValueError(f"Cannot extract chapter number from filename: {filename}")

    with open(filepath, "r", encoding="utf-8-sig", errors="replace") as f:
        raw = f.read()

    lines = raw.splitlines()
    verses = []
    verse_num = 0

    for line in lines:
        # Strip leading/trailing whitespace
        line = line.strip()

        # Skip empty lines
        if not line:
            continue

        # Skip book title line (contains no period mid-sentence, just "Book." or all-caps)
        # Skip chapter header line "Chapter N."
        if re.match(r'^Chapter\s+\d+\.\s*$', line, re.IGNORECASE):
            continue
        if re.match(r'^THE\s+', line):  # KJV book headers like "THE GOSPEL..."
            continue
        # Check if it looks like a book title (short line ending with period, no lowercase words)
        # "Genesis." — skip; "In the beginning God..." — keep
        words = line.rstrip(".").split()
        if len(words) <= 5 and line.endswith(".") and all(w[0].isupper() for w in words if w):
            # Likely a book title — but be careful not to skip short verses
            # Heuristic: if it matches a known book title pattern, skip
            if re.match(r'^[A-Z][a-z]+(\s+[A-Z][a-z]*)*\.$', line):
                continue

        # Strip KJV pilcrow/paragraph marker (¶ = \u00b6)
        line = line.lstrip('\u00b6').strip()

        if not line:
            continue

        verse_num += 1
        verses.append({"verse": verse_num, "text": line})

    return chapter_num, verses


def parse_book_from_files(chapter_files, book_code, source="brenton"):
    """
    Parse all chapter files for one book.
    Returns a dict ready to serialize as JSON.
    """
    meta = book_meta(book_code)
    if not meta:
        print(f"  WARNING: Unknown book code {book_code} — using defaults")
        meta = {"id": book_code.lower(), "name": book_code, "testament": "OT", "group": "Unknown", "expectedChapters": 0}

    chapters = {}
    for filepath in chapter_files:
        try:
            chapter_num, verses = parse_chapter_file(filepath)
            if verses:
                chapters[chapter_num] = verses
        except Exception as e:
            print(f"  ERROR parsing {filepath}: {e}")

    # Sort chapters numerically
    sorted_chapters = [
        {"chapter": ch, "verses": chapters[ch]}
        for ch in sorted(chapters.keys())
    ]

    result = {
        "id": meta["id"],
        "name": meta["name"],
        "testament": meta["testament"],
        "group": meta["group"],
        "source": "Brenton Septuagint (1844), public domain" if source == "brenton"
                  else "KJV (2006 edition), public domain",
        "chapters": sorted_chapters,
    }

    # Validation summary
    expected = meta["expectedChapters"]
    actual = len(sorted_chapters)
    if expected > 0 and actual != expected:
        print(f"  WARNING: {meta['name']} — expected {expected} chapters, got {actual}")

    return result


# ─── DIRECTORY SCANNING ───────────────────────────────────────────────────────

def scan_directory(dirpath, prefix="eng-Brenton"):
    """
    Scan a directory for chapter files.
    Returns dict: book_code → [sorted list of file paths]
    """
    books = defaultdict(list)
    pattern = re.compile(
        r'eng-(?:Brenton|kjv2006)_\d+_([A-Z0-9]+)_(\d+)_read\.txt$',
        re.IGNORECASE
    )

    for fname in os.listdir(dirpath):
        m = pattern.match(fname)
        if m:
            book_code = m.group(1).upper()
            if book_code == "000":
                continue  # manifest file
            books[book_code].append(os.path.join(dirpath, fname))

    # Sort each book's files by chapter number
    for code in books:
        books[code].sort(key=lambda p: int(re.search(r'_(\d+)_read', p).group(1)))

    return books


# ─── BOOKS.JSON MANIFEST ──────────────────────────────────────────────────────

def build_manifest(out_dir):
    """
    Build books.json manifest from all per-book JSON files present in out_dir.
    """
    manifest = []
    for code, abbr, name, group, expected_chapters in ALL_BOOKS:
        book_id = abbr.lower().replace(" ", "")
        json_path = os.path.join(out_dir, f"{book_id}.json")
        if os.path.exists(json_path):
            with open(json_path) as f:
                data = json.load(f)
            actual_chapters = len(data.get("chapters", []))
            manifest.append({
                "id": abbr,
                "name": name,
                "abbreviation": abbr,
                "testament": "OT" if any(b[0] == code for b in OT_BOOKS) else "NT",
                "group": group,
                "chapters": actual_chapters,
                "file": f"{book_id}.json",
            })

    out_path = os.path.join(out_dir, "books.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"\n✓ books.json written — {len(manifest)} books indexed")
    return manifest


# ─── VERIFICATION ─────────────────────────────────────────────────────────────

KNOWN_VERSE_COUNTS = {
    # OT — spot check key books (LXX verse counts)
    "Gen":   {1:31, 2:25, 3:24, 50:26},
    "Isa":   {1:31, 40:31, 53:12, 66:24},
    "Ps":    {1:6,  50:23, 90:16, 118:176, 150:6},
    # NT
    "Matt":  {1:25, 5:48, 28:20},
    "Mark":  {1:45, 16:20},
    "Luke":  {1:80, 24:53},
    "John":  {1:51, 4:54, 21:25},
    "Acts":  {1:26, 11:30, 28:31},
    "Rom":   {1:32, 16:27},
}

def verify_json_files(out_dir, verbose=False):
    """Spot-check JSON files against known verse counts."""
    errors = []
    ok = 0

    for abbr, checks in KNOWN_VERSE_COUNTS.items():
        book_id = abbr.lower()
        json_path = os.path.join(out_dir, f"{book_id}.json")
        if not os.path.exists(json_path):
            if verbose:
                print(f"  SKIP {abbr} — file not found")
            continue

        with open(json_path) as f:
            data = json.load(f)

        chapter_map = {ch["chapter"]: ch["verses"] for ch in data["chapters"]}

        for ch_num, expected_count in checks.items():
            if ch_num not in chapter_map:
                errors.append(f"{abbr} ch.{ch_num}: chapter missing")
                continue
            actual = len(chapter_map[ch_num])
            if actual != expected_count:
                errors.append(f"{abbr} ch.{ch_num}: expected {expected_count} verses, got {actual}")
            else:
                ok += 1
                if verbose:
                    print(f"  ✓ {abbr} {ch_num}:{expected_count}")

    print(f"\nVerification: {ok} checks passed, {len(errors)} errors")
    for e in errors:
        print(f"  ✗ {e}")
    return len(errors) == 0


# ─── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Parse Brenton/KJV chapter files to per-book JSON")
    parser.add_argument("--brenton", help="Path to brenton_lxx/ directory")
    parser.add_argument("--kjv",     help="Path to kjv_nt/ directory")
    parser.add_argument("--out",     default="./public/scripture/", help="Output directory")
    parser.add_argument("--book",    help="Only parse this book code (e.g. GEN, MAT)")
    parser.add_argument("--manifest",action="store_true", help="Rebuild books.json manifest only")
    parser.add_argument("--verify",  action="store_true", help="Verify existing JSON files")
    parser.add_argument("--verbose", action="store_true", help="Verbose output")
    args = parser.parse_args()

    out_dir = args.out
    os.makedirs(out_dir, exist_ok=True)

    if args.manifest:
        build_manifest(out_dir)
        return

    if args.verify:
        verify_json_files(out_dir, verbose=args.verbose)
        return

    total_books = 0
    total_chapters = 0
    total_verses = 0

    for source_dir, source_name in [(args.brenton, "brenton"), (args.kjv, "kjv")]:
        if not source_dir:
            continue
        if not os.path.isdir(source_dir):
            print(f"ERROR: Directory not found: {source_dir}")
            sys.exit(1)

        print(f"\nScanning {source_name}: {source_dir}")
        books = scan_directory(source_dir)
        print(f"  Found {len(books)} book codes: {', '.join(sorted(books.keys()))}")

        for book_code, chapter_files in sorted(books.items()):
            if args.book and book_code.upper() != args.book.upper():
                continue

            meta = book_meta(book_code)
            book_name = meta["name"] if meta else book_code
            print(f"\n  [{book_code}] {book_name} — {len(chapter_files)} chapters")

            data = parse_book_from_files(chapter_files, book_code, source=source_name)
            book_id = data["id"].lower()
            out_path = os.path.join(out_dir, f"{book_id}.json")

            with open(out_path, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            ch_count = len(data["chapters"])
            v_count = sum(len(ch["verses"]) for ch in data["chapters"])
            size_kb = os.path.getsize(out_path) // 1024

            print(f"    → {out_path} ({ch_count} chapters, {v_count} verses, {size_kb}KB)")
            if args.verbose:
                for ch in data["chapters"]:
                    print(f"       Ch.{ch['chapter']}: {len(ch['verses'])} verses")

            total_books += 1
            total_chapters += ch_count
            total_verses += v_count

    if total_books > 0:
        print(f"\n{'='*60}")
        print(f"Complete: {total_books} books, {total_chapters} chapters, {total_verses:,} verses")
        build_manifest(out_dir)

        if args.verify or total_books > 1:
            print("\nRunning verification...")
            verify_json_files(out_dir, verbose=args.verbose)


if __name__ == "__main__":
    main()
