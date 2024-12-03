// Check the date, and if there is a special occasion, apply the stylesheet for it
var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1; // this is zero indexed for some reason? add 1  to it to make it match up with reality.
var currentYear = currentDate.getFullYear();

console.log("Current year is: " + currentYear);
console.log("Current month is: " + currentMonth);
console.log("Current day is: " + currentDay);

// Programmatically loads a CSS file
function LoadCSSFile(filename) {
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}

// Programmatically loads a JS file
function LoadJSFile(filename) {
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", filename)

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}

/* DAYS */

// Halloween
if (currentMonth == 10) {
    if ((currentDay >= 2) && (currentDay <= 31)) {
        
        LoadCSSFile("../../common/css/seasonal/halloween.css");
        LoadJSFile("../../common/js/seasonal/halloween.js");
    }
}

// Day of the dead
if (currentMonth == 11) {
    if (currentDay == 1) {
        LoadCSSFile("../../common/css/seasonal/dayofthedead.css");
        LoadJSFile("../../common/js/seasonal/dayofthedead.js");
    }
}

// Remembrance Day
if (currentMonth == 11) {
    if ((currentDay >= 7) && (currentDay <= 11)) {
        LoadCSSFile("../../common/css/seasonal/remembranceday.css");
        LoadJSFile("../../common/js/seasonal/remembranceday.js");
    }
}

// xmas
if ((currentMonth == 12)) { 
    if ((currentDay >= 3) && (currentDay <= 26)) {
        
        LoadCSSFile("../../common/css/seasonal/xmas.css");
        LoadJSFile("../../common/js/seasonal/xmas.js");
    }
}
