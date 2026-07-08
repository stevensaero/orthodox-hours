# tone-1 §5 post-pass. Empirical set (verify_shared_t1):
#   - Thursday-eve Vespers aposticha v1 stray period ("dwellest. in heaven")
#   - fri-eve departed v1 final period
#   - fri Liturgy Alleluia verse comma-for-semicolon ("before the ages,")
#   - Saturday Matins departed THREE-verse set: v1 "they", v3 "from generation to
#     generation" (shared "those"/"unto...and")
#   - Gregory per-tone from 1-1: tracks the tone-5/6 byte-state — "Sovereignty"
#     (NOT Kingship), "in godly manner" (no article), "unshakable", "from the
#     Virgin"; s5 MATCHES shared.
#   - NO digit-zero (tone 1 prints "O Lord"); NO thu/tue prokeimenon divergence.
#   - mon-eve Vespers v1 byte-MATCHES shared (verify window artifact) — ref stands.
import json, re, sys
sys.path.insert(0,'/tmp/gen1')
import manifest as M
REPO='/tmp/oh'
RAW={f:open(f'/tmp/scan1/{f.replace("2-","1-")}.txt').read().split('\n') for f in ['2-1','2-6','2-7']}
def fl(L,m,s=0):
    for i in range(s,len(L)):
        if m.startswith('REGEX:'):
            if re.match(m[6:],L[i].strip()):return i
        elif m in L[i]:return i
    return -1
def extract(f,sm,em,occ=1,sa=None):
    L=RAW[f];pos=0
    if sa:
        p=fl(L,sa);assert p>=0,('sa',f,sa);pos=p+1
    s=-1
    for _ in range(occ):
        s=fl(L,sm,s+1 if s>=0 else pos);assert s>=0,(f,sm)
    blk=[L[s]] if em is None else L[s:fl(L,em,s)+1]
    return re.sub(r'\s+',' ',' '.join(x.strip() for x in blk if x.strip())).strip()
def node(text,f1,locus,strip=True,tier=None):
    if strip: text=re.sub(r'^(The )?Verse: ','',text)
    log=[]
    for cy,la in {'О':'O','М':'M','о':'o','С':'C','а':'a'}.items():
        n=text.count(cy)
        if n: text=text.replace(cy,la); log.append({'from':f'U+{ord(cy):04X} {cy} (Cyrillic)','to':la,'count':n})
    d={'text':text,'tier':tier if tier else (2 if '*' in text else 1),'src':{'file':f1,'locus':locus}}
    if log: d['homoglyph_log']=log
    return d
srcf=open(f'{REPO}/src/data/octoechos_v2/tone1.js').read()
t1=json.loads(srcf.split('export default ',1)[1].rstrip().rstrip(';'))

# 1 · Thursday-eve Vespers aposticha (1-6): v1 stray period "dwellest. in heaven"
t1['vespers_weekday']['thu']['aposticha']['verses']=[
  node(extract('2-6',*M.V_PAIR_STD_1),'1-6.pdf','Thursday-evening Vespers aposticha verse 1 — stray period "dwellest. in heaven" (shared: "dwellest in heaven"); §5 per-tone'),
  node(extract('2-6',*M.V_PAIR_STD_2),'1-6.pdf','Thursday-evening Vespers aposticha verse 2 (byte-matches shared; stored with its per-tone partner)')]
# 2 · fri-eve departed (1-7): v1 final period
d=M.MANIFEST['departed_fri_eve']
t1['vespers_weekday']['fri']['aposticha']['verses']=[
  node(extract('2-7',*d['v1']),'1-7.pdf','Friday-evening Vespers aposticha, departed verse 1 (final period; §5 per-tone; 3-7..8-7 class)'),
  node(extract('2-7',*d['v2']),'1-7.pdf','Friday-evening Vespers aposticha, departed verse 2')]
# 3 · fri Liturgy Alleluia (1-6): v0 comma-for-semicolon; text matches
mfa=M.MANIFEST['daily_liturgy_propers']['fri']; fat,falle,favs=mfa['all']
t1['liturgy_weekday']['fri']['alleluia']={'tone':fat,
  'text':node(re.sub(r'^Alleluia, in Tone [IVX]+: ','',extract('2-6',*falle)),'1-6.pdf','Friday Liturgy Alleluia (text byte-matches shared; per-tone beside its divergent verse)',strip=False),
  'verses':[node(extract('2-6',*favs[0]),'1-6.pdf','Friday Liturgy Alleluia verse — "before the ages," (comma) where shared prints ";" (semicolon); §5 per-tone')]}
# 4 · Saturday Matins departed (1-7): THREE-verse set; v1 "they", v3 "from...to"
sa='On the Aposticha, these Stichera of the departed'
t1['matins_weekday']['sat']['aposticha']['verses']=[
  node(extract('2-7','Verse: Blessed are they whom Thou hast chosen','REGEX:^О?\\s*Lord\\.?$',sa=sa),'1-7.pdf','Saturday Matins departed aposticha verse 1 — "they" (shared "those"); §5 per-tone'),
  node(extract('2-7','Verse: Their souls * shall dwell among good things.',None,sa=sa),'1-7.pdf','Saturday Matins departed aposticha verse 2 (byte-matches shared)'),
  node(extract('2-7','Verse: Their memorial * is from generation to generation.',None,sa=sa),'1-7.pdf','Saturday Matins departed aposticha verse 3 — "from generation to generation" (shared "unto...and"); THREE-verse set (as tone 8; §5 per-tone)')]
# 5 · GREGORY — whole per-tone from 1-1 (tracks tone-5/6 byte-state)
gr=M.MANIFEST['gregory']; old_rub=t1['nocturns']['gregory_rubric']['rubric']
div={1:' — "in godly manner" (no article); "the one Sovereignty and Dominion" (NOT tone-7/8 "Kingship"); 2-1/5-1 word-order side (§5 per-tone)',
     5:' — "unshakable" (shared "immutable"; §5 per-tone, as tones 5/6)',
     6:' — "incarnate from the Virgin" (shared "of the Virgin"; §5 per-tone, as tones 5/6)'}
stanzas=[]
for i2,st in enumerate(gr['stanzas']):
    if i2==1: ext=extract('2-1','With divine songs let us all in','Dominion,')
    else: ext=extract('2-1',*st)
    stanzas.append(node(ext,'1-1.pdf',f'Nocturns, hymn of Gregory the Sinaite, stanza {i2+1}{div.get(i2,"")}',strip=False))
t1['nocturns']['gregory_rubric']={'rubric':old_rub,'stanzas':stanzas,
  'provenance_note':'RULED (Bill, July 8 2026): Gregory stored PER-TONE. 1-1 tracks the tone-5/6 byte-state — "Sovereignty" (not the tone-7/8 "Kingship"), "in godly manner" (no article), "unshakable", "from the Virgin"; stanza 5 matches shared. Divergences at stanzas 2, 6, 7. Shared table remains the 2-1 print.'}

header=srcf[:srcf.index('export default ')+len('export default ')]
open(f'{REPO}/src/data/octoechos_v2/tone1.js','w').write(header+json.dumps(t1,ensure_ascii=False,indent=2)+';\n')
print('post-pass ok — nodes:',json.dumps(t1).count('"src"'))
print('greg s2:',stanzas[1]['text'][-45:])
print('thu-eve v1 tail:',repr(t1['vespers_weekday']['thu']['aposticha']['verses'][0]['text'][:55]))
print('sat dep count:',len(t1['matins_weekday']['sat']['aposticha']['verses']))
