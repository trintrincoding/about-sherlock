//this is comment in JS and takes only a single line

/*PROPERTY OF TWB
    ALL RIGHTS RESERVED
    this is MY start on JavaScript
*/

alert("Welcome to Sherlock's JavaScript page. Why don't you go interact.");

function makeImageBig(x){
    x.style.height = "400px"
    x.style.width = "700px"
}

function makeImageOriginalSize(x){
    x.style.height = "200px"
    x.style.width = "300px"
    

}

function showHideSection(section){
    var showHideSection = document.getElementById(section);
    if (showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("quotes").innerHTML = "hide quotes";


    } else {
        showHideSection.style.display = "none";
        document.getElementById("quotes").innerHTML = "show quotes";

    }
}