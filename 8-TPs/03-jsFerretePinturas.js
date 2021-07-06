/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaC;
	let temperaturaF;

	tempF = parseFloat(document.getElementById('txtIdTemperatura').value);

	//utilizo parse int porque quiero un valor entero, no me interesan los decimales de la temperatura
	tempC = parseInt((tempF - 32) /1.8);

	alert(` ${tempF} grados Fahrenheit equivalen a ${tempC} grados Celsius`);

}

function CentigradosFahrenheit () 
{
	let temperaturaC;
	let temperaturaF;

	tempC = parseFloat(document.getElementById('txtIdTemperatura').value);

	tempF = parseInt((tempC * 1.8) + 32);

	alert(` ${tempC} grados Celsius equivalen a ${tempF} grados Fahrenheit`);
	
}
