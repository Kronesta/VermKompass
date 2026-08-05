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

}
