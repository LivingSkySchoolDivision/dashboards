/* ******************************************** */
/* * Document onLoad stuff                    * */
/* ******************************************** */
$(document).ready(function(){    
    guests_init('guests-active-count', 'https://guests.lskysd.ca/json/');
    inout_group_init('inout-container', 'https://inoutapi.lskysd.ca/GroupMembers/5');

    
    datatile_large_website_init("container-tilesensors-2", "GOOGLE", 1);
    datatile_large_website_init("container-tilesensors-2", "LIVINGSKYSD.CA", 2);
    datatile_large_website_init("container-tilesensors-2", "L4U", 4);
    datatile_large_website_init("container-tilesensors-2", "WEBPORTAL", 6);
    datatile_large_website_init("container-tilesensors-2", "MSS", 5);
    datatile_large_website_init("container-tilesensors-2", "EDSBY", 7);
        
    datatile_small_init("container-tilesensors", "ADFS2019-1", 234);
    datatile_small_init("container-tilesensors", "ADFS2019-2", 235);
    datatile_small_init("container-tilesensors", "adsync", 236);
    datatile_small_init("container-tilesensors", "ansible", 257);
    datatile_small_init("container-tilesensors", "archive", 274);
    datatile_small_init("container-tilesensors", "busplanner", 275);
    datatile_small_init("container-tilesensors", "chunkymonkey", 296);
    datatile_small_init("container-tilesensors", "Cisco TMS SQL", 277);
    datatile_small_init("container-tilesensors", "Cisco TMS", 276);
    datatile_small_init("container-tilesensors", "confluence", 292);
    datatile_small_init("container-tilesensors", "dc-backups", 87);
    datatile_small_init("container-tilesensors", "do-dashboards-it-1", 297);
    datatile_small_init("container-tilesensors", "do-dashboards-it-2", 298);
    datatile_small_init("container-tilesensors", "do-dashboards-ss-1", 299);
    datatile_small_init("container-tilesensors", "dc-kube-ext-lb", 250);
    datatile_small_init("container-tilesensors", "dc-kube-ext-m", 251);
    datatile_small_init("container-tilesensors", "dc-kube-ext-n1", 252);
    datatile_small_init("container-tilesensors", "dc-kube-ext-n2", 253);
    datatile_small_init("container-tilesensors", "dc-nutanix-1", 264);
    datatile_small_init("container-tilesensors", "dc-nutanix-2", 265);
    datatile_small_init("container-tilesensors", "dc-nutanix-3", 266);
    datatile_small_init("container-tilesensors", "dc-nutanix", 263);
    datatile_small_init("container-tilesensors", "dc-sql2019", 278);
    datatile_small_init("container-tilesensors", "do-deploy", 155);
    datatile_small_init("container-tilesensors", "do-kube-int-lb", 246);
    datatile_small_init("container-tilesensors", "do-kube-test-m", 300);
    datatile_small_init("container-tilesensors", "do-kube-test-n1", 301);
    datatile_small_init("container-tilesensors", "do-kube-int-m", 247);
    datatile_small_init("container-tilesensors", "do-kube-int-n1", 248);
    datatile_small_init("container-tilesensors", "do-kube-int-n2", 249);
    datatile_small_init("container-tilesensors", "do-nutanix-1", 260);
    datatile_small_init("container-tilesensors", "do-nutanix-2", 261);
    datatile_small_init("container-tilesensors", "do-nutanix-3", 262);
    datatile_small_init("container-tilesensors", "do-nutanix", 259);
    datatile_small_init("container-tilesensors", "do-sql2019", 279);
    datatile_small_init("container-tilesensors", "docker-registry", 302);
    datatile_small_init("container-tilesensors", "doors2019", 281);
    datatile_small_init("container-tilesensors", "doorsws", 280);
    datatile_small_init("container-tilesensors", "dropoff", 270);
    datatile_small_init("container-tilesensors", "helpdesk", 291);
    datatile_small_init("container-tilesensors", "InfectionMonkey", 254);
    datatile_small_init("container-tilesensors", "jenkins", 239);
    datatile_small_init("container-tilesensors", "JingleKeys", 267);
    datatile_small_init("container-tilesensors", "kube-storage-1", 287);
    datatile_small_init("container-tilesensors", "kube-storage-2", 288);
    datatile_small_init("container-tilesensors", "kube-storage-3", 289);
    datatile_small_init("container-tilesensors", "kube-storage-4", 290);
    datatile_small_init("container-tilesensors", "kwiktag", 282);
    datatile_small_init("container-tilesensors", "l4u", 238);
    datatile_small_init("container-tilesensors", "mongo", 255);
    datatile_small_init("container-tilesensors", "navision", 283);
    datatile_small_init("container-tilesensors", "nscnet", 133);
    datatile_small_init("container-tilesensors", "ntp", 136);
    datatile_small_init("container-tilesensors", "ovpn - monday", 284);
    datatile_small_init("container-tilesensors", "ovpn - wednesday", 285);
    datatile_small_init("container-tilesensors", "papercut ", 86);
    datatile_small_init("container-tilesensors", "prismcentral", 258);
    datatile_small_init("container-tilesensors", "public", 286);
    datatile_small_init("container-tilesensors", "radius", 90);
    datatile_small_init("container-tilesensors", "sccm2012-dc", 145);
    datatile_small_init("container-tilesensors", "sis", 294);
    datatile_small_init("container-tilesensors", "streaming", 293);
    datatile_small_init("container-tilesensors", "sync", 242);
    datatile_small_init("container-tilesensors", "UNMS", 256);
    datatile_small_init("container-tilesensors", "vpn2", 233);
    datatile_small_init("container-tilesensors", "Warrant", 268);
    datatile_small_init("container-tilesensors", "web-internal", 269);
    datatile_small_init("container-tilesensors", "webportal", 241);
    datatile_small_init("container-tilesensors", "WTS2-DO", 295);
    datatile_small_init("container-tilesensors", "xibo", 137);


    datatile_update();


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
}, 60000);
