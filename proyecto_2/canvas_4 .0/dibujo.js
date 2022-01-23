var numerosInput = document.getElementById('texto')
var cuadroDeDibujo = document.getElementById('dibujo')

var boton = document.getElementById('boton')
var lienzo = cuadroDeDibujo.getContext('2d')

boton.addEventListener('click', añadirLineas)


function añadirLineas(){
  const lineasTotales = numerosInput.value

  const BORRAR = ""

  const ALTURA = cuadroDeDibujo.height
  const ANCHURA = cuadroDeDibujo.clientWidth
  
  const cambioDePosicionY = ALTURA / lineasTotales
  const cambioDePosicionX = ANCHURA / lineasTotales

  const bordeIzquierdo = 0
  const bordeSuperior = 0

  var yInicial = bordeSuperior
  var xFinal = cambioDePosicionX

  // console.log(`este es lienzo.width: ${cuadroDeDibujo.width}`)
  for(var linea = 0; linea < lineasTotales; linea++){

    dibujarLinea(bordeIzquierdo, yInicial, xFinal, ALTURA)

    yInicial += cambioDePosicionY 
    xFinal += cambioDePosicionX

  }
  numerosInput.value = BORRAR
}

function dibujarLinea(xInicial, yInicial, xFinal, yFinal){
  lienzo.beginPath()
  lienzo.strokeStyle = '#95ca3e'
  lienzo.moveTo(xInicial, yInicial)
  lienzo.lineTo(xFinal, yFinal)
  lienzo.stroke()
  lienzo.closePath()
}