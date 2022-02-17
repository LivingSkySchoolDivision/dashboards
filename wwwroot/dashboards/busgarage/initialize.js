/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    weather_init(WEATHER_UPDATE_URL);
    time_init(DATE_AND_TIME_URL);

    shopvision_init_inspections("inspection_container","https://shopvision.lskysd.ca/JSON/Versatrans/UpcomingBusInspections.aspx");
    shopvision_init_workorders("work_order_container","https://shopvision.lskysd.ca/JSON/FleetVision/NewestWorkOrders.aspx");
    shopvision_init_messages("message_container","https://shopvision.lskysd.ca/JSON/ShopMessages.aspx");

    shopvision_tick_inspections();
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


setInterval(function() {
    shopvision_tick_workorders();
}, 10000);

setInterval(function() {
    shopvision_tick_inspections();
}, 10000);

// Every 1 minutes
setInterval(function() {
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