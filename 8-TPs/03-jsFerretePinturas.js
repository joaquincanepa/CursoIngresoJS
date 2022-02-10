/*Joaquin Canepa
	tp 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit;
    let temperaturaCentigrados;

    temperaturaFahrenheit=document.getElementById("txtIdTemperatura").value;
    temperaturaFahrenheit=parseFloat(temperaturaFahrenheit);

    temperaturaCentigrados=(temperaturaFahrenheit-32)*5/9;

    alert(temperaturaCentigrados);
}

function CentigradosFahrenheit () 
{
	let temperaturaFahrenheit;
    let temperaturaCentigrados;

    temperaturaCentigrados=document.getElementById("txtIdTemperatura").value;
    temperaturaCentigrados=parseFloat(temperaturaCentigrados);

    temperaturaFahrenheit=(temperaturaCentigrados*9/5)+32;

    alert(temperaturaFahrenheit);
}
