/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){
    guests_init('guests-active-count', 'https://guests.lskysd.ca/json/');
    inout_group_init('inout-container', 'https://inoutapi.lskysd.ca/GroupMembers/5');

    datatile_large_website_init("container-tilesensors-2", "GOOGLE", 362);
    datatile_large_website_init("container-tilesensors-2", "INSIGNIA", 361);
    datatile_large_website_init("container-tilesensors-2", "WEBPORTAL", 57);
    datatile_large_website_init("container-tilesensors-2", "MSS", 363);
    datatile_large_website_init("container-tilesensors-2", "EDSBY", 359);
    datatile_large_website_init("container-tilesensors-2", "GRAYLOG", 388);

    init_days_since_tile("days_until_container", "DAYS SINCE", "CNET caused an outage", 2025, 1, 8);
    init_days_until_tile("days_until_container", "SLEEPS UNTIL", "Summer Holidays", 2025, 6, 30);
    init_days_until_tile("days_until_container", "SLEEPS UNTIL", "Win10 EOS", 2025, 10, 14);
    init_days_until_tile("days_until_container", "SLEEPS UNTIL", "Navision EOL", 2026, 10, 31);
    init_days_until_tile("days_until_container", "SLEEPS UNTIL", "SSL cert expires", 2026, 3, 5);
    //init_days_until_tile("days_until_container", "SLEEPS UNTIL", "Teachers return", 2024, 8, 26);
    //init_days_until_tile("days_until_container", "SLEEPS UNTIL", "Students return", 2024, 9, 3);    
    //init_days_until_tile("days_until_container", "SLEEPS UNTIL", "Christmas Break", 2024,12, 21);

    librenms_simple_ping_tile("container-tilesensors", "aapc-1", 393);
    librenms_simple_ping_tile("container-tilesensors", "aapc-2", 394);
    librenms_simple_ping_tile("container-tilesensors", "adsync2019", 55);
    librenms_simple_ping_tile("container-tilesensors", "ansible", 29);
    librenms_simple_ping_tile("container-tilesensors", "blue", 73);
    librenms_simple_ping_tile("container-tilesensors", "busplanner", 30);
    librenms_simple_ping_tile("container-tilesensors", "chunkymonkey", 71);
    librenms_simple_ping_tile("container-tilesensors", "Core Switch", 2);
    librenms_simple_ping_tile("container-tilesensors", "dc-backups", 28);
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-lb", 108);
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-m", 109);
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-n1", 110);
    librenms_simple_ping_tile("container-tilesensors", "dc-kube-ext-n2", 111);
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix-1", 89);
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix-2", 90);
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix-3", 91);
    librenms_simple_ping_tile("container-tilesensors", "dc-nutanix", 88);
    librenms_simple_ping_tile("container-tilesensors", "dc-sql2019", 63);
    librenms_simple_ping_tile("container-tilesensors", "do-backups", 27);
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-it-1", 35);
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-it-2", 47);
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-it-3", 36);
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-ss-1", 37);
    librenms_simple_ping_tile("container-tilesensors", "do-dashboards-busgarage", 38);
    librenms_simple_ping_tile("container-tilesensors", "deploy-do", 32);
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-lb", 104);
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-m", 105);
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-n1", 106);
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-n2", 107);
    librenms_simple_ping_tile("container-tilesensors", "do-kube-int-storage", 389);
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix-1", 85);
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix-2", 86);
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix-3", 87);
    librenms_simple_ping_tile("container-tilesensors", "do-nutanix", 84);
    librenms_simple_ping_tile("container-tilesensors", "do-sql2019", 298);
    librenms_simple_ping_tile("container-tilesensors", "do-tv-1", 39);
    librenms_simple_ping_tile("container-tilesensors", "do-tv-2", 40);
    librenms_simple_ping_tile("container-tilesensors", "do-tv-3", 41);
    librenms_simple_ping_tile("container-tilesensors", "do-tv-4", 42);
    librenms_simple_ping_tile("container-tilesensors", "do-tv-5", 395);
    librenms_simple_ping_tile("container-tilesensors", "do3dprinter", 43);
    librenms_simple_ping_tile("container-tilesensors", "doors2019", 65);
    librenms_simple_ping_tile("container-tilesensors", "doorsws", 64);
    librenms_simple_ping_tile("container-tilesensors", "firepower FMC", 448);
    librenms_simple_ping_tile("container-tilesensors", "firepower-01", 443);
    librenms_simple_ping_tile("container-tilesensors", "firepower-02", 444);
    librenms_simple_ping_tile("container-tilesensors", "Outside FW switch", 889);
    librenms_simple_ping_tile("container-tilesensors", "Inside FW switch", 446);
    librenms_simple_ping_tile("container-tilesensors", "graylog", 388);
    librenms_simple_ping_tile("container-tilesensors", "JingleKeys", 77);
    librenms_simple_ping_tile("container-tilesensors", "kwiktag", 66);
    librenms_simple_ping_tile("container-tilesensors", "lemons", 72);
    librenms_simple_ping_tile("container-tilesensors", "librenms", 334);
    librenms_simple_ping_tile("container-tilesensors", "limes", 76);
    librenms_simple_ping_tile("container-tilesensors", "mongo", 59);
    librenms_simple_ping_tile("container-tilesensors", "navision", 67);
    librenms_simple_ping_tile("container-tilesensors", "ntp", 51);
    librenms_simple_ping_tile("container-tilesensors", "ovpn - monday", 68);
    librenms_simple_ping_tile("container-tilesensors", "papercut ", 49);
    librenms_simple_ping_tile("container-tilesensors", "prismcentral", 83);
    librenms_simple_ping_tile("container-tilesensors", "pienvmon-virt-01", 445);
    librenms_simple_ping_tile("container-tilesensors", "public-vlan-dns", 335);
    librenms_simple_ping_tile("container-tilesensors", "radius1", 50);
    librenms_simple_ping_tile("container-tilesensors", "redirectomatic", 75);
    librenms_simple_ping_tile("container-tilesensors", "sccm2012-dc", 53);
    librenms_simple_ping_tile("container-tilesensors", "sccm2012-do", 33);
    librenms_simple_ping_tile("container-tilesensors", "sftp", 302);
    librenms_simple_ping_tile("container-tilesensors", "smtprelay", 306);
    librenms_simple_ping_tile("container-tilesensors", "software", 305);
    librenms_simple_ping_tile("container-tilesensors", "streaming", 69);
    librenms_simple_ping_tile("container-tilesensors", "sync", 58);
    librenms_simple_ping_tile("container-tilesensors", "tftp", 80);
    librenms_simple_ping_tile("container-tilesensors", "UNMS", 60);
    librenms_simple_ping_tile("container-tilesensors", "veeamfree", 304);
    librenms_simple_ping_tile("container-tilesensors", "veeamone", 307);
    librenms_simple_ping_tile("container-tilesensors", "virtuallab", 61);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-001", 92);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-002", 93);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-003", 94);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-004", 95);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-005", 96);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-006", 97);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-007", 98);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-008", 99);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-009", 100);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-010", 101);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-011", 102);
    librenms_simple_ping_tile("container-tilesensors", "VIRTUAL-LAB-012", 103);
    librenms_simple_ping_tile("container-tilesensors", "vpn2", 54);
    librenms_simple_ping_tile("container-tilesensors", "wad1-lskysd", 308);
    librenms_simple_ping_tile("container-tilesensors", "wad2-lskysd", 309);
    librenms_simple_ping_tile("container-tilesensors", "Warrant", 78);
    librenms_simple_ping_tile("container-tilesensors", "web-internal", 79);
    librenms_simple_ping_tile("container-tilesensors", "webportal", 57);
    librenms_simple_ping_tile("container-tilesensors", "WTS2-DO", 70);
    librenms_simple_ping_tile("container-tilesensors", "xibo", 52);

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
