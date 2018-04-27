var map;

function initMap() {

    map = getMap(); //in GetMap.js; map customization

    var src = 'https://dl.dropboxusercontent.com/s/m59iii15yt4cr4u/route_adt2.kml?dl=0'; //File uploaded to dropbox in order to de downloaded
    var kmlLayer = new google.maps.KmlLayer(src, {  //define kmlLayer to add to map
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
    });
    plotVeticalProfile (kmlLayer);
    google.maps.event.addListener(kmlLayer, "click", showInContentWindow);
}

function plotVeticalProfile (kmlEvent) {
    var ctx = document.getElementById("verticalProfile");  
    var time = new Array;
    var flightLevel = new Array;
    myData.features.forEach(function (element) {
        if (element.properties.Description) time.push(element.properties.Description.split(" ")[2].replace(".",":").replace(".",":"));
        if (element.properties.Description) flightLevel.push(element.properties.Description.split(" ")[3]);
    });
    var chart =  new Chart(ctx, {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                label: 'Flight Level',
                data: flightLevel,
                backgroundColor: '#E6AC60',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function showInContentWindow(kmlEvent) {
    
    var wpName = kmlEvent.featureData.name;   //get name from string
    var wpDescription = parseDescription(kmlEvent.featureData.description);
    var infoWindow = new google.maps.InfoWindow({
        
    });

    infoWindow.setPosition(kmlEvent.latLng);
    infoWindow.setOptions({
        pixelOffset: kmlEvent.pixelOffset,
        content: wpName + "<br>Speed: " + wpDescription.speed + "<br>Heading: " + wpDescription.heading + "<br>TimeStamp: " + wpDescription.timeStamp
    });
    infoWindow.open(map);

    plotVeticalProfile(kmlEvent);
}

function parseDescription(description)
{
    var splitUp = description.split(" ");
    var data = {
        speed: parseInt(splitUp[0]),
        heading: parseFloat(splitUp[1]),
        timeStamp: "+" + splitUp[2].replace(".",":")
    }

    return data;
}