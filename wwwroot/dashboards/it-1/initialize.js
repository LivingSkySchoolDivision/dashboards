/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);
       
    // Core switch SNMP IDs 1,2

    datatile_largesnmp_init("large_snmp_tile_container", "CORE 1", 1);
    datatile_largesnmp_init("large_snmp_tile_container", "CORE 2", 2);

    // Initialize school tiles (mostly testing right now)
    datatile_init("school_info_box_container", "OFFICE",1570,475, [5], 6, [6,7]);    
    datatile_init("school_info_box_container", "NBCHS",1540,25, [27], 25, [21,22,23,24]);   
    datatile_init("school_info_box_container", "BCS",1350,700, [9], 8, [1]); 
    datatile_init("school_info_box_container", "Bready",1140,145, [10], 9, [2]);
    datatile_init("school_info_box_container", "Cando",585,648, [11], 10, [33,34]);   
    datatile_init("school_info_box_container", "CKCS",262,370, [13], 12, [4,5]);
    datatile_init("school_info_box_container", "Connaught",1370,410, [14], 13, [3]);
    datatile_init("school_info_box_container", "Hafford",801,423, [15], 14, [35]);
    datatile_init("school_info_box_container", "HCES",775,263, [16], 15, [8]);
    datatile_init("school_info_box_container", "Heritage",1370,805, [17], 16 , [9]);
    datatile_init("school_info_box_container", "Kerrobert",348,818, [18], 17, [10]);
    datatile_init("school_info_box_container", "Lawrence",1330,100, [3], 3, [11]);
    datatile_init("school_info_box_container", "Leoville",630,60, [19], 18, [12]);
    datatile_init("school_info_box_container", "Luseland",50,660, [20], 19, [13]);
    datatile_init("school_info_box_container", "Macklin",16,522, [21], 20, [14,15]);
    datatile_init("school_info_box_container", "Maymont",715,530, [23], 21, [32]);
    datatile_init("school_info_box_container", "McKitrick",1330,205, [24], 22, [16]);
    datatile_init("school_info_box_container", "McLurg",478,385, [25], 23, [17,18]);
    datatile_init("school_info_box_container", "Medstead",500,188, [26], 24, [19]); 
    datatile_init("school_info_box_container", "NCES",478,502, [28], 26, [20]);
    datatile_init("school_info_box_container", "SHS",775,140, [30], 28, [25,26]);
    datatile_init("school_info_box_container", "St. Vital",1150,700, [33], 31, [27,28]);
    datatile_init("school_info_box_container", "UCHS",265,508, [31], 29, [29,30]);
    datatile_init("school_info_box_container", "UPS", 265, 633, [32], 30, [31]);
    datatile_update();

});



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

// Every 5 minutes
setInterval(function() {  
}, 300000);

// Every 30 minutes
setInterval(function() {
    time_refresh_offsets(DATE_AND_TIME_URL);
    weather_update(WEATHER_UPDATE_URL);
}, 1800000);

// Refresh the page periodically
setInterval(function() {
    location.reload();
}, 3400000);