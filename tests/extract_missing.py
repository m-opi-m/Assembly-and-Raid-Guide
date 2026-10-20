import json,sys
from playwright.sync_api import sync_playwright
miss=set()
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page();pg.goto('http://localhost:8765/index.html')
    pg.evaluate("I18N.set('en')")
    n=pg.locator('#nav button').count()
    for i in range(1,n+1):
        pg.click(f'#nav button:nth-child({i+1})');miss.update(pg.evaluate("window.__i18nMissing"))
    pg.click('#tb2');pg.click('#tg button:nth-child(1)');pg.evaluate("I18N.apply()");miss.update(pg.evaluate("window.__i18nMissing"))
    b.close()
json.dump(sorted(miss),open('/tmp/missing.json','w'),ensure_ascii=False,indent=0)
print(len(miss))
