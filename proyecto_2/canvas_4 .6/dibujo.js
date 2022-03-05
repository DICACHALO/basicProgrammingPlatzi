let lineasFigext = document.getElementById("texto_figext");
let fExteriores = document.getElementById("figuras_exteriores");
fExteriores.addEventListener("click", figurasExteriores);

let lineasThorizontal = document.getElementById("texto_thorizontal");
let tHorizontales = document.getElementById("triangulos_horizontales");
tHorizontales.addEventListener("click", triangulosHorizontales);

let lineastvertical = document.getElementById("texto_tvertical");
let tVerticales = document.getElementById("triangulos_verticales");
tVerticales.addEventListener("click", triangulosVerticales);

let dimension = document.getElementById("midibujo");
let ancho = dimension.width;
let lienzo = dimension.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfina) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfina);
  lienzo.stroke();
  lienzo.closePath();
}

function figurasExteriores() {
  let lineasExteriores = parseInt(lineasFigext.value);
  let espacio_exterios = ancho / lineasExteriores;
  l = 0;
  while (l < lineasExteriores) {
    yi = espacio_exterios * l;
    xf = espacio_exterios * (l + 1);
    dibujarLinea("black", 0, yi, xf, 300);
    l++;
  }

  for (l = 0; l < lineasExteriores; l++) {
    let xf = espacio_exterios + espacio_exterios * l;
    let yi = 300 - espacio_exterios * l;
    dibujarLinea("black", 0, yi, xf, 0);
  }

  for (l = 0; l < lineasExteriores; l++) {
    let xi = espacio_exterios * l;
    let yf = espacio_exterios * (l + 1);
    dibujarLinea("black", xi, 0, 300, yf);
  }

  for (l = 0; l < lineasExteriores; l++) {
    let xf = 290 - espacio_exterios * l;
    let yi = espacio_exterios + espacio_exterios * l;
    dibujarLinea("black", 300, yi, xf, 300);
  }
}

function triangulosHorizontales() {
  let lineasHorizontales = parseInt(lineasThorizontal.value);
  let espacio_horizontales = ancho / lineasHorizontales;
  for (let l = 0; l <= lineasHorizontales; l++) {
    let xi = espacio_horizontales * l;
    let xf = 300 - espacio_horizontales * l;
    dibujarLinea("red", xi, 0, xf, 300);
  }
}

function triangulosVerticales() {
  let lineasVerticales = parseInt(lineastvertical.value);
  let espacio_verticales = ancho / lineasVerticales;
  for (let l = 0; l <= lineasVerticales; l++) {
    let yi = espacio_verticales * l;
    let yf = 300 - espacio_verticales * l;
    dibujarLinea("green", 0, yi, 300, yf);
  }
}
