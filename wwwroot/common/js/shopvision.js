var _shopvision_active_workorders = [];
var _shopvision_workorder_container = "";
var _shopvision_message_container = "";
var _shopvision_inspection_container = "";
var _shopvision_workorder_url = "";
var _shopvision_message_url = "";
var _shopvision_inspection_url = "";

// How many tickets disappear and reappear per "tick"
var _shopvision_tickets_per_tick = 1;

function shopvision_refresh_all_data() {
    shopvision_refresh_workorders();
    shopvision_refresh_messages();
    shopvision_refresh_inspections();    
}

function shopvision_init_workorders(DIVID, URL)
{
    console.log("Initializing ShopVision workorders into DIV " + DIVID);
    console.log(" ShopVision workorder source: " + URL);
    _shopvision_workorder_url = URL;
    _shopvision_workorder_container = DIVID;

    shopvision_refresh_workorders();
}

function shopvision_init_messages(DIVID, URL)
{
    console.log("Initializing ShopVision messages into DIV " + DIVID);
    console.log(" ShopVision messages source: " + URL);
    _shopvision_message_url = URL;
    _shopvision_message_container = DIVID;

    shopvision_refresh_messages();
}

function shopvision_init_inspections(DIVID, URL)
{
    console.log("Initializing ShopVision inspections into DIV " + DIVID);
    console.log(" ShopVision inspections source: " + URL);
    _shopvision_inspection_url = URL;
    _shopvision_inspection_container = DIVID;

    shopvision_refresh_inspections();
}


function shopvision_refresh_workorders() {
    var temp_workorders = [];

    if (_shopvision_workorder_url.length > 0) {
        $.getJSON(_shopvision_workorder_url, function(data) {        
            $.each(data.WorkOrders, function(workorders, workorder) {
               temp_workorders += workorder;
               shopvision_add_workorder_div(_shopvision_workorder_container, workorder)
            });            
        });
    }
    
    // Determine workorders needing to be removed
    // Determine workorders to add
}

function shopvision_refresh_inspections() {

}

function shopvision_refresh_messages() {

}

function shopvision_animation_tick() {
    // Does one "tick" of transition for the workorders


}

function shopvision_add_workorder_div(DIV, workorder) {


}