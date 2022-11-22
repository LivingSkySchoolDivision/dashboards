

function datatile_small_init(containerid, tilename, pingsensorid)
{
    var html = "";
    html += "<div class=\"datatile datatile_small_ping\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"datatile_small_ping_name\">" + tilename + "</div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_largesnmp_init(containerid, tilename, portid, pingid, swap_in_and_out)
{
    var html = "";
    html += "<div class=\"datatile datatile_largesnmp tile-ok\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "<div id=\"datatile-snmp-" + portid + "-error\"></div>";
    html += "<div class=\"datatile_largesnmp_datacontainer\" id=\"librenms-snmp-" + portid + "-container\">";

    if (swap_in_and_out === true)
    {
        html += "  <div class=\"data_box network_data_box\">";
        html += "    <div class=\"datatile_largesnmp_label\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
        html += "    <div class=\"datatile_largesnmp_data\" id=\"librenms-snmp-" + portid + "-outbound\">---</div>";
        html += "  </div>";

        html += "  <div class=\"data_box network_data_box\">";
        html += "    <div class=\"datatile_largesnmp_label\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
        html += "    <div class=\"datatile_largesnmp_data\" id=\"librenms-snmp-" + portid + "-inbound\">---</div>";
        html += "  </div>";
    } else {
        html += "  <div class=\"data_box network_data_box\">";
        html += "    <div class=\"datatile_largesnmp_label\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
        html += "    <div class=\"datatile_largesnmp_data\" id=\"librenms-snmp-" + portid + "-inbound\">---</div>";
        html += "  </div>";

        html += "  <div class=\"data_box network_data_box\">";
        html += "    <div class=\"datatile_largesnmp_label\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
        html += "    <div class=\"datatile_largesnmp_data\" id=\"librenms-snmp-" + portid + "-outbound\">---</div>";
        html += "  </div>";

    }

    html += "</div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_large_ping_init(containerid, tilename, pingsensorid)
{
    var html = "";
    html += "<div class=\"datatile datatile_largesnmp\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "  <div class=\"datatile_largesnmp_name\" id=\"datatile-ping-" + pingsensorid + "-ip\"></div>";
    html += "</div>";

    $('#' + containerid).append(html);
}

function datatile_large_website_init(containerid, tilename, websitesensorid)
{
    var html = "";
    html += "<div class=\"datatile datatile_largesnmp\" id=\"librenms-service-" + websitesensorid + "\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "  <div class=\"datatile_largewebsite_address\" id=\"librenms-service-" + websitesensorid + "-address\"></div>";
    html += "  <div class=\"datatile_largewebsite_icon_container\"><img src=\"../../img/question-circle.svg\" id=\"librenms-service-" + websitesensorid + "-icon\"></div>";
    html += "</div>";

    $('#' + containerid).append(html);
}


function datatile_init(containerid, schoolname, xpos, ypos, snmpsensorid, mainpingsensorid, tempsensorids, shownpingsensors, extrapingsensors) {
    var html = "";
    html += "<div class=\"datatile school_info_box\" style=\"top: " + ypos + "px; left: " + xpos + "px;\" id=\"librenms-large-ping-tile-" + mainpingsensorid + "\">";
    html += "  <div class=\"school_name\">" + schoolname + "</div>";

    for (const sensor of shownpingsensors) {
        html += "<div class=\"school_info_box_data_container\" id=\"datatile-ping-" + sensor + "-value-container\">";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/heart-rate.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"librenms-ping-" + sensor + "-value\">---</div>";
        html += "  </div>";
        html += "</div>";
    }

    html += "<div class=\"school_info_box_data_container\">";
    html += "  <div class=\"data_box network_data_box\">";
    html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
    html += "    <div class=\"data_box_data network_data_box\" id=\"librenms-snmp-" + snmpsensorid + "-inbound\">---</div>";
    html += "  </div>";
    html += "  <div class=\"data_box network_data_box\">";
    html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
    html += "    <div class=\"data_box_data network_data_box\" id=\"librenms-snmp-" + snmpsensorid + "-outbound\">---</div>";
    html += "  </div>";
    html += "</div>";
    html += "<div class=\"data_box_error hidden\" id=\"librenms-snmp-" + snmpsensorid + "-error\"></div>";


    for (const sensor of tempsensorids) {
        html += "<div class=\"school_info_box_data_container\" id=\"datatile-enviro-" + sensor.id + "\">";
        if (sensor.hasOwnProperty('label'))
        {
            if (sensor.label.length != 0)
            {
                html += "  <div class=\"data_box\">";
                html += "    <div class=\"data_box_label\">" + sensor.label + "</div>";
                html += "  </div>";
            }
        }
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/thermometer-half.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-enviro-" + sensor.id + "-temp\">---</div>";
        html += "  </div>";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/humidity.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-enviro-" + sensor.id + "-humid\">---</div>";
        html += "  </div>";
        html += "</div>";
        html += "<div class=\"data_box_error hidden\" id=\"datatile-enviro-" + sensor.id + "-error\"></div>";
    }

    if (extrapingsensors != null) {
        html += "<div class=\"datatile_small_site_ping_container\">";
        for (var sensor of extrapingsensors) {
            html += "<div id=\"datatile-ping-" + sensor.id + "-hidden\">";
            html += "<div class=\"color-uninitialized datatile_small_site_ping_item\" id=\"librenms-ping-" + sensor.id + "-textonly\">";
            html += "    <div>" + sensor.name + "</div>";
            html += "</div>";
            html += "</div>";
        }
        html += "</div>";
    }

    html += "</div>";

    $('#' + containerid).append(html);
}

function datatile_update()
{
    // Get temperature info
    datatile_update_environmentsensors(PIENVMON_API_PATH);
}

function minutes_since_utc_unix_timestamp(this_unix_timestamp)
{
    var now = new Date().getTime();
    var minutes_since = Math.floor((now - this_unix_timestamp) / 1000 / 60);
    return minutes_since;
}

function datatile_update_environmentsensors(url)
{
    $.getJSON(url, function(data) {
        $.each(data, function(allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-enviro-" + sensor.databaseId + "-";

                var minutes_since_last_update = minutes_since_utc_unix_timestamp(new Date(sensor.lastTempTimeUTC + "Z").getTime());

                // Do a sanity check on the temp and humidity values.
                // Sometimes the sensors report impossible temperatures, and these mess up the page formatting.
                if (
                    (sensor.lastTempCelsius < 500) &&
                    (sensor.lastTempCelsius > -60) &&
                    (sensor.lastHumidityPercent < 101) &&
                    (sensor.lastHumidityPercent > -1)
                    )
                {
                    // Remove any warning or danger styles
                    // We'll reapply them on a refresh
                    $(divBase + "temp").removeClass("color-danger");
                    $(divBase + "temp").removeClass("color-warning");
                    $(divBase + "temp").removeClass("color-stale");
                    $(divBase + "humid").removeClass("color-danger");
                    $(divBase + "humid").removeClass("color-warning");
                    $(divBase + "humid").removeClass("color-stale");

                    if (minutes_since_last_update > ENVIRONMENT_STALE_MINUTES_THRESHOLD)
                    {
                        $(divBase + "temp").addClass("color-stale");
                        $(divBase + "humid").addClass("color-stale");
                        $(divBase + "temp").html("???");
                        $(divBase + "humid").html("???");

                    } else {
                        // Update temperature and humidity values
                        $(divBase + "temp").html(sensor.lastTempCelsius + "&deg;C");
                        $(divBase + "humid").html(sensor.lastHumidityPercent + "%");

                        // Check for temperature warnings
                        if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                            $(divBase + "temp").addClass("color-danger");
                        } else if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
                            $(divBase + "temp").addClass("color-warning");
                        }

                        /*
                        // Check for high humidity warnings
                        if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
                            $(divBase + "humid").addClass("color-danger");
                        } else if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_WARNING_THRESHOLD) {
                            $(divBase + "humid").addClass("color-warning");
                        }

                        // Check for low humidity warnings
                        if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
                            $(divBase + "humid").addClass("color-danger");
                        } else if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
                            $(divBase + "humid").addClass("color-warning");
                        }
                        */
                    }
                }                
            }
        });
    });
}