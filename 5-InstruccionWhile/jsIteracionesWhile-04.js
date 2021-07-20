/*Mauro Mieres
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("Ingrese un numero entre 0 y 9");

	while(numeroIngresado<10)
	{
		if(numeroIngresado>-1)
		{
		alert(numeroIngresado+" Esta dentro de los parametros");
		break;	
		}
	}

	if(numeroIngresado>=10 || numeroIngresado<-1)
	{
		alert(numeroIngresado+" No esta dentro de los parametros");
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN