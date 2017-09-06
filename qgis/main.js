 /* 描画エリアのサイズ */
 var width = 1200;
 var height = 600;

 /* 表示領域の用意 */
 var svgContainer = d3.select("#mainBlock").append("svg")
.attr("width", width).attr("height", height);
 var mapContainer = svgContainer.append("g").attr("class", "mapBlock");
 var dataContainer = svgContainer.append("g").attr("class", "dataBlock");
 var legendContainer = svgContainer.append("g").attr("id", "legendBlock")
.attr(“transform”, “translate(“ + 800 + "," + 60 + “)") .attr("width", 300).attr("height", 60);