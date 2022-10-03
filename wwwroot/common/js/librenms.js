var authToken = "1b6a2849b3663fcbbbca10e8fa299425";
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
