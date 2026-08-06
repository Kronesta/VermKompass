/* ===========================================
   VermKompass
   script.js
   Version 1.1
=========================================== */


// ----------------------------
// Dark Mode
// ----------------------------

const darkButton = document.getElementById("darkMode");


if(darkButton){

    darkButton.addEventListener("click",()=>{

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



if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    if(darkButton){

        darkButton.innerHTML="☀️";

    }

}



// ----------------------------
// Suche
// ----------------------------

alert("VermKompass Script läuft");
const searchInput = document.getElementById("searchInput");


if(searchInput && typeof suchIndex !== "undefined"){


    searchInput.addEventListener("keyup",function(){


        let suche=this.value.toLowerCase();


        let alteBox=document.getElementById("suchErgebnisse");


        if(alteBox){

            alteBox.remove();

        }


        if(suche.length < 2){

            return;

        }



        let treffer=suchIndex.filter(eintrag=>


            eintrag.titel.toLowerCase().includes(suche)

            ||

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




        if(treffer.length===0){

            box.innerHTML="<p>Keine Treffer gefunden</p>";

        }



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




console.log("VermKompass geladen.");
