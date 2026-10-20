const assert=require('assert'),fs=require('fs'),vm=require('vm');const {genome}=require('../js/guides.js');let n=0;
function t(name,f){f();n++;console.log('ok - '+name)}
t('genome counts good/bad',()=>{const r=genome('ggyyyy');assert.deepStrictEqual([r.good,r.bad,r.counts.G,r.counts.Y],[6,0,2,4])});
t('genome flags W and X as bad',()=>{const r=genome('GYHWXX');assert.deepStrictEqual([r.good,r.bad,r.counts.X],[3,3,2])});
t('genome rejects wrong length / letters',()=>{assert.strictEqual(genome('GGY'),null);assert.strictEqual(genome('GGYYYZ'),null);assert.strictEqual(genome(''),null)});
t('genome ignores spaces and dashes',()=>assert.strictEqual(genome('G Y-H W X G').genome,'GYHWXG'));
// items data: ingredient lists reproduce the calculator's sulfur/gunpowder/explosives totals (gunpowder = 2 sulfur; Explosives = 110 sulfur, 50 gp)
const c={};vm.createContext(c);vm.runInContext(fs.readFileSync('data/items.js','utf8'),c);
const A={};vm.createContext(A);const src=fs.readFileSync('js/app.js','utf8');vm.runInContext(src.slice(src.indexOf('var X='),src.indexOf('(function(){\nvar ti=-1')),A);
const tot=i=>{let s=0,g=0,e=0;for(const [nm,q] of i.ing){if(nm==='Sulfur')s+=q;if(nm==='Gun Powder'){g+=q;s+=2*q}if(nm==='Explosives'){e+=q;g+=50*q;s+=110*q}}return[s/i.yield,g/i.yield,e/i.yield]};
const map={c4:'c4',rocket:'rk',hv:'hv',expammo:'ex'};
t('encyclopedia ingredient totals match calculator data (c4, rocket, hv, explosive ammo)',()=>{for(const [id,k] of Object.entries(map)){const it=c.ITEMS.find(i=>i.id===id),x=A.X.find(y=>y.k===k);assert.deepStrictEqual(tot(it),[x.s,x.g,x.xe],id)}});
t('verified items carry sources and a check date',()=>c.ITEMS.filter(i=>i.status==='verified'||i.status==='single_source').forEach(i=>{assert(i.src&&i.src.length&&/^\d{4}-\d\d-\d\d$/.test(i.checked),i.id);i.src.forEach(s=>assert(/^https:\/\//.test(s.u)))}));
t('loot chances are percentages and unique ids',()=>{const ids=c.ITEMS.map(i=>i.id);assert.strictEqual(new Set(ids).size,ids.length);c.ITEMS.filter(i=>i.loot).forEach(i=>i.loot.forEach(l=>assert(/^\d+(\.\d+)?%$/.test(l[2]))))});
console.log(n+' guides/data tests passed');
