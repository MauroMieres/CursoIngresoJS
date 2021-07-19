/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir = 's';
	let numeroIngresado;
	let contador = 0;
	let acumulador = 0;
	let suma;
	let promedio;
	//literal de cadena, comillas simples se usa en C
	//"P" cadena de caracteres, 'p' caracter simple
	while(seguir == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		seguir = prompt("Quiere ingresar otro numero? s/n");
	}

	suma = acumulador
	promedio = acumulador / contador;

	document.getElementById('txtIdSuma').value = "Suma: "+suma;
	document.getElementById('txtIdPromedio').value = "promedio: "+promedio;
	
}//FIN DE LA FUNCIÓN