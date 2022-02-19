/*
Joaquin Canepa
	while 04 entregado.
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado=prompt("ingrese numero");

	while (numeroIngresado<0 || numeroIngresado>9) {
		numeroIngresado=prompt("Error reingrese numero");
	}

	document.getElementById("txtIdNumero").value=numeroIngresado;


}//FIN DE LA FUNCIÓN