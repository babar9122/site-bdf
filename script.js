
const CONFIG = {

  logo: "photos/logo_BDF_2627.jpg",
  email: "bdf.telecomphysiques@gmail.com",
  instagram: "https://www.instagram.com/bdf_psbs/",   
  facebook:  "https://www.facebook.com/BdfPs?locale=fr_FR", 
  Tiktok:    "https://www.tiktok.com/@bdf_psbs",
  soundcloud : "https://soundcloud.com/bdf-psbs?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",  
};

// Menu (commun à toutes les pages)
const MENU = [
  {label:"L'asso",    href:"index.html#asso"},
  {label:"Le bureau", href:"index.html#bureau"},
  {label:"Vidéos",    href:"index.html#videos"},
  {label:"Matériel",  href:"index.html#materiel"},
  {label:"Contact",   href:"index.html#contact"},
];

// --- construction du logo (image ou rond "BDF") ---
function logoHTML(cls){
  if(CONFIG.logo){ return `<img src="${CONFIG.logo}" alt="Logo BDF" class="${cls}">`; }
  if(cls==="hero-seal"){ return `<div class="hero-seal"><span>BDF</span></div>`; }
  return `<span class="${cls}"><span>BDF</span></span>`;
}

// --- NAV ---
function buildNav(){
  const here = location.pathname.split("/").pop() || "index.html";
  const links = MENU.map(m=>{
    const active = m.href.startsWith(here) && here!=="index.html" ? "" :
                   (m.href.startsWith("index.html") && here==="index.html" ? "" : "");
    return `<li><a href="${m.href}">${m.label}</a></li>`;
  }).join("");
  const nav = document.getElementById("nav");
  if(!nav) return;
  nav.innerHTML = `
    <a href="index.html" class="brand">${logoHTML("seal")}<b>BUREAU <i>DES</i> FETES</b></a>
    <ul class="menu" id="menu">${links}</ul>
    <button class="burger" id="burger" aria-label="Menu">&#9776;</button>`;
  const burger=document.getElementById("burger"), menu=document.getElementById("menu");
  burger.addEventListener("click",()=>menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
}

// --- FOOTER ---
function buildFooter(){
  const f=document.getElementById("footer");
  if(!f) return;
  f.innerHTML = `
    <a href="index.html" class="brand">${logoHTML("seal")}<b>BUREAU <i>DES</i> FETES</b></a>
    <span style = "display: block;">&copy; 2026 - Tous droits réservés</span>
    <small style = "display: block;"> Développement par Mathis Barateig (Légende vivante du BDF)</small>`;
}
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38 3.7 3.7 0 0 1-1.38.9c-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06zm0 8.14A3.2 3.2 0 1 0 8.8 12a3.2 3.2 0 0 0 3.2 3.2zm6.28-8.34a1.15 1.15 0 1 1-1.15-1.15 1.15 1.15 0 0 1 1.15 1.15z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82h-3.3v13.05a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.32-2.48V7.6a5.88 5.88 0 0 0-.73-.05A5.92 5.92 0 0 0 3.74 13.5a5.92 5.92 0 0 0 11.84 0V8.69a7.58 7.58 0 0 0 4.42 1.42V6.8a4.27 4.27 0 0 1-3.4-.98z"/></svg>`,
  soundcloud: `<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor"><path d="M1.4 13.2c-.07 0-.12.05-.13.12l-.2 1.86.2 1.83c.01.07.06.12.13.12.06 0 .12-.05.12-.12l.23-1.83-.23-1.86c0-.07-.06-.12-.12-.12zm1.02-.96c-.07 0-.13.06-.13.13l-.27 2.81.27 2.72c0 .07.06.13.13.13.07 0 .12-.06.13-.13l.3-2.72-.3-2.81c-.01-.07-.06-.13-.13-.13zm1.1-.5c-.08 0-.14.06-.15.14l-.25 3.3.25 3.18c.01.08.07.14.15.14.07 0 .14-.06.14-.14l.28-3.18-.28-3.3c0-.08-.07-.14-.14-.14zm1.12-.12c-.09 0-.15.07-.16.15l-.23 3.42.23 3.3c.01.09.07.16.16.16.08 0 .15-.07.15-.16l.27-3.3-.27-3.42c0-.08-.07-.15-.15-.15zm1.14-.05c-.09 0-.16.07-.17.17l-.22 3.45.22 3.32c.01.1.08.17.17.17.09 0 .16-.07.17-.17l.25-3.32-.25-3.45c-.01-.1-.08-.17-.17-.17zm1.16.36c-.1 0-.18.08-.18.18l-.2 3.08.2 3.33c0 .1.08.18.18.18.1 0 .18-.08.19-.18l.23-3.33-.23-3.08c-.01-.1-.09-.18-.19-.18zm1.18-1.07c-.11 0-.19.09-.2.2l-.19 4.13.19 3.32c.01.11.09.2.2.2.1 0 .19-.09.2-.2l.21-3.32-.21-4.13c-.01-.11-.1-.2-.2-.2zm1.2-.5c-.11 0-.2.09-.21.21l-.17 4.63.17 3.31c.01.12.1.21.21.21.12 0 .21-.09.22-.21l.19-3.31-.19-4.63c-.01-.12-.1-.21-.22-.21zm1.21 9.34c.12 0 .22-.1.23-.22l.17-3.28-.17-7.4c-.01-.12-.11-.22-.23-.22-.12 0-.22.1-.22.22l-.16 7.4.16 3.28c0 .12.1.22.22.22zm1.46-11.6c-.04-.03-.1-.05-.15-.05-.06 0-.12.02-.16.06-.06.05-.1.13-.1.21v.04l-.15 9.1.08 1.67.07 1.62c.01.13.11.23.24.23.13 0 .23-.1.24-.24l.18-3.29-.18-9.13c0-.09-.05-.17-.13-.21zm1.13-.49c-.05-.03-.1-.04-.16-.04-.07 0-.14.02-.19.06-.07.05-.11.13-.11.22l-.01.06-.13 9.54.13 1.7c0 .14.12.25.26.25h.02c.14 0 .25-.12.26-.27l.15-1.68-.15-9.54c0-.13-.1-.25-.22-.28zm9.65 3.92c-.48 0-.94.1-1.36.27-.28-3.17-2.94-5.66-6.18-5.66-.79 0-1.56.16-2.24.42-.27.1-.34.2-.34.41v10.74c0 .22.17.41.39.43h9.73c1.94 0 3.51-1.57 3.51-3.51s-1.57-3.51-3.51-3.51z"/></svg>`,
};

// --- remplit email + réseaux là où c'est demandé ---
function fillContact(){
  document.querySelectorAll("[data-mail]").forEach(el=>{
    el.href = "mailto:"+CONFIG.email;
    const t=el.querySelector(".mail-text"); if(t) t.textContent=CONFIG.email;
  });
  const ig=document.querySelector("[data-ig]"), fb=document.querySelector("[data-fb]"); const tk=document.querySelector("[data-tk]"); const sc=document.querySelector("[data-sc]");
  if(ig){ if(CONFIG.instagram){ ig.href=CONFIG.instagram; ig.innerHTML=ICONS.instagram; } else ig.style.display="none"; }
  if(fb){ if(CONFIG.facebook){ fb.href=CONFIG.facebook; fb.innerHTML=ICONS.facebook; } else fb.style.display="none"; }
  if(tk){ if(CONFIG.Tiktok){ tk.href=CONFIG.Tiktok; tk.innerHTML=ICONS.tiktok; } else tk.style.display="none"; }
  if(sc){ if(CONFIG.soundcloud){ sc.href=CONFIG.soundcloud; sc.innerHTML=ICONS.soundcloud; } else sc.style.display="none"; }
}


// --- logo du hero (accueil) ---
function buildHeroSeal(){
  const h=document.getElementById("heroSeal");
  if(h) h.outerHTML = logoHTML("hero-seal");
}

function toggleSon(video){
  video.muted = !video.muted;
    video.volume = 1;            
  if(!video.muted) video.play();   
  const btn = video.parentElement.querySelector(".son-btn");
  if(btn) btn.textContent = video.muted ? "🔇" : "🔊";
}

// --- barre de nav qui se densifie au scroll ---
function scrollNav(){
  const nav=document.getElementById("nav");
  window.addEventListener("scroll",()=>nav&&nav.classList.toggle("scrolled",window.scrollY>40));
}

document.addEventListener("DOMContentLoaded",()=>{
  buildNav(); buildFooter(); buildHeroSeal(); fillContact(); scrollNav();
});
