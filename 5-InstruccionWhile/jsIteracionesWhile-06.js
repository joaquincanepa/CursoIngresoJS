/*Joaquin Canepa
	while 06 entregado */
function mostrar()
{
	let i=0;
	let numero;
	let acumulador =0;
	let promedio;

	while (i<5) {

		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		i++;
	}

	promedio=acumulador/5
	promedio=parseFloat(promedio);

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN