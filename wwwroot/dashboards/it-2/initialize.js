/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    guests_init('guests-active-count', 'https://guests.lskysd.ca/json/');
    inout_group_init('inout-container', 'https://inoutapi.lskysd.ca/GroupMembers/5');

    datatile_large_website_init("container-tilesensors-2", "GOOGLE", 1);
    datatile_large_website_init("container-tilesensors-2", "INSIGNIA", 8);
    datatile_large_website_init("container-tilesensors-2", "WEBPORTAL", 6);
    datatile_large_website_init("container-tilesensors-2", "MSS", 5);
    datatile_large_website_init("container-tilesensors-2", "EDSBY", 7);

    init_days_since_tile("days_until_container", "Sasktel caused an outage", 2022, 08, 12);    
    init_days_until_tile("days_until_container", "SSL cert expires", 2023, 03, 25);
    init_days_until_tile("days_until_container", "Christmas break", 2022, 12, 23);
    init_days_until_tile("days_until_container", "Last day of school", 2023, 06, 28);
    init_days_until_tile("days_until_container", "🎃", 2022, 10, 31);

    librenms_simple_ping_tile("container-tilesensors", "adsync2019", );
    librenms_simple_ping_tile("container-tilesensors", "ansible", );
    librenms_simple_ping_tile("container-tilesensors", "archive", );
    librenms_simple_ping_tile("container-tilesensors", "arkime", );
    librenms_simple_ping_tile("container-tilesensors", "blue", );
    librenms_simple_ping_tile("container-tilesensors", "busplanner", );
    librenms_simple_ping_tile("container-tilesensors", "chunkymonkey", );
    librenms_simple_ping_tile("container-tilesensors", "confluence", );
    librenms_simple_ping_tile("container-tilesensors", "CSSM", 48);
    librenms_simple_ping_tile("container-tilesensors", "dc-backups", );
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-lb", );
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-m", );
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-n1", );
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-n2", );
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix-1", );
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix-2", );
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix-3", );
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix", );
    librenms_simple_ping_tile("container-tilesensors", "dc-sql2019", );
    librenms_simple_ping_tile("container-tilesensors", "do-backups", );
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-it-1", );
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-it-2", );
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-it-3", 36); 
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-ss-1", );
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-busgarage", );
    librenms_simple_ping_tile("container-tilesensors", "do-deploy", );
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-lb", );
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-m", );
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-n1", );
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-n2", );
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix-1", );
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix-2", );
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix-3", );
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix", );
    librenms_simple_ping_tile("container-tilesensors", "do-sql2019", );
    librenms_simple_ping_tile("container-tilesensors", "do-tv-1", );
    librenms_simple_ping_tile("container-tilesensors", "do-tv-2", );
    librenms_simple_ping_tile("container-tilesensors", "do-tv-3", );
    librenms_simple_ping_tile("container-tilesensors", "do-tv-4", );
    librenms_simple_ping_tile("container-tilesensors", "docker-registry", );
    librenms_simple_ping_tile("container-tilesensors", "doors2019", );
    librenms_simple_ping_tile("container-tilesensors", "doorsws", );
    librenms_simple_ping_tile("container-tilesensors", "helpdesk", );
    librenms_simple_ping_tile("container-tilesensors", "jenkins", );
    librenms_simple_ping_tile("container-tilesensors", "JingleKeys", );
    librenms_simple_ping_tile("container-tilesensors", "kube-storage-1", );
    librenms_simple_ping_tile("container-tilesensors", "kube-storage-2", );
    librenms_simple_ping_tile("container-tilesensors", "kube-storage-3", );
    librenms_simple_ping_tile("container-tilesensors", "kube-storage-4", );
    librenms_simple_ping_tile("container-tilesensors", "kwiktag", );
    librenms_simple_ping_tile("container-tilesensors", "lemons", );
    librenms_simple_ping_tile("container-tilesensors", "librenms", );
    librenms_simple_ping_tile("container-tilesensors", "limes", );
    librenms_simple_ping_tile("container-tilesensors", "mongo", );
    librenms_simple_ping_tile("container-tilesensors", "navision", );
    librenms_simple_ping_tile("container-tilesensors", "ntp", );
    librenms_simple_ping_tile("container-tilesensors", "ovpn - monday", );
    librenms_simple_ping_tile("container-tilesensors", "papercut ", );
    librenms_simple_ping_tile("container-tilesensors", "prismcentral", );
    librenms_simple_ping_tile("container-tilesensors", "public-vlan-dns", );
    librenms_simple_ping_tile("container-tilesensors", "radius", );
    librenms_simple_ping_tile("container-tilesensors", "sccm2012-dc", );
    librenms_simple_ping_tile("container-tilesensors", "streaming", );
    librenms_simple_ping_tile("container-tilesensors", "sync", );
    librenms_simple_ping_tile("container-tilesensors", "tftp", );
    librenms_simple_ping_tile("container-tilesensors", "UNMS", );
    librenms_simple_ping_tile("container-tilesensors", "virtuallab", );     
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-001", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-002", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-003", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-004", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-005", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-006", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-007", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-008", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-009", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-010", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-010", );
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-012", );    
    librenms_simple_ping_tile("container-tilesensors", "vpn2", );
    librenms_simple_ping_tile("container-tilesensors", "Warrant", );
    librenms_simple_ping_tile("container-tilesensors", "web-internal", );
    librenms_simple_ping_tile("container-tilesensors", "webportal", );
    librenms_simple_ping_tile("container-tilesensors", "WTS2-DO", );
    librenms_simple_ping_tile("container-tilesensors", "xibo", );   
    librenms_simple_ping_tile("container-tilesensors", "zabbix", );

    datatile_update();
    librenms_update();
});


/* ******************************************** */
/* * Interval stuff                           * */
/* ******************************************** */

/*
 1000     1 second
 10000     10 seconds
 60000     1 minute
 300000     5 minutes
 600000     10 minutes
 1800000     30 mins
 3600000     1 hour
 */

// Every 30 sec
setInterval(function() {
    inout_group_update();
}, 30000);

// Refresh the page periodically
setInterval(function() {
    window.location.replace(window.location.href);
}, 2700000);

// Every 1 minutes
setInterval(function() {
    datatile_update();
    librenms_update();
}, 60000);
