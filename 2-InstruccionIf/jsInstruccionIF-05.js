/*Joaquin Canepa
	if 05
*/
function mostrar()
{
	let edad;
	//tomo la edad
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad<13 || edad>17) {
		
		alert("no es adolescente");
		
	}

}//FIN DE LA FUNCIÓN