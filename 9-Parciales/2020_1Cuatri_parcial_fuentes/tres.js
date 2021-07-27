/* Mieres Mauro
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

let nombre;
let edad;
let sexo;
let estadoCivil;
let temperatura;
let personaMayorTemperatura;
let nombrePersonaMayorTemperatura;
let terceraEdadFiebre;
let CantidadHombresViudos;
let cantidadHombresSolteros;
let EdadHombresSolteros;
let respuesta;
let promedioEdadHombresSolteros;
let cantidadPersonasViudas;
let CantidadHombresSolterosViudos;

function mostrar()
{
	respuesta = 'si';
	personaMayorTemperatura = 0;
	terceraEdadFiebre = 0;
	cantidadPersonasViudas = 0;
	EdadHombresSolteros = 0;
	cantidadHombresSolteros = 0;
	promedioEdadHombresSolteros = 0;
	CantidadHombresViudos = 0;
	CantidadHombresSolterosViudos = 0;

	while(respuesta == 'si')
	{
		nombre = prompt("Ingrese su nombre");

		while(isNaN(nombre) == false)
		{
			nombre = prompt("Por favor ingrese un nombre valido");
		}

		edad = parseInt(prompt("ingrese su edad"));

		while(isNaN(edad) || edad< 1 || edad>122)
		{
			edad = parseInt(prompt("Por favor ingrese una edad valida"));
		}

		sexo = prompt("Ingrese su sexo, f ó m");

		while(sexo!='f' && sexo!= 'm')
		{
			sexo = prompt("Ingrese un sexo valido, f ó m");
		}

		estadoCivil = prompt("Ingrese su estado civil: soltero/casado/viudo");

		while(estadoCivil!='soltero'&&estadoCivil!='casado'&&estadoCivil!='viudo')
		{
			estadoCivil = prompt("Ingrese un estado civil valido: soltero/casado/viudo");
		}

		temperatura = parseFloat(prompt("Ingrese su temperatura corporal"));

		while(isNaN(temperatura) || temperatura<35 || temperatura>40)
		{
			temperatura = parseFloat(prompt("Por favor ingrese una temperatura corporal valida"));
		}

		respuesta = prompt("Quiere ingresar los datos de otra persona? si/no");
		while(respuesta!='si' && respuesta!='no')
		{
			respuesta = prompt("Por favor ingrese una respuesta valida: si/no");
		}

		//A:
		if(temperatura>personaMayorTemperatura)
		{
			personaMayorTemperatura = temperatura;
			nombrePersonaMayorTemperatura = nombre;
		}

		//B:
		if(edad>59)
		{
			switch(estadoCivil)
			{
				case 'viudo':
					cantidadPersonasViudas++;
					break;			
			}
		}

		//C:
		if(sexo=='m')
		{
			switch(estadoCivil)
			{
				case 'soltero':
					cantidadHombresSolteros++;
					EdadHombresSolteros = EdadHombresSolteros + edad;
					break;

				case 'viudo':
					CantidadHombresViudos++;
					break;
			}
		}
		//D:
		if(edad>59)
		{
			if(temperatura>37.9)
			{
				terceraEdadFiebre++;
			}
		}
	}
	//E:
	promedioEdadHombresSolteros = EdadHombresSolteros / cantidadHombresSolteros;
	CantidadHombresSolterosViudos = cantidadHombresSolteros + CantidadHombresViudos;

	alert("A) "+nombrePersonaMayorTemperatura+" es la persona con mayor temperatura corporal: "+personaMayorTemperatura+" °C");
	alert("B) Mayores de edad viudos: "+cantidadPersonasViudas);
	alert("C) Cantidad de hombres solteros o viudos: "+CantidadHombresSolterosViudos);
	alert("D) Personas de la tercera edad con 38 o mas de temperatura corporal(fiebre): "+terceraEdadFiebre);

	if(cantidadHombresSolteros>0)
	{
		alert("E) El promedio de edad de los hombres solteros es de: "+promedioEdadHombresSolteros.toFixed(0)+" años.");
	}
	else
	{
		alert("E) No hay hombres solteros");
	}
}
