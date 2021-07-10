/*Mieres Mauro
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/

function mostrar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = prompt("Ingrese el primer numero");
	parseFloat(numeroUno);

	numeroDos = prompt("Ingrese el segundo numero");
	parseFloat(numeroDos);

	if(numeroUno == numeroDos)
	{
		alert(`${numeroUno} + ${numeroDos} = ${parseFloat(numeroUno) + parseFloat(numeroDos)}`);
	}
		else
		{
			if(numeroUno > numeroDos)
			{
				alert(`${numeroUno} - ${numeroDos} = ${parseFloat(numeroUno) - parseFloat(numeroDos)}`);
				if(numeroUno - numeroDos > 10)
			{
				alert(` la resta es ${numeroUno} - ${numeroDos} y supero el 10`);
			}
				}
				else
				{
					alert(`${numeroUno} + ${numeroDos} = ${parseFloat(numeroUno) + parseFloat(numeroDos)}`)
				}
		}
}
