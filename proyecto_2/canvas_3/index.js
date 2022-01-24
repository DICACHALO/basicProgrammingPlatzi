//Creando una función
var d = document.getElementById("myDrawing"); 
var lienzo = d.getContext("2d"); 
var lineas = 30; //Este es el límite de líneas que vamos a hacer
var l = 0; //Esta variable contará las líneas - VARIABLE ITERADORA
var yi, xf; //Variables vacias que vamos a usar en el ciclo, son las que cambian en cada iteración


while(l<lineas){
	yi = 10 * l; //10 porque son 10 pixeles
	xf = 10 * (l + 1) //Para que dé el efecto de línea que va moviendose y eventualmente se vuelve una curva
	dibujarLinea("#AAF", 0, yi,xf,300); //Solo dos se van a ir moviendo
	dibujarLinea("#AAF", 300, yi,xf,0); //Sección superior del dibujo
  console.log("Linea " + l); //Para revisar qué está pasando con l en consola
	l=l+1; // También se puede con l++
}

//Haciendo unos bordecitos al lienzo
dibujarLinea("blue", 1,1,1,299); //En 1 para que realmente se vea el borde, para que se vea el pixel completo, por eso no inicia en 0
dibujarLinea("blue", 1,299,299,299); //299 por la misma razón, en cero no se ve todo el píxel - anti aligning
dibujarLinea("blue", 299,299,299,1); // Borde derecho
dibujarLinea("blue", 299,1,1,1); // Borde superior

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath(); 
  lienzo.strokeStyle = color; 
  lienzo.moveTo(xinicial, yinicial); 
  lienzo.lineTo(xfinal, yfinal); 
  lienzo.stroke(); 
  lienzo.closePath(); 
}

/* Hacemos una línea cada 10 pixeles de ancho
El límite son 30 líneas

dibujarLinea("#AAF", 0, 0,10,300); // l = 0 porque la inicializo en 0
dibujarLinea("#AAF", 0, 10,20,300); // l = 1 que corresponde al primer ciclo al sumar 1
dibujarLinea("#AAF", 0, 20,30,300); // l = 2
dibujarLinea("#AAF", 0, 30,40,300); // l = 3
dibujarLinea("#AAF", 0, 40,50,300); // l = 4 ... y así sucesivamente
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