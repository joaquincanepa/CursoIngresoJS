/*Joaquin Canepa
	if 08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	let edad;
	let estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById("estadoCivil").value;

	if (edad>=18 && estadoCivil =="Soltero") {

		alert("es soltero y no es menor");
		
	}
	
	/* comparaciones
	
	let a ;
	let b ;
	let c;

	a=prompt("ingrese numero a ");
	a=parseInt(a);

	b=prompt("ingrese numero b ");
	b=parseInt(b);

	c=prompt("ingrese numero c ");
	c=parseInt(c);



		if (a>b && a>c){
			alert(a+" a es el mayor");

		}else if (b>a && b>c) {
			alert(b+ " = b es el mayor");

		}else{
			alert(c+" = c es el mayor");

		}*/




}//FIN DE LA FUNCIÓN