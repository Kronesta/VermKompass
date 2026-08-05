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


// gespeichertes Theme laden

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


    searchInput.addEventListener("keyup", function(e){


        let suche = this.value.toLowerCase();


        let alteBox = document.getElementById("suchErgebnisse");


        if(alteBox){

            alteBox.remove();

        }



        if(suche.length < 2){

            return;

        }



       let treffer = suchIndex
.filter(eintrag => {

let titel = eintrag.titel.toLowerCase();
let begriffe = eintrag.begriffe.toLowerCase();


if(suche.length <= 2){

return titel.includes(suche);

}


return titel.includes(suche) || begriffe.includes(suche);


})
.sort((a,b)=>{


let aTitel = a.titel.toLowerCase();
let bTitel = b.titel.toLowerCase();


let aScore = aTitel.startsWith(suche) ? 2 : 0;
let bScore = bTitel.startsWith(suche) ? 2 : 0;


return bScore-aScore;


});



        let box = document.createElement("div");


        box.id="suchErgebnisse";


      box.style.position="absolute";
box.style.top="55px";
box.style.left="0";
box.style.background="white";
box.style.width="320px";
box.style.padding="10px";
box.style.borderRadius="10px";
box.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";
box.style.zIndex="999";  



        if(treffer.length === 0){


            box.innerHTML="<p>Keine Treffer gefunden.</p>";


        }



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



        // Enter öffnet ersten Treffer

        if(e.key === "Enter" && treffer.length > 0){


            window.location.href = treffer[0].seite;


        }


    });


}





// ----------------------------
// Schnellzugriffe
// ----------------------------


const buttons=document.querySelectorAll(".quickLinks button");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        if(searchInput){


            searchInput.value=button.innerText;


            searchInput.dispatchEvent(
                new KeyboardEvent("keyup")
            );


        }


    });


});





// ----------------------------
// Meldungen
// ----------------------------


console.log("Willkommen bei VermKompass.");

console.log("Version 1.0 geladen.");
