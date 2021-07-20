/* Mieres Mauro
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadCeros = 0;
	let cantidadPares  = 0;
	let promedioPositivos;
	let promedioNegativos;
	let respuesta = 's';
	let diferenciaPositivosNegativos;

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		respuesta =  prompt("Quiere ingresar otro numero? s/n");

		if(numeroIngresado != 0)
		{
			if(numeroIngresado % 2 == 0)
			{
				cantidadPares = cantidadPares + 1;
			}

			if(numeroIngresado>0)
			{
				cantidadPositivos = cantidadPositivos + 1;
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
			else
			{
				cantidadNegativos = cantidadNegativos + 1;
				sumaNegativos = sumaNegativos + numeroIngresado;
			}
		}
		else
		{
			cantidadCeros = cantidadCeros + 1;
		}
	}
	
	promedioNegativos = sumaNegativos / cantidadNegativos;
	promedioPositivos = sumaPositivos / cantidadPositivos;
	diferenciaPositivosNegativos = sumaNegativos + sumaPositivos;
	
	document.write("1) Suma de negativos: "+sumaNegativos+" ,(2) Suma de positivos: "+sumaPositivos+
		" ,(3) Cantidad de positivos: "+cantidadPositivos+" ,(4) Cantidad de negativos: "+cantidadNegativos+
		" ,(5) cantidad de ceros: "+cantidadCeros+" ,(6) cantidad de pares: "+cantidadPares+
		" ,(7) Promedio de positivos: "+promedioPositivos+" ,(8) Promedio de negativos: "+promedioNegativos+
		" ,(9) Diferencia entre positivos y negativos: "+diferenciaPositivosNegativos);
}

/*let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadCeros = 0;
	let cantidadPares  = 0;
	let promedioPositivos;
	let promedioNegativos;
	let respuesta = 's';
	let diferenciaPositivosNegativos;

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		respuesta =  prompt("Quiere ingresar otro numero? s/n");

		if(numeroIngresado<0)
		{
			cantidadNegativos = cantidadNegativos + 1;
			sumaNegativos = sumaNegativos + numeroIngresado;

			if(numeroIngresado % 2 == 0)
			{
				cantidadPares = cantidadPares + 1;
			}
		}	

		if(numeroIngresado>0)
		{
			cantidadPositivos = cantidadPositivos + 1;
			sumaPositivos = sumaPositivos + numeroIngresado;

			if(numeroIngresado % 2 == 0)
			{
				cantidadPares = cantidadPares + 1;
			}
		}	

		else
		{
			cantidadCeros = cantidadCeros + 1;
		}	
	}
	
	promedioNegativos = sumaNegativos / cantidadNegativos;
	promedioPositivos = sumaPositivos / cantidadPositivos;
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
	
	document.write("1) Suma de negativos: "+sumaNegativos+" ,(2) Suma de positivos: "+sumaPositivos+
		" ,(3) Cantidad de positivos: "+cantidadPositivos+" ,(4) Cantidad de negativos: "+cantidadNegativos+
		" ,(5) cantidad de ceros: "+cantidadCeros+" ,(6) cantidad de pares: "+cantidadPares+
		" ,(7) Promedio de positivos: "+promedioPositivos+" ,(8) Promedio de negativos: "+promedioNegativos+
		" ,(9) Diferencia entre positivos y negativos: "+diferenciaPositivosNegativos);*/