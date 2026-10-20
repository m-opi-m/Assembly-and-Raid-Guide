from playwright.sync_api import sync_playwright
import sys
errs=[];fails=[]
with sync_playwright() as p:
    b=p.chromium.launch()
    for name,kw in (('desktop',dict(viewport={'width':1280,'height':800})),('mobile',dict(viewport={'width':390,'height':800})),('reduced-motion',dict(viewport={'width':1280,'height':800},reduced_motion='reduce'))):
        pg=b.new_context(**kw).new_page()
        pg.on('console',lambda m:errs.append((name,m.text)) if m.type=='error' else None)
        pg.on('pageerror',lambda e:errs.append((name,str(e))))
        pg.on('response',lambda r:fails.append((name,r.url)) if r.status>=400 and 'fonts.g' not in r.url else None)
        pg.goto('http://localhost:8765/index.html',wait_until='load')
        pg.click('#nav button:nth-child(2)')                      # wood
        assert 'Wood' in pg.inner_text('#res') or 'خشب' in pg.inner_text('#res')
        n=pg.locator('#nav button').count()
        for i in range(2,n+1): pg.click(f'#nav button:nth-child({i})')
        pg.click('#tb2'); pg.click('#tg button:nth-child(5)')     # stone wall? index5 = wooden wall
        pg.click('#cmp tr:visible .use >> nth=0')
        txt=pg.inner_text('#rd')
        assert 'تم تدمير الهدف' in txt, 'target not destroyed after Use'
        pg.fill('#q','Bear') if pg.locator('#q').is_visible() else None
        sw=pg.evaluate('document.documentElement.scrollWidth<=window.innerWidth+1')
        imgs=pg.evaluate("[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length")
        print(name,'| nav buttons',n,'| no horiz overflow',sw,'| broken imgs',imgs,'| canvas display',pg.evaluate("getComputedStyle(document.getElementById('fx')).display"))
    b.close()
print('console/page errors:',errs); print('failed requests:',fails)
