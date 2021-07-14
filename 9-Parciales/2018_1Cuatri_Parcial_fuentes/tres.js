function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;

	precio = prompt("Ingrese el precio");
	precio = parseFloat(precio);

	descuento = prompt("Ingrese el porcentaje de descuento");
	descuento = (descuento / 100);
	descuento = parseFloat(descuento);

	precioFinal = precio - (precio * descuento);

	document.getElementById('elPrecioFinal').value = precioFinal		
}
	
