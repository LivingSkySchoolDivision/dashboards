
var _envmon_activeSensors = [];

function envmon_init(DIVID, SENSOR, URL) {
    var widgethtml = "";
    widgethtml += "<div class=\"enviromon-data\" id=\"envmon-"+DIVID+"\">";
    widgethtml += "<div class=\"enviromon-temperature\" id=\"envmon-"+DIVID+"-temperature\">--</div>";
    widgethtml += "<div class=\"enviromon-humidity\" id=\"envmon-"+DIVID+"-humidity\">--</div>";
    widgethtml += "</div>";
    
    console.log("Initializing Pi environment monitor " + DIVID + " from " + URL);
    $('#' + DIVID).html(widgethtml);

    _envmon_activeSensors.push({ DIVID: DIVID, URL: URL, NAME: SENSOR });
}


function envmon_update() {
    _envmon_activeSensors.forEach(sensor => {
        console.log("Updating Pi environment monitor " + sensor.DIVID + " from " + sensor.URL + " with sensor " + sensor.NAME);

        $.getJSON(sensor.URL, function(data) {
            $.each(data.sensors, function(sensors, thisSensor) {
                if (thisSensor.name == sensor.NAME) {
                    // If the temperature value is -999, then the sensor has screwed up. Ignore it this time.
                    var temp = parseFloat(thisSensor.temperatureCelsius)
                    var humid = parseFloat(thisSensor.humidity);
    
                    if (temp == -999) {
                        console.log("Found -999 temp - ignoring.");
                    } else {                    
                        $('#envmon-' + sensor.DIVID + '-temperature').html(temp + "&deg;C");
                        $('#envmon-' + sensor.DIVID + '-humidity').html(humid + "%");
                    }                
    
                    // If temperatures are worth warning about, add warning CSS
                    if (temp > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                        $('#envmon-' + sensor.DIVID + '-temperature').addClass("color-danger");                   
                        $('#envmon-' + sensor.DIVID + '-temperature').removeClass("color-warning");
                    } else if (temp > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
                        $('#envmon-' + sensor.DIVID + '-temperature').addClass("color-warning");
                        $('#envmon-' + sensor.DIVID + '-temperature').removeClass("color-danger");
                    } else {
                        $('#envmon-' + sensor.DIVID + '-temperature').removeClass("color-danger");                    
                        $('#envmon-' + sensor.DIVID + '-temperature').removeClass("color-warning");
                    }
    
                    // Uncomment this if we start caring about humidity.
                    // We don't have anything that can fix humidity issues, so theres no point alerting about it.
    
                    // If temperatures are worth warning about, add warning CSS
                    if (humid > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
                        $('#envmon-' + sensor.DIVID + '-humidity').addClass("color-danger");                   
                        $('#envmon-' + sensor.DIVID + '-humidity').removeClass("color-warning");
                    } else if (humid > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                        $('#envmon-' + sensor.DIVID + '-humidity').addClass("color-warning");
                        $('#envmon-' + sensor.DIVID + '-humidity').removeClass("color-danger");
                    } else if (humid < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
                        $('#envmon-' + sensor.DIVID + '-humidity').addClass("color-danger");                   
                        $('#envmon-' + sensor.DIVID + '-humidity').removeClass("color-warning");
                    } else if (humid < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
                        $('#envmon-' + sensor.DIVID + '-humidity').addClass("color-warning");
                        $('#envmon-' + sensor.DIVID + '-humidity').removeClass("color-danger");
                    } else {
                        $('#envmon-' + sensor.DIVID + '-humidity').removeClass("color-danger");                    
                        $('#envmon-' + sensor.DIVID + '-humidity').removeClass("color-warning");
                    }
    
                }
            });
            
            //
        });
    });


    

}