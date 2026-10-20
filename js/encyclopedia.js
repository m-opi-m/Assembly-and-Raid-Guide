/* Item encyclopedia. Depends on ITEMS/CATS (data/items.js), IM (app.js), I18N. */
(function(){var root=document.getElementById("pg3");if(!root)return;root.setAttribute("data-mod","");var t=I18N.t,st={q:"",cat:""};
var ING_AR={"Explosives":"المتفجرات الجاهزة","Gun Powder":"البارود","Sulfur":"الكبريت","Charcoal":"الفحم","Metal Fragments":"الشظايا المعدنية","Cloth":"القماش","Tech Trash":"الخردة التقنية","Low Grade Fuel":"وقود منخفض الجودة","Metal Pipe":"الأنبوب المعدني","High Quality Metal":"المعدن عالي الجودة"};
function ingName(n,en){return en?n:(ING_AR[n]||n)}
function el(tag,c,s){var d=document.createElement(tag);if(c)d.className=c;if(s!==undefined)d.textContent=s;return d}
function render(){var en=I18N.lang()==="en";root.textContent="";root.appendChild(el("h2","",t("enc.h")));root.appendChild(el("p","mt",t("enc.intro")));
var bar=el("div","pbar"),q=el("input");q.type="search";q.value=st.q;q.placeholder=t("enc.search");q.setAttribute("aria-label",t("enc.search"));q.oninput=function(){st.q=q.value;list()};
var sl=el("select");sl.setAttribute("aria-label",t("enc.cat"));[["",t("enc.all")]].concat(CATS.map(function(c){return[c,t("cat."+c)]})).forEach(function(p){var o=el("option","",p[1]);o.value=p[0];sl.appendChild(o)});sl.value=st.cat;sl.onchange=function(){st.cat=sl.value;list()};
bar.appendChild(q);bar.appendChild(sl);root.appendChild(bar);var cnt=el("p","mt sm"),out=el("div","cards enc");cnt.setAttribute("role","status");root.appendChild(cnt);root.appendChild(out);
function list(){out.textContent="";var s=st.q.toLowerCase().trim(),a=ITEMS.filter(function(i){return(!st.cat||i.cat===st.cat)&&(!s||(i.en+" "+i.ar+" "+(I18N.nameEn(i.ar)||"")).toLowerCase().indexOf(s)>-1)});
cnt.textContent=t("enc.count",{n:a.length});if(!a.length){out.appendChild(el("div","empty",st.cat&&!s&&!ITEMS.some(function(i){return i.cat===st.cat})?t("enc.emptycat"):t("enc.empty")));return}
a.forEach(function(i){var c=el("article","encc"),h=el("div","ot");if(i.icon&&IM[i.icon]){var im=new Image();im.src=IM[i.icon];im.alt="";im.className="ic";im.loading="lazy";h.appendChild(im)}
var dn=en?(I18N.nameEn(i.ar)||i.en):i.ar;var b=el("b","",dn);h.appendChild(b);h.appendChild(el("span","eb st-"+i.status,t("st."+i.status)));c.appendChild(h);
if(!en||dn!==i.en){var e=el("small","mt",i.en);e.dir="ltr";c.appendChild(e)}c.appendChild(el("p","mt sm",t("cat."+i.cat)));
if(i.recipe){var r=i.recipe,tx=t("enc.recipe")+": "+r.sulfur+" "+ingName("Sulfur",en)+" · "+r.gunpowder+" "+ingName("Gun Powder",en)+(r.explosives?" · "+r.explosives+" "+ingName("Explosives",en):"")+(r.wb&&!i.ing?" · "+t("enc.wb")+": "+r.wb:"");var p=el("p","",tx);c.appendChild(p)}else if(!i.ing)c.appendChild(el("p","mt sm",t("enc.norecipe")));
if(i.ing){var ip=el("p","",t("enc.ing")+": "+i.ing.map(function(g){return ingName(g[0],en)+" ×"+g[1]}).join(" · ")+" · "+t("enc.yield")+": "+(i.yield||1)+(i.wbn?" · "+t("enc.wb")+": "+t("enc.lvl",{n:i.wbn}):""));c.appendChild(ip)}
if(i.note)c.appendChild(el("p","mt sm",i.note[en?"en":"ar"]));
if(i.rec){[["rad","enc.rec.rad"],["sz","enc.rec.sz"]].forEach(function(r){if(i.rec[r[0]])c.appendChild(el("p","mt sm",t(r[1])+": "+i.rec[r[0]].map(function(g){return ingName(g[0],en)+" ×"+g[1]+(g[2]!=="100%"?" ("+g[2]+")":"")}).join(" · ")))})}else c.appendChild(el("p","mt sm",t("enc.recycler")));
if(i.loot){c.appendChild(el("p","mt sm",t("enc.loot")+": "+i.loot.map(function(l){return l[0]+" ×"+l[1]+" ("+l[2]+")"}).join(" · ")))}
if(i.src&&i.src.length){var sp=el("p","mt sm src",t("enc.srcs")+": ");i.src.forEach(function(x,n){if(n)sp.appendChild(document.createTextNode(" · "));var A=el("a","",x.t);A.href=x.u;A.target="_blank";A.rel="noopener noreferrer";A.dir="ltr";sp.appendChild(A)});c.appendChild(sp);c.appendChild(el("p","mt sm",t("enc.checked")+": "+i.checked))}
else{var sr=el("p","mt sm",t("enc.source")+": "+(i.status==="community"?(en?"original project community tables":DB_SRC):"—")+" · "+t("enc.verified")+": "+t("enc.never"));c.appendChild(sr)}
if(!i.ing&&(i.status==="not_verified"||!i.recipe))c.appendChild(el("p","stt",t("enc.incomplete")));out.appendChild(c)})}list()}
I18N.on(render);render()})();
