

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
    
    itwatchdog_update(DIVID, URL);
}

function itwatchdog_update(DIVID, URL) {
    $.getJSON(URL, function(data) {

      var temp = parseFloat(data.temperature)
      var humid = parseFloat(data.humidity);

      if (temp == -999) {
          console.log("Found -999 temp - ignoring.");
      } else {                    
          $('#itwatchdog-' + DIVID + '-temperature').html(temp + "&deg;");
          $('#itwatchdog-' + DIVID + '-humidity').html(humid + "%");
      }              

      // If temperatures are worth warning about, add warning CSS
      if (temp > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
          $('#itwatchdog-' + DIVID + '-temperature').addClass("color-danger");                   
          $('#itwatchdog-' + DIVID + '-temperature').removeClass("color-warning");
      } else if (temp > ENVIRONMENT_TEMP_WARNING_THRESHOLD) {
          $('#itwatchdog-' + DIVID + '-temperature').addClass("color-warning");
          $('#itwatchdog-' + DIVID + '-temperature').removeClass("color-danger");
      } else {
          $('#itwatchdog-' + DIVID + '-temperature').removeClass("color-danger");                    
          $('#itwatchdog-' + DIVID + '-temperature').removeClass("color-warning");
      }

      // Uncomment this if we start caring about humidity.
      // We don't have anything that can fix humidity issues, so theres no point alerting about it.

      // If temperatures are worth warning about, add warning CSS
      if (humid > ENVIRONMENT_HIGH_HUMIDITY_DANGER_THRESHOLD) {
          $('#itwatchdog-' + DIVID + '-humidity').addClass("color-danger");                   
          $('#itwatchdog-' + DIVID + '-humidity').removeClass("color-warning");
      } else if (humid > ENVIRONMENT_TEMP_DANGER_THRESHOLD) {
          $('#itwatchdog-' + DIVID + '-humidity').addClass("color-warning");
          $('#itwatchdog-' + DIVID + '-humidity').removeClass("color-danger");
      } else if (humid < ENVIRONMENT_LOW_HUMIDITY_DANGER_THRESHOLD) {
          $('#itwatchdog-' + DIVID + '-humidity').addClass("color-danger");                   
          $('#itwatchdog-' + DIVID + '-humidity').removeClass("color-warning");
      } else if (humid < ENVIRONMENT_LOW_HUMIDITY_WARNING_THRESHOLD) {
          $('#itwatchdog-' + DIVID + '-humidity').addClass("color-warning");
          $('#itwatchdog-' + DIVID + '-humidity').removeClass("color-danger");
      } else {
          $('#itwatchdog-' + DIVID + '-humidity').removeClass("color-danger");                    
          $('#itwatchdog-' + DIVID + '-humidity').removeClass("color-warning");
      }    

        
    });
}