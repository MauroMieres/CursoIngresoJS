/*Mieres Mauro
Enunciado:
3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página*/

let numero;
let contadorGanados = 0;
let contadorPerdidos = 0;
let contadorEmpatados = 0;

function comenzar()
{ 	
	let maximo = 3;
	let minimo = 1;

	numero = Math.round(Math.random()*(maximo - minimo) + minimo);
}//FIN DE LA FUNCIÓN
function piedra()
{
	this.comenzar();
	let piedra = 1;
	
	if(numero == piedra)
	{
		alert("Empate");
		contadorEmpatados = contadorEmpatados + 1;
	}
	else
	{
		if(numero == 2)
		{
			alert("Perdiste");
			contadorPerdidos = contadorPerdidos + 1;
		}
		else
		{
				alert("Ganaste");
				contadorGanados = contadorGanados + 1;			
		}
	}	
	this.mostrarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
	this.comenzar();
	let papel = 2;

	if(numero == papel)
	{
		alert("Empate");
		contadorEmpatados = contadorEmpatados + 1;
	}
	else
	{
		if(numero == 3)
		{
			alert("Perdiste");
			contadorPerdidos = contadorPerdidos + 1;
		}
		else
		{		
				alert("Ganaste");	
				contadorGanados = contadorGanados + 1;		
		}
	}
	this.mostrarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	this.comenzar();
	let tijera = 3;

	if(numero == tijera)
	{
		alert("Empate");
		contadorEmpatados = contadorEmpatados + 1;
	}
	else
	{
		if(numero == 1)
		{
			alert("Perdiste");
			contadorPerdidos = contadorPerdidos + 1;
		}
		else
		{
				alert("Ganaste");	
				contadorGanados = contadorGanados + 1;	
		}
	}
	this.mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('txtIdGanadas').value = "Ganados: "+contadorGanados;
	document.getElementById('txtIdPerdidas').value = "Perdidos: "+contadorPerdidos;
	document.getElementById('txtIdEmpatadas').value = "Empatados: "+contadorEmpatados;
}