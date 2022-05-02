/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);

    // 188 wide
    // 85 tall
    eap_init_tile("eap_sensor_container", 1125, 30, "00000000623713ca", "bottomleft"); // 001 - IT Warehouse 1
    eap_init_tile("eap_sensor_container", 1020, 380, "0000000008775767", "topright"); // 034 - Bus garage hall
    eap_init_tile("eap_sensor_container", 1100, 245, "00000000ca8bced2", "bottomleft"); // 002 - Kobelsky
    eap_init_tile("eap_sensor_container", 720, 180, "00000000e75f9b1c", "bottomleft"); // 003 - Board room
    eap_init_tile("eap_sensor_container", 890, 40, "000000002200107e", "bottomright"); // 004 - IT fridge
    eap_init_tile("eap_sensor_container", 1125, 120, "00000000f3e4c91a", "bottomleft"); // 146 - IT ceiling
    eap_init_tile("eap_sensor_container", 870, 290, "0000000090b57373", "topright"); // 019 - IT Office 1
    eap_init_tile("eap_sensor_container", 1380, 430, "000000007b463ac5", "topleft"); // 008 - fitness
    eap_init_tile("eap_sensor_container", 1280, 330, "00000000b7deddad", "bottomleft"); // 095 - Busg break room    
    eap_init_tile("eap_sensor_container", 600, 60, "00000000ad7a9938", "bottomright"); // 013 - server room
    eap_init_tile("eap_sensor_container", 500, 250, "00000000bffd768e", "topleft"); // 006 - Staff
    eap_init_tile("eap_sensor_container", 480, 150, "00000000d3d673a2", "none"); // 005 - accounting label room
    eap_init_tile("eap_sensor_container", 190, 230, "000000003e2e3911", "topright"); // 148 - SS hall
    eap_init_tile("eap_sensor_container", 115, 100, "0000000036553dc2", "bottomleft"); // 025 - SS back hall
    eap_init_tile("eap_sensor_container", 1625, 460, "00000000f62d67b8", "bottomright"); // 143 - Bus Garage SE wall

    eap_init_tile("eap_sensor_container", 50, 430, "00000000bd4533ee", "none"); // 057 - Purposefully unplugged stale sensor

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