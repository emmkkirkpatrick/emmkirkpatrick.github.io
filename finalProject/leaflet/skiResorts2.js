const apiKey = 'pk.eyJ1IjoiZW1raTIwNzYiLCJhIjoiY2xndmNlamU3MmxzcjNnbHVybnpvbTNmcyJ9.pIbaPl0DX3kNYy3jeeNZ8w';
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

// ICON COLOR CHANGER
function iconColorer(feature) {
    if(feature.properties.passType == "Epic") {return "images/icon-epic.png";}
    else if(feature.properties.passType == "Ikon") {return "images/icon-ikon.png";}
    else if(feature.properties.passType == "Indy Pass") {return "images/icon-indy.png";}
    else {return "images/icon-independent.png";}

};

//  ICON SIZE CHANGER
function iconSizer(feature) {
    if(feature.properties.skiableAcres > 15000) {
        return [100, 100];
    }
    else if(feature.properties.skiableAcres < 1000) {
        return [10, 10];
    }
    else {
    var size = feature.properties.skiableAcres / 100;
    return [size,size];
}};

//MAKES MARKERS SMALL CIRCLES
function pointToCircle(feature, latlng) { //makes the markers little green circles
    var myIcon = L.icon({
        iconUrl: iconColorer(feature),
        iconSize: iconSizer(feature),
    });
    var markerCircle = L.marker(latlng, {icon: myIcon});
    return markerCircle;
};

//MAKE POPUPS AND ADD TEXT
function addPopups(feature, layer) { //creates popups with site info
    if (feature.properties && feature.properties.resort) {
      layer.bindPopup("<b>Resort Name: </b>" + feature.properties.resort+ 
                      "<br><b>Skiable Acres: </b> "+parseInt(feature.properties.skiableAcres)+"</br>"+ 
                      "<b>Average Snowfall (in): </b> "+ parseInt(feature.properties.avgSnowfall)+ 
                      "<br><b> Number of Lifts: </b>"+ parseInt(feature.properties.lifts)+"</br>"+
                      "<b>Number of Runs: </b>"+parseInt(feature.properties.runs)+
                      "<br><b>Pass Type: </b>"+ feature.properties.passType + "</br>")
    };
  };

// CREATING MAP
const map = L.map('map').setView([39.154314, -105.158811], 6.5);

// adding tiles
const tiles = L.tileLayer(tileURL,{apiKey});
tiles.addTo(map);

var resorts = L.geoJSON(resortData, {
    onEachFeature: addPopups,
    pointToLayer: pointToCircle,
});
map.addLayer(resorts);

     //Reset Zoom and Position of map
     (function() {
        var control = new L.Control({position:'topright'});
        control.onAdd = function(map) {
                var azoom = L.DomUtil.create('button','resetzoom');
                azoom.innerHTML = "Reset Zoom";
                L.DomEvent
                    .addListener(azoom, 'click', function() {
                        map.setView([39.154314, -105.158811], 6.5);
                    },azoom);
                return azoom;
            };
        return control;
    }()).addTo(map);

createTable()

// //READ DATA FOR MARKERS
//     var greenLayerGroup = L.geoJSON(re, {
//         onEachFeature: addPopups,
//         pointToLayer: pointToCircle,
//     });



// L.marker([39.634034, -105.8718]).addTo(map);






