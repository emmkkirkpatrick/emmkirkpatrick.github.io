//MAKE POPUPS AND ADD TEXT
function addPopups(feature, layer) { //creates popups with site info
    if (feature.properties && feature.properties.address) {
      layer.bindPopup("<b>Address: </b>" + feature.properties.address+ 
                      "<br><b>Cost Estimate: </b> $"+parseInt(feature.properties.COST_ESTIMATE)+"</br>"+ 
                      "<b>Income Bracket: </b> "+ feature.properties.MEDHINC_CAT+ 
                      "<br><b>Percentage Green Roof Cover: </b>"+ ((((feature.properties.gr_area/feature.properties.bldg_area)* 100) / 100).toFixed(2)*100)+"%"+"</br>"+
                      "<b>Total Green Roof Area: </b>"+parseInt(feature.properties.gr_area)+" sq/ft"+
                      "<br><b> Roof Height: </b>"+parseInt(feature.properties.heightroof)+" ft"+"</br>")
    };
  };



window.onload=function(){
    let map = L.map('map').setView([38.888938, -105.889378], 10);
    var skiMap = L.tileLayer('mapbox://styles/emki2076/clhe0mkwa00f701r85uzbf2le?&access_token=pk.eyJ1IjoiZW1raTIwNzYiLCJhIjoiY2xndmNlamU3MmxzcjNnbHVybnpvbTNmcyJ9.pIbaPl0DX3kNYy3jeeNZ8w', {
        maxZoom: 18, minZoom: 10,
        attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>',
    }).addTo(map);
    
    // let map = L.map('map').setView([-105.889378, 38.888938], 10);
    
    // mapboxgl.accessToken = 'pk.eyJ1IjoiZW1raTIwNzYiLCJhIjoiY2xndmNlamU3MmxzcjNnbHVybnpvbTNmcyJ9.pIbaPl0DX3kNYy3jeeNZ8w';
    
    // var skiMap = new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/emki2076/clhe0mkwa00f701r85uzbf2le',
    //   center: [-105.889378, 38.888938],
    //   zoom: 10,
    // })
    // .addTo(map);

    var pointLayerGroup = L.geoJSON(resortData, {
        onEachFeature: addPopups
    });

    (function() {
        var control = new L.Control({position:'topright'});
        control.onAdd = function(map) {
            var azoom = L.DomUtil.create('button','resetzoom');
                azoom.innerHTML = "Reset Zoom";
                L.DomEvent
                    .addListener(azoom, 'click', function() {
                        map.setView([38.888938, -105.889378], 11);
                    },azoom);
                return azoom;
            };
        return control;
    }()).addTo(map);
}
