# Shared library for tone-2 weekday generation (§11 step 5): the proven 2-1
# tokenizer + node factory with §9.10 homoglyph logging + Shape B parser with
# the §2.7 incipit device. Bytes flow from the -layout text; nothing retyped.
import re

ROM2N = {'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9}
def ode_of(t):
    m = re.match(r'^ODE(VIII|VII|VI|IX|IV|III|II|I|V)$', t.replace(' ', ''))
    return ROM2N[m.group(1)] if m else None

VERSE_CLASS = re.compile(r'^(The )?Verse: |^Refrain: |^(The )?Prokeimenon|^Communion Verse: |^Alleluia, in Tone|^Spec\. Mel\.')
TERMINAL = re.compile(r'[.!?”’)]$|:$')
BLOCK_START = re.compile(r'^((The )?Verse:|Refrain: |Alleluia, in Tone|Irmos: |Communion Verse: |Glory \.\.\.,|Both now \.\.\.,|Theotokion: |Trinitarion: |To the martyrs: |For the reposed: |Then the Stichera from the Menaion|Then, “|Vouchsafe, |On the Aposticha|Spec\. Mel\.)')

def tokenize(path):
    raw = open(path).read().replace('\x0c', '\n')
    paras, cur = [], None
    for l in raw.split('\n'):
        stripped = l.strip()
        indent = len(l) - len(l.lstrip())
        if not stripped:
            cur = None; continue
        if indent >= 8:
            paras.append({'kind': 'heading', 'text': stripped}); cur = None; continue
        if indent >= 2 or stripped.startswith('Irmos:') or (cur is None) or BLOCK_START.match(stripped):
            cur = {'kind': 'para', 'text': stripped}; paras.append(cur); continue
        cur['text'] += ' ' + stripped
    for p in paras: p['text'] = re.sub(r'\s+', ' ', p['text']).strip()
    merged = []
    CANON_HEAD = ('Canon of ', 'Canon to ', 'Another canon', 'And then, the Canon')
    for p in paras:
        if merged and merged[-1]['kind'] == 'para' and merged[-1]['text'].startswith(CANON_HEAD) \
           and not merged[-1]['text'].rstrip().endswith(':') and p['kind'] == 'para' \
           and not p['text'].startswith('Irmos:'):
            merged[-1]['text'] += ' ' + p['text']
        elif merged and merged[-1]['kind'] == 'para' and VERSE_CLASS.match(merged[-1]['text']) \
           and not TERMINAL.search(merged[-1]['text']) and p['kind'] == 'para':
            merged[-1]['text'] += ' ' + p['text']
        else:
            merged.append(p)
    return merged

RUBRIC_O_COUNT = {'n': 0}
HOMOGLYPHS = {'О': 'O', 'М': 'M', 'о': 'o'}   # U+041E, U+041C, U+043E (3-6/3-7 additions)
def norm(s):
    # §9.10 normalize-at-encode for rubric/metadata strings; session-level
    # count reported in project notes (text nodes carry per-node logs).
    for c, r in HOMOGLYPHS.items():
        n = s.count(c)
        if n: RUBRIC_O_COUNT['n'] += n; s = s.replace(c, r)
    return s

def make_node(filename):
    def node(text, locus, tier=None, strip_label=None, **extra):
        if strip_label:
            text = re.sub(strip_label, '', text)
        log = []
        for cy, la in HOMOGLYPHS.items():
            n = text.count(cy)
            if n:
                text = text.replace(cy, la)
                log.append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic)', 'to': la, 'count': n})
        assert text.strip(), locus
        d = {'text': text, 'tier': tier if tier is not None else (2 if '*' in text else 1),
             'src': {'file': filename, 'locus': locus}}
        if log: d['homoglyph_log'] = log
        for k, v in extra.items():
            if v is None: continue
            if isinstance(v, str) and any(c in v for c in HOMOGLYPHS):
                for cy, la in HOMOGLYPHS.items():
                    if cy in v:
                        v = v.replace(cy, la)
                        d.setdefault('homoglyph_log', []).append({'from': f'U+{ord(cy):04X} {cy} (Cyrillic), in {k}', 'to': la, 'count': 1})
            d[k] = v
        return d
    return node

LABELS = [('To the martyrs: ', 'martyrs'), ('For the reposed: ', 'for_the_reposed'),
          ('Theotokion: ', 'theotokion'), ('Trinitarion: ', 'trinitarion'),
          ('Glory ..., For the reposed: ', ['glory', 'for_the_reposed']),
          ('Glory ..., ', 'glory'), ('Both now ..., ', 'both_now')]

def label_split(t):
    pairs = [('Glory ..., For the reposed: ', ['glory', 'for_the_reposed']),
             ('Both now ..., Theotokion: ', ['both_now', 'theotokion']),
             ('Glory ..., Theotokion: ', ['glory', 'theotokion']),
             ('Glory: ', 'glory')] + LABELS
    for prefix, lab in pairs:
        if t.startswith(prefix):
            return lab, t[len(prefix):], prefix.rstrip()
    return 'plain', t, None

def item_node(node, t, locus, refrain=None):
    lab, text, printed = label_split(t)
    rep = None
    if text.endswith('(Twice)'):
        rep, text = 2, text[:-len('(Twice)')].strip()
    src_label = printed if printed and lab not in ('plain',) and not isinstance(lab, str) or isinstance(lab, list) else None
    return node(text, locus, label=lab, repeat=rep, refrain=refrain,
                sourceLabel=(printed if isinstance(lab, list) else None))

def is_incipit(text):
    return bool(re.search(r'(\.\.\.|…),?$', text.strip()))
