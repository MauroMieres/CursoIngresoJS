/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
			alert("Falta para el invierno");
			break;

		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;

		case "Julio":
		case "Agosto":
		case "Septiembre":
			alert("Abrigate que hace frio");
			break;

		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Falta para el invierno");
			break;
	}
}//FIN DE LA FUNCIÓN