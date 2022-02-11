/* Joaquin Canepa
	switch 08
*/
function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
		mensaje="Hace frio";
			break;
		default:
			mensaje="Hace calor"
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN