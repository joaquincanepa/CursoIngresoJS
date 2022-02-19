/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. ++
2-Suma de los positivos. ++
3-Cantidad de positivos. ++
4-Cantidad de negativos. ++
5-Cantidad de ceros. ++
6-Cantidad de números pares. ++
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let contadorNegativos=0;
	let contadorPositivos=0;
	let contadorCeros=0;
	let contadorPares=0;
	let promedioPositivos;
	let promedioNegativos;
	let respuesta="si"



	while (respuesta=="si"){

		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseFloat(numeroIngresado);

		if (numeroIngresado>0){
			sumaPositivos=numeroIngresado + sumaPositivos;
			sumaPositivos=parseFloat(sumaPositivos);
			contadorPositivos++;
		}else if( numeroIngresado<0) {
			sumaNegativos=numeroIngresado+ sumaNegativos;
			sumaNegativos=parseFloat(sumaNegativos);
			contadorNegativos++;
		}else if (numeroIngresado==0){
			contadorCeros++
		}
		if(numeroIngresado%2==0){
			contadorPares++
		}

		respuesta=prompt("desea continuar?");
	}

	promedioPositivos=sumaPositivos/contadorPositivos;
	promedioNegativos=sumaNegativos/contadorNegativos;

	alert("la suma de los positivos es: "+sumaPositivos +" y la cantidad de numeros positiv es de : "+contadorPositivos+ " y su promedio es de: "+promedioPositivos);
	alert("la suma de los negativos es: "+sumaNegativos +" y la cantidad de numeros positiv es de : "+contadorNegativos+ " y su promedio es de: "+promedioNegativos);
	alert("la veces ingresadas el numero 0 es de: "+contadorCeros);
	alert("la cantidad de numero pares es de: "+contadorPares);



}//FIN DE LA FUNCIÓN