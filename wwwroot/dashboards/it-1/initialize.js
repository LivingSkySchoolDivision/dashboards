/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);
    
    itwatchdog_init("itwatchdog-DO-SWITCHES","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.54.129/9F0004A3F25158C3", true);
    itwatchdog_init("itwatchdog-DO-VMS","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.54.129/CC0000056A877228", false);
    itwatchdog_init("itwatchdog-NBCHS-SWITCHES","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.200.129/ED0004A3F25F36C3", true);
    itwatchdog_init("itwatchdog-NBCHS-VMS","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.200.129/350000043FA0EC28", false);
    itwatchdog_update(); // Call this after all are initialized
    guests_init('guests-active-count', 'https://guests.lskysd.ca/json/');
    inout_group_init('inout-container', 'https://inoutapi.lskysd.ca/GroupMembers/5');

    // Initialize school tiles (mostly testing right now)
    initializeSchoolTile("school_info_box_container", "OFFICE",1570,475, 3);
    initializeSchoolTile("school_info_box_container", "NBCHS",1500,0, 4);   
    initializeSchoolTile("school_info_box_container", "BCS",1325,700, 1); 
    initializeSchoolTile("school_info_box_container", "Bready",1170,145, 1);
    initializeSchoolTile("school_info_box_container", "CKCS",200,365, 2);
    initializeSchoolTile("school_info_box_container", "Connaught",1370,410, 1);
    initializeSchoolTile("school_info_box_container", "Hafford",675,415, 1);
    initializeSchoolTile("school_info_box_container", "HCES",803,180, 1);
    initializeSchoolTile("school_info_box_container", "Heritage",1370,805, 1);
    initializeSchoolTile("school_info_box_container", "Kerrobert",228,780, 1);
    initializeSchoolTile("school_info_box_container", "Lawrence",1330,100, 1);
    initializeSchoolTile("school_info_box_container", "Leoville",500,115, 1);
    initializeSchoolTile("school_info_box_container", "Luseland",67,625, 1);
    initializeSchoolTile("school_info_box_container", "Macklin",0,495, 2);
    initializeSchoolTile("school_info_box_container", "Maymont",600,565, 1);
    initializeSchoolTile("school_info_box_container", "McKitrick",1330,205, 1);
    initializeSchoolTile("school_info_box_container", "McLurg",380,605, 2);
    initializeSchoolTile("school_info_box_container", "Medstead",385,325, 1); 
    initializeSchoolTile("school_info_box_container", "NCES",380,730, 1);
    initializeSchoolTile("school_info_box_container", "SHS",650,180, 2);
    initializeSchoolTile("school_info_box_container", "St Vital",1170,700, 2);
    initializeSchoolTile("school_info_box_container", "UCHS",220,605, 2);
    initializeSchoolTile("school_info_box_container", "UPS",220,508, 1);
    initializeSchoolTile("school_info_box_container", "Cando",430,480, 2);

});

function initializeSchoolTile(containerid, schoolname, xpos, ypos, numtempsensors) {
    var html = "";
    html += "<div class=\"school_info_box\" style=\"top: " + ypos + "px; left: " + xpos + "px;\">";
    html += "  <div class=\"school_name\">" + schoolname + "</div>";
    html += "  <div class=\"school_info_box_data_container\">";
    html += "  <div class=\"data_box\">";
    html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
    html += "    <div class=\"data_box_data\">999</div>";
    html += "  </div>";
    html += "  <div class=\"data_box\">";
    html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
    html += "    <div class=\"data_box_data\">999</div>";
    html += "  </div>";
    html += "  </div>";
    for(var x=0; x<numtempsensors; x++) 
    {
        html += "  <div class=\"school_info_box_data_container\">";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/thermometer-half.svg\"></div>";
        html += "    <div class=\"data_box_data\">999</div>";
        html += "  </div>";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/humidity.svg\"></div>";
        html += "    <div class=\"data_box_data\">999</div>";
        html += "  </div>";
        html += "  </div>";
    }

    html += "</div>";

    console.log("Initializing school tile for " + schoolname);
    $('#' + containerid).append(html);


}


/* ******************************************** */
/* * Interval stuff                           * */
/* ******************************************** */

/*
 1000     1 second
 10000     10 seconds
 60000     1 minute
 300000     5 minutes
 600000     10 minutes
 1800000     30 mins
 3600000     1 hour
 */

// Every half-second
setInterval(function() {
    time_update();
}, 500);

// Every 1 minutes
setInterval(function() {
    inout_group_update();
}, 60000);

// Every 5 minutes
setInterval(function() {    
    itwatchdog_update();
}, 300000);

// Every 30 minutes
setInterval(function() {
    time_refresh_offsets(DATE_AND_TIME_URL);
    weather_update(WEATHER_UPDATE_URL);
    guests_update();
}, 1800000);

// Refresh the page periodically
setInterval(function() {
    location.reload();
}, 3400000);