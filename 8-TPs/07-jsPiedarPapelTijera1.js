/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
	
	let numero;

function comenzar()
{
	let maximo = 3;
	let minimo = 1;

	numero = Math.round(Math.random()*(maximo - minimo) + minimo);
}
function piedra()
{	
	this.comenzar();
	let piedra = 1;
	
	if(numero == piedra)
	{
		alert("Empate");
	}
	else
	{
		if(numero == 2)
		{
			alert("Perdiste");
		}
		else
		{
				alert("Ganaste");			
		}
	}
}
function papel()
{
	this.comenzar();
	let papel = 2;

	if(numero == papel)
	{
		alert("Empate");
	}
	else
	{
		if(numero == 3)
		{
			alert("Perdiste");
		}
		else
		{		
				alert("Ganaste");		
		}
	}
}
function tijera()
{
	this.comenzar();
	let tijera = 3;

	if(numero == tijera)
	{
		alert("Empate");
	}
	else
	{
		if(numero == 1)
		{
			alert("Perdiste");
		}
		else
		{
				alert("Ganaste");	
		}
	}
}