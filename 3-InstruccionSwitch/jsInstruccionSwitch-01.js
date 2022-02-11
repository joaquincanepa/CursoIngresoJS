/* Joaquin Canepa
	switch 01
*/
function mostrar()
{
	var mesDelAnio;
	var mensaje;

	mesDelAnio=document.getElementById("txtIdMes").value;

	switch (mesDelAnio) {
		case "Enero":
		mensaje="que comiences bien el año!!!";
			break;
		case "Marzo":
		mensaje="a clases!!!.";
			break;
		case "Julio":
			mensaje="se vienen las vacaciones";
			break;
		case "Diciembre":
			mensaje="Felices fiesta!!!";
			break;
		default:
			mensaje="";
			break;
	}
	alert(mensaje);
}