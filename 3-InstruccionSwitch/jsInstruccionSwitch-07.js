/* Joaquin Canepa
	switch 07
*/
function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
		mensaje="se encuentra al Oeste del pais";
			break;
		case "Cataratas":
		mensaje="Se encuentra al Norte del pais";
		break;
		case "Mar del plata":
		mensaje="se encuentra al Este del pais";
		break;
		default:
			mensaje="Se encuentra al Sur del pais"
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN