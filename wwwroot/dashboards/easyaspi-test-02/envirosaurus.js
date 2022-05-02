function eap_init_tile(tilecontainerid, pincontainerid, xpos, ypos, sensorserial)
{
    var pinhtml = "";
    console.log("Initializing EAP pin " + sensorserial + " into div " + tilecontainerid + " at position " + xpos + "," + ypos);
    pinhtml += '<div class="eap_pin" id="eap_pin_' + sensorserial + '" style="top: ' + ypos + 'px; left: ' + xpos + 'px;">000</div>';
    $('#' + pincontainerid).append(pinhtml);

    var tilehtml = "";

    tilehtml += '<div class="eap_sensor" id="eap_sensor_' + sensorserial + '" >';
    tilehtml += '    <div class="eap_sensor_name" id="eap_' + sensorserial + '_name">---</div>';
    tilehtml += '    <div class="eap_sensor_sensors">';
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

    $('#' + tilecontainerid).append(tilehtml);

    

    console.log("Initializing EAP sensor " + sensorserial + " into div " + tilecontainerid + " at position " + xpos + "," + ypos);
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
            

            if (minutes_since_update > 15) {                
                console.log("Stale sensor: " + reading.deviceSerialNumber);
                $("#eap_sensor_" + reading.deviceSerialNumber + "").removeClass("eap_sensor_good");
                $("#eap_sensor_" + reading.deviceSerialNumber + "").addClass("eap_stale_sensor");
                $("#eap_" + reading.deviceSerialNumber + "_temp").html("???");
                $("#eap_" + reading.deviceSerialNumber + "_humid").html("???");
                $("#eap_" + reading.deviceSerialNumber + "_pressure").html("???");
                $("#eap_" + reading.deviceSerialNumber + "_lux").html("???");

                $("#eap_pin_" + reading.deviceSerialNumber + "").addClass("eap_pin_stale");
                $("#eap_pin_" + reading.deviceSerialNumber + "").removeClass("eap_pin_good");  
                return true;
            } else {
                $("#eap_sensor_" + reading.deviceSerialNumber + "").removeClass("eap_stale_sensor");
                $("#eap_sensor_" + reading.deviceSerialNumber + "").addClass("eap_sensor_good");

                $("#eap_pin_" + reading.deviceSerialNumber + "").removeClass("eap_pin_stale");
                $("#eap_pin_" + reading.deviceSerialNumber + "").addClass("eap_pin_good");                
            }

            // If the data is over 10 minutes old, display warning

            $("#eap_" + reading.deviceSerialNumber + "_temp").html(tempValue);
            $("#eap_" + reading.deviceSerialNumber + "_humid").html(Math.round(reading.humidityPercent * 10) / 10);
            $("#eap_" + reading.deviceSerialNumber + "_pressure").html(Math.round(reading.pressure));
            $("#eap_" + reading.deviceSerialNumber + "_lux").html(Math.round(reading.lux));



            // Temperature alarms
            if (tempValue > 26) {
                $("#eap_" + reading.deviceSerialNumber + "_temp").addClass("eap_temp_too_high");
            } else {
                $("#eap_" + reading.deviceSerialNumber + "_temp").removeClass("eap_temp_too_high");
            }

            if (tempValue < 17) {
                $("#eap_" + reading.deviceSerialNumber + "_temp").addClass("eap_temp_too_low");
            } else {
                $("#eap_" + reading.deviceSerialNumber + "_temp").removeClass("eap_temp_too_low");
            }




        });
    });
}

