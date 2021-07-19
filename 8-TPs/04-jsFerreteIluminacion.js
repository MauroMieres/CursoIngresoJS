/*4. Las lámparas están al mismo precio de $35 pesos final.

A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.

B. Si compra 5 lamparitas bajo consumo marcaLamparas "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marcaLamparas el descuento es del 30%.

C. Si compra 4 lamparitas bajo consumo marcaLamparas "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marcaLamparas el descuento es del 20%.

D. Si compra 3 lamparitas bajo consumo marcaLamparas "ArgentinaLuz" el descuento es 
del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marcaLamparas un 5%.

E. Si el importe final con descuento suma más de $120 se debe sumar 
un 10% de ingresos brutos en informar del impuesto con el siguiente 
mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.	

 */
function CalcularPrecio () 
{
	let precioLamparas = 35;
	let cantidadLamparas;
	let precioTotalLamparas;
	let marcaLamparas;
	let precioFinal;
	let iibb;
	let precioiibb;
	let descuento;

	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	marcaLamparas = document.getElementById('Marca').value;
	precioTotalLamparas = precioLamparas * cantidadLamparas;
	alert("precio total sin descuento: "+precioTotalLamparas+" cant. de lamparas: "+cantidadLamparas);

	switch(cantidadLamparas)
	{
		case '1':
		case '2':
			descuento = 0;
			break;

		case '3':
			switch(marcaLamparas)
			{	
				case "ArgentinaLuz"	:		
				descuento = 0.15;	
				break;

				case "FelipeLamparas":
				descuento = 0.10;
				break;

				default: 
				descuento = 0.05;
			}
			break;

		case '4':
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				descuento = 0.25;
				break;

				case "FelipeLamparas":
				descuento = 0.25
				break;

				default:
				descuento = 0.20;
			}
			break;

		case '5':
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				descuento = 0.40;
				break;

				default:
				descuento = 0.30;
			}
			break;
			
			default:
			descuento = 0.50;
	}

	precioFinal = precioTotalLamparas - (precioTotalLamparas * descuento);

	if(precioFinal > 120)
		{
		precioiibb = precioFinal * 1.10;
		iibb = precioiibb - precioFinal;
		//.toFixed(x) siendo x la cantidad de digitos que quiero mostrar
		alert("IIBB Usted pago $ "+precioiibb.toFixed(2)+" , siendo "+iibb.toFixed(2)+" el impuesto que se pagó.");
		document.getElementById('txtIdprecioDescuento').value = precioiibb.toFixed(2);
		}
		else
		{
		document.getElementById('txtIdprecioDescuento').value = precioFinal.toFixed(2);
		}
}

/* solo con if:
	
	let precioLamparas;
	let cantidadLamparas;
	let precioTotalLamparas;
	let marcaLamparasLamparas;
	let precioFinal;
	let iibb;
	let precioiibb;

	precioLamparas = 35,
	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	precioTotalLamparas = precioLamparas * cantidadLamparas;
	marcaLamparasLamparas = document.getElementById('marcaLamparas').value;

	//A.
	if(cantidadLamparas >= 6)
	{
		precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.50);
		document.getElementById('txtIdprecioDescuento').value = precioFinal
	}
	//B.
	else
	{
		if(cantidadLamparas == 5 && marcaLamparasLamparas == 'ArgentinaLuz')
		{
		precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.40);
		document.getElementById('txtIdprecioDescuento').value = precioFinal
		}
		else
		{
			if(cantidadLamparas == 5 && marcaLamparasLamparas != 'ArgentinaLuz')
			{
				precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.30);
				document.getElementById('txtIdprecioDescuento').value = precioFinal
			}
			//C.		
			else
			{
				if(cantidadLamparas == 4 && (marcaLamparasLamparas == 'ArgentinaLuz' || marcaLamparasLamparas == 'FelipeLamparas'))
				{
					precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.25);
					document.getElementById('txtIdprecioDescuento').value = precioFinal
				}
				else
				{
					if(cantidadLamparas == 4 && (marcaLamparasLamparas != 'ArgentinaLuz' || marcaLamparasLamparas != 'FelipeLamparas'))
					{
						precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.20);
						document.getElementById('txtIdprecioDescuento').value = precioFinal
					}
					//D.
					else
					{
						if(cantidadLamparas == 3 && marcaLamparasLamparas == 'ArgentinaLuz')
						{
							precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.15);
							document.getElementById('txtIdprecioDescuento').value = precioFinal
						}
						else
						{
							if(cantidadLamparas == 3 && marcaLamparasLamparas == 'FelipeLamparas')
							{
								precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.10);
								document.getElementById('txtIdprecioDescuento').value = precioFinal
							}
							else
							{
								if(cantidadLamparas == 3 && marcaLamparasLamparas != 'FelipeLamparas')
								{
									precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.05);
									document.getElementById('txtIdprecioDescuento').value = precioFinal
								}
		
							}
						}
					}
				}
			}
		}
	}

	if(precioFinal > 120)
		{
		precioiibb = precioFinal * 1.10;
		iibb = precioiibb - precioFinal;
		//.toFixed(x) siendo x la cantidad de digitos que quiero mostrar
		alert("IIBB Usted pago $ "+precioiibb.toFixed(2)+" , siendo "+iibb.toFixed(2)+" el impuesto que se pagó.");
		}*/

	/* IF + SWITCH

	let precioLamparas = 35;
	let cantidadLamparas;
	let precioTotalLamparas;
	let marcaLamparas;
	let precioFinal;
	let iibb;
	let precioiibb;
	let descuento;

	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	marcaLamparas = document.getElementById('Marca').value;
	precioTotalLamparas = precioLamparas * cantidadLamparas;
	alert("precio total sin descuento: "+precioTotalLamparas+" cant. de lamparas: "+cantidadLamparas);

	switch(cantidadLamparas)
	{
		case '1':
		case '2':
			alert(cantidadLamparas);
			descuento = 0;
			break;

		case '3':
			if(marcaLamparas=="ArgentinaLuz")
			{				
				descuento = 0.15;	
			}
			if(marcaLamparas=="FelipeLamparas")
			{		
				descuento = 0.10;
			}
			else
			{				
				descuento = 0.05;
			}
			break;	

		case '4':
			if(marcaLamparas=="ArgentinaLuz")
			{				
				descuento = 0.25;
			}
			if(marcaLamparas=="FelipeLamparas")
			{
				descuento = 0.25
			}
			else
			{				
				descuento = 0.20;
			}
			break;

		case '5':
			if(marcaLamparas=="ArgentinaLuz")
			{				
				descuento = 0.40;
			}
			else
			{	
				descuento = 0.30;
			}
			break;

			default:
			descuento = 0.50;
	}

	precioFinal = precioTotalLamparas - (precioTotalLamparas * descuento);

	if(precioFinal > 120)
		{
		precioiibb = precioFinal * 1.10;
		iibb = precioiibb - precioFinal;
		//.toFixed(x) siendo x la cantidad de digitos que quiero mostrar
		alert("IIBB Usted pago $ "+precioiibb.toFixed(2)+" , siendo "+iibb.toFixed(2)+" el impuesto que se pagó.");
		document.getElementById('txtIdprecioDescuento').value = precioiibb;
		}
		else
		{
		document.getElementById('txtIdprecioDescuento').value = precioFinal;
		}*/