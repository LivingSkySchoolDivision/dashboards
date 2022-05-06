const low_temp_value = 18;
const high_temp_value = 27;
const stale_error_message = "COMMUNICATIONS FAILURE";
const consider_stale_after_minutes = 25;

var visible_map = "";

function eap_init_weather_box(containerid,weathercode) 
{
    var weatherhtml = "";
    weatherhtml +='<div id="weather_conditions">';
    weatherhtml +='    <div class="weather_title">Local conditions</div>';
    weatherhtml +='    <div id="weather-container">';
    weatherhtml +='        <div id="weather-detail-icon"><img src="../../img/weather/default.png"></div>';
    weatherhtml +='        <div>';
    weatherhtml +='            <div id="weather-temperature">###&deg;C</div>';
    weatherhtml +='            <div id="weather-feelslike">Feels like ###&deg;C</div>';
    weatherhtml +='            <div id="weather-extra"> ';
    weatherhtml +='                Humid: <div id="weather-humidity"></div><br/>';
    weatherhtml +='                Wind: <div id="weather-wind"></div>';
    weatherhtml +='            </div>';
    weatherhtml +='        </div>';
    weatherhtml +='    </div>';
    weatherhtml +='</div>';
    $('#' + containerid).append(weatherhtml);
}

function eap_init_map(mapcontainerid, mapcodename, mapname, mapweathercode) 
{
    var maphtml = "";    
    maphtml +='<div class="eap_map_screen">';    
    maphtml +='    <div class="eap_map_title">' + mapname + '</div>';      
    maphtml +='    <div class="eap_map_container">';
    maphtml += '     <img class="eap_map" src="maps/' + mapcodename + '.png">';
    maphtml +='      <div class="eap_pin_container" id="eap_pin_container_' + mapcodename + '"></div>';
    maphtml += '   </div>';    
    maphtml +='    <div class="eap_tile_container" id="eap_sensor_container_'+mapcodename+'"></div>';
    maphtml +='</div>';
    $('#' + mapcontainerid).append(maphtml);
}

function eap_init_sensor(mapcodename, xpos, ypos, sensorserial)
{
    var pinhtml = "";    
    pinhtml += '<div class="eap_pin eap_pin_loading" id="eap_pin_' + sensorserial + '" style="top: ' + ypos + 'px; left: ' + xpos + 'px;">000</div>';
    
    var pincontainerid = "eap_pin_container_" + mapcodename;
    $('#' + pincontainerid).append(pinhtml);

    var tilehtml = "";
    tilehtml += '<div class="eap_sensor" id="eap_sensor_' + sensorserial + '" >';
    tilehtml += '    <div class="eap_sensor_name" id="eap_' + sensorserial + '_name">---</div>';
    tilehtml += '    <div class="eap_sensor_tile_error hidden" id="eap_sensor_tile_error_' + sensorserial + '"></div>';
    tilehtml += '    <div class="eap_sensor_sensors" id="eap_sensor_tile_value_area_' + sensorserial + '">';
    tilehtml += '        <div class="eap_sensor_data_field">';
    tilehtml += '            <div class="eap_sensor_data_field_icon"><img src="../../img/thermometer-half.svg"></div>';
    tilehtml += '            <div class="eap_sensor_data_field_value eap_sensor_temp"><div class="eap_data_value" id="eap_' + sensorserial + '_temp">--</div>&deg;C</div>';
    tilehtml += '        </div>';
    tilehtml += '        <div class="eap_sensor_data_field">';
    tilehtml += '            <div class="eap_sensor_data_field_icon"><img src="../../img/humidity.svg"></div>';
    tilehtml += '            <div class="eap_sensor_data_field_value eap_sensor_humid"><div class="eap_data_value" id="eap_' + sensorserial + '_humid">--</div>%</div>';
    tilehtml += '        </div>';
    tilehtml += '        <div class="eap_sensor_data_field">';
    tilehtml += '            <div class="eap_sensor_data_field_icon"><img src="../../img/barometer.svg"></div>';
    tilehtml += '            <div class="eap_sensor_data_field_value eap_sensor_pres"><div class="eap_data_value" id="eap_' + sensorserial + '_pressure">--</div> kPa</div>';
    tilehtml += '        </div>';
    tilehtml += '        <div class="eap_sensor_data_field">';
    tilehtml += '            <div class="eap_sensor_data_field_icon"><img src="../../img/light.svg"></div>';
    tilehtml += '            <div class="eap_sensor_data_field_value eap_sensor_light"><div class="eap_data_value" id="eap_' + sensorserial + '_lux">--</div> lux</div>';
    tilehtml += '        </div>';
    tilehtml += '    </div>';
    tilehtml += '</div>';

    var tilecontainerid = "eap_sensor_container_" + mapcodename;
    $('#' + tilecontainerid).append(tilehtml);
}

function eap_update_names()
{
    console.log("Updating EAP sensor data from " + EAP_API_PATH);
    $.getJSON(EAP_API_PATH + "/Sensors", function(data) {
        // For each sensor reading returned, try to update a corresponding div

        $.each(data, function(sensors, sensor) {
            $("#eap_" + sensor.deviceSerialNumber + "_name").html(('000' + sensor.assignedNumber).slice(-3));
            $("#eap_pin_" + sensor.deviceSerialNumber).html(('000' + sensor.assignedNumber).slice(-3));
        });
    });
}

function eap_update_data()
{
    console.log("Updating EAP readings from " + EAP_API_PATH);
    $.getJSON(EAP_API_PATH + "/SensorReading", function(data) {
        // For each sensor reading returned, try to update a corresponding div
        
        var local_timestamp = new Date();
        var utc_timestamp = Date.UTC(local_timestamp.getUTCFullYear(),local_timestamp.getUTCMonth(), local_timestamp.getUTCDate(), local_timestamp.getUTCHours(), local_timestamp.getUTCMinutes(), local_timestamp.getUTCSeconds(), local_timestamp.getUTCMilliseconds());

        $.each(data, function(readings, reading) {
            var tempValue = Math.round(reading.temperatureCelsius * 10) / 10
            
            var reading_timestamp = Date.parse(reading.timestampUTC);
            var minutes_since_update = Math.round((utc_timestamp - reading_timestamp) / 1000 / 60);            
            
            var sensorHasIssue = false;

            if (minutes_since_update > consider_stale_after_minutes) {     
                $("#eap_" + reading.deviceSerialNumber + "_temp").html("???");
                
                $("#eap_sensor_tile_error_" + reading.deviceSerialNumber).html("Last seen: " + minutes_since_update + " minutes ago");
                $("#eap_sensor_tile_value_area_" + reading.deviceSerialNumber + "").addClass("hidden");
                $("#eap_sensor_tile_error_" + reading.deviceSerialNumber + "").removeClass("hidden");

                $("#eap_sensor_" + reading.deviceSerialNumber + "").addClass("eap_stale_sensor");
                $("#eap_" + reading.deviceSerialNumber + "_temp").html("???");
                $("#eap_" + reading.deviceSerialNumber + "_humid").html("???");
                $("#eap_" + reading.deviceSerialNumber + "_pressure").html("???");
                $("#eap_" + reading.deviceSerialNumber + "_lux").html("???");
                $("#eap_pin_" + reading.deviceSerialNumber + "").addClass("eap_pin_stale"); 
                sensorHasIssue = true;
                return true;
            } else {
                $("#eap_sensor_tile_error_" + reading.deviceSerialNumber).html("");
                $("#eap_sensor_tile_value_area_" + reading.deviceSerialNumber + "").removeClass("hidden");
                $("#eap_sensor_tile_error_" + reading.deviceSerialNumber + "").addClass("hidden");
                
                $("#eap_sensor_" + reading.deviceSerialNumber + "").removeClass("eap_stale_sensor");
                $("#eap_pin_" + reading.deviceSerialNumber + "").removeClass("eap_pin_stale");            
            }

            // If the data is over 10 minutes old, display warning
            $("#eap_" + reading.deviceSerialNumber + "_temp").html(tempValue);
            $("#eap_" + reading.deviceSerialNumber + "_humid").html(Math.round(reading.humidityPercent * 10) / 10);
            $("#eap_" + reading.deviceSerialNumber + "_pressure").html(Math.round(reading.pressure));
            $("#eap_" + reading.deviceSerialNumber + "_lux").html(Math.round(reading.lux));

            // Temperature alarms
            if (tempValue >= high_temp_value) {
                $("#eap_sensor_" + reading.deviceSerialNumber + "").addClass("eap_temp_too_high");
                $("#eap_pin_" + reading.deviceSerialNumber).addClass("eap_pin_temp_too_high");
                sensorHasIssue = true;
            } else {
                $("#eap_sensor_" + reading.deviceSerialNumber + "").removeClass("eap_temp_too_high");
                $("#eap_pin_" + reading.deviceSerialNumber).removeClass("eap_pin_temp_too_high");
            }

            if (tempValue <= low_temp_value) {
                $("#eap_sensor_" + reading.deviceSerialNumber + "").addClass("eap_temp_too_low");
                $("#eap_pin_" + reading.deviceSerialNumber).addClass("eap_pin_temp_too_low");
                sensorHasIssue = true;
            } else {
                $("#eap_sensor_" + reading.deviceSerialNumber + "").removeClass("eap_temp_too_low");
                $("#eap_pin_" + reading.deviceSerialNumber).removeClass("eap_pin_temp_too_low");
            }

            // Removing the "loading" styles
            $("#eap_pin_" + reading.deviceSerialNumber).removeClass("eap_pin_loading");


            // If there are no issues, show the "good" pin styles
            if (sensorHasIssue) {
                $("#eap_pin_" + reading.deviceSerialNumber + "").removeClass("eap_pin_good");                 
            } else {
                $("#eap_pin_" + reading.deviceSerialNumber + "").addClass("eap_pin_good");                  
            }


        });
    });
}

