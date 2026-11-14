# tools/encoding/menaion_v2/daily_lib.py
# Menaion V2 DAILY encoding library (first used 14 Nov 2026, november.js).
#
# METHOD. Every element boundary is assigned BY HAND, by a person reading the
# extracted page: each map file (d_MM_DD*.py) names a key and the line range
# that key occupies. This library then lifts the BYTES of that range out of the
# PDF extraction, so nothing is retyped. It is not a classifier: it never
# decides what a line is. The only mechanical acts are
#   - joining the lines of a range (a line ending in "-" joins with NO space,
#     hyphen kept; ledger A-1),
#   - reading tier off the text (St. Sergius "*" present = Tier 2, else Tier 1;
#     the gate enforces the same equivalence),
#   - lifting a trailing "(Once)/(Twice)/(Thrice)" device into `repeat` (spec 2.8),
#   - reading a tone number out of a printed label ("in Tone VI").
# Extraction is pdfplumber with dedupe_chars(), as for general.js (spec 1.4).
#
# Line numbers are those of `python3 extract.py MM-DD` output (page markers
# included), which is what the encoder reads while writing the map.
import os, re
import pdfplumber

PDF_DIR = os.environ.get(
    'MENAION_PDF_DIR', '/mnt/user-data/uploads/Orthodox Hours/Menaion_St_Sergius')

ROMAN = {'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9}
DEVICE = {'Once': 1, 'Twice': 2, 'Thrice': 3}


def extract_lines(stem):
    out = []
    with pdfplumber.open(os.path.join(PDF_DIR, stem + '.pdf')) as pdf:
        for i, p in enumerate(pdf.pages, 1):
            out.append('===== PAGE %d' % i)
            out += (p.dedupe_chars().extract_text() or '').split('\n')
        n = len(pdf.pages)
    return out, n


def tone_of(label):
    m = re.search(r'\bTone (VIII|VII|VI|IV|IX|III|II|I|V)\b', label or '')
    return ROMAN[m.group(1)] if m else None


def ABS(note=None, reason='not_printed_in_source', basis='close_reading', **x):
    d = {'absent': True, 'reason': reason, 'basis': basis}
    if note:
        d['note'] = note
    d.update(x)
    return d


class Src:
    def __init__(self, stem):
        self.stem = stem
        self.file = stem + '.pdf'
        self.lines, self.pages = extract_lines(stem)
        self.used = set()          # line numbers consumed by some element
        self.skipped = {}          # line number -> reason (reading bodies etc.)

    # -- raw access ---------------------------------------------------------
    def page(self, n):
        p = 0
        for i in range(n):
            if self.lines[i].startswith('===== PAGE'):
                p = int(self.lines[i].split()[-1])
        return p

    def raw(self, a, b=None):
        b = a if b is None else b
        parts = []
        for n in range(a, b + 1):
            l = self.lines[n - 1]
            if l.startswith('===== PAGE'):
                continue
            self.used.add(n)
            parts.append(l.strip())
        s = ''
        for l in parts:
            if not s:
                s = l
            elif s.endswith('-'):
                s += l                      # hyphen kept, no space (ledger A-1)
            else:
                s += ' ' + l
        return re.sub(r'\s+', ' ', s).strip()

    def skip(self, a, b, reason):
        """Lines deliberately not stored (R-4 reading bodies). Declared, so the
        coverage report can tell 'excluded' from 'forgotten'."""
        for n in range(a, b + 1):
            self.skipped[n] = reason

    def mark(self, *ns):
        """Structural headings carried by the data's own keys, not stored as
        text: 'AT MATINS' is the `matins` key, 'ODE IV' is odes[4]."""
        for n in ns:
            self.used.add(n)

    def label(self, n, b=None):
        """A printed heading used as a sourceLabel: trailing colon dropped."""
        return re.sub(r'\s*:\s*$', '', self.raw(n, b))

    def specmel(self, n, b=None):
        t = self.raw(n, b)
        m = re.match(r'^Spec\.\s*Mel\.:?\W*[“"](.+)[”"]\s*:?\s*$', t)
        assert m, 'not a Spec. Mel. line %d: %r' % (n, t)
        return m.group(1)          # verbatim between the printed quotation marks

    # -- nodes --------------------------------------------------------------
    def node(self, text, a, desc, **x):
        d = {'text': text, 'tier': 2 if '*' in text else 1,
             'src': {'file': self.file, 'locus': 'p%d %s' % (self.page(a), desc)}}
        d.update({k: v for k, v in x.items() if v is not None})
        return d

    def t(self, a, b, desc, sl=None, sm=None, pre=None, device=True, **x):
        """Text node from lines a..b.
        sl  : line number (or (a,b)) of the printed label -> sourceLabel + tone
        sm  : line number of the Spec. Mel. line -> spec_mel
        pre : inline prefix that must open the text ("Irmos: "); it is removed
              from `text` and kept as sourceLabel with label_inline: true
        device: lift a trailing (Once)/(Twice)/(Thrice) into `repeat`
        """
        text = self.raw(a, b)
        if pre is not None:
            assert text.startswith(pre), 'line %d does not open with %r: %r' % (a, pre, text[:60])
            text = text[len(pre):].strip()
            x.setdefault('sourceLabel', re.sub(r'\s*:\s*$', '', pre.strip()))
            x.setdefault('label_inline', True)
        if device:
            m = re.search(r'\s*\((Once|Twice|Thrice)\)\.?$', text)
            if m:
                x.setdefault('repeat', DEVICE[m.group(1)])
                text = text[:m.start()].strip()
        if sl is not None:
            lab = self.label(*sl) if isinstance(sl, tuple) else self.label(sl)
            x.setdefault('sourceLabel', lab)
        if sm is not None:
            x.setdefault('spec_mel', self.specmel(sm))
        if 'tone' not in x:
            tn = tone_of(x.get('sourceLabel'))
            if tn:
                x['tone'] = tn
        return self.node(text, a, desc, **x)

    def r(self, a, b, desc):
        """A rubric: verbatim, devices NOT lifted (a rubric's '(Thrice)' is its text)."""
        return self.t(a, b, desc, device=False)

    def seq(self, start, ends, desc, sm=None, label='plain', first=None, **x):
        """Consecutive items: `start` is the first line, `ends` the last line of
        each item in turn. Each boundary is read off the page by the encoder."""
        out, a = [], start
        for i, b in enumerate(ends, 1):
            if self.lines[a - 1].startswith('===== PAGE'):
                a += 1
            extra = dict(x)
            if i == 1 and first:
                extra.update(first)
            out.append(self.t(a, b, '%s %d' % (desc, i), sm=sm, label=label, **extra))
            a = b + 1
        return out

    def reading(self, a, b, desc, heading, verbatim, citation):
        """R-4: heading + printed citation; the BODY (a+1..b) is not stored."""
        head = self.raw(a)
        assert head.replace(' ', '') == (heading + verbatim).replace(' ', ''), \
            'heading/citation do not reassemble line %d: %r' % (a, head)
        if b > a:
            self.skip(a + 1, b, 'R-4 reading body')
        return {'heading': heading, 'src': {'file': self.file, 'locus': 'p%d %s' % (self.page(a), desc)},
                'citation_verbatim': verbatim, 'citation': citation, 'citation_basis': 'printed'}

    def reading_id(self, a, b, desc, citation, note):
        """A lesson whose heading prints NO reference. The citation is supplied by
        a person (cross-file correspondence), never presented as verified: the
        gate lists every one on the worklist until the page is checked."""
        if b > a:
            self.skip(a + 1, b, 'R-4 reading body')
        return {'heading': self.raw(a), 'src': {'file': self.file, 'locus': 'p%d %s' % (self.page(a), desc)},
                'citation': citation, 'citation_basis': 'identified', 'provenance_note': note}

    def split_inline(self, a, b, desc_head, desc_body, **x):
        """'<rubric>: <text>' printed on one run: returns (rubric node, text node)."""
        head, body = self.raw(a, b).split(': ', 1)
        return (self.node(head + ':', a, desc_head), self.node(body, a, desc_body, label_inline=True, **x))

    def ode(self, n, irmos, ends, kat=None, labels=None):
        """One ode. irmos=(a,b); `ends` are the last lines of each troparion in
        order. A troparion printed with an inline 'Theotokion: ' (etc.) label is
        typed from that printed label, never from its position."""
        a0, b0 = irmos
        d = {'irmos': self.t(a0, b0, 'Ode %d irmos' % n, pre='Irmos: ')}
        items, a = [], b0 + 1
        for i, b in enumerate(ends, 1):
            while self.lines[a - 1].startswith('===== PAGE'):
                a += 1
            head = self.lines[a - 1].strip()
            m = re.match(r'^(Theotokion|Stavrotheotokion|Trinitarion|Glory \.\.\.|Both now \.\.\.): ', head)
            if m:
                lab = {'Theotokion': 'theotokion', 'Stavrotheotokion': 'stavrotheotokion',
                       'Trinitarion': 'trinitarion', 'Glory ...': 'glory', 'Both now ...': 'both_now'}[m.group(1)]
                items.append(self.t(a, b, 'Ode %d %s' % (n, m.group(1)), pre=m.group(0), label=lab))
            else:
                items.append(self.t(a, b, 'Ode %d troparion %d' % (n, i), label='plain'))
            a = b + 1
        d['items'] = items
        if kat is not None:
            d['katavasia'] = self.t(kat, kat, 'Ode %d katavasia' % n, pre='Katavasia: ')
        return d

    # -- coverage -----------------------------------------------------------
    def unaccounted(self, ignore=()):
        """Every extracted line must be stored, declared skipped, or named in
        `ignore` (page markers, the doubled-glyph ODE headings). What is left is
        printed text no element claims: the Martyr.pdf pp.3-4 failure, caught at
        build time instead of by a later cross-file census."""
        out = []
        for n, l in enumerate(self.lines, 1):
            if n in self.used or n in self.skipped or n in ignore:
                continue
            if l.startswith('===== PAGE') or not l.strip():
                continue
            out.append((n, l))
        return out


def same(*nodes):
    """R-1: the print sites of a canonical hymn must byte-match to share a field."""
    texts = {n['text'] for n in nodes}
    return len(texts) == 1
