/* Joaquin Canepa
	switch 04
*/
function mostrar()
{
	let mesDelAnio;
	let mensaje;

	mesDelAnio=document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case "Febrero":
		mensaje="este mes tiene 28 dias";
			break;
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
		mensaje= "Este mes tiene 30 dias "
			break;
		default:
		mensaje="Este mes tiene 31 dias"
			break;
	}
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN