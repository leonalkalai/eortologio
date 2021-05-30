let myarray= [];
let newarray= [];
let myjson;

// AIzaSyDuRCBSOs5TUx1Dyl1KqbSKOaplno7i_Hw
const APIkey = "AIzaSyD9p83WiLbI9A0M4BYgpseCK2gSrSchuQY";

getSaint = () => {
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.giortes.gr/rss/si_el.xml'), function (data) {
    let xml = data.contents,
    xmlDoc = $.parseXML( xml ),
    $xml = $( xmlDoc ),
    $author = $xml.find( "author" ),  
    $description = $xml.find( "description" ),
    $guid = $xml.find( "guid" );
    let saintname = $guid.text().split(":").pop().slice(1);
    $('#info').append(`
      <p>${$author.text()}</p>
      <p>${saintname}</p>
      <p>${$description.text()}</p>
    `
    );
    


});

}

//getSaint()


$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.saint.gr'), function (data) {
    // $(document).ready(function(){
    //     var images = new Array();
    //     $("img").each(function(i){
    //       images[i] =  this.src;
    //        this.src='blank.gif';
    //     });
    // });
var htmla = $(data.contents).find('.w3-quarter > a');    
var html = $(data.contents).find('.w3-left').next("div");
var imghtml = $(data.contents).find('.w3-left > img');

html.each(function () {
let saintname = $(this).html().replace(/\s*$/,"");
//console.log(saintimg)
// $('#content ul').append(`
//     <li>
//     <p>${saintname}</p>
//     </li>
// `)
myarray.push(saintname)
//myarray.push(saintname)
// // // const matches = href.match(/(?<=\/).+?(?=\/)/g);
// // // let id = matches[0];
// // // myarray.push({name: saintname, id: id})
// // // myjson = Object.assign({}, myarray);
});

htmla.each(function (i) {
var href = $(this).attr('href');
//let saintname = $(this).find("div > div:nth-child(2)").html().replace(/\s*$/,"");
const matches = href.match(/(?<=\/).+?(?=\/)/g);
let id = matches[0];
newarray.push({name :myarray[i],id: id})
myjson = Object.assign({}, newarray);

});

console.log(newarray)


imghtml.each(function (i) {
    let saintsrc = $(this).attr('src');
    
    //$(`<a href="${saintsrc}" target="_blank">${saintimg}</a>`).insertAfter("#content ul li p");
    // $('#content ul').append(`
    //     <a href="${saintsrc}" target="_blank">${saintimg}</a>
    // `)

        // let saintsrc = imghtml.attr('src');
        // let saintimg = `<img src="${saintsrc}" />`;
        $('#content ul').append(`
            <li class="saintimage">
            <p>${myarray[i]}</p>
                <a href="${(saintsrc.charAt( 0 ) == '/' )?saintsrc.slice(1):saintsrc}" target="_blank"><img src="${(saintsrc.charAt( 0 ) == '/' )?saintsrc.slice(1):saintsrc}" /></a>
            </li>
       `)

}); 

 



// $.each(myjson, function(i, category) {
//     console.log('name: ' + category.name);
//     console.log(
//         `https://www.saint.gr/${category.id}/saint.aspx?BioID=${category.id}`
//         );

// $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent(`https://www.saint.gr/${category.id}/saint.aspx?BioID=${category.id}`), function (data) {
 
//    let apolytikia = data.status.url;
//     //console.log(apolytikia.toString().split('?')[0]+"#LiturgicalTexts");
//     let apolytikiaurl = apolytikia.toString().split('?')[0]+"#LiturgicalTexts";
//     let apolytikiahtml = `
//     <li>${category.name}<a href=${apolytikiaurl} target="_blank">${apolytikiaurl}</a></li>
//     `;
//     $('#content > ul').append(apolytikiahtml);

// });


    
// });


});




