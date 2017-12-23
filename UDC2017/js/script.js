//地図表示の設定
var map = L.map('map',{
    center: [34.6869, 135.80885],
    zoom: 14,
});


//タイルレイヤの表示
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    }
).addTo(map);