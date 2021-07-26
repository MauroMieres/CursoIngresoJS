/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

let edad;
let sexo;
let estadoCivil;
let sueldoBruto;
let legajo;
let nacionalidad;

function ComenzarIngreso () 
{

 edad = parseInt(prompt("Ingrese una edad entre 18 y 90 años"));
 
 		while(edad<18 || edad>90)
 		{
 			edad = parseInt(prompt("Por favor ingrese una edad entre 18 y 90 años"));
 		}
 			
 sexo = prompt("Ingrese su sexo, escriba M(masculino) o F(femenino)");

 		while(sexo != 'M' && sexo != 'F')
 		{
 			sexo = prompt("Por favor, ingrese M o F");
 		}
 	
 estadoCivil = prompt("Ingrese su estado civil: 1(soltero)/2(casado)/3(divorciado)/4(viudo)");
 
 			while(estadoCivil != '1' && estadoCivil != '2' && estadoCivil != '3' && estadoCivil != '4')
 		{
 			estadoCivil = prompt("Por favor ingrese un estado civil correcto: 1(soltero)/2(casado)/3(divorciado)/4(viudo)");
 		}
 
 sueldoBruto = parseInt(prompt("Ingrese su sueldo en bruto no menor a $8000"));
	
 		while(sueldoBruto<7999)
 		{
 			sueldoBruto = parseInt(prompt("Ingrese un sueldo bruto no menor a $8000"));
 		}

 legajo = parseInt(prompt("Ingrese los 4 numeros de su legajo"));
 	
 		while(isNaN(legajo) || legajo<1000 || legajo>9999)
 		{
 			legajo = parseInt(prompt("Por favor ingrese un legajo valido"));
 		}

 nacionalidad = prompt("Ingrese su nacionalidad: A(argentinos)/E(extranjeros)/N(nacionalizados");

 	while(nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N')
 	{
 		nacionalidad = prompt("Por favor ingrese una nacionalidad valida: A(argentinos)/E(extranjeros)/N(nacionalizados");
 	}
 	document.getElementById('txtIdEdad').value = edad;
 	document.getElementById('txtIdSexo').value = sexo;
 	document.getElementById('txtIdEstadoCivil').value = estadoCivil;
 	document.getElementById('txtIdSueldo').value = sueldoBruto;
 	document.getElementById('txtIdLegajo').value = legajo;
 	document.getElementById('txtIdNacionalidad').value = nacionalidad;
}


