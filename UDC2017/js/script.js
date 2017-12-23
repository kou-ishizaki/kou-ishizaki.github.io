//地図表示の設定
/*var map = L.map('map',{
    center: [34.393073, 132.452091],
    zoom: 18,
});
*/

var map = L.map('map').setView([34.393073, 132.452091], 18);


//タイルレイヤの表示
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>',
    }
).addTo(map);