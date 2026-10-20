/* Guides tab: raid prep checklist (derived from the raid plan), farming + genes, monuments + loot.
   Depends on X, T (app.js), ITEMS (data/items.js), Optimizer, I18N, window.__planState (raid-plan.js).
   Only sourced content is shown; every section lists its sources and what is not covered. */
(function(){function genome(s){s=String(s||"").toUpperCase().replace(/[\s,\-]/g,"");if(s.length!==6||/[^GYHWX]/.test(s))return null;var c={G:0,Y:0,H:0,W:0,X:0};s.split("").forEach(function(x){c[x]++});return{counts:c,good:c.G+c.Y+c.H,bad:c.W+c.X,genome:s}}
if(typeof module!=="undefined")module.exports={genome:genome};
if(typeof document==="undefined")return;var root=document.getElementById("pg4");if(!root)return;root.setAttribute("data-mod","");
var L={ar:{
h:"الأدلة وقوائم التجهيز",intro:"قوائم تجهيز وأدلة مبنية على بيانات المشروع وعلى مصادر مذكورة تحت كل قسم. ما لا يوجد له مصدر موثوق لم يُضف.",
raid:"قائمة تجهيز الغارة",raidIntro:"تُبنى تلقائياً من خطة الغارة (تبويب حاسبة الغارة). علّم ما جهّزته؛ العلامات تُحفظ على جهازك.",
raidEmpty:"خطة الغارة فارغة. أضف أهدافاً في تبويب حاسبة الغارة وستظهر هنا قائمة التجهيز.",
raidNote:"الأعداد مأخوذة من خطة الغارة (جداول مجتمعية غير مؤكدة بالكامل). لا تشمل القائمة اللوجستيات (الاتجاه، التسلسل، إعادة المحاولة).",
bring:"جهّز",need:"الكبريت اللازم",gp:"البارود اللازم",xp:"المتفجرات الجاهزة (Explosives) اللازمة",reset:"مسح العلامات",done:"{a} من {b} جاهز",
farm:"الزراعة والجينات",water:"قائمة تجهيز الماء",waterSrc:"المصدر: Facepunch Wiki، صفحة Farming Basics",
w1:"مصدر ماء عذب (نهر أو بحيرة): شغّل مضخة مياه ووصّل خرجها مباشرة بما يصل إلى 4 رشّاشات",
w2:"إن كان الماء مالحاً فقط: وصّل مضختين بمنقّي مياه مشغّل، ثم وصّل خرجه بما يصل إلى 4 رشّاشات",
w3:"إن لم يوجد ماء قريب: استخدم براميل ماء؛ يمكن توصيل ما يصل إلى 6 رشّاشات ببرميل واحد",
genes:"مرجع الجينات",geneSrc:"المصدر: Facepunch Wiki، صفحتا Farming وFarming Basics. للنبتة 6 خانات جينية، وكل خانة واحد من 5 أنواع.",
g:"الجين",mean:"المعنى",kind:"النوع",good:"جيد",bad:"سيئ",
G:"سرعة النمو",Y:"زيادة المحصول",H:"زيادة التحمّل (مقاومة الحرارة)",W:"زيادة استهلاك الماء",X:"فارغ (بلا أثر)",
chk:"افحص جينوم نبتة",chkHint:"اكتب 6 حروف من G Y H W X (مثال: GGYYYY)",chkBtn:"افحص",
chkBad:"أدخل 6 حروف بالضبط من G Y H W X.",chkRes:"جيدة: {g} · سيئة: {b}",chkClean:"لا توجد جينات سيئة (W/X).",chkSome:"فيها جينات سيئة (W/X): {b}.",
chkNote:"الفحص يعدّ الجينات فقط حسب تصنيف الويكي (G/Y/H جيدة، W/X سيئة) ولا يقترح تهجيناً.",
img:"مرجع مواضع الجينات في الحوض (صورة مرفقة مع المشروع؛ لم يُتحقق من معنى الألوان من مصدر خارجي)",
notCovered:"غير مغطّى بعد: مواقيت النمو، مواقع الزراعة، خوارزمية التهجين.",
mon:"المعالم واللوت",monIntro:"سلّم بطاقات الدخول كما تتفق عليه الأدلة المجتمعية. التفاصيل (أي معلم يتبع أي مستوى) تختلف بين المصادر لذلك لا تُعرض هنا كجدول.",
m1:"ثلاث بطاقات: خضراء، زرقاء، حمراء. تستخدم الخضراء للوصول إلى غرفة فيها الزرقاء، والزرقاء للوصول إلى الحمراء، والحمراء تفتح غرف اللوت العليا.",
m2:"بعض الألغاز تحتاج أيضاً إلى فيوز (fuse) إلى جانب البطاقة.",
m3:"معالم تُذكر عادةً بأنها تحتاج بطاقة حمراء: Launch Site وMilitary Tunnels. المصادر تختلف حول منصات النفط.",
monSrc:"المصادر (مجتمعية، غير رسمية)",monNot:"غير مغطّى: جداول المعالم الكاملة وأحمال اللوت لكل معلم لعدم وجود مصدر موثوق متفق عليه.",
loot:"مصادر لوت العناصر الموثّقة",lootSrc:"الأرقام من صفحات العناصر في Facepunch Wiki؛ آخر مراجعة {d}. كل صف: المصدر، الكمية، الاحتمال.",
src:"المصدر",amt:"الكمية",chance:"الاحتمال"},
en:{
h:"Guides and prep checklists",intro:"Prep checklists and guides built from project data and from the sources listed under each section. Anything without a reliable source was left out.",
raid:"Raid prep checklist",raidIntro:"Built automatically from your raid plan (Raid calculator tab). Tick what you have ready; ticks are saved on your device.",
raidEmpty:"The raid plan is empty. Add targets in the Raid calculator tab and the checklist appears here.",
raidNote:"Counts come from the raid plan (community tables, not fully verified). The list does not cover logistics (direction, sequencing, retries).",
bring:"Prepare",need:"Sulfur needed",gp:"Gunpowder needed",xp:"Explosives (crafting component) needed",reset:"Clear ticks",done:"{a} of {b} ready",
farm:"Farming and genes",water:"Water setup checklist",waterSrc:"Source: Facepunch Wiki, Farming Basics page",
w1:"Fresh water (river or lake): power a water pump and plug its output straight into up to 4 sprinklers",
w2:"Salt water only: plug 2 water pumps into a powered water purifier, then plug its output into up to 4 sprinklers",
w3:"No water nearby: use water barrels; up to 6 sprinklers can be plugged into one barrel",
genes:"Gene reference",geneSrc:"Source: Facepunch Wiki, Farming and Farming Basics pages. A plant has 6 gene slots, each holding one of 5 gene types.",
g:"Gene",mean:"Meaning",kind:"Type",good:"Good",bad:"Bad",
G:"Growth rate",Y:"Increased yield",H:"Increased hardiness (temperature resistance)",W:"Increased water intake",X:"Empty (no effect)",
chk:"Check a plant genome",chkHint:"Type 6 letters from G Y H W X (e.g. GGYYYY)",chkBtn:"Check",
chkBad:"Enter exactly 6 letters from G Y H W X.",chkRes:"Good: {g} · Bad: {b}",chkClean:"No bad genes (W/X).",chkSome:"Has bad genes (W/X): {b}.",
chkNote:"The check only counts genes using the wiki's classification (G/Y/H good, W/X bad); it does not suggest crossbreeding.",
img:"Reference for gene positions in the planter (image supplied with the project; the colour meaning was not verified against an outside source)",
notCovered:"Not covered yet: growth timings, planting locations, crossbreeding algorithm.",
mon:"Monuments and loot",monIntro:"The keycard ladder as community guides agree on it. Details (which monument belongs to which tier) differ between sources, so no table is shown here.",
m1:"Three keycards: green, blue, red. Green reaches a room that holds a blue card, blue reaches a red card, and red opens the top loot rooms.",
m2:"Some puzzles also need a fuse alongside the card.",
m3:"Monuments commonly listed as needing a red card: Launch Site and Military Tunnels. Sources disagree about the oil rigs.",
monSrc:"Sources (community, unofficial)",monNot:"Not covered: full monument tables and per-monument loot, because no reliable agreed source was found.",
loot:"Loot sources of documented items",lootSrc:"Numbers come from Facepunch Wiki item pages; last checked {d}. Each row: source, amount, chance.",
src:"Source",amt:"Amount",chance:"Chance"}};
var GENES=["G","Y","H","W","X"],BAD={W:1,X:1},KEY="rg_chk";
function lang(){return I18N.lang()==="en"?"en":"ar"}
function t(k,a){var s=L[lang()][k];return a?s.replace(/\{(\w+)\}/g,function(m,n){return a[n]!==undefined?a[n]:m}):s}
function el(tag,c,s){var d=document.createElement(tag);if(c)d.className=c;if(s!==undefined)d.textContent=s;return d}
function F(n){return Math.round(n).toLocaleString("en-US")}
function nm(o){return lang()==="en"?(I18N.nameEn(o.n)||o.e):o.n}
function link(txt,u){var a=el("a","",txt);a.href=u;a.target="_blank";a.rel="noopener noreferrer";a.dir="ltr";return a}
function loadChk(){try{var o=JSON.parse(localStorage.getItem(KEY)||"{}");return o&&typeof o==="object"&&!Array.isArray(o)?o:{}}catch(e){return{}}}
function saveChk(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
var chk=loadChk();
function checkItem(parent,id,label,onchange){var lb=el("label","chk"),cb=el("input");cb.type="checkbox";cb.checked=!!chk[id];
cb.onchange=function(){if(cb.checked)chk[id]=1;else delete chk[id];saveChk(chk);if(onchange)onchange()};lb.appendChild(cb);lb.appendChild(el("span","",label));parent.appendChild(lb);return cb}
/* ---- raid prep, derived from plan */
function raidItems(){var st=window.__planState;if(!st||!st.rows||!st.rows.length||typeof Optimizer==="undefined")return null;
var need={},tot={s:0,g:0,x:0};
st.rows.forEach(function(r){var tg=T.filter(function(x){return x.e===r.id})[0];if(!tg)return;var m=Optimizer.solve(tg,X,st.allow);if(!m)return;
Object.keys(m.counts).forEach(function(k){need[k]=(need[k]||0)+m.counts[k]*r.q});var a=Optimizer.totals(m.counts,X,r.q);tot.s+=a.sulfur;tot.g+=a.gunpowder;tot.x+=a.explosives});
var items=X.filter(function(x){return need[x.k]}).map(function(x){return{id:"raid:"+x.k+":"+need[x.k],label:t("bring")+": "+nm(x)+" ×"+F(need[x.k])}});
items.push({id:"raid:s:"+tot.s,label:t("need")+": "+F(tot.s)},{id:"raid:g:"+tot.g,label:t("gp")+": "+F(tot.g)});if(tot.x)items.push({id:"raid:x:"+tot.x,label:t("xp")+": "+F(tot.x)});return items}
function render(){root.textContent="";root.appendChild(el("h2","",t("h")));root.appendChild(el("p","mt",t("intro")));
/* 1 raid */
var s1=el("section","p plan-box");s1.appendChild(el("h3","",t("raid")));s1.appendChild(el("p","mt",t("raidIntro")));
var it=raidItems();if(!it)s1.appendChild(el("div","empty",t("raidEmpty")));else{var list=el("div","allow"),prog=el("p","stt");prog.setAttribute("role","status");
function upd(){var n=it.filter(function(x){return chk[x.id]}).length;prog.textContent=t("done",{a:n,b:it.length})}
it.forEach(function(x){checkItem(list,x.id,x.label,upd)});s1.appendChild(list);s1.appendChild(prog);upd();
var rs=el("button","use",t("reset"));rs.type="button";rs.onclick=function(){it.forEach(function(x){delete chk[x.id]});saveChk(chk);render()};s1.appendChild(rs);s1.appendChild(el("div","note",t("raidNote")))}
root.appendChild(s1);
/* 2 farming */
var s2=el("section","p plan-box");s2.appendChild(el("h3","",t("farm")));s2.appendChild(el("h4","",t("water")));
var wl=el("div","allow");["w1","w2","w3"].forEach(function(k){checkItem(wl,"farm:"+k,t(k))});s2.appendChild(wl);s2.appendChild(el("p","mt sm",t("waterSrc")));
s2.appendChild(el("h4","",t("genes")));s2.appendChild(el("p","mt sm",t("geneSrc")));
var tb=el("table"),th=el("thead"),hr=el("tr");[t("g"),t("mean"),t("kind")].forEach(function(x){hr.appendChild(el("th","",x))});th.appendChild(hr);tb.appendChild(th);var tbd=el("tbody");
GENES.forEach(function(g){var r=el("tr");r.appendChild(el("td","",g));r.appendChild(el("td","",t(g)));r.appendChild(el("td","",BAD[g]?t("bad"):t("good")));tbd.appendChild(r)});tb.appendChild(tbd);
var wrap=el("div","scrollx");wrap.appendChild(tb);s2.appendChild(wrap);
s2.appendChild(el("h4","",t("chk")));var bar=el("div","pbar"),gi=el("input");gi.type="text";gi.maxLength=12;gi.placeholder=t("chkHint");gi.setAttribute("aria-label",t("chk"));gi.dir="ltr";
var gb=el("button","use",t("chkBtn"));gb.type="button";var out=el("p","stt");out.setAttribute("role","status");
function run(){var r=genome(gi.value);out.textContent=!r?t("chkBad"):r.genome+" — "+t("chkRes",{g:r.good,b:r.bad})+" "+(r.bad?t("chkSome",{b:(r.counts.W?"W×"+r.counts.W+" ":"")+(r.counts.X?"X×"+r.counts.X:"")}):t("chkClean"))}
gb.onclick=run;gi.onkeydown=function(e){if(e.key==="Enter")run()};bar.appendChild(gi);bar.appendChild(gb);s2.appendChild(bar);s2.appendChild(out);s2.appendChild(el("p","mt sm",t("chkNote")));
var fig=el("figure","gfig"),im=new Image();im.src="assets/images/reference/farm-plot-gene-slots.webp";im.alt=t("img");im.loading="lazy";im.className="gimg";fig.appendChild(im);fig.appendChild(el("figcaption","mt sm",t("img")));s2.appendChild(fig);
s2.appendChild(el("div","note",t("notCovered")));root.appendChild(s2);
/* 3 monuments + loot */
var s3=el("section","p plan-box");s3.appendChild(el("h3","",t("mon")));s3.appendChild(el("p","mt",t("monIntro")));
var ul=el("ul","glist");["m1","m2","m3"].forEach(function(k){ul.appendChild(el("li","",t(k)))});s3.appendChild(ul);
var sp=el("p","mt sm src",t("monSrc")+": ");[["xgamingserver.com","https://xgamingserver.com/blog/rust-monuments-guide-loot-puzzles-keycards/"],["rustadia.com","https://rustadia.com/where-to-get-the-red-keycard-in-rust-unlock-high-tier-loot-with-ease"],["itemlevel.net","https://itemlevel.net/rust-rust-monument-guide-2026-keycards-puzzle-locations/"]].forEach(function(x,i){if(i)sp.appendChild(document.createTextNode(" · "));sp.appendChild(link(x[0],x[1]))});s3.appendChild(sp);
s3.appendChild(el("h4","",t("loot")));var li=ITEMS.filter(function(i){return i.loot});s3.appendChild(el("p","mt sm",t("lootSrc",{d:li[0]?li[0].checked:""})));
li.forEach(function(i){var h=el("h5","",lang()==="en"?(I18N.nameEn(i.ar)||i.en):i.ar);s3.appendChild(h);
var tb2=el("table"),h2=el("thead"),r2=el("tr");[t("src"),t("amt"),t("chance")].forEach(function(x){r2.appendChild(el("th","",x))});h2.appendChild(r2);tb2.appendChild(h2);var b2=el("tbody");
i.loot.forEach(function(l){var r=el("tr");var c0=el("td","",l[0]);c0.dir="ltr";r.appendChild(c0);r.appendChild(el("td","",l[1]));r.appendChild(el("td","",l[2]));b2.appendChild(r)});tb2.appendChild(b2);var w2=el("div","scrollx");w2.appendChild(tb2);s3.appendChild(w2);
if(i.src&&i.src[0]){var p2=el("p","mt sm src");p2.appendChild(link(i.src[0].t,i.src[0].u));s3.appendChild(p2)}});
s3.appendChild(el("div","note",t("monNot")));root.appendChild(s3)}
var tb4=document.getElementById("tb4");if(tb4)tb4.addEventListener("click",render);
I18N.on(render);render()})();
