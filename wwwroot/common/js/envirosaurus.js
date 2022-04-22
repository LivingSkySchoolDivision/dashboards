function eap_init_tile(containerid, xpos, ypos, sensorserial, pinlocation) 
{
    var html = "";

    html += '<div class="eap_sensor" id="eap_sensor_' + sensorserial + '" style="top: ' + ypos + 'px; left: ' + xpos + 'px;">';
    
    if (pinlocation.toLowerCase() == "bottomleft") {
        html += '    <div class="eap_pin eap_pin_bottom_left"></div>';    
    }

    if (pinlocation.toLowerCase() == "bottomright") {
        html += '    <div class="eap_pin eap_pin_bottom_right"></div>';    
    }

    if (pinlocation.toLowerCase() == "topleft") {
        html += '    <div class="eap_pin eap_pin_top_left"></div>';    
    }

    if (pinlocation.toLowerCase() == "topright") {
        html += '    <div class="eap_pin eap_pin_top_right"></div>';    
    }
    
    html += '    <div class="eap_sensor_name" id="eap_' + sensorserial + '_name">---</div>';
    html += '    <div class="eap_sensor_sensors">';
    html += '        <div class="eap_sensor_data_field">';
    html += '            <div class="eap_sensor_data_field_icon"><img src="../../img/thermometer-half.svg"></div>';
    html += '            <div class="eap_sensor_data_field_value eap_sensor_temp"><div class="eap_data_value" id="eap_' + sensorserial + '_temp">--</div>&deg;C</div>';
    html += '        </div>';
    html += '        <div class="eap_sensor_data_field">';
    html += '            <div class="eap_sensor_data_field_icon"><img src="../../img/humidity.svg"></div>';
    html += '            <div class="eap_sensor_data_field_value eap_sensor_humid"><div class="eap_data_value" id="eap_' + sensorserial + '_humid">--</div>%</div>';
    html += '        </div>';
    html += '        <div class="eap_sensor_data_field">';
    html += '            <div class="eap_sensor_data_field_icon"><img src="../../img/barometer.svg"></div>';
    html += '            <div class="eap_sensor_data_field_value eap_sensor_pres"><div class="eap_data_value" id="eap_' + sensorserial + '_pressure">--</div> kPa</div>';
    html += '        </div>';
    html += '        <div class="eap_sensor_data_field">';
    html += '            <div class="eap_sensor_data_field_icon"><img src="../../img/light.svg"></div>';
    html += '            <div class="eap_sensor_data_field_value eap_sensor_light"><div class="eap_data_value" id="eap_' + sensorserial + '_lux">--</div> lux</div>';
    html += '        </div>';
    html += '    </div>';
    html += '</div>';
    
    $('#' + containerid).append(html);

    console.log("Initializing EAP sensor " + sensorserial + " into div " + containerid + " at position " + xpos + "," + ypos);
}

function eap_update_names()
{
    console.log("Updating EAP sensor data from " + EAP_API_PATH);
    $.getJSON(EAP_API_PATH + "/Sensors", function(data) {        
        // For each sensor reading returned, try to update a corresponding div
        
        $.each(data, function(sensors, sensor) {
            $("#eap_" + sensor.deviceSerialNumber + "_name").html(sensor.deviceFriendlyName);
        });
    });
}

function eap_update_data() 
{
    console.log("Updating EAP readings from " + EAP_API_PATH);
    $.getJSON(EAP_API_PATH + "/SensorReading", function(data) {        
        // For each sensor reading returned, try to update a corresponding div
        
        $.each(data, function(readings, reading) {            
            $("#eap_" + reading.deviceSerialNumber + "_temp").html(Math.round(reading.temperatureCelsius * 10) / 10);            
            $("#eap_" + reading.deviceSerialNumber + "_humid").html(Math.round(reading.humidityPercent * 10) / 10);
            $("#eap_" + reading.deviceSerialNumber + "_pressure").html(Math.round(reading.pressure));
            $("#eap_" + reading.deviceSerialNumber + "_lux").html(Math.round(reading.lux));
        });
    });
}

