const items = [
  { id: 1, title: "Midnight in Motion", creator: "Studio Aurora", cat: "Featured", time: "12:48", views: "1.2M", rating: "4.9", art: "moon", c1: "#31244d", c2: "#6b4c8c", badge: "4K", progress: 68, trending: true, latest: false, popular: true, rec: true },
  { id: 2, title: "Prism & Shadow", creator: "Neon Frames", cat: "Animation", time: "08:32", views: "845K", rating: "4.8", art: "prism", c1: "#23364f", c2: "#5a4d82", badge: "NEW", progress: 35, trending: true, latest: true, popular: false, rec: true },
  { id: 3, title: "Golden Hour Stories", creator: "Velvet Motion", cat: "Popular", time: "16:04", views: "2.4M", rating: "4.9", art: "sun", c1: "#4a3326", c2: "#8f6732", badge: "HDR", progress: 84, trending: true, latest: false, popular: true, rec: false },
  { id: 4, title: "After Hours Lounge", creator: "Orbit Originals", cat: "Spotlight", time: "10:26", views: "632K", rating: "4.7", art: "spark", c1: "#2c2644", c2: "#734e78", badge: "4K", progress: 22, trending: true, latest: false, popular: false, rec: true },
  { id: 5, title: "Velvet Horizon", creator: "Studio Aurora", cat: "New", time: "09:15", views: "518K", rating: "4.8", art: "wave", c1: "#252946", c2: "#5c4b8a", badge: "NEW", progress: 0, trending: false, latest: true, popular: false, rec: true },
  { id: 6, title: "Studio Sessions Vol. 4", creator: "Velvet Motion", cat: "Lifestyle", time: "14:51", views: "921K", rating: "4.8", art: "film", c1: "#3c2742", c2: "#7d586e", badge: "HD", progress: 0, trending: false, latest: true, popular: true, rec: false },
  { id: 7, title: "Celestial Drift", creator: "Orbit Originals", cat: "Featured", time: "11:09", views: "1.8M", rating: "4.9", art: "orbit", c1: "#24223d", c2: "#635494", badge: "4K", progress: 0, trending: false, latest: false, popular: true, rec: true },
  { id: 8, title: "Amber Reflections", creator: "Neon Frames", cat: "Popular", time: "07:42", views: "704K", rating: "4.7", art: "diamond", c1: "#473524", c2: "#7d5b34", badge: "HD", progress: 0, trending: false, latest: true, popular: true, rec: false },
  { id: 9, title: "Nocturne Sketches", creator: "Neon Frames", cat: "Animation", time: "13:18", views: "490K", rating: "4.8", art: "prism", c1: "#292344", c2: "#59487d", badge: "4K", progress: 0, trending: false, latest: true, popular: false, rec: true },
  { id: 10, title: "Silk & Brass", creator: "Studio Aurora", cat: "Spotlight", time: "15:02", views: "1.1M", rating: "4.9", art: "spark", c1: "#3b2c3d", c2: "#8a6838", badge: "HDR", progress: 0, trending: true, latest: false, popular: true, rec: false },
  { id: 11, title: "Evening Atelier", creator: "Velvet Motion", cat: "Lifestyle", time: "09:54", views: "388K", rating: "4.6", art: "film", c1: "#2f2740", c2: "#67517a", badge: "HD", progress: 0, trending: false, latest: true, popular: false, rec: true },
  { id: 12, title: "Solstice Archive", creator: "Orbit Originals", cat: "New", time: "18:20", views: "615K", rating: "4.8", art: "orbit", c1: "#2a243b", c2: "#785a46", badge: "4K", progress: 0, trending: false, latest: true, popular: false, rec: true }
];

const creatorsData = [
  { id: "c1", initial: "SA", name: "Studio Aurora", role: "Cinematography · 42 releases" },
  { id: "c2", initial: "NF", name: "Neon Frames", role: "2D/3D Animation · 29 releases" },
  { id: "c3", initial: "VM", name: "Velvet Motion", role: "Lifestyle & Editorial · 36 releases" },
  { id: "c4", initial: "OO", name: "Orbit Originals", role: "Spotlight Director · 19 releases" }
];

const slides = [
  {
    eyebrow: "FEATURED VIDEO",
    title: "Explore the<br><em>video library.</em>",
    desc: "A refined streaming experience designed around calm charcoal surfaces, muted purple accents, and effortless discovery.",
    badge: "4K HDR",
    cardName: "Midnight in Motion",
    cardSub: "Studio Aurora · 12:48",
    itemId: 1
  },
  {
    eyebrow: "FRESH RELEASES",
    title: "Hand-picked<br><em>studio stories.</em>",
    desc: "Explore new animations, visual essays, and spotlight collections updated daily in a distraction-free interface.",
    badge: "NEW DROP",
    cardName: "Velvet Horizon",
    cardSub: "Studio Aurora · 09:15",
    itemId: 5
  },
  {
    eyebrow: "PERSONAL LIBRARY",
    title: "Curate what<br><em>moves you.</em>",
    desc: "Bookmark titles locally, filter across categories in real time, and pick up right where you left off.",
    badge: "SPOTLIGHT",
    cardName: "Golden Hour Stories",
    cardSub: "Velvet Motion · 16:04",
    itemId: 3
  }
];

const artIcons = {
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>',
  prism: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 3 21 19 3 19"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3z"/></svg>',
  wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12c2.5-3 5-3 7.5 0s5 3 7.5 0 3-1.5 3-1.5"/><path d="M3 16.5c2.5-3 5-3 7.5 0s5 3 7.5 0"/></svg>',
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5"/><polygon points="10 9 15 12 10 15" fill="currentColor" stroke="none"/></svg>',
  orbit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.5"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-25 12 12)"/></svg>',
  diamond: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 3 20 12 12 21 4 12"/></svg>'
};

let slide = 0;
let slideTimer = null;
let activeCat = "All";
let currentModalItemId = null;

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function getSavedFavs() {
  try {
    return JSON.parse(localStorage.getItem("bp-favs") || "[]");
  } catch {
    return [];
  }
}

function setSavedFavs(arr) {
  localStorage.setItem("bp-favs", JSON.stringify(arr));
}

function getFollowedCreators() {
  try {
    return JSON.parse(localStorage.getItem("bp-creators") || "[]");
  } catch {
    return [];
  }
}

function cardHTML(x, showProgress = false) {
  const saved = getSavedFavs().includes(x.id);
  const progressBar = showProgress && x.progress > 0
    ? `<div class="progressTrack" aria-label="${x.progress}% watched"><div class="progressFill" style="width:${x.progress}%"></div></div>`
    : "";

  return `
    <article class="card" data-id="${x.id}" tabindex="0" role="button" aria-label="Preview ${x.title} by ${x.creator}">
      <div class="poster" style="--c1:${x.c1};--c2:${x.c2}">
        <div class="posterArt">
          <div class="artBadge3d">${artIcons[x.art] || artIcons.spark}</div>
        </div>
        <span class="quality">${x.badge}</span>
        <span class="duration">${x.time}</span>
        <button class="fav ${saved ? "saved" : ""}" data-fav="${x.id}" type="button" aria-label="${saved ? "Remove from favorites" : "Save video"}" aria-pressed="${saved}">
          ${saved ? "♥" : "♡"}
        </button>
        ${progressBar}
      </div>
      <div class="cardInfo">
        <div style="min-width:0">
          <h3>${x.title}</h3>
          <div class="meta">${x.creator} · ${x.cat} · ${x.views}</div>
        </div>
        <span class="rating">★ ${x.rating}</span>
      </div>
    </article>
  `;
}

function renderGrid(selector, list, emptyMsg, showProgress = false) {
  const el = $(selector);
  if (!el) return;
  el.innerHTML = list.length
    ? list.map((item) => cardHTML(item, showProgress)).join("")
    : `<div class="empty">${emptyMsg}</div>`;
}

function renderCreators() {
  const followed = getFollowedCreators();
  $("#creatorRow").innerHTML = creatorsData.map((c) => {
    const isFollowing = followed.includes(c.id);
    return `
      <div class="creator">
        <div class="creatorLeft">
          <div class="avatar">${c.initial}</div>
          <div style="min-width:0">
            <strong>${c.name}</strong>
            <small>${c.role}</small>
          </div>
        </div>
        <button class="followBtn ${isFollowing ? "following" : ""}" data-follow="${c.id}" type="button">
          ${isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    `;
  }).join("");
}

function render() {
  const q = $("#searchInput").value.trim().toLowerCase();
  const filtered = items.filter((x) => {
    const matchesCat = activeCat === "All" || x.cat === activeCat;
    const matchesQuery = !q || `${x.title} ${x.cat} ${x.creator} ${x.badge}`.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  // Update search & filter status indicators
  $("#searchLiveStat").textContent = q
    ? `Found ${filtered.length} matching ${filtered.length === 1 ? "title" : "titles"} for "${$("#searchInput").value.trim()}"`
    : `Showing ${filtered.length} of ${items.length} curated items`;

  const filterBanner = $("#filterStatus");
  if (activeCat !== "All" || q) {
    filterBanner.classList.add("show");
    const parts = [];
    if (activeCat !== "All") parts.push(`Category: ${activeCat}`);
    if (q) parts.push(`Search: "${$("#searchInput").value.trim()}"`);
    $("#filterStatusText").textContent = `Active filter — ${parts.join(" · ")} (${filtered.length} results)`;
  } else {
    filterBanner.classList.remove("show");
  }

  // Watch history (items with progress > 0, filtered if active)
  const continueList = filtered.filter((x) => x.progress > 0).slice(0, 4);
  renderGrid("#continueGrid", continueList, "No in-progress titles match this filter.", true);

  // Trending
  const trendingList = (activeCat === "All" && !q)
    ? items.filter((x) => x.trending).slice(0, 4)
    : filtered.slice(0, 4);
  renderGrid("#trendingGrid", trendingList, "No trending titles match your current filter.");

  // Recently added
  const latestList = (activeCat === "All" && !q)
    ? items.filter((x) => x.latest).slice(0, 4)
    : [...filtered].reverse().slice(0, 4);
  renderGrid("#latestGrid", latestList, "No latest releases match your current filter.");

  // Popular
  const popularList = (activeCat === "All" && !q)
    ? items.filter((x) => x.popular).slice(0, 4)
    : filtered.filter((x) => x.popular).slice(0, 4);
  renderGrid("#popularGrid", popularList, "No popular titles match your current filter.");

  // Recommended
  const recList = (activeCat === "All" && !q)
    ? items.filter((x) => x.rec).slice(0, 4)
    : filtered.filter((x) => x.rec).slice(0, 4);
  renderGrid("#recommendedGrid", recList, "No recommended titles match your current filter.");

  // Saved Videos
  const savedIds = getSavedFavs();
  const favItems = items.filter((x) => savedIds.includes(x.id));
  renderGrid("#favoritesGrid", favItems, "Tap the heart icon on any card to save titles locally to this browser.");

  // Header Badge Count
  const badge = $("#favCountBadge");
  badge.textContent = savedIds.length;
  badge.classList.toggle("hidden", savedIds.length === 0);
}

function setSlide(n) {
  slide = (n + slides.length) % slides.length;
  const s = slides[slide];
  $("#heroEyebrow").textContent = s.eyebrow;
  $("#heroTitle").innerHTML = s.title;
  $("#heroDesc").textContent = s.desc;
  $("#heroCardBadge").textContent = s.badge;
  $("#heroCardName").textContent = s.cardName;
  $("#heroCardSub").textContent = s.cardSub;
  $("#dots").innerHTML = slides
    .map((_, i) => `<button class="slideDot ${i === slide ? "active" : ""}" data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>`)
    .join("");
}

function startSlides() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => setSlide(slide + 1), 6000);
}

function openItemDialog(item) {
  currentModalItemId = item.id;
  $("#infoBadge").textContent = `${item.cat.toUpperCase()} · ${item.badge}`;
  $("#infoTitle").textContent = item.title;
  $("#infoMeta").innerHTML = `
    <span class="previewTag">${item.creator}</span>
    <span class="previewTag">${item.time}</span>
    <span class="previewTag">${item.views} views</span>
    <span class="previewTag">★ ${item.rating}</span>
  `;
  $("#infoScreen").style.background = `linear-gradient(135deg, ${item.c1}, ${item.c2})`;
  $("#infoText").textContent = `Fictional non-explicit preview for "${item.title}" produced by ${item.creator}. Connect authorized media streams for production playback.`;
  const isSaved = getSavedFavs().includes(item.id);
  $("#modalFavBtn").style.display = "inline-flex";
  $("#modalFavBtn").textContent = isSaved ? "♥ Saved in favorites" : "♡ Save video";
  $("#infoModal").classList.add("show");
}

function openInfoNotice(title, text) {
  currentModalItemId = null;
  $("#infoBadge").textContent = "PLATFORM INFO";
  $("#infoTitle").textContent = title;
  $("#infoMeta").innerHTML = "";
  $("#infoScreen").style.background = "linear-gradient(135deg, var(--purple-deep), #1c1926)";
  $("#infoText").textContent = text;
  $("#modalFavBtn").style.display = "none";
  $("#infoModal").classList.add("show");
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("bp-theme", theme);
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", theme === "light" ? "#f6f5f9" : "#121116");
}

// Initialize saved theme
const savedTheme = localStorage.getItem("bp-theme") || "dark";
applyTheme(savedTheme);

$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
});

// Search overlay controls
function toggleSearch(forceOpen) {
  const bar = $("#searchBar");
  const open = typeof forceOpen === "boolean" ? forceOpen : !bar.classList.contains("open");
  bar.classList.toggle("open", open);
  $("#searchToggle").setAttribute("aria-expanded", String(open));
  if (open) {
    $("#searchInput").focus();
  }
}

$("#searchToggle").addEventListener("click", () => toggleSearch());
$("#bottomSearchBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  toggleSearch(true);
});
$("#closeSearch").addEventListener("click", () => {
  toggleSearch(false);
  $("#searchInput").value = "";
  render();
});
$("#searchInput").addEventListener("input", render);

// Mobile menu drawer
$("#menuToggle").addEventListener("click", () => {
  const drawer = $("#mobileDrawer");
  const open = !drawer.classList.contains("open");
  drawer.classList.toggle("open", open);
  $("#menuToggle").setAttribute("aria-expanded", String(open));
});

// Global click delegation
document.addEventListener("click", (e) => {
  // Favorite toggle
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn) {
    e.stopPropagation();
    const id = Number(favBtn.dataset.fav);
    let saved = getSavedFavs();
    saved = saved.includes(id) ? saved.filter((v) => v !== id) : [...saved, id];
    setSavedFavs(saved);
    render();
    return;
  }

  // Follow creator toggle
  const followBtn = e.target.closest("[data-follow]");
  if (followBtn) {
    const cid = followBtn.dataset.follow;
    let followed = getFollowedCreators();
    followed = followed.includes(cid) ? followed.filter((v) => v !== cid) : [...followed, cid];
    localStorage.setItem("bp-creators", JSON.stringify(followed));
    renderCreators();
    return;
  }

  // Card click -> open preview dialog
  const card = e.target.closest(".card");
  if (card) {
    const item = items.find((i) => i.id === Number(card.dataset.id));
    if (item) openItemDialog(item);
    return;
  }

  // Category chip click
  const chip = e.target.closest("[data-cat]");
  if (chip) {
    activeCat = chip.dataset.cat;
    $$(".chip").forEach((b) => {
      const isSelected = b === chip;
      b.classList.toggle("active", isSelected);
      b.setAttribute("aria-selected", String(isSelected));
    });
    render();
    return;
  }

  // Quick search tag
  const qTag = e.target.closest("[data-quick]");
  if (qTag) {
    $("#searchInput").value = qTag.dataset.quick;
    render();
    return;
  }

  // Hero slider dot
  const dot = e.target.closest("[data-slide]");
  if (dot) {
    setSlide(Number(dot.dataset.slide));
    startSlides();
    return;
  }

  // Mobile drawer link close
  if (e.target.closest("[data-mnav]")) {
    $("#mobileDrawer").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }

  // Footer info links
  const infoLink = e.target.closest("[data-info]");
  if (infoLink) {
    e.preventDefault();
    openInfoNotice(
      infoLink.dataset.info,
      "BANANA PORNO is a front-end UI/UX prototype showcasing responsive layout, dual themes, local favorites, and accessible controls with fictional placeholder content."
    );
  }
});

// Keyboard accessibility for cards & shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("card")) {
    const item = items.find((i) => i.id === Number(e.target.dataset.id));
    if (item) openItemDialog(item);
  }
  if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
    e.preventDefault();
    toggleSearch(true);
  }
  if (e.key === "Escape") {
    $("#infoModal").classList.remove("show");
    if ($("#searchBar").classList.contains("open")) {
      toggleSearch(false);
    }
  }
});

// Reset filters & favorites
$("#resetCatBtn").addEventListener("click", () => {
  activeCat = "All";
  $$(".chip").forEach((b) => {
    const isAll = b.dataset.cat === "All";
    b.classList.toggle("active", isAll);
    b.setAttribute("aria-selected", String(isAll));
  });
  render();
});

$("#clearAllFilters").addEventListener("click", () => {
  activeCat = "All";
  $("#searchInput").value = "";
  $$(".chip").forEach((b) => {
    const isAll = b.dataset.cat === "All";
    b.classList.toggle("active", isAll);
    b.setAttribute("aria-selected", String(isAll));
  });
  render();
});

$("#clearFavsBtn").addEventListener("click", () => {
  setSavedFavs([]);
  render();
});

// Hero controls
$("#prevSlide").addEventListener("click", () => { setSlide(slide - 1); startSlides(); });
$("#nextSlide").addEventListener("click", () => { setSlide(slide + 1); startSlides(); });
$("#exploreBtn").addEventListener("click", () => $("#trending").scrollIntoView({ behavior: "smooth" }));
$("#heroPreviewBtn").addEventListener("click", () => {
  const item = items.find((i) => i.id === slides[slide].itemId) || items[0];
  openItemDialog(item);
});

// Modal actions
$("#modalFavBtn").addEventListener("click", () => {
  if (!currentModalItemId) return;
  let saved = getSavedFavs();
  saved = saved.includes(currentModalItemId)
    ? saved.filter((v) => v !== currentModalItemId)
    : [...saved, currentModalItemId];
  setSavedFavs(saved);
  const nowSaved = saved.includes(currentModalItemId);
  $("#modalFavBtn").textContent = nowSaved ? "♥ Saved in favorites" : "♡ Save video";
  render();
});

$("#closeInfo").addEventListener("click", () => $("#infoModal").classList.remove("show"));
$("#infoOk").addEventListener("click", () => $("#infoModal").classList.remove("show"));
$("#infoModal").addEventListener("click", (e) => {
  if (e.target === $("#infoModal")) $("#infoModal").classList.remove("show");
});

$("#accountBtn").addEventListener("click", () => {
  openInfoNotice(
    "My Library Preview",
    "Account authentication, synced watchlists, and creator subscriptions are reserved for future backend integration in this front-end UI prototype."
  );
});

// 18+ Gate
$("#ageYes").addEventListener("click", () => {
  $("#ageGate").classList.remove("show");
  sessionStorage.setItem("bp-age-ok", "1");
});

$("#ageNo").addEventListener("click", () => {
  document.body.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;text-align:center;padding:32px;background:#121116;color:#f3f1f7">
      <div>
        <h1 style="font-size:36px;margin-bottom:10px">Access Declined</h1>
        <p style="color:#938da3">You must be 18 or older to view this prototype.</p>
      </div>
    </main>
  `;
});

if (sessionStorage.getItem("bp-age-ok") === "1") {
  $("#ageGate").classList.remove("show");
}

// Active Nav highlighting on click & scroll
$$(".nav a, .bNavItem[data-bnav]").forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("href");
    $$(".nav a").forEach((n) => n.classList.toggle("active", n.getAttribute("href") === target));
    $$(".bNavItem[data-bnav]").forEach((b) => b.classList.toggle("active", b.getAttribute("href") === target));
  });
});

// Initial render
renderCreators();
render();
setSlide(0);
startSlides();
