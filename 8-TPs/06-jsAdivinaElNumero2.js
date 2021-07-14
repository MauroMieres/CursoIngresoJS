/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	
	if (numeroIngresado == numeroSecreto)
	{
		if(contadorIntentos>10)
		{
			alert("Afortunado en el amor");
		}
		else
		{
			if(contadorIntentos>5)
			{
				alert("Falta tecnica");
			}
			else
			{
				if(contadorIntentos == 5)
				{
					alert("Estas en la media");
				}
				else
				{
					if(contadorIntentos == 4)
					{
						alert("Buena tecnica");
					}
					else
					{
						if(contadorIntentos == 3)
						{
							alert("Fue suerte");
						}
						else
						{
							if(contadorIntentos == 2)
							{
								alert("Buena percepción");
							}
							else
							{
								alert("Usted es un Psíquico");
							}
						}
					}
				}
			}
		}
	}
}