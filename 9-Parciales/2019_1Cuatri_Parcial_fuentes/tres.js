/*Mauro Mieres DIV H
Pedir por prompt el precio y el porcentaje de
 descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;
	
	precio = prompt("Ingrese el precio");
	precio = parseFloat(precio);

	descuento = prompt("Ingrese el % de descuento deseado");
	descuento = parseFloat(descuento);

	descuento = descuento / 100;

	precioFinal = precio - (precio * descuento);
	
	document.getElementById('elPrecioFinal').value = precioFinal;
}
