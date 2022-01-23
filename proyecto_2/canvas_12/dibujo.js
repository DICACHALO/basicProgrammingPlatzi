var text = document.getElementById('text')
var boton = document.getElementById('botoncito')
var textf = document.getElementById('textf')
var textl = document.getElementById('textl')
var textd = document.getElementById('textd')

boton.addEventListener('click', drawing)

var colorcito = 'blue'
var draw = document.getElementById('drawing')
var d = draw.getContext('2d')

var xi, xf, yi, yf;

function drawing() {
    var i = parseInt(text.value)
    var l;
    var n = parseInt(textf.value)
    var lines = parseInt(textl.value)
    var d = parseInt(textd.value)
    if (i === 1) {
        for (l = 1; l < lines; l++) {
            xf = 250 - (l * d)
            yi = 0 + (l * d)
            drawingTransform(colorcito, n, xf, yi, n)

        }
        for (l = 1; l < lines; l++) {
            xf = 250 + (l * d)
            yi = 0 + (l * d)
            drawingTransform(colorcito, n, xf, yi, n)

        }
        for (l = 1; l < lines; l++) {
            xf = 0 + (l * d)
            yi = 250 + (l * d)
            drawingTransform(colorcito, n, xf, yi, n)
        }
        for (l = 1; l < lines; l++) {
            xf = 500 - (l * d)
            yi = 250 + (l * d)
            drawingTransform(colorcito, n, xf, yi, n)
        }
    } else if (i === 2) {
        for (l = 0; l < lines; l++) {
            xi = 0 + (l * d)
            xf = 250 - (l * d)
            yi = 0 + (l * d)
            yf = 250 + (l * d)
            drawingTransform(colorcito, xi, xf, yi, yf)
        }
        for (l = 0; l < lines; l++) {
            xi = 500 - (l * d)
            xf = 250 - (l * d)
            yi = 0 + (l * d)
            yf = 250 - (l * d)
            drawingTransform(colorcito, xi, xf, yi, yf)
        }
        for (l = 0; l < lines; l++) {
            xi = 500 - (l * d)
            xf = 250 + (l * d)
            yi = 0 + (l * d)
            yf = 250 + (l * d)
            drawingTransform(colorcito, xi, xf, yi, yf)
        }
        for (var l = 0; l < lines; l++) {
            xi = 500 - (l * d)
            xf = 250 - (l * d)
            yi = 500 - (l * d)
            yf = 250 + (l * d)
            drawingTransform(colorcito, xi, xf, yi, yf)
        }
    } else {
        alert(' Error: Tpo de figura \n Escribe un valor valido. \n 1 \n 2')
    }
}



function drawingTransform(color, xinicial, xfinal, yinicial, yfinal) {
    d.beginPath();
    d.strokeStyle = color;
    d.moveTo(xinicial, yinicial);
    d.lineTo(xfinal, yfinal);
    d.stroke();
    d.closePath();
}