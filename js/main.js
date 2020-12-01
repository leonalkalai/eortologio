"use strict";

document.querySelector('body').style.backgroundColor = "orange";

let info = document.querySelector('#info');
let name = "Λέων";
function giortes(){
    setTimeout(() => {
        let giorti = `το όνομα που γιορτάζει σήμερα είναι: ${name}`;
        return giorti;
    }, 1000);   
}
info.innerHTML = giortes()