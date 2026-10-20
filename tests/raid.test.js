// Run: node tests/raid.test.js   (data-consistency checks, not game-verification)
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(__dirname+'/../js/app.js','utf8');
const a=src.indexOf('var X=['),b=src.indexOf('(function(){\nvar ti=-1');
const ctx={};vm.createContext(ctx);vm.runInContext(src.slice(a,b),ctx);
const X=ctx.X,T=ctx.T;let pass=0;const t=(n,f)=>{f();pass++;console.log('ok -',n)};
const need=(tn,k)=>T.find(x=>x.e===tn).r[k];
t('all targets have positive health and damage tables',()=>T.forEach(x=>{assert(x.h>0);assert(Object.keys(x.d).length>0)}));
t('every damage key maps to a defined explosive',()=>T.forEach(x=>Object.keys(x.d).forEach(k=>assert(X.some(e=>e.k===k),k))));
t('required counts are ceil(health/damage)',()=>T.forEach(x=>Object.keys(x.d).forEach(k=>assert.strictEqual(x.r[k],Math.ceil(x.h/x.d[k]-1e-9)))));
t('stone wall: 2 C4, 4 rockets, 10 satchels',()=>{assert.strictEqual(need('Stone Wall','c4'),2);assert.strictEqual(need('Stone Wall','rk'),4);assert.strictEqual(need('Stone Wall','sa'),10)});
t('sheet metal wall: 4 C4',()=>assert.strictEqual(need('Sheet Metal Wall','c4'),4));
t('armored wall: 8 C4',()=>assert.strictEqual(need('Armored Wall (High Quality Metal)','c4'),8));
t('sheet metal door: 1 C4, 2 rockets',()=>{assert.strictEqual(need('Sheet Metal Door','c4'),1);assert.strictEqual(need('Sheet Metal Door','rk'),2)});
t('incendiary rocket only on wooden targets/turret/SAM (per original data)',()=>T.forEach(x=>{if('in' in x.d&&!['wood'].includes(x.c))assert(['Auto Turret','SAM Site'].includes(x.e),x.e)}));
t('C4 sulfur = 20*Explosives(50 gp) ... recipe arithmetic: 2200 = 2*1000 gp + 20*10',()=>{const c=X.find(x=>x.k==='c4');assert.strictEqual(c.s,2*c.g+c.xe*10)});
t('Rocket sulfur arithmetic: 1400 = 2*650 + 10*10',()=>{const c=X.find(x=>x.k==='rk');assert.strictEqual(c.s,2*c.g+c.xe*10)});
t('MLRS is non-craftable (cost 0, flagged free)',()=>{const m=X.find(x=>x.k==='ml');assert(m.free&&m.s===0)});
console.log(pass+' tests passed');
