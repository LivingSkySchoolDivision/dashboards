/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);

    datatile_largesnmp_init("large_snmp_tile_container", "CORE 1", 1);
    datatile_largesnmp_init("large_snmp_tile_container", "CORE 2", 2);
    datatile_large_website_init("large_snmp_tile_container", "INTERNET", 1);

    datatile_small_init("small_ping_tile_container", "ADFS2019-1", 234);
    datatile_small_init("small_ping_tile_container", "ADFS2019-2", 235);
    datatile_small_init("small_ping_tile_container", "adsync", 236);
    datatile_small_init("small_ping_tile_container", "ansible", 257);
    datatile_small_init("small_ping_tile_container", "dc-backups", 87);
    datatile_small_init("small_ping_tile_container", "dropoff", 270);
    datatile_small_init("small_ping_tile_container", "InfectionMonkey", 254);
    datatile_small_init("small_ping_tile_container", "jenkins", 239);
    datatile_small_init("small_ping_tile_container", "JingleKeys", 267);
    datatile_small_init("small_ping_tile_container", "l4u", 238);
    datatile_small_init("small_ping_tile_container", "papercut ", 86);
    datatile_small_init("small_ping_tile_container", "radius", 90);
    datatile_small_init("small_ping_tile_container", "mongo", 255);
    datatile_small_init("small_ping_tile_container", "nscnet", 133);
    datatile_small_init("small_ping_tile_container", "ntp", 136);
    datatile_small_init("small_ping_tile_container", "sccm2012-dc", 145);
    datatile_small_init("small_ping_tile_container", "sync", 242);
    datatile_small_init("small_ping_tile_container", "UNMS", 256);
    datatile_small_init("small_ping_tile_container", "vpn2", 233);
    datatile_small_init("small_ping_tile_container", "Warrant", 268);
    datatile_small_init("small_ping_tile_container", "web-internal", 269);
    datatile_small_init("small_ping_tile_container", "webportal", 241);
    datatile_small_init("small_ping_tile_container", "xibo", 137);

    
    datatile_small_init("small_ping_tile_container_2", "dc-kube-ext-lb", 250);
    datatile_small_init("small_ping_tile_container_2", "dc-kube-ext-m", 251);
    datatile_small_init("small_ping_tile_container_2", "dc-kube-ext-n1", 252);
    datatile_small_init("small_ping_tile_container_2", "dc-kube-ext-n2", 253);
    datatile_small_init("small_ping_tile_container_2", "do-kube-int-lb", 246);
    datatile_small_init("small_ping_tile_container_2", "do-kube-int-m", 247);
    datatile_small_init("small_ping_tile_container_2", "do-kube-int-n1", 248);
    datatile_small_init("small_ping_tile_container_2", "do-kube-int-n2", 249);
    
    datatile_small_init("small_ping_tile_container_3", "Prismcentral", 258);
    datatile_small_init("small_ping_tile_container_3", "do-nutanix", 259);
    datatile_small_init("small_ping_tile_container_3", "do-nutanix-1", 260);
    datatile_small_init("small_ping_tile_container_3", "do-nutanix-2", 261);
    datatile_small_init("small_ping_tile_container_3", "do-nutanix-3", 262);
    datatile_small_init("small_ping_tile_container_3", "dc-nutanix", 263);
    datatile_small_init("small_ping_tile_container_3", "dc-nutanix-1", 264);
    datatile_small_init("small_ping_tile_container_3", "dc-nutanix-2", 265);
    datatile_small_init("small_ping_tile_container_3", "dc-nutanix-3", 266);

    // Initialize school tiles 
    //function datatile_init(containerid, schoolname, xpos, ypos, snmpsensorid, tempsensorids, pingsensors) {
    datatile_init("school_info_box_container", "DIV. OFFICE",1570,475, 5, [6,7], [{"name": "DEPLOY-DO", "id": 155}, {"name": "Mac Mini", "id": 92}, {"name": "SCCM", "id": 156}]);
    datatile_init("school_info_box_container", "NBCHS",1540,25, 27,  [21,22,23,24], [{"name": "Alarm", "id": 53}, {"name": "Mac Mini", "id": 116}, {"name": "IDRAC", "id": 196}, {"name": "SCCM", "id": 198}, {"name": "ESXI", "id": 197}, {"name":"ROVER","id":60}]);
    datatile_init("school_info_box_container", "BCS", 1350, 700, 9,[1], [{"name": "Alarm", "id": 37}, {"name": "Mac Mini", "id": 94}, {"name": "IDRAC", "id": 139}, {"name": "SCCM", "id": 141}, {"name": "ESXI", "id": 140}]);
    datatile_init("school_info_box_container", "Bready",1140,145, 10,  [2], [{"name": "Alarm", "id": 48}, {"name": "Mac Mini", "id": 96}, {"name": "IDRAC", "id": 143}, {"name": "SCCM", "id": 144}, {"name": "ESXI", "id": 142}]);
    datatile_init("school_info_box_container", "Cando",585,648, 11,  [33,34], [{"name": "Alarm", "id": 42}, {"name": "Mac Mini", "id": 100}, {"name": "IDRAC", "id": 152}, {"name": "SCCM", "id": 154}, {"name": "ESXI", "id": 153}, {"name":"ROVER","id":62}]);
    datatile_init("school_info_box_container", "CKCS",222,370, 13,  [4,5], [{"name": "Alarm", "id": 41}, {"name": "Mac Mini", "id": 99}, {"name": "IDRAC", "id": 149}, {"name": "SCCM", "id": 151}, {"name": "ESXI", "id": 150}]);
    datatile_init("school_info_box_container", "Connaught",1370,410, 14,  [3], [{"name": "Alarm", "id": 44}, {"name": "Mac Mini", "id": 101}, {"name": "IDRAC", "id": 157}, {"name": "SCCM", "id": 159}, {"name": "ESXI", "id": 158}]);
    datatile_init("school_info_box_container", "Hafford",801,423, 15,  [35], [{"name": "Alarm", "id": 45}, {"name": "Mac Mini", "id": 103}, {"name": "IDRAC", "id": 160}, {"name": "SCCM", "id": 162}, {"name": "ESXI", "id": 161}]);
    datatile_init("school_info_box_container", "HCES",775,263, 16,  [8], [{"name": "Alarm", "id": 56}, {"name": "Mac Mini", "id": 104}, {"name": "IDRAC", "id": 163}, {"name": "SCCM", "id": 165}, {"name": "ESXI", "id": 164}, {"name":"ROVER","id":65}]);
    datatile_init("school_info_box_container", "Heritage", 1550, 700, 17,  [9], [{"name": "Mac Mini", "id": 105}, {"name": "IDRAC", "id": 166}, {"name": "SCCM", "id": 168}, {"name": "ESXI", "id": 167}, {"name":"ROVER","id":66}]);
    datatile_init("school_info_box_container", "Kerrobert",348,818, 18,  [10], [{"name": "Alarm", "id": 38}, {"name": "Mac Mini", "id": 106}, {"name": "IDRAC", "id": 169}, {"name": "SCCM", "id": 171}, {"name": "ESXI", "id": 170}]);
    datatile_init("school_info_box_container", "Lawrence",1330,100, 3, [11], [{"name": "Alarm", "id": 34}, {"name": "Mac Mini", "id": 107}, {"name": "IDRAC", "id": 172}, {"name": "SCCM", "id": 174}, {"name": "ESXI", "id": 173}]);
    datatile_init("school_info_box_container", "Leoville",630,60, 19, [12], [{"name": "Alarm", "id": 49}, {"name": "Mac Mini", "id": 108}, {"name": "IDRAC", "id": 175}, {"name": "SCCM", "id": 177}, {"name": "ESXI", "id": 176}, {"name":"ROVER","id": 79}]);
    datatile_init("school_info_box_container", "Luseland",50,660, 20,  [13], [{"name": "Alarm", "id": 35}, {"name": "Mac Mini", "id": 109}, {"name": "IDRAC", "id": 178}, {"name": "SCCM", "id": 180}, {"name": "ESXI", "id": 179}]);
    datatile_init("school_info_box_container", "Macklin",16,522, 21,  [14,15], [{"name": "Alarm", "id": 36}, {"name": "Mac Mini", "id": 110}, {"name": "IDRAC", "id": 181}, {"name": "SCCM", "id": 183}, {"name": "ESXI", "id": 182}]);
    datatile_init("school_info_box_container", "Maymont",715,530, 23,  [32], [{"name": "Alarm", "id": 46}, {"name": "Mac Mini", "id": 111}, {"name": "IDRAC", "id": 184}, {"name": "SCCM", "id": 186}, {"name": "ESXI", "id": 185}]);
    datatile_init("school_info_box_container", "McKitrick",1330,205, 24,  [16], [{"name": "Alarm", "id": 47}, {"name": "Mac Mini", "id": 112}, {"name": "IDRAC", "id": 187}, {"name": "SCCM", "id": 189}, {"name": "ESXI", "id": 188}]);
    datatile_init("school_info_box_container", "McLurg",478,385, 25,  [17,18], [{"name": "Alarm", "id": 50}, {"name": "Mac Mini", "id": 114}, {"name": "IDRAC", "id": 190}, {"name": "SCCM", "id": 192}, {"name": "ESXI", "id": 191}]);
    datatile_init("school_info_box_container", "Medstead",500,188, 26, [19], [{"name": "Alarm", "id": 51}, {"name": "Mac Mini", "id": 115}, {"name": "IDRAC", "id": 193}, {"name": "SCCM", "id": 195}, {"name": "ESXI", "id": 194}]);
    datatile_init("school_info_box_container", "NCES",478,502, 28,  [20], [{"name": "Alarm", "id": 52}, {"name": "Mac Mini", "id": 124}, {"name": "IDRAC", "id": 199}, {"name": "SCCM", "id": 201}, {"name": "ESXI", "id": 200}, {"name":"ROVER","id":76}]);
    datatile_init("school_info_box_container", "SHS",775,140, 30,  [25,26], [{"name": "Alarm", "id": 54}, {"name": "Mac Mini", "id": 117}, {"name": "IDRAC", "id": 202}, {"name": "SCCM", "id": 204}, {"name": "ESXI", "id": 203}]);
    datatile_init("school_info_box_container", "St. Vital",1150,700, 33,  [27,28], [{"name": "Alarm", "id": 43}, {"name": "Mac Mini", "id": 118}, {"name": "IDRAC", "id": 205}, {"name": "SCCM", "id": 207}, {"name": "ESXI", "id": 206}]);
    datatile_init("school_info_box_container", "UCHS",265,508, 31,  [29,30], [{"name": "Alarm", "id": 39}, {"name": "Mac Mini", "id": 119}, {"name": "IDRAC", "id": 208}, {"name": "SCCM", "id": 210}, {"name": "ESXI", "id": 209}]);
    datatile_init("school_info_box_container", "UPS", 265, 633, 32,  [31], [{"name": "Alarm", "id": 55}, {"name": "Mac Mini", "id": 121}, {"name": "IDRAC", "id": 211}, {"name": "SCCM", "id": 213}, {"name": "ESXI", "id": 212}]);
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
    location.reload();
}, 3400000);