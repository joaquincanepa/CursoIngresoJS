/*joaquin Canepa
	while 09 entregado.
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let respuesta="si";
	let bandera="true";





	while (respuesta=="si"){

		numero=prompt("ingrese un numero");
		numero=parseFloat(numero);


		if (numero>maximo || bandera=="true") {
			maximo=numero;
		}
		if (numero<minimo || bandera=="true") {
			minimo=numero;
			bandera="true";
		}

		respuesta=prompt("desea continuar? si/no");
	}













	/*numero=prompt("ingrese un numero");
	numero=parseFloat(numero);*/



	/*while (isNaN(numero) == true) {
		numero=prompt("Error, esto no es un nro, ingrese un numero");
		numero=parseInt(numero);
	}//este while funciona para que se repita hasta que el usuario ingrese un nro

	maximo=numero;
	minimo=numero;
	respuesta=prompt("desea ingresar otro numero?");
	
	while (respuesta=="si"){

		numero=prompt("ingrese un numero");
		numero=parseFloat(numero);
		while (isNaN(numero) == true) {
			numero=prompt("Error, esto no es un nro, ingrese un numero");
			numero=parseInt(numero);
		}//este while funciona para que se repita hasta que el usuario ingrese un nro
		if (numero>maximo) {
			maximo=numero;
		}else if(numero<minimo) {
			minimo=numero;
		}
		respuesta=prompt("desea ingresar otro numero?")
	}*/

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;
}//FIN DE LA FUNCIÓN