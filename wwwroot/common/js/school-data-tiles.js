

function datatile_small_init(containerid, tilename, pingsensorid)
{
    var html = "";
    html += "<div class=\"datatile datatile_small_ping\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"datatile_small_ping_name\">" + tilename + "</div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_largesnmp_init(containerid, tilename, snmpsensorid) 
{
    var html = "";
    html += "<div class=\"datatile datatile_largesnmp\" id=\"datatile-snmp-" + snmpsensorid + "\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "<div id=\"datatile-snmp-" + snmpsensorid + "-error\"></div>";
    html += "<div class=\"datatile_largesnmp_datacontainer\" id=\"datatile-snmp-" + snmpsensorid + "\">";

    html += "  <div class=\"data_box network_data_box\">";
    html += "    <div class=\"datatile_largesnmp_label\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
    html += "    <div class=\"datatile_largesnmp_data\" id=\"datatile-snmp-" + snmpsensorid + "-inbound\">---</div>";
    html += "  </div>";

    html += "  <div class=\"data_box network_data_box\">";
    html += "    <div class=\"datatile_largesnmp_label\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
    html += "    <div class=\"datatile_largesnmp_data\" id=\"datatile-snmp-" + snmpsensorid + "-outbound\">---</div>";
    html += "  </div>";

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
    html += "<div class=\"datatile datatile_largesnmp\" id=\"datatile-website-" + websitesensorid + "\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "  <div class=\"datatile_largewebsite_address\" id=\"datatile-website-" + websitesensorid + "-address\"></div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_init(containerid, schoolname, xpos, ypos, snmpsensorid, tempsensorids, shownpingsensors, extrapingsensors) {
    var html = "";
    html += "<div class=\"datatile school_info_box\" style=\"top: " + ypos + "px; left: " + xpos + "px;\" id=\"datatile-snmp-" + snmpsensorid + "\">";
    html += "  <div class=\"school_name\">" + schoolname + "</div>";

    for (const sensor of shownpingsensors) {
        html += "<div class=\"school_info_box_data_container\" id=\"datatile-ping-" + sensor + "-value-container\">";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/heart-rate.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-ping-" + sensor + "-value\">---</div>";
        html += "  </div>";
        html += "</div>";
        html += "<div class=\"data_box_error hidden\" id=\"datatile-ping-" + sensor + "-error\"></div>";
    }

    html += "<div class=\"school_info_box_data_container\">";
    html += "  <div class=\"data_box network_data_box\">";
    html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
    html += "    <div class=\"data_box_data network_data_box\" id=\"datatile-snmp-" + snmpsensorid + "-inbound\">---</div>";
    html += "  </div>";
    html += "  <div class=\"data_box network_data_box\">";
    html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
    html += "    <div class=\"data_box_data network_data_box\" id=\"datatile-snmp-" + snmpsensorid + "-outbound\">---</div>";
    html += "  </div>";
    html += "</div>";
    html += "<div class=\"data_box_error hidden\" id=\"datatile-snmp-" + snmpsensorid + "-error\"></div>";
    

    for (const sensor of tempsensorids) {
        html += "<div class=\"school_info_box_data_container\" id=\"datatile-enviro-" + sensor + "\">";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/thermometer-half.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-enviro-" + sensor + "-temp\">---</div>";
        html += "  </div>";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/humidity.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-enviro-" + sensor + "-humid\">---</div>";
        html += "  </div>";
        html += "</div>";
        html += "<div class=\"data_box_error hidden\" id=\"datatile-enviro-" + sensor + "-error\"></div>";
    }

    if (extrapingsensors != null) {
        html += "<div class=\"datatile_small_site_ping_container\">";
        for (var sensor of extrapingsensors) {
            html += "<div class=\"hidden hidden\" id=\"datatile-ping-" + sensor.id + "-hidden\">";
            html += "<div class=\"datatile_small_site_ping_item\" id=\"datatile-ping-" + sensor.id + "-textonly\">";
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
    // Get SNMP Network info
    datatile_update_snmp(STRENDINMONITOR_API_PATH + "/snmpthroughputsensors");

    // Get temperature info
    datatile_update_environmentsensors(PIENVMON_API_PATH);

    // Get ping network info
    datatile_update_ping(STRENDINMONITOR_API_PATH + "/pinglatencysensors");

    // Get website network info
    datatile_update_websites(STRENDINMONITOR_API_PATH + "/WebsiteSensors");

}

function datatile_update_ping(url) 
{
    $.getJSON(url, function (data) {
        $.each(data, function (allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-ping-" + sensor.id;

                $(divBase + "-ip").html(sensor.address);

                if (sensor.lastRoundTrip != -1) {
                    $(divBase + "-value").html(sensor.lastRoundTrip + " ms");
                    $(divBase + "-value-container").removeClass("hidden");
                } else {
                    $(divBase + "-value-container").addClass("hidden");
                    $(divBase + "-value").html("DOWN");
                }

                // Add health styles based on latency values
                // PING_LATENCY_WARNING_THRESHOLD
                if (sensor.lastRoundTrip < PING_LATENCY_WARNING_THRESHOLD) {
                    $(divBase + "-value").removeClass("color-warning");
                    $(divBase + "-value").addClass("color-ok");
                } else {
                    $(divBase + "-value").removeClass("color-ok");
                    $(divBase + "-value").addClass("color-warning");
                }

                // Just check for issues and highlight the box if health isn't 100%

                // Check for errors or warnings
                if (sensor.health <= 0) {
                    $(divBase).addClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                    $(divBase).removeClass("tile-ok");
                    $(divBase + "-textonly").addClass("color-danger");
                    $(divBase + "-textonly").removeClass("color-warning");
                    $(divBase + "-hidden").removeClass("hidden");
                } else if (sensor.health <= 99) {
                    $(divBase).removeClass("tile-danger");
                    $(divBase).addClass("tile-warning");
                    $(divBase).removeClass("tile-ok");
                    $(divBase + "-textonly").removeClass("color-danger");
                    $(divBase + "-textonly").addClass("color-warning");
                    $(divBase + "-hidden").removeClass("hidden");
                } else {
                    $(divBase).addClass("tile-ok");
                    $(divBase).removeClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                    $(divBase + "-textonly").removeClass("color-danger");
                    $(divBase + "-textonly").removeClass("color-warning");
                    $(divBase + "-hidden").addClass("hidden");
                }

            }
        });
    });

}

function datatile_update_websites(url) 
{
    $.getJSON(url, function (data) {
        $.each(data, function (allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-website-" + sensor.id;

                $(divBase + "-address").html(sensor.address);

                // Just check for issues and highlight the box if health isn't 100%

                // Check for errors or warnings
                if (sensor.health <= 0) {
                    $(divBase).addClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                    $(divBase).removeClass("tile-ok");
                    $(divBase + "-textonly").addClass("color-danger");
                    $(divBase + "-textonly").removeClass("color-warning");
                    $(divBase + "-hidden").removeClass("hidden");
                } else if (sensor.health <= 99) {
                    $(divBase).removeClass("tile-danger");
                    $(divBase).addClass("tile-warning");
                    $(divBase).removeClass("tile-ok");
                    $(divBase + "-textonly").removeClass("color-danger");
                    $(divBase + "-textonly").addClass("color-warning");
                    $(divBase + "-hidden").removeClass("hidden");
                } else {
                    $(divBase).addClass("tile-ok");
                    $(divBase).removeClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                    $(divBase + "-textonly").removeClass("color-danger");
                    $(divBase + "-textonly").removeClass("color-warning");
                    $(divBase + "-hidden").addClass("hidden");
                }
            }
        });
    });

}

function datatile_update_snmp(url) 
{
    $.getJSON(url, function(data) {        
        $.each(data, function (allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-snmp-" + sensor.id;                 
                
                $(divBase + "error").html(sensor.address);

                // Update SNMP values
                if (sensor.lastBPSIn == -1) {
                    $(divBase + "-inbound").html("DOWN");
                } else if (sensor.lastBPSIn < 1000) {
                    $(divBase + "-inbound").html("IDLE");
                } else {
                    $(divBase + "-inbound").html(sensor.friendlyBPSIn);
                }

                if (sensor.lastBPSOut == -1) {
                    $(divBase + "-outbound").html("DOWN");
                } else if (sensor.lastBPSOut < 1000) {
                    $(divBase + "-outbound").html("IDLE");
                } else {
                    $(divBase + "-outbound").html(sensor.friendlyBPSOut);
                }



                // Set colour based on health
                if (sensor.health <= 0) {
                    $(divBase).addClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                    $(divBase).removeClass("tile-ok");
                } else if (sensor.health <= 99) {
                    $(divBase).removeClass("tile-danger");
                    $(divBase).addClass("tile-warning");
                    $(divBase).removeClass("tile-ok");
                } else {
                    $(divBase).addClass("tile-ok");
                    $(divBase).removeClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                }

                // Utilization
                if (sensor.lastBPSIn > SNMP_UTILIZATION_WARNING_BPS) {
                    $(divBase + "-inbound").addClass("color-warning");
                    $(divBase + "-inbound").removeClass("color-high-utilization");
                    $(divBase + "-inbound").removeClass("color-ok");
                } else if (sensor.lastBPSIn > SNMP_UTILIZATION_HIGH_BPS) {
                    $(divBase + "-inbound").addClass("color-high-utilization");
                    $(divBase + "-inbound").removeClass("color-warning");
                    $(divBase + "-inbound").removeClass("color-ok");
                } else {
                    $(divBase + "-inbound").addClass("color-ok");
                    $(divBase + "-inbound").removeClass("color-warning");
                    $(divBase + "-inbound").removeClass("color-high-utilization");
                }

                if (sensor.lastBPSOut > SNMP_UTILIZATION_WARNING_BPS) {
                    $(divBase + "-outbound").addClass("color-warning");
                    $(divBase + "-outbound").removeClass("color-high-utilization");
                    $(divBase + "-outbound").removeClass("color-ok");
                } else if (sensor.lastBPSOut > SNMP_UTILIZATION_HIGH_BPS) {
                    $(divBase + "-outbound").addClass("color-high-utilization");
                    $(divBase + "-outbound").removeClass("color-warning");
                    $(divBase + "-outbound").removeClass("color-ok");
                } else {
                    $(divBase + "-outbound").addClass("color-ok");
                    $(divBase + "-outbound").removeClass("color-warning");
                    $(divBase + "-outbound").removeClass("color-high-utilization");
                }

            }
        });
    });
}

function datatile_update_environmentsensors(url) 
{
    $.getJSON(url, function(data) {        
        $.each(data, function(allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-enviro-" + sensor.databaseId + "-";

                $(divBase + "error").html(sensor.ipAddress);                 
                
                // Update temperature and humidity values
                if (                    
                    (sensor.lastTempCelsius != -999) 
                    && (sensor.lastHumidityPercent != -999)
                    && (sensor.lastHumidityPercent != -999)
                    && (sensor.lastHumidityPercent != -999)
                    ) {
                    $(divBase + "temp").html(sensor.lastTempCelsius + "&deg;C");
                    $(divBase + "humid").html(sensor.lastHumidityPercent + "%");

                    // Check for temperature warnings
                    if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                        $(divBase + "temp").addClass("color-danger");
                        $(divBase + "temp").removeClass("color-ok");
                        $(divBase + "temp").removeClass("color-warning");
                    } else if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
                        $(divBase + "temp").addClass("color-warning");
                        $(divBase + "temp").removeClass("color-danger");
                        $(divBase + "temp").removeClass("color-ok");
                    } else {
                        $(divBase + "temp").addClass("color-ok");
                        $(divBase + "temp").removeClass("color-danger");
                        $(divBase + "temp").removeClass("color-warning");
                    }

                    // Check for high humidity warnings
                    if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
                        $(divBase + "humid").addClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                        $(divBase + "humid").removeClass("color-ok");
                    } else if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_WARNING_THRESHOLD) {
                        $(divBase + "humid").addClass("color-warning");
                        $(divBase + "humid").removeClass("color-danger");
                        $(divBase + "humid").removeClass("color-ok");
                    } else {
                        $(divBase + "humid").addClass("color-ok");
                        $(divBase + "humid").removeClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                    }

                    // Check for low humidity warnings
                    if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
                        $(divBase + "humid").addClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                        $(divBase + "humid").removeClass("color-ok");
                    } else if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
                        $(divBase + "humid").addClass("color-warning");
                        $(divBase + "humid").removeClass("color-danger");
                        $(divBase + "humid").removeClass("color-ok");
                    } else {
                        $(divBase + "humid").addClass("color-ok");
                        $(divBase + "humid").removeClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                    }
                    
                    $("#datatile-enviro-" + sensor.databaseId).removeClass("hidden");
                } else {
                    $("#datatile-enviro-" + sensor.databaseId).addClass("hidden");
                }
                
                

            }
        });
    });
}