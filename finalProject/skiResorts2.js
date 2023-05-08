const apiKey = 'pk.eyJ1IjoiZW1raTIwNzYiLCJhIjoiY2xndmNlamU3MmxzcjNnbHVybnpvbTNmcyJ9.pIbaPl0DX3kNYy3jeeNZ8w';
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

// const map = L.map('map').setView([-105.889378, 38.888938], 10);

const map = L.map('map').setView([39.154314, -105.158811], 6.5);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 18,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     // id:
//     // tileSize: "30",
//     // zoomOffset: -1,
//     accessToken: apiKey,
// }).addTo(map);

// adding tiles
const tiles = L.tileLayer(tileURL,{apiKey});
tiles.addTo(map);

// L.marker([39.634034, -105.8718]).addTo(map);

//MAKES MARKERS SMALL GREEN CIRCLES
function pointToCircle(feature, latlng) { //makes the markers little green circles
    var myIcon = L.icon({
        iconUrl: "img/greenMarkers.png",
        iconSize: [16, 16],
    });
    var markerCircle = L.marker(latlng, {icon: myIcon});
    return markerCircle;
};

//READ DATA FOR MARKERS
    var markerGroup = L.geoJSON(coloradoSkiResorts, {
        onEachFeature: addPopups,
        pointToLayer: pointToCircle,
    });


// const marker = L.marker([39.634034, -105.8718]).addTo(map);