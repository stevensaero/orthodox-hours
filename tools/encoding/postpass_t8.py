# tone-8 §5 post-pass. Empirical tone-8 divergence set (verify_shared_t8):
#   - Tue-eve Vespers aposticha v2 DROPS a comma ("them, that"->"them that")
#   - Wed-eve Vespers aposticha v1 comma for period ("heaven, Behold")
#   - fri-eve departed v1 final period (5 tones running)
#   - thu Liturgy prokeimenon verse gains a * ; thu Alleluia digit-zero (7th tone)
#   - tue Liturgy prokeimenon verse "when I pray" (shared "make supplication")
#   - fri Liturgy Alleluia verse "before the ages," (comma; shared ";" semicolon)
#   - Saturday Matins departed THREE-verse set (reverts from 4-7..7-7 two-verse):
#     v1 "they" (shared "those"); v2 matches; v3 "from generation to generation"
#     (shared "unto...and")
#   - Gregory per-tone from 8-1: tracks tone 7 (Kingship/immutable/of the Virgin)
#     but "Kingship" prints HYPHENATED across a line break ("King- ship") -> sic.
#   - mon Liturgy communion: 8-2 does not reprint it; ref stands (not a divergence).
import json, re, sys
sys.path.insert(0,'/tmp/gen8')
import manifest as M
REPO='/tmp/oh'
RAW={f:open(f'/tmp/scan8/{f.replace("2-","8-")}.txt').read().split('\n') for f in ['2-1','2-3','2-4','2-5','2-6','2-7']}
def fl(L,m,s=0):
    for i in range(s,len(L)):
        if m.startswith('REGEX:'):
            if re.match(m[6:],L[i].strip()): return i
        elif m in L[i]: return i
    return -1
def extract(f,sm,em,occ=1,sa=None):
    L=RAW[f];pos=0
    if sa:
        p=fl(L,sa); assert p>=0,('sa',f,sa); pos=p+1
    s=-1
    for _ in range(occ):
        s=fl(L,sm,s+1 if s>=0 else pos); assert s>=0,(f,sm)
    blk=[L[s]] if em is None else L[s:fl(L,em,s)+1]
    return re.sub(r'\s+',' ',' '.join(x.strip() for x in blk if x.strip())).strip()
def node(text,f8,locus,strip=True,tier=None):
    if strip: text=re.sub(r'^(The )?Verse: ','',text)
    log=[]
    for cy,la in {'О':'O','М':'M','о':'o','С':'C','а':'a'}.items():
        n=text.count(cy)
        if n: text=text.replace(cy,la); log.append({'from':f'U+{ord(cy):04X} {cy} (Cyrillic)','to':la,'count':n})
    d={'text':text,'tier':tier if tier else (2 if '*' in text else 1),'src':{'file':f8,'locus':locus}}
    if log: d['homoglyph_log']=log
    return d
srcf=open(f'{REPO}/src/data/octoechos_v2/tone8.js').read()
t8=json.loads(srcf.split('export default ',1)[1].rstrip().rstrip(';'))

# 1 · Tue-eve Vespers aposticha (8-4): v2 drops a comma
t8['vespers_weekday']['tue']['aposticha']['verses']=[
  node(extract('2-4',*M.V_PAIR_STD_1),'8-4.pdf','Tuesday-evening Vespers aposticha verse 1 (byte-matches shared; stored with its per-tone partner)'),
  node(extract('2-4',*M.V_PAIR_STD_2),'8-4.pdf','Tuesday-evening Vespers aposticha verse 2 — DROPS the comma shared prints ("them that" for "them, that"); §5 per-tone')]
# 2 · Wed-eve Vespers aposticha (8-5): v1 comma for period
t8['vespers_weekday']['wed']['aposticha']['verses']=[
  node(extract('2-5',*M.V_PAIR_STD_1),'8-5.pdf','Wednesday-evening Vespers aposticha verse 1 — comma for period ("in heaven, Behold" for "in heaven. Behold"); §5 per-tone'),
  node(extract('2-5',*M.V_PAIR_STD_2),'8-5.pdf','Wednesday-evening Vespers aposticha verse 2 (byte-matches shared; stored with its per-tone partner)')]
# 3 · fri-eve departed (8-7): v1 final period
d=M.MANIFEST['departed_fri_eve']
t8['vespers_weekday']['fri']['aposticha']['verses']=[
  node(extract('2-7',*d['v1']),'8-7.pdf','Friday-evening Vespers aposticha, departed verse 1 (final period; §5 per-tone; 3-7/4-7/5-7/6-7/7-7 class)'),
  node(extract('2-7',*d['v2']),'8-7.pdf','Friday-evening Vespers aposticha, departed verse 2')]
# 4 · thu Liturgy prokeimenon (8-5): verse * ; text matches
m=M.MANIFEST['daily_liturgy_propers']['thu']; tp,prok,pv=m['prok']
t8['liturgy_weekday']['thu']['prokeimenon']={'tone':tp,
  'text':node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ','',extract('2-5',*prok)),'8-5.pdf','Thursday Liturgy prokeimenon (text byte-matches shared; per-tone beside its divergent verse)',strip=False),
  'verse':node(extract('2-5',*pv),'8-5.pdf','Thursday Liturgy prokeimenon verse — gains a * absent from shared (§5; 4-5/5-5/6-5/7-5 class)')}
# 5 · thu Alleluia digit-zero — 7th tone; ref stands
t8['liturgy_weekday']['thu']['alleluia_note']='8-5 prints the digit-zero "0 Lord" as 2-5..7-5 — seven tones running; normalized per §9.10; post-norm byte-matches shared, ref stands.'
# 6 · tue Liturgy prokeimenon (8-3): verse "when I pray"
mt=M.MANIFEST['daily_liturgy_propers']['tue']; ttp,tprok,tpv=mt['prok']
t8['liturgy_weekday']['tue']['prokeimenon']={'tone':ttp,
  'text':node(re.sub(r'^Prokeimenon, in Tone [IVX]+: ','',extract('2-3',*tprok)),'8-3.pdf','Tuesday Liturgy prokeimenon (text byte-matches shared; per-tone beside its divergent verse)',strip=False),
  'verse':node(extract('2-3',tpv[0],'unto Thee.'),'8-3.pdf','Tuesday Liturgy prokeimenon verse — "when I pray unto Thee" (shared "make supplication"); §5 word divergence (same as tone 7)')}
# 7 · fri Liturgy Alleluia (8-6): v0 comma for semicolon; text matches
mfa=M.MANIFEST['daily_liturgy_propers']['fri']; fat,falle,favs=mfa['all']
t8['liturgy_weekday']['fri']['alleluia']={'tone':fat,
  'text':node(re.sub(r'^Alleluia, in Tone [IVX]+: ','',extract('2-6',*falle)),'8-6.pdf','Friday Liturgy Alleluia (text byte-matches shared; per-tone beside its divergent verse)',strip=False),
  'verses':[node(extract('2-6',*favs[0]),'8-6.pdf','Friday Liturgy Alleluia verse — "before the ages," (comma) where shared prints ";" (semicolon); §5 per-tone')]}
# 8 · Saturday Matins departed aposticha (8-7): THREE-verse set; v1 "they", v3 "from...to"
sa='On the Aposticha, these Stichera of the departed'
t8['matins_weekday']['sat']['aposticha']['verses']=[
  node(extract('2-7','Verse: Blessed are they whom Thou hast chosen','REGEX:^О?\\s*Lord\\.?$',sa=sa),'8-7.pdf','Saturday Matins departed aposticha verse 1 — "they" (shared "those"); §5 per-tone'),
  node(extract('2-7','Verse: Their souls * shall dwell among good things.',None,sa=sa),'8-7.pdf','Saturday Matins departed aposticha verse 2 (byte-matches shared)'),
  node(extract('2-7','Verse: Their memorial * is from generation to generation.',None,sa=sa),'8-7.pdf','Saturday Matins departed aposticha verse 3 — "from generation to generation" (shared "unto...and"); THREE-verse set REVERTS from the 4-7..7-7 two-verse run (§5 per-tone)')]
# 9 · GREGORY — whole per-tone from 8-1 (tracks tone 7; "King- ship" hyphenated -> sic)
gr=M.MANIFEST['gregory']; old_rub=t8['nocturns']['gregory_rubric']['rubric']
div={1:' — "in godly manner" (no article) + "the one KING- SHIP and Dominion" (Kingship, as tone 7, but hyphenated across a line break — sic); 2-1/5-1 word-order side (§5 per-tone)',
     4:' — "I worship the beginningless God the Father" word order (§5 per-tone, as tone 7)',
     5:' — "Thou Creator of all" (shared "Creator"); "immutable" matches shared (§5 per-tone, as tone 7)',
     6:' — "Who became ineffably incarnate" word order (shared "ineffably became"); "of the Virgin" matches shared (§5 per-tone, as tone 7)'}
stanzas=[]
for i2,st in enumerate(gr['stanzas']):
    if i2==1: ext=extract('2-1','With divine songs let us all in','Dominion,').replace('King- ship','Kingship')  # DE-HYPHENATED per Bill's ruling (July 8 2026)
    elif i2==4: ext=extract('2-1','I worship the beginningless God the Father',st[1])
    else: ext=extract('2-1',*st)
    stanzas.append(node(ext,'8-1.pdf',f'Nocturns, hymn of Gregory the Sinaite, stanza {i2+1}{div.get(i2,"")}',strip=False))
t8['nocturns']['gregory_rubric']={'rubric':old_rub,'stanzas':stanzas,
  'provenance_note':'RULED (Bill, July 8 2026): Gregory stored PER-TONE in every tone. 8-1 tracks the tone-7 byte-state (Kingship / immutable / of the Virgin) but prints "Kingship" HYPHENATED across a line break ("King- ship") — kept verbatim + sic. Divergences at stanzas 2, 5, 6, 7. Shared table remains the 2-1 print.'}

header=srcf[:srcf.index('export default ')+len('export default ')]
open(f'{REPO}/src/data/octoechos_v2/tone8.js','w').write(header+json.dumps(t8,ensure_ascii=False,indent=2)+';\n')
print('post-pass ok — nodes:',json.dumps(t8).count('"src"'))
print('greg s2:',stanzas[1]['text'])
print('sat dep count:',len(t8['matins_weekday']['sat']['aposticha']['verses']),'| v3:',t8['matins_weekday']['sat']['aposticha']['verses'][2]['text'])
print('fri alle verse:',t8['liturgy_weekday']['fri']['alleluia']['verses'][0]['text'])
