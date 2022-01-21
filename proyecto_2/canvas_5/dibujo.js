var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');

/**Superior derecho */
var j=150;
for(i=0; i <= 150; i=i+10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(150,i);
lienzo.lineTo(j,150);
lienzo.stroke();
lienzo.closePath();
j=j+10;

}

var j=0;
for(i=150; i <= 300; i=i+10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(i,0);
lienzo.lineTo(300,j);
lienzo.stroke();
lienzo.closePath();
j=j+10;

}

/**inferior derecho */
var j=150;
for(i=300; i >= 150; i=i-10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(150,i);
lienzo.lineTo(j,150);
lienzo.stroke();
lienzo.closePath();
j=j+10;
}

var j=290;
for(i=150; i <= 300; i=i+10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(300,i);
lienzo.lineTo(j,300);
lienzo.stroke();
lienzo.closePath();
j=j-10;

}

/**Superior izquierdo */
var j=150;
for(i=0; i <= 150; i=i+10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(150,i);
lienzo.lineTo(j,150);
lienzo.stroke();
lienzo.closePath();
j=j-10;
}

var j=150;
for(i=10; i <= 150; i=i+10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(i,0);
lienzo.lineTo(0,j);
lienzo.stroke();
lienzo.closePath();
j=j-10;

}

/**inferior izquierdo */
var j=150;
for(i=300; i >= 150; i=i-10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(150,i);
lienzo.lineTo(j,150);
lienzo.stroke();
lienzo.closePath();
j=j-10;
}

var j=10;
for(i=150; i <= 300; i=i+10){
lienzo.beginPath();
lienzo.strokeStyle = '#64dd17';
lienzo.moveTo(0,i);
lienzo.lineTo(j,300);
lienzo.stroke();
lienzo.closePath();
j=j+10;

}