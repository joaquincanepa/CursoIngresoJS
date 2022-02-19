/*Joaquin Canepa
	while 05 entregado
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	
	while (sexoIngresado!="m" && sexoIngresado!="f") {
		sexoIngresado = prompt("Error reingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN