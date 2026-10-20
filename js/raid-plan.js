/* Multi-target raid plan + min-cost explosive mix. Depends on globals X, T (app.js), Optimizer, I18N. */
(function(){
var root=document.getElementById("planroot");if(!root)return;root.setAttribute("data-mod","");
var t=I18N.t,F=function(n){return Math.round(n).toLocaleString("en-US")};
var st={rows:load(),allow:{},sel:0,msg:""},cache={};X.forEach(function(x){st.allow[x.k]=!x.free&&x.k!=="ex"});
function nm(o){return I18N.lang()==="en"?(I18N.nameEn(o.n)||o.e):o.n}
function load(){try{var a=JSON.parse(localStorage.getItem("rg_plan")||"[]");if(!Array.isArray(a))return[];
return a.filter(function(r){return r&&typeof r.id==="string"&&T.some(function(x){return x.e===r.id})}).map(function(r){return{id:r.id,q:clampQ(r.q)}})}catch(e){return[]}}
function clampQ(v){v=parseInt(v,10);return isNaN(v)?1:Math.max(1,Math.min(999,v))}
function save(){try{localStorage.setItem("rg_plan",JSON.stringify(st.rows))}catch(e){}}
function el(tag,c,s){var d=document.createElement(tag);if(c)d.className=c;if(s!==undefined)d.textContent=s;return d}
function sol(tg){var key=tg.e+"|"+X.map(function(x){return st.allow[x.k]?1:0}).join("");
if(!(key in cache))cache[key]={m:Optimizer.solve(tg,X,st.allow),s:Optimizer.single(tg,X,st.allow)};return cache[key]}
function mixText(c){return X.filter(function(x){return c[x.k]}).map(function(x){return nm(x)+" ×"+F(c[x.k])}).join(" + ")}
function compute(){var tot={s:0,g:0,x:0,single:0},rows=st.rows.map(function(r){var tg=T.filter(function(x){return x.e===r.id})[0],z=sol(tg);
if(!z.m)return{r:r,tg:tg,na:true};var a=Optimizer.totals(z.m.counts,X,r.q);tot.s+=a.sulfur;tot.g+=a.gunpowder;tot.x+=a.explosives;tot.single+=z.s.sulfur*r.q;return{r:r,tg:tg,z:z}});return{rows:rows,tot:tot}}
function planText(c){var L=[t("plan.h")];c.rows.forEach(function(w){L.push(w.r.q+"× "+nm(w.tg)+": "+(w.na?t("plan.row.na"):mixText(w.z.m.counts)))});
L.push(t("plan.tot.s")+": "+F(c.tot.s),t("plan.tot.g")+": "+F(c.tot.g),t("plan.tot.x")+": "+F(c.tot.x));return L.join("\n")}
function render(){root.textContent="";var box=el("section","p plan-box");box.id="plan";box.appendChild(el("h3","",t("plan.h")));box.appendChild(el("p","mt",t("plan.intro")));
var bar=el("div","pbar"),sl=el("select");sl.setAttribute("aria-label",t("plan.target"));T.forEach(function(x,i){var o=el("option","",nm(x));o.value=i;sl.appendChild(o)});sl.value=st.sel;sl.onchange=function(){st.sel=+sl.value};
var q=el("input");q.type="number";q.min=1;q.max=999;q.value=1;q.setAttribute("aria-label",t("plan.qty"));
var add=el("button","use",t("plan.add"));add.type="button";add.onclick=function(){var id=T[st.sel].e,n=clampQ(q.value),r=st.rows.filter(function(y){return y.id===id})[0];if(r)r.q=clampQ(r.q+n);else st.rows.push({id:id,q:n});st.msg="";save();render()};
bar.appendChild(sl);bar.appendChild(q);bar.appendChild(add);box.appendChild(bar);
box.appendChild(el("p","lbl",t("plan.allow")));var al=el("div","allow");
X.forEach(function(x){var lb=el("label","chk"),cb=el("input");cb.type="checkbox";cb.checked=!!st.allow[x.k];cb.disabled=!!x.free;cb.onchange=function(){st.allow[x.k]=cb.checked;render()};lb.appendChild(cb);lb.appendChild(el("span","",nm(x)));al.appendChild(lb)});box.appendChild(al);
box.appendChild(el("p","mt sm",t("plan.allow.note")+" "+t("plan.nofree")));
if(!st.rows.length){box.appendChild(el("div","empty",t("plan.empty")));root.appendChild(box);return}
var c=compute(),list=el("div","plist");
c.rows.forEach(function(w){var row=el("div","opt"),hd=el("div","ot");hd.appendChild(el("b","",nm(w.tg)));
var qi=el("input");qi.type="number";qi.min=1;qi.max=999;qi.value=w.r.q;qi.className="qin";qi.setAttribute("aria-label",t("plan.qty")+" "+nm(w.tg));qi.onchange=function(){w.r.q=clampQ(qi.value);save();render()};hd.appendChild(qi);
var rm=el("button","use",t("plan.remove"));rm.type="button";rm.onclick=function(){st.rows=st.rows.filter(function(y){return y!==w.r});save();render()};hd.appendChild(rm);row.appendChild(hd);
if(w.na){row.appendChild(el("p","stt",t("plan.row.na")))}else{var m=w.z.m,s=w.z.s;
row.appendChild(el("p","cv",t("plan.row.mix")+": "+mixText(m.counts)));
row.appendChild(el("p","cv",t("plan.row.sul")+": "+F(m.sulfur)+" · "+t("plan.row.over")+": "+F(m.overkill)+" · "+t("plan.row.single")+": "+mixText(s.counts)+" ("+F(s.sulfur)+")"+(s.sulfur>m.sulfur?" · "+t("plan.row.save")+": "+F((s.sulfur-m.sulfur)*w.r.q):"")))}
list.appendChild(row)});box.appendChild(list);
var tt=el("div","sum");[["plan.tot.s",c.tot.s],["plan.tot.g",c.tot.g],["plan.tot.x",c.tot.x],["plan.tot.single",c.tot.single],["plan.tot.save",c.tot.single-c.tot.s]].forEach(function(p){var d=el("div");d.appendChild(el("span","",t(p[0])+": "));d.appendChild(el("b","",F(p[1])));tt.appendChild(d)});
box.appendChild(el("h4","",t("plan.tot")));box.appendChild(tt);
var act=el("div","pbar"),cp=el("button","use",t("plan.copy")),cl=el("button","use",t("plan.clear"));cp.type=cl.type="button";
cp.onclick=function(){var tx=planText(c),ok=function(){st.msg=t("plan.copied");ms.textContent=st.msg},bad=function(){st.msg=t("plan.copyfail");ms.textContent=st.msg};try{navigator.clipboard.writeText(tx).then(ok,bad)}catch(e){bad()}};
cl.onclick=function(){st.rows=[];save();render()};act.appendChild(cp);act.appendChild(cl);box.appendChild(act);var ms=el("p","stt",st.msg);ms.setAttribute("role","status");box.appendChild(ms);
box.appendChild(el("div","note",t("plan.note")));root.appendChild(box)}
window.__planState=st;I18N.on(render);render()})();
