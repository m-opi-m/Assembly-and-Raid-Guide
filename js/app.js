addEventListener("error",function(e){var t=e.target;if(t&&t.tagName==="IMG"){t.style.visibility="hidden"}},true);

var IM={"dw": "assets/images/icons/dw.webp", "ds": "assets/images/icons/ds.webp", "da": "assets/images/icons/da.webp", "dg": "assets/images/icons/dg.webp", "wwd": "assets/images/icons/wwd.webp", "wst": "assets/images/icons/wst.webp", "wsh": "assets/images/icons/wsh.webp", "war": "assets/images/icons/war.webp", "c4": "assets/images/icons/c4.webp", "rk": "assets/images/icons/rk.webp", "sa": "assets/images/icons/sa.webp", "ex": "assets/images/icons/ex.webp", "inc": "assets/images/icons/inc.webp", "mo": "assets/images/icons/mo.webp", "sul": "assets/images/icons/sul.webp", "logo": "assets/images/icons/logo.webp", "lh": "assets/images/icons/lh.webp", "hg": "assets/images/icons/hg.webp", "rb": "assets/images/icons/rb.webp", "wd": "assets/images/icons/wd.webp", "scr": "assets/images/icons/scr.webp", "wwo": "assets/images/icons/wwo.webp", "hsw": "assets/images/icons/hsw.webp", "stp": "assets/images/icons/stp.webp", "hv": "assets/images/icons/hv.webp", "tur": "assets/images/icons/tur.webp", "gp": "assets/images/icons/gp.webp", "xp": "assets/images/icons/xp.webp", "sam": "assets/images/icons/sam.webp", "pie": "assets/images/icons/pie.webp", "rpie": "assets/images/icons/rpie.webp", "p_hu": "assets/images/icons/p_hu.webp", "p_su": "assets/images/icons/p_su.webp", "p_pu": "assets/images/icons/p_pu.webp", "p_ch": "assets/images/icons/p_ch.webp", "p_fi": "assets/images/icons/p_fi.webp", "p_po": "assets/images/icons/p_po.webp", "p_ap": "assets/images/icons/p_ap.webp", "p_bc": "assets/images/icons/p_bc.webp", "p_be": "assets/images/icons/p_be.webp", "p_sh": "assets/images/icons/p_sh.webp", "t_bw": "assets/images/icons/t_bw.webp", "t_aw": "assets/images/icons/t_aw.webp", "t_pw": "assets/images/icons/t_pw.webp", "t_po": "assets/images/icons/t_po.webp", "t_ps": "assets/images/icons/t_ps.webp", "t_ph": "assets/images/icons/t_ph.webp", "t_ah": "assets/images/icons/t_ah.webp", "t_h": "assets/images/icons/t_h.webp", "tl_cs": "assets/images/icons/tl_cs.webp", "tl_ax": "assets/images/icons/tl_ax.webp", "tl_jh": "assets/images/icons/tl_jh.webp", "tl_pk": "assets/images/icons/tl_pk.webp", "g_bk": "assets/images/icons/g_bk.webp", "g_cr": "assets/images/icons/g_cr.webp", "g_sd": "assets/images/icons/g_sd.webp", "g_fr": "assets/images/icons/g_fr.webp", "g_mk": "assets/images/icons/g_mk.webp", "t_cpo": "assets/images/icons/t_cpo.webp", "t_mpo": "assets/images/icons/t_mpo.webp", "t_cpw": "assets/images/icons/t_cpw.webp", "t_mpw": "assets/images/icons/t_mpw.webp", "rp_hu": "assets/images/icons/rp_hu.webp", "rp_pu": "assets/images/icons/rp_pu.webp", "rp_ch": "assets/images/icons/rp_ch.webp", "rp_fi": "assets/images/icons/rp_fi.webp", "rp_po": "assets/images/icons/rp_po.webp", "rp_ap": "assets/images/icons/rp_ap.webp", "rp_bc": "assets/images/icons/rp_bc.webp", "rp_be": "assets/images/icons/rp_be.webp", "rp_sh": "assets/images/icons/rp_sh.webp", "mt": "assets/images/icons/mt.webp", "wb1": "assets/images/icons/wb1.webp", "wb2": "assets/images/icons/wb2.webp", "wb3": "assets/images/icons/wb3.webp", "b_r": "assets/images/icons/b_r.webp", "b_b": "assets/images/icons/b_b.webp", "b_y": "assets/images/icons/b_y.webp", "b_w": "assets/images/icons/b_w.webp", "t_bo": "assets/images/icons/t_bo.webp", "t_ao": "assets/images/icons/t_ao.webp", "t_bs": "assets/images/icons/t_bs.webp", "t_as": "assets/images/icons/t_as.webp", "t_bh": "assets/images/icons/t_bh.webp", "cr": "assets/images/icons/cr.webp", "mk": "assets/images/icons/mk.webp", "t_cps": "assets/images/icons/t_cps.webp", "t_mps": "assets/images/icons/t_mps.webp", "t_cph": "assets/images/icons/t_cph.webp", "t_mph": "assets/images/icons/t_mph.webp", "mlrs": "assets/images/icons/mlrs.webp", "h_b": "assets/images/icons/h_b.webp", "h_a": "assets/images/icons/h_a.webp", "h_p": "assets/images/icons/h_p.webp", "h_m": "assets/images/icons/h_m.webp", "h_c": "assets/images/icons/h_c.webp"};
var GI={ore:"mo",coll:"stp",wood:"wd",scrap:"scr",harv:"g_bk",crate:"g_cr",farm:"g_sd",fish:"g_fr",heal:"g_mk"};
function ic(im,k){return im?'<img class="ic" alt="" src="'+IM[im]+'">':svg(k)}
var I={
wood:'<path d="M12 3l6 8h-3l4 6H5l4-6H6z"/><path d="M12 17v4"/>',
ore:'<path d="M3 9c3-5 13-5 18 0"/><path d="M12 6.5L8 21"/>',
scrap:'<ellipse cx="12" cy="6" rx="6" ry="2.5"/><path d="M6 6v12c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6"/><path d="M6 12c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5"/>',
harv:'<path d="M4 20l8-8"/><path d="M12 12l6-8 2 2-8 6z"/>',
coll:'<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19l8-8"/>',
crate:'<path d="M3 8l9-4 9 4v9l-9 4-9-4z"/><path d="M3 8l9 4 9-4M12 12v9"/>',
farm:'<path d="M12 21v-9"/><path d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z"/><path d="M12 14c0-3 2-5 6-5 0 3-2 5-6 5z"/>',
fish:'<path d="M3 12c3-5 9-6 13-2l5-3v10l-5-3c-4 4-10 3-13-2z"/><circle cx="8" cy="11" r=".8"/>',
heal:'<path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/>',
on:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9c1.5 1.5 1.5 4.5 0 6M19 6.5c3 3 3 8 0 11"/>',
off:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9l5 6M22 9l-5 6"/>'};
function svg(k){return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">'+I[k]+'</svg>'}
var G=[
{k:"wood",n:"الخشب",u:"خشب",sum:"اشرب Pure Wood Tea، ثم كُل Rich Bear Pie، ثم اقطع الأشجار بـ Chainsaw.",
st:[["اشرب",["Pure Wood Tea"]],["كُل",["Rich Bear Pie"]],["اقطع بـ",["Chainsaw","Salvaged Axe"]]],
base:[["Pure Wood Tea",200,30],["Creamy Pure Wood Tea",260,24],["Milky Pure Wood Tea",200,45]],
brew:{c:["red","blue","red","blue"],n:["Basic Wood Tea","Advanced Wood Tea","Pure Wood Tea"]},
note:"اضرب علامة X على الشجرة للحصول على مكافأة إضافية. وفطيرة الدب تضرب أثر الشاي في 1.5 (والغنية في 1.75) وتنصّف مدته."},
{k:"ore",n:"المعادن",u:"معدن",sum:"اشرب Pure Ore Tea، ثم كُل Rich Bear Pie، ثم اضرب العروق بـ Jackhammer.",
st:[["اشرب",["Pure Ore Tea"]],["كُل",["Rich Bear Pie"]],["اضرب بـ",["Jackhammer","Salvaged Pickaxe"]]],
base:[["Pure Ore Tea",50,30],["Creamy Pure Ore Tea",65,24],["Milky Pure Ore Tea",50,45]],
brew:{c:["yellow","blue","yellow","blue"],n:["Basic Ore Tea","Advanced Ore Tea","Pure Ore Tea"]},
note:"اضرب علامة X على العِرق. وفطيرة الدب تضرب أثر الشاي في 1.5 (والغنية في 1.75) وتنصّف مدته."},
{k:"scrap",n:"الخردة",u:"خردة",sum:"اشرب Pure Scrap Tea، ويمكنك أكل Rich Bear Pie لزيادة أكبر، ثم حطّم البراميل.",
st:[["اشرب",["Pure Scrap Tea"]],["كُل (اختياري)",["Rich Bear Pie"]]],
base:[["Pure Scrap Tea",350,60],["Creamy Pure Scrap Tea",450,48],["Milky Pure Scrap Tea",350,90,"قاعدة عامة"]],
brew:{c:["yellow","white","yellow","white"],n:["Basic Scrap Tea","Advanced Scrap Tea","Pure Scrap Tea"]},
note:"يزيد الشاي الخردة من البراميل فقط، لا من الصناديق."},
{k:"harv",n:"حصاد الجثث",u:"من الجثث",sum:"اشرب Pure Harvesting Tea، ثم كُل Rich Bear Pie، ثم اجمع الجثث.",
st:[["اشرب",["Pure Harvesting Tea"]],["كُل",["Rich Bear Pie"]]],
base:[["Pure Harvesting Tea",65,20],["Creamy Pure Harvesting Tea",84.5,16,"قاعدة عامة"],["Milky Pure Harvesting Tea",65,30,"قاعدة عامة"]],
extra:[{g:"فطيرة الناجي (بدون شاي)"},{l:"Survivor's Pie",e:"+150%",b:150,d:"5 دقائق",tg:"غير قابلة للتصنيع حالياً"}],
brew:{t:"ضع توتة صفراء و3 توتات خضراء لتصنع الشاي الأساسي:",n:["Basic Harvesting Tea","Advanced Harvesting Tea","Pure Harvesting Tea"]},
note:"لا أعلم إن كانت Survivor's Pie تجتمع مع Rich Bear Pie في الوقت نفسه."},
{k:"coll",n:"الملتقطات من الأرض",sum:"لا يوجد شاي ولا فطيرة تزيد الملتقطات من الأرض.",
note:"كانت نسخة تجريبية قديمة تقول إن فطيرة اليقطين تضاعف الملتقطات، لكن النسخة النهائية تزيد الصحة القصوى بنسبة 10% لمدة 10 دقائق فقط. والملتقطات هي الحجارة والأخشاب الصغيرة والنباتات."},
{k:"crate",n:"الصناديق والبراميل",sum:"لا شيء يزيد غنائم الصناديق. أما البراميل فيزيد Pure Scrap Tea الخردة منها.",
st:[["اشرب (للبراميل)",["Pure Scrap Tea"]]],opts:[{l:"Scrap Tea",e:"خردة أكثر من البراميل فقط",d:"30 إلى 60 دقيقة"}],
note:"لا يؤثر الشاي ولا الفطائر في غنائم الصناديق."},
{k:"farm",n:"الزراعة",sum:"كُل Chicken Pie ثم ازرع البذور، أو Rich Chicken Pie لفرصة أعلى.",
st:[["كُل",["Chicken Pie"]]],opts:[{l:"Chicken Pie",e:"احتمال جينات أفضل عند الزرع",d:"5 دقائق"},{l:"Rich Chicken Pie",e:"+16% احتمال جينات جيدة",d:"غير محددة"}]},
{k:"fish",n:"الصيد",sum:"لا توجد فطيرة تزيد قوة الصيد. فطيرة السمك تزيد الراحة فقط.",
st:[["كُل (للراحة)",["Fish Pie"]]],opts:[{l:"Fish Pie",e:"راحة +100%",d:"20 دقيقة"}],
note:"كانت نسخة تجريبية تقول إن فطيرة السمك تزيد قوة الصيد، لكن النسخة النهائية تزيد الراحة (التجدد الطبيعي للصحة) فقط. ومدتها 20 دقيقة حسب RustHelp، و10 دقائق في مصدر آخر."},
{k:"heal",n:"العلاج والنزيف",sum:"اشرب Pure Healing Tea للشفاء، أو Milky Pure Healing Tea لشفاء أكبر. وكُل Pork Pie لشفاء أسرع، أو Hunters Pie لتقليل النزيف.",
st:[["اشرب للشفاء",["Pure Healing Tea"]],["كُل للشفاء الأسرع",["Pork Pie"]],["كُل للنزيف",["Hunters Pie"]]],
opts:[{g:"شاي الشفاء"},{l:"Basic Healing Tea",e:"شفاء +30",d:"+30",dl:"الترطيب: "},{l:"Advanced Healing Tea",e:"+5 فوري وشفاء +50",d:"+30",dl:"الترطيب: "},{l:"Pure Healing Tea",e:"+10 فوري وشفاء +75",d:"+30",dl:"الترطيب: "},{l:"Creamy Pure Healing Tea",e:"+18 فوري وشفاء +97",d:"+30",dl:"الترطيب: "},{l:"Milky Pure Healing Tea",e:"+10 فوري وشفاء +100",d:"+45",dl:"الترطيب: "},
{g:"الفطائر"},{l:"Pork Pie",e:"الشفاء التدريجي ×3",d:"15 دقيقة"},{l:"Hunters Pie",e:"نزيف أقل",d:"15 دقيقة"}],
note:"أرقام شاي الشفاء مأخوذة من لقطات اللعبة."}
];
var nav=document.getElementById("nav"),res=document.getElementById("res");
G.forEach(function(x,i){var b=document.createElement("button");b.setAttribute("aria-pressed","false");b.innerHTML=(GI[x.k]?ic(GI[x.k]):svg(x.k))+'<span></span>';b.lastChild.textContent=x.n;b.onclick=function(){show(i)};nav.appendChild(b)});
function e(t,c,s){var d=document.createElement(t);if(c)d.className=c;if(s!==undefined)d.textContent=s;return d}
var BR={red:"b_r",blue:"b_b",yellow:"b_y",white:"b_w"},BN={red:"توت أحمر",blue:"توت أزرق",yellow:"توت أصفر",white:"توت أبيض"};
function chipItem(nm){var s=e("span","chip");s.appendChild(document.createTextNode(nm));return s}
function sc(t){return e("p","lbl sc",t)}
function brow(n,t,nodes){var r=e("div","br");r.appendChild(e("span","sn",String(n)));var b=e("div","bt");b.appendChild(e("span","",t));(nodes||[]).forEach(function(x){b.appendChild(x)});r.appendChild(b);return r}
function fm(v){return String(Math.round(v*10)/10)}
function fd(m){return m===60?"ساعة":m===90?"ساعة ونصف":fm(m)+" دقيقة"}
function gen(x){var o=[],g=[["الشاي وحده",1,1,""],["مع فطيرة الدب (الأثر ×1.5 والمدة النصف)",1.5,.5," + Bear Pie"],["مع فطيرة الدب الغنية (الأثر ×1.75 والمدة النصف)",1.75,.5," + Rich Bear Pie"]],mx=0,bi=-1,tv=0,ti2=-1;
g.forEach(function(r,i){o.push({g:r[0]});x.base.forEach(function(t){var b=t[1]*r[1],d=t[2]*r[2],tag=i?"حساب":(t[3]||"");var pure=/^Pure (Wood|Ore|Scrap) Tea$/.test(t[0]);if(pure&&i===1)tag="مصادر متعددة";if(pure&&i===2)tag="من بيانات اللعبة";
if(i&&/Creamy|Milky/.test(t[0]))tag="مشتق من الآلية الرسمية";o.push({l:t[0]+r[3],e:"+"+fm(b)+"%",b:b,d:fd(d),tg:tag});if(b>mx){mx=b;bi=o.length-1}if(b*d>tv){tv=b*d;ti2=o.length-1}})});
if(bi>-1)o[bi].best=1;if(ti2>-1)o[ti2].tot=1;return o.concat(x.extra||[])}
function show(i){var x=G[i];var OP=x.base?gen(x):x.opts;
[].forEach.call(nav.querySelectorAll("button"),function(b,j){b.setAttribute("aria-pressed",j===i?"true":"false")});
res.textContent="";res.classList.remove("go");void res.offsetWidth;res.classList.add("go");
var h=e("div","ph");h.innerHTML=GI[x.k]?ic(GI[x.k]):svg(x.k);h.appendChild(e("h3","",x.n));res.appendChild(h);
res.appendChild(e("div","sum",x.sum));
if(x.st){res.appendChild(sc("الخطوات"));var pl=e("div","plan");
x.st.forEach(function(s,j){var c=e("div","stp");c.appendChild(e("span","sn",String(j+1)));c.appendChild(e("span","sl",s[0]));var v=e("div","sv");s[1].forEach(function(nm){v.appendChild(chipItem(nm))});c.appendChild(v);pl.appendChild(c)});res.appendChild(pl)}
if(OP){res.appendChild(sc("كم ستكسب؟"));var mx=0,num=false;OP.forEach(function(o){if(o.b){num=true;if(o.b>mx)mx=o.b}});
OP.forEach(function(o){if(o.g){res.appendChild(e("p","lbl gl",o.g));return}var c=e("div","opt"+(o.best?" best":"")),t=e("div","ot");t.appendChild(e("b","",o.l));
if(o.tg)t.appendChild(e("span","eb",o.tg));if(o.best)t.appendChild(e("span","bst","الأعلى نسبة"));if(o.tot)t.appendChild(e("span","bst","الأكثر إجمالاً"));c.appendChild(t);
var v=e("div","ov");v.appendChild(e("strong","",o.e));var d=e("span","du");d.appendChild(e("span","",o.dl||"المدة: "));d.appendChild(e("span","",o.d));v.appendChild(d);c.appendChild(v);
if(o.b){var bar=e("div","bar"),f=e("i");f.style.width=(o.b/mx*100)+"%";bar.appendChild(f);c.appendChild(bar);
var cv=e("p","cv");cv.appendChild(e("span","","كل 100 "+x.u+" عادية تصبح "));cv.appendChild(e("b","",fm(100+o.b)));c.appendChild(cv)}
res.appendChild(c)});if(x.base)res.appendChild(e("div","note","فطيرة الدب تعمل بخاصية «Tea Potency +1.5» (ويكي Facepunch)، وفطيرة الدب الغنية «×1.75» وتنصّف مدة الشاي (بيانات اللعبة)، وهي خاصية عامة على الشاي. لذلك طبّقتها حسابياً على الكريمي والحليبي أيضاً. لكن لم أجد من جرّب الكريمي أو الحليبي مع الفطيرة فعلياً، فقد تختلف الأرقام في اللعبة."))}
if(x.brew){res.appendChild(sc("كيف أحضّر الشاي؟"));var bw=e("div","brew"),b=x.brew,n=0;
if(b.c){var ds=b.c.map(function(c){var d=new Image();d.src=IM[BR[c]];d.alt=BN[c];d.title=BN[c];d.className="ic sm";return d});if(b.n[0])ds.push(chipItem(b.n[0]));bw.appendChild(brow(++n,"على Mixing Table، ضع هذه التوتات الأربع لتصنع الشاي الأساسي:",ds))}else if(b.t){bw.appendChild(brow(++n,b.t,[chipItem(b.n[0])]))}
bw.appendChild(brow(++n,"اجمع 4 قطع من الشاي الأساسي لتحصل على المتقدم:",b.n[1]?[chipItem(b.n[1])]:[]));
bw.appendChild(brow(++n,"اجمع 4 قطع من الشاي المتقدم لتحصل على الشاي النقي:",[chipItem(b.n[2])]));
res.appendChild(bw);if(b.c||b.t)res.appendChild(e("p","mt","المجموع: نحو 64 توتة لكل قطعة شاي نقي (4 × 4 × 4)."))}
if(x.note)res.appendChild(e("div","note",x.note));
if(OP&&OP.some(function(o){return o.b}))res.appendChild(e("p","mt sm","الرقم هو الزيادة فوق ما تجمعه عادة، فـ +200% تعني ثلاثة أضعاف الكمية. ومن غير وسم: رقم مؤكد (من مصدر مباشر أو من لقطة اللعبة). «قاعدة عامة»: الكريمي أقوى بنحو 30% وأقصر 20%، والحليبي أطول 50% بنفس القوة. «حساب»: ضربت أثر الفطيرة (×1.5 أو ×1.75 من بيانات اللعبة) وقسمت المدة على 2، وطبّقتها على هذا الشاي افتراضاً. «مشتق من الآلية الرسمية»: نفس الحساب على الشاي الكريمي والحليبي. أما «مصادر متعددة» و«من بيانات اللعبة» فتم التحقق منهما للمعادن والخشب والخردة (من غير الكريمي والحليبي). و«الأكثر إجمالاً» هو الأعلى في (النسبة × المدة)."));
if(window.innerWidth<=760)res.scrollIntoView({behavior:"smooth",block:"start"});
itemize(res);if(cur!=="ar")tr(cur);}
document.getElementById("q").addEventListener("input",function(ev){var v=ev.target.value.toLowerCase().trim();
document.querySelectorAll("#t tbody tr").forEach(function(r){var h=r.textContent.toLowerCase()+" "+[].map.call(r.querySelectorAll(".inf"),function(i){return(i.dataset.en||"").toLowerCase()}).join(" ");r.style.display=h.indexOf(v)>-1?"":"none"})});

document.getElementById("lg").src=IM.logo;document.getElementById("su").src=IM.sul;document.getElementById("gi").src=IM.gp;document.getElementById("xi").src=IM.xp;
/* embers */
(function(){var c=document.getElementById("fx"),x=c.getContext("2d"),P=[],W,H;
function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight}rs();addEventListener("resize",rs);
function n(){return{x:Math.random()*W,y:H*Math.random(),r:Math.random()*2+.6,v:Math.random()*.6+.25,d:Math.random()*6}}
for(var i=0;i<50;i++)P.push(n());
var low=(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=2)||(navigator.deviceMemory&&navigator.deviceMemory<=2);
if(matchMedia("(prefers-reduced-motion:reduce)").matches||low){c.style.display="none";return}
var raf=0;document.addEventListener("visibilitychange",function(){if(document.hidden){cancelAnimationFrame(raf)}else{raf=requestAnimationFrame(f)}});
function f(t){x.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.v;p.x+=Math.sin(t/900+p.d)*.4;if(p.y<-10){p.y=H+10;p.x=Math.random()*W}
x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fillStyle="rgba(235,100,50,"+(.15+.65*p.y/H)+")";x.fill()});raf=requestAnimationFrame(f)}raf=requestAnimationFrame(f)})();

/* background music: user-provided track */
var bgm=document.getElementById("bgm"),started=false,on=true,mu=document.getElementById("mu");bgm.volume=0;
function ico(){mu.innerHTML=svg(on?"on":"off");mu.setAttribute("aria-pressed",on?"false":"true")}
function fade(to){clearInterval(fade.t);fade.t=setInterval(function(){var v=bgm.volume,d=to-v;if(Math.abs(d)<.03){bgm.volume=to;clearInterval(fade.t);if(to===0)bgm.pause()}else bgm.volume=Math.max(0,Math.min(1,v+(d>0?.03:-.03)))},60)}
function startAudio(){if(started||!on)return;started=true;var pr=bgm.play();if(pr&&pr.catch)pr.catch(function(){started=false});fade(.45)}
["pointerdown","keydown"].forEach(function(ev){addEventListener(ev,startAudio,true)});
mu.onclick=function(){on=!on;ico();if(!started){startAudio();return}if(on){var pr=bgm.play();if(pr&&pr.catch)pr.catch(function(){});fade(.45)}else fade(0)};
ico();

/* item names: Arabic shown, English in "!" popover */
var NM={"Pure Wood Tea":"شاي الخشب النقي","Advanced Wood Tea":"شاي الخشب المتقدم","Basic Wood Tea":"شاي الخشب الأساسي","Wood Tea":"شاي الخشب",
"Pure Ore Tea":"شاي المعادن النقي","Ore Tea":"شاي المعادن","Creamy Pure Ore Tea":"شاي المعادن النقي الكريمي","Milky Pure Ore Tea":"شاي المعادن النقي بالحليب",
"Creamy Pure Wood Tea":"شاي الخشب النقي الكريمي","Milky Pure Wood Tea":"شاي الخشب النقي بالحليب",
"Pure Scrap Tea":"شاي الخردة النقي","Scrap Tea":"شاي الخردة","Pure Harvesting Tea":"شاي الحصاد النقي","Advanced Harvesting Tea":"شاي الحصاد المتقدم","Harvesting Tea":"شاي الحصاد","Healing Tea":"شاي الشفاء",
"Rich Bear Pie":"فطيرة الدب الغنية","Bear Pie":"فطيرة الدب","Hunters Pie":"فطيرة الصيّاد","Survivor's Pie":"فطيرة الناجي","Pumpkin Pie":"فطيرة اليقطين","Chicken Pie":"فطيرة الدجاج","Fish Pie":"فطيرة السمك","Pork Pie":"فطيرة لحم الخنزير","Apple Pie":"فطيرة التفاح","Big Cat Pie":"فطيرة القط الكبير","Beef Pie":"فطيرة لحم البقر","Shepherds Pie":"فطيرة الراعي",
"Chainsaw":"المنشار الآلي","Salvaged Axe":"الفأس المنقذة","Jackhammer":"المطرقة الهوائية","Salvaged Pickaxe":"المعول المنقذ",
"Explosives":"المتفجرات الجاهزة","Basic Healing Tea":"شاي الشفاء الأساسي","Advanced Healing Tea":"شاي الشفاء المتقدم","Pure Healing Tea":"شاي الشفاء النقي","Creamy Pure Healing Tea":"شاي الشفاء النقي الكريمي","Milky Pure Healing Tea":"شاي الشفاء النقي بالحليب","Creamy Pure Scrap Tea":"شاي الخردة النقي الكريمي","Milky Pure Scrap Tea":"شاي الخردة النقي بالحليب","Creamy Pure Harvesting Tea":"شاي الحصاد النقي الكريمي","Milky Pure Harvesting Tea":"شاي الحصاد النقي بالحليب","Basic Ore Tea":"شاي المعادن الأساسي","Advanced Ore Tea":"شاي المعادن المتقدم","Basic Scrap Tea":"شاي الخردة الأساسي","Advanced Scrap Tea":"شاي الخردة المتقدم","Basic Harvesting Tea":"شاي الحصاد الأساسي","Cream":"قشدة","Milk":"حليب","Mixing Table":"طاولة الخلط","Workbench Level 1":"طاولة العمل المستوى 1","Workbench Level 2":"طاولة العمل المستوى 2","Workbench Level 3":"طاولة العمل المستوى 3","Rich Hunters Pie":"فطيرة الصيّاد الغنية","Rich Pumpkin Pie":"فطيرة اليقطين الغنية","Rich Chicken Pie":"فطيرة الدجاج الغنية","Rich Fish Pie":"فطيرة السمك الغنية","Rich Pork Pie":"فطيرة لحم الخنزير الغنية","Rich Apple Pie":"فطيرة التفاح الغنية","Rich Big Cat Pie":"فطيرة القط الكبير الغنية","Rich Beef Pie":"فطيرة لحم البقر الغنية","Rich Shepherds Pie":"فطيرة الراعي الغنية","Sulfur":"الكبريت","Gunpowder":"البارود"};
var NI={"Explosives": "xp", "Sulfur": "sul", "Gunpowder": "gp", "Bear Pie": "pie", "Rich Bear Pie": "rpie", "Hunters Pie": "p_hu", "Survivor's Pie": "p_su", "Pumpkin Pie": "p_pu", "Chicken Pie": "p_ch", "Fish Pie": "p_fi", "Pork Pie": "p_po", "Apple Pie": "p_ap", "Big Cat Pie": "p_bc", "Beef Pie": "p_be", "Shepherds Pie": "p_sh", "Basic Wood Tea": "t_bw", "Advanced Wood Tea": "t_aw", "Pure Wood Tea": "t_pw", "Pure Ore Tea": "t_po", "Pure Scrap Tea": "t_ps", "Pure Harvesting Tea": "t_ph", "Advanced Harvesting Tea": "t_ah", "Healing Tea": "t_h", "Creamy Pure Ore Tea": "t_cpo", "Milky Pure Ore Tea": "t_mpo", "Creamy Pure Wood Tea": "t_cpw", "Milky Pure Wood Tea": "t_mpw", "Chainsaw": "tl_cs", "Salvaged Axe": "tl_ax", "Jackhammer": "tl_jh", "Salvaged Pickaxe": "tl_pk", "Rich Hunters Pie": "rp_hu", "Rich Pumpkin Pie": "rp_pu", "Rich Chicken Pie": "rp_ch", "Rich Fish Pie": "rp_fi", "Rich Pork Pie": "rp_po", "Rich Apple Pie": "rp_ap", "Rich Big Cat Pie": "rp_bc", "Rich Beef Pie": "rp_be", "Rich Shepherds Pie": "rp_sh", "Mixing Table": "mt", "Workbench Level 1": "wb1", "Workbench Level 2": "wb2", "Workbench Level 3": "wb3", "Basic Ore Tea": "t_bo", "Advanced Ore Tea": "t_ao", "Basic Scrap Tea": "t_bs", "Advanced Scrap Tea": "t_as", "Basic Harvesting Tea": "t_bh", "Cream": "cr", "Milk": "mk", "Creamy Pure Scrap Tea": "t_cps", "Milky Pure Scrap Tea": "t_mps", "Creamy Pure Harvesting Tea": "t_cph", "Milky Pure Harvesting Tea": "t_mph", "Basic Healing Tea": "h_b", "Advanced Healing Tea": "h_a", "Pure Healing Tea": "h_p", "Milky Pure Healing Tea": "h_m", "Creamy Pure Healing Tea": "h_c"};
var NK=Object.keys(NM).sort(function(a,b){return b.length-a.length}).map(function(k){return k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")});
var RX=new RegExp("(^|[^A-Za-z])("+NK.join("|")+")(?![A-Za-z])","g");
function inf(en,im){var s=document.createElement("span");s.className="inf";s.setAttribute("role","button");s.tabIndex=0;s.setAttribute("aria-label","الاسم بالإنجليزية");s.dataset.en=en;if(im)s.dataset.im=im;s.textContent="!";return s}
function itemize(root){var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode;if(!p||/^(SCRIPT|STYLE|OPTION|SELECT|BUTTON|CANVAS)$/.test(p.nodeName)||p.closest(".inf,.it"))return 2;RX.lastIndex=0;return RX.test(n.nodeValue)?1:3}}),a=[],n;
while(n=w.nextNode())a.push(n);
a.forEach(function(n){var t=n.nodeValue,f=document.createDocumentFragment(),i=0,m;RX.lastIndex=0;
while((m=RX.exec(t))){var st=m.index+m[1].length;if(st>i)f.appendChild(document.createTextNode(t.slice(i,st)));
var sp=document.createElement("span");sp.className="it";var ik=NI[m[2]];if(ik&&IM[ik]){var ig=new Image();ig.src=IM[ik];ig.alt="";ig.className="ii";sp.appendChild(ig)}sp.appendChild(document.createTextNode(NM[m[2]]));sp.appendChild(inf(m[2],NI[m[2]]));f.appendChild(sp);i=st+m[2].length}
if(i<t.length)f.appendChild(document.createTextNode(t.slice(i)));n.parentNode.replaceChild(f,n)})}
var pop=document.createElement("div");pop.id="pop";pop.hidden=true;document.body.appendChild(pop);var pin=null;
function showPop(el){pop.textContent="";var im=el.dataset.im;if(im&&IM[im]){var i=new Image();i.src=IM[im];i.alt="";pop.appendChild(i)}
var sp=document.createElement("span");sp.dir="ltr";sp.textContent=el.dataset.en;pop.appendChild(sp);pop.hidden=false;
var r=el.getBoundingClientRect(),w=pop.offsetWidth;pop.style.left=Math.max(8,Math.min(innerWidth-w-8,r.left+r.width/2-w/2))+"px";pop.style.top=(r.bottom+6)+"px"}
function hp(){pin=null;pop.hidden=true}
document.addEventListener("mouseover",function(e){var t=e.target.closest&&e.target.closest(".inf");if(t&&!pin)showPop(t)});
document.addEventListener("mouseout",function(e){var t=e.target.closest&&e.target.closest(".inf");if(t&&!pin)pop.hidden=true});
document.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest(".inf");
if(t){e.preventDefault();e.stopPropagation();if(pin===t)hp();else{pin=t;showPop(t)}}else if(pin)hp()},true);
document.addEventListener("keydown",function(e){var t=e.target.closest&&e.target.closest(".inf");if(t&&(e.key==="Enter"||e.key===" ")){e.preventDefault();t.click()}if(e.key==="Escape")hp()});
itemize(document.getElementById("app"));

/* raid calculator */
Object.assign(I,{
d_door:'<rect x="6" y="3" width="12" height="18"/><circle cx="15" cy="12.5" r=".9"/>',
d_garage:'<rect x="3" y="5" width="18" height="15"/><path d="M3 9h18M3 13h18M3 17h18"/>',
d_wall:'<rect x="3" y="5" width="18" height="14"/><path d="M3 10h18M3 15h18M9 5v5M15 10v5M9 15v4"/>',
d_tc:'<rect x="5" y="4" width="14" height="16"/><path d="M9 9h6M9 13h6"/>',
x_c4:'<rect x="3" y="8" width="18" height="9" rx="1"/><path d="M7 8V5M12 8V5M17 8V5M7 12.5h10"/>',
x_rk:'<path d="M12 2c3 3 4 8 4 11l-4 3-4-3c0-3 1-8 4-11z"/><circle cx="12" cy="9" r="1.5"/><path d="M8 14l-3 4M16 14l3 4M12 16v5"/>',
x_sa:'<path d="M6 8h12l2 12H4z"/><path d="M9 8c0-3 6-3 6 0M9 13h6"/>',
x_ex:'<path d="M9 21V10l3-7 3 7v11zM9 14h6"/>',
x_in:'<path d="M12 3c3 4 6 6 6 11a6 6 0 01-12 0c0-3 2-4 3-7 1 2 3 2 3-4z"/>'});
var X=[{im:"c4",k:"c4",wb:"Workbench Level 3",n:"متفجرة C4",e:"Timed Explosive Charge",s:2200,g:1000,xe:20,i:"x_c4"},{im:"rk",k:"rk",wb:"Workbench Level 3",n:"صاروخ",e:"Rocket",s:1400,g:650,xe:10,i:"x_rk"},{im:"hv",k:"hv",n:"صاروخ عالي السرعة",e:"High Velocity Rocket",s:200,g:100,xe:0,i:"x_rk"},{im:"mlrs",k:"ml",n:"صاروخ MLRS",e:"MLRS Rocket",s:0,g:0,xe:0,free:1,lt:"لا يمكن تصنيعه: يُجمع من اللوت",i:"x_rk"},{im:"sa",k:"sa",n:"حقيبة متفجرة",e:"Satchel Charge",s:480,g:240,xe:0,i:"x_sa"},{im:"ex",k:"ex",wb:"Workbench Level 3",n:"ذخيرة متفجرة",e:"Explosive 5.56",s:25,g:10,xe:0,i:"x_ex"},{im:"inc",k:"in",n:"صاروخ حارق",e:"Incendiary Rocket",s:300,g:150,xe:0,i:"x_in"}];
var T=[
{n:"باب خشبي",e:"Wooden Door",c:"wood",i:"d_door",h:200,d:{c4:440,rk:220,sa:100,ex:11.2,"in":200,ml:275}},
{n:"باب صفيح معدني",e:"Sheet Metal Door",c:"metal",i:"d_door",h:250,d:{c4:440,rk:220,sa:70,ex:4,hv:23.5,ml:275}},
{n:"باب المرآب",e:"Garage Door",c:"metal",i:"d_garage",h:600,d:{c4:440,rk:220,sa:70,ex:3.95,hv:23.5,ml:275}},
{n:"باب مدرّع",e:"Armored Door (High Quality Metal)",c:"arm",i:"d_door",h:1000,d:{c4:440,rk:220,sa:70,ex:3.99,ml:275}},
{n:"جدار خشبي",e:"Wooden Wall",c:"wood",i:"d_wall",h:250,d:{c4:550,rk:200,sa:100,ex:5.25,"in":200,ml:275}},
{n:"جدار حجري",e:"Stone Wall",c:"stone",i:"d_wall",h:500,d:{c4:275,rk:137.65,sa:50,ex:2.72,hv:15.8,ml:175}},
{n:"جدار معدني",e:"Sheet Metal Wall",c:"metal",i:"d_wall",h:1000,d:{c4:275,rk:137.65,sa:43.5,ex:2.5,hv:15,ml:175}},
{n:"جدار مدرّع",e:"Armored Wall (High Quality Metal)",c:"arm",i:"d_wall",h:2000,d:{c4:275,rk:137.575,sa:43.5,ex:2.5,ml:175}},
{n:"هاتش السلم",e:"Ladder Hatch",c:"metal",i:"d_door",h:250,d:{c4:440,rk:220,sa:70,ex:3.95,hv:23.5,ml:275}},
{n:"جدار خشبي عالٍ",e:"High External Wooden Wall",c:"wood",i:"d_wall",h:600,d:{c4:550,rk:275,sa:105,ex:6.5,"in":300,ml:330}},
{n:"جدار حجري عالٍ",e:"High External Stone Wall",c:"stone",i:"d_wall",h:500,d:{c4:275,rk:137.65,sa:50,ex:2.72,hv:15.8,ml:175}},
{n:"قضبان النافذة المقوّاة",e:"Reinforced Window Bars",c:"arm",i:"d_wall",h:500,d:{c4:275,rk:137.65,sa:43.5,ex:2.5,ml:175}},
{n:"التورَت الآلي",e:"Auto Turret",c:"metal",i:"d_tc",h:1000,d:{c4:500,rk:275,sa:300,ex:8.95,"in":1000,hv:340,ml:350}},
{n:"منصة الدفاع الجوي",e:"SAM Site",c:"metal",i:"d_tc",h:1000,d:{c4:500,rk:275,sa:300,hv:29.8,"in":1000,ml:350}}];
["dw","ds","dg","da","wwo","wst","wsh","war","lh","wwd","hsw","rb","tur","sam"].forEach(function(k,i){T[i].im=k||null});
T.forEach(function(t){t.r={};for(var k in t.d)t.r[k]=Math.ceil(t.h/t.d[k]-1e-9)});
(function(){
var ti=-1,N=1,Q={},tb=[],xc=[],rw=[],g=document.getElementById.bind(document);
function el(t,c,s){var d=document.createElement(t);if(c)d.className=c;if(s!==undefined)d.textContent=s;return d}
function fmt(n){return n.toLocaleString("en-US")}
function clamp(v,a,b){v=parseInt(v,10);if(isNaN(v))v=a;return Math.max(a,Math.min(b,v))}
T.forEach(function(t,i){var b=el("button","cd c-"+t.c);b.type="button";b.setAttribute("aria-pressed","false");b.innerHTML=ic(t.im,t.i);var bb=el("b","",t.n);bb.appendChild(inf(t.e,t.im));b.appendChild(bb);
b.onclick=function(){ti=i;upd()};g("tg").appendChild(b);tb.push(b)});
X.forEach(function(x){Q[x.k]=0;var c=el("div","xc");c.innerHTML=ic(x.im,x.i);var xb=el("b","",x.n);xb.appendChild(inf(x.e,x.im));c.appendChild(xb);
var sp=el("div");sp.appendChild(el("small","","الكبريت للوحدة: "));sp.appendChild(el("small","",fmt(x.s)));c.appendChild(sp);if(x.wb){var wd=el("div");wd.appendChild(el("small","","تُصنع على: "));wd.appendChild(el("small","",x.wb));c.appendChild(wd)}if(x.lt){var ld=el("div");ld.appendChild(el("small","",x.lt));c.appendChild(ld)}
var dd=el("div");dd.appendChild(el("small","","يخصم من الصحة: "));var dn=el("small","","0");dd.appendChild(dn);c.appendChild(dd);var pd=el("div");pd.appendChild(el("small","","ضرر الوحدة على الهدف: "));var pu=el("small","","0");pd.appendChild(pu);c.appendChild(pd);
var na=el("small","","غير متاح لهذا الهدف");na.hidden=true;c.appendChild(na);
var st=el("div","st"),m=el("button","","−"),p=el("button","","+"),inp=el("input");m.type=p.type="button";m.setAttribute("aria-label","-");p.setAttribute("aria-label","+");inp.type="number";inp.min=0;inp.max=9999;inp.value=0;inp.setAttribute("aria-label",x.n);
function set(v){Q[x.k]=clamp(v,0,9999);upd()}
m.onclick=function(){set(Q[x.k]-1)};p.onclick=function(){set(Q[x.k]+1)};inp.oninput=function(){set(inp.value)};
st.appendChild(m);st.appendChild(inp);st.appendChild(p);c.appendChild(st);g("xp").appendChild(c);xc.push({el:c,na:na,inp:inp,dn:dn,pu:pu})});
X.forEach(function(x){var tr=el("tr"),a=el("td"),bt=el("span","","الأرخص");bt.hidden=true;var nb=el("span","",x.n);nb.appendChild(inf(x.e,x.im));a.appendChild(nb);a.appendChild(document.createTextNode(" "));a.appendChild(bt);
var n=el("td"),s=el("td"),gq=el("td"),xq=el("td"),u=el("td"),ub=el("button","use","استخدم");ub.type="button";u.appendChild(ub);
ub.onclick=function(){var t=T[ti];X.forEach(function(y){Q[y.k]=0});Q[x.k]=Math.ceil(t.r[x.k]*N);upd()};
[a,n,s,gq,xq,u].forEach(function(d){tr.appendChild(d)});g("cmp").appendChild(tr);rw.push({tr:tr,n:n,s:s,g:gq,x:xq,bt:bt})});
function upd(){tb.forEach(function(b,i){b.setAttribute("aria-pressed",i===ti?"true":"false")});g("rd").hidden=ti<0;g("pick").hidden=ti>=0;if(ti<0)return;var t=T[ti],dl=0,gp=0,xe=0,cost=0,best=1e12,bi=-1;
X.forEach(function(x,j){var r=t.r[x.k],c=xc[j],w=rw[j];c.el.classList.toggle("off",!r);c.na.hidden=!!r;c.inp.disabled=!r;
if(!r){Q[x.k]=0;c.dn.textContent="0";c.pu.textContent="0";w.tr.hidden=true}else{w.tr.hidden=false;var dm=t.d[x.k];dl+=Q[x.k]*dm;cost+=Q[x.k]*x.s;gp+=Q[x.k]*x.g;xe+=Q[x.k]*x.xe;c.dn.textContent=fmt(Math.round(Q[x.k]*dm));c.pu.textContent=fmt(Math.round(dm*10)/10);
var need=Math.ceil(r*N),cc=need*x.s;w.n.textContent=fmt(need);w.s.textContent=fmt(cc);w.g.textContent=fmt(need*x.g);w.x.textContent=fmt(need*x.xe);w.tr.dataset.c=cc;if(!x.free&&cc<best){best=cc;bi=j}}
c.inp.value=Q[x.k]});
rw.forEach(function(w,j){w.bt.hidden=j!==bi;w.tr.classList.toggle("best",j===bi)});
var tH=t.h,dealt=dl,dead=dealt>=tH,rem=dead?0:Math.ceil(tH-dealt),fr=rem/tH,over=Math.max(0,Math.round(dealt-tH));
var tt=Math.max(tH,dealt)||1;g("gf").style.width=(rem/tt*100)+"%";g("go").style.width=(over/tt*100)+"%";g("g1").textContent=fmt(rem)+" / "+fmt(tH);g("g2").hidden=g("g3").hidden=over<=0;g("g3").textContent="+"+fmt(over);g("gg").className="gauge "+(fr>.5?"hi":fr>.25?"md":"lo");
g("s0").hidden=dead;g("s1").hidden=!dead;g("ws").hidden=over<=0;g("wd").textContent=fmt(over);g("wsu").textContent=fmt(dealt>tH?Math.round(cost*(dealt-tH)/dealt):0);
g("ts").textContent=fmt(cost);g("tgp").textContent=fmt(gp);g("txe").textContent=fmt(xe)}
upd();itemize(g("xp"));
function tab(n){[1,2,3,4].forEach(function(i){g("pg"+i).hidden=n!==i;g("tb"+i).setAttribute("aria-selected",n===i?"true":"false")})}
[1,2,3,4].forEach(function(i){g("tb"+i).onclick=function(){tab(i)}});
})();

/* tabs: arrow-key navigation */
(function(){var T3=["tb1","tb2","tb3","tb4"].map(function(i){return document.getElementById(i)});T3.forEach(function(t,i){t.addEventListener("keydown",function(e){var d=e.key==="ArrowLeft"?(document.documentElement.dir==="rtl"?1:-1):e.key==="ArrowRight"?(document.documentElement.dir==="rtl"?-1:1):0;if(d){var o=T3[(i+d+4)%4];o.click();o.focus()}})})})();
