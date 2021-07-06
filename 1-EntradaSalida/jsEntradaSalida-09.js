/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let sueldoNuevo;

	//utilizo un float porq necesito discrimar los enteros con decimales en este caso
	sueldo = parseFloat(document.getElementById('txtIdSueldo').value);

	aumento = sueldo * 0.10; //0.10 = 10%

	sueldoNuevo = sueldo + aumento

	//con esto muestro en la casilla "resultado" el resultado obtenido
	document.getElementById('txtIdResultado').value = sueldoNuevo;

}
