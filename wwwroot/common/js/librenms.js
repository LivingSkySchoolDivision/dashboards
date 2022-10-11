/* 
    Putting an API token in the code is bad... but:
     - This is an internal server talking to an internal server
     - The API token is read access only
*/
var authToken = "52f30846ecebbe235fbf81e2d61510d4";

var librenms_API_path = "https://librenms.lskysd.ca/api/v0/";


function days_since_last_poll(last_poll_value)
{
    var now = new Date();
    var parsed_date = new Date(Date.parse(last_poll_value));
    var minutes_since = Math.round((now - parsed_date) / 1000 / 60);
    return minutes_since;
}

function librenms_update()
{
    console.log("Updating LibreNMS data...");

    // Update ping devices
    $.ajax({
        beforeSend: function(request) { request.setRequestHeader("X-Auth-Token", authToken);},
        dataType: "json",
        url: librenms_API_path + "devices?type=active&order=device_id",
        success: function(data) {
            $.each(data.devices, function(devices, device) {
                var last_ping_roundtrip = Math.round(device.last_ping_timetaken)
                var minutes_since_last_polled = days_since_last_poll(device.last_polled);
                var last_ping_roundtrip = Math.round(device.last_ping_timetaken)

                // If the device has never been polled, set it to something huge
                if (isNaN(minutes_since_last_polled)) 
                {
                    minutes_since_last_polled = 9999;
                }
                
                // ********************************
                // * Handle any SNMP sensor tiles *
                // ********************************

                // Code to be written goes here

                // ********************************
                // * Handle any ping sensor tiles *
                // ********************************                
                var thisSensor_PotentialPingTileID = "librenms-ping-" + device.device_id
                if ($("#" + thisSensor_PotentialPingTileID).length)
                {
                    if (minutes_since_last_polled > 10) 
                    {    
                        $("#" + thisSensor_PotentialPingTileID).removeClass("tile-ok");
                        $("#" + thisSensor_PotentialPingTileID).removeClass("tile-danger"); 
                        $("#" + thisSensor_PotentialPingTileID).removeClass("tile-warning");                        
                        $("#" + thisSensor_PotentialPingTileID).addClass("tile-stale");
                    } else {
                        // If the device is offline, indicate as such
                        if (device.status != true)
                        {
                            $("#" + thisSensor_PotentialPingTileID).removeClass("tile-ok");
                            $("#" + thisSensor_PotentialPingTileID).addClass("tile-danger");
                        } else {
                            $("#" + thisSensor_PotentialPingTileID).removeClass("tile-danger");
                            $("#" + thisSensor_PotentialPingTileID).addClass("tile-ok");
                        }
                    }                    
                }

                // *******************************************
                // * Handle ping sensor tiles that show data *
                // *******************************************

                // Check if we need to put the actual ping value anywhere
                var thisSensorValueID = "librenms-ping-" + device.device_id + "-value";
                if ($("#" + thisSensorValueID).length)
                {
                    $("#" + thisSensorValueID).html(last_ping_roundtrip + "ms");
                    // Add health styles based on latency values
                    // PING_LATENCY_WARNING_THRESHOLD
                    if (last_ping_roundtrip < PING_LATENCY_WARNING_THRESHOLD) {
                        $("#" + thisSensorValueID).removeClass("color-warning");
                        $("#" + thisSensorValueID).addClass("color-ok");
                    } else {
                        $("#" + thisSensorValueID).removeClass("color-ok");
                        $("#" + thisSensorValueID).addClass("color-warning");
                    }
                }

                // ************************************************************
                // * Handle ping sensor inline names that show up/down status *
                // ************************************************************

                var thisSensorTextOnlyID = "librenms-ping-" + device.device_id + "-textonly";
                if ($("#" + thisSensorTextOnlyID).length)
                {  
                    $("#" + thisSensorTextOnlyID).removeClass("color-uninitialized");                  
                    // This type of data box is just the name of the item with no ping value
                    // It changes color if there are issues

                    // Debug
                    if (device.device_id == 232) {
                        console.log(minutes_since_last_polled);
                    }

                    // Show warning if the ping is really high
                    // Show error if it hasn't responded in 5+ minutes
                    // Hide otherwise
                    console.log("Threshold: " + PING_LATENCY_WARNING_THRESHOLD + ", Ping: " + last_ping_roundtrip);
                    if (minutes_since_last_polled > 10) {
                        $("#" + thisSensorTextOnlyID).removeClass("hidden");
                        $("#" + thisSensorTextOnlyID).removeClass("color-warning");
                        $("#" + thisSensorTextOnlyID).removeClass("color-ok");
                        $("#" + thisSensorTextOnlyID).addClass("color-danger");
                    } else if (last_ping_roundtrip > PING_LATENCY_WARNING_THRESHOLD) {
                        $("#" + thisSensorTextOnlyID).removeClass("hidden");
                        $("#" + thisSensorTextOnlyID).addClass("color-warning");
                        $("#" + thisSensorTextOnlyID).removeClass("color-ok");
                        $("#" + thisSensorTextOnlyID).removeClass("color-danger");
                    } else {
                        $("#" + thisSensorTextOnlyID).addClass("hidden");
                        $("#" + thisSensorTextOnlyID).removeClass("color-warning");
                        $("#" + thisSensorTextOnlyID).addClass("color-ok");
                        $("#" + thisSensorTextOnlyID).removeClass("color-danger");
                    }

                    // Add health styles based on latency values
                    // PING_LATENCY_WARNING_THRESHOLD
                    
                }

            });
        }
    });

    // Update SNMP devices

}

function librenms_simple_ping_tile(containerid,tilename,deviceid)
{
    console.debug("Registering LibreNMS simple ping tile with ID " + deviceid + " into container " + containerid);

    var widgethtml = "";
    widgethtml += "<div class=\"datatile datatile_small_ping\" id=\"librenms-ping-"+deviceid+"\">";
    widgethtml += "  <div class=\"datatile_small_ping_name\">" + tilename + "</div>";
    widgethtml += "</div>";

    $('#' + containerid).append(widgethtml);
}
