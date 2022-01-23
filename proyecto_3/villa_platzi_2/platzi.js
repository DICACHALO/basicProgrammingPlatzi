var g = document.getElementById("granja"); // asignamos a la variable g nuestro canvas hecho en html
var papel = g.getContext("2d"); // asignamos a papel lo guardado en g pero en 2D
var px = 149; // posicion inicial en x donde se pondra la imagen del pollo
var py = 149;// posicion inicial en y donde se pondra la imagen del pollo
var movimiento = 10;// cada que el pollo se mueva se movera 10 pixeles
var cantidadvacas = aleatorio(1, 6);// creamos una variable para crear un numero aleatorio de vacas entre 1 y 6
var cantidadcerdos = aleatorio(1, 9);// creamos una variable para crear un numero aleatorio de cerdos entre 1 y 9

var teclas = {// creamos el grupo de variables dentro de teclas utilizando keyCode de las flechas visto en la consola
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {// creamos grupo de variables en fondo
  url: "tile.png",//url donde saldra la imagen
  cargaOK: false// ponemos que la carga es falso para que no carge antes de se llamada
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

fondo.imagen = new Image();// al grupo dentro de la variable fondo le ponemos.imagen solo como referencia de que se la caragara una nueva imagen usando new Image()
fondo.imagen.src = fondo.url;// a esta nueva imagen extramos la ruta que ya se ha determinado desde variable fondo usando fondo.url
fondo.imagen.addEventListener("load", cargarFondo);// a fondo.imagen le aegragamos (addEventListener) para saber que esta cargando la instrucciona anterior y este llama a la funcion cargarFondo

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

document.addEventListener("keydown", moverPollo);// agregamos un addEventListener para saber cuando se dejan oprimidas las teclas y se invoca a la funcion moverPollo

function cargarFondo()
{
  fondo.cargaOK = true;// el valor de cargaOK que era falso ahora es verdadero y cuando ocurra se llama a la funcion dibujar
  dibujar();
}

function cargarPollo(evento)
{
  pollo.cargaOK = true;
  dibujar();
  console.log(evento);
}

function cargarVacas(evento)
{
  vaca.cargaOK = true;
  dibujar();
  console.log(evento);
}

function cargarCerdos(evento)
{
  cerdo.cargaOK = true;
  dibujar();
  console.log(evento);
}

function dibujar()
{
  if(fondo.cargaOK)// si carga bien el fondo ejecuta la siguiente linea
  {
    papel.drawImage(fondo.imagen, 0, 0);//dibuja la imagen guardada en fondo.imagen en las cordenadas x = 0, y = 0,dentro de canvas
  }
  if(pollo.cargaOK)// si carga la imagen de pollo ejecuta la siguiente linea
  {
    papel.drawImage(pollo.imagen, px, py);
  }//dibuja la imagen guardada en pollo.imagen en las cordenadas x = px, y = py (definidas anteiormente),dentro de canvas
  if(vaca.cargaOK)// si la imagen de la vaca carga bien ejecuta lo siguiente
  {
    posXvacas = [];// variable para saber la posicion de las vacas en x, los [] indican que se puede guardar una variable o grupo de variables
    posYvacas = [];//variable para saber la posicion de las vacas en y
    for(v=0; v<cantidadvacas; v++)// ciclo for donde variable v de vacas inicia en 0, y debe ser < la cantidd de vacas indicada anteriormente y a v le suma 1 para hacer mas veces
    {
    var x = aleatorio(1,6);// variable x se le asigna un numero aleatorio entre 1 y 6, lo cual sera la posicion  en x
    var y = aleatorio(1,6);// variable y se le asigna un numero aleatorio entre 1 y 6, lo cual sera la posicion  en y
    var x = x * 70;// se le multiplica por 70 para que las vacas no se pinten una sobre otra
    var y = y * 70;
    posXvacas[v] = x;// a posXvacas le asignamos [v] para saber el numero de vacas y la ultima posicion en x
    posYvacas[v] = y; // a posXvacas le asignamos [v] para saber el numero de vacas y la ultima posicion en y
    papel.drawImage(vaca.imagen, x, y);//dibuja el numero de vacas en la posicon x y y hecha de manera aleatoria
    }
    if(cerdo.cargaOK)
    {
      posXcerdos = [];
      posYcerdos = [];
      for(c=0; c<cantidadcerdos; c++)
      {
        var x = aleatorio(0, 4);
        var y = aleatorio(0, 4);
        var x = (x * 80) - 5;
        var y = (y * 80) - 5;
        posXcerdos[c] = x;
        posYcerdos[c] = y;
        papel.drawImage(cerdo.imagen, x, y);
      }
    }
  }
}
function reDibujo() // dibuja el fondo en su posicion original
{
  papel.drawImage(fondo.imagen, 0, 0);
  for (v=0; v < cantidadvacas; v++)
  {
    papel.drawImage(vaca.imagen, posXvacas[v], posYvacas[v]);
  }// redibuja el mimsmo numero de vacas en la ultima posicion conocida
  for (c=0; c < cantidadcerdos; c++)
  {
    papel.drawImage(cerdo.imagen, posXcerdos[c], posYcerdos[c]);
  } // redibuja el mimsmo numero de cerdos en la ultima posicion conocida
  if(pollo.cargaOK)
  {
    papel.drawImage(pollo.imagen, px, py);
  }// redibuja al pollo en su ultima posicion conocida
}

function moverPollo(evento)
{
  if(evento.keyCode == teclas.UP)
  {// cuando el evento detecte que es igual a flecha hacia arriba ejecuta lo siguiente
    papel.drawImage(pollo.imagen, px, py - movimiento);// dibuja la imagen del pollo  en la posicion en x, posicion en y - los 10 pixeles del movimiento
    py = py - movimiento;// a py le asignamos su ulitmo valor conocido
    reDibujo();// llamamos a la funcion reDibujo
  }
  if(evento.keyCode == teclas.DOWN)
  {//cuando el evento detecte que es igual a flecha hacia abajo ejecuta lo siguiente
    papel.drawImage(pollo.imagen, px, py + movimiento);//dibuja la imagen del pollo  en la posicion en x, posicion en y + los 10 pixeles del movimiento
    py = py + movimiento;// a py le asignamos su ultimo valor conocido
    reDibujo(); // llamamos a la funcion reDibujo
  }
  if(evento.keyCode == teclas.LEFT)
  {// cuando el evento detecte que es igual a flecha hacia la izquierda ejecuta lo siguiente
    papel.drawImage(pollo.imagen, px - movimiento, py);//dibuja la imagen del pollo  en la posicion en x - 10 pixeles, posicion en y
    px = px - movimiento;// a px le asginams su ultimo valor conocido
    reDibujo(); // llamamos a la funcion reDibujo
  }
  if(evento.keyCode == teclas.RIGHT)
  {// cuando el evento detecte que es igual a flecha hacia la derecha ejecuta lo siguiente
    papel.drawImage(pollo.imagen, px + movimiento, py); //dibuja la imagen del pollo  en la posicion en x + 10 pixels, posicion en y
    px = px + movimiento; // a px le asginams su ultimo valor conocido
    reDibujo() // llamamos a la funcion reDibujo
  }
}

function aleatorio(min, maxi) // funcion que determina un punto aleatorio
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}