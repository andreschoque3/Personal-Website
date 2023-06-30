//idk remember 

var tablinks = document.getElementsByClassName("tab-links");
var tabconts = document.getElementsByClassName("tab-conts");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("act-link");
    }

    for(tabcont of tabconts) {
        tabcont.classList.remove("act-tab");
    }

    event.currentTarget.classList.add("act-link");

    document.getElementById(tabname).classList.add("act-tab");
}