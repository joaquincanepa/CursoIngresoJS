/* Joaquin Canepa
	switch 06 entregado
*/
function mostrar()
{
	var horaDelDia 
	horaDelDia=document.getElementById("txtIdHora").value;
	horaDelDia=parseFloat(horaDelDia);

	switch (horaDelDia) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		mensaje="Es de noche";
			break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		mesaje="Es de mañana";
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		mensaje="Es de tarde";
			break;	
		default:
			mensaje="ese horario no existe";
			break;
	} 

	alert(mensaje);
}//FIN DE LA FUNCIÓN