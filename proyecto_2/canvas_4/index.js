var texto = document.getElementById("myText");
var boton = document.getElementById("myButton");
boton.addEventListener("click", dibujoPorClick ); //Manejador de eventos

var d = document.getElementById("myDrawing");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  lienzo.clearRect(0,0,300,300); // Limpia el lienzo para volver a dibujar
  var lineas = parseInt(texto.value); //Lineas es igual al valor que hay en la caja de texto proporcionado por el usuario, que se ha convertido en entero por parseInt
  var l = 0;
  var yi, xf;
  var myColor = "#FAA";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(myColor, 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  dibujarLinea(myColor, 1,1,1,ancho-1);
  dibujarLinea(myColor, 1,299,299,299);
}