

function datatile_init(containerid, schoolname, xpos, ypos, snmpsensorids, pingsensorid, tempsensorids) {
    var html = "";
    html += "<div class=\"school_info_box\" style=\"top: " + ypos + "px; left: " + xpos + "px;\" id=\"datatile-ping-" + pingsensorid + "\">";
    html += "  <div class=\"school_name\">" + schoolname + "</div>";

    for(const sensor of snmpsensorids) 
    {
        html += "<div class=\"school_info_box_data_container\" id=\"datatile-smnp-" + sensor + "\">";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/upload.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-enviro-" + sensor + "-inbound\">---</div>";
        html += "  </div>";
        html += "  <div class=\"data_box\">";
        html += "    <div class=\"data_box_title\"><img class=\"data_indicator_icon\" src=\"../../img/download.svg\"></div>";
        html += "    <div class=\"data_box_data\" id=\"datatile-enviro-" + sensor + "-outbound\">---</div>";
        html += "  </div>";
        html += "</div>";
    }

    for(const sensor of tempsensorids) 
    {
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
    }

    html += "</div>";

    console.log("Initializing school tile for " + schoolname);
    $('#' + containerid).append(html);
}

function datatile_update()
{
    // Get Network info
    //datatile_update_snmp(STRENDINMONITOR_API_PATH);

    // Get temperature info
    datatile_update_environmentsensors(PIENVMON_API_PATH);
}

function datatile_update_snmp(url) 
{
    $.getJSON(url, function(data) {        
        $.each(data, function(allsensors, sensor) {
            if (sensor.isEnabled == true) {
                var divBase = "#datatile-smnp-" + sensor.id + "-";                 
                
                // Update temperature and humidity values
                
                $(divBase + "inbound").html(sensor.humanfriendlybpsin + "&deg;C");
                $(divBase + "outbound").html(sensor.humanfriendlybpsout + "%");

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
                
                // Update temperature and humidity values
                if (
                    (sensor.lastTempCelsius > 0) 
                    && (sensor.lastHumidityPercent >0)
                    && (sensor.lastHumidityPercent != -999)
                    && (sensor.lastHumidityPercent != -999)
                    ) {
                    $(divBase + "temp").html(sensor.lastTempCelsius + "&deg;C");
                    $(divBase + "humid").html(sensor.lastHumidityPercent + "%");
                }
                
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

            }
        });
    });
}