var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
var colorcito = "yellow";

for(l = 0; l < lineas; l++){
	 
	 yi = 10 * l;
	 xf = 10 * (l + 1);
	 dibujarLinea("yellow", 0, yi, xf, 300);
	 console.log("Linea " + 1);
}
dibujarLinea(colorcito, 0, 1, 1, 299);
dibujarLinea(colorcito, 0, 300, 399, 300);

for (l = 0; l < lineas; l++){
	 yi = 10 * l;
	 xf = 10 * (l + 1);
	 dibujarLinea(colorcito, 300, yi, xf, 0);
	 console.log("Linea " + 1);	 
}
for (l = 0; l < lineas; l++){
	 xi = 300-10 * l;
	 yf = 10 * (l + 1);
	 dibujarLinea(colorcito, xi, 0, 0, yf);
	 console.log("Linea " + 1);	 
}
for (l = 0; l < lineas; l++){
	 xi = 300-10 * l;
	 yf = 10 * (l + 1);
	 dibujarLinea(colorcito, xi, 300, 300, yf);
	 console.log("Linea " + 1);
}
dibujarLinea(colorcito, 300, 0, 0, 0);
dibujarLinea(colorcito, 300, 0, 300, 300);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
     lienzo.beginPath();
     lienzo.strokeStyle = color;
     lienzo.moveTo(xinicial, yinicial);
     lienzo.lineTo(xfinal, yfinal);
     lienzo.stroke();
     lienzo.closePath();

}