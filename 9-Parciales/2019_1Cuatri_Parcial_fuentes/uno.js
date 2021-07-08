/* Mauro Mieres
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero
 por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	let lado;
	let perimetro;
	
	lado = prompt("Ingrese la medida de un lado del triangulo en cm");
	
	perimetro = lado * 3

	alert("El perimetro del triangulo es de " + perimetro + " cm.");
}
