//Creando una función
var d = document.getElementById("myDrawing"); 
var lienzo = d.getContext("2d"); 

//Las funciones siempre se leen primero en JavaScript no importa el lugar en que se ubiquen

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath(); //Inicio trazo
  lienzo.strokeStyle = color; //Color de linea
  lienzo.moveTo(xinicial, yinicial); //mover el lápiz a dónde va a arrancar la línea
  lienzo.lineTo(xfinal, yfinal); //trazar una línea
  lienzo.stroke(); //estilo
  lienzo.closePath(); //Cerrar el trazo 
}

//Para invocar la función
//De forma manual hacemos un dibujo línea por línea

dibujarLinea("#AAF", 0, 0, 10, 300);
dibujarLinea("#AAF", 0, 10, 20, 300);
dibujarLinea("#AAF", 0, 20, 30, 300);
dibujarLinea("#AAF", 0, 30, 40, 300);
dibujarLinea("#AAF", 0, 40, 50, 300);
dibujarLinea("#AAF", 0, 50, 60, 300);
dibujarLinea("#AAF", 0, 60, 70, 300);
dibujarLinea("#AAF", 0, 70, 80, 300);
dibujarLinea("#AAF", 0, 80, 90, 300);
dibujarLinea("#AAF", 0, 90, 100, 300);
dibujarLinea("#AAF", 0, 100, 110, 300);
dibujarLinea("#AAF", 0, 110, 120, 300);
dibujarLinea("#AAF", 0, 120, 130, 300);
dibujarLinea("#AAF", 0, 130, 140, 300);
dibujarLinea("#AAF", 0, 140, 150, 300);
dibujarLinea("#AAF", 0, 150, 160, 300);
dibujarLinea("#AAF", 0, 160, 170, 300);
dibujarLinea("#AAF", 0, 170, 180, 300);
dibujarLinea("#AAF", 0, 180, 190, 300);
dibujarLinea("#AAF", 0, 190, 200, 300);
dibujarLinea("#AAF", 0, 200, 210, 300);
dibujarLinea("#AAF", 0, 210, 220, 300);
dibujarLinea("#AAF", 0, 220, 230, 300);
dibujarLinea("#AAF", 0, 230, 240, 300);
dibujarLinea("#AAF", 0, 240, 250, 300);
dibujarLinea("#AAF", 0, 250, 260, 300);
dibujarLinea("#AAF", 0, 260, 270, 300);
dibujarLinea("#AAF", 0, 270, 280, 300);
dibujarLinea("#AAF", 0, 280, 290, 300);
dibujarLinea("#AAF", 0, 290, 300, 300);

//Sección contraria
dibujarLinea("#AAF", 300,10,0,0);
dibujarLinea("#AAF", 300,20,10,0);
dibujarLinea("#AAF", 300,30,20,0);
dibujarLinea("#AAF", 300,40,30,0);
dibujarLinea("#AAF", 300,50,40,0);
dibujarLinea("#AAF", 300,60,50,0);
dibujarLinea("#AAF", 300,70,60,0);
dibujarLinea("#AAF", 300,80,70,0);
dibujarLinea("#AAF", 300,90,80,0);
dibujarLinea("#AAF", 300,100,90,0);
dibujarLinea("#AAF", 300,110,100,0);
dibujarLinea("#AAF", 300,120,110,0);
dibujarLinea("#AAF", 300,130,120,0);
dibujarLinea("#AAF", 300,140,130,0);
dibujarLinea("#AAF", 300,150,140,0);
dibujarLinea("#AAF", 300,160,150,0);
dibujarLinea("#AAF", 300,170,160,0);
dibujarLinea("#AAF", 300,180,170,0);
dibujarLinea("#AAF", 300,190,180,0);
dibujarLinea("#AAF", 300,200,190,0);
dibujarLinea("#AAF", 300,210,200,0);
dibujarLinea("#AAF", 300,220,210,0);
dibujarLinea("#AAF", 300,230,220,0);
dibujarLinea("#AAF", 300,240,230,0);
dibujarLinea("#AAF", 300,250,240,0);
dibujarLinea("#AAF", 300,260,250,0);
dibujarLinea("#AAF", 300,270,260,0);
dibujarLinea("#AAF", 300,280,270,0);
dibujarLinea("#AAF", 300,290,280,0);
dibujarLinea("#AAF", 300,300,290,0);