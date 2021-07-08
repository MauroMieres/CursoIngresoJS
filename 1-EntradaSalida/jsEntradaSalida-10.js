/* Mauro Mieres
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let importeNuevo;

	//utilizo un float porq necesito discrimar los enteros con decimales en este caso
	importe = parseFloat(document.getElementById('txtIdImporte').value);

	descuento = importe * 0.25; //0.25 = 25%

	importeNuevo = importe - descuento

	//con esto muestro en la casilla "resultado" el resultado obtenido
	document.getElementById('txtIdResultado').value = importeNuevo;
}

/* 	entradas
		prompt
		document.getElementById(...) value o id.value
		x = id.value

	procesos
		+; -; *; /; %;

	salidas
		console.log
		alert
		document.write
		id.value = x

		*/
	
