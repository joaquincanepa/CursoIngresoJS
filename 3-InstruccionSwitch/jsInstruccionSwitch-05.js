/* Joaquin Canepa
	switch 05
*/
function mostrar()
{
		//tomo la hora
		var horaDelDia;
		var mensaje;
		
		horaDelDia=document.getElementById('txtIdHora').value
		horaDelDia=parseInt(horaDelDia);
	
		switch(horaDelDia)
		{
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			mensaje="Es de Mañana";
			break;
			default:
			mensaje="";
			break;
	
		}
		alert(mensaje);

}//FIN DE LA FUNCIÓN