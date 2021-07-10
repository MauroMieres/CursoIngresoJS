/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaCelsius;
	let temperaturaFahrenheit;

	temperaturaFahrenheit = parseFloat(document.getElementById('txtIdTemperatura').value);

	//utilizo parse int porque quiero un valor entero, no me interesan los decimales de la temperatura
	temperaturaCelsius = parseInt((temperaturaFahrenheit - 32) /1.8);

	alert(` ${temperaturaFahrenheit} grados Fahrenheit equivalen a ${temperaturaCelsius} grados Celsius`);
}

function CentigradosFahrenheit () 
{
	let temperaturaCelsius;
	let temperaturaFahrenheit;

	temperaturaCelsius = parseFloat(document.getElementById('txtIdTemperatura').value);

	temperaturaFahrenheit = parseInt((temperaturaCelsius * 1.8) + 32);

	alert(` ${temperaturaCelsius} grados Celsius equivalen a ${temperaturaFahrenheit} grados Fahrenheit`);
}
