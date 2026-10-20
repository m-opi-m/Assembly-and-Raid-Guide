# Rust Field Guide (Arabic-first) — Stage 1–3 checkpoint

Run: `python3 -m http.server 8000` in this folder → http://localhost:8000 (static, no backend).
Tests (server on :8765 for browser tests):
`node tests/raid.test.js` · `node tests/optimizer.test.js` · `node tests/guides.test.js` · `python3 tests/optimizer_crosscheck.py` (independent exhaustive check) · `python3 tests/browser.py` · `python3 tests/browser_guides.py` · `python3 tests/extract_missing.py` (lists untranslated Arabic fragments).
Original preserved: `backup/original.html`.

## Structure
index.html · css/style.css · js/{app,i18n,i18n-legacy-en,optimizer,raid-plan,encyclopedia,guides}.js · data/items.js · assets/ · tests/ · docs/

## Stage 1 — Localisation (done)
Explicit AR/EN only. `window.claude.use("sample")` and the 100-language list were removed (grep: 0 occurrences). Arabic is the default; English only after an explicit choice (saved in localStorage, falls back safely). Legacy markup: `js/i18n-legacy-en.js` (225 fragments). New modules: keyed `UI` dictionary in `js/i18n.js`. Language switching swaps text in place, so inputs, selected target, quantities and the plan are kept.
## Stage 2 — Raid (done)
Dead hidden counter removed; replaced by a real multi-target plan (`js/raid-plan.js`) with quantities, per-explosive allow-list, saved plan (localStorage, corruption-safe), copy-to-clipboard. `js/optimizer.js`: exact min-sulfur covering DP per target; only supported explosives; MLRS (non-craftable) excluded; explosive ammo OFF by default. Totals are inclusive (sulfur/gunpowder counted once per explosive).
"Cheapest" = lowest sulfur within this project's data — not an in-game guarantee.
## Stage 3 — Item database (started)
`data/items.js`: 19 records (explosives, resources, tools). Every record has a status; only values already in the original project are filled (status "community"); everything else is "not_verified". No verification dates exist, none shown. Recycler yields: unknown for all. Weapons: empty (UI shows an explicit empty state).

## Stage 4 (partly done) — Guides tab
`js/guides.js` (tab 4): raid prep checklist derived from the saved raid plan, farming water checklist + gene reference + genome checker, keycard ladder, loot sources of documented items. Ticks are saved in localStorage (`rg_chk`). Content is limited to what has a source (listed in the UI).
Encyclopedia: C4, Rocket, Explosives, Gun Powder, Explosive 5.56 verified against Facepunch Wiki / secondary sources on 2026-10-13 (ingredients, yield, workbench, recycler, sources); HV Rocket is single-source; Rocket Launcher added with loot chances.

## Not done yet
Monument tables and per-monument loot (no reliable agreed source found), growth timings/crossbreeding algorithm, remaining items' recipes, Stage 5 visual identity beyond the hero, export of checklists, offline fonts.
