/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){   
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);

    guests_init('guests-active-count', 'https://guests.lskysd.ca/json/');
    inout_group_init('inout-container', 'https://inoutapi.lskysd.ca/GroupMembers/2');
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

// Every second
setInterval(function() {
    time_update();
}, 1000);

// Every 30 sec
setInterval(function() {
    inout_group_update();
}, 30000);

// Every 30 minutes
setInterval(function() {
    time_refresh_offsets(DATE_AND_TIME_URL);
    weather_update(WEATHER_UPDATE_URL);
}, 1800000);

// Refresh the page periodically
setInterval(function() {
    location.reload();
}, 3400000);