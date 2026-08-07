/* ===========================================
   VermKompass
   script.js
=========================================== */


// ============================
// Dark Mode
// ============================

const darkButton = document.getElementById("darkMode");


if (darkButton) {

    darkButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            darkButton.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            darkButton.innerHTML = "🌙";

        }

    });

}


if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (darkButton) {

        darkButton.innerHTML = "☀️";

    }

}



// ============================
// Suche
// ============================


const searchInput = document.getElementById("searchInput");


if (searchInput) {


    searchInput.addEventListener("keyup", function () {


        let suche = this.value.toLowerCase();


        let alteBox = document.getElementById("suchErgebnisse");


        if (alteBox) {

            alteBox.remove();

        }


        if (suche.length < 2) {

            return;

        }



        if (typeof suchIndex === "undefined") {

            console.log("Suchindex nicht geladen");
            return;

        }



        let treffer = suchIndex.filter(function (eintrag) {


            return (

                eintrag.titel.toLowerCase().includes(suche)

                ||

                eintrag.begriffe.toLowerCase().includes(suche)

            );


        });



        let box = document.createElement("div");


        box.id = "suchErgebnisse";


        let position = searchInput.getBoundingClientRect();


        box.style.position = "absolute";

        box.style.top = 
        (position.bottom + window.scrollY + 5) + "px";

        box.style.left =
        (position.left + window.scrollX) + "px";


        box.style.background = "white";

        box.style.width = position.width + "px";

        box.style.padding = "10px";

        box.style.borderRadius = "10px";

        box.style.boxShadow =
        "0 10px 20px rgba(0,0,0,.15)";

        box.style.zIndex = "9999";




        if (treffer.length === 0) {


            box.innerHTML =
            "<p>Keine Treffer gefunden</p>";


        }



        treffer.forEach(function (eintrag) {


            let p = document.createElement("p");


            let titel = eintrag.titel.replace(

                new RegExp(suche, "gi"),

                "<b>$&</b>"

            );



            p.innerHTML = "🔍 " + titel;


            p.style.padding = "8px";

            p.style.cursor = "pointer";

            p.style.margin = "0";


            p.onclick = function () {

                window.location.href = eintrag.seite;

            };


            box.appendChild(p);


        });



        document.body.appendChild(box);



    });


}
