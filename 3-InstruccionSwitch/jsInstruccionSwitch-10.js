/* Joaquin Canepa
	switch 10 entregado.
*/
function mostrar()
{
	let destino;
	let estacion;
	let mensaje;

	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
		switch(destino){
		case "Bariloche":
			mensaje="se viaja";
			break;
			default:
				mensaje="no se viaja";
				break;

		}break;

		case "Verano":
		switch(destino){
			case "Cataratas":
			case "Mar del plata":
				mensaje="se viaja";
				break;
				default:
				mensaje="no se viaja";
				break;
		}break;

		case "Primavera":
			switch(destino){
				case "Bariloche":
					mensaje="no se viaja";
					break;
					default:
					mensaje="se viaja";
					break;
			}break;

		default:
			mensaje="se viaja";
			break;

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN