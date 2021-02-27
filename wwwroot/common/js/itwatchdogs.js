
var _itwatchdog_activeSensors = [];

function itwatchdog_init(DIVID, URL, INCLUDEHUMIDITY) {
    var widgethtml = "";
    widgethtml += "<div class=\"enviromon-data\" id=\"itwatchdog-"+DIVID+"\">";
    widgethtml += "<div class=\"enviromon-temperature\" id=\"itwatchdog-"+DIVID+"-temperature\">--</div>";
    if (INCLUDEHUMIDITY == true) {
      widgethtml += "<div class=\"enviromon-humidity\" id=\"itwatchdog-"+DIVID+"-humidity\">--</div>";
    }
    widgethtml += "</div>";
    
    console.log("Initializing IT Watchdog from "+URL+" into DIV " + DIVID);
    $('#' + DIVID).html(widgethtml);
    
    // Add this sensor to the list of active sensors
    _itwatchdog_activeSensors.push({ URL: URL, DIVID: DIVID, INCLHUMID: INCLUDEHUMIDITY});
}

function itwatchdog_update() {

    _itwatchdog_activeSensors.forEach(sensor => {
        console.log("Updating IT Watchdogs sensor " + sensor.DIVID + " from " + sensor.URL);
        $.getJSON(sensor.URL, function(data) {

            var temp = parseFloat(data.temperature)
            var humid = parseFloat(data.humidity);
      
            if (temp == -999) {
                console.log("Found -999 temp - ignoring.");
            } else {                    
                $('#itwatchdog-' + sensor.DIVID + '-temperature').html(temp + "&deg;C");
                
                if (sensor.INCLHUMID == true) {
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').html(humid + "%");
                }
            }              
      
            // If temperatures are worth warning about, add warning CSS
            if (temp > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                $('#itwatchdog-' + sensor.DIVID + '-temperature').addClass("color-danger");                   
                $('#itwatchdog-' + sensor.DIVID + '-temperature').removeClass("color-warning");
            } else if (temp > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
                $('#itwatchdog-' + sensor.DIVID + '-temperature').addClass("color-warning");
                $('#itwatchdog-' + sensor.DIVID + '-temperature').removeClass("color-danger");
            } else {
                $('#itwatchdog-' + sensor.DIVID + '-temperature').removeClass("color-danger");                    
                $('#itwatchdog-' + sensor.DIVID + '-temperature').removeClass("color-warning");
            }
      
            // Uncomment this if we start caring about humidity.
            // We don't have anything that can fix humidity issues, so theres no point alerting about it.
      
            if (sensor.INCLHUMID == true) {
                // If temperatures are worth warning about, add warning CSS
                if (humid > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').addClass("color-danger");                   
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').removeClass("color-warning");
                } else if (humid > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').addClass("color-warning");
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').removeClass("color-danger");
                } else if (humid < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').addClass("color-danger");                   
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').removeClass("color-warning");
                } else if (humid < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').addClass("color-warning");
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').removeClass("color-danger");
                } else {
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').removeClass("color-danger");                    
                    $('#itwatchdog-' + sensor.DIVID + '-humidity').removeClass("color-warning");
                }  
            }
              
          });

    });

    
}