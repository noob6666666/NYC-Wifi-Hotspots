let data, info;

async function init() {
  const link = "Hotspots.json"; 
  info = await fetch(link);
  data = await info.json();

  document.getElementById("boroughs").innerHTML = fillDropDown("boroname");
  document.getElementById("boroughs2").innerHTML = fillDropDown("boroname");
  document.getElementById("providers").innerHTML = fillDropDown("provider");
  document.getElementById("providers2").innerHTML = fillDropDown("provider");

  displayAllData();
}

function displayAllData() {
  let build = "";
  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];
    build += `<div class="fitted card">
                <h3>${complaint.provider}</h3>
                <hr>
                <p>${complaint.city}</p>
                <p>${complaint.name}</p>
                <p>${complaint.zip}</p>
                <p>${complaint.type}</p>
              </div>`;
  }
  document.getElementById("result").innerHTML = `${data.length} Results found`;
  document.getElementById("output").innerHTML = build;
}

function fillDropDown(field) {
  let values = [];
  
  for (let i = 0; i < data.length; i++) {
    let value = data[i][field];
    if (value && values.indexOf(value) == -1) {
      values.push(value);
    }
  }
  
  values.sort();
  
  let build = `<option>Select Option</option>`;
  for (let i = 0; i < values.length; i++) {
    build += `<option>${values[i]}</option>`;
  }
  return build;
}

function filterByBorough() {
  const borough = document.getElementById("boroughs").value;
  if (borough == "Select Option") {
    displayAllData();
    return;
  }
  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];
    if (complaint.boroname == borough) {
      build += `<div class="fitted card">
                <h3>${complaint.provider}</h3>
                <hr>
                <p>${complaint.city}</p>
                <p>${complaint.name}</p>
                <p>${complaint.zip}</p>
                <p>${complaint.type}</p>
              </div>`;
      ct++;
    }
  }
  document.getElementById("result").innerHTML = `${ct} Results found`;
  document.getElementById("output").innerHTML = build;
}

function filterByProvider() {
  const provider = document.getElementById("providers").value;
  if (provider == "Select Option") {
    displayAllData();
    return;
  }
  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];
    if (complaint.provider == provider) {
      build += `<div class="fitted card">
                <h3>${complaint.provider}</h3>
                <hr>
                <p>${complaint.city}</p>
                <p>${complaint.name}</p>
                <p>${complaint.zip}</p>
                <p>${complaint.type}</p>
              </div>`;
      ct++;
    }
  }
  document.getElementById("result").innerHTML = `${ct} Results found`;
  document.getElementById("output").innerHTML = build;
}

function filterByBoroughAndProvider() {
  const borough = document.getElementById("boroughs2").value;
  const provider = document.getElementById("providers2").value;

  if (borough == "Select Option" || provider == "Select Option") {
    displayAllData();
    return;
  }

  let build = "";
  let ct = 0;

  for (let i = 0; i < data.length; i++) {
    let complaint = data[i];
    if (complaint.boroname == borough && complaint.provider == provider) {
      build += `<div class="fitted card">
                <h3>${complaint.provider}</h3>
                <hr>
                <p>${complaint.city}</p>
                <p>${complaint.name}</p>
                <p>${complaint.zip}</p>
                <p>${complaint.type}</p>
              </div>`;
      ct++;
    }
  }
  document.getElementById("result").innerHTML = `${ct} Results found`;
  document.getElementById("output").innerHTML = build;
}

window.onload = init;