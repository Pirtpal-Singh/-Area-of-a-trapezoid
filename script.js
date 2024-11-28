// Area of trapezoid
// Event listener
document.getElementById("btn").addEventListener("click", calcArea);
// Var Inputs fields
var input1El = document.getElementById("top-base");
var input2El = document.getElementById("bottom-base");
var input3El = document.getElementById("height");
// Event Function
function calcArea() {
  // input
  var b1 = +input1El.value;
  var b2 = +input2El.value;
  var h = +input3El.value;
  // Process
  var area = ((b1 + b2) * h) / 2;
  var a = area.toFixed(3);
  // Clear inputs
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";
  // output
  document.getElementById("area-out").innerHTML = area;
  //  Add picture
  var picContainer = document.getElementById("pic-container");
  picContainer.innerHTML =
    "<img src='img/download-removebg-preview.png' width='30px' height='30px'/>";

  //  Green border
  document.getElementById("area-out").style.border = "2px solid green";
}
//Dropdown units

var unitDropDown = document.getElementById("units");
unitDropDown.addEventListener("change", unit123);
function unit123() {
  // Read pizza size
  let unit12 = unitDropDown.value;

  //   Make output sentence
  let output = unit12;

  //   Ouput to site

  document.getElementById("size1").innerHTML = output;
}
