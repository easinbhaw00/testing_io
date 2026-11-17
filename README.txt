BANANA PORNO — Homepage UI Prototype (v5)

HOW TO RUN
1. Extract the ZIP archive to any folder on your computer.
2. Open `BANANA_PORNO_v5/index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).
   - Optional local server: run `python3 -m http.server 8080` inside `BANANA_PORNO_v5` and open `http://localhost:8080`.

WHAT WAS IMPROVED & INCLUDED
- Brand Identity: Kept the BANANA PORNO name and muted-purple emblem; the banana mark now has slightly opened peel sides and a subtle white glossy drip.
- Dual Themes: Full Dark theme (soft charcoal, muted purple, warm gold) and Light theme (soft off-white, white cards, muted purple, warm gold) with localStorage persistence and an animated sun/moon toggle icon.
- Complete Homepage Sections:
  1. Sticky header with navigation, live search toggle, saved count badge, theme toggle, and responsive mobile drawer
  2. Compact horizontal category navigation near the top with live filtering
  3. Featured hero slider with automatic 6-second rotation, manual arrows, dots, and spotlight card
  4. Trending shelf directly below the hero
  5. Continue watching shelf with playback progress bars
  6. Latest releases shelf
  7. Popular this week shelf
  8. Recommended for you shelf
  9. Creator spotlight with local follow state
  10. Saved favorites shelf persisted in localStorage
  11. Footer & responsive mobile bottom navigation bar
- Interactive Dialogs & Accessibility:
  - Polished 18+ confirmation gate (front-end demo only)
  - Title preview/detail modal with metadata and quick-save button
  - Keyboard shortcuts (`/` to open search, `Escape` to close modals, `Enter` on focused cards)

IMPORTANT NOTICE
- This is a front-end homepage UI prototype using fictional, non-explicit placeholder content only.
- No backend, database, real video streaming, or payment processing is included.
- The 18+ confirmation dialog is a front-end UI demonstration and not legally sufficient age verification.


Project files:
- index.html: page structure
- style.css: visual styles
- app.js: interactive behavior
