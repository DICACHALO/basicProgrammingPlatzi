let d = document.getElementById("myDrawing"); 
let lienzo = d.getContext("2d"); 
let lineas = 30; 
let l = 0; 
let  yi, xf; 

// Puedo hacer las dos partes en un solo while
while(l<lineas){
	yi = 10 * l; 
	xf = 10 * (l + 1) 
	dibujarLinea("#AAF", 0, yi,xf,300); 
	dibujarLinea("#AAF", 300, yi,xf,0); //Sección superior del dibujo
  console.log("Linea " + l); 
	l++; // Reemplazo de l=l+1 pero funciona igual;
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