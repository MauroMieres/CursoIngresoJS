/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let numero1;
let numero2;
let resultadoOperacion;
let operador;
let maximoNumero = 10;
let minimoNumero = 1;
let maximoOperador = 4;
let minimoOperador = 1;
let respuesta;

function comenzar()
{
	//Match.ceil vs Math.round, el match ceil me permite redondear de forma mas "pareja"
	//de esta forma es "igual" de probable que salgan los maximos y minimos a diferencia del Math.round
	numero1 = Math.ceil(Math.random()*(maximoNumero - minimoNumero) + minimoNumero);
	numero2 = Math.ceil(Math.random()*(maximoNumero - minimoNumero) + minimoNumero);

	operador =	Math.round(Math.random()*(maximoOperador - minimoOperador) + minimoOperador);

	switch(operador)
	{
			//suma
		case 1:
			document.getElementById('txtIdPrimerNumero').value = numero1;
			document.getElementById('txtIdOperador').value = '+';
			document.getElementById('txtIdSegundoNumero').value = numero2;
			resultadoOperacion = numero1 + numero2;
			break;
			//resta
		case 2:
			document.getElementById('txtIdPrimerNumero').value = numero1;
			document.getElementById('txtIdOperador').value = '-';
			document.getElementById('txtIdSegundoNumero').value = numero2;
			resultadoOperacion = numero1 - numero2;
			break;
			//multiplicacion
		case 3:
			document.getElementById('txtIdPrimerNumero').value = numero1;
			document.getElementById('txtIdOperador').value = '*';
			document.getElementById('txtIdSegundoNumero').value = numero2;
			resultadoOperacion = numero1 * numero2;
			break;
			//division
		case 4:
			document.getElementById('txtIdPrimerNumero').value = numero1;
			document.getElementById('txtIdOperador').value = '/';
			document.getElementById('txtIdSegundoNumero').value = numero2;
			resultadoOperacion = parseInt(numero1 / numero2);
			break;
	}
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = parseInt(document.getElementById('txtIdRespuesta').value);
	if(resultadoOperacion == respuesta)
	{
		alert("Bien hecho, el resultado es correcto");
	}
	else
	{
		alert("Resultado Incorrecto, suerte con la proxima operacion");
	}
	this.comenzar();
}//FIN DE LA FUNCIÓN
