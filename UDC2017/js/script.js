//地図表示の設定
var map = L.map('map',{
    center: [34.393073, 132.452091],
    zoom: 18,
});


//タイルレイヤの表示
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    }
).addTo(map);