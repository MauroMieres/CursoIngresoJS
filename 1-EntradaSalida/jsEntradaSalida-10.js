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

	//nueva consiga: que el usuario ingrese cuanto quiere hacer de descuento
	//probe hacerlo con if y quedo asi para q no introduzcan valores fuera del parametro:

	descuento = prompt("Ingrese cuanto descuento quiere hacer (entre 1% y 100%)");

	if(descuento >= 1 && descuento <= 100)
	{
		descuento = (descuento / 100);
		importeNuevo = importe - (importe * descuento);
		document.getElementById('txtIdResultado').value = importeNuevo;
	}
	else
	{
		alert("Por favor ingrese un numero valido")
	}
	
	//vieja consigna: 
	//descuento = importe * 0.25; //0.25 = 25%

	//con esto muestro en la casilla "resultado" el resultado obtenido
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
	
