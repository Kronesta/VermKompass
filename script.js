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
// VermKompass Gesamtsuche
// ----------------------------

const searchInput = document.getElementById("searchInput");


if(searchInput && typeof suchIndex !== "undefined"){


searchInput.addEventListener("keyup", function(){


let suche = this.value.toLowerCase();


let alteBox=document.getElementById("suchErgebnisse");

if(alteBox){

    alteBox.remove();

}


if(suche.length < 2){

    return;

}


let treffer = suchIndex.filter(eintrag =>

    eintrag.titel.toLowerCase().includes(suche) ||

    eintrag.begriffe.toLowerCase().includes(suche)

);



let box=document.createElement("div");

box.id="suchErgebnisse";


box.style.position="absolute";
box.style.background="white";
box.style.width="320px";
box.style.padding="10px";
box.style.borderRadius="10px";
box.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";
box.style.zIndex="999";



treffer.forEach(function(eintrag){


let p=document.createElement("p");


p.innerHTML="🔍 " + eintrag.titel;


p.style.padding="8px";
p.style.cursor="pointer";



p.onclick=function(){

window.location.href = eintrag.seite;

};



box.appendChild(p);


});



searchInput.parentElement.appendChild(box);


});

}


// ----------------------------
// Begrüßung
// ----------------------------

console.log("Willkommen bei VermKompass.");



// ----------------------------
// Version
// ----------------------------

console.log("Version 1.0 geladen.");
const searchInput = document.getElementById("searchInput");


if(searchInput){

searchInput.addEventListener("keyup", function(e){


if(e.key === "Enter"){


let suche = searchInput.value.toLowerCase();


let gefunden = suchIndex.filter(function(eintrag){


return (

eintrag.titel.toLowerCase().includes(suche)

||

eintrag.begriffe.toLowerCase().includes(suche)

);


});


if(gefunden.length > 0){


window.location.href =
gefunden[0].seite;


}

else{

alert("Keine passenden Ergebnisse gefunden.");

}


}


});
   // ----------------------------
// VermKompass Gesamtsuche
// ----------------------------

const searchInput = document.getElementById("searchInput");


if(searchInput && typeof suchIndex !== "undefined"){


searchInput.addEventListener("keyup", function(){


let suche = this.value.toLowerCase();


let alteBox=document.getElementById("suchErgebnisse");

if(alteBox){
    alteBox.remove();
}


if(suche.length < 2){
    return;
}


let treffer = suchIndex.filter(eintrag =>

eintrag.titel.toLowerCase().includes(suche) ||

eintrag.begriffe.toLowerCase().includes(suche)

);



let box=document.createElement("div");

box.id="suchErgebnisse";


box.style.position="absolute";
box.style.background="white";
box.style.width="320px";
box.style.padding="10px";
box.style.borderRadius="10px";
box.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";
box.style.zIndex="999";



treffer.forEach(function(eintrag){


let p=document.createElement("p");


p.innerHTML="🔍 "+eintrag.titel;


p.style.padding="8px";
p.style.cursor="pointer";



p.onclick=function(){

window.location.href=eintrag.seite;

};


box.appendChild(p);


});



searchInput.parentElement.appendChild(box);



});



}

}
