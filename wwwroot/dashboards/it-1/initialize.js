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
    datatile_init("school_info_box_container", "DIV. OFFICE",1570,455, 5, [6,36,7], [6],[
        {"name":"AD", "id": 6},
        {"name": "DEPLOY-DO", "id": 155}, 
        {"name": "Mac Mini", "id": 92}, 
        {"name": "SCCM", "id": 156}, 
        {"name": "Pi-BusGarage", "id": 310},
        {"name": "Pi-ServerRoom", "id": 338},
        {"name": "Pi-LearningServ", "id": 311},
        {"name": "DOOR Site Controller", "id": 499}/*,
        {"name": "PRINT-ADMCOLOR", "id": 411},
        {"name": "PRINT-APTECH", "id": 413},
        {"name": "PRINT-Facilities", "id": 414},
        {"name": "PRINT-HRPayroll", "id": 412},
        {"name": "PRINT-Recept", "id": 415},
        {"name": "PRINT-LearningSrv", "id": 417},
        {"name": "PRINT-Transportation", "id": 416}*/
    ]);

    datatile_init("school_info_box_container", "BCS", 1350, 700, 9,[1], [8],[
        {"name":"AD", "id": 8},
        {"name": "Alarm", "id": 37},
        {"name": "Mac Mini", "id": 94},
        {"name": "IDRAC", "id": 139},
        {"name": "SCCM", "id": 141},
        {"name": "ESXI", "id": 140},
        {"name": "PiEnvMon01", "id": 303},
        {"name": "DOOR Site Controller", "id": 496}/*,
        {"name": "PRINT-Copier", "id": 418},
        {"name": "PRINT-Office", "id": 420},
        {"name": "PRINT-Wrkrm", "id": 421},
        {"name": "SEC-1", "id": 445},
        {"name": "SEC-2", "id": 446}*/
    ]);
    datatile_init("school_info_box_container", "Bready",1140,145, 10,  [2], [9],[
        {"name":"AD", "id": 9},
        {"name": "Alarm", "id": 48},
        {"name": "Mac Mini", "id": 96},
        {"name": "IDRAC", "id": 143},
        {"name": "SCCM", "id": 144},
        {"name": "ESXI", "id": 142},
        {"name": "PiEnvMon01", "id": 304},
        {"name": "DOOR Site Controller", "id": 497}/*,
        {"name": "PRINT-Library", "id": 434},
        {"name": "PRINT-Office", "id": 432},
        {"name": "PRINT-Wrkrm", "id": 433},
        {"name": "SEC", "id": 447}*/
    ]);
    datatile_init("school_info_box_container", "Cando",585,648, 11,  [33,34], [10],[
        {"name":"AD", "id": 10},
        {"name": "Alarm", "id": 42},
        {"name": "Mac Mini", "id": 100},
        {"name": "IDRAC", "id": 152},
        {"name": "SCCM", "id": 154},
        {"name": "ESXI", "id": 153},
        {"name": "Pi-MainRack", "id": 305},
        {"name": "Pi-ElementaryRack", "id": 306}/*,
        {"name": "PRINT-Colour", "id": 358},
        {"name": "PRINT-Copier", "id": 357},
        {"name": "SEC", "id": 448 }*/
    ]);
    datatile_init("school_info_box_container", "CKCS",222,330, 13,  [4,5], [12],[
        {"name":"AD", "id": 12},
        {"name": "Alarm", "id": 41},
        {"name": "Mac Mini", "id": 99},
        {"name": "IDRAC", "id": 149},
        {"name": "SCCM", "id": 151},
        {"name": "ESXI", "id": 150},
        {"name": "Pi-MainRack", "id":308},
        {"name": "Pi-AcrossFromOffice", "id": 309},
        {"name": "PRINT-Copier", "id": 437}/*,
        {"name": "PRINT-Library", "id": 439},
        {"name": "PRINT-Secretary", "id": 438},
        {"name": "PRINT-Upstairs", "id": 440},
        {"name": "SEC", "id": 449}*/
    ]);
    datatile_init("school_info_box_container", "Connaught",1370,410, 14,  [3], [13],[
        {"name":"AD", "id": 13},
        {"name": "Alarm", "id": 44},
        {"name": "Mac Mini", "id": 101},
        {"name": "IDRAC", "id": 157},
        {"name": "SCCM", "id": 159},
        {"name": "ESXI", "id": 158},
        {"name": "PiEnvMon01", "id": 307},
        {"name": "DOOR Site Controller", "id": 498}/*,
        {"name": "PRINT-Copier", "id": 424},
        {"name": "PRINT-Office", "id": 426},
        {"name": "PRINT-StudSrv", "id": 425},
        {"name": "SEC", "id": 450}*/
    ]);
    datatile_init("school_info_box_container", "Hafford",801,423, 15,  [35], [14],[
        {"name":"AD", "id": 14},
        {"name": "Alarm", "id": 45},
        {"name": "Mac Mini", "id": 103},
        {"name": "IDRAC", "id": 160},
        {"name": "SCCM", "id": 162},
        {"name": "ESXI", "id": 161},
        {"name": "PiEnvMon01", "id": 312}/*,
        {"name": "PRINT-BackRm", "id": 435},
        {"name": "PRINT-Office", "id": 436},
        {"name": "SEC", "id": 451 }*/
    ]);
    datatile_init("school_info_box_container", "HCES",890,197, 16,  [8], [15],[
        {"name":"AD", "id": 15},
        {"name": "Alarm", "id": 56},
        {"name": "Mac Mini", "id": 104},
        {"name": "IDRAC", "id": 163},
        {"name": "SCCM", "id": 165},
        {"name": "ESXI", "id": 164},
        {"name": "PiEnvMon01", "id": 313}/*,
        {"name": "PRINT-ArtRm", "id": 401},
        {"name": "PRINT-Copier", "id": 402},
        {"name": "PRINT-Library", "id": 400},
        {"name": "SEC", "id": 452 }*/
    ]);
    datatile_init("school_info_box_container", "Heritage", 1558, 700, 17,  [9], [16],[
        {"name":"AD", "id": 16},
        {"name": "Mac Mini", "id": 105},
        {"name": "IDRAC", "id": 166},
        {"name": "SCCM", "id": 168},
        {"name": "ESXI", "id": 167},
        {"name": "PiEnvMon01", "id": 314}/*,
        {"name": "PRINT-ComputerLab", "id": 442},
        {"name": "PRINT-Off", "id": 441},
        {"name": "SEC", "id": 453}*/
    ]);
    datatile_init("school_info_box_container", "Kerrobert",348,788, 18,  [10], [17],[
        {"name":"AD", "id": 17},
        {"name": "Alarm", "id": 38},
        {"name": "Mac Mini", "id": 106},
        {"name": "IDRAC", "id": 169},
        {"name": "SCCM", "id": 171},
        {"name": "ESXI", "id": 170},
        {"name": "PiEnvMon01", "id": 315}/*,
        {"name": "PRINT-CompLab", "id": 353},
        {"name": "PRINT-Lib", "id": 354},
        {"name": "PRINT-Off", "id": 352},
        {"name": "PRINT-ResRm", "id": 356},
        {"name": "PRINT-StaffRm", "id": 355},
        {"name": "SEC", "id": 455 },
        {"name": "SEC", "id": 456 }*/
    ]);
    datatile_init("school_info_box_container", "Lawrence",1330,80, 3, [11], [3],[
        {"name":"AD", "id": 3},
        {"name": "Alarm", "id": 34},
        {"name": "Mac Mini", "id": 107},
        {"name": "IDRAC", "id": 172},
        {"name": "SCCM", "id": 174},
        {"name": "ESXI", "id": 173},
        {"name": "PiEnvMon01", "id": 316},
        {"name": "DOOR Site Controller", "id": 500}/*,
        {"name": "PRINT-Off", "id": 428},
        {"name": "PRINT-StaffWrkRm", "id": 427},
        {"name": "SEC", "id": 457 }*/
    ]);
    datatile_init("school_info_box_container", "Leoville",630,30, 19, [12], [18],[
        {"name":"AD", "id": 18},
        {"name": "Alarm", "id": 49},
        {"name": "Mac Mini", "id": 108},
        {"name": "IDRAC", "id": 175},
        {"name": "SCCM", "id": 177},
        {"name": "ESXI", "id": 176},
        {"name": "PiEnvMon01", "id": 317},
        {"name": "PRINT-Elem", "id": 367}/*,
        {"name": "PRINT-Lib", "id": 368},
        {"name": "PRINT-Off", "id": 369},
        {"name": "PRINT-SupplyRm", "id": 370},
        {"name": "SEC", "id": 458 }*/
    ]);
    datatile_init("school_info_box_container", "Luseland",50,690, 20,  [13], [19],[
        {"name":"AD", "id": 19},
        {"name": "Alarm", "id": 35},
        {"name": "Mac Mini", "id": 109},
        {"name": "IDRAC", "id": 178},
        {"name": "SCCM", "id": 180},
        {"name": "ESXI", "id": 179},
        {"name": "PiEnvMon01", "id": 318}/*,
        {"name": "PRINT-Hall", "id": 392},
        {"name": "PRINT-Lib", "id": 391},
        {"name": "PRINT-Off", "id": 390},
        {"name": "SEC", "id": 459 }*/
    ]);
    datatile_init("school_info_box_container", "Macklin",16,512, 21,  [14,15], [20],[
        {"name":"AD", "id": 20},
        {"name": "Alarm", "id": 36},
        {"name": "Mac Mini", "id": 110},
        {"name": "IDRAC", "id": 181},
        {"name": "SCCM", "id": 183},
        {"name": "ESXI", "id": 182},
        {"name": "Pi-ServerRack", "id": 319},
        {"name": "Pi-HighSchoolLab", "id": 320}/*,
        {"name": "PRINT-HS", "id": 351},
        {"name": "PRINT-Lib", "id": 350},
        {"name": "PRINT-Off", "id": 349},
        {"name": "SEC-1", "id": 460},
        {"name": "SEC-2", "id": 461}*/
    ]);
    datatile_init("school_info_box_container", "Maymont",715,530, 23,  [32], [21],[
        {"name":"AD", "id": 21},
        {"name": "Alarm", "id": 46},
        {"name": "Mac Mini", "id": 111},
        {"name": "IDRAC", "id": 184},
        {"name": "SCCM", "id": 186},
        {"name": "ESXI", "id": 185},
        {"name": "PiEnvMon01", "id": 321}/*,
        {"name": "PRINT-Lab", "id": 393},
        {"name": "PRINT-Off", "id": 395},
        {"name": "PRINT-SpecEd", "id": 396},
        {"name": "SEC", "id": 462 }*/
    ]);
    datatile_init("school_info_box_container", "McKitrick",1330,235, 24,  [16], [22],[
        {"name":"AD", "id": 22},
        {"name": "Alarm", "id": 47},
        {"name": "Mac Mini", "id": 112},
        {"name": "IDRAC", "id": 187},
        {"name": "SCCM", "id": 189},
        {"name": "ESXI", "id": 188},
        {"name": "PiEnvMon01", "id": 322},
        {"name": "DOOR Site Controller", "id": 501}/*,
        {"name": "PRINT-Downstairs", "id": 429},
        {"name": "PRINT-Lib", "id": 431},
        {"name": "PRINT-Upstairs", "id": 430},
        {"name": "SEC-2", "id": 463 },
        {"name": "SEC-1", "id": 464 }*/
    ]);
    datatile_init("school_info_box_container", "McLurg",478,345, 25,  [17,18], [23],[
        {"name":"AD", "id": 23},
        {"name": "Alarm", "id": 50},
        {"name": "Mac Mini", "id": 114},
        {"name": "IDRAC", "id": 190},
        {"name": "SCCM", "id": 192},
        {"name": "ESXI", "id": 191},
        {"name": "Pi-Electrical", "id": 323},
        {"name": "Pi-CompLab", "id": 324}/*,
        {"name": "PRINT-Lib", "id": 362},
        {"name": "PRINT-WrkRm", "id": 363},
        {"name": "SEC", "id": 465 }*/
    ]);
    datatile_init("school_info_box_container", "Medstead",500,188, 26, [19], [24],[
        {"name":"AD", "id": 24},
        {"name": "Alarm", "id": 51},
        {"name": "Mac Mini", "id": 115},
        {"name": "IDRAC", "id": 193},
        {"name": "SCCM", "id": 195},
        {"name": "ESXI", "id": 194},
        {"name": "PiEnvMon01", "id": 325}/*,
        {"name": "PRINT-Lib", "id": 365},
        {"name": "PRINT-Off", "id": 364},
        {"name": "PRINT-StaffRm", "id": 366},
        {"name": "SEC", "id": 466 }*/
    ]);

    datatile_init("school_info_box_container", "NBCHS",1540,25, 35, [37,21,22,23,24], [25],[
        {"name":"AD", "id": 25},
        {"name": "Alarm", "id": 53},
        {"name": "Mac Mini", "id": 116},
        {"name": "IDRAC", "id": 196},
        {"name": "SCCM", "id": 198},
        {"name": "ESXI", "id": 197},
        {"name": "Pi-206", "id": 327},
        {"name": "Pi-201-212", "id": 328},
        {"name": "Pi-TelephonyRm", "id": 329},
        {"name": "Pi-Maintenance", "id": 330},
        {"name": "Pi-ServerRoom", "id": 337},
        {"name": "DOOR Site Controller", "id": 502}/*,
        {"name": "PRINT-Auto", "id": 386},
        {"name": "PRINT-CoCo", "id": 379},
        {"name": "PRINT-Eng", "id": 385},
        {"name": "PRINT-HSec", "id": 376},
        {"name": "PRINT-Lib", "id": 383},
        {"name": "PRINT-Math", "id": 381},
        {"name": "PRINT-Gym", "id": 387},
        {"name": "PRINT-Off", "id": 388},
        {"name": "PRINT-106", "id": 384},
        {"name": "PRINT-206", "id": 374},
        {"name": "PRINT-SSO", "id": 372},
        {"name": "PRINT-Staff", "id": 375},
        {"name": "PRINT-Staff2", "id": 382},
        {"name": "SEC-1", "id": 467 },
        {"name": "SEC-2", "id": 468 },
        {"name": "SEC-3", "id": 469 },
        {"name": "SEC-4", "id": 470 },
        {"name": "SEC-5", "id": 471 }*/
    ]);

    datatile_init("school_info_box_container", "NCES",478,502, 28,  [20], [26],[
        {"name":"AD", "id": 26},
        {"name": "Alarm", "id": 52},
        {"name": "Mac Mini", "id": 124},
        {"name": "IDRAC", "id": 199},
        {"name": "SCCM", "id": 201},
        {"name": "ESXI", "id": 200},
        {"name": "PiEnvMon01", "id": 326}/*,
        {"name": "PRINT-Lab", "id": 397},
        {"name": "PRINT-Lib", "id": 399},
        {"name": "PRINT-WrkRm", "id": 398},
        {"name": "SEC", "id": 472 }*/
    ]);
    datatile_init("school_info_box_container", "SHS",700,197, 30,  [25,26], [28],[
        {"name":"AD", "id": 28},
        {"name": "Alarm", "id": 54},
        {"name": "Mac Mini", "id": 117},
        {"name": "IDRAC", "id": 202},
        {"name": "SCCM", "id": 204},
        {"name": "ESXI", "id": 203},
        {"name": "PiEnvMon01", "id": 331},
        {"name": "PiEnvMon02", "id": 332}/*,
        {"name": "PRINT-Copier", "id": 359},
        {"name": "PRINT-Lab", "id": 360},
        {"name": "PRINT-WrkRm", "id": 361},
        {"name": "SEC", "id": 473 }*/
    ]);
    datatile_init("school_info_box_container", "St. Vital",1150,700, 33,  [27,28], [31],[
        {"name":"AD", "id": 31},
        {"name": "Alarm", "id": 43},
        {"name": "Mac Mini", "id": 118},
        {"name": "IDRAC", "id": 205},
        {"name": "SCCM", "id": 207},
        {"name": "ESXI", "id": 206},
        {"name": "Pi-Library", "id": 333},
        {"name": "Pi-Room104", "id": 334},
        {"name": "DOOR Site Controller", "id": 503}/*,
        {"name": "PRINT-Off", "id": 422},
        {"name": "PRINT-Upstairs", "id": 423},
        {"name": "SEC", "id": 474 }*/
    ]);
    datatile_init("school_info_box_container", "UCHS",265,508, 31,  [29,30], [29],[
        {"name":"AD", "id": 29},
        {"name": "Alarm", "id": 39},
        {"name": "Mac Mini", "id": 119},
        {"name": "IDRAC", "id": 208},
        {"name": "SCCM", "id": 210},
        {"name": "ESXI", "id": 209},
        {"name": "Pi-ServerRack", "id": 335},
        {"name": "Pi-BoilerRoom", "id": 336}/*,
        {"name": "PRINT-LL", "id": 407},
        {"name": "PRINT-Lib", "id": 410},
        {"name": "PRINT-OffCopier", "id": 409},
        {"name": "PRINT-WrkRm", "id": 406},
        {"name": "SEC-1", "id": 475 },
        {"name": "SEC-2", "id": 476 }*/
    ]);
    datatile_init("school_info_box_container", "UPS", 265, 663, 32,  [31], [30],[
        {"name":"AD", "id": 30},
        {"name": "Alarm", "id": 55},
        {"name": "Mac Mini", "id": 121},
        {"name": "IDRAC", "id": 211},
        {"name": "SCCM", "id": 213},
        {"name": "ESXI", "id": 212},
        {"name": "PiEnvMon01", "id": 337}/*,
        {"name": "PRINT-Lib", "id": 404},
        {"name": "PRINT-StaffRm", "id": 405},
        {"name": "PRINT-WrkRm", "id": 403},
        {"name": "SEC", "id": 477 }*/
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