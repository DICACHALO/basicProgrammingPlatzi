//Alisto el contexto del canvas
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverPersona);

var xPersona = 0;
var yPersona = 420;

//Creo JSON de cada objeto
var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var persona = {
  url: "persona.png",
  cargaOK: false
};

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}; //Objeto literal

//Número aleatorio de animales
var cantidad1 = aleatorio(1, 6);
var cantidad2 = aleatorio(1, 10);
var cantidad3 = aleatorio(1, 8);

//Creo las imágenes de mis objetos
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

persona.imagen = new Image();
persona.imagen.src = persona.url;
persona.imagen.addEventListener("load", cargarPersona);

//Funciones para que se cargen los objetos en el servidor
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPersona()
{
  persona.cargaOK = true;
  dibujar();
}

//Dibujo en el canvas iniciando por el fondo, para que luego se dibujen los demás objetos
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad1);
    for(var v=0; v < cantidad1; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
    for(var v=0; v < cantidad2; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
    for(var v=0; v < cantidad3; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(cerdo.imagen, x, y);
    }

    papel.drawImage(persona.imagen, xPersona, yPersona);
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}


function moverPersona(evento)
{
  var movimiento = 1; //Cantidad de pixeles
  switch(evento.keyCode)
  {
    case teclas.UP:
      yPersona = yPersona - movimiento;
      dibujar();
    break;
    case teclas.DOWN:
       yPersona = yPersona + movimiento;     
      dibujar();
    break;
    case teclas.LEFT:
       xPersona = xPersona - movimiento;      
      dibujar();
    break;
    case teclas.RIGHT:
      xPersona = xPersona + movimiento;    
      dibujar();
    break;
  }
 }