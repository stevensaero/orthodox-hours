# Print a daily PDF as numbered lines, exactly as daily_lib.Src sees it. The
# encoder reads THIS output and writes the line ranges into the map by hand.
# Usage: MENAION_PDF_DIR=<folder> python3 extract.py 11-16 [11-16A ...]
import sys
from daily_lib import extract_lines
for stem in sys.argv[1:]:
    lines, pages = extract_lines(stem)
    print('#### %s.pdf — %d pages, %d lines' % (stem, pages, len(lines)))
    for n, l in enumerate(lines, 1):
        print('%6d\t%s' % (n, l))
