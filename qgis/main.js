/* 描画エリアのサイズ */
var width = 1200;
var height = 600;



/* 地図投影法 */
var projection = d3.geo.mercator() .scale(60000)
.center([139.330663, 35.71939]); //中心の座標。経度緯度の順。値は多摩川緑地福生南公園。

/* 地形データをSVGに変換するときに呼び出す */
var path = d3.geo.path().projection(projection);

/* 表示領域の用意 */
var svgContainer = d3.select("#mainBlock").append("svg").attr("width", width).attr("height", height);

var mapContainer = svgContainer.append("g").attr("class", "mapBlock");
var dataContainer = svgContainer.append("g").attr("class", "dataBlock");
var legendContainer = svgContainer.append("g").attr("id", "legendBlock")
                      .attr('transform', 'translate(' + 1100 + "," + 60 + ')')
                      .attr("width", 300).attr("height", 60);

/* スケール */
var colorScale = d3.scale.linear().domain([0, 1000000]).range(["#FFFFD9", "#081D58"]);

/* --------------------
外部ファイルの読み込み
-------------------- */ queue()
.defer(d3.json, "tokyo.topojson")
.defer(d3.tsv, "population.tsv")
.await(mainFunc);

/* --------------------
ファイル読み込み後に実行するメインの処理
-------------------- */
function mainFunc(_error, mapdata, themedata) {
    if (_error){ console.log(_error); } /* ... */
};



/* 地図とデータpopulationの描画の描画 */ function drawMap() {
    var _prev = new Array();
    //初回のみ実行
    mapContainer.selectAll("path")
    .data(topojson.feature(mapdata, mapdata.objects.Tokyo).features) .enter()
    .append("path")
    .attr("id", function(d) {
    return d.properties.N03_007; })
    .attr("d", path)
    .style("stroke", "#333") .style("stroke-width", "0.2px") .style("fill", "#FFF");

    //プルダウンの変更がある度に実行
    mapContainer.selectAll("path") .style("fill", function(d, i) {
    //変化させる前の色
    return colorScale( _prev[i] );
    })
    .transition() .duration(2000) .style("fill", function(d, i) {
    //変化させた後の色
    _value = 0;
    _prev[i] = JSON.parse(JSON.stringify(_value)); _prev[i] = parseInt(_prev[i]);
    return colorScale( _value );
    }); };

drawMap(); //一時的に記述しておく