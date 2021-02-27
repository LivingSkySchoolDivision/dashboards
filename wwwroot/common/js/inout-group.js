
var _inout_group_activeIndicators = [];

function inout_group_init(DIVID, URL) {    
    console.log("Initializing in/out group from "+URL+" into DIV " + DIVID);

    var widgethtml = "";

    _inout_group_activeIndicators.push({ URL: URL });
    
    $.getJSON(URL, function(data) {        
        $.each(data, function(inoutusers, inoutuser) {
            if (inoutuser.isEnabled == true) {
                widgethtml += "<div class=\"inout-user\" id=\"inout-user-"+inoutuser.id+"\">";
                widgethtml += "<div class=\"inout-user-name\" id=\"inout-user-"+inoutuser.id+"-name\">"+inoutuser.displayName+"</div>";
                widgethtml += "<div class=\"inout-user-status\" id=\"inout-user-"+inoutuser.id+"-status\">Loading...</div>";
                widgethtml += "<div class=\"inout-user-inorout\" id=\"inout-user-"+inoutuser.id+"-inorout\">---</div>";
                widgethtml += "</div>";
            }
        });
        $('#' + DIVID).html(widgethtml);
        inout_group_update();
    });


}

function inout_group_update() {
    _inout_group_activeIndicators.forEach(inoutgroup => {
        console.log("Updating in/out from " + inoutgroup.URL);
        $.getJSON(inoutgroup.URL, function(data) {
            $.each(data, function(inoutusers, person) {
                if (person.isEnabled == true) {                    
    	            var userDivName = "#inout-user-" + person.id;
                    
                    // Update user's name
                    $(userDivName + "-name").html(person.displayName);

                    // Clear previous styles
                    $(userDivName).removeClass("presence_user_busy");
                    $(userDivName).removeClass("presence_user_in");
                    $(userDivName).removeClass("presence_user_out");
                    $(userDivName).removeClass("presence_user_unknown");
                    $(userDivName + "-inorout").text("");
                    $(userDivName + "-status").html('&nbsp;');
                    
                    if (person.hasStatus == true) {
                        $(userDivName + "-status").html(person.currentStatus.content + '&nbsp;');
                        // Color styles
                        switch(person.currentStatus.statusType) {
                            case 0:
                                $(userDivName).addClass("presence_user_unknown");
                                $(userDivName + "-inorout").text("??");
                                break;
                            case 1:
                                $(userDivName).addClass("presence_user_in");
                                $(userDivName + "-inorout").text("IN");
                                break;
                            case 2:
                                $(userDivName).addClass("presence_user_out");
                                $(userDivName + "-inorout").text("OUT");
                                break;
                            case 3:
                                $(userDivName + "-inorout").text("BUSY");
                                $(userDivName).addClass("presence_user_busy");
                                break;
                            default:
                                $(userDivName).addClass("presence_user_unknown");
                                $(userDivName + "-inorout").text("??");
                                break;
                        }
                    } else {
                        $(userDivName).addClass("presence_user_unknown");
                    }

                }
            });
          });
    });
    
}