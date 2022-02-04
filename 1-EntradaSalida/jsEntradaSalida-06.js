/*Joaquin Canepa
Ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);
	resultado=(numeroUno + numeroDos);
	resultado=parseInt(resultado);

	mensaje="La suma es "+resultado;


	alert(mensaje);
}

