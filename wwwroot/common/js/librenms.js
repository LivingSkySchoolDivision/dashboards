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
                var thisSensorID = "librenms-ping-" + device.device_id

                // Check if this div exists
                if ($("#" + thisSensorID).length)
                {
                    var minutes_since_last_polled = days_since_last_poll(device.last_polled);
                    if (minutes_since_last_polled > 10) 
                    {    
                        $("#" + thisSensorID).removeClass("tile-ok");
                        $("#" + thisSensorID).removeClass("tile-danger"); 
                        $("#" + thisSensorID).removeClass("tile-warning");                        
                        $("#" + thisSensorID).addClass("tile-stale");
                    } else {
                        // If the device is offline, indicate as such
                        if (device.status != true)
                        {
                            $("#" + thisSensorID).removeClass("tile-ok");
                            $("#" + thisSensorID).addClass("tile-danger");
                        } else {
                            $("#" + thisSensorID).removeClass("tile-danger");
                            $("#" + thisSensorID).addClass("tile-ok");
                        }
                    }
                    
                }

                // Check if we need to put the actual ping value anywhere
                var thisSensorValueID = "librenms-ping-" + device.device_id + "-value";
                if ($("#" + thisSensorValueID).length)
                {
                    var last_ping_roundtrip = Math.round(device.last_ping_timetaken)
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
