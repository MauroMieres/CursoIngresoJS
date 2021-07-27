/* Mieres Mauro 
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

let tipoBolsa;
let cantidadBolsas;
let bolsasArena;
let bolsasCal;
let bolsasCemento;
let precioArena;
let precioCal;
let precioCemento;
let precioFinal;
let precioFinalConDescuento;
let respuesta;
let precio;
let bolsasTotales;

function mostrar()
{
	respuesta = 'si';
	bolsasArena = 0;
 	bolsasCal = 0;
 	bolsasCemento = 0;
 	precioArena = 0;
 	precioCal = 0;
 	precioCemento = 0;
 	bolsasTotales = 0;

 	while(respuesta == 'si')
 	{
 		tipoBolsa = prompt("Ingrese el tipo de bolsa: arena/cal/cemento");
 		while(tipoBolsa != 'arena' && tipoBolsa != 'cal' && tipoBolsa != 'cemento')
 		{
 			tipoBolsa = prompt("Por favor ingrese un tipo de bolsa valido: arena/cal/cemento");
 		}

 		cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));

 		while(isNaN(cantidadBolsas) || cantidadBolsas < 1)
 		{
 			cantidadBolsas = parseInt(prompt("Por favor ingrese una cantidad de bolsas valida"));
 		}

 		precio = parseInt(prompt("Ingrese el precio de cada bolsa"));

 		while(isNaN(cantidadBolsas) || cantidadBolsas < 1)
 		{
 			cantidadBolsas = parseInt(prompt("Por favor ingrese un precio de bolsa valido"));
 		}

 		switch(tipoBolsa)
 		{
 			case 'arena':
 				bolsasArena = bolsasArena + cantidadBolsas;
 				precio = precio * cantidadBolsas;
 				precioArena = precioArena + precio;
 				break;

 			case 'cal':
 				bolsasCal = bolsasCal + cantidadBolsas;
 				precio = precio * cantidadBolsas;
 				precioCal = precioCal + precio;
 				break;

 			case 'cemento':
 				bolsasCemento = bolsasCemento + cantidadBolsas
 				precio = precio * cantidadBolsas;
 				precioCemento = precioCemento + precio;
 				break;
 		}

 		respuesta = prompt("Quiere ingresar otro tipo de bolsa? si/no");
 		while(respuesta != 'si' && respuesta != 'no')
 		{
 			respuesta = prompt("Por favor ingrese una respuesta correcta, si/no");
 		} 		
 	}

 	bolsasTotales = bolsasArena + bolsasCal + bolsasCemento;
 	precioFinal = precioArena + precioCal + precioCemento;

	if(bolsasTotales>30)
 		{
 			precioFinalConDescuento = precioFinal - (precioFinal * 0.25);
 		}
 		if(bolsasTotales>10 || bolsasTotales <30)
 		{
 			precioFinalConDescuento = precioFinal - (precioFinal * 0.15);
 		}
 		
	//A:
	alert("El precio final sin descuento es: $"+precioFinal);
	//B:
	if(bolsasTotales>30)
	{
		alert("El importe total a pagar con descuento es de: $"+precioFinalConDescuento);
	}
	//D:
	if(bolsasArena>bolsasCal)
	{
		if(bolsasArena>bolsasCemento)
		{
			alert("Hay mas bolsas de arena que de otro tipo");
		}
	}

	if(bolsasCal>bolsasArena)
	{
		if(bolsasCal>bolsasCemento)
		{
			alert("Hay mas bolsas de cal que de otro tipo");
		}
		else
		{
			alert("Hay mas bolsas de cemento que de otro tipo");
		}
	}

	//F:
	if(precioArena>precioCal)
	{
		if(precioArena>precioCemento)
		{
			alert("Arena es el tipo mas caro de bolsa");
		}
	}
	if(precioCal>precioArena)
	{
		if(precioCal>precioCemento)
		{
			alert("Cal es el tipo mas caro de bolsa");
		}
			else
		{
			alert("Cemento es el tipo mas caro de bolsa");
		}
	}	
}
