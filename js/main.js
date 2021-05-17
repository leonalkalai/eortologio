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


jQuery.ajax({
  url: "http://www.eortologio.gr/rss/si_el.xml",
  method: "GET",
  headers: {

  }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})
