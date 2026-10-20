"""Independent exhaustive cross-check of js/optimizer.js (exact Fraction arithmetic, no shared code).
Run from project root:  python3 tests/optimizer_crosscheck.py
Method: for every case enumerate all count vectors of the first k-1 explosives within the redundancy bound
ceil(h/d_i) (any larger count is never needed in an optimum), derive the minimal count of the last explosive
analytically, and keep the (sulfur, item count) lexicographic minimum. Compared with the DP result."""
import json,subprocess,re,itertools,random,sys,math
from fractions import Fraction as Fr
src=open('js/app.js',encoding='utf-8').read()
node=subprocess.run(['node','-e',"""const fs=require('fs'),vm=require('vm');const s=fs.readFileSync('js/app.js','utf8');const c={};vm.createContext(c);
vm.runInContext(s.slice(s.indexOf('var X='),s.indexOf('(function(){\\nvar ti=-1')),c);console.log(JSON.stringify({X:c.X,T:c.T}))"""],capture_output=True,text=True,check=True).stdout
D=json.loads(node);X=D['X'];T=D['T']
def exhaustive(h,d,s,keys):
    """d,s: dict key->Fraction ; returns (min sulfur, min items) or None"""
    ks=[k for k in keys if d.get(k,0)>0]
    if not ks: return None
    ks.sort(key=lambda k:-d[k]);last=ks[-1];rest=ks[:-1]
    bnd=[math.ceil(h/d[k]) for k in rest]
    best=None
    for combo in itertools.product(*[range(b+1) for b in bnd]):
        dm=sum(n*d[k] for n,k in zip(combo,rest));cost=sum(n*s[k] for n,k in zip(combo,rest));items=sum(combo)
        need=h-dm;nl=0 if need<=0 else math.ceil(need/d[last])
        cand=(cost+nl*s[last],items+nl)
        if best is None or cand<best: best=cand
    return best
def run_dp(cases):
    r=subprocess.run(['node','tests/crosscheck_dp.js'],input=json.dumps(cases),capture_output=True,text=True,check=True);return json.loads(r.stdout)
fails=[];total=0
# ---- A: real data, all 14 targets x all 63 non-empty subsets of the 6 craftable explosives
craft=[x for x in X if not x.get('free')];ck=[x['k'] for x in craft];cases=[];meta=[]
for t in T:
    for m in range(1,1<<len(ck)):
        allow={k:bool(m>>i&1) for i,k in enumerate(ck)};cases.append({'X':[{'k':x['k'],'s':x['s'],'free':x.get('free',0)} for x in X],'h':t['h'],'d':t['d'],'allow':allow})
        sel=[k for k in ck if allow[k]];meta.append((t['e'],sel,Fr(str(t['h'])),{k:Fr(str(v)) for k,v in t['d'].items()},{x['k']:Fr(x['s']) for x in X}))
res=run_dp(cases);nullok=0
for (name,sel,h,d,s),r in zip(meta,res):
    total+=1;ex=exhaustive(h,d,s,sel)
    if ex is None:
        if r is not None: fails.append(('A-null',name,sel,r))
        else: nullok+=1
        continue
    if r is None or 'error' in r: fails.append(('A-missing',name,sel,r));continue
    if r['sulfur']!=ex[0]: fails.append(('A-cost',name,sel,r['sulfur'],ex[0]))
    elif r['items']!=ex[1]: fails.append(('A-items(tie-break)',name,sel,r['items'],ex[1]))
    else:
        dm=sum(n*d[k] for k,n in r['counts'].items())
        if dm<h: fails.append(('A-insufficient',name,sel,r))
print(f'A real data: {total} cases ({nullok} correctly unsupported), mismatches so far: {len(fails)}')
# ---- B: synthetic small cases, damages with 3 decimals (the project's precision)
random.seed(7)
def synth(dec,n):
    out=[];mt=[]
    for _ in range(n):
        k=random.randint(1,4);ks=['a','b','c','d'][:k]
        d={q:Fr(random.randint(10**dec//2,40*10**dec),10**dec) for q in ks}
        s={q:random.randint(1,60)*10 for q in ks}
        h=Fr(random.randint(5,120));allow={q:True for q in ks}
        cs={'X':[{'k':q,'s':s[q]} for q in ks],'h':float(h),'d':{q:float(d[q]) for q in ks},'allow':allow}
        out.append(cs);mt.append((h,d,{q:Fr(s[q]) for q in ks},ks))
    return out,mt
for dec,label in((3,'B 3-decimal'),(4,'B 4-decimal'),(5,'B 5-decimal')):
    cs,mt=synth(dec,400);rs=run_dp(cs);bad=0;worse=[]
    for c,(h,d,s,ks),r in zip(cs,mt,rs):
        # compare against exact rational values of the *stored floats* so both sides see identical inputs
        d2={q:Fr(c['d'][q]) for q in ks};h2=Fr(c['h']);ex=exhaustive(h2,d2,s,ks)
        if 'error' in r: bad+=1;worse.append(('error',r));continue
        if r['sulfur']!=ex[0]:
            bad+=1;worse.append((int(r['sulfur']),int(ex[0])))
    print(f'{label}: 400 cases, DP cost != exact optimum in {bad}'+(f' e.g. {worse[:4]}' if bad else ''))
    total+=400
    if dec==3 and bad: fails.append(('B3',bad,worse[:3]))
print('TOTAL cases',total,'| FAILURES in project-precision cases:',len(fails))
for f in fails[:15]:print('  ',f)
sys.exit(1 if fails else 0)
