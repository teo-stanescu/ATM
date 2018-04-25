var map;

function initMap() {

    map = getMap(); //in GetMap.js; map customization

    var src = 'https://dl.dropboxusercontent.com/s/m59iii15yt4cr4u/route_adt2.kml?dl=0'; //File uploaded to dropbox in order to de downloaded
    var kmlLayer = new google.maps.KmlLayer(src, {  //define kmlLayer to add to map
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
    });

    google.maps.event.addListener(kmlLayer, "click", showInContentWindow);
}


function showInContentWindow(kmlEvent) {
    var content = kmlEvent.featureData.infoWindowHtml; //retrive content of clicked element
    var wpName = content.split("h3")[1].replace('<', '').replace('>', '').replace('/', '');   //get name from string
    var infoWindow = new google.maps.InfoWindow({
        content: wpName
    });

    infoWindow.setPosition(kmlEvent.latLng);
    infoWindow.setOptions({
        pixelOffset: kmlEvent.pixelOffset,
        content: wpName
    });
    infoWindow.open(map);
}