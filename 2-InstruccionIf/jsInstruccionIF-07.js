/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil = document.getElementById('estadoCivil').value;

	//&& and porque necesito q ambas condiciones sean verdaderas
	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero")
	}
}//FIN DE LA FUNCIÓN