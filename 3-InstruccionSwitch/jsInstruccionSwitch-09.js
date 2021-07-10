/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra
 $15.000 por cada estadia como base, se pide el ingreso de una estacion
  del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene
 un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene
 un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene
 un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene 
 el precio sin descuento*/

function mostrar()
{
	let destino;
	let estacion;
	let estadia;
	let precioFinal;
	
	estadia = 15000;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				//20% de aumento
				precioFinal = (estadia * 1.20);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Cataratas" || destino == "Cordoba")
			{
				//10% de descuento
				precioFinal = estadia - (estadia * 0.10);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Mar del plata")
			{
				//20% de descuento
				precioFinal = estadia - (estadia * 0.20);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			break;

		case "Verano":
			if(destino == "Bariloche")
			{
				precioFinal = estadia - (estadia * 0.20);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Cataratas" || destino == "Cordoba")
			{
				//10% de aumento
				precioFinal = (estadia * 1.10);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Mar del plata")
			{
				precioFinal = (estadia * 1.20);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			break;

		case "Otoño":
		case "Primavera":

			if(destino == "Bariloche")
			{
				precioFinal = (estadia * 1.10);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Cataratas")
			{
				precioFinal = (estadia * 1.10);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Mar del plata")
			{
				precioFinal = (estadia * 1.10);
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
			else if(destino == "Cordoba")
			{
				precioFinal = estadia;
				alert(`${destino} en ${estacion} sale $ ${precioFinal}`);
			}
	}

}//FIN DE LA FUNCIÓN