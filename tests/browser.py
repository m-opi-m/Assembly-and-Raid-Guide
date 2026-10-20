"""Run: python3 -m http.server 8765 (in project root) ; python3 tests/browser.py"""
from playwright.sync_api import sync_playwright
import re,sys
URL='http://localhost:8765/index.html';res=[];errs=[]
def ok(n,c,extra=''):
    res.append((n,bool(c)));print(('PASS ' if c else 'FAIL ')+n+(' '+str(extra) if (extra and not c) else ''))
ARAB="""(()=>{const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>/^(SCRIPT|STYLE|OPTION)$/.test(n.parentNode.nodeName)?3:1});let o=[],n;while(n=w.nextNode())if(/[\\u0600-\\u06FF]/.test(n.nodeValue))o.push(n.nodeValue.trim());
document.querySelectorAll('[placeholder],[aria-label],[title],[alt]').forEach(e=>['placeholder','aria-label','title','alt'].forEach(a=>{const v=e.getAttribute(a);if(v&&/[\\u0600-\\u06FF]/.test(v))o.push(a+':'+v)}));return o})()"""
def page(b,w=1280,**kw):
    c=b.new_context(viewport={'width':w,'height':800},**kw);p=c.new_page()
    p.on('pageerror',lambda e:errs.append(str(e)))
    p.on('console',lambda m:errs.append(m.text) if m.type=='error' and 'ERR_NAME_NOT_RESOLVED' not in m.text and 'ERR_INTERNET' not in m.text else None)
    return p
with sync_playwright() as pw:
    b=pw.chromium.launch()
    for w in (1280,390):
        p=page(b,w);p.goto(URL);tag=f'[{w}px] '
        ok(tag+'default language is Arabic RTL',p.evaluate("document.documentElement.dir")=='rtl')
        n=p.locator('#nav button').count();ok(tag+'9 gathering goals',n==9)
        for i in range(1,n+1): p.click(f'#nav button:nth-child({i+1})')
        ok(tag+'gathering renders results',len(p.inner_text('#res'))>40)
        p.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)");p.fill('#q','Bear');vis=p.evaluate("[...document.querySelectorAll('#t tbody tr')].filter(r=>r.style.display!=='none').length");ok(tag+'pie search filters rows',0<vis<11,vis)
        p.click('#tb2');p.click('#tg button:nth-child(5)')
        ok(tag+'raid: no hidden counter markup remains',p.locator('#nv').count()==0)
        p.click('#cmp tr:not([hidden]) .use >> nth=0');ok(tag+'raid: "use" destroys target',p.is_visible('#s1'))
        p.fill('#xp .xc:nth-child(1) input','0');ok(tag+'raid: zeroing quantity restores standing state',p.is_visible('#s0'))
        p.fill('#xp .xc:nth-child(1) input','-5');ok(tag+'raid: negative input clamped to 0',p.input_value('#xp .xc:nth-child(1) input')=='0');p.fill('#xp .xc:nth-child(1) input','');ok(tag+'raid: empty input treated as 0',p.input_value('#xp .xc:nth-child(1) input') in('0',''))
        p.fill('#xp .xc:nth-child(1) input','99999');ok(tag+'raid: large qty clamped to 9999',p.input_value('#xp .xc:nth-child(1) input')=='9999')
        p.fill('#xp .xc:nth-child(1) input','1')
        # plan
        p.select_option('#planroot select >> nth=0','4');p.fill('#planroot input[type=number] >> nth=0','2');p.click('#planroot .use >> nth=0')
        p.select_option('#planroot select >> nth=0','5');p.fill('#planroot input[type=number] >> nth=0','1');p.click('#planroot .use >> nth=0')
        t=p.inner_text('#planroot');ok(tag+'plan: two targets with mix+totals',t.count('×')>=2 and 'إجمالي الخطة' in t)
        s0=p.evaluate("window.__planState.rows.length");ok(tag+'plan: rows stored',s0==2)
        # numbers: wooden wall x2 mix 550, stone wall mix 4275 (ex off => compute below)
        tot=p.evaluate("(()=>{const c=[...document.querySelectorAll('#planroot .sum div')].map(d=>d.textContent);return c})()");print('   totals:',tot)
        p.reload();ok(tag+'plan: restored from storage after reload',p.evaluate("window.__planState.rows.length")==2)
        p.click('#tb2');p.click('#planroot .allow label:nth-child(6) input');ok(tag+'plan: ex-ammo toggle re-renders',p.evaluate("window.__planState.allow.ex")==True)
        p.click('#planroot .allow label:nth-child(6) input')
        # encyclopedia
        p.click('#tb3');ok(tag+'enc: lists items',p.locator('.encc').count()==len(p.evaluate("ITEMS")))
        p.fill('#pg3 input[type=search]','c4');ok(tag+'enc: search narrows',p.locator('.encc').count()==1)
        p.fill('#pg3 input[type=search]','zzzz');ok(tag+'enc: empty state',p.locator('#pg3 .empty').count()==1)
        p.fill('#pg3 input[type=search]','');p.select_option('#pg3 select','weapons');ok(tag+'enc: weapons category lists its verified record',p.locator('.encc').count()==1 and p.locator('#pg3 .empty').count()==0)
        p.fill('#pg3 input[type=search]','zzzz');ok(tag+'enc: empty message inside a category',p.locator('#pg3 .empty').count()==1);p.fill('#pg3 input[type=search]','')
        ok(tag+'enc: every shown value carries a status badge',p.evaluate("[...document.querySelectorAll('.encc')].every(c=>c.querySelector('.eb'))"))
        for i in (1,2,3,4):
            p.click(f'#tb{i}');ok(tag+f'tab {i}: no horizontal page overflow',p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
        ok(tag+'no broken images',p.evaluate("[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length")==0)
        p.keyboard.press('Tab')
    # ---- English + state preservation
    p=page(b,1280);p.goto(URL);p.click('#tb2');p.click('#tg button:nth-child(6)');p.fill('#xp .xc:nth-child(1) input','1')
    p.select_option('#planroot select >> nth=0','6');p.click('#planroot .use >> nth=0');before=p.inner_text('#gp')
    p.select_option('#lang','en')
    ok('[en] html lang/dir',p.evaluate("[document.documentElement.lang,document.documentElement.dir]")==['en','ltr'])
    ok('[en] raid input value survives language change',p.input_value('#xp .xc:nth-child(1) input')=='1')
    ok('[en] plan rows survive',p.evaluate("window.__planState.rows.length")==1)
    ok('[en] raid target selection survives',p.locator('#tg button[aria-pressed=true]').count()==1)
    for tabid in ('tb1','tb2','tb3'):
        p.click('#'+tabid)
        if tabid=='tb1':
            for i in range(1,10): p.click(f'#nav button:nth-child({i+1})'); a=p.evaluate(ARAB); ok(f'[en] gathering goal {i}: no Arabic left',not a,a[:3])
        else: a=p.evaluate(ARAB);ok(f'[en] {tabid}: no Arabic left',not a,a[:5])
    p.click('#tb2');p.click('#tg button:nth-child(1)');p.fill('#xp .xc:nth-child(1) input','1');a=p.evaluate(ARAB);ok('[en] raid after selecting target: no Arabic',not a,a[:5])
    ok('[en] page uses no window.claude',p.evaluate("typeof window.claude")=='undefined')
    p.select_option('#lang','ar');ok('[ar] back to Arabic RTL',p.evaluate("document.documentElement.dir")=='rtl' and 'الهدف' in p.inner_text('#pg2'))
    p.reload();ok('[ar] language persists across reload',p.evaluate("document.documentElement.lang")=='ar')
    p.select_option('#lang','en');p.reload();ok('[en] language persists across reload',p.evaluate("document.documentElement.lang")=='en')
    # ---- failure modes
    p=page(b,1280);p.add_init_script("localStorage.setItem('rg_plan','{bad json');localStorage.setItem('rg_lang','zz')");p.goto(URL);p.click('#tb2');ok('corrupted storage: page works, empty plan',p.evaluate("window.__planState.rows.length")==0 and p.locator('#planroot .empty').count()==1)
    p=page(b,1280);p.add_init_script("Storage.prototype.getItem=function(){throw new Error('x')};Storage.prototype.setItem=function(){throw new Error('x')}");p.goto(URL);p.click('#tb2');p.click('#planroot .use >> nth=0');ok('storage unavailable: plan still works in memory',p.evaluate("window.__planState.rows.length")==1)
    p=b.new_context(viewport={'width':1280,'height':800}).new_page();p.route('**/assets/images/icons/**',lambda r:r.abort());p.goto(URL);p.click('#nav button:nth-child(2)');p.click('#tb2');p.click('#tg button:nth-child(1)');ok('missing icons: UI still functional',p.is_visible('#rd'))
    p=page(b,1280,reduced_motion='reduce');p.goto(URL);ok('reduced motion: particle canvas hidden',p.evaluate("getComputedStyle(document.getElementById('fx')).display")=='none')
    p=page(b,390);p.goto(URL);p.screenshot(path='/tmp/m_home.png');p.click('#tb2');p.click('#tg button:nth-child(5)');p.screenshot(path='/tmp/m_raid.png',full_page=True)
    b.close()
f=[n for n,c in res if not c];print(f'\n{len(res)-len(f)}/{len(res)} passed');print('page/console errors:',errs or 'none')
sys.exit(1 if f or errs else 0)
