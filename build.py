import re,base64,glob
from PIL import Image
s=open('backup/original.html',encoding='utf-8').read()
m=re.search(r'data:audio/mpeg;base64,([A-Za-z0-9+/=]+)',s)
open('assets/audio/umbra.mp3','wb').write(base64.b64decode(m.group(1)))
s=s.replace(m.group(0),'assets/audio/umbra.mp3')
n=0
def ic(mm):
    global n
    k=mm.group(1); open(f'assets/images/icons/{k}.webp','wb').write(base64.b64decode(mm.group(2))); n+=1
    return f'"{k}": "assets/images/icons/{k}.webp"'
s=re.sub(r'"(\w+)":\s*"data:image/webp;base64,([A-Za-z0-9+/=]+)"',ic,s)
print('icons extracted',n,'remaining data URIs',len(re.findall('base64,',s)))
up=sorted(glob.glob('/mnt/user-data/uploads/*_image.png'))
im=Image.open(up[0]).convert('RGB'); print(up[0],im.size)
for w,nm in((1600,'launch-site'),(800,'launch-site-sm')):
    im.resize((w,int(im.height*w/im.width)),Image.LANCZOS).save(f'assets/images/hero/{nm}.webp',quality=68,method=6)
for p,name in zip(up[1:],['resources-sheet','c4-reference','farm-plot-gene-slots']):
    i=Image.open(p); i.thumbnail((900,900)); i.save(f'assets/images/reference/{name}.webp',quality=80)
css=re.search(r'<style>(.*?)</style>',s,re.S).group(1)
js=re.search(r'<script>(.*?)</script>',s,re.S).group(1)
s=s.replace(re.search(r'<style>.*?</style>',s,re.S).group(0),'<link rel="stylesheet" href="css/style.css">')
s=s.replace(re.search(r'<script>.*?</script>',s,re.S).group(0),'<script src="js/app.js"></script>')
def rep(src,a,b):
    assert a in src,a[:60]; return src.replace(a,b,1)
js=rep(js,'if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;',
 'var low=(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=2)||(navigator.deviceMemory&&navigator.deviceMemory<=2);\nif(matchMedia("(prefers-reduced-motion:reduce)").matches||low){c.style.display="none";return}\nvar raf=0;document.addEventListener("visibilitychange",function(){if(document.hidden){cancelAnimationFrame(raf)}else{raf=requestAnimationFrame(f)}});')
js=rep(js,'(function f(t){x.clearRect','function f(t){x.clearRect')
js=rep(js,'x.fill()});requestAnimationFrame(f)})(0)})();','x.fill()});raf=requestAnimationFrame(f)}raf=requestAnimationFrame(f)})();')
js='addEventListener("error",function(e){var t=e.target;if(t&&t.tagName==="IMG"){t.style.visibility="hidden"}},true);\n'+js
js+='\n/* tabs: arrow-key navigation */\n(function(){var a=document.getElementById("tb1"),b=document.getElementById("tb2");[a,b].forEach(function(t){t.addEventListener("keydown",function(e){if(e.key==="ArrowLeft"||e.key==="ArrowRight"){var o=t===a?b:a;o.click();o.focus()}})})})();\n'
css+='''
/* hero image treatment */
.hero{background:linear-gradient(180deg,rgba(20,22,26,.55) 0,rgba(20,22,26,.78) 70%,var(--bg) 100%),radial-gradient(ellipse at 50% 120%,rgba(90,29,16,.7) 0,transparent 60%),url(../assets/images/hero/launch-site-sm.webp) center/cover no-repeat,var(--bg)}
@media(min-width:900px){.hero{background-image:linear-gradient(180deg,rgba(20,22,26,.5) 0,rgba(20,22,26,.8) 75%,var(--bg) 100%),radial-gradient(ellipse at 50% 120%,rgba(90,29,16,.7) 0,transparent 60%),url(../assets/images/hero/launch-site.webp)}}
.hero h2,.hero p{text-shadow:0 2px 8px rgba(0,0,0,.8)}
.hero p{color:#cfcdc6}
'''
s=rep(s,'id="tb1" type="button" role="tab"','id="tb1" type="button" role="tab" aria-controls="pg1"')
s=rep(s,'id="tb2" type="button" role="tab"','id="tb2" type="button" role="tab" aria-controls="pg2"')
open('index.html','w',encoding='utf-8').write(s)
open('css/style.css','w',encoding='utf-8').write(css)
open('js/app.js','w',encoding='utf-8').write(js)
