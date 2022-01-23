var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
var prueba;

//************** Elementos de HTML**************
var texto_p1x = document.getElementById ("texto_punto1x");
var texto_p1y = document.getElementById ("texto_punto1y");

var texto_p2x = document.getElementById ("texto_punto2x");
var texto_p2y = document.getElementById ("texto_punto2y");

var texto_p3x = document.getElementById ("texto_punto3x");
var texto_p3y = document.getElementById ("texto_punto3y");

var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
//*********************************************

var punto1x, punto1y, punto2x, punto2y, punto3x, punto3y;




function dibujoPorClick()
      {
        punto1x = parseInt(texto_p1x.value);
        punto1y = parseInt(texto_p1y.value);
        punto2x = parseInt(texto_p2x.value);
        punto2y = parseInt(texto_p2y.value);
        punto3x = parseInt(texto_p3x.value);
        punto3y = parseInt(texto_p3y.value);

        condicionTriangulo(punto1x,punto1y,punto2x,punto2y,punto3x,punto3y);

      }


function condicionTriangulo (punto1x,punto1y,punto2x,punto2y,punto3x,punto3y)
    {

    if ( punto1x <= punto2x && punto1x != punto2x)
        {
          console.log ("se ejecuto el IF"+": condicion 1 " + (punto1x <= punto2x) + "condicion 2"+ (punto1x != punto2x) );
          ecuacion_recta(punto1x,punto1y,punto2x,punto2y,punto3x,punto3y);

        }

    else if (punto2x < punto1x)
        {
          console.log("se ejecuto el ELSE-IF");
          ecuacion_recta(punto2x,punto2y,punto1x,punto1y,punto3x,punto3y);

        }
    else if   (punto1x < punto3x)
        {
          console.log("se ejecuto el ELSE");
          ecuacion_recta(punto1x,punto1y,punto3x,punto3y,punto2x,punto2y);

        }
    else
        {
          console.log("se ejecuto el ELSE");
          ecuacion_recta(punto3x,punto3y,punto1x,punto1y,punto2x,punto2y);

        }
      }




function  pendiente (x1,y1,x2,y2) // se obtiene el valor de la pendiente que es utilizado en funcion: ecuacion_recta
    {
      var primera_resta;
      var segunda_resta;
      var resultado;

      primera_resta = x2-x1;
      segunda_resta = y2-y1;
      resultado = segunda_resta/primera_resta;
      return resultado;
    }


function ecuacion_recta(x1,y1,x2,y2,x3,y3) // ecuación de la recta para determinar los puntos a trazar
    {
      var m;
      var ecu_x;
      m = pendiente(x1,y1,x2,y2); //llamdo de la funcion pendiente
      console.log("Dato: la pendiente de la recta es:" + m);
        for (x=x1;x <= x2 ;x++)
        {

          ecu_x = (x*m)+(m*-(x1))+y1;
          dibujarLinea ("#AAF",x,ecu_x,x3,y3);
        }

    }

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
    {
      lienzo.beginPath(); /* incializa la función para el trazado   */
      lienzo.strokeStyle = color; /* declaramos el color de la linea*/
      lienzo.moveTo(x_inicial, y_inicial); /* movemos el focus al punto inicial*/
      lienzo.lineTo(x_final, y_final);/* trazamos una linea del punto declado al punto insertado en la función*/
      lienzo.stroke(); /* cerramos el stilo*/
      lienzo.closePath(); /* cerramos la función*/
      return 0;
    }