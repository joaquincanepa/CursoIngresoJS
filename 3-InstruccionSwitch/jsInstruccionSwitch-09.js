function mostrar()
{
	let estacionAnio;
	let destino;
	let precioTarifa;
	let precioFinal;


	precioTarifa=15000
	estacionAnio=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch (estacionAnio) {
		case "Invierno":
			switch(destino){
				case"Bariloche":
				precioFinal=precioTarifa+precioTarifa*0.20;
					break;
				case "Cataratas":
				case "Cordoba":
				precioFinal=precioTarifa-precioTarifa*0.10;
					break;
				default:
					precioFinal=precioTarifa-precioTarifa*0.20;
					break;
			}break;
		
		case"Verano":
			switch(destino){
				case"Bariloche":
				precioFinal=precioTarifa-precioTarifa*0.20;
					break;
				case "Cataratas":
				case "Cordoba":
				precioFinal=precioTarifa+precioTarifa*0.10;
					break;
				default:
					precioFinal=precioTarifa+precioTarifa*0.20;
					break;
			}break;

			default:
				switch(destino){
					case"Bariloche":
					case "Cataratas":
					case "Mar del plata":
					precioFinal=precioTarifa+precioTarifa*0.10;
						break;
					default:
						precioFinal=precioTarifa;
						break;
				}break;
	}
	alert("el precio final es de "+ precioFinal);


}//FIN DE LA FUNCIÓN