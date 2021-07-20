/*Mauro Mieres
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let numeroIngresado;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let respuesta = 's';
	let primerIngreso = 0;

	while(respuesta == 's')
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		respuesta =  prompt("Quiere ingresar otro numero? s/n");
		//con esto entro a esta sentencia solo para la primera vez
		if(primerIngreso == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			//con esto no vuelvo a entrar aca
			primerIngreso = 1;
		}
		
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}

		if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
	}
	document.getElementById('txtIdMaximo').value = "El maximo es: "+numeroMaximo;
	document.getElementById('txtIdMinimo').value = "El minimo es: "+numeroMinimo;
}//FIN DE LA FUNCIÓN