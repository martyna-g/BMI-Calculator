const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const metricBtn = document.getElementById("metric");
const imperialBtn = document.getElementById("imperial");
const calcBtn = document.getElementById("calculate");

let metric = true;
let result = 0;
let weightCategory = "";

metricBtn.addEventListener("click", changeToMetric);
imperialBtn.addEventListener("click", changeToImperial);
calcBtn.addEventListener("click", calculate);

function changeToMetric() {
  weightInput.placeholder = "KG";
  heightInput.placeholder = "CM";
  metric = true;
  weightInput.value = "";
  heightInput.value = "";
}

function changeToImperial() {
  weightInput.placeholder = "LB";
  heightInput.placeholder = "IN";
  metric = false;
  weightInput.value = "";
  heightInput.value = "";
}

function calculate() {
  let weight = weightInput.value;
  let height = heightInput.value;
  if (metric) {
    result = (weight / ((height / 100) * (height / 100))).toFixed(2);
  } else {
    result = (703 * (weight / (height * height))).toFixed(2);
  }
  printResult(weight, height);
}

function printResult(w, h) {
  let resultDiv = document.getElementsByClassName("result")[0];
  if (isNaN(result) || w <= 0 || h <= 0) {
    resultDiv.childNodes[1].innerHTML = "Please provide correct informations";
    resultDiv.childNodes[3].innerHTML = "Weight and height must be greater than 0";
    resultDiv.style.backgroundColor = "transparent";
    return;
  }
  if (result < 18.5) {
    weightCategory = "underweight";
    resultDiv.style.backgroundColor = "rgba(31, 150, 167, 0.6)";
  } else if (result < 25) {
    weightCategory = "a healthy weight";
    resultDiv.style.backgroundColor = "rgba(52, 206, 52, 0.6)";
  } else if (result < 30) {
    weightCategory = "overweight";
    resultDiv.style.backgroundColor = "rgba(235, 235, 84, 0.6)";
  } else {
    weightCategory = "obese";
    resultDiv.style.backgroundColor = "rgba(241, 22, 66, 0.6)";
  }
  resultDiv.childNodes[1].innerHTML = "BMI " + result;
  resultDiv.childNodes[3].innerHTML =
    "Your result suggests that you are " +
    "<br />" +
    "<span style='font-size: 2rem;'>" +
    weightCategory +
    "</span>";
}
