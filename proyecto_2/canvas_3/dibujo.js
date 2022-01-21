//Creando una función
var d = document.getElementById("dibujito"); 
var lienzo = d.getContext("2d"); 
var lineas = 30; //Este es el límite
var l = 0; //Esta variable contará las líneas - VARIABLE ITERADORA
var l2 = 0;
var yi, xf; //Variables vacias que vamos a usar en el ciclo, son las que cambian en cada iteración


while(l<lineas){
	yi = 10 * l; //10 porque son 10 pixeles
	xf = 10 * (l + 1) //Para que dé el efecto de línea que va moviendose y eventualmente se vuelve una curva
	dibujarLinea("#AAF", 0, yi,xf,300); //Solo dos se van a ir moviendo
	dibujarLinea("#AAF", 300, yi,xf,0); //Con esta línea me ahorro hacer otro while como el de abajo
  console.log("Linea " + l); //Para revisar qué está pasando con l en consola
	l=l+1;
}

/*Haciendo un dibujo contrario
while(l2<lineas){
  yi = 10 * (l2 + 1); //10 porque son 10 pixeles
  xf = 10 * l2; //Para que dé el efecto de línea que va moviendose y eventualmente se vuelve una curva
  dibujarLinea("#AAF", 300,yi,xf,0); //Solo dos se van a ir moviendo
  l2++;
}
*/


//Haciendo unos bordecitos
dibujarLinea("#AFA", 1,1,1,299); //En 1 para que realmente se vea el borde, para que se vea el pixel completo, por eso no inicia en 0
dibujarLinea("#AFA", 1,299,299,299); //299 por la misma razón, en cero no se ve todo el píxel - anti aligning

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath(); //Inicio el trazo. No se le pasa ningún parámetro. Sólo se le indica que debe arrancar. 'Invocar'
  lienzo.strokeStyle = color; //Color de linea. Es un atributo del objeto lienzo.
  lienzo.moveTo(xinicial, yinicial); //mover el lápiz a dónde va a arrancar la línea, posición en x y en y. En este caso sí hay múltiples parámetros
  lienzo.lineTo(xfinal, yfinal); //función de trazar una línea
  lienzo.stroke(); //Dibujar con el estilo que se ha decidido
  lienzo.closePath(); //Cerrar el camino o trazo y levantar nuevamente el lápiz. No se le pasa ningún parámetro. Sólo se le indica que debe arrancar
}



/* Hacemos una línea cada 10 pixeles de ancho
El límite son 30 líneas

dibujarLinea("#AAF", 0, 0,10,300); // l = 0 porque la inicializo en 0
dibujarLinea("#AAF", 0, 10,20,300); // l = 1 que corresponde al primer ciclo al sumar 1
dibujarLinea("#AAF", 0, 20,30,300); // l = 2
dibujarLinea("#AAF", 0, 30,40,300); // l = 3
dibujarLinea("#AAF", 0, 40,50,300); // l = 4
dibujarLinea("#AAF", 0, 50,60,300);
dibujarLinea("#AAF", 0, 60,70,300);
dibujarLinea("#AAF", 0, 70,80,300);
dibujarLinea("#AAF", 0, 80,90,300);
dibujarLinea("#AAF", 0, 90,100,300);
dibujarLinea("#AAF", 0, 100,110,300);
dibujarLinea("#AAF", 0, 110,120,300);
dibujarLinea("#AAF", 0, 120,130,300);
dibujarLinea("#AAF", 0, 130,140,300);
dibujarLinea("#AAF", 0, 140,150,300);
dibujarLinea("#AAF", 0, 150,160,300);
dibujarLinea("#AAF", 0, 160,170,300);
dibujarLinea("#AAF", 0, 170,180,300);
dibujarLinea("#AAF", 0, 180,190,300);
dibujarLinea("#AAF", 0, 190,200,300);
dibujarLinea("#AAF", 0, 200,210,300);
dibujarLinea("#AAF", 0, 210,220,300);
dibujarLinea("#AAF", 0, 220,230,300);
dibujarLinea("#AAF", 0, 230,240,300);
dibujarLinea("#AAF", 0, 240,250,300);
dibujarLinea("#AAF", 0, 250,260,300);
dibujarLinea("#AAF", 0, 260,270,300);
dibujarLinea("#AAF", 0, 270,280,300);
dibujarLinea("#AAF", 0, 280,290,300);
dibujarLinea("#AAF", 0, 290,300,300); // l=30
*/