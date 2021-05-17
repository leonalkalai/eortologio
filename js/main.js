"use strict";

document.querySelector('body').style.backgroundColor = "orange";

// let info = document.querySelector('#info');
// let name = "Λέων";
// function giortes(){
//     setTimeout(() => {
//         let giorti = `το όνομα που γιορτάζει σήμερα είναι: ${name}`;
//         return giorti;
//     }, 1000);   
// }
// info.innerHTML = giortes()


// jQuery.ajax({
//   url: "http://www.eortologio.gr/rss/si_el.xml",
//   method: "GET",
//   headers: {

//   }
// }).then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })

// Array to store the list of urls to fetch, max 50 urls at one time
//   var arr = ["https://developer.mozilla.org/en-US/docs/Web/API/Request","https://leonalkalai.github.io/Javascript_Quiz/js/questions.json"]
//   // Paste the url which you got in step 4
//  fetch('https://tiny-grass-88fc.leonalkalai.workers.dev',{
//   method: 'POST',
//   body: JSON.stringify(arr)
// })
// .then(response => response.text())
// .then(data => console.log(data))


$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.giortes.gr/rss/si_el.xml'), function (data) {
  	$('#info').html(data.contents);
    console.log(data)
});

// const RSS_URL = `'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.giortes.gr/rss/si_el.xml'`;

// $.ajax(RSS_URL, {
//   accepts: {
//     xml: "application/rss+xml"
//   },

//   dataType: "xml",

//   success: function(data) {
//       console.log(data)
//   }
// });


