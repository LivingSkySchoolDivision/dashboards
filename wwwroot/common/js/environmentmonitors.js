function envmon_init(ID, SENSOR, URL) {
    console.log("Initializing Pi environment monitor " + ID + " from " + URL);
    envmon_update(ID, SENSOR, URL);
}

function envmon_update(ID, SENSOR, URL) {
    console.log("Updating Pi environment monitor " + ID + " from " + URL);

    $.getJSON(URL, function(data) {
        console.log("Debug");
        $.each(data.sensors, function(sensors, thisSensor) {
            if (thisSensor.name == SENSOR) {
                // If the temperature value is -999, then the sensor has screwed up. Ignore it this time.
                var temp = parseFloat(thisSensor.temperatureCelsius)
                var humid = parseFloat(thisSensor.humidity);

                if (temp == -999) {
                    console.log("Found -999 temp - ignoring.");
                } else {                    
                    $('#envmon-' + ID + '-temperature').html(temp + " &deg;");
                    $('#envmon-' + ID + '-humidity').html(humid + " %");
                }                

                // If temperatures are worth warning about, add warning CSS
                if (temp > 35) {
                    $('#envmon-' + ID + '-temperature').addClass("color-danger");                   
                    $('#envmon-' + ID + '-temperature').removeClass("color-warning");
                } else if (temp > 30) {
                    $('#envmon-' + ID + '-temperature').addClass("color-warning");
                    $('#envmon-' + ID + '-temperature').removeClass("color-danger");
                } else {
                    $('#envmon-' + ID + '-temperature').removeClass("color-danger");                    
                    $('#envmon-' + ID + '-temperature').removeClass("color-warning");
                }

                // Uncomment this if we start caring about humidity.
                // We don't have anything that can fix humidity issues, so theres no point alerting about it.

                // If temperatures are worth warning about, add warning CSS
                // if (humid > 90) {
                //     $('#envmon-' + ID + '-humidity').addClass("color-danger");                   
                //     $('#envmon-' + ID + '-humidity').removeClass("color-warning");
                // } else if (humid > 80) {
                //     $('#envmon-' + ID + '-humidity').addClass("color-warning");
                //     $('#envmon-' + ID + '-humidity').removeClass("color-danger");
                // } else if (humid < 10) {
                //     $('#envmon-' + ID + '-humidity').addClass("color-danger");                   
                //     $('#envmon-' + ID + '-humidity').removeClass("color-warning");
                // } else if (humid < 30) {
                //     $('#envmon-' + ID + '-humidity').addClass("color-warning");
                //     $('#envmon-' + ID + '-humidity').removeClass("color-danger");
                // } else {
                //     $('#envmon-' + ID + '-humidity').removeClass("color-danger");                    
                //     $('#envmon-' + ID + '-humidity').removeClass("color-warning");
                // }

            }
        });
        
        //
    });

}