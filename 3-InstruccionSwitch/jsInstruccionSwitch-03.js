/* Joaquin Canepa
	switch 03
*/
function mostrar()
{
	let mesDelAnio;
	let mensaje;

	mesDelAnio=document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case "Febrero":
			mensaje="Este mes NO tiene mas de 29 dias";
			break;
		default:
			mensaje="Este mes tiene mas de 29 dias";
			break;
	}
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN