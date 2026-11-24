/* =========================================================
   1. LES CATÉGORIES (couleur du toit = type de cadeau)
   ========================================================= */
const CATEGORIES = {
  citation: { nom: "Citation",         couleur: "#F3D45A", encre: "#6A1720" },
  art:      { nom: "Œuvre d'art",      couleur: "#F3A47F", encre: "#6A1720" },
  carte:    { nom: "Carte",            couleur: "#4C6CC2", encre: "#FBF4E4" },
  science:  { nom: "Science & nature", couleur: "#22693A", encre: "#FBF4E4" },
  musique:  { nom: "Musique",          couleur: "#EE5A2E", encre: "#6A1720" },
  lecture:  { nom: "Lecture",          couleur: "#7A1D2A", encre: "#FBF4E4" },
  poeme:    { nom: "Poème",            couleur: "#93BDE8", encre: "#6A1720" },
};
const catDe = j => CATEGORIES[(CADEAUX[j] || {}).type] || CATEGORIES.citation;

/* =========================================================
   2. LES PERSOS (dessins en papier découpé)
   ========================================================= */
const PIONS = {
  bonhomme: { nom:"Le Bonhomme de neige",
    description:"Doux et réconfortant, vous êtes le plaid humain de votre entourage.",
    dessin:`
      <line x1="30" y1="62" x2="12" y2="48" stroke="#6A1720" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="70" y1="62" x2="88" y2="48" stroke="#6A1720" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="50" cy="72" r="24" fill="#FBF4E4"/>
      <circle cx="50" cy="40" r="16" fill="#FBF4E4"/>
      <rect x="31" y="23" width="38" height="6" rx="3" fill="#4C6CC2"/>
      <rect x="38" y="6" width="24" height="19" rx="4" fill="#4C6CC2"/>
      <rect x="38" y="17" width="24" height="5" fill="#EE5A2E"/>
      <circle cx="44" cy="37" r="2.2" fill="#6A1720"/><circle cx="56" cy="37" r="2.2" fill="#6A1720"/>
      <polygon points="50,41 66,44 50,46" fill="#EE5A2E"/>
      <rect x="34" y="52" width="32" height="8" rx="4" fill="#EE5A2E"/>
      <rect x="55" y="55" width="9" height="18" rx="4" fill="#EE5A2E" transform="rotate(-12 59 55)"/>
      <circle cx="50" cy="70" r="3" fill="#6A1720"/><circle cx="50" cy="82" r="3" fill="#6A1720"/>` },

  nicolas: { nom:"Saint Nicolas",
    description:"Généreux et bienveillant, vous pensez toujours aux autres avant vous.",
    dessin:`
      <path d="M84 96V34" stroke="#F3D45A" stroke-width="4" stroke-linecap="round"/>
      <path d="M84 34Q84 18 92 20Q98 24 92 30" fill="none" stroke="#F3D45A" stroke-width="4" stroke-linecap="round"/>
      <path d="M26 96L36 50H64L74 96Z" fill="#EE5A2E"/>
      <rect x="46" y="50" width="8" height="46" fill="#F3D45A"/>
      <path d="M32 60L36 50H64L68 60Q50 68 32 60Z" fill="#6A1720"/>
      <circle cx="50" cy="40" r="11" fill="#F3A47F"/>
      <path d="M38 40Q38 64 50 66Q62 64 62 40Q56 48 50 46Q44 48 38 40Z" fill="#FBF4E4"/>
      <circle cx="46" cy="38" r="1.7" fill="#6A1720"/><circle cx="54" cy="38" r="1.7" fill="#6A1720"/>
      <path d="M38 32L40 14L50 4L60 14L62 32Z" fill="#EE5A2E"/>
      <rect x="38" y="28" width="24" height="4" fill="#F3D45A"/>
      <rect x="48" y="11" width="4" height="15" fill="#F3D45A"/><rect x="44" y="15" width="12" height="4" fill="#F3D45A"/>
      <circle cx="80" cy="62" r="5" fill="#F3A47F"/>` },

  sapin: { nom:"Le Sapin",
    description:"Solide et rassembleur, tout le monde finit par se retrouver autour de vous.",
    dessin:`
      <rect x="44" y="82" width="12" height="14" rx="2" fill="#C99460"/>
      <polygon points="50,44 10,86 90,86" fill="#22693A"/>
      <polygon points="50,28 18,66 82,66" fill="#22693A"/>
      <polygon points="50,14 26,46 74,46" fill="#22693A"/>
      <circle cx="42" cy="40" r="3.5" fill="#EE5A2E"/>
      <circle cx="60" cy="56" r="3.5" fill="#F3A47F"/>
      <circle cx="36" cy="62" r="3.5" fill="#F3D45A"/>
      <circle cx="64" cy="78" r="3.5" fill="#EE5A2E"/>
      <circle cx="44" cy="78" r="3.5" fill="#FBF4E4"/>
      <use href="#etoile" transform="translate(39 2) scale(1.1)" fill="#F3D45A"/>` },

  rois: { nom:"Les Rois mages",
    description:"Patient·e et voyageur·se, vous suivez votre étoile, même quand le chemin est long.",
    dessin:`
      <use href="#etoile" transform="translate(45 0) scale(.5)" fill="#F3D45A"/>
      <path d="M8 96L15 56H29L36 96Z" fill="#4C6CC2"/>
      <circle cx="22" cy="48" r="8" fill="#F3A47F"/>
      <path d="M15 50Q22 62 29 50Q22 54 15 50Z" fill="#FBF4E4"/>
      <polygon points="14,43 14,33 18,38 22,31 26,38 30,33 30,43" fill="#F3D45A"/>
      <circle cx="19.5" cy="47" r="1.3" fill="#6A1720"/><circle cx="24.5" cy="47" r="1.3" fill="#6A1720"/>
      <rect x="17" y="66" width="10" height="9" rx="1.5" fill="#F3D45A"/>
      <path d="M36 96L43 50H57L64 96Z" fill="#EE5A2E"/>
      <circle cx="50" cy="42" r="8" fill="#8A5A3B"/>
      <polygon points="42,37 42,25 46,31 50,23 54,31 58,25 58,37" fill="#F3D45A"/>
      <circle cx="47.5" cy="42" r="1.3" fill="#FBF4E4"/><circle cx="52.5" cy="42" r="1.3" fill="#FBF4E4"/>
      <rect x="45" y="60" width="10" height="9" rx="1.5" fill="#FBF4E4"/>
      <path d="M64 96L71 56H85L92 96Z" fill="#22693A"/>
      <circle cx="78" cy="48" r="8" fill="#C99460"/>
      <polygon points="70,43 70,33 74,38 78,31 82,38 86,33 86,43" fill="#F3D45A"/>
      <circle cx="75.5" cy="48" r="1.3" fill="#6A1720"/><circle cx="80.5" cy="48" r="1.3" fill="#6A1720"/>
      <rect x="73" y="66" width="10" height="9" rx="1.5" fill="#F3A47F"/>` },

  luge: { nom:"La Luge",
    description:"Joueur·se et spontané·e, vous foncez tête la première dans chaque aventure.",
    dessin:`
      <path d="M4 90Q50 76 96 90V96H4Z" fill="#FBF4E4"/>
      <path d="M78 44Q92 28 72 22" fill="none" stroke="#EE5A2E" stroke-width="3" stroke-linecap="round"/>
      <rect x="24" y="52" width="7" height="22" rx="2" fill="#A8743F"/>
      <rect x="64" y="52" width="7" height="22" rx="2" fill="#A8743F"/>
      <path d="M8 74H74Q90 74 90 60Q90 50 82 52" fill="none" stroke="#6A1720" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="14" y="40" width="70" height="14" rx="6" fill="#C99460"/>
      <rect x="14" y="40" width="70" height="5" rx="2.5" fill="#E0B07A"/>` },

  skis: { nom:"Les Skis",
    description:"Sportif·ve et audacieux·se, vous aimez la vitesse et les grands espaces.",
    dessin:`
      <g transform="rotate(-24 50 50)">
        <rect x="43" y="2" width="14" height="96" rx="7" fill="#EE5A2E"/>
        <rect x="47" y="8" width="6" height="24" rx="3" fill="#F3D45A"/>
        <rect x="41" y="58" width="18" height="12" rx="3" fill="#6A1720"/>
      </g>
      <g transform="rotate(24 50 50)">
        <rect x="43" y="2" width="14" height="96" rx="7" fill="#4C6CC2"/>
        <rect x="47" y="8" width="6" height="24" rx="3" fill="#FBF4E4"/>
        <rect x="41" y="58" width="18" height="12" rx="3" fill="#6A1720"/>
      </g>` },

  flocon: { nom:"Le Flocon",
    description:"Unique et un peu rêveur·se, vous ne ressemblez à personne d'autre.",
    dessin:`
      <g fill="none" stroke="#4C6CC2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        ${[0,60,120,180,240,300].map(a =>
          `<path transform="rotate(${a} 50 50)" d="M50 50V8M50 22L40 13M50 22L60 13M50 34L42 27M50 34L58 27"/>`).join("")}
      </g>
      <circle cx="50" cy="50" r="8" fill="#F3D45A"/>` },
};

function dessinPion(id){
  return `<svg class="perso" viewBox="0 0 100 100" aria-hidden="true"><g filter="url(#decoupe)">${PIONS[id].dessin}</g></svg>`;
}

/* =========================================================
   3. LE TEST DE PERSONNALITÉ (chaque réponse = un perso)
   ========================================================= */
const QUIZ = [
  { q:"Votre dimanche de décembre idéal ?", r:[
    ["Chocolat chaud et série sous un plaid", "bonhomme"],
    ["Préparer des petits cadeaux pour tout le monde", "nicolas"],
    ["Un grand repas avec toute la famille", "sapin"],
    ["Partir en week-end loin de chez soi", "rois"],
    ["Une bataille de boules de neige", "luge"],
    ["Une journée entière sur les pistes", "skis"],
    ["Regarder la neige tomber par la fenêtre", "flocon"] ]},
  { q:"Le cadeau qui vous ferait le plus plaisir ?", r:[
    ["Des chaussettes toutes douces", "bonhomme"],
    ["Aucun : vous préférez offrir", "nicolas"],
    ["Une soirée avec tous vos proches", "sapin"],
    ["Un billet de train pour ailleurs", "rois"],
    ["Un jeu de société pour rire ensemble", "luge"],
    ["Un forfait de ski", "skis"],
    ["Un carnet pour noter vos rêves", "flocon"] ]},
  { q:"Dans votre groupe d'amis, vous êtes…", r:[
    ["Le ou la confident·e", "bonhomme"],
    ["Celui ou celle qui n'oublie aucun anniversaire", "nicolas"],
    ["Le pilier, toujours là", "sapin"],
    ["Toujours en retard, mais adoré·e", "rois"],
    ["L'ambianceur·se", "luge"],
    ["Celui ou celle qui propose les plans sportifs", "skis"],
    ["L'original·e mystérieux·se", "flocon"] ]},
  { q:"Votre paysage d'hiver préféré ?", r:[
    ["Un salon avec un feu de cheminée", "bonhomme"],
    ["Une vieille ville illuminée", "nicolas"],
    ["Une forêt de sapins sous la neige", "sapin"],
    ["Un désert sous un ciel étoilé", "rois"],
    ["Une colline parfaite pour glisser", "luge"],
    ["Un sommet au lever du soleil", "skis"],
    ["Un ciel blanc juste avant la neige", "flocon"] ]},
  { q:"Votre devise ?", r:[
    ["« La douceur avant tout »", "bonhomme"],
    ["« Donner, c'est recevoir »", "nicolas"],
    ["« Ensemble, c'est mieux »", "sapin"],
    ["« Suis ton étoile »", "rois"],
    ["« Ça glisse ! »", "luge"],
    ["« Toujours plus haut »", "skis"],
    ["« Personne ne me ressemble »", "flocon"] ]},
];

/* =========================================================
   4. LA PLANCHE : disposition et ordre des maisons
   ========================================================= */
// Chaque ligne = un emplacement : [ligne, colonne, hauteur, largeur, forme]
// Formes : "petite" (1x1), "haute" (1x2), "longue" (2x1), "grande" (2x2)
const PLANS = {
  // Ordinateur / tablette : 8 colonnes x 5 lignes
  large: { colonnes:8, lignes:5, sapin:[2,4,2,2], maisons:[
    [1,1,1,1,"petite"], [1,2,2,1,"haute"],  [1,3,1,1,"petite"], [1,4,1,2,"longue"],
    [1,6,1,1,"petite"], [1,7,2,2,"grande"], [2,1,2,1,"haute"],  [2,3,1,1,"petite"],
    [2,6,2,1,"haute"],  [3,2,1,2,"longue"], [3,7,1,1,"petite"], [3,8,2,1,"haute"],
    [4,1,1,1,"petite"], [4,2,1,1,"petite"], [4,3,2,1,"haute"],  [4,4,1,2,"longue"],
    [4,6,1,1,"petite"], [4,7,2,1,"haute"],  [5,1,1,1,"petite"], [5,2,1,1,"petite"],
    [5,4,1,1,"petite"], [5,5,1,1,"petite"], [5,6,1,1,"petite"], [5,8,1,1,"petite"],
  ]},
  // Téléphone : 6 colonnes x 7 lignes
  etroit: { colonnes:6, lignes:7, sapin:[4,3,2,2], maisons:[
    [1,1,2,2,"grande"], [1,3,2,1,"haute"],  [1,4,1,1,"petite"], [1,5,1,2,"longue"],
    [2,4,1,1,"petite"], [2,5,2,1,"haute"],  [2,6,1,1,"petite"], [3,1,2,1,"haute"],
    [3,2,1,2,"longue"], [3,4,1,1,"petite"], [3,6,2,1,"haute"],  [4,2,1,1,"petite"],
    [4,5,2,1,"haute"],  [5,1,1,1,"petite"], [5,2,1,1,"petite"], [5,6,1,1,"petite"],
    [6,1,1,2,"longue"], [6,3,2,1,"haute"],  [6,4,1,2,"longue"], [6,6,2,1,"haute"],
    [7,1,1,1,"petite"], [7,2,1,1,"petite"], [7,4,1,1,"petite"], [7,5,1,1,"petite"],
  ]},
};

// Quel jour va dans quel emplacement (dans l'ordre des maisons). Chaque nombre de 1 à 24 une seule fois !
const ORDRE = [2,17,6,11,21,9,14,4,19,1,23,8,13,22,5,16,10,3,20,12,24,7,18,15];

const ECRAN_ETROIT = window.matchMedia("(max-width: 640px)");

/* =========================================================
   5. LA MÉCANIQUE DU JEU
   ========================================================= */
const TEST = new URLSearchParams(location.search).has("test"); // ajoutez ?test à l'adresse pour tout débloquer
const CLE = "grandJeuAvent";
let etat = JSON.parse(localStorage.getItem(CLE)) || { pion:null, position:0 };
if(etat.pion && !PIONS[etat.pion]) etat.pion = null; // ancien perso qui n'existe plus
const sauver = () => localStorage.setItem(CLE, JSON.stringify(etat));

const plateau = document.getElementById("plateau");
const pionEl = document.getElementById("pion");
const btnOuvrir = document.getElementById("ouvrir");
const voile = document.getElementById("voile");
const cases = {};

function jourMax(){
  if (TEST) return 25;
  const d = new Date();
  return d.getMonth() === 11 ? Math.min(d.getDate(), 25) : 0;
}

/* ---------- Les maisons ---------- */
const COTES = ["#F7C9B5","#BFD3F2","#F6E39A","#A9D3B5","#F2B8A0"];

function maison(jour, forme){
  const cat  = catDe(jour);
  const cote = COTES[jour % COTES.length];
  const cote2 = COTES[(jour + 2) % COTES.length];
  const P = c => `class="peint" style="--c:${c}"`;
  const porte = d => `<path class="detail porte" d="${d}"/>`;
  const textes = (x, yToit, yMur, t = 17) =>
    `<text class="detail num-toit" x="${x}" y="${yToit}" style="fill:${cat.encre};font-size:${t}px">${jour}</text>
     <text class="num-mur" x="${x}" y="${yMur}" style="font-size:${t - 1}px">${jour}.</text>`;
  let vb = "0 0 100 100", formes, txt;

  if(forme === "haute"){ // grande tour
    vb = "0 0 100 200";
    formes = `<polygon ${P(cote)} points="78,66 90,58 90,188 78,194"/>
      <rect ${P("var(--kraft)")} x="22" y="66" width="56" height="128"/>
      <polygon ${P(cat.couleur)} points="50,4 84,66 16,66"/>
      <rect class="detail fenetre" x="32" y="84" width="12" height="14" rx="3"/>
      <rect class="detail fenetre" x="56" y="84" width="12" height="14" rx="3"/>
      <circle class="detail fenetre" cx="50" cy="128" r="7"/>
      ${porte("M43 194V179a7 7 0 0 1 14 0V194Z")}`;
    txt = textes(50, 54, 135, 18);
  }
  else if(forme === "longue"){ // longue maison à deux toits + cheminée
    vb = "0 0 200 100";
    formes = `<rect ${P("var(--bordeaux)")} x="150" y="8" width="9" height="18"/>
      <polygon ${P(cote2)} points="180,50 192,44 192,88 180,94"/>
      <polygon ${P(cote)} points="90,50 100,26 172,26 180,50"/>
      <rect ${P("var(--kraft)")} x="10" y="50" width="170" height="44"/>
      <polygon ${P(cat.couleur)} points="10,50 50,12 90,50"/>
      <rect class="detail fenetre" x="28" y="60" width="12" height="12" rx="3"/>
      <rect class="detail fenetre" x="118" y="60" width="14" height="10" rx="3"/>
      <rect class="detail fenetre" x="146" y="60" width="14" height="10" rx="3"/>
      ${porte("M66 94V81a7 7 0 0 1 14 0V94Z")}`;
    txt = textes(50, 43, 80, 17);
  }
  else if(forme === "grande"){ // grande maison
    vb = "0 0 200 200";
    formes = `<rect ${P("var(--bordeaux)")} x="128" y="22" width="13" height="36"/>
      <polygon ${P(cote)} points="160,90 180,78 180,186 160,194"/>
      <polygon ${P(cote)} points="100,14 118,8 182,78 162,90"/>
      <rect ${P("var(--kraft)")} x="24" y="90" width="136" height="104"/>
      <polygon ${P(cat.couleur)} points="100,14 166,90 18,90"/>
      <rect class="detail fenetre" x="40" y="108" width="20" height="20" rx="4"/>
      <rect class="detail fenetre" x="124" y="108" width="20" height="20" rx="4"/>
      <rect class="detail fenetre" x="40" y="148" width="20" height="20" rx="4"/>
      <rect class="detail fenetre" x="124" y="148" width="20" height="20" rx="4"/>
      ${porte("M88 194V166a12 12 0 0 1 24 0V194Z")}`;
    txt = textes(100, 76, 145, 30);
  }
  else switch(jour % 3){ // petites maisons
    case 0: // toit pointu
      formes = `<polygon ${P(cote)} points="80,46 91,38 91,88 80,94"/>
        <polygon ${P(cote)} points="50,6 60,3 92,38 82,46"/>
        <rect ${P("var(--kraft)")} x="18" y="46" width="62" height="48"/>
        <polygon ${P(cat.couleur)} points="50,6 84,46 14,46"/>
        <rect class="detail fenetre" x="27" y="56" width="12" height="12" rx="3"/>
        ${porte("M48 94V81a7 7 0 0 1 14 0V94Z")}`;
      txt = textes(50, 38, 75);
      break;
    case 1: // toit plat + cheminée
      formes = `<rect ${P("var(--bordeaux)")} x="64" y="8" width="9" height="18"/>
        <polygon ${P(cote)} points="80,46 91,40 91,88 80,94"/>
        <rect ${P("var(--kraft)")} x="16" y="46" width="64" height="48"/>
        <polygon ${P(cat.couleur)} points="22,22 78,22 86,46 10,46"/>
        <rect class="detail fenetre" x="56" y="58" width="14" height="10" rx="3"/>
        ${porte("M26 94V81a7 7 0 0 1 14 0V94Z")}`;
      txt = textes(50, 41, 76);
      break;
    default: // petite tour
      formes = `<polygon ${P(cote)} points="78,36 88,30 88,88 78,94"/>
        <rect ${P("var(--kraft)")} x="22" y="36" width="56" height="58"/>
        <polygon ${P(cat.couleur)} points="50,2 82,36 18,36"/>
        <circle class="detail fenetre" cx="50" cy="52" r="6"/>
        ${porte("M43 94V81a7 7 0 0 1 14 0V94Z")}`;
      txt = textes(50, 32, 72);
  }
  return `<svg class="maison" viewBox="${vb}" preserveAspectRatio="xMidYMax meet"><g filter="url(#decoupe)">${formes}</g>${txt}</svg>`;
}

function creerCase(jour, ligne, col, h, l, forme){
  const el = document.createElement("div");
  el.className = "case" + (forme === "sapin" ? " sapin" : "");
  el.style.gridArea = `${ligne} / ${col} / span ${h} / span ${l}`;
  // petite inclinaison "collée à la main" (plus légère pour les grandes)
  el.style.setProperty("--r", (((jour*7)%9)-4) * (forme === "petite" ? 0.9 : 0.4) + "deg");
  // les petites maisons n'ont pas toutes la même taille
  if(forme === "petite") el.style.setProperty("--s", 0.78 + ((jour*13)%5) * 0.055);
  if(forme !== "sapin") el.innerHTML = maison(jour, forme);
  el.onclick = () => { if(jour <= etat.position) ouvrirCadeau(jour); };
  plateau.appendChild(el); cases[jour] = el;
}

function construirePlateau(){
  plateau.querySelectorAll(".case").forEach(e => e.remove());
  const format = ECRAN_ETROIT.matches ? "etroit" : "large";
  const plan = PLANS[format];
  plateau.dataset.format = format;
  plateau.style.setProperty("--cols", plan.colonnes);
  plateau.style.setProperty("--rows", plan.lignes);
  plan.maisons.forEach(([ligne,col,h,l,forme], i) => creerCase(ORDRE[i], ligne, col, h, l, forme));
  creerCase(25, ...plan.sapin, "sapin");
}

function construireLegende(){
  document.getElementById("legende").innerHTML = Object.values(CATEGORIES)
    .map(c=>`<span style="background:${c.couleur};color:${c.encre}">${c.nom}</span>`).join("");
}

/* ---------- Le sapin (case 25) ---------- */
function arbre(){
  let s=`<svg viewBox="0 0 100 110" width="100%" height="100%">
    <g filter="url(#decoupe)">
      <polygon points="50,8 8,92 92,92" style="fill:var(--vert);stroke:var(--vert);stroke-width:6;stroke-linejoin:round"/>
      <rect x="43" y="92" width="14" height="12" rx="3" style="fill:var(--bordeaux)"/>
    </g>`;
  const rangs=[2,3,4,5,5,5]; let jour=1;
  rangs.forEach((n,k)=>{
    const y=30+k*11, demi=(y-8)*0.5*0.75;
    for(let j=0;j<n;j++){
      const x=50-demi+(2*demi)*j/(n-1);
      const ouvert=jour<=etat.position;
      s+=`<circle cx="${x}" cy="${y}" r="4.3"
          style="fill:${ouvert?catDe(jour).couleur:"rgba(251,244,228,.28)"};stroke:${ouvert?"#fff":"none"};stroke-width:1.3"/>`;
      jour++;
    }
  });
  if(etat.position>=25) s+=`<use href="#etoile" transform="translate(39 -3) scale(1.1)" style="fill:var(--beurre)"/>`;
  return s+"</svg>";
}

/* ---------- Mise à jour du plateau ---------- */
function majPlateau(){
  const max=jourMax();
  for(let j=1;j<=25;j++){
    const el=cases[j];
    el.classList.toggle("passee", j<=etat.position);
    el.classList.toggle("actuelle", j===etat.position+1 && j<=max);
  }
  cases[25].innerHTML=arbre();
  btnOuvrir.disabled = etat.position>=max || !etat.pion;
  const msg=document.getElementById("message");
  if(max===0) msg.textContent="Patience… le jeu commence le 1er décembre !";
  else if(etat.position>=25) msg.textContent="🎄 Bravo, votre sapin est entièrement décoré !";
  else if(etat.position<max) msg.textContent= max-etat.position>1
      ? `Vous avez ${max-etat.position} cases à rattraper, ouvrez-les !`
      : "Une case vous attend, ouvrez-la !";
  else msg.textContent="Revenez demain pour la case suivante ✨";
  placerPion();
}

function placerPion(){
  if(!etat.pion){ pionEl.innerHTML=""; pionEl.dataset.id=""; return; }
  if(pionEl.dataset.id !== etat.pion){ pionEl.innerHTML=dessinPion(etat.pion); pionEl.dataset.id=etat.pion; }
  const c=cases[Math.max(etat.position,1)];
  let x=c.offsetLeft+c.offsetWidth/2, y=c.offsetTop+c.offsetHeight/2;
  if(etat.position===0) y-=c.offsetHeight*0.6; // en attente au départ
  pionEl.style.left=x+"px"; pionEl.style.top=y+"px";
}

/* ---------- Le bouton étoile ---------- */
function ouvrir(){
  if(etat.position>=jourMax() || !etat.pion) return;
  btnOuvrir.classList.remove("pop"); void btnOuvrir.offsetWidth; btnOuvrir.classList.add("pop");
  etat.position++; sauver(); majPlateau();
  setTimeout(()=>ouvrirCadeau(etat.position), 850);
}
btnOuvrir.onclick=ouvrir;

/* ---------- Fenêtres ---------- */
function afficher(html){ voile.innerHTML=html; voile.classList.add("ouvert"); }
function fermer(){ voile.classList.remove("ouvert"); }
voile.onclick=e=>{ if(e.target===voile && etat.pion) fermer(); };

/* Vignette YouTube : image + bouton lecture. En ligne (http/https), un clic lance
   la vidéo dans la carte ; en fichier local, YouTube bloque l'intégration, donc
   le clic ouvre la vidéo dans un nouvel onglet. */
function idYouTube(url){
  const m=url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : "";
}
function vignetteVideo(url){
  const id=idYouTube(url);
  if(!id) return "";
  return `<a class="video" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"
    onclick="return lancerVideo(this,'${id}')">
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Vidéo YouTube">
    <span class="video-play" aria-hidden="true"></span></a>`;
}
function lancerVideo(el,id){
  if(!location.protocol.startsWith("http")) return true;
  el.outerHTML=`<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1"
    title="Vidéo YouTube" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  return false;
}

function ouvrirCadeau(j){
  const c=CADEAUX[j] || {};
  if(j===25){
    afficher(`<div class="carte"><div class="carte-tete" style="background:var(--vert);color:var(--creme)">
      <span class="grand-num">25</span><span class="etiq">décembre<br>Le grand final</span></div>
      <div class="carte-corps" style="text-align:center"><div style="width:200px;margin:auto">${arbre()}</div>
      <h2>${c.titre||""}</h2><p>${c.texte||""}</p>
      <button class="btn" onclick="fermer()">Fermer</button></div></div>`);
    return;
  }
  if(c.fragments){ ouvrirFragments(j,c); return; }
  const cat=catDe(j);
  let h=`<div class="carte"><div class="carte-tete" style="background:${cat.couleur};color:${cat.encre}">
    <span class="grand-num">${j}</span><span class="etiq">décembre<br>${cat.nom}</span></div><div class="carte-corps">`;
  if(c.titre) h+=`<h2>${c.titre}</h2>`;
  if(c.image) h+=`<img src="${c.image}" alt="${c.titre||""}">`;
  if(c.texte) h+= (c.type==="citation"||c.type==="poeme") ? `<blockquote style="white-space:pre-line">${c.texte}</blockquote>` : `<p style="white-space:pre-line">${c.texte}</p>`;
  if(c.auteur) h+=`<p>— ${c.auteur}</p>`;
  if(c.video) h+=vignetteVideo(c.video);
  if(c.lien) h+=`<p><a href="${c.lien}" target="_blank" rel="noopener">Découvrir →</a></p>`;
  if(!c.titre && !c.texte) h+=`<p>🎁 Ce cadeau n'est pas encore rempli !</p>`;
  afficher(h+`<button class="btn" style="margin-top:1rem" onclick="fermer()">Fermer</button></div></div>`);
}

/* ---------- Case à morceaux (ex. Sagan, case 23) ----------
   9 photos découpées sur fond rouge ; un clic sur un morceau révèle sa citation. */
const ROTATIONS=[-3,2,-1.5,2.5,-2,1,-2.5,1.5,-1];
function ouvrirFragments(j,c){
  const cat=catDe(j);
  let h=`<div class="carte"><div class="carte-tete" style="background:${cat.couleur};color:${cat.encre}">
    <span class="grand-num">${j}</span><span class="etiq">décembre<br>${c.titre||cat.nom}</span></div>
    <div class="carte-corps"><p class="frag-consigne">Neuf morceaux, neuf citations. Choisissez-en un.</p>
    <div class="frag-fond"><div class="frag-grille">`;
  c.fragments.forEach((f,i)=>{
    h+=`<button class="frag-bout" style="--r:${ROTATIONS[i%9]}deg;--d:${i*70}ms"
      onclick="montrerFragment(${j},${i})" aria-label="Morceau ${i+1}">
      <span class="frag-num">${i+1}</span>
      <img src="${f.image}" alt="" onerror="this.remove()"></button>`;
  });
  h+=`</div></div><div class="frag-citation" id="frag-citation" aria-live="polite"></div>
    <button class="btn" style="margin-top:1rem" onclick="fermer()">Fermer</button></div></div>`;
  afficher(h);
}
function montrerFragment(j,i){
  const f=CADEAUX[j].fragments[i];
  document.querySelectorAll(".frag-bout").forEach((b,k)=>b.classList.toggle("actif",k===i));
  document.querySelectorAll(".frag-bout")[i].classList.add("vu");
  const zone=document.getElementById("frag-citation");
  zone.innerHTML=`<blockquote>${f.texte}</blockquote>${f.source?`<p>— Françoise Sagan, ${f.source}</p>`:""}`;
  zone.classList.remove("apparait"); void zone.offsetWidth; zone.classList.add("apparait");
  zone.scrollIntoView({behavior:"smooth",block:"nearest"});
}

/* ---------- Choix du perso ---------- */
function ecranPions(){
  let h=`<div class="carte"><div class="carte-tete" style="background:var(--prune)"><span>Choisissez votre perso</span></div><div class="carte-corps"><div class="pions">`;
  for(const [id,p] of Object.entries(PIONS)) h+=`<button onclick="choisirPion('${id}')">${dessinPion(id)}<small>${p.nom}</small></button>`;
  afficher(h+`</div><button class="btn" onclick="demarrerQuiz()">🔮 J'hésite, faire le test !</button></div></div>`);
}
function choisirPion(id){ etat.pion=id; sauver(); fermer(); majPlateau(); }

/* ---------- Quiz ---------- */
let qi=0, scores={};
function demarrerQuiz(){ qi=0; scores={}; question(); }
function question(){
  const q=QUIZ[qi], reponses=[...q.r].sort(()=>Math.random()-.5);
  let h=`<div class="carte"><div class="carte-tete" style="background:var(--canard)"><span>Quel perso êtes-vous ?</span><span>${qi+1}/${QUIZ.length}</span></div><div class="carte-corps"><h2>${q.q}</h2>`;
  reponses.forEach(([txt,id])=>h+=`<button class="choix" onclick="repondre('${id}')">${txt}</button>`);
  afficher(h+"</div></div>");
}
function repondre(id){ scores[id]=(scores[id]||0)+1; qi++; qi<QUIZ.length ? question() : resultat(); }
function resultat(){
  const id=Object.keys(scores).sort((a,b)=>scores[b]-scores[a])[0], p=PIONS[id];
  afficher(`<div class="carte"><div class="carte-tete" style="background:var(--rose)"><span>Votre perso est…</span></div>
    <div class="carte-corps" style="text-align:center"><div class="perso-grand">${dessinPion(id)}</div><h2>${p.nom}</h2><p>${p.description}</p>
    <button class="btn" style="margin-top:1rem" onclick="choisirPion('${id}')">Jouer avec ce perso</button>
    <button class="choix" style="text-align:center;margin-top:1rem" onclick="ecranPions()">Choisir un autre perso</button></div></div>`);
}

/* ---------- Démarrage ---------- */
construirePlateau();
construireLegende();
majPlateau();
ECRAN_ETROIT.addEventListener("change", ()=>{ construirePlateau(); majPlateau(); });
window.addEventListener("resize", placerPion);
window.addEventListener("load", placerPion);
document.fonts && document.fonts.ready.then(placerPion);
if(!etat.pion) ecranPions();
