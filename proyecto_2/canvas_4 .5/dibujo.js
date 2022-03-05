let boton_orco = document.getElementById("select_orco");
boton_orco.addEventListener("click", ojoSeleccionadoOrco);
let radio_humano = document.getElementById("select_humano");
radio_humano.addEventListener("click", ojoSeleccionadoHumano);
let radio_gato = document.getElementById("select_gato");
radio_gato.addEventListener("click", ojoSeleccionadoGato);
let radio_space = document.getElementById("select_space");
radio_space.addEventListener("click", ojoSeleccionadoSpace);

let d = document.getElementById("eyeballs");
let ancho = d.width;
let alto = d.height;
let ctx = d.getContext("2d");
console.log(ctx);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(xinicial, yinicial);
  ctx.lineTo(xfinal, yfinal);
  ctx.stroke();
  ctx.closePath();
}

dibujarLinea("black", 1, 1, 1, alto - 1);
dibujarLinea("black", 1, alto - 1, ancho - 1, alto - 1);
dibujarLinea("black", ancho - 1, alto - 1, alto - 1, 1);
dibujarLinea("black", ancho - 1, 1, 1, 1);

function dibujarCirculo(centroX, centroY, radio, colorRelleno) {
  ctx.beginPath();
  ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
  ctx.fillStyle = colorRelleno;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = colorRelleno;
  ctx.stroke();
}

function dibujarElipse(
  centroX,
  centroY,
  radioX,
  radioY,
  rotacion,
  anguloInicial,
  anguloFinal,
  colorRelleno
) {
  ctx.beginPath();
  ctx.ellipse(centroX, centroY, radioX, radioY, rotacion, 0, 2 * Math.PI);
  ctx.fillStyle = colorRelleno;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = colorRelleno;
  ctx.stroke();
}

function ojoSeleccionadoOrco() {
  ctx.fillStyle = "#228B22";
  ctx.fillRect(0, 0, d.width, d.height);
  dibujarElipse(250, 250, 130, 245, Math.PI / 2, 0, 2 * Math.PI, "yellow");
  dibujarCirculo(250, 250, 50, "red");
  dibujarCirculo(250, 250, 15, "black");
  dibujarCirculo(275, 225, 12.5, "white");
}

function ojoSeleccionadoHumano() {
  ctx.fillStyle = "#FAA";
  ctx.fillRect(0, 0, d.width, d.height);
  dibujarElipse(250, 250, 210, 230, Math.PI / 2, 0, 2 * Math.PI, "white");
  dibujarCirculo(250, 250, 70, "blue");
  dibujarCirculo(250, 250, 50, "black");
  dibujarCirculo(290, 215, 12.5, "white");
}

function ojoSeleccionadoGato() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, d.width, d.height);
  dibujarElipse(250, 250, 130, 245, Math.PI / 2, 0, 2 * Math.PI, "#7AA9DD");
  dibujarElipse(250, 250, 10, 125, Math.PI, 0, 2 * Math.PI, "black");
}

function ojoSeleccionadoSpace() {
  ctx.fillStyle = "#29ff22";
  ctx.fillRect(0, 0, d.width, d.height);
  dibujarElipse(250, 250, 210, 230, Math.PI / 2, 0, 2 * Math.PI, "#fd2cee");
  dibujarCirculo(250, 250, 70, "#29ff22");
  dibujarCirculo(250, 250, 20, "#fd2cee");
  dibujarCirculo(290, 215, 12.5, "white");
}
