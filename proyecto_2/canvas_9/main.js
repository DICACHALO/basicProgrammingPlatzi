var d = document.getElementById("dibujito2");
var lienzo = d.getContext("2d");

var my_gradient = lienzo.createLinearGradient(0, 0, 0, 470); //Un codigo de gradiente que encontre
my_gradient.addColorStop(0, "blue");
my_gradient.addColorStop(1, "purple");
lienzo.fillStyle = my_gradient;
lienzo.fillRect(0, 0, 1500, 600);


var xi, yi, xf, yf; //variables para la funcion de dibujo de lineas
var lv = 0; // Lineas Verticales
var ld = 0; //lineas derechas
var li = 0; //lineas izuqierdas
var colores = "violet";
var f = 750; //variable para la malla del medio
var i = 0; //variable para la malla del medio

function dibujoLineas(color, xinicial, yinicial, xfinal, yfinal) {

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

dibujoLineas(colores, 0, 250, 100, 100) //Piramide izquierda
dibujoLineas(colores, 100, 100, 200, 300)
dibujoLineas(colores, 300, 300, 100, 100)

dibujoLineas(colores, 1500, 250, 1350, 100) //piramide derecha
dibujoLineas(colores, 1350, 100, 1300, 300)
dibujoLineas(colores, 1200, 300, 1350, 100)

dibujoLineas("cyan", 750, 300, 750, 600) //linea del medio

dibujoLineas("violet") //Circulo
lienzo.arc(750, 300, 400, Math.PI, Math.PI * 2);
lienzo.stroke();


while (lv <= 40) { //lineas horizintales
	lv = lv + 1;
	dibujoLineas("cyan ", 0, yi, 1500, yf)
	yi = 290 + (lv * 10);
	yf = 290 + (lv * 10);

}

while (ld <= 1000) { //lineas verticales izqueirdas
	ld = ld + 40;
	dibujoLineas("cyan", xi, 300, xf, 600)
	xi = 790 - ld;
	xf = 750 - (ld * 2);
}

while (li <= 1000) { //lineas verticales derechas
	li = li + 40;
	dibujoLineas("cyan", xi, 300, xf, 600)
	xi = 710 + li;
	xf = 750 + (li * 2);
}


while (i <= 300) //malla derecha
{
	dibujoLineas("cyan", 750, i, f, 300)
	i = i + 10;
	f = f + 10;
}

var f = 750; //malla izquierda
var i = 0;
while (i <= 300) {
	dibujoLineas("cyan", 750, i, f, 300)
	i = i + 10;
	f = f - 10;
}