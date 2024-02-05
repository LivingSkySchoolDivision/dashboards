var _shopvision_api_url = "";

var _shopvision_all_workorders = [];
var _shopvision_visible_workorders = [];
var _shopvision_workorder_container = "";

var _shopvision_inspections_thismonth = [];
var _shopvision_inspections_overdue = [];
var _shopvision_inspections_nextmonth = [];
var _shopvision_inspection_container = "";

var _shopvision_priority_urgent_text = "Immediate - Today";
var _shopvision_priority_highpriority_text = "Medium - 1 to 2 Day";

// How many tickets disappear and reappear per "tick"
var _shopvision_workorders_shown_at_once = 5;


/* ********************************************************** */
// * Init
/* ********************************************************** */

function shopvision_init(API_URL)
{
    _shopvision_api_url = API_URL;
}


/* ********************************************************** */
// * Workorders
/* ********************************************************** */

function shopvision_init_workorders(DIVID)
{   

    console.log("Initializing ShopVision workorders into DIV " + DIVID);
    _shopvision_workorder_container = DIVID;

    shopvision_refresh_workorders();
}

function shopvision_refresh_workorders() {    
    _shopvision_all_workorders = [];
    if (_shopvision_api_url.length > 0) {
        $.getJSON(_shopvision_api_url + "/OpenWorkOrders", function(data) {
            
            console.log(data);

            $.each(data, function(workorders, workorder) {
                _shopvision_all_workorders.push(workorder);

                // Debug stuff - show alternate priorities
                if (workorder.priority !== '') {
                    console.log(workorder);
                }
            });
            shopvision_tick_workorders();
        });
    }
}

function shopvision_tick_workorders()
{
    // Cycle workorders shown
    // If we've reached the end, reload and reset the marker number
    // _shopvision_workorders_shown_at_once
    // To display a workorder: shopvision_add_workorder_div(workorder);

    // Remove the top X displayed work orders

    _shopvision_visible_workorders = [];

    for(let x = 0; x < _shopvision_workorders_shown_at_once; x++)
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
    var extraClasses = "";

    if (workorder != null) {
        if (workorder.priority == _shopvision_priority_urgent_text) 
        {
            extraClasses = "workorder_urgent";
        }
    
        if (workorder.priority == _shopvision_priority_highpriority_text)
        {
            extraClasses = "workorder_highpriority";
        }

        // Container
        widgethtml += '<div class="work_order ' + extraClasses + '" id="workorder_' + workorder.number + '">'

        // WO Number
        widgethtml += '<div class="work_order_number">'
        if (workorder.priority == _shopvision_priority_urgent_text) 
        {
            widgethtml += "<div class=\"shopvision_wo_icon\">🛑</div>";
        }
        if (workorder.priority == _shopvision_priority_highpriority_text)
        {
            widgethtml += "<div class=\"shopvision_wo_icon\">🚩</div>";
        } 
        widgethtml += workorder.vehicleNumber + '</div>'

        // WO Text
        widgethtml += '<div class="work_order_text">';
        if (workorder.priority == _shopvision_priority_urgent_text) 
        {
            widgethtml += "<div class=\"shopvision_status_text_urgent\">TODAY: </div>";
        }
        if (workorder.priority == _shopvision_priority_highpriority_text)
        {
            widgethtml += "<div class=\"shopvision_status_text_highpriority\">1-2 DAY: </div>";
        }

        widgethtml += workorder.workRequested;
        widgethtml += '</div>';

        widgethtml += '</div>';

        //$('#' + _shopvision_workorder_container).append(widgethtml);
    }
    return widgethtml;
}


/* ********************************************************** */
// * Inspections
/* ********************************************************** */

function shopvision_init_inspections(DIVID)
{
    console.log("Initializing ShopVision inspections into DIV " + DIVID);
    _shopvision_inspection_container = DIVID;
    shopvision_tick_inspections();
}

function shopvision_tick_inspections()
{
    if (_shopvision_api_url.length > 0) {
        // Fade out whatever is in the div and clear it's contents
        
        $('#' + _shopvision_inspection_container).html(""); 

        // Kick off updating inspections.
        // This needs to be a chain of methods so that they all have time to complete, and add their piece to the one div.
        shopvision_load_overdue_inspection();
    }
}

// Unhide the inspections div
function shopvision_show_inspections() 
{
    $('#' + _shopvision_inspection_container).fadeIn("slow")
}

function shopvision_load_overdue_inspection() 
{
    var curDate = new Date();
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();
    var URL = _shopvision_api_url + "/BusInspections/overdue/" + curYear + "/" + curMonth;

    // This month's inspections
    $.getJSON(URL, function(data) {
        _shopvision_inspections_visible_inspections = [];

        var newHTML = "";
        $.each(data, function(inspections, inspection) {
            _shopvision_inspections_overdue += inspection;
            _shopvision_inspections_visible_inspections += inspection.vehicle;
            newHTML += shopvision_add_inspection_div(inspection, 2);
        });
        
        $('#' + _shopvision_inspection_container).append(newHTML);

        // Next chain - this month's inpections
        shopvision_load_thismonth_inspection();
    });    
}

function shopvision_load_thismonth_inspection(URL) 
{
    var curDate = new Date();
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();
    var URL = _shopvision_api_url + "/BusInspections/" + curYear + "/" + curMonth;

    // This month's inspections
    $.getJSON(URL, function(data) {
        _shopvision_inspections_visible_inspections = [];

        var newHTML = "";
        $.each(data, function(inspections, inspection) {
            _shopvision_inspections_overdue += inspection;
            _shopvision_inspections_visible_inspections += inspection.vehicle;
            newHTML += shopvision_add_inspection_div(inspection, 0);
        });
        
        $('#' + _shopvision_inspection_container).append(newHTML);
        
        // Next chain - this month's inpections
        shopvision_load_nextmonth_inspection();
    });    
}

function shopvision_load_nextmonth_inspection(URL) 
{
    var curDate = new Date();
    var curMonth = curDate.getMonth() + 2;
    var curYear = curDate.getFullYear();
    var URL = _shopvision_api_url + "/BusInspections/" + curYear + "/" + curMonth;

    // This month's inspections
    $.getJSON(URL, function(data) {
        _shopvision_inspections_visible_inspections = [];

        var newHTML = "";
        $.each(data, function(inspections, inspection) {
            _shopvision_inspections_overdue += inspection;
            _shopvision_inspections_visible_inspections += inspection.vehicle;
            newHTML += shopvision_add_inspection_div(inspection, 1);
        });
        
        $('#' + _shopvision_inspection_container).append(newHTML);

        // Nmext chain - show the div        
        shopvision_show_inspections();
    });     
}

function shopvision_add_inspection_div(inspection, priority)
{
    // priority is expected to be an int
    // 0 = normal (this month)
    // 1 = next month
    // 2 = overdue

    var widgethtml = "";
    if (priority === 1) {
        widgethtml += '<div id="inspection_' + inspection.vehicleNumber + '" class="inspection inspection_nextmonth">'
    } else if (priority === 2) {
        widgethtml += '<div class="inspection inspection_overdue">'
    } else {
        widgethtml += '<div class="inspection">'
    }
    widgethtml += '<div class="inspection_number">' + inspection.vehicleNumber + '</div>'
    widgethtml += '</div>'

    return widgethtml;
}