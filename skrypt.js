let baza = document.getElementById("baza");
let opisy = document.getElementById("opisy");
let galeria = document.getElementById("galeria");

let s1 = document.getElementById("sekcja1");
let s2 = document.getElementById("sekcja2");
let s3 = document.getElementById("sekcja3");

function pokaz(blok){
    s1.style.display = "none";
    s2.style.display = "none";
    s3.style.display = "none";

    baza.style.backgroundColor = "#FFAEA5";
    opisy.style.backgroundColor = "#FFAEA5";
    galeria.style.backgroundColor = "#FFAEA5";

    document.getElementById(blok).style.display = "block";
    
    if(blok == "sekcja1") baza.style.backgroundColor = "mistyrose";
    if(blok == "sekcja2") opisy.style.backgroundColor = "mistyrose";
    if(blok == "sekcja3") galeria.style.backgroundColor = "mistyrose";
}