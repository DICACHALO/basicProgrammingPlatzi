let d = document.getElementById("dibujo");
let lienzo = d.getContext("2d");
function dibujar(color, x_inicial, y_inicial, x_final, y_final) {
  //dentro del parentesis van los parametros de la funcion
  //lo que va dentro del bloque de codigo es el codigo que se va a repetir cada vez que la funcion es invocada
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function rellenar(color, relleno, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.fillStyle = relleno;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.lineTo(x3, y3);
  lienzo.lineTo(x4, y4);
  lienzo.lineTo(x5, y5);
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();
}
function ojos(color, x, y, r, inicio, final, direccion) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.arc(x, y, r, inicio, final, direccion);
  lienzo.stroke();
  lienzo.closePath();
}
dibujar("blak", 150, 20, 110, 30);
dibujar("blak", 130, 35, 110, 30);
dibujar("blak", 150, 20, 130, 35);
dibujar("blak", 150, 20, 170, 35);
dibujar("blak", 130, 35, 170, 35);
dibujar("blak", 150, 20, 190, 30);
dibujar("blak", 190, 30, 170, 35);
dibujar("blak", 110, 30, 110, 50);
dibujar("blak", 110, 50, 130, 35);
dibujar("blak", 110, 50, 125, 60);
dibujar("blak", 125, 60, 130, 35);
dibujar("blak", 125, 60, 150, 80);
dibujar("blak", 130, 35, 148, 70);
dibujar("blak", 170, 35, 152, 70);
dibujar("blak", 170, 35, 180, 60);
dibujar("blak", 180, 60, 150, 80);
dibujar("blak", 170, 35, 190, 50);
dibujar("blak", 190, 50, 180, 60);
dibujar("blak", 190, 30, 190, 50);
dibujar("blak", 120, 17, 130, 25);
dibujar("blak", 170, 25, 180, 17);
dibujar("blak", 125, 60, 130, 170);
dibujar("blak", 125, 60, 150, 155);
dibujar("blak", 130, 170, 135, 100);
dibujar("blak", 150, 155, 150, 80);
dibujar("blak", 150, 80, 135, 100);
dibujar("blak", 150, 155, 175, 63);
dibujar("blak", 175, 63, 165, 170);
dibujar("blak", 150, 80, 165, 100);
dibujar("blak", 165, 100, 165, 170);
dibujar("blak", 175, 63, 200, 100);
dibujar("blak", 200, 100, 200, 150);
dibujar("blak", 200, 150, 165, 170);
dibujar("blak", 200, 100, 165, 170);
dibujar("blak", 200, 150, 190, 170);
dibujar("blak", 190, 170, 165, 170);
dibujar("blak", 200, 150, 230, 170);
dibujar("blak", 190, 170, 230, 170);
dibujar("blak", 200, 150, 245, 167);
dibujar("blak", 245, 167, 230, 170);
//nariz
rellenar("blak", "blak", 145, 75, 148, 70, 152, 70, 155, 75, 150, 80);
//oreja izquierda
rellenar("blak", "blak", 120, 17, 110, 30, 110, 10);
//oreja derecha
rellenar("blak", "blak", 190, 30, 190, 10, 180, 17);
//patas
rellenar("blak", "blak", 130, 170, 150, 155, 165, 170);
//cola
rellenar("blak", "blak", 245, 167, 230, 152, 232, 162);

//ojos
ojos("black", 133, 55, 5, Math.PI * 2, Math.PI * 1, false);
ojos("black", 168, 55, 5, Math.PI * 2, Math.PI * 1, false);
