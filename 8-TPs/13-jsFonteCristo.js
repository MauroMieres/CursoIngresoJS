/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
let numeroIngresado;
let cantidadPares;
let cantidadImpares;

function ComenzarIngreso () 
{
 	
}

function NumerosPares ()
{
	let cantidadPares = 0;
	
	numeroIngresado = document.getElementById('txtIdNumero').value;

	if(isNaN(numeroIngresado) || numeroIngresado<0)
	{
		alert("Por favor ingrese un numero positivo");
		document.getElementById('txtIdNumero').value = 0;
	}

	//A:
	while(numeroIngresado>0)
	{
		if(numeroIngresado%2 == 0)
		{
			cantidadPares = cantidadPares + 1;
			numeroIngresado = numeroIngresado - 2;
		}

		else
		{
			numeroIngresado = numeroIngresado - 1;
		}

	}	
	alert(cantidadPares);
}

function NumerosImpares ()
{
	let cantidadImpares = 0;

	numeroIngresado = document.getElementById('txtIdNumero').value;

	if(isNaN(numeroIngresado) || numeroIngresado<0)
	{
		alert("Por favor ingrese un numero positivo");
		document.getElementById('txtIdNumero').value = 0;
	}

	//B:
	while(numeroIngresado>0)
	{
		if(numeroIngresado%2 == 1)
		{
			cantidadImpares = cantidadImpares + 1;
			numeroIngresado = numeroIngresado - 2;
		}

		else
		{
			numeroIngresado = numeroIngresado - 1;	
		}
	}	
	alert(cantidadImpares);
}

let divisorMinimo = 1;
let contadorDivisibles;

function NumerosDivisibles() 
{
	contadorDivisibles = 0;

	numeroIngresado = document.getElementById('txtIdNumero').value;

	if(isNaN(numeroIngresado) || numeroIngresado<0)
	{
		alert("Por favor ingrese un numero positivo");
		document.getElementById('txtIdNumero').value = 0;
	}

	//C:
	while(divisorMinimo<=100)
	{
		if(numeroIngresado%divisorMinimo == 0)
		{
			contadorDivisibles = contadorDivisibles + 1;
			divisorMinimo = divisorMinimo + 1;
		}
		else
		{
			divisorMinimo = divisorMinimo + 1;
		}
	}
	alert(contadorDivisibles);
}

let primo;
let i;

function VerificarPrimo() 
{
	numeroIngresado = document.getElementById('txtIdNumero').value;

	if(isNaN(numeroIngresado) || numeroIngresado<0)
	{
		alert("Por favor ingrese un numero positivo");
		document.getElementById('txtIdNumero').value = 0;
	}

	//D:
	primo = true;
	i = 2;

	while(i<numeroIngresado)
	{
		if(numeroIngresado%i == 0)
		{
			primo = false;
			break;
		}
		i++;
	}

	if(primo == true)
	{
		alert("El numero ingresado es primo");
	}
	else
	{
		alert("El numero ingresado no es primo");
	}
}

let contadorNoPrimos;
let cantidadPrimos;

function NumerosPrimos() 
{	
	contadorNoPrimos = 0;
	cantidadPrimos = 0;
	i;

	numeroIngresado = document.getElementById('txtIdNumero').value;

	if(isNaN(numeroIngresado) || numeroIngresado<0)
	{
		alert("Por favor ingrese un numero positivo");
		document.getElementById('txtIdNumero').value = 0;
	}

	//E:
	
	i = 1;

	while(i<numeroIngresado)
	{
		if(numeroIngresado%i == 0)
		{
			contadorNoPrimos++;
			break;
		}
		i++;
	}

	cantidadPrimos = (numeroIngresado - contadorNoPrimos)

	alert(cantidadPrimos);
}