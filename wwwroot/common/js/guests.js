var _guests_update_divs = [];
var _guests_update_url = "";

function guests_init(DIVID, URL) {
    
    console.log("Initializing guests from "+URL+" into DIV " + DIVID);
    
    // Add this sensor to the list of active sensors
    _guests_update_divs.push(DIVID);
    _guests_update_url = URL;

    guests_update();
}

function guests_update() {
    console.log("Updating guests indicator from " + _guests_update_url);
    $.getJSON(_guests_update_url, function(data) {                 
        _guests_update_divs.forEach(guest_div => {              
            $('#' + guest_div).html(data.TotalActive);
        });
    });
}