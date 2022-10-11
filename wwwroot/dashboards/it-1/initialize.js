/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);

    datatile_largesnmp_init("large_snmp_tile_container", "CORE 1", 22, true);
    datatile_largesnmp_init("large_snmp_tile_container", "CORE 2", 23, true);
    datatile_large_website_init("large_snmp_tile_container", "INTERNET", 1);
   
    // Initialize school tiles 
    datatile_init("school_info_box_container", "DIV. OFFICE",1570,455, 87, [6,36,7], [1],[
        {"name":"AD", "id": 3},
        {"name": "DEPLOY-DO", "id": 32}, 
        {"name": "Mac Mini", "id": 31}, 
        {"name": "SCCM", "id": 33}, 
        {"name": "Pi-BusGarage", "id": 44},
        {"name": "Pi-ServerRoom", "id": 34},
        {"name": "Pi-LearningServ", "id": 45},
        {"name": "DOOR Site Controller", "id": 46},
        {"name": "DASH-IT-1", "id": 35},
        {"name": "DASH-IT-2", "id": 47},
        {"name": "DASH-SS", "id": 37},
        {"name": "DASH-WILMA", "id": 36},
        {"name": "DASH-BUSG", "id": 38},
        {"name": "HALL-TV-1", "id": 39},
        {"name": "HALL-TV-2", "id": 40},
        {"name": "HALL-TV-3", "id": 41},
        {"name": "HALL-TV-4", "id": 42},
        {"name": "do3dprinter", "id": 43},
        {"name": "Informacast", "id": 340}

    ]);

    datatile_init("school_info_box_container", "BCS", 1350, 700, 9999,[1], [5],[
        {"name":"AD", "id": 276},
        {"name": "Alarm", "id": 116},
        {"name": "Mac Mini", "id": 121},
        {"name": "IDRAC", "id": 118},
        {"name": "SCCM", "id": 119},
        {"name": "ESXI", "id": 117},
        {"name": "PiEnvMon01", "id": 218},
        {"name": "DOOR Site Controller", "id": 120},
        {"name": "Informacast", "id": 338}
    ]);

    datatile_init("school_info_box_container", "Bready",1140,145, 9999,  [2], [6],[
        {"name":"AD", "id": 277},
        {"name": "Alarm", "id": 122},
        {"name": "Mac Mini", "id": 127},
        {"name": "IDRAC", "id": 124},
        {"name": "SCCM", "id": 125},
        {"name": "ESXI", "id": 123},
        {"name": "PiEnvMon01", "id": 219},
        {"name": "DOOR Site Controller", "id": 126},
        {"name": "Informacast", "id": 337}
    ]);

    datatile_init("school_info_box_container", "Cando",585,675, 9999,  [33,34], [7],[
        {"name":"AD", "id": 278},
        {"name": "Alarm", "id": 128},
        {"name": "Mac Mini", "id": 132},
        {"name": "IDRAC", "id": 130},
        {"name": "SCCM", "id": 131},
        {"name": "ESXI", "id": 129},
        {"name": "Pi-MainRack", "id": 220},
        {"name": "Pi-ElementaryRack", "id": 221},
        {"name": "Informacast", "id": 339},
    ]);

    datatile_init("school_info_box_container", "CKCS",222,330, 9999,  [4,5], [8],[
        {"name":"AD", "id": 279},
        {"name": "Alarm", "id": 134},
        {"name": "Mac Mini", "id": 137},
        {"name": "IDRAC", "id": 135},
        {"name": "SCCM", "id": 136},
        {"name": "ESXI", "id": 133},
        {"name": "Pi-MainRack", "id":222},
        {"name": "Pi-AcrossFromOffice", "id": 223},
        {"name": "Informacast", "id": 342}
    ]);

    datatile_init("school_info_box_container", "Connaught",1370,410, 9999,  [3], [9],[
        {"name":"AD", "id": 280},
        {"name": "Alarm", "id": 138},
        {"name": "Mac Mini", "id": 144},
        {"name": "IDRAC", "id": 140},
        {"name": "SCCM", "id": 141},
        {"name": "ESXI", "id": 139},
        {"name": "PiEnvMon01", "id": 224},
        {"name": "DOOR Site Controller", "id": 142},
        {"name": "Informacast", "id": 341}
    ]);

    datatile_init("school_info_box_container", "Hafford",801,403, 9999,  [35], [10],[
        {"name":"AD", "id": 281},
        {"name": "Alarm", "id": 146},
        {"name": "Mac Mini", "id": 149},
        {"name": "IDRAC", "id": 147},
        {"name": "SCCM", "id": 148},
        {"name": "ESXI", "id": 145},
        {"name": "PiEnvMon01", "id": 225},
        {"name": "Informacast", "id": 343}
    ]);

    datatile_init("school_info_box_container", "HCES",898,197, 9999,  [8], [11],[
        {"name":"AD", "id": 282},
        {"name": "Alarm", "id": 150},
        {"name": "Mac Mini", "id": 151},
        {"name": "IDRAC", "id": 153},
        {"name": "SCCM", "id": 154},
        {"name": "ESXI", "id": 152},
        {"name": "PiEnvMon01", "id": 226},
        {"name": "Informacast", "id": 344}
    ]);

    datatile_init("school_info_box_container", "Heritage", 1558, 700, 9999,  [9], [12],[
        {"name":"AD", "id": 159},
        {"name": "Mac Mini", "id": 158},
        {"name": "IDRAC", "id": 156},
        {"name": "SCCM", "id": 157},
        {"name": "ESXI", "id": 155},
        {"name": "PiEnvMon01", "id": 227},
        {"name": "Informacast", "id": 345}
    ]);

    datatile_init("school_info_box_container", "Kerrobert",348,788, 9999,  [10], [13],[
        {"name":"AD", "id": 283},
        {"name": "Alarm", "id": 160},
        {"name": "Mac Mini", "id": 164},
        {"name": "IDRAC", "id": 162},
        {"name": "SCCM", "id": 163},
        {"name": "ESXI", "id": 161},
        {"name": "PiEnvMon01", "id": 228},
        {"name": "Informacast", "id": 346}
    ]);

    datatile_init("school_info_box_container", "Lawrence",1330,80, 9999, [11], [4],[
        {"name":"AD", "id": 284},
        {"name": "Alarm", "id": 165},
        {"name": "Mac Mini", "id": 170},
        {"name": "IDRAC", "id": 167},
        {"name": "SCCM", "id": 168},
        {"name": "ESXI", "id": 166},
        {"name": "PiEnvMon01", "id": 229},
        {"name": "DOOR Site Controller", "id": 169},
        {"name": "Informacast", "id": 347}
    ]);

    datatile_init("school_info_box_container", "Leoville",630,30, 9999, [12], [15],[
        {"name":"AD", "id": 285},
        {"name": "Alarm", "id": 171},
        {"name": "Mac Mini", "id": 175},
        {"name": "IDRAC", "id": 173},
        {"name": "SCCM", "id": 174},
        {"name": "ESXI", "id": 172},
        {"name": "PiEnvMon01", "id": 230},
        {"name": "Informacast", "id": 348}
    ]);

    datatile_init("school_info_box_container", "Luseland",50,690, 9999, [13], [14],[
        {"name":"AD", "id": 286},
        {"name": "Alarm", "id": 176},
        {"name": "Mac Mini", "id": 180},
        {"name": "IDRAC", "id": 178},
        {"name": "SCCM", "id": 179},
        {"name": "ESXI", "id": 177},
        {"name": "PiEnvMon01", "id": 231},
        {"name": "Informacast", "id": 349}
    ]);

    datatile_init("school_info_box_container", "Macklin",16,512, 9999, [14,15], [16],[
        {"name":"AD", "id": 287},
        {"name": "Alarm", "id": 181},
        {"name": "Mac Mini", "id": 185},
        {"name": "IDRAC", "id": 183},
        {"name": "SCCM", "id": 184},
        {"name": "ESXI", "id": 182},
        {"name": "Pi-ServerRack", "id": 233},
        {"name": "Pi-HighSchoolLab", "id": 232},
        {"name": "Informacast", "id": 336}
    ]);

    datatile_init("school_info_box_container", "Maymont",715,530, 9999, [32], [19],[
        {"name":"AD", "id": 288},
        {"name": "Alarm", "id": 186},
        {"name": "Mac Mini", "id": 190},
        {"name": "IDRAC", "id": 188},
        {"name": "SCCM", "id": 189},
        {"name": "ESXI", "id": 187},
        {"name": "PiEnvMon01", "id": 234},
        {"name": "Informacast", "id": 350}
    ]);

    datatile_init("school_info_box_container", "McKitrick",1330,235, 9999, [16], [],[
        {"name":"AD", "id": 289},
        {"name": "Alarm", "id": 191},
        {"name": "Mac Mini", "id": 196},
        {"name": "IDRAC", "id": 193},
        {"name": "SCCM", "id": 194},
        {"name": "ESXI", "id": 192},
        {"name": "PiEnvMon01", "id": 235},
        {"name": "DOOR Site Controller", "id": 195},
        {"name": "Informacast", "id": 351}
    ]);

    datatile_init("school_info_box_container", "McLurg",478,345, 9999, [17,18], [20],[
        {"name":"AD", "id": 290},
        {"name": "Alarm", "id": 197},
        {"name": "Mac Mini", "id": 201},
        {"name": "IDRAC", "id": 199},
        {"name": "SCCM", "id": 200},
        {"name": "ESXI", "id": 198},
        {"name": "Pi-Electrical", "id": 236},
        {"name": "Pi-CompLab", "id": 237},
        {"name": "Informacast", "id": 352}
    ]);

    datatile_init("school_info_box_container", "Medstead",500,188, 9999, [19], [21],[
        {"name":"AD", "id": 291},
        {"name": "Alarm", "id": 202},
        {"name": "Mac Mini", "id": 206},
        {"name": "IDRAC", "id": 204},
        {"name": "SCCM", "id": 205},
        {"name": "ESXI", "id": 203},
        {"name": "PiEnvMon01", "id": 238},
        {"name": "Informacast", "id": 353}
    ]);

    datatile_init("school_info_box_container", "NBCHS",1540,25, 9999, [37,21,22,23,24], [17],[
        {"name":"AD", "id": 292},
        {"name": "Alarm", "id": 207},
        {"name": "Mac Mini", "id": 212},
        {"name": "IDRAC", "id": 209},
        {"name": "SCCM", "id": 210},
        {"name": "ESXI", "id": 208},
        {"name": "Pi-206", "id": 239},
        {"name": "Pi-201-212", "id": 240},
        {"name": "Pi-TelephonyRm", "id": 241},
        {"name": "Pi-Maintenance", "id": 242},
        {"name": "Pi-ServerRoom", "id": 243},
        {"name": "DOOR Site Controller", "id": 211},
        {"name": "Informacast", "id": 354}
    ]);

    datatile_init("school_info_box_container", "NCES",484,502, 9999, [20], [22],[
        {"name":"AD", "id": 293},
        {"name": "Alarm", "id": 213},
        {"name": "Mac Mini", "id": 217},        
        {"name": "IDRAC", "id": 215},
        {"name": "SCCM", "id": 216},
        {"name": "ESXI", "id": 214},
        {"name": "PiEnvMon01", "id": 244},
        {"name": "Informacast", "id": 355}
    ]);

    datatile_init("school_info_box_container", "SHS",700,197, 9999, [25,26], [23],[
        {"name":"AD", "id": 294},
        {"name": "Alarm", "id": 253},
        {"name": "Mac Mini", "id": 258},
        {"name": "IDRAC", "id": 255},
        {"name": "SCCM", "id": 256},
        {"name": "ESXI", "id": 254},
        {"name": "PiEnvMon01", "id": 245},
        {"name": "PiEnvMon02", "id": 246},
        {"name": "Informacast", "id": 356}
    ]);

    datatile_init("school_info_box_container", "St. Vital",1115,700, 9999, [27,28], [26],[
        {"name":"AD", "id": 295},
        {"name": "Alarm", "id": 259},
        {"name": "Mac Mini", "id": 264},
        {"name": "IDRAC", "id": 261},
        {"name": "SCCM", "id": 262},
        {"name": "ESXI", "id": 260},
        {"name": "Pi-Library", "id": 247},
        {"name": "Pi-Room104", "id": 248},
        {"name": "DOOR Site Controller", "id": 263},
        {"name": "Informacast", "id": 357}
    ]);

    datatile_init("school_info_box_container", "UCHS",265,508, 9999, [29,30], [24],[
        {"name":"AD", "id": 296},
        {"name": "Alarm", "id": 270},
        {"name": "Mac Mini", "id": 269},
        {"name": "IDRAC", "id": 267},
        {"name": "SCCM", "id": 268},
        {"name": "ESXI", "id": 266},
        {"name": "Pi-ServerRack", "id": 249},
        {"name": "Pi-BoilerRoom", "id": 250},
        {"name": "Informacast", "id": 257}
    ]);

    datatile_init("school_info_box_container", "UPS", 265, 663, 9999, [31], [25],[
        {"name":"AD", "id": 297},
        {"name": "Alarm", "id": 271},
        {"name": "Mac Mini", "id": 275},
        {"name": "IDRAC", "id": 273},
        {"name": "SCCM", "id": 274},
        {"name": "ESXI", "id": 272},
        {"name": "PiEnvMon01", "id": 252},
        {"name": "Informacast", "id": 358}
    ]);

    datatile_update();
    librenms_update();

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
    librenms_update();
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