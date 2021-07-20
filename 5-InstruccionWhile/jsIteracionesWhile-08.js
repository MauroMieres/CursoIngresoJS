/*Mauro Mieres
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	
	let respuesta;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	respuesta='s';
	
	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if(numeroIngresado>=0)
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			respuesta = prompt("Quiere ingresar otro numero? s/n");
		}
		else
		{
			acumuladorNegativos = acumuladorNegativos * numeroIngresado;
			respuesta = prompt("Quiere ingresar otro numero? s/n");
		}
	}
	//tuve q hacer esto porque si no al no introducirse numeros negativos
	//muestra que el producto es = 1, para q no pase eso hice esto:
	if(acumuladorNegativos == 1)
	{
		acumuladorNegativos = 0;
		document.getElementById('txtIdProducto').value= "Producto de los negativos: "+acumuladorNegativos;
	}
	else
	{
		document.getElementById('txtIdProducto').value= "Producto de los negativos: "+acumuladorNegativos;
	}
	document.getElementById('txtIdSuma').value= "Suma de los positivos: "+acumuladorPositivos;
}