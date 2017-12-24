/*var childlencafeteria = L.layerGroup();

	L.marker([34.392499, 132.475163]).bindPopup('青い鳥').addTo(childlencafeteria),
	L.marker([34.361024, 132.463756]).bindPopup('くるり食堂').addTo(childlencafeteria);


var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

*/

//地図表示の設定
var map = L.map('map',{
    center: [34.393073, 132.452091],
    zoom: 16,
//    layers: [grayscale, childlencafeteria]
});


/*
var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
    "こども食堂": childlencafeteria
};

L.control.layers(baseLayers, overlays).addTo(map);


//子供食堂(CC:Childlen's Cafeteria)
//var CC1 = L.marker([34.392499, 132.475163]).bindPopup('青い鳥'),
//    CC2 = L.marker([34.361024, 132.463756]).bindPopup('くるり食堂');
//map = L.layerGroup([CC1, CC2]);

*/

//タイルレイヤの表示
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    }
).addTo(map);