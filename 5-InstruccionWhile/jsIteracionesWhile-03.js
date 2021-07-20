/*Mauro Mieres
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let clave = "utn750";

	claveIngresada = prompt("ingrese la clave");

	while(claveIngresada == clave)
	{
		alert("Clave ingresada correctamente");
	}
	alert("La clave ingresada es incorrecta");	
}//FIN DE LA FUNCIÓN
