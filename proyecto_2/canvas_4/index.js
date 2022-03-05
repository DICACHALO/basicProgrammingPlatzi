let textUser = document.getElementById("myText");
let btnShowObject = document.getElementById("btnShow");
let btnClearObject = document.getElementById("btnClear");
let d = document.getElementById("myDrawing");
let ancho = d.width;
let lienzo = d.getContext("2d");
let txtColorObject = document.getElementById("txtColor");
let desiredColor = txtColorObject.value;
let radSquareObject = document.getElementById("radSquare");

function drawLine(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function drawCanvasDesign() {
  let lineas = parseInt(textUser.value);
  let l = 0;
  let yi, xf;
  let myColor = desiredColor;
  let espacio = ancho / lineas;

  if (radSquareObject.checked == true) {
    for (l = 0; l < lineas; l++) {
      yi = espacio * l;
      xf = espacio * (l + 1);
      drawLine(myColor, 0, yi, xf, 300);
    }

    drawLine(myColor, 1, 1, 1, ancho - 1);
    drawLine(myColor, 1, 299, 299, 299);
  } else {
    let orb = parseInt(textUser.value);
    for (rot = 0; rot <= Math.PI; rot = rot + Math.PI / orb) {
      drawStar(rot);
    }
  }
}

function drawStar(rot) {
  lienzo.beginPath();
  lienzo.strokeStyle = desiredColor;
  lienzo.ellipse(150, 150, 20, 85, rot, 0, 2 * Math.PI);
  lienzo.stroke();
  lienzo.closePath();
}

function clearMyCanvas() {
  lienzo.clearRect(0, 0, 300, 300); // Limpia el lienzo para volver a dibujar
}

btnShowObject.addEventListener("click", drawCanvasDesign); //Manejador de eventos
btnClearObject.addEventListener("click", clearMyCanvas);
