/*/*Joaquin Canepa
	if 06
Al ingresar una edad debemos informar
si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años). */
function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	/*if (edad>=18){

		alert("es mayor de edad");
	}
	if (edad>=13 && edad<=17){
		
		alert("es adolescente");
	}
	if (edad<13){

		alert("es un niño");
	}*/

	if (edad <13) {
		alert("es un niño");
	}else if (edad >=18) {
			alert("es un adulto");
		}else{
			alert("es adolescente");
		}

}//FIN DE LA FUNCIÓN