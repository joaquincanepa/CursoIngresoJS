/*
joaquin Canepa
	while 08 entregado.
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta="si";
	let numero=0;
	let acumuladorPositivos=0;
	let acumuladorNegativos=1;

	while (respuesta=="si" || respuesta=="Si"){

		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		while (isNaN(numero) == true) {
			numero=prompt("Error, esto no es un nro, ingrese un numero");
			numero=parseInt(numero);
		}//este while funciona para que se repita hasta que el usuario ingrese un nro, mientras escriba otra cosa se va a repetir.

		if (numero>=0) {
			acumuladorPositivos=acumuladorPositivos+numero;
		}else{
			acumuladorNegativos=numero*acumuladorNegativos;
		}
		respuesta=prompt("Desea continuar?");
	}

	document.getElementById("txtIdSuma").value=acumuladorPositivos;
	document.getElementById("txtIdProducto").value=acumuladorNegativos;
}//FIN DE LA FUNCIÓN