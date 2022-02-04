/*
Joaquin Canepa
Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);
	resultado=(numeroUno - numeroDos);
	resultado=parseInt(resultado);
	mensaje="La resta es "+resultado;


	alert(mensaje);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);
	resultado=(numeroUno * numeroDos);
	resultado=parseInt(resultado);

	mensaje="La multiplicacion es "+resultado;


	alert(mensaje);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseFloat(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseFloat(numeroDos);
	resultado=(numeroUno / numeroDos);
	resultado=parseFloat(resultado);
	mensaje="La division es "+resultado


	alert(mensaje);
}

