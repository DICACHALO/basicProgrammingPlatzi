var lineasFigext=document.getElementById("texto_figext");
var fExteriores=document.getElementById("figuras_exteriores");
fExteriores.addEventListener("click", figurasExteriores);

var lineasThorizontal=document.getElementById("texto_thorizontal");
var tHorizontales=document.getElementById("triangulos_horizontales");
tHorizontales.addEventListener("click", triangulosHorizontales);

var lineastvertical=document.getElementById("texto_tvertical");
var tVerticales=document.getElementById("triangulos_verticales");
tVerticales.addEventListener("click", triangulosVerticales);


var dimension=document.getElementById("midibujo");
var ancho=dimension.width;
var lienzo=dimension.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfina)
{
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfina);
	lienzo.stroke();
	lienzo.closePath();
}

function figurasExteriores()
{
	var lineasExteriores=parseInt(lineasFigext.value);
	var espacio_exterios=ancho/lineasExteriores;
	l=0;
while(l<lineasExteriores)
{
	yi=espacio_exterios*l;
	xf=espacio_exterios*(l+1);
	dibujarLinea("black", 0,yi, xf, 300);
	l++; 
}

for(l=0;l<lineasExteriores;l++)
{
	var xf=espacio_exterios+(espacio_exterios*l);
	var yi=300-(espacio_exterios*l);
	dibujarLinea("black",0,yi,xf,0);	
}

for(l=0; l<lineasExteriores; l++)
{
	var xi=espacio_exterios*l;
	var yf=espacio_exterios*(l+1);
	dibujarLinea("black", xi,0, 300, yf);
}

for(l=0; l<lineasExteriores; l++)
{
	var xf=290-(espacio_exterios*l);
	var yi=espacio_exterios+(espacio_exterios*l);
	dibujarLinea("black", 300,yi, xf, 300);
}

}

function triangulosHorizontales()
{
	var lineasHorizontales=parseInt(lineasThorizontal.value);
	var espacio_horizontales=ancho/lineasHorizontales;
	for(var l=0; l<=lineasHorizontales;l++)
{
	var xi=espacio_horizontales*l;
	var xf=300-(espacio_horizontales*l);
	dibujarLinea("red", xi, 0, xf, 300);
}
}

function triangulosVerticales()
{
	var lineasVerticales=parseInt(lineastvertical.value);
	var espacio_verticales=ancho/lineasVerticales;
	for(var l=0; l<=lineasVerticales;l++)
{
	var yi=espacio_verticales*l;
	var yf=300-(espacio_verticales*l);
	dibujarLinea("green", 0, yi, 300, yf);
}

}
