/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar()
{
	let edad; 

	edad = parseInt(document.getElementById('txtIdEdad').value);

//operadores logicos, necesarios para armar una condicion compuesta
/* || or (si hay dos falsos es false, si ambos valores son verdaderos o distintos es true)
	&& and (solo es verdadero cuando ambos valores son true)
	 ! not (cambia el valor de una variable booleana)*/

	 //aca necesito que los 2 sean verdaderos, el unico q obtiene true
	 //cuando ambos son verdaderos es el operador and &&

	if(edad >= 13 && edad <= 17 )
	{
		alert("Usted es adolescente");
	}
	else
	{
		alert("Usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN