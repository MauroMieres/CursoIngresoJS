/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let contadorIntentos = 0;
let numeroIngresado;
let maximo = 100;
let minimo = 1;

function comenzar()
{
	numeroSecreto =parseInt(Math.round(Math.random()*(maximo - minimo) + minimo));
	alert("El numeroSecreto es: " + numeroSecreto);
}

function verificar()
{		
	numeroIngresado = document.getElementById("txtIdNumero").value;
	contadorIntentos = contadorIntentos + 1;
	if(numeroIngresado == numeroSecreto)
	{
		alert("Felicidades " + numeroSecreto + " era el numero secreto, te tomó " + contadorIntentos + " intento/s");
	}
	else
	{
		alert("No era el numero secreto, vuelva a intentar");
	}	
}
