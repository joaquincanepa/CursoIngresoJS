/*4. Joaquin Canepa
tp 04 solo if y solo switch entregdo
	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    const PRECIO= 35;
    let precioDescuento;
    let descuento=0;
    let precioSinDescuento;
    let importeFinal;
    let ingresosBrutos;

    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marca=document.getElementById("Marca").value;


    if (cantidadLamparas >=6){
        descuento=50;
    }else if (cantidadLamparas==5) {
        if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") {
            descuento=40;
        }else{
            descuento=30;
        }
        
    }else if (cantidadLamparas==4){
        if (marca=="ArgentinaLuz" ||  marca=="FelipeLamparas") {
            descuento=25;
        }else{
            descuento=20;
        }
        
    }else if (cantidadLamparas==3){
        if (marca=="ArgentinaLuz") {
            descuento=15;
        }else if (marca=="FelipeLamparas") {
            descuento=10;
        }else{
            descuento=5;
        }
    }

    precioSinDescuento=PRECIO*cantidadLamparas;
    precioDescuento=precioSinDescuento-precioSinDescuento*descuento/100;


    document.getElementById("txtIdprecioDescuento").value=precioDescuento

    if (precioDescuento>120) {
        ingresosBrutos=precioDescuento+precioDescuento*0.10
        importeFinal=precioDescuento*0.10;
        document.getElementById("txtIdprecioDescuento").value=ingresosBrutos
        alert("”Usted pago "+importeFinal+ " de IIBB.”")
    }
}












/* switch (cantidadLamparas) {
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    descuento=40;
                    break;
                default:
                    descuento=30;
                }break;
        case 4:
            switch(marca){
                case"ArgentinaLuz":
                case "FelipeLamparas":
                    descuento=25;
                    break;
                default:
                    descuento=20;
                    break;
                    
            }break;
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    descuento=15;
                    break;
                case "FelipeLamparas":
                    descuento=10;
                    break;
                default:
                    descuento=5;
                    break;
                    
            }break;
        case 2:
        case 1:
            descuento=0;
            break;

        default:
            descuento=50
        break;
    }
    precioDescuento=precioSinDescuento-precioSinDescuento*descuento/100;

    document.getElementById("txtIdprecioDescuento").value=precioDescuento

    if (precioDescuento>120) {
        ingresosBrutos=precioDescuento+precioDescuento*0.10
        importeFinal=precioDescuento*0.10;
        document.getElementById("txtIdprecioDescuento").value=ingresosBrutos
        alert("”Usted pago "+importeFinal+ " de IIBB.”")
    }
}*/
