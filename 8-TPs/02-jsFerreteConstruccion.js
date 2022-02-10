/*Joaquin Canepa
	tp 02
2.Para el departamento de Construcción:
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let mensaje;
    let alambreAComprar;

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    alambreAComprar=(largo*2 + ancho*2)*3
    alambreAComprar=parseFloat(alambreAComprar);

    mensaje="se deben comprar "+ alambreAComprar+ " metros de alambre";

    alert(mensaje);
}

function Circulo () 
{
    let radioDelTerreno;
    let perimetro;
    let alambreAComprar;
    let mensaje;

    radioDelTerreno=document.getElementById("txtIdRadio").value;
    radioDelTerreno=parseFloat(radioDelTerreno);
    perimetro= (2*radioDelTerreno*3.14);
    perimetro=parseFloat(perimetro);
    alambreAComprar=perimetro*3;
    mensaje="se deben comprar " +alambreAComprar+ " metros de alambre";

    alert(mensaje);


}

function Materiales () 
{
    let largo;
    let ancho;
    let bolsasCemento;
    let bolsasCal;
    let totalArea

    largo=document.getElementById("txtIdLargo").value;
    largo=parseFloat(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseFloat(ancho);

    totalArea=largo*ancho;
    bolsasCemento=totalArea*2;
    bolsasCal=totalArea*3;

    alert("se necesitan "+bolsasCemento+" bolsas de cemento " + "y "+bolsasCal+" bolsas de cal");
}