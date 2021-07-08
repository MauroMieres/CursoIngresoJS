/* Mieres Mauro 
operadores aritmeticos, + - / * %, sus operadores son numericos, number
operadores relacionales; == (igual) != (distinto) > mayor < menor >= mayor o igual <= menor o igual
sus operadores son datos, ejemplo, booleanos, strings, etc, el resultado es un booleano
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if( edad == 15)
	{
		alert("♫ Mi niña bonita, mi dulce princesa, me siento en las nubes, cuanto tu me besas ♫")
	}

	alert("Fin de la funcion");

}//FIN DE LA FUNCIÓN