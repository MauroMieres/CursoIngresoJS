/* Mieres Mauro DIV H
Realizar el algoritmo que pida el ancho y el largo de un rectángulo
 por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho = prompt("Ingrese el ancho del rectangulo en cm");
	largo = prompt("Ingrese el largo del rectangulo en cm");

	perimetro = (ancho * 2) + (largo * 2)

	alert("El perimetro del rectangulo es de " + perimetro + " cm.");
}
