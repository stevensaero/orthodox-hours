# Compact reader: groups lines into paragraphs by left indent, prints "a-b  head … tail".
import sys, pdfplumber
stem=sys.argv[1]
P="/mnt/user-data/uploads/Orthodox Hours/Menaion_St_Sergius/%s.pdf"%stem
n=0; out=[]; bad=0
with pdfplumber.open(P) as pdf:
    for pi,p in enumerate(pdf.pages,1):
        n+=1; out.append((n,None,'===== PAGE %d'%pi))
        d=p.dedupe_chars()
        txt=(d.extract_text() or '').split('\n')
        tl=d.extract_text_lines()
        if len(tl)!=len(txt): bad+=1; tl=[None]*len(txt)
        xs=[round(l['x0']) for l in tl if l]
        base=min(xs) if xs else 0
        for t,l in zip(txt,tl):
            n+=1; out.append((n, (round(l['x0'])-base) if l else -1, t))
print('#### %s  %d lines; pages with line mismatch: %d'%(stem,n,bad))
cur=None
def flush():
    global cur
    if cur:
        a,b,first,last=cur
        if a==b: print(a, first[:110])
        else: print('%d-%d'%(a,b), first[:46]+' … '+last[-14:])
    cur=None
for n,x,t in out:
    if x is None: flush(); print(n,t); continue
    if x!=0 or cur is None: flush(); cur=[n,n,t,t]
    else: cur[1]=n; cur[3]=t
flush()
