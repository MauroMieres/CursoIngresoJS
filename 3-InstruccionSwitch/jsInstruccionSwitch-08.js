/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	/*con if
	if(destino == "Mar del plata" || destino == "Cataratas")
	{
		alert("Hace calor");
	}
	else if(destino == "Ushuaia" || destino == "Bariloche")
	{
		alert("Hace frio");
	}*/

	//con switch

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
	}

}//FIN DE LA FUNCIÓN