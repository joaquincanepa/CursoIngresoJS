/*Joaquin Canepa
Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseFloat(sueldo);

	aumento=sueldo+(sueldo * 0.10);
	aumento=parseFloat(aumento);

	document.getElementById("txtIdResultado").value=aumento;

	
}
