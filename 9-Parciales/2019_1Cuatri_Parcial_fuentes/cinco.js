let continente;
let precioDia;
let precioFinal;
let cantidadDias;
let precioEstadia;
let respuesta;

function mostrar()
{
	continente = document.getElementById('Marca').value;
	precioDia = 100;

	switch(continente)
	{
		case 'América':
			cantidadDias = parseInt(prompt("Ingrese la cantidad de dias de su estadia"));	

			while(isNaN(cantidadDias))
			{
				cantidadDias = parseInt(prompt("Ingrese una cantidad de dias valida"));
			}	

			precioEstadia = precioDia * cantidadDias;
			precioFinal = precioEstadia - (precioEstadia * 0.5);
			
			respuesta = prompt("Paga con debito? Ingrese si/no");	
			while(respuesta != 'si' && respuesta != 'no')
			{
				respuesta = prompt("Por favor ingrese solo: si/no");	
			}

			switch(respuesta)
			{
				case 'si':
					precioFinal = precioFinal - (precioFinal * 0.1);
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;

				default:
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;
			}
			break;

		case 'África':
			cantidadDias = parseInt(prompt("Ingrese la cantidad de dias de su estadia"));

			while(isNaN(cantidadDias))
			{
				cantidadDias = parseInt(prompt("Ingrese una cantidad de dias valida"));
			}

			precioEstadia = precioDia * cantidadDias;
			precioFinal = precioEstadia - (precioEstadia * 0.6);
			
			respuesta = prompt("Paga con mercadopago o efectivo? Ingrese si/no");	
			while(respuesta != 'si' && respuesta != 'no')
			{
				respuesta = prompt("Por favor ingrese solo: si/no");	
			}

			switch(respuesta)
			{
				case 'si':
					precioFinal = precioFinal - (precioFinal * 0.15);
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;

				default:
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;
			}
			break;

		case 'Europa':
			cantidadDias = parseInt(prompt("Ingrese la cantidad de dias de su estadia"));

			while(isNaN(cantidadDias))
			{
				cantidadDias = parseInt(prompt("Ingrese una cantidad de dias valida"));
			}

			precioEstadia = precioDia * cantidadDias;
			precioFinal = precioEstadia - (precioEstadia * 0.2);
			
			respuesta = prompt("Ingrese su forma de pago: debito/mercadopago/otra");	
			while(respuesta != 'debito' && respuesta != 'mercadopago' && respuesta != 'otra')
			{
				respuesta = prompt("Por favor ingrese una forma de pago valida: debito/mercadopago/otra");	
			}

			switch(respuesta)
			{
				case 'debito':
					precioFinal = precioFinal - (precioFinal * 0.15);
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;

				case 'mercadopago':
					precioFinal = precioFinal - (precioFinal * 0.10);
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;

				default:
					precioFinal = precioFinal - (precioFinal * 0.05);
					alert("Su estadia tiene un valor de: $"+precioFinal);
					break;
			}
			break;

		default:
			cantidadDias = parseInt(prompt("Ingrese la cantidad de dias de su estadia"));	

			while(isNaN(cantidadDias))
			{
				cantidadDias = parseInt(prompt("Ingrese una cantidad de dias valida"));
			}	
			
			precioEstadia = precioDia * cantidadDias;
			precioFinal =  precioEstadia * 1.2;
			alert("Su estadia tiene un valor de: $"+precioFinal);
	}
}
