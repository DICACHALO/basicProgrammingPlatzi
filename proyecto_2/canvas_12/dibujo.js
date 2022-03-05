let text = document.getElementById('text')
let boton = document.getElementById('botoncito')
let textf = document.getElementById('textf')
let textl = document.getElementById('textl')
let textd = document.getElementById('textd')

boton.addEventListener('click', drawing)

let colorcito = 'blue'
let draw = document.getElementById('drawing')
let d = draw.getContext('2d')

let xi, xf, yi, yf;

function drawing() {
    let i = parseInt(text.value)
    let l;
    let n = parseInt(textf.value)
    let lines = parseInt(textl.value)
    let d = parseInt(textd.value)
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
        for (let l = 0; l < lines; l++) {
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