/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let sexoFemenino = "f";
	let sexoMasculino = "m";

	sexoIngresado = prompt("Ingrese su sexo, f ó m");

	if(sexoIngresado != "f" && sexoIngresado != "m")
	{
		alert("Introduzca un sexo válido");
	}
	else
	{
		document.getElementById('txtIdSexo').value = "Tu sexo es: "+sexoIngresado;
	}
	
}//FIN DE LA FUNCIÓN