/* Joaquin Canepa
	switch 02
*/
function mostrar()
{
	var mesDelAnio;
	var mensaje;

	mesDelAnio=document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case"Julio":
		case"Agosto":
		mensaje="Abrigate que hace frio";
			break;
		case "Septiembre":
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		mensaje="Ya pasamos el frio, ahora calor!!!";
			break;
		default:
		mensaje="Falta para el invierno";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN