const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LS={g(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},s(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const ICON={heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/></svg>',play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10-6.5z" fill="currentColor"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M9 6v12M15 6v12"/></svg>'};
const CATS=[["All","◎"],["Featured","◐"],["Animation","✦"],["Lifestyle","◆"],["Music","●"],["Travel","▲"]];
const ITEMS=[
{id:1,t:"Midnight in Motion",c:"Featured",d:"12:48",v:1200000,q:"4K",g:"◐",a:"#4a3b78",b:"#9a7bbd",r:4.8,cr:"Studio Aurora",s:"A slow visual essay on city lights after dark."},
{id:2,t:"The Art of Animation",c:"Animation",d:"08:32",v:845000,q:"NEW",g:"✦",a:"#25505e",b:"#5fa7a0",r:4.7,cr:"Neon Frames",s:"Behind the scenes of a hand-drawn short film."},
{id:3,t:"Golden Hour Stories",c:"Lifestyle",d:"16:04",v:2400000,q:"HD",g:"◆",a:"#6b4a33",b:"#d6a25a",r:4.6,cr:"Velvet Motion",s:"Small moments from slow mornings in coastal towns."},
{id:4,t:"After Hours Sessions",c:"Music",d:"10:26",v:632000,q:"4K",g:"●",a:"#2f3557",b:"#8e6c9e",r:4.9,cr:"Orbit Originals",s:"Live-room performances recorded late in the evening."},
{id:5,t:"Neon Dreams",c:"Animation",d:"09:15",v:518000,q:"NEW",g:"◎",a:"#1f4e63",b:"#7a6fcb",r:4.5,cr:"Neon Frames",s:"Abstract motion pieces built from light and colour."},
{id:6,t:"Studio Sessions",c:"Music",d:"14:51",v:921000,q:"HD",g:"◐",a:"#4e2f4f",b:"#c98a6e",r:4.7,cr:"Studio Aurora",s:"Producers walk through a track from first sketch to final mix."},
{id:7,t:"Velvet Universe",c:"Featured",d:"11:09",v:1800000,q:"4K",g:"▲",a:"#2a2a52",b:"#7f70c4",r:4.8,cr:"Orbit Originals",s:"A fictional journey across imagined landscapes."},
{id:8,t:"Coastal Routes",c:"Travel",d:"07:42",v:704000,q:"HD",g:"▲",a:"#5f4a22",b:"#d9a85a",r:4.4,cr:"Velvet Motion",s:"A slow road trip along rocky shorelines and small harbours."},
{id:9,t:"Highland Trails",c:"Travel",d:"18:20",v:389000,q:"4K",g:"◆",a:"#2e4a3e",b:"#7fae98",r:4.6,cr:"Studio Aurora",s:"Hiking routes through misty hills, with local guides."},
{id:10,t:"Quiet Cities",c:"Lifestyle",d:"13:37",v:1100000,q:"HD",g:"◎",a:"#3e3a5c",b:"#a48cc8",r:4.9,cr:"Neon Frames",s:"Portraits of neighbourhoods that rarely appear on screen."}
];
const SLIDES=[
{id:1,a:"#8e76b8",e:"A NEW WAY TO EXPLORE",h:"Discover your<br><em>next favorite.</em>",s:"Find new releases, curated collections and your next watch, all in one calm place."},
{id:7,a:"#dcae55",e:"FRESH PICKS, EVERY DAY",h:"Find what<br><em>moves you.</em>",s:"Hand-picked collections, rising creators and fresh releases in one simple experience."},
{id:10,a:"#7fae98",e:"YOUR LIBRARY, YOUR WAY",h:"Make it<br><em>personal.</em>",s:"Save favorites, follow creators and build a collection that feels uniquely yours."}
];
const CONT=[[3,42,"9 min left"],[6,68,"4 min left"],[9,18,"15 min left"],[2,85,"1 min left"]];
const CREATORS=[["Studio Aurora","Featured creator","A"],["Neon Frames","Animation studio","N"],["Velvet Motion","Community pick","V"],["Orbit Originals","New creator","O"]];
let st={cat:"All",q:""},favs=LS.g("bp-favs",[]),follows=LS.g("bp-follows",[]),curId=null,cur=0,timer=null,hover=false,playing=!matchMedia("(prefers-reduced-motion: reduce)").matches;
const fmt=n=>n>=1e6?(n/1e6).toFixed(1)+"M":Math.round(n/1e3)+"K";
const isFav=id=>favs.includes(id);
const card=(x,extra="")=>{const f=isFav(x.id);return `<article class="card"><button class="poster" data-item="${x.id}" style="--a:${x.a};--b:${x.b}" aria-label="Preview ${x.t}"><span class="glyph" aria-hidden="true">${x.g}</span><span class="badge">${x.q}</span><span class="dur">${x.d}</span></button><button class="fav${f?" on":""}" data-fav="${x.id}" aria-pressed="${f}" aria-label="Save ${x.t} to favorites">${ICON.heart}</button><div class="info"><h3>${x.t}</h3><p>${x.c} · ${fmt(x.v)} views · ★ ${x.r}</p>${extra}</div></article>`};
const grid=(sel,arr,msg="Nothing matches here. Try another category or search term.")=>{$(sel).innerHTML=arr.length?arr.map(x=>card(x)).join(""):`<div class="empty">${msg}</div>`};
const list=()=>{const q=st.q.trim().toLowerCase();return ITEMS.filter(x=>(st.cat==="All"||x.c===st.cat)&&(!q||(x.t+" "+x.c+" "+x.cr).toLowerCase().includes(q)))};
function render(){
 const L=list();
 grid("#gTrending",[...L].sort((a,b)=>b.v-a.v).slice(0,4));
 grid("#gLatest",[...L].sort((a,b)=>b.id-a.id).slice(0,4));
 grid("#gPopular",[...L].sort((a,b)=>b.r-a.r).slice(0,4));
 grid("#gRec",L.slice(2,6));
 grid("#gSearch",L);
 grid("#gFav",ITEMS.filter(x=>isFav(x.id)),"Tap the heart on any card to save it here.");
 $("#gCont").innerHTML=CONT.map(([id,p,l])=>card(ITEMS.find(x=>x.id===id),`<div class="prog"><i style="width:${p}%"></i></div><p>${l}</p>`)).join("");
 $("#gCats").innerHTML=CATS.map(([n,g])=>`<button class="cat" data-cat="${n}" aria-pressed="${st.cat===n}"><span class="cg" aria-hidden="true">${g}</span><b>${n==="All"?"All categories":n}</b><small>${n==="All"?ITEMS.length:ITEMS.filter(x=>x.c===n).length} titles</small></button>`).join("");
 $("#gCreators").innerHTML=CREATORS.map(([n,k,i])=>{const f=follows.includes(n);return `<div class="creator"><span class="av" aria-hidden="true">${i}</span><div><strong>${n}</strong><small>${k}</small></div><button class="follow${f?" on":""}" data-follow="${n}" aria-pressed="${f}">${f?"Following":"Follow"}</button></div>`}).join("");
 $("#qBar").hidden=!st.q;$("#qBar span").textContent=st.q;
 $("#qCount").textContent=L.length+" result"+(L.length===1?"":"s");
}
function heroGo(n){cur=(n+SLIDES.length)%SLIDES.length;$$(".hs").forEach((e,i)=>e.classList.toggle("on",i===cur));$$(".dot").forEach((e,i)=>e.classList.toggle("on",i===cur));heroTimer()}
function heroTimer(){clearInterval(timer);if(playing&&!hover)timer=setInterval(()=>heroGo(cur+1),6500)}
function toggleFav(id){favs=isFav(id)?favs.filter(v=>v!==id):[...favs,id];LS.s("bp-favs",favs);render();syncDet();toast(isFav(id)?"Saved to favorites":"Removed from favorites")}
function syncDet(){const f=isFav(curId);$("#dFav").textContent=f?"♥ Saved":"♡ Save";$("#dFav").setAttribute("aria-pressed",f)}
function openDetail(id){const x=ITEMS.find(i=>i.id===id);if(!x)return;curId=id;const a=$("#dArt");a.style.setProperty("--a",x.a);a.style.setProperty("--b",x.b);$("#dGlyph").textContent=x.g;$("#dCat").textContent=x.c.toUpperCase();$("#dT").textContent=x.t;$("#dMeta").innerHTML=`<span>${x.d}</span><span>${fmt(x.v)} views</span><span>${x.q}</span><span>★ ${x.r}</span><span>${x.cr}</span>`;$("#dDesc").textContent=x.s;syncDet();$("#searchDlg").close();$("#detDlg").showModal()}
const openDlg=d=>{if(!d.open)d.showModal()};
function openSearch(){openDlg($("#searchDlg"));setTimeout(()=>$("#q").focus(),40)}
let tt;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),2200)}
function toggleTheme(){const t=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=t;try{localStorage.setItem("bp-theme",t)}catch(e){}$('meta[name="theme-color"]').content=t==="light"?"#f6f4f0":"#17161b"}

/* build hero */
$("#heroSlides").innerHTML=SLIDES.map(s=>`<div class="hs" style="--a:${s.a}"><div class="hs-copy"><span class="eyebrow"><i></i>${s.e}</span><h2>${s.h}</h2><p>${s.s}</p><div class="btns"><button class="btn gold" data-item="${s.id}">Preview</button><a class="btn ghost" href="#trending">Browse trending</a></div></div><div class="hs-art" aria-hidden="true"><span class="disc"></span><span class="disc two"></span></div></div>`).join("");
$("#dots").innerHTML=SLIDES.map((_,i)=>`<button class="dot" data-slide="${i}" aria-label="Slide ${i+1}"></button>`).join("");
$("#heroPlay").innerHTML=playing?ICON.pause:ICON.play;
$("#heroPlay").onclick=()=>{playing=!playing;$("#heroPlay").innerHTML=playing?ICON.pause:ICON.play;$("#heroPlay").setAttribute("aria-label",playing?"Pause slider":"Play slider");heroTimer()};
const hb=$("#heroBox");
hb.onmouseenter=()=>{hover=true;heroTimer()};hb.onmouseleave=()=>{hover=false;heroTimer()};
hb.addEventListener("focusin",()=>{hover=true;heroTimer()});hb.addEventListener("focusout",()=>{hover=false;heroTimer()});
let tx=0;hb.addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});
hb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>40)heroGo(cur+(d<0?1:-1))},{passive:true});

/* global events */
document.addEventListener("click",e=>{
 const t=e.target,c=s=>t.closest(s);let el;
 if(el=c("[data-item]")){openDetail(+el.dataset.item);return}
 if(el=c("[data-fav]")){toggleFav(+el.dataset.fav);return}
 if(el=c("[data-dfav]")){toggleFav(curId);return}
 if(el=c("[data-cat]")){st.cat=el.dataset.cat;render();return}
 if(el=c("[data-follow]")){const n=el.dataset.follow;follows=follows.includes(n)?follows.filter(v=>v!==n):[...follows,n];LS.s("bp-follows",follows);render();return}
 if(el=c("[data-open]")){if(el.dataset.open==="search")openSearch();else openDlg($("#menuDlg"));return}
 if(el=c("[data-hero]")){heroGo(cur+ +el.dataset.hero);return}
 if(el=c("[data-slide]")){heroGo(+el.dataset.slide);return}
 if(el=c("[data-theme-toggle]")){toggleTheme();return}
 if(el=c("[data-close]")){el.closest("dialog").close();return}
 if(el=c("[data-clearq]")){st.q="";$("#q").value="";render();return}
 if(el=c("[data-play]")){toast("Playback is a placeholder in this prototype");return}
 if(el=c("[data-info]")){toast(el.dataset.info+" page is a placeholder");return}
 if(el=c("#accountBtn")){toast("Accounts are not part of this prototype");return}
 if(el=c('a[href^="#"]')){$$("dialog[open]").forEach(d=>{if(d.id!=="ageDlg")d.close()});const h=el.getAttribute("href");$$(".nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===h));$$(".bnav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")===h))}
});
document.addEventListener("keydown",e=>{
 if(e.key==="/"&&!/INPUT|TEXTAREA/.test(e.target.tagName)&&!document.querySelector("dialog[open]")){e.preventDefault();openSearch();return}
 if(!hb.contains(document.activeElement)||document.querySelector("dialog[open]"))return;
 if(e.key==="ArrowRight")heroGo(cur+1);if(e.key==="ArrowLeft")heroGo(cur-1);
});
$$("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d&&d.id!=="ageDlg")d.close()}));
$("#q").addEventListener("input",e=>{st.q=e.target.value;render()});

/* 18+ gate */
const ageDlg=$("#ageDlg");let ageOk=false;try{ageOk=sessionStorage.getItem("bp-age-ok")==="1"}catch(e){}
ageDlg.addEventListener("cancel",e=>e.preventDefault());
if(!ageOk)ageDlg.showModal();
$("#ageYes").onclick=()=>{try{sessionStorage.setItem("bp-age-ok","1")}catch(e){}ageDlg.close()};
$("#ageNo").onclick=()=>{ageDlg.close();$("#site").hidden=true;$("#declined").hidden=false};

/* init */
heroGo(0);render();
$('meta[name="theme-color"]').content=document.documentElement.dataset.theme==="light"?"#f6f4f0":"#17161b";
