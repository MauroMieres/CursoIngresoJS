/*Al selecionar un destino , indicar el punto cardinal
 de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{

	let destino;

	destino = document.getElementById('txtIdDestino').value;

	//con switch
	/*switch(destino)
	{
		case "Bariloche":
			alert("Oeste");
			break;

		case "Mar del plata":
			alert("Este");
			break;
			
		case "Ushuaia":
			alert("Sur");
			break;

		case "Cataratas":
			alert("Norte");
			break;	
	}*/
	//con if

	if(destino == "Bariloche")
	{
		alert("Oeste");
	}
	else if(destino == "Mar del plata")
	{
		alert("Este");
	}
	else if(destino == "Ushuaia")
	{
		alert("Sur");
	}
	else if(destino == "Cataratas")
	{
		alert("Norte");
	}
}//FIN DE LA FUNCIÓN