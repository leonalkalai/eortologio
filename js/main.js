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



// $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.giortes.gr/rss/si_el.xml'), function (data) {
//   	//$('#info').html(data.contents);
//    // console.log(data)
//     var xml = data.contents,
//     xmlDoc = $.parseXML( xml ),
//     $xml = $( xmlDoc ),
//     $author = $xml.find( "author" ),  
//     $description = $xml.find( "description" ),
//     $guid = $xml.find( "guid" );
//     $('#info').append(`
//       ${$author.text()} <br>
//       ${$guid.text()} <br>
//       ${$description.text()}
//     `
//     );

// });

fetch('https://tiny-grass-88fc.leonalkalai.workers.dev').then(function (response) {
	if (response.ok) {
		return response.json();
	};
	return Promise.reject(response);
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn(error);
});



