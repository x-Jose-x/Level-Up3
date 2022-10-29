document.write("<script type='text/javascript' src='ntc.js'></script>");

const fondo = document.querySelector(".fondo");
const btn = document.querySelector("button");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  var auxcolor = colorRandom();
  var ntcmacth = ntc.name(auxcolor);
  color.innerHTML = auxcolor + " " + ntcmacth[1];

  fondo.setAttribute("style", "background-color:" + auxcolor);
});

function colorRandom() {
  let symbol = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += symbol[Math.floor(Math.random() * 16)];
  }
  return color;
}