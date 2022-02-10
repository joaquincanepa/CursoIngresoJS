/*Joaquin Canepa
	if 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	let maximo =10;
	let minimo =1;
	let numeroRandom;
	let mensaje;

	numeroRandom=Math.round(Math.random() * (maximo-minimo) + minimo);

	if (numeroRandom>8){
		mensaje=("su nota es " +numeroRandom+ " excelete");
	}else if (numeroRandom>=4){
		mensaje=("su nota es " +numeroRandom+ " aprobo");
	}else{
		mensaje=("su nota es " +numeroRandom+ " vamos la proxima se puede");
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN