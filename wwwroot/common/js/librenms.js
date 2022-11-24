/*
    Putting an API token in the code is bad... but:
     - This is an internal server talking to an internal server
     - The API token is read access only
*/
var authToken = "52f30846ecebbe235fbf81e2d61510d4";

var librenms_API_path = "https://librenms.lskysd.ca/api/v0/";

function minutes_since_last_poll_snmp(last_poll_value)
{
    var now = new Date();
    var parsed_date = new Date(last_poll_value * 1000);
    var minutes_since = Math.round((now - parsed_date) / 1000 / 60);
    return minutes_since;
}

function minutes_since_last_poll_ping(last_poll_value)
{
    var now = new Date();
    var parsed_date = new Date(Date.parse(last_poll_value));
    var minutes_since = Math.round((now - parsed_date) / 1000 / 60);
    return minutes_since;
}

function librenms_update()
{
    // Update SNMP ports
    // SNMP data comes from the specific port ID so it's data won't be in the same loop as the ping data
    // Calculating MBPS
    // (ifInOctets_rate * 8) gets you the bits per second
    // (ifInOctets_rate * 8) / 1024 gets you the kbps
    // (ifInOctets_rate * 8) / 1024 / 1024 gets you the mpbs
    // ifOutOctets_rate is the other direction
    // https://librenms.lskysd.ca/api/v0/ports?columns=device_id%2Cport_id%2CifOutOctets_rate%2CifInOctets_rate

    console.log("Updating LibreNMS SNMP data...");
    $.ajax({
        beforeSend: function(request) { request.setRequestHeader("X-Auth-Token", authToken);},
        dataType: "json",
        url: librenms_API_path + "ports?columns=device_id%2Cport_id%2CifOutOctets_rate%2CifInOctets_rate%2Cpoll_time",
        success: function(data) {
            $.each(data.ports, function(ports, port) {
                var thisPort_ContainerID_Value_In = "librenms-snmp-" + port.port_id + "-inbound";
                var thisPort_ContainerID_Value_Out = "librenms-snmp-" + port.port_id + "-outbound";

                var minutes_since_last_poll = minutes_since_last_poll_snmp(port.poll_time);

                // Calculate traffic inbound
                // Calculate traffic ountbound
                var traffic_in_kbps = Math.round((port.ifInOctets_rate * 8) / 1024);
                var traffic_out_kbps = Math.round((port.ifOutOctets_rate * 8) / 1024);

                if (traffic_in_kbps == 0) {
                    traffic_in = "IDLE";
                } else {
                    if (traffic_in_kbps > 1024) {
                        traffic_in = Math.round(traffic_in_kbps / 1024) + " Mbps";
                    } else {
                        traffic_in = traffic_in_kbps + " kbps";
                    }
                }
                
                if (traffic_out_kbps == 0) {
                    traffic_out = "IDLE";
                } else {
                    if (traffic_out_kbps > 1024) {
                        traffic_out = Math.round(traffic_out_kbps / 1024) + " Mbps";
                    } else {
                        traffic_out = traffic_out_kbps + " kbps";
                    }
                } 
                
                if ($("#" + thisPort_ContainerID_Value_In).length)
                {
                    $("#" + thisPort_ContainerID_Value_In).html(traffic_in);
                }

                if ($("#" + thisPort_ContainerID_Value_Out).length)
                {
                    $("#" + thisPort_ContainerID_Value_Out).html(traffic_out);
                }
            });
        }
    });

    // Update ping devices
    console.log("Updating LibreNMS ping data...");
    $.ajax({
        beforeSend: function(request) { request.setRequestHeader("X-Auth-Token", authToken);},
        dataType: "json",
        url: librenms_API_path + "devices?type=active&order=device_id",
        success: function(data) {
            $.each(data.devices, function(devices, device) {
                var last_ping_roundtrip = Math.round(device.last_ping_timetaken)
                var minutes_since_last_polled = minutes_since_last_poll_ping(device.last_polled);
                var last_ping_roundtrip = Math.round(device.last_ping_timetaken)

                // If the device has never been polled, set it to something huge
                if (isNaN(minutes_since_last_polled))
                {
                    minutes_since_last_polled = 9999;
                }

                // **************************************
                // * Handle any large ping sensor tiles *
                // **************************************
                var thisSensor_Large_Ping_Tile_ID = "librenms-large-ping-tile-" + device.device_id;
                if ($("#" + thisSensor_Large_Ping_Tile_ID).length)
                {
                    // Set to default OK style to indicate that data loaded
                    $("#" + thisSensor_Large_Ping_Tile_ID).addClass("tile-ok");

                    // If status == 0, the last ping was a failure
                    // If status == 0 AND it's been over 10 minutes since the last success, then its a bigger issue
                    if ((minutes_since_last_polled > 10) &&(device.status == 0))
                    {
                        // Down
                        $("#" + thisSensor_Large_Ping_Tile_ID).removeClass("tile-ok");
                        $("#" + thisSensor_Large_Ping_Tile_ID).removeClass("tile-warning");
                        $("#" + thisSensor_Large_Ping_Tile_ID).addClass("tile-danger");

                    } else if (device.status == 0) {
                        // Super down
                        $("#" + thisSensor_Large_Ping_Tile_ID).removeClass("tile-ok");
                        $("#" + thisSensor_Large_Ping_Tile_ID).removeClass("tile-danger");
                        $("#" + thisSensor_Large_Ping_Tile_ID).addClass("tile-warning");
                    } else {
                        // All OK
                        $("#" + thisSensor_Large_Ping_Tile_ID).removeClass("tile-warning");
                        $("#" + thisSensor_Large_Ping_Tile_ID).removeClass("tile-danger");
                        $("#" + thisSensor_Large_Ping_Tile_ID).addClass("tile-ok");
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

                    // Show warning if the ping is really high
                    // Show error if it hasn't responded in 5+ minutes
                    // Hide otherwise

                    if ((minutes_since_last_polled > 10) && (device.status == 0)) {
                        $("#" + thisSensorTextOnlyID).removeClass("hidden");
                        $("#" + thisSensorTextOnlyID).removeClass("color-ok");
                        $("#" + thisSensorTextOnlyID).removeClass("color-warning");
                        $("#" + thisSensorTextOnlyID).addClass("color-danger");
                    } else if (device.status == 0) {
                        $("#" + thisSensorTextOnlyID).removeClass("hidden");
                        $("#" + thisSensorTextOnlyID).removeClass("color-danger");
                        $("#" + thisSensorTextOnlyID).removeClass("color-ok");
                        $("#" + thisSensorTextOnlyID).addClass("color-warning");                    
                    } else {
                        $("#" + thisSensorTextOnlyID).removeClass("color-warning");
                        $("#" + thisSensorTextOnlyID).removeClass("color-danger");
                        $("#" + thisSensorTextOnlyID).addClass("color-ok");
                        $("#" + thisSensorTextOnlyID).addClass("hidden");
                    }
                }



                // ************************************************************
                // * Handle ping sensor tiles that only show status colour    *
                // ************************************************************
                var thisSensorSimpleTileID = "librenms-ping-" + device.device_id ;
                if ($("#" + thisSensorSimpleTileID).length)
                {
                    $("#" + thisSensorSimpleTileID).removeClass("color-uninitialized");
                    // This type of data box is just the name of the item with no ping value
                    // It changes color if there are issues

                    // Show warning if the ping is really high
                    // Show error if it hasn't responded in 5+ minutes
                    // Hide otherwise

                    if ((minutes_since_last_polled > 10) && (device.status == 0)) {
                        $("#" + thisSensorSimpleTileID).removeClass("color-ok");
                        $("#" + thisSensorSimpleTileID).removeClass("color-warning");
                        $("#" + thisSensorSimpleTileID).addClass("color-danger");
                    } else if (device.status == 0) {
                        $("#" + thisSensorSimpleTileID).removeClass("color-danger");
                        $("#" + thisSensorSimpleTileID).removeClass("color-ok");
                        $("#" + thisSensorSimpleTileID).addClass("color-warning");                    
                    } else {
                        $("#" + thisSensorSimpleTileID).removeClass("color-warning");
                        $("#" + thisSensorSimpleTileID).removeClass("color-danger");
                        $("#" + thisSensorSimpleTileID).addClass("color-ok");
                    }
                }

            });
        }
    });

    // Update service data (http checks, etc)
    console.log("Updating LibreNMS HTTP data...");
    $.ajax({
        beforeSend: function(request) { request.setRequestHeader("X-Auth-Token", authToken);},
        dataType: "json",
        url: librenms_API_path + "services",
        success: function(data) {
            $.each(data.services, function(outers, outer) {
                $.each(outer, function(services, service) {
                    // Update fields that need to be updated
                    var thisSensor = "#librenms-service-" + service.device_id;
                    var thisSensor_Icon = "#librenms-service-" + service.device_id + "-icon";
                    var thisSensor_Address = "#librenms-service-" + service.device_id + "-address";



                    // Update status
                    if ($(thisSensor).length)
                    {
                        // Update the web address, if displayed
                        if ($(thisSensor_Address).length)
                        {
                            $(thisSensor_Address).html(service.service_ip);
                        }

                        // apply styles based on status
                        if (service.service_status == 0)
                        {
                            // All good
                            $(thisSensor).removeClass("tile-danger");
                            $(thisSensor).addClass("tile-ok");
                            $(thisSensor_Icon).attr("src","../../img/smile.svg");

                        } else {
                            // Something wrong
                            $(thisSensor).addClass("tile-danger");
                            $(thisSensor).removeClass("tile-ok");
                            $(thisSensor_Icon).attr("src","../../img/frown.svg");
                        }
                    }



                });

            });
        }
    });
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
