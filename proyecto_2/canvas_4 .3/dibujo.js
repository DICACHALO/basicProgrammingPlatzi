var cajalineas = document.getElementById('lacajalineas');
var boton = document.getElementById('elbotonlineas');
var d = document.getElementById('eldibujo');
var ancho = d.width / 2;
var lienzo = d.getContext('2d');

function dibujaLinea(color, xIzquierda, yArriba, xDerecha, yAbajo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xIzquierda, yArriba);
  lienzo.lineTo(xDerecha, yAbajo);
  lienzo.stroke();
  lienzo.closePath();
}

function clicBoton() {
  lineas = parseInt(cajalineas.value);
  delta = (ancho / lineas);

  for (l = 0; l < ancho; l = l + delta) {
    dibujaLinea('springgreen', l, ancho, ancho, ancho - delta - l);
    dibujaLinea('yellow', ancho, ancho + delta + l, ancho - l, ancho);
    dibujaLinea('orangered', l, ancho, ancho, ancho + delta + l);
    dibujaLinea('deepskyblue', ancho - l, ancho, ancho, ancho - delta - l);
    console.log("Esta es la lína número " + l);
  }
  dibujaLinea('springgreen', ancho, 0, ancho, ancho);
  dibujaLinea('yellow', ancho, ancho, ancho, ancho);
  dibujaLinea('orangered', 0, ancho, ancho, ancho);
  dibujaLinea('deepskyblue', ancho, ancho, ancho, ancho);
  //dibujaLinea(“azure”,ancho, 0, ancho, 2 * ancho );
  //dibujaLinea(“azure”,0,ancho, 2 * ancho , ancho);
  //alert(“Suave con ese mouse”); console.log(texto.value);
}

boton.addEventListener('click', clicBoton);