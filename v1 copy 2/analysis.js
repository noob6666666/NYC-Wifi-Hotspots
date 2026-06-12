

let boroughLabels = ["Manhattan", "Bronx", "Brooklyn", "Queens", "Staten Island"];
let boroughCounts = ["Hotspots", 516, 105, 203, 140, 36];
let wifiTypeData = [
  ["Limited Free", 177],
  ["Free", 823]
];
let providerData = [
  ["LinkNYC - Citybridge", 558],
  ["SPECTRUM", 102],
  ["Transit Wireless", 85],
  ["ALTICEUSA", 75],
  ["Harlem", 30],
  ["Downtown Brooklyn", 29]
];
let boroughDonutData = [
  ["Manhattan", 516],
  ["Bronx", 105],
  ["Brooklyn", 203],
  ["Queens", 140],
  ["Staten Island", 36]
];


function init(){
  document.getElementById("chartmessage").innerHTML = "Click a chart button to begin.";
}


function boroughChart(type){
  document.getElementById("chart").innerHTML = "";
  c3.generate({
    bindto: "#chart",
    data: { columns: [boroughCounts], type: type },
    axis: { x: { type: "category", categories: boroughLabels } }
  });
  document.getElementById("chartmessage").innerHTML = "Showing hotspots by borough (" + type + " chart).";
}


function typeChart(){
  displayChart(wifiTypeData, "chart", "pie");
  document.getElementById("chartmessage").innerHTML = "Showing Wi-Fi type breakdown (pie chart).";
}


function providerChart(){
  displayChart(providerData, "chart", "pie");
  document.getElementById("chartmessage").innerHTML = "Showing top 6 providers (pie chart).";
}


function boroughDonut(){
  displayChart(boroughDonutData, "chart", "donut");
  document.getElementById("chartmessage").innerHTML = "Showing borough share (doughnut chart).";
}


function displayChart(data, chart_id, chart_type){
  document.getElementById(chart_id).innerHTML = "";
  c3.generate({
    bindto: "#" + chart_id,
    data: { columns: data, type: chart_type }
  });
}






