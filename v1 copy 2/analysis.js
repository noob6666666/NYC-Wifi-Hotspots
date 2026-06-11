

let boroughLabels = ["Queens", "Brooklyn", "Manhattan", "Bronx", "Staten Island"];
let boroughCounts = ["Hotspots", 140, 203, 516, 105, 36];
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
  ["Queens", 140],
  ["Brooklyn", 203],
  ["Manhattan", 516],
  ["Bronx", 105],
  ["Staten Island", 36]
];


function init(){
  document.getElementById("chartmessage").innerHTML = "Click a chart button to begin.";
}


function boroughChart(type){
  let data = [boroughCounts];
  displayChart(data, "chart", type, boroughLabels);
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


function displayChart(data, chart_id, chart_type, categories){
  document.getElementById(chart_id).innerHTML = "";


  let options = {
    bindto: "#" + chart_id,
    data: {
      columns: data,
      type: chart_type
    }
  };


  c3.generate(options);
}






