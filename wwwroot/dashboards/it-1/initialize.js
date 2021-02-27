/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);
    envmon_init("environment-DO-ss", "Sensor-001", "https://dashboard-api.lskysd.ca/environmentmonitor/10.177.54.161/");
    envmon_init("environment-DO-bg", "Sensor-001", "https://dashboard-api.lskysd.ca/environmentmonitor/10.177.54.181/");
    envmon_update(); // Call this after all are initialized
    
    itwatchdog_init("itwatchdog-DO-SWITCHES","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.54.129/9F0004A3F25158C3", true);
    itwatchdog_init("itwatchdog-DO-VMS","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.54.129/CC0000056A877228", false);
    itwatchdog_init("itwatchdog-NBCHS-SWITCHES","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.200.129/ED0004A3F25F36C3", true);
    itwatchdog_init("itwatchdog-NBCHS-VMS","https://dashboard-api.lskysd.ca/ITWatchDog/10.177.200.129/350000043FA0EC28", false);
    itwatchdog_update(); // Call this after all are initialized
    guests_init('guests-active-count', 'https://guests.lskysd.ca/json/');
    inout_group_init('inout-container', 'https://inoutapi.lskysd.ca/GroupMembers/5');
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
    inout_group_update();
}, 60000);

// Every 5 minutes
setInterval(function() {
    envmon_update();
    itwatchdog_update();
}, 300000);

// Every 30 minutes
setInterval(function() {
    time_refresh_offsets(DATE_AND_TIME_URL);
    weather_update(WEATHER_UPDATE_URL);
    guests_update();
}, 1800000);