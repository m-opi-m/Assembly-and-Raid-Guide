# Audit of original project (backup/original.html)
## Features inventoried (all preserved)
Gathering guide: 9 goals (wood, ore, scrap, corpse harvesting, pickups, crates/barrels, farming, fishing, healing) with tea x pie (Bear/Rich Bear) calculation, brewing steps, label system (confirmed / derived / general rule / calculated).
Pie reference (11 pies) + tea reference tables with search. Raid calculator: 14 targets, 7 explosives, per-explosive quantity controls, health gauge with overkill, sulfur/gunpowder/explosives totals, single-explosive comparison with cheapest by sulfur, "use" shortcut.
Item-name system (Arabic + English popover, 96 embedded icons), background music with fade, language selector (~100 languages), light/dark via prefers-color-scheme, embers canvas, reduced-motion CSS.
## Defects / risks
1. HIGH: non-Arabic translation depends on undeclared runtime `window.claude.use("sample")`; fails offline/standalone. Needs explicit AR/EN dictionaries.
2. HIGH: 4.3 MB base64 audio + 96 base64 images in one file (FIXED: externalised).
3. MED: particle rAF loop never paused (FIXED), no low-power path (FIXED).
4. MED: target-count control (N targets) is hidden (`display:none`) but logic remains — dead feature; multi-target planning absent.
5. MED: "cheapest" only compares single-explosive plans by sulfur; mixed plans (e.g. rockets + satchel remainder) not evaluated.
6. MED: Google Fonts loaded remotely; fallbacks exist (Cairo/Segoe/Tahoma), no offline copy.
7. LOW: tab widgets lacked aria-controls/keyboard arrows (FIXED).
8. Data: original footer states values are community tables, several inferred (satchel, explosive ammo, wooden targets, high walls, turret/SAM counts disputed between sources). Not re-verified in this phase.
9. Wasted-sulfur figure is proportional approximation (cost x overkill/dealt), not exact.
## Not testable here
Real-device performance, audio autoplay policy on iOS, Google Fonts online rendering.

## Status after stages 1-3
FIXED: defect 1 (translation, now explicit AR/EN), 4 (target-count: removed dead markup, real multi-target plan), 5 (mixed-explosive optimiser).
Found & fixed during testing: default language followed the browser locale (now Arabic); pie search missed English names because item names are rendered in Arabic (search now also matches the English name).
OPEN: 6 (remote fonts), 8 (data accuracy unverified), 9 (wasted-sulfur approximation), plan counts treat each target independently (correct: damage does not carry over) but ignore raid logistics (soft-side, sequencing, failures of Satchel).
Data caution: with explosive ammo allowed, the optimiser prefers dozens of rounds because its inferred values make it cheapest per damage; it is therefore off by default.

## Status after review pass (2026-10-14)
FIXED: optimizer hang when a damage value < 0.001 (infinite reconstruction loop); DP now exact (adaptive integer scale + gcd, `exact` flag, conservative fallback) and ~35x faster; English mobile horizontal overflow (tab bar); hero text contrast in light theme; inconsistent English item names across cards/plan/encyclopedia.
VERIFIED: optimizer == independent exhaustive search on 2082 cases (882 real: 14 targets x 63 explosive subsets; 0 mismatches). Recipe totals of C4 (2200 S/1000 GP/20 Explosives), Rocket (1400/650/10), HV (200/100) and Explosive 5.56 (25/10 per round) reproduce from Facepunch-wiki/secondary ingredient lists (tests/guides.test.js).
OPEN DATA CONFLICT: Armored Door - project computes ceil(1000/220)=5 rockets; Facepunch wiki Rocket page text lists 4. Not changed; needs a source for the door HP / rocket damage.
OPEN: monument tables (sources conflict), Arabic ingredient names are plain translations (not official localisation), remote Google Fonts, real-device performance and iOS audio policy untested.
