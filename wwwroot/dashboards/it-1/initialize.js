/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);

    // function datatile_largesnmp_init(containerid, tilename, portid, swap_in_and_out)
    datatile_largesnmp_init("large_snmp_tile_container", "INTERSITE-RURAL", 13475, false);
    datatile_largesnmp_init("large_snmp_tile_container", "INTERSITE-CITY", 12793, true);   
    datatile_largesnmp_init("large_snmp_tile_container", "INTERNET", 13480, false); // Port on outside switch
    datatile_large_website_init("large_snmp_tile_container", "INTERNET", 362);
   
    // Initialize school tiles 
    datatile_init("school_info_box_container", "DIV. OFFICE",1570,455, 87, 1, [{ id: 6, label: "BUSG" },{ id: 36, label: "SRVR"},{ id: 7, label: "LS"}], [1],[
        {"name": "DEPLOY-DO", "id": 32}, 
        {"name": "SCCM", "id": 33}, 
        {"name": "Pi-BusGarage", "id": 44},
        {"name": "Pi-ServerRoom", "id": 34},
        {"name": "Pi-LearningServ", "id": 45},
        {"name": "DOOR Site Controller", "id": 46},
        {"name": "DASH-IT-1", "id": 35},
        {"name": "DASH-IT-2", "id": 47},
        {"name": "DASH-IT-3", "id": 36},
        {"name": "DASH-SS", "id": 37},
        {"name": "DASH-BUSG", "id": 38},
        {"name": "TV-HRIT", "id": 39},
        {"name": "TV-RECEPTION", "id": 40},
        {"name": "TV-LS", "id": 41},
        {"name": "TV-BOOTHS", "id": 42},
        {"name": "TV-STAFFRM", "id": 395},
        {"name": "do3dprinter", "id": 43},
        {"name": "Informacast", "id": 340},
        {"name": "AP:IT", "id": 618},
        {"name": "AP:SS-NE", "id": 619},
        {"name": "AP:SS-SE", "id": 620},
        {"name": "AP:CENT-SE", "id": 621},
        {"name": "AP:CENT-NW", "id": 622},
        {"name": "AP:WORKSHP", "id": 625},
        {"name": "AP:BUSGARAGE", "id": 626},
        {"name": "AP:HR", "id": 628},
        {"name": "AP:CENT-SW", "id": 629},
        {"name": "AP:FAC-SHOP", "id": 630},
        {"name": "AP:SS-NW", "id": 623},
        {"name": "AP:SS-SW", "id": 624},
        {"name": "AP-CENT-NE", "id": 627},
        {"name": "WAD1", "id": 3},
        {"name": "sw247", "id": 377},
        {"name": "sw248", "id": 374},
        {"name": "sw253", "id": 376},
        {"name": "ROUTER", "id": 1}
    ]);

    datatile_init("school_info_box_container", "BCS", 1350, 700, 364, 5, [{ id: 1}], [5],[
        {"name": "Alarm", "id": 116},
        {"name": "IDRAC", "id": 118},
        {"name": "SCCM", "id": 119},
        {"name": "ESXI", "id": 117},
        {"name": "PiEnvMon01", "id": 218},
        {"name": "DOOR Site Controller", "id": 120},
        {"name": "Informacast", "id": 338},
        {"name": "ROUTER", "id": 5},
        {"name": "sw249", "id": 313},
        {"name": "sw250", "id": 312},
        {"name": "sw253", "id": 378},
        {"name": "AP:MultiPurpose", "id": 539},
        {"name": "AP:RM77", "id": 540},
        {"name": "AP:RM66", "id": 541},
        {"name": "AP:RM78", "id": 542},
        {"name": "AP:RM79", "id": 543},
        {"name": "AP:RM62", "id": 544},
        {"name": "AP:RM07", "id": 545},
        {"name": "AP:RM39", "id": 546},
        {"name": "AP:GYMOFF", "id": 547},
        {"name": "AP:RM63", "id": 548},
        {"name": "AP:RM29", "id": 549},
        {"name": "AP:RM9", "id": 550},
        {"name": "AP:RM61", "id": 551},
        {"name": "AP:RM24", "id": 552},
        {"name": "AP:RM08", "id": 553},
        {"name": "AP:RM21", "id": 554},
        {"name": "AP:RM20", "id": 555},
        {"name": "AP:RM28", "id": 556},
        {"name": "AP:LIB", "id": 814},
        {"name": "AP:RM81", "id": 557},
        {"name": "AP:RM75", "id": 558},
        {"name": "AP:RM22", "id": 559},
        {"name": "AP:RM16", "id": 560},
        {"name": "AP:RM76", "id": 561},
        {"name": "AP:RM38", "id": 562}
    ]);

    datatile_init("school_info_box_container", "Bready",1140,145, 328, 6,  [{ id: 2}], [6],[
        {"name": "Alarm", "id": 122},
        {"name": "IDRAC", "id": 124},
        {"name": "SCCM", "id": 125},
        {"name": "ESXI", "id": 123},
        {"name": "PiEnvMon01", "id": 219},
        {"name": "DOOR Site Controller", "id": 126},
        {"name": "Informacast", "id": 337},
        {"name": "ROUTER", "id": 6},
        {"name": "sw253", "id": 379},
        {"name": "AP:RM25", "id": 563},
        {"name": "AP:RM17", "id": 564},
        {"name": "AP:LIB", "id": 565},
        {"name": "AP:RM30", "id": 566},
        {"name": "AP:RM51", "id": 567},
        {"name": "AP:RM29", "id": 568},
        {"name": "AP:OFFICE", "id": 569},
        {"name": "AP:RM47", "id": 570},
        {"name": "AP:RM24", "id": 571},
        {"name": "AP:RM31", "id": 572},
        {"name": "AP:RM46", "id": 573},
        {"name": "AP:RM48", "id": 574},
        {"name": "AP:RM53", "id": 575},
        {"name": "AP:RM52", "id": 576},
        {"name": "AP:RM49", "id": 577},
        {"name": "AP:STUDSRV", "id": 578}
    ]);

    datatile_init("school_info_box_container", "Cando",585,675, 604, 7, [ { id: 33, label: "SRVR"},{ id: 34, label: "ELEM"} ], [7],[
        {"name": "Alarm", "id": 128},
        {"name": "IDRAC", "id": 130},
        {"name": "SCCM", "id": 131},
        {"name": "ESXI", "id": 129},
        {"name": "Pi-MainRack", "id": 220},
        {"name": "Pi-ElementaryRack", "id": 221},
        {"name": "Informacast", "id": 339},
        {"name": "ROUTER", "id": 7},
        {"name": "sw252", "id": 404},
        {"name": "sw253", "id": 403},
        {"name": "AP:RM7", "id": 579},
        {"name": "AP:OFFHALL", "id": 815},
        {"name": "AP:RM61", "id": 580},
        {"name": "AP:RM40", "id": 581},
        {"name": "AP:RM68", "id": 582},
        {"name": "AP:RM63", "id": 583},
        {"name": "AP:RM26", "id": 584},
        {"name": "AP:RM18", "id": 585},
        {"name": "AP:RM20", "id": 586},
        {"name": "AP:RM203", "id": 587},
        {"name": "AP:RM65", "id": 588},
        {"name": "AP:RM204", "id": 589}
    ]);

    datatile_init("school_info_box_container", "CKCS",222,330, 621, 8, [{ id: 4, label: "SRVR"},{ id: 5, label: "STOR"}], [8],[
        {"name": "Alarm", "id": 134},
        {"name": "IDRAC", "id": 135},
        {"name": "SCCM", "id": 136},
        {"name": "ESXI", "id": 133},
        {"name": "Pi-MainRack", "id":222},
        {"name": "Pi-AcrossFromOffice", "id": 223},
        {"name": "Informacast", "id": 342},
        {"name": "ROUTER", "id": 8},
        {"name": "sw251", "id": 431},
        {"name": "sw252", "id": 401},
        {"name": "sw253", "id": 400},
        {"name": "AP:LIBRARY", "id": 602},
        {"name": "AP:RM207", "id": 603},
        {"name": "AP:RM22", "id": 604},
        {"name": "AP:STUDSRV", "id": 605},
        {"name": "AP:RM43", "id": 606},
        {"name": "AP:RM203", "id": 607},
        {"name": "AP:RM20", "id": 608},
        {"name": "AP:RM18", "id": 609},
        {"name": "AP:RM50", "id": 610},
        {"name": "AP:RM17", "id": 611},
        {"name": "AP:RM30", "id": 612},
        {"name": "AP:RM201", "id": 613},
        {"name": "AP:ENTRANCE", "id": 614},
        {"name": "AP:RM33", "id": 615},
        {"name": "AP:RM16", "id": 616},
        {"name": "AP:RM47", "id": 617}
    ]);

    datatile_init("school_info_box_container", "Connaught",1370,410, 246, 9, [{ id: 3}], [9],[
        {"name": "Alarm", "id": 138},
        {"name": "IDRAC", "id": 140},
        {"name": "SCCM", "id": 141},
        {"name": "ESXI", "id": 139},
        {"name": "PiEnvMon01", "id": 224},
        {"name": "DOOR Site Controller", "id": 142},
        {"name": "Informacast", "id": 341},
        {"name": "ROUTER", "id": 9},
        {"name": "sw252", "id": 420},
        {"name": "sw253", "id": 419}
    ]);

    datatile_init("school_info_box_container", "Hafford",801,403, 1935, 10, [{ id: 35}], [10],[
        {"name": "Alarm", "id": 146},
        {"name": "IDRAC", "id": 147},
        {"name": "SCCM", "id": 148},
        {"name": "ESXI", "id": 145},
        {"name": "PiEnvMon01", "id": 225},
        {"name": "Informacast", "id": 343},
        {"name": "ROUTER", "id": 10},
        {"name": "sw249", "id": 426},
        {"name": "sw253", "id": 425}
    ]);

    datatile_init("school_info_box_container", "HCES",898,197, 2059, 11, [{ id: 8}], [11],[
        {"name": "Alarm", "id": 150},
        {"name": "IDRAC", "id": 153},
        {"name": "SCCM", "id": 154},
        {"name": "ESXI", "id": 152},
        {"name": "PiEnvMon01", "id": 226},
        {"name": "Informacast", "id": 344},
        {"name": "ROUTER", "id": 11},
        {"name": "sw250", "id": 316},
        {"name": "sw253", "id": 415}
    ]);

    datatile_init("school_info_box_container", "Heritage", 1558, 700, 1563, 12, [{ id: 9}], [12],[
        {"name": "IDRAC", "id": 156},
        {"name": "SCCM", "id": 157},
        {"name": "ESXI", "id": 155},
        {"name": "PiEnvMon01", "id": 227},
        {"name": "Informacast", "id": 345},
        {"name": "QB-HER", "id": 386},
        {"name": "HCS-SEC-2", "id": 387},
        {"name": "ROUTER", "id": 12},
        {"name": "sw253", "id": 428}
    ]);

    datatile_init("school_info_box_container", "Kerrobert",348,788, 1974, 13, [{ id: 10}], [13],[
        {"name": "Alarm", "id": 160},
        {"name": "IDRAC", "id": 162},
        {"name": "SCCM", "id": 163},
        {"name": "ESXI", "id": 161},
        {"name": "PiEnvMon01", "id": 228},
        {"name": "Informacast", "id": 346},
        {"name": "ROUTER", "id": 13},
        {"name": "sw253", "id": 402}
    ]);

    datatile_init("school_info_box_container", "Lawrence",1330,80, 522, 4, [{ id: 11}], [4],[
        {"name": "Alarm", "id": 165},
        {"name": "IDRAC", "id": 167},
        {"name": "SCCM", "id": 168},
        {"name": "ESXI", "id": 166},
        {"name": "PiEnvMon01", "id": 229},
        {"name": "DOOR Site Controller", "id": 169},
        {"name": "Informacast", "id": 347},
        {"name": "ROUTER", "id": 4},
        {"name": "sw250", "id": 317},
        {"name": "sw251", "id": 318},
        {"name": "sw252", "id": 422},
        {"name": "sw253", "id": 421}
    ]);

    datatile_init("school_info_box_container", "Leoville",630,30, 2987, 15, [{ id: 12}], [15],[
        {"name": "Alarm", "id": 171},
        {"name": "IDRAC", "id": 173},
        {"name": "SCCM", "id": 174},
        {"name": "ESXI", "id": 172},
        {"name": "PiEnvMon01", "id": 230},
        {"name": "Informacast", "id": 348},
        {"name": "ROUTER", "id": 15},
        {"name": "sw253", "id": 410}
    ]);

    datatile_init("school_info_box_container", "Luseland",50,690, 1873, 14, [{ id: 13}], [14],[
        {"name": "Alarm", "id": 176},
        {"name": "IDRAC", "id": 178},
        {"name": "SCCM", "id": 179},
        {"name": "ESXI", "id": 177},
        {"name": "PiEnvMon01", "id": 231},
        {"name": "Informacast", "id": 349},
        {"name": "ROUTER", "id": 14},
        {"name": "sw252", "id": 412},
        {"name": "sw253", "id": 411}
    ]);

    datatile_init("school_info_box_container", "Macklin",16,512, 1779, 16, [{ id: 14, label: "SRVR"},{ id: 15, label: "HIGHS"}], [16],[
        {"name": "Alarm", "id": 181},
        {"name": "IDRAC", "id": 183},
        {"name": "SCCM", "id": 184},
        {"name": "ESXI", "id": 182},
        {"name": "Pi-ServerRack", "id": 233},
        {"name": "Pi-HighSchoolLab", "id": 232},
        {"name": "Informacast", "id": 336},
        {"name": "ROUTER", "id": 16},
        {"name": "sw252", "id": 397},
        {"name": "sw253", "id": 396},
        {"name": "sw249", "id": 319}
    ]);

    datatile_init("school_info_box_container", "Maymont",715,530, 1519, 18, [{ id: 32}], [18],[
        {"name": "Alarm", "id": 186},
        {"name": "IDRAC", "id": 188},
        {"name": "SCCM", "id": 189},
        {"name": "ESXI", "id": 187},
        {"name": "PiEnvMon01", "id": 234},
        {"name": "Informacast", "id": 350},
        {"name": "ROUTER", "id": 18},
        {"name": "sw248", "id": 320},
        {"name": "sw253", "id": 413}

    ]);

    datatile_init("school_info_box_container", "McKitrick",1330,235, 1394, 19, [{ id: 16}], [19],[
        {"name": "Alarm", "id": 191},
        {"name": "IDRAC", "id": 193},
        {"name": "SCCM", "id": 194},
        {"name": "ESXI", "id": 192},
        {"name": "PiEnvMon01", "id": 235},
        {"name": "DOOR Site Controller", "id": 195},
        {"name": "Informacast", "id": 351},
        {"name": "ROUTER", "id": 19},
        {"name": "sw252", "id": 424},
        {"name": "sw253", "id": 423}
    ]);

    datatile_init("school_info_box_container", "McLurg",478,345, 2111, 20, [{ id: 17, label: "ELEC"}], [20],[
        {"name": "Alarm", "id": 197},
        {"name": "IDRAC", "id": 199},
        {"name": "SCCM", "id": 200},
        {"name": "ESXI", "id": 198},
        {"name": "Pi-Electrical", "id": 236},
        {"name": "Informacast", "id": 352},
        {"name": "ROUTER", "id": 20},
        {"name": "sw253", "id": 408}
    ]);

    datatile_init("school_info_box_container", "Medstead",500,188, 1362, 21, [{ id: 19}], [21],[
        {"name": "Alarm", "id": 202},
        {"name": "IDRAC", "id": 204},
        {"name": "SCCM", "id": 205},
        {"name": "ESXI", "id": 203},
        {"name": "PiEnvMon01", "id": 238},
        {"name": "Informacast", "id": 353},
        {"name": "ROUTER", "id": 21},
        {"name": "sw250", "id": 323},
        {"name": "sw253", "id": 409}
    ]);

    datatile_init("school_info_box_container", "NBCHS",1540,25, 1301, 17, [{ id: 37, label: "SRVR"},{ id: 21, label: "R206"},{ id: 22, label: "CHEM"},{ id: 23, label: "TELE"},{ id: 24, label: "MAINT"},{ id: 38, label: "VLAB"}], [17],[
        {"name": "Alarm", "id": 207},
        {"name": "IDRAC", "id": 209},
        {"name": "SCCM", "id": 210},
        {"name": "ESXI", "id": 208},
        {"name": "Pi-206", "id": 239},
        {"name": "Pi-201-212", "id": 240},
        {"name": "Pi-TelephonyRm", "id": 241},
        {"name": "Pi-Maintenance", "id": 242},
        {"name": "Pi-ServerRoom", "id": 243},
        {"name": "Informacast", "id": 354},
        {"name": "sw253", "id": 17},
        {"name": "sw252", "id": 384},
        {"name": "sw250", "id": 383},
        {"name": "sw249", "id": 382},
        {"name": "sw248", "id": 381},
        {"name": "sw247", "id": 380},
        {"name": "sw242", "id": 324},
        {"name": "sw241", "id": 325},
        {"name": "sw228", "id": 326},
        {"name": "sw227", "id": 328},
        {"name": "sw226", "id": 327},
        {"name": "sw244", "id": 429}
    ]);

    datatile_init("school_info_box_container", "NCES",484,502, 2593, 22, [{ id: 20}], [22],[
        {"name": "Alarm", "id": 213},
        {"name": "IDRAC", "id": 215},
        {"name": "SCCM", "id": 216},
        {"name": "ESXI", "id": 214},
        {"name": "PiEnvMon01", "id": 244},
        {"name": "Informacast", "id": 355},
        {"name": "ROUTER", "id": 22},
        {"name": "sw253", "id": 414}
    ]);

    datatile_init("school_info_box_container", "SHS",700,197, 2655, 23, [{ id: 25, label: "SRVR"},{ id: 26, label: "LAB"}], [23],[
        {"name": "Alarm", "id": 253},
        {"name": "IDRAC", "id": 255},
        {"name": "SCCM", "id": 256},
        {"name": "ESXI", "id": 254},
        {"name": "PiEnvMon01", "id": 245},
        {"name": "PiEnvMon02", "id": 246},
        {"name": "Informacast", "id": 356},
        {"name": "ROUTER", "id": 23},
        {"name": "sw253", "id": 405},
        {"name": "sw252", "id": 406},
        {"name": "sw250", "id": 372},
        {"name": "sw248", "id": 330}
    ]);

    datatile_init("school_info_box_container", "St. Vital",1115,700, 2343, 26, [{ id: 27, label: "LIB"},{ id: 28, label: "R104"}], [26],[
        {"name": "Alarm", "id": 259},
        {"name": "IDRAC", "id": 261},
        {"name": "SCCM", "id": 262},
        {"name": "ESXI", "id": 260},
        {"name": "Pi-Library", "id": 247},
        {"name": "Pi-Room104", "id": 248},
        {"name": "DOOR Site Controller", "id": 263},
        {"name": "Informacast", "id": 357},
        {"name": "ROUTER", "id": 26},
        {"name": "sw251", "id": 418},
        {"name": "sw253", "id": 417}
    ]);

    datatile_init("school_info_box_container", "UCHS",265,508, 2531, 24, [{ id: 29, label: "SRVR"},{ id: 30, label: "BOIL"}], [24],[
        {"name": "Alarm", "id": 270},
        {"name": "IDRAC", "id": 267},
        {"name": "SCCM", "id": 268},
        {"name": "ESXI", "id": 266},
        {"name": "Pi-ServerRack", "id": 249},
        {"name": "Pi-BoilerRoom", "id": 250},
        {"name": "Informacast", "id": 257},
        {"name": "ROUTER", "id": 24},
        {"name": "sw252", "id": 399},
        {"name": "sw253", "id": 398}
    ]);

    datatile_init("school_info_box_container", "UPS", 265, 663, 2405, 25, [{ id: 31}], [25],[
        {"name": "Alarm", "id": 271},
        {"name": "IDRAC", "id": 273},
        {"name": "SCCM", "id": 274},
        {"name": "ESXI", "id": 272},
        {"name": "PiEnvMon01", "id": 252},
        {"name": "Informacast", "id": 358},
        {"name": "ROUTER", "id": 25},
        {"name": "sw250", "id": 332},
        {"name": "sw253", "id": 416}
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
