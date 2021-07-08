/* Mieres Mauro 
operadores aritmeticos, + - / * %, sus operadores son numericos, number
operadores relacionales; == (igual) != (distinto) > mayor < menor >= mayor o igual <= menor o igual
sus operadores son datos, ejemplo, booleanos, strings, etc, el resultado es un booleano

Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if( edad == 15)
	{
		alert("♫ Mi niña bonita, mi dulce princesa, me siento en las nubes, cuanto tu me besas ♫")
	}
}