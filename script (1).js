/* ===========================================
   VermKompass
   script.js
   Version 1.0
=========================================== */

// ----------------------------
// Dark Mode
// ----------------------------

const darkButton = document.getElementById("darkMode");

if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");
            darkButton.innerHTML="☀️";

        }else{

            localStorage.setItem("theme","light");
            darkButton.innerHTML="🌙";

        }

    });

}

// Bereits gespeichertes Theme laden

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    if(darkButton){

        darkButton.innerHTML="☀️";

    }

}



// ----------------------------
// Suchfunktion
// ----------------------------

const suchfeld=document.getElementById("searchInput");

const wikiSeiten=[

"Koordinatensysteme",
"UTM",
"Gauß-Krüger",
"Lagebezug",
"Höhenbezug",
"SAPOS",
"EPSG",
"Transformation",
"Grenzpunkt bestimmen",
"Grenzpunkt berichtigen",
"Gebäudepunkte",
"Katasterberichtigung",
"Vermessungsdokumentation",
"Außendienst",
"Auswertung",
"VermCAD",
"CARLO",
"DMSCaribu",
"GEOgraf",
"Checklisten",
"Glossar"

];

if(suchfeld){

suchfeld.addEventListener("keyup",function(){

let suche=this.value.toLowerCase();

let alteBox=document.getElementById("suchErgebnisse");

if(alteBox){

alteBox.remove();

}

if(suche===""){

return;

}

let treffer=wikiSeiten.filter(eintrag=>

eintrag.toLowerCase().includes(suche)

);

let box=document.createElement("div");

box.id="suchErgebnisse";

box.style.position="absolute";
box.style.background="white";
box.style.width="320px";
box.style.maxHeight="300px";
box.style.overflowY="auto";
box.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";
box.style.borderRadius="10px";
box.style.padding="10px";
box.style.marginTop="5px";
box.style.zIndex="999";

if(document.body.classList.contains("dark")){

box.style.background="#1d1d1d";
box.style.color="white";

}

if(treffer.length===0){

box.innerHTML="<p>Keine Treffer gefunden.</p>";

}else{

treffer.forEach(function(text){

let p=document.createElement("p");

p.innerHTML="🔍 "+text;

p.style.padding="8px";

p.style.cursor="pointer";

p.onmouseover=function(){

this.style.background="#e8f0fe";

}

p.onmouseout=function(){

this.style.background="transparent";

}

box.appendChild(p);

});

}

suchfeld.parentElement.appendChild(box);

});

}



// ----------------------------
// Schnellzugriffe
// ----------------------------

const buttons=document.querySelectorAll(".quickLinks button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

suchfeld.value=button.innerText;

suchfeld.dispatchEvent(new KeyboardEvent("keyup"));

});

});



// ----------------------------
// Begrüßung
// ----------------------------

console.log("Willkommen bei VermKompass.");



// ----------------------------
// Version
// ----------------------------

console.log("Version 1.0 geladen.");
