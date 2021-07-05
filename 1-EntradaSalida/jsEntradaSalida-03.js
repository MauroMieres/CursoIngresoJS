/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	let nombre; //declaro la variable "nombre"

	nombre = document.getElementById("txtIdNombre").value;
	//obtengo el valor de la variable usando la informacion -
	//- almacenada en el documento con document.getElementById().value

	alert(nombre);

	//uso un alert para mostrar la informacion obtenida

	document.getElementById("txtIdNombre").value = "";

	//poniendo ""; logramos que luego de apretar el boton aceptar
	//la pagina muestre denuevo el texto "Su nombre" en vez de 
	//seguir mostrando el nombre que introducimos, con el valor
	// "cadena vacia" = "";

}


