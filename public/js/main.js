var map;

function initMap() {

    map = getMap();

    // var kmlLayer = new google.maps.KmlLayer();

    var src = 'https://dl.dropboxusercontent.com/s/2nztszr17gnr4jm/LROP%20to%20EGLL.kml?dl=0';
    var kmlLayer = new google.maps.KmlLayer(src, {
            suppressInfoWindows: true,
            preserveViewport: false,
            map: map
    });

/*     var myParser = new geoXML3.parser({
        map: map
    });

    myParser.parse('E:\\Facultate\\Anul 4\\SEM II\\ATM\\programare\\test.kml'); */
}