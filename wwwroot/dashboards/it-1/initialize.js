/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);

    datatile_largesnmp_init("large_snmp_tile_container", "CORE 1", 1);
    datatile_largesnmp_init("large_snmp_tile_container", "CORE 2", 2);
    datatile_large_website_init("large_snmp_tile_container", "INTERNET", 1);
   
    // Initialize school tiles 
    datatile_init("school_info_box_container", "DIV. OFFICE",1570,455, 5, [6,7], [6],[
        {"name":"AD", "id": 6},
        {"name": "DEPLOY-DO", "id": 155}, 
        {"name": "Mac Mini", "id": 92}, 
        {"name": "SCCM", "id": 156}, 
        {"name": "PiEnvMon01", "id": 310}
        {"name": "PiEnvMon02", "id": 311}
    ]);

    datatile_init("school_info_box_container", "BCS", 1350, 700, 9,[1], [8],[
        {"name":"AD", "id": 8},
        {"name": "Alarm", "id": 37},
        {"name": "Mac Mini", "id": 94},
        {"name": "IDRAC", "id": 139},
        {"name": "SCCM", "id": 141},
        {"name": "ESXI", "id": 140},
        {"name": "PiEnvMon01", "id": 303}
    ]);
    datatile_init("school_info_box_container", "Bready",1140,145, 10,  [2], [9],[
        {"name":"AD", "id": 9},
        {"name": "Alarm", "id": 48},
        {"name": "Mac Mini", "id": 96},
        {"name": "IDRAC", "id": 143},
        {"name": "SCCM", "id": 144},
        {"name": "ESXI", "id": 142},
        {"name": "PiEnvMon01", "id": 304}
    ]);
    datatile_init("school_info_box_container", "Cando",585,648, 11,  [33,34], [10],[
        {"name":"AD", "id": 10},
        {"name": "Alarm", "id": 42},
        {"name": "Mac Mini", "id": 100},
        {"name": "IDRAC", "id": 152},
        {"name": "SCCM", "id": 154},
        {"name": "ESXI", "id": 153},
        {"name":"ROVER","id":62},
        {"name": "PiEnvMon01", "id": 305},
        {"name": "PiEnvMon02", "id": 306}
    ]);
    datatile_init("school_info_box_container", "CKCS",222,330, 13,  [4,5], [12],[
        {"name":"AD", "id": 12},
        {"name": "Alarm", "id": 41},
        {"name": "Mac Mini", "id": 99},
        {"name": "IDRAC", "id": 149},
        {"name": "SCCM", "id": 151},
        {"name": "ESXI", "id": 150},
        {"name": "PiEnvMon01", "id":308},
        {"name": "PiEnvMon02", "id": 309}
    ]);
    datatile_init("school_info_box_container", "Connaught",1370,410, 14,  [3], [13],[
        {"name":"AD", "id": 13},
        {"name": "Alarm", "id": 44},
        {"name": "Mac Mini", "id": 101},
        {"name": "IDRAC", "id": 157},
        {"name": "SCCM", "id": 159},
        {"name": "ESXI", "id": 158},
        {"name": "PiEnvMon01", "id": 307}
    ]);
    datatile_init("school_info_box_container", "Hafford",801,423, 15,  [35], [14],[
        {"name":"AD", "id": 14},
        {"name": "Alarm", "id": 45},
        {"name": "Mac Mini", "id": 103},
        {"name": "IDRAC", "id": 160},
        {"name": "SCCM", "id": 162},
        {"name": "ESXI", "id": 161},
        {"name": "PiEnvMon01", "id": 312}
    ]);
    datatile_init("school_info_box_container", "HCES",890,197, 16,  [8], [15],[
        {"name":"AD", "id": 15},
        {"name": "Alarm", "id": 56},
        {"name": "Mac Mini", "id": 104},
        {"name": "IDRAC", "id": 163},
        {"name": "SCCM", "id": 165},
        {"name": "ESXI", "id": 164},
        {"name":"ROVER","id":65},
        {"name": "PiEnvMon01", "id": 313}
    ]);
    datatile_init("school_info_box_container", "Heritage", 1558, 700, 17,  [9], [16],[
        {"name":"AD", "id": 16},
        {"name": "Mac Mini", "id": 105},
        {"name": "IDRAC", "id": 166},
        {"name": "SCCM", "id": 168},
        {"name": "ESXI", "id": 167},
        {"name":"ROVER","id":66},
        {"name": "PiEnvMon01", "id": 314}
    ]);
    datatile_init("school_info_box_container", "Kerrobert",348,788, 18,  [10], [17],[
        {"name":"AD", "id": 17},
        {"name": "Alarm", "id": 38},
        {"name": "Mac Mini", "id": 106},
        {"name": "IDRAC", "id": 169},
        {"name": "SCCM", "id": 171},
        {"name": "ESXI", "id": 170},
        {"name": "PiEnvMon01", "id": 315}
    ]);
    datatile_init("school_info_box_container", "Lawrence",1330,80, 3, [11], [3],[
        {"name":"AD", "id": 3},
        {"name": "Alarm", "id": 34},
        {"name": "Mac Mini", "id": 107},
        {"name": "IDRAC", "id": 172},
        {"name": "SCCM", "id": 174},
        {"name": "ESXI", "id": 173},
        {"name": "PiEnvMon01", "id": 316}
    ]);
    datatile_init("school_info_box_container", "Leoville",630,30, 19, [12], [18],[
        {"name":"AD", "id": 18},
        {"name": "Alarm", "id": 49},
        {"name": "Mac Mini", "id": 108},
        {"name": "IDRAC", "id": 175},
        {"name": "SCCM", "id": 177},
        {"name": "ESXI", "id": 176},
        {"name":"ROVER","id": 79},
        {"name": "PiEnvMon01", "id": 317}
    ]);
    datatile_init("school_info_box_container", "Luseland",50,690, 20,  [13], [19],[
        {"name":"AD", "id": 19},
        {"name": "Alarm", "id": 35},
        {"name": "Mac Mini", "id": 109},
        {"name": "IDRAC", "id": 178},
        {"name": "SCCM", "id": 180},
        {"name": "ESXI", "id": 179},
        {"name": "PiEnvMon01", "id": 318}
    ]);
    datatile_init("school_info_box_container", "Macklin",16,512, 21,  [14,15], [20],[
        {"name":"AD", "id": 20},
        {"name": "Alarm", "id": 36},
        {"name": "Mac Mini", "id": 110},
        {"name": "IDRAC", "id": 181},
        {"name": "SCCM", "id": 183},
        {"name": "ESXI", "id": 182},
        {"name": "PiEnvMon01", "id": 319},
        {"name": "PiEnvMon02", "id": 320}
    ]);
    datatile_init("school_info_box_container", "Maymont",715,530, 23,  [32], [21],[
        {"name":"AD", "id": 21},
        {"name": "Alarm", "id": 46},
        {"name": "Mac Mini", "id": 111},
        {"name": "IDRAC", "id": 184},
        {"name": "SCCM", "id": 186},
        {"name": "ESXI", "id": 185},
        {"name": "PiEnvMon01", "id": 321}
    ]);
    datatile_init("school_info_box_container", "McKitrick",1330,235, 24,  [16], [22],[
        {"name":"AD", "id": 22},
        {"name": "Alarm", "id": 47},
        {"name": "Mac Mini", "id": 112},
        {"name": "IDRAC", "id": 187},
        {"name": "SCCM", "id": 189},
        {"name": "ESXI", "id": 188},
        {"name": "PiEnvMon01", "id": 322}
    ]);
    datatile_init("school_info_box_container", "McLurg",478,345, 25,  [17,18], [23],[
        {"name":"AD", "id": 23},
        {"name": "Alarm", "id": 50},
        {"name": "Mac Mini", "id": 114},
        {"name": "IDRAC", "id": 190},
        {"name": "SCCM", "id": 192},
        {"name": "ESXI", "id": 191},
        {"name": "PiEnvMon01", "id": 323},
        {"name": "PiEnvMon02", "id": 324}
    ]);
    datatile_init("school_info_box_container", "Medstead",500,188, 26, [19], [24],[
        {"name":"AD", "id": 24},
        {"name": "Alarm", "id": 51},
        {"name": "Mac Mini", "id": 115},
        {"name": "IDRAC", "id": 193},
        {"name": "SCCM", "id": 195},
        {"name": "ESXI", "id": 194},
        {"name": "PiEnvMon01", "id": 325}
    ]);

    datatile_init("school_info_box_container", "NBCHS",1540,25, 35, [21,22,23,24], [25],[
        {"name":"AD", "id": 25},
        {"name": "Alarm", "id": 53},
        {"name": "Mac Mini", "id": 116},
        {"name": "IDRAC", "id": 196},
        {"name": "SCCM", "id": 198},
        {"name": "ESXI", "id": 197},
        {"name":"ROVER","id":60}, 
        {"name": "PiEnvMon01", "id": 327},
        {"name": "PiEnvMon02", "id": 328},
        {"name": "PiEnvMon03", "id": 329},
        {"name": "PiEnvMon04", "id": 330}
    ]);

    datatile_init("school_info_box_container", "NCES",478,502, 28,  [20], [26],[
        {"name":"AD", "id": 26},
        {"name": "Alarm", "id": 52},
        {"name": "Mac Mini", "id": 124},
        {"name": "IDRAC", "id": 199},
        {"name": "SCCM", "id": 201},
        {"name": "ESXI", "id": 200},
        {"name":"ROVER","id":76},
        {"name": "PiEnvMon01", "id": 326}
    ]);
    datatile_init("school_info_box_container", "SHS",700,197, 30,  [25,26], [28],[
        {"name":"AD", "id": 28},
        {"name": "Alarm", "id": 54},
        {"name": "Mac Mini", "id": 117},
        {"name": "IDRAC", "id": 202},
        {"name": "SCCM", "id": 204},
        {"name": "ESXI", "id": 203},
        {"name": "PiEnvMon01", "id": 331},
        {"name": "PiEnvMon02", "id": 332}
    ]);
    datatile_init("school_info_box_container", "St. Vital",1150,700, 33,  [27,28], [31],[
        {"name":"AD", "id": 31},
        {"name": "Alarm", "id": 43},
        {"name": "Mac Mini", "id": 118},
        {"name": "IDRAC", "id": 205},
        {"name": "SCCM", "id": 207},
        {"name": "ESXI", "id": 206},
        {"name": "PiEnvMon01", "id": 333},
        {"name": "PiEnvMon02", "id": 334}
    ]);
    datatile_init("school_info_box_container", "UCHS",265,508, 31,  [29,30], [29],[
        {"name":"AD", "id": 29},
        {"name": "Alarm", "id": 39},
        {"name": "Mac Mini", "id": 119},
        {"name": "IDRAC", "id": 208},
        {"name": "SCCM", "id": 210},
        {"name": "ESXI", "id": 209},
        {"name": "PiEnvMon01", "id": 335},
        {"name": "PiEnvMon02", "id": 336}
    ]);
    datatile_init("school_info_box_container", "UPS", 265, 663, 32,  [31], [30],[
        {"name":"AD", "id": 30},
        {"name": "Alarm", "id": 55},
        {"name": "Mac Mini", "id": 121},
        {"name": "IDRAC", "id": 211},
        {"name": "SCCM", "id": 213},
        {"name": "ESXI", "id": 212},
        {"name": "PiEnvMon01", "id": 337}
    ]);
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

// Every 1 minutes
setInterval(function() {
    datatile_update();
}, 60000);

// Every 30 minutes
setInterval(function() {
    time_refresh_offsets(DATE_AND_TIME_URL);
    weather_update(WEATHER_UPDATE_URL);
}, 1800000);


// Refresh the page periodically
setInterval(function() {
    window.location.replace(window.location.href);
}, 2700000);