/*Joaquin Canepa
	if 09*/
function mostrar()
{
	let numeroRandom
	let maximo =10;
	let minimo =1;
	//Genero el número RANDOM entre 1 y 10 
	numeroRandom=Math.round(Math.random() *(maximo-minimo) + minimo);
	console.log("el numero random es: + numeroRandom ");

	alert("el numero random es: " + numeroRandom);

}//FIN DE LA FUNCIÓN