

function datatile_small_init(containerid, tilename, pingsensorid)
{
    var html = "";
    html += "<div class=\"datatile_small_ping\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"datatile_small_ping_name\">" + tilename + "</div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_largesnmp_init(containerid, tilename, snmpsensorid) 
{
    var html = "";
    html += "<div class=\"datatile_largesnmp\" id=\"datatile-snmp-" + snmpsensorid + "\">";
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
    html += "<div class=\"datatile_largesnmp\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"datatile_largesnmp_name\">" + tilename + "</div>";
    html += "  <div class=\"datatile_largesnmp_name\" id=\"datatile-ping-" + pingsensorid + "-ip\"></div>";
    html += "</div>";


    $('#' + containerid).append(html);
}

function datatile_init(containerid, schoolname, xpos, ypos, snmpsensorid, tempsensorids, pingsensors) {
    var html = "";
    html += "<div class=\"school_info_box\" style=\"top: " + ypos + "px; left: " + xpos + "px;\" id=\"datatile-snmp-" + snmpsensorid + "-health\">";
    html += "  <div class=\"school_name\">" + schoolname + "</div>";

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

    if (pingsensors != null) {
        html += "<div class=\"datatile_small_site_ping_container\">";
        for (var sensor of pingsensors) {
            html += "<div class=\"hidden hidden\" id=\"datatile-ping-" + sensor.id + "-hidden\">";
            html += "<div class=\"datatile_small_site_ping_item\" id=\"datatile-ping-" + sensor.id + "-textonly\">";
            html += "    <div>" + sensor.name + "</div>";
            html += "</div>";
            html += "</div>";
        }
        html += "</div>";
    }

    html += "</div>";

    console.log("Initializing school tile for " + schoolname);
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

}

function datatile_update_ping(url) 
{
    $.getJSON(url, function (data) {
        $.each(data, function (allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-ping-" + sensor.id;

                $(divBase + "-ip").html(sensor.address);

                // Just check for issues and highlight the box if health isn't 100%

                // Check for errors or warnings
                if (sensor.health <= 0) {
                    $(divBase).addClass("tile-danger");
                    $(divBase).removeClass("tile-warning");
                    $(divBase + "-textonly").addClass("color-danger");
                    $(divBase + "-textonly").removeClass("color-warning");
                    $(divBase + "-hidden").removeClass("hidden");
                } else if (sensor.health <= 99) {
                    $(divBase).removeClass("tile-danger");
                    $(divBase).addClass("tile-warning");
                    $(divBase + "-textonly").removeClass("color-danger");
                    $(divBase + "-textonly").addClass("color-warning");
                    $(divBase + "-hidden").removeClass("hidden");
                } else {
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
                if (sensor.health > 0) {
                    $(divBase + "-inbound").html(sensor.friendlyBPSIn);
                    $(divBase + "-outbound").html(sensor.friendlyBPSOut);
                } else {
                    $(divBase + "-inbound").html("DOWN");
                    $(divBase + "-outbound").html("DOWN");

                    $(divBase + "-health").addClass("tile-danger");
                }

                // Check for errors or warnings
                if (sensor.lastScan_ifOutOctets == -1) {
                    //$(divBase + "-outbound").addClass("color-danger");
                    $(divBase).addClass("tile-danger");
                    $(divBase + "-error").removeClass("hidden");
                } else {
                    //$(divBase + "outbound").removeClass("color-danger");
                    $(divBase + "error").addClass("hidden");
                }

                if (sensor.lastScan_ifInOctets == -1) {
                    //$(divBase + "-inbound").addClass("color-danger");
                } else {
                    //$(divBase + "-inbound").removeClass("color-danger");
                }

                // Utilization
                if (sensor.lastBPSOut > SNMP_UTILIZATION_WARNING_BPS) {
                    $(divBase + "-outbound").addClass("color-warning");
                } else {
                    $(divBase + "-outbound").removeClass("color-warning");
                }

                if (sensor.lastBPSIn > SNMP_UTILIZATION_WARNING_BPS) {
                    $(divBase + "-inbound").addClass("color-warning");
                } else {
                    $(divBase + "-inbound").removeClass("color-warning");
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
                        $(divBase + "temp").removeClass("color-warning");
                    } else if (sensor.lastTempCelsius > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
                        $(divBase + "temp").addClass("color-warning");
                        $(divBase + "temp").removeClass("color-danger");
                    } else {
                        $(divBase + "temp").removeClass("color-danger");
                        $(divBase + "temp").removeClass("color-warning");
                    }

                    // Check for high humidity warnings
                    if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
                        $(divBase + "humid").addClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                    } else if (sensor.lastHumidityPercent > ENVIRONMENT_HIGH_HUMIDITY_WARNING_THRESHOLD) {
                        $(divBase + "humid").addClass("color-warning");
                        $(divBase + "humid").removeClass("color-danger");
                    } else {
                        $(divBase + "humid").removeClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                    }

                    // Check for low humidity warnings
                    if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
                        $(divBase + "humid").addClass("color-danger");
                        $(divBase + "humid").removeClass("color-warning");
                    } else if (sensor.lastHumidityPercent < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
                        $(divBase + "humid").addClass("color-warning");
                        $(divBase + "humid").removeClass("color-danger");
                    } else {
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