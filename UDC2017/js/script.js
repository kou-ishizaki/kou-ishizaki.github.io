//var map = L.map('map');

//ピンを追加 childrencafeteria:cc
var cc1 = L.marker([34.392487, 132.475126]).bindPopup('<a href="https://www.facebook.com/tunago.p/" target="_blank">青い鳥</a>'),
    cc2 = L.marker([34.361050, 132.463745]).bindPopup('<a href="https://www.facebook.com/kururi2093/" target="_blank">くるり食堂</a>');

var childrencafeteria = L.layerGroup([
    cc1, cc2
]);

var pale = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
{id: 'palemap', attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>"}),
    blank = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png',
{id: 'blankmap', attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>"}),
    osm = L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
{ id: 'osmmap', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });

var map = L.map('map', {
    layers: [osm, childrencafeteria]
});

var baseMaps = {
    "淡色地図" : pale,
    "白地図"   : blank,
    "OSM japan"  : osm
};      

var overlayMaps = {
    "こども食堂" : childrencafeteria
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

map.setView([34.395247, 132.457659], 12);