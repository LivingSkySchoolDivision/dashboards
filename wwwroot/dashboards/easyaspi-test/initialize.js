/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);

    // Central Office
    eap_init_map("map_container", "do", "Central Services", "eap_navigation_buttons", "sk-34");
    eap_init_sensor("do", 1105, 110, "00000000623713ca"); // 001 - IT Warehouse 1
    eap_init_sensor("do", 1090, 335, "00000000ca8bced2"); // 002 - Kobelsky
    eap_init_sensor("do", 700, 230, "00000000e75f9b1c"); // 003 - Board room
    eap_init_sensor("do", 860, 170, "000000002200107e"); // 004 - IT fridge
    eap_init_sensor("do", 545, 190, "00000000d3d673a2"); // 005 - accounting label room
    eap_init_sensor("do", 500, 220, "00000000bffd768e"); // 006 - Board room
    eap_init_sensor("do", 1380, 410, "000000007b463ac5"); // 008 - fitness
    eap_init_sensor("do", 800, 120, "00000000ad7a9938"); // 013 - server room
    eap_init_sensor("do", 1070, 290, "0000000090b57373"); // 019 - IT Office 1
    eap_init_sensor("do", 105, 170, "0000000036553dc2"); // 025 - SS back hall
    eap_init_sensor("do", 1200, 370, "0000000008775767"); // 034 - Bus garage hall    
    eap_init_sensor("do", 1240, 405, "00000000b7deddad"); // 095 - Busg break room    
    eap_init_sensor("do", 1820, 470, "00000000f62d67b8"); // 143 - Bus Garage SE wall
    eap_init_sensor("do", 1105, 170, "00000000f3e4c91a"); // 146 - IT ceiling
    eap_init_sensor("do", 395, 210, "000000003e2e3911"); // 148 - SS hall

    // Connaught
    eap_init_map("map_container", "connaught", "Connaught Elementary", "eap_navigation_buttons", "sk-34");
    eap_init_sensor("connaught", 1098, 45, "00000000e60fdab9"); // 018 - Connaught - Room 13
    eap_init_sensor("connaught", 905, 250, "0000000092342574"); // 037 - Connaught - Room 07
    eap_init_sensor("connaught", 650, 380, "0000000072f3eb5a"); // 039 - Connaught - Office
    eap_init_sensor("connaught", 1336, 45, "00000000bdc00ac2"); // 055 - Connaught - Room 15
    eap_init_sensor("connaught", 650, 485, "000000002f9812c1"); // 058 - Connaught - Room 43
    eap_init_sensor("connaught", 1388,435, "00000000b64e54f7"); // 081 - Connaught - Gym
    eap_init_sensor("connaught", 905, 640, "000000008f7967fb"); // 090 - Connaught - Staff room
    eap_init_sensor("connaught", 700, 320, "000000003a0dbe59"); // 096 - Connaught - Speced (room 05)
    eap_init_sensor("connaught", 805, 250, "000000001a88fabe"); // 100 - Connaught - Room 06
    eap_init_sensor("connaught", 805, 600, "0000000090eb8a96"); // 104 - Connaught - Room 40
    eap_init_sensor("connaught", 1098, 245, "00000000c95114ca"); // 107 - Connaught - Room 09
    eap_init_sensor("connaught", 1288, 215, "000000003dad6417"); // 110 - Connaught - Room 17    
    eap_init_sensor("connaught", 830, 440, "00000000d5fda0ee"); // 134 - Connaught - Library
    eap_init_sensor("connaught", 1000, 250, "000000008151a13f"); // 139 - Connaught - Room 08
    eap_init_sensor("connaught", 1214, 45, "0000000070e41fe4"); // 145 - Connaught - Room 14



    eap_update_names();
    eap_update_data();
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

setInterval(function() {
    eap_update_data();
}, 600000);

setInterval(function() {
    eap_update_names()
}, 3600000);

// Every 30 minutes
setInterval(function() {
    time_refresh_offsets(DATE_AND_TIME_URL);
    weather_update(WEATHER_UPDATE_URL);
}, 1800000);

// Refresh the page periodically
setInterval(function() {
    window.location.replace(window.location.href);
}, 2700000);