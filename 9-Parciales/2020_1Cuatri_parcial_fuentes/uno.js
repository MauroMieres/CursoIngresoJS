/* Mieres Mauro
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

let productoTipo;
let productoPrecio;
let productoCantidad;
let productoMarca;
let productoFabricante;
let ingresos;
let alcoholMinimo;
let alcoholCantidad;
let alcoholFabricante;
let productoMasUnidadesAlcohol;
let productoMasUnidadesJabon;
let productoMasUnidadesBarbijo;
let promedioAlcohol;
let promedioJabon;
let promedioBarbijo;
let precioAlcohol;
let precioBarbijos;
let precioJabon;

function mostrar()
{
	alcoholMinimo = 301;
	//cantidad de ingresos, maximo 5, inicio en 0
	ingresos = 0;
	//acumuladores de unidades de los productos
	productoMasUnidadesAlcohol = 0;
 	productoMasUnidadesJabon = 0;
 	productoMasUnidadesBarbijo = 0;
 	//cantidad de veces que ingrese este tipo de producto
	promedioAlcohol = 0;
	promedioJabon = 0;
	promedioBarbijo = 0;
	//suma de los precios de cada vez que ingrese un producto de este tipo
	precioAlcohol = 0;
 	precioBarbijos = 0;
 	precioJabon = 0;

	while(ingresos<5)
	{
		//ingreso producto
		productoTipo = prompt("Ingrese el tipo de producto: barbijo/jabon/alcohol");
		while(productoTipo != 'barbijo' && productoTipo != 'jabon' && productoTipo != 'alcohol')
		{
			productoTipo = prompt("Por favor ingrese un tipo de producto valido: barbijo/jabon/alcohol");
		}
		
		productoPrecio = parseInt(prompt("Ingrese el precio del producto"));
		while(productoPrecio < 100 || productoPrecio > 300 || isNaN(productoPrecio))
		{
			productoPrecio = parseInt(prompt("Por favor ingrese un precio entre $100 y $300"));
		}

		productoCantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto"));

		while(productoCantidad < 1 || productoCantidad > 1000 || isNaN(productoCantidad))
		{
			productoCantidad = parseInt(prompt("Por favor ingrese entre 1 y 1000 unidades del producto"));
		}

		productoMarca = prompt("Ingrese la marca del producto");

		while(isNaN(productoMarca) == false)
		{
			productoMarca = prompt("Por favor ingrese una marca valida");
		}

		productoFabricante = prompt("Ingrese el fabricante del producto");

		while(isNaN(productoFabricante) == false)
		{
			productoFabricante = prompt("Por favor ingrese un fabricante valido");
		}
		//A:
		if(productoPrecio<alcoholMinimo)
		{
			alcoholMinimo = productoPrecio;
			alcoholCantidad = productoCantidad;
			alcoholFabricante = productoFabricante;
		}
		//B:
		
			switch(productoTipo)
			{
				case 'jabon':
					productoMasUnidadesJabon = productoMasUnidadesJabon + productoCantidad;
					precioJabon = precioJabon + productoPrecio;
					promedioJabon++;
					break;

				case 'alcohol':
					productoMasUnidadesAlcohol = productoMasUnidadesAlcohol + productoCantidad;
					precioAlcohol = precioAlcohol + productoPrecio;
					promedioAlcohol++;
					break;

				default:
					productoMasUnidadesBarbijo = productoMasUnidadesBarbijo + productoCantidad;
					precioBarbijos = precioBarbijos + productoPrecio;
					promedioBarbijo++;
			}
		
		ingresos++;
	}

	alert("A) Alcohol mas barato unidades: "+alcoholCantidad+" ,alcohol mas barato fabricante: "+alcoholFabricante);

	if(productoMasUnidadesBarbijo>productoMasUnidadesAlcohol || productoMasUnidadesBarbijo>productoMasUnidadesJabon)
	{
		alert("B) Promedio por compra: "+precioBarbijos / promedioBarbijo);
	}
	if(productoMasUnidadesAlcohol>productoMasUnidadesJabon)
	{
		alert("B) Promedio por compra: "+precioAlcohol / promedioAlcohol);
	}
	else
	{
		alert("B) Promedio por compra: "+precioJabon / promedioJabon);
	}
		
	//C:
	alert("C) Unidades de jabon: "+productoMasUnidadesJabon);
}
