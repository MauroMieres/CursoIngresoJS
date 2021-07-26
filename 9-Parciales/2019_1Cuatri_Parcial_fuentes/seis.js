let hora;

function mostrar()
{
	hora = parseInt(document.getElementById('laHora').value);

	if(isNaN(hora) || hora<0 || hora>24)
	{
		alert("Por favor ingrese una hora valida");
		document.getElementById('laHora').value = 0;
	}
	
	switch(hora)
	{
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			alert("Es de noche");
			break;

		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;

		default:
			alert("A dormir");
			break;
	}
}
