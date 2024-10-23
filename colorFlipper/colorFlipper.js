let colorDisplay = document.getElementById("color-code");

let colorArray = [
  "#00FFFF",
  "#000000",
  "#0000FF",
  "#8A2BE2",
  "#A52A2A",
  "#DEB887",
  "#5F9EA0",
  "#7FFF00",
  "#D2691E",
  "#DC143C",
];

let len = colorArray.length;

function changeColor() {
  let randomIndex = Math.floor(Math.random() * len);
  document.getElementById("color-code").innerText = colorArray[randomIndex];
  document.body.style.background = colorArray[randomIndex];

  document.getElementById("color_btn").style.background =
    colorArray[randomIndex];
}
