//Obtener el elemento por su Id
// getElementById es un método del documento que trae un elemento a través de su ID
var d = document.getElementById("dibujito"); /*Canvas es una etiqueta y su id es dibujito. 
    A d se le asignó lo que en el id dibujito había. Dibujito es el parámetro.*/
var lienzo = d.getContext("2d"); /*Área dónde se va a pintar, del canvas se obtiene el lienzo. 
    getContext es un método del canvas que me permite obtener el área dónde voy a dibujar. 
    Está ilustrado por la variable d que trajimos por dibujito, y trajimos el contexto 2d -también existe el contexto 3d
    */
console.log(lienzo);
  //lienzo es el contexto 2d del canvas, tiene varias funciones y atributos
  lienzo.beginPath(); //Inicio el trazo. No se le pasa ningún parámetro. Sólo se le indica que debe arrancar. 'Invocar'
  lienzo.strokeStyle = "red"; //Color de linea. Es un atributo del objeto lienzo.
  lienzo.moveTo(100, 100); //mover el lápiz a dónde va a arrancar la línea, posición en x y en y. En este caso sí hay múltiples parámetros
  lienzo.lineTo(200, 200); //función de trazar una línea
  lienzo.stroke(); //Dibujar con el estilo que se ha decidido
  lienzo.closePath(); //Cerrar el camino o trazo y levantar nuevamente el lápiz. No se le pasa ningún parámetro. Sólo se le indica que debe arrancar

