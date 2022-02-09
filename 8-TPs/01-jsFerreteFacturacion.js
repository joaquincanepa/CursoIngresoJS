/*Joaquin Canepa
TP numero 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numero1;
    let numero2;
    let numero3;
    let resultado;
    let mensaje;

    numero1=document.getElementById("txtIdPrecioUno").value;
    numero1=parseInt(numero1);

    numero2=document.getElementById("txtIdPrecioDos").value;
    numero2=parseInt(numero2);

    numero3=document.getElementById("txtIdPrecioTres").value;
    numero3=parseInt(numero3);

    resultado= numero1+numero2+numero3;
    resultado=parseFloat(resultado);
    mensaje=" el resultado de la suma es: " + resultado;

    alert(mensaje);
}
function Promedio () 
{
    let numero1;
    let numero2;
    let numero3;
    let resultado;
    let mensaje;

    numero1=document.getElementById("txtIdPrecioUno").value;
    numero1=parseInt(numero1);

    numero2=document.getElementById("txtIdPrecioDos").value;
    numero2=parseInt(numero2);

    numero3=document.getElementById("txtIdPrecioTres").value;
    numero3=parseInt(numero3);

    resultado= (numero1+numero2+numero3) /3;
    resultado=parseFloat(resultado);
    mensaje=" el resultado del promedio es: " + resultado;  
    
    alert(mensaje);
}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
    let resultado;
    let mensaje;
    let aumento;
    const IVA= 0.21

    numero1=document.getElementById("txtIdPrecioUno").value;
    numero1=parseInt(numero1);

    numero2=document.getElementById("txtIdPrecioDos").value;
    numero2=parseInt(numero2);

    numero3=document.getElementById("txtIdPrecioTres").value;
    numero3=parseInt(numero3);

    resultado= numero1+numero2+numero3;
    resultado=parseInt(resultado);

    aumento=resultado + resultado*IVA;
    aumento=parseFloat(aumento);
    
    mensaje=" el resultado del promedio es: " + aumento;  
    
    alert(mensaje);
}