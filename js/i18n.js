/* Explicit AR/EN localisation. No network / AI dependency.
   UI = keyed strings for new modules. LEGACY_EN (js/i18n-legacy-en.js) = Arabic text fragment -> English for the original markup. */
var cur="ar";
var UI={ar:{
"title":"Rust | دليل التجميع","tab3":"الموسوعة",
"plan.h":"خطة الغارة (أهداف متعددة)","plan.intro":"أضف أهدافاً وكمياتها، وسيختار المحسِّن أرخص خلطة متفجرات (بالكبريت) لكل هدف من المتفجرات المدعومة له فقط.",
"plan.target":"الهدف","plan.qty":"العدد","plan.add":"إضافة إلى الخطة","plan.clear":"مسح الخطة","plan.copy":"نسخ الخطة","plan.copied":"تم النسخ.","plan.copyfail":"تعذّر النسخ التلقائي.",
"plan.allow":"المتفجرات المسموح بها","plan.allow.note":"الذخيرة المتفجرة معطّلة افتراضياً لأن قيمها مستنتجة وتحتاج أعداداً كبيرة.","plan.nofree":"صاروخ MLRS لا يُصنع فلا يدخل في الحساب.",
"plan.empty":"الخطة فارغة. اختر هدفاً وأضفه لتظهر الخلطة والتكلفة.","plan.row.mix":"الخلطة لكل هدف","plan.row.sul":"كبريت الهدف الواحد","plan.row.over":"ضرر زائد","plan.row.single":"أفضل متفجرة واحدة","plan.row.save":"التوفير","plan.row.na":"لا توجد متفجرة مسموحة تدعم هذا الهدف.","plan.remove":"حذف",
"plan.tot":"إجمالي الخطة","plan.tot.s":"الكبريت (شامل كل المراحل)","plan.tot.g":"البارود (يشمل بارود Explosives)","plan.tot.x":"Explosives اللازمة للصناعة","plan.tot.single":"تكلفة أفضل متفجرة واحدة لكل هدف","plan.tot.save":"التوفير بالخلطات",
"plan.note":"«الأرخص» هنا تعني الأقل كبريتاً ضمن بيانات هذا المشروع والمتفجرات المحددة أعلاه (بحث شامل بالبرمجة الديناميكية). الأرقام الإجمالية شاملة: كبريت ومسحوق كل متفجرة محسوب مرة واحدة، فلا تجمع Explosives فوقها. الضرر لا ينتقل بين الأهداف، فكل هدف يُحسب منفصلاً. القيم للجهة الصلبة وبعضها مستنتج (انظر الملاحظات أدناه)، والحقيبة قد تفشل في الانفجار.",
"enc.h":"الموسوعة (عناصر ووصفات)","enc.intro":"سجلات منظمة للعناصر. لا تُعرض قيمة بلا مصدر؛ الحقول الفارغة تعني «غير متحقق منها بعد».","enc.ing":"المكوّنات (للصنعة الواحدة)","enc.yield":"الناتج","enc.lvl":"المستوى {n}","enc.rec.rad":"معيد التدوير","enc.rec.sz":"معيد التدوير في المنطقة الآمنة","enc.checked":"آخر مراجعة","enc.srcs":"المصادر","st.verified":"موثّق من مصدر","st.single_source":"مصدر واحد","enc.loot":"مصادر اللوت (الكمية والاحتمال)","enc.search":"ابحث عن عنصر","enc.cat":"الفئة","enc.all":"الكل",
"cat.explosives":"المتفجرات","cat.resources":"الخامات والمكوّنات","cat.tools":"الأدوات","cat.weapons":"الأسلحة",
"enc.empty":"لا توجد عناصر مطابقة.","enc.emptycat":"هذه الفئة لم تُملأ بعد: لا توجد بيانات موثقة لها حالياً.",
"st.community":"من جداول المجتمع","st.not_verified":"غير متحقق منه","enc.recipe":"التكلفة الإجمالية","enc.wb":"طاولة العمل","enc.norecipe":"الوصفة غير متحقق منها بعد","enc.recycler":"إعادة التدوير: غير متحقق منها","enc.source":"المصدر","enc.verified":"تاريخ التحقق","enc.never":"لم يُتحقق بعد","enc.incomplete":"سجل ناقص","enc.count":"{n} عنصر"
},en:{
"title":"Rust | Gathering Guide","tab3":"Encyclopedia",
"plan.h":"Raid plan (multiple targets)","plan.intro":"Add targets and quantities. The optimizer picks the cheapest explosive mix (by sulfur) per target, using only explosives supported for that target.",
"plan.target":"Target","plan.qty":"Qty","plan.add":"Add to plan","plan.clear":"Clear plan","plan.copy":"Copy plan","plan.copied":"Copied.","plan.copyfail":"Automatic copy failed.",
"plan.allow":"Allowed explosives","plan.allow.note":"Explosive ammo is off by default: its values are inferred and it needs very large counts.","plan.nofree":"The MLRS Rocket is not craftable, so it is excluded.",
"plan.empty":"The plan is empty. Pick a target and add it to see the mix and cost.","plan.row.mix":"Mix per target","plan.row.sul":"Sulfur per target","plan.row.over":"Overkill damage","plan.row.single":"Best single explosive","plan.row.save":"Saving","plan.row.na":"No allowed explosive supports this target.","plan.remove":"Remove",
"plan.tot":"Plan total","plan.tot.s":"Sulfur (all stages included)","plan.tot.g":"Gunpowder (includes Explosives' gunpowder)","plan.tot.x":"Explosives needed for crafting","plan.tot.single":"Best single explosive per target","plan.tot.save":"Saved by mixing",
"plan.note":"\"Cheapest\" here means lowest sulfur within this project's data and the explosives selected above (exhaustive dynamic-programming search). Totals are inclusive: each explosive's sulfur and gunpowder is counted once, so do not add Explosives on top. Damage does not carry between targets, so each target is computed separately. Values are for the hard side and some are inferred (see notes below); the Satchel can fail to detonate.",
"enc.h":"Encyclopedia (items & recipes)","enc.intro":"Structured item records. No value is shown without a source; empty fields mean \"not yet verified\".","enc.ing":"Ingredients (per craft)","enc.yield":"Yield","enc.lvl":"Level {n}","enc.rec.rad":"Recycler","enc.rec.sz":"Safe Zone Recycler","enc.checked":"Last checked","enc.srcs":"Sources","st.verified":"Verified from source","st.single_source":"Single source","enc.loot":"Loot sources (amount, chance)","enc.search":"Search items","enc.cat":"Category","enc.all":"All",
"cat.explosives":"Explosives","cat.resources":"Resources & components","cat.tools":"Tools","cat.weapons":"Weapons",
"enc.empty":"No matching items.","enc.emptycat":"This category is not populated yet: no documented data is available.",
"st.community":"Community tables","st.not_verified":"Not verified","enc.recipe":"Total cost","enc.wb":"Workbench","enc.norecipe":"Recipe not yet verified","enc.recycler":"Recycler: not verified","enc.source":"Source","enc.verified":"Verified on","enc.never":"Not yet verified","enc.incomplete":"Incomplete record","enc.count":"{n} items"
}};
var I18N=(function(){var cbs=[],orig=new WeakMap(),lang="ar",EN=null,sel=null;
function t(k,a){var s=(UI[lang]&&UI[lang][k])||UI.ar[k]||k;return a?s.replace(/\{(\w+)\}/g,function(m,n){return a[n]!==undefined?a[n]:m}):s}
function map(){if(EN)return EN;EN={};var L=window.LEGACY_EN||{};for(var k in L)EN[k]=L[k];if(typeof NM!=="undefined")for(var e in NM)EN[NM[e]]=e;return EN}
var AR=/[\u0600-\u06FF]/,ATT=["placeholder","aria-label","title","alt"];
function walk(){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode;if(!p||/^(SCRIPT|STYLE|OPTION|CANVAS)$/.test(p.nodeName)||p.closest("[data-mod],#pop"))return 3;return AR.test(orig.has(n)?orig.get(n):n.nodeValue)?1:3}}),a=[],n;while(n=w.nextNode())a.push(n);return a}
function app(s,m){var k=s.trim();return m[k]!==undefined?s.replace(k,function(){return m[k]}):s}
function legacy(code){var m=code==="en"?map():null,miss=window.__i18nMissing=[];
walk().forEach(function(n){if(!orig.has(n))orig.set(n,n.nodeValue);var o=orig.get(n);if(!m){n.nodeValue=o;return}var r=app(o,m);if(r===o&&AR.test(r))miss.push(o.trim());n.nodeValue=r});
[].forEach.call(document.querySelectorAll("[placeholder],[aria-label],[title],[alt]"),function(el){if(el.closest("[data-mod]"))return;ATT.forEach(function(a){var v=el.getAttribute(a);if(v===null)return;var d="o"+a.replace("-",""),o=el.dataset[d];if(o===undefined){if(!AR.test(v))return;o=el.dataset[d]=v}
var r=m?app(o,m):o;if(m&&r===o&&AR.test(r))miss.push(o);el.setAttribute(a,r)})})}
function setLang(c){lang=cur=c==="en"?"en":"ar";document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";if(sel)sel.value=lang;
legacy(lang);document.title=t("title");cbs.forEach(function(f){f()});try{localStorage.setItem("rg_lang",lang)}catch(e){}}
function init(){sel=document.getElementById("lang");sel.textContent="";[["ar","العربية"],["en","English"]].forEach(function(x){var o=document.createElement("option");o.value=x[0];o.textContent=x[1];sel.appendChild(o)});
sel.setAttribute("aria-label","Language");sel.onchange=function(){setLang(sel.value)};
var c="";try{c=localStorage.getItem("rg_lang")||""}catch(e){}if(c!=="en")c="ar";setLang(c==="en"?"en":"ar")}
return{t:t,nameEn:function(ar){var v=map()[ar];return v===undefined?null:v},on:function(f){cbs.push(f)},lang:function(){return lang},set:setLang,init:init,apply:function(){legacy(lang)}}})();
function tr(c){if(c==="en")I18N.apply()}
