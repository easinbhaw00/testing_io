BANANA PORNO — Homepage UI Prototype v5

HOW TO RUN
1. Unzip the folder.
2. Open index.html in a modern browser (Chrome, Edge, Firefox, Safari).
   No build step, no npm install. Optional: `python3 -m http.server` and visit http://localhost:8000

FILES
- index.html  Markup and page sections
- styles.css  Theme variables (dark/light), layout, components, responsive rules
- app.js      Demo data, search, filters, favorites, hero slider, dialogs, theme
- README.txt  This file

FEATURES
- Sticky header, desktop nav, mobile menu sheet, bottom navigation (under 720px)
- Hero slider: auto-advance (6.5 s), prev/next, dots, pause/play, swipe, arrow keys when focused
- Live search (press / or the search icon); the search term also filters the page rows
- Category filters and a "clear filter" bar
- Sections: Categories, Continue watching, Trending, Latest releases, Popular, Recommended,
  Creator spotlight (follow toggles), Your favorites, footer
- Favorites, follows and theme saved in localStorage (keys: bp-favs, bp-follows, bp-theme)
- Animated dark/light theme toggle
- Preview dialog for each title
- 18+ confirmation dialog (remembered for the browser session via sessionStorage)
- Keyboard: Tab through controls, Esc closes dialogs, Left/Right move the hero when it has focus

CUSTOMISE
- Titles, creators, slides: the arrays at the top of app.js
- Slider speed: heroTimer() in app.js (6500 ms)
- Colours: CSS variables at the top of styles.css

IMPORTANT
- Front-end prototype only. All titles, creators and artwork are fictional, non-explicit placeholders.
- The 18+ confirmation is not legally sufficient age verification.
- No real video streaming, authentication, database, uploads, admin panel or payments are included.
- Any production version needs lawful, consensual content, real age assurance, moderation and takedown processes.
