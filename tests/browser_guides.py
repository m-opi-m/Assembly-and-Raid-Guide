"""Browser tests for the Guides tab (tab 4). Needs a static server on :8765 (python3 -m http.server 8765)."""
from playwright.sync_api import sync_playwright
import re,sys
URL='http://localhost:8765/index.html';R=[]
def ok(n,c,d=''):
    R.append((n,bool(c)));print(('PASS' if c else 'FAIL'),n,d if not c else '')
AR=re.compile(r'[\u0600-\u06FF]')
with sync_playwright() as pw:
    b=pw.chromium.launch()
    for lang in('ar','en'):
        for vp,w,h in(('desktop',1280,900),('mobile',390,844)):
            c=b.new_context(viewport={'width':w,'height':h});p=c.new_page();errs=[]
            p.on('pageerror',lambda e:errs.append(str(e)));p.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
            p.on('requestfailed',lambda r:errs.append('REQFAIL '+r.url))
            p.add_init_script(f"localStorage.setItem('rg_lang','{lang}')");p.goto(URL);p.wait_for_timeout(300)
            tag=f'[{lang}/{vp}]'
            ok(tag+' four tabs',p.locator('.tabs button').count()==4)
            p.click('#tb4');p.wait_for_timeout(200)
            ok(tag+' pg4 visible, others hidden',p.is_visible('#pg4') and not p.is_visible('#pg1') and not p.is_visible('#pg2') and not p.is_visible('#pg3'))
            ok(tag+' tb4 selected',p.get_attribute('#tb4','aria-selected')=='true')
            txt=p.inner_text('#pg4')
            ok(tag+' empty-plan message shown',('الأدلة' in txt or 'Guides' in txt) and ('فارغة' in txt if lang=='ar' else 'plan is empty' in txt))
            if lang=='en': ok(tag+' no Arabic leaks in English',not AR.search(txt),AR.findall(txt)[:10])
            ok(tag+' sources are links',p.locator('#pg4 a[href^="https://"]').count()>=5)
            ok(tag+' no horizontal overflow',p.evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth+1'))
            # genome checker
            p.fill('#pg4 input[type=text]','GYHWXX');p.click('#pg4 button.use >> text=/افحص|Check/')
            o=p.inner_text('#pg4 p.stt >> nth=-1');ok(tag+' genome result',('GYHWXX' in o) and ('3' in o),o)
            p.fill('#pg4 input[type=text]','GG');p.keyboard.press('Enter');o=p.inner_text('#pg4 p.stt >> nth=-1');ok(tag+' genome invalid input message',('6' in o),o)
            # farm checklist persists
            cb=p.locator('#pg4 label.chk input').first;cb.check();p.click('#tb1');p.click('#tb4');ok(tag+' water ticks persist across tab switch',p.locator('#pg4 label.chk input').first.is_checked())
            p.evaluate("localStorage.removeItem('rg_chk')")
            # raid plan -> checklist
            p.click('#tb2');p.click('#tg button:nth-child(6)');p.fill('#xp .xc:nth-child(1) input','1')
            p.select_option('#planroot select >> nth=0','5');p.click('#planroot .use >> nth=0');p.click('#tb4');p.wait_for_timeout(150)
            labs=p.locator('#pg4 section:first-of-type label.chk').all_inner_texts()
            ok(tag+' raid checklist built from plan',len(labs)>=3 and any(re.search(r'\d',x) for x in labs),labs)
            pre=p.locator('#pg4 section:first-of-type label.chk input').first;pre.check();st=p.inner_text('#pg4 section:first-of-type p.stt')
            ok(tag+' progress counter updates',st.strip().startswith('1'),st)
            p.click('#pg4 section:first-of-type button.use >> text=/مسح|Clear/');ok(tag+' reset clears ticks',not p.locator('#pg4 section:first-of-type label.chk input').first.is_checked())
            # keyboard focus reaches tab 4
            p.focus('#tb3');p.keyboard.press('ArrowLeft') if lang=='ar' else p.keyboard.press('ArrowRight');p.wait_for_timeout(100)
            ok(tag+' arrow key reaches tab 4',p.get_attribute('#tb4','aria-selected')=='true' or p.evaluate("document.activeElement.id")=='tb4')
            # encyclopedia: new data renders
            p.click('#tb3');p.fill('#pg3 input[type=search]','Rocket Launcher' if lang=='en' else 'قاذف');p.wait_for_timeout(150)
            e=p.inner_text('#pg3 .encc');ok(tag+' Rocket Launcher record with loot + sources',('Locked Crate' in e) and ('8.1%' in e) and ('wiki.facepunch.com' in p.inner_html('#pg3 .encc')),e[:200])
            real=[x for x in errs if 'fonts.g' not in x and 'ERR_' not in x]
            ok(tag+' no console/page errors',not real,real)
            c.close()
    b.close()
bad=[n for n,c in R if not c];print(f'\n{len(R)-len(bad)}/{len(R)} passed');sys.exit(1 if bad else 0)
