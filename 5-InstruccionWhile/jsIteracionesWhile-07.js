/* joaquin Canepa
	while 07 entregado.
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta ="si";
	let acumulador=0;
	let promedio;
	let contador=0;


	while (respuesta=="si") {

		numero=prompt("ingrese numero");
		numero=parseFloat(numero);
		acumulador=acumulador+numero;
		contador++//o la alterniva es contador=contador + 1.
		respuesta=prompt("desea continuar ingresando numeros?");
	}

	promedio=acumulador/contador;
	promedio=parseFloat(promedio);

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN