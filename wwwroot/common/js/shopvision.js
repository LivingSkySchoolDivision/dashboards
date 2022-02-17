var _shopvision_all_workorders = [];
var _shopvision_visible_workorders = [];
var _shopvision_workorder_container = "";
var _shopvision_workorder_url = "";

var _shopvision_messages_normal = [];
var _shopvision_messages_highpriority = [];
var _shopvision_message_container = "";
var _shopvision_message_url = "";

var _shopvision_inspections_thismonth = [];
var _shopvision_inspections_overdue = [];
var _shopvision_inspections_nextmonth = [];
var _shopvision_inspection_url = "";
var _shopvision_inspection_container = "";

// How many tickets disappear and reappear per "tick"
var _shopvision_workorders_shown_at_once = 4;

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

    // Clear the container div
    $('#' + _shopvision_inspection_container).html("");

    shopvision_refresh_inspections();
}


function shopvision_refresh_workorders() {
    _shopvision_all_workorders = [];
    if (_shopvision_workorder_url.length > 0) {
        $.getJSON(_shopvision_workorder_url, function(data) {   
            $.each(data.WorkOrders, function(workorders, workorder) {                
                _shopvision_all_workorders.push(workorder);               
            });              
        });
    }
}

function shopvision_refresh_inspections() {
    if (_shopvision_inspection_url.length > 0) {
        $.getJSON(_shopvision_inspection_url, function(data) {
            $.each(data.Overdue, function(inspections, inspection) {
                _shopvision_inspections_overdue += inspection;  
                shopvision_add_inspection_div(inspection, 2);              
            });

            $.each(data.ThisMonth, function(inspections, inspection) {
                _shopvision_inspections_thismonth += inspection;
                shopvision_add_inspection_div(inspection, 0);
            });
            
            $.each(data.NextMonth, function(inspections, inspection) {
                _shopvision_inspections_nextmonth += inspection;
                shopvision_add_inspection_div(inspection, 1);
            });
        });
    }
}

function shopvision_refresh_messages() {
    if (_shopvision_message_url.length > 0) {
        $.getJSON(_shopvision_message_url, function(data) {
            $.each(data.Normal, function(messages, message) {
                _shopvision_messages_normal += message;
            });            
            
            $.each(data.High, function(messages, message) {
                _shopvision_messages_highpriority += message;
            });
        });
    }
}

// Controls what is displayed, and what is being loaded in the background
function shopvision_tick() {
    shopvision_tick_workorders();   


}

function shopvision_tick_workorders() 
{
    // Cycle workorders shown
    // If we've reached the end, reload and reset the marker number
    // _shopvision_workorders_shown_at_once
    // To display a workorder: shopvision_add_workorder_div(workorder);
    
    // Remove the top X displayed work orders

    _shopvision_visible_workorders = [];

    for(let x = 0; x <= _shopvision_workorders_shown_at_once; x++) 
    {
        _shopvision_visible_workorders.push(_shopvision_all_workorders.pop());                
    }    

    // Transition the displayed work orders  

    var newHTML = "";    
    for(let x = 0; x < _shopvision_visible_workorders.length; x++) 
    {
        newHTML += shopvision_add_workorder_div(_shopvision_visible_workorders[x]);
    }
    $('#' + _shopvision_workorder_container).fadeOut('slow', function() {
        $(this).html(newHTML).fadeIn('slow');
    })

    if (_shopvision_all_workorders.length == 0) 
    {
        shopvision_refresh_workorders();
    }
}


function shopvision_add_workorder_div(workorder) 
{    
    var widgethtml = "";
    if (workorder != null) {
        widgethtml += '<div class="work_order" id="workorder_' + workorder.number + '">'    
        widgethtml += '<div class="work_order_number">' + workorder.vehicle + '</div>'
        widgethtml += '<div class="work_order_text">' + workorder.workrequested + '</div>'
        widgethtml += '</div>'
        
        //$('#' + _shopvision_workorder_container).append(widgethtml);
    }
    return widgethtml;
}

function shopvision_add_inspection_div(inspection, priority) 
{
    // priority is expected to be an int
    // 0 = normal (this month)
    // 1 = next month
    // 2 = overdue

    var widgethtml = "";
    if (priority === 1) {
        widgethtml += '<div class="inspection inspection_nextmonth">'    
    } else if (priority === 2) {
        widgethtml += '<div class="inspection inspection_overdue">'    
    } else {
        widgethtml += '<div class="inspection">'    
    }
    widgethtml += '<div class="inspection_number">' + inspection.Vehicle + '</div>'    
    widgethtml += '</div>'
    
    $('#' + _shopvision_inspection_container).append(widgethtml);
}

function shopvision_remove_workorder_div(workorder) {    
    $('#workorder_' + workorder.number).fadeOut('fast');
}