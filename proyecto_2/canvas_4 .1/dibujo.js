let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarporclick);

let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");

function dibujarLinea(rot)
{
  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.ellipse(200, 200, 40, 170, rot, 0, 2 * Math.PI);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarporclick()
{
  let orb = parseInt(texto.value);
  for (rot = 0; rot <= Math.PI; rot = rot + (Math.PI / orb))
  {
    dibujarLinea(rot);
  }
}