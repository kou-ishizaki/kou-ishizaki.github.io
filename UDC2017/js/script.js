//地図表示の設定
var map = L.map('map',{
    center: [34.393073, 132.452091],
    zoom: 16,
});


//子供食堂(CC:Childlen's Cafeteria)
var CC1 = L.marker([34.392499, 132.475163]).bindPopup('青い鳥'),
    CC2 = L.marker([34.361024, 132.463756]).bindPopup('くるり食堂');

map = L.layerGroup([CC1, CC2]);

//タイルレイヤの表示
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    }
).addTo(map);