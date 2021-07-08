/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	let minimo = 1;
	let maximo = 10;
	let numero;

	numero = Math.round(Math.random()*(maximo - minimo) + minimo);

	if(numero == 10 && numero == 9)
	{
		alert("Tu nota es un " + numero + ", Excelente!");
	}
	else
	{
		if(numero <= 8 && numero >= 4)
		{
			alert("Tu nota es un " + numero + ", Aprobado");
		}
		else
		{
			if(numero <= 4)
			{
				alert("Tu nota es un " + numero + ", Desaprobado");
			}
		}
	}
}//FIN DE LA FUNCIÓN