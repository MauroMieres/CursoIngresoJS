/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro las dos variables que voy a utilizar
	let nombre;
	let edad;

	// txtIdNombre ya esta declarado, es el nombre del placeholder en esa posicion
	nombre = document.getElementById("txtIdNombre").value;

	// txtIdEdad ya esta declarado, es el nombre del placeholder en esa posicion
	edad = document.getElementById("txtIdEdad").value;

	//muestro la informacion usando un alert y concateno entre datos y texto
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

	