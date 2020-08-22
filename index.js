const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const metricBtn = document.getElementById("metric");
const imperialBtn = document.getElementById("imperial");
const calcBtn = document.getElementById("calculate");

let metric = true;
let result = 0;

metricBtn.addEventListener("click", changeToMetric);
imperialBtn.addEventListener("click", changeToImperial);
calcBtn.addEventListener("click", calculate);

function changeToMetric() {
  weightInput.placeholder = "KG";
  heightInput.placeholder = "CM";
  metric = true;
  weightInput.value = '';
  heightInput.value = '';
}

function changeToImperial() {
  weightInput.placeholder = "LB";
  heightInput.placeholder = "IN";
  metric = false;
  weightInput.value = '';
  heightInput.value = '';
}

function calculate() {
  let weight = weightInput.value;
  let height = heightInput.value;
  if (metric) {
    result = (weight / ((height / 100) * (height / 100))).toFixed(2);
  } else {
    result = (703 * (weight / (height * height))).toFixed(2);
  }
}
