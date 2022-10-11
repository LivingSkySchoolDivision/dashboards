

function datatile_small_init(containerid, tilename, pingsensorid)
{
    var html = "";
    html += "<div class=\"datatile datatile_small_ping\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"datatile_small_ping_name\">" + tilename + "</div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_largesnmp_init(containerid, tilename, portid, swap_in_and_out) 
{
    var html = "";
    html += "<div class=\"datatile datatile_largesnmp\" id=\"librenms-snmp-" + portid + "\">";
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
    html += "<div class=\"datatile datatile_largesnmp\" id=\"datatile-website-" + websitesensorid + "\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "  <div class=\"datatile_largewebsite_address\" id=\"datatile-website-" + websitesensorid + "-address\"></div>";
    html += "  <div class=\"datatile_largewebsite_icon_container\"><img src=\"../../img/question-circle.svg\" id=\"datatile-website-" + websitesensorid + "-icon\"></div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_small_website_init(containerid, tilename, websitesensorid)
{
    var html = "";
    html += "<div class=\"datatile datatile_small_ping\" id=\"datatile-website-" + websitesensorid + "\">";
    html += "  <div class=\"datatile_small_ping_name\">" + tilename + "</div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_init(containerid, schoolname, xpos, ypos, snmpsensorid, tempsensorids, shownpingsensors, extrapingsensors) {
    var html = "";
    html += "<div class=\"datatile school_info_box\" style=\"top: " + ypos + "px; left: " + xpos + "px;\" id=\"librenms-snmp-" + snmpsensorid + "\">";
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

}

function datatile_update_websites(url) 
{
    $.getJSON(url, function (data) {
        $.each(data, function (allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-website-" + sensor.id;

                $(divBase + "-address").html(sensor.address);

                // Just check for issues and highlight the box if health isn't 100%
                if  (sensor.health == 100) {
                    $(divBase + "-icon").attr("src","../../img/smile.svg");
                } else {
                    $(divBase + "-icon").attr("src","../../img/frown.svg");
                }

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
    return;

    $.getJSON(url, function(data) {        
        $.each(data, function (allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-snmp-" + sensor.id;                 
                
                $(divBase + "error").html(sensor.address);

                // Check to see if the values are inverted                
                var inboundFieldName = "-inbound";
                var outboundFieldName = "-outbound";
                if (sensor.hasInvertedInterfaces) {
                    var tmp = inboundFieldName;
                    inboundFieldName = outboundFieldName;
                    outboundFieldName = tmp;
                }


                // Update SNMP values
                if (sensor.lastBPSIn == -1) {
                    $(divBase + inboundFieldName).html("DOWN");
                } else if (sensor.lastBPSIn < 1000) {
                    $(divBase + inboundFieldName).html("IDLE");
                } else {
                    $(divBase + inboundFieldName).html(sensor.friendlyBPSIn);
                }

                if (sensor.lastBPSOut == -1) {
                    $(divBase + outboundFieldName).html("DOWN");
                } else if (sensor.lastBPSOut < 1000) {
                    $(divBase + outboundFieldName).html("IDLE");
                } else {
                    $(divBase + outboundFieldName).html(sensor.friendlyBPSOut);
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
                    $(divBase + inboundFieldName).addClass("color-warning");
                    $(divBase + inboundFieldName).removeClass("color-high-utilization");
                    $(divBase + inboundFieldName).removeClass("color-ok");
                } else if (sensor.lastBPSIn > SNMP_UTILIZATION_HIGH_BPS) {
                    $(divBase + inboundFieldName).addClass("color-high-utilization");
                    $(divBase + inboundFieldName).removeClass("color-warning");
                    $(divBase + inboundFieldName).removeClass("color-ok");
                } else {
                    $(divBase + inboundFieldName).addClass("color-ok");
                    $(divBase + inboundFieldName).removeClass("color-warning");
                    $(divBase + inboundFieldName).removeClass("color-high-utilization");
                }

                if (sensor.lastBPSOut > SNMP_UTILIZATION_WARNING_BPS) {
                    $(divBase + outboundFieldName).addClass("color-warning");
                    $(divBase + outboundFieldName).removeClass("color-high-utilization");
                    $(divBase + outboundFieldName).removeClass("color-ok");
                } else if (sensor.lastBPSOut > SNMP_UTILIZATION_HIGH_BPS) {
                    $(divBase + outboundFieldName).addClass("color-high-utilization");
                    $(divBase + outboundFieldName).removeClass("color-warning");
                    $(divBase + outboundFieldName).removeClass("color-ok");
                } else {
                    $(divBase + outboundFieldName).addClass("color-ok");
                    $(divBase + outboundFieldName).removeClass("color-warning");
                    $(divBase + outboundFieldName).removeClass("color-high-utilization");
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
                
                // Remove any warning or danger styles
                // We'll reapply them on a refresh
                $(divBase + "temp").removeClass("color-danger");
                $(divBase + "temp").removeClass("color-warning");
                $(divBase + "temp").addClass("color-ok");
                $(divBase + "humid").removeClass("color-danger");
                $(divBase + "humid").removeClass("color-warning");
                $(divBase + "humid").addClass("color-ok");

                // Update temperature and humidity values
                
                $(divBase + "temp").html(sensor.lastTempCelsius + "&deg;C");
                $(divBase + "humid").html(sensor.lastHumidityPercent + "%");

                // Check for temperature warnings
                if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                    $(divBase + "temp").addClass("color-danger");
                } else if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
                    $(divBase + "temp").addClass("color-warning");
                }

                // Check for high humidity warnings
                /*
                if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
                    $(divBase + "humid").addClass("color-danger");
                } else if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_WARNING_THRESHOLD) {
                    $(divBase + "humid").addClass("color-warning");
                }
                */

                // Check for low humidity warnings
                /*
                if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
                    $(divBase + "humid").addClass("color-danger");
                } else if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
                    $(divBase + "humid").addClass("color-warning");
                }
                */                    
                
                // If the last poll wasn't successful, add warning styles to both humidity and temperature
                if (!sensor.wasLastPollSuccessful) {
                    $(divBase + "temp").append("?");
                    $(divBase + "humid").append("?");
                }
                
            }
        });
    });
}