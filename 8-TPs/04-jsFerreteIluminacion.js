/*4. Las lámparas están al mismo precio de $35 pesos final.

A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.

B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.

C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es 
del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E. Si el importe final con descuento suma más de $120 se debe sumar 
un 10% de ingresos brutos en informar del impuesto con el siguiente 
mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.	

 */
function CalcularPrecio () 
{
	
	let precioLamparas;
	let cantidadLamparas;
	let precioTotalLamparas;
	let marcaLamparas;
	let precioFinal;

	precioLamparas = 35,
	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	precioTotalLamparas = precioLamparas * cantidadLamparas;
	marcaLamparas = document.getElementById('Marca').value;

	//A.
	if(cantidadLamparas >= 6)
	{
		precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.50);
		document.getElementById('txtIdprecioDescuento').value = precioFinal
	}
	//B.
	else
	{
		if(cantidadLamparas == 5 && marcaLamparas == 'ArgentinaLuz')
		{
		precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.40);
		document.getElementById('txtIdprecioDescuento').value = precioFinal
		}
		else
		{
			if(cantidadLamparas == 5 && marcaLamparas != 'ArgentinaLuz')
			{
				precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.30);
				document.getElementById('txtIdprecioDescuento').value = precioFinal
			}
			//C.		
			else
			{
				if(cantidadLamparas == 4 && (marcaLamparas == 'ArgentinaLuz' || marcaLamparas == 'FelipeLamparas'))
				{
					precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.25);
					document.getElementById('txtIdprecioDescuento').value = precioFinal
				}
				else
				{
					if(cantidadLamparas == 4 && (marcaLamparas != 'ArgentinaLuz' || marcaLamparas != 'FelipeLamparas'))
					{
						precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.20);
						document.getElementById('txtIdprecioDescuento').value = precioFinal
					}
					//D.
					else
					{
						if(cantidadLamparas == 3 && marcaLamparas == 'ArgentinaLuz')
						{
							precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.15);
							document.getElementById('txtIdprecioDescuento').value = precioFinal
						}
						else
						{
							if(cantidadLamparas == 3 && marcaLamparas == 'FelipeLamparas')
							{
								precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.10);
								document.getElementById('txtIdprecioDescuento').value = precioFinal
							}
							else
							{
								if(cantidadLamparas == 3 && marcaLamparas != 'FelipeLamparas')
								{
									precioFinal = precioTotalLamparas - ( precioTotalLamparas * 0.05);
									document.getElementById('txtIdprecioDescuento').value = precioFinal
								}
								else
								{
									if(precioFinal > 120)
									{
										alert(precioFinal);
									}
								}
							}
						}
					}
				}
			}
		}
	}
	alert("precio sin descuento" + precioTotalLamparas);

 	
}
