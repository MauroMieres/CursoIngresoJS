/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

	//guardo en la variable el texto que escribio en usuario dentro de la ventana de prompt
	nombre = prompt("Ingrese su nombre");

	//copio en nombre lo que tengo guardado en la variable nombre dentro de la caja de texto que se me muestra en la pagina
	document.getElementById("txtIdNombre").value = nombre ;
}

