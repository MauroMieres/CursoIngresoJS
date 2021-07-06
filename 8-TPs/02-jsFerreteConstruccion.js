/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let rectangulo;

	largo = parseFloat(document.getElementById('txtIdLargo').value);
	ancho = parseFloat(document.getElementById('txtIdAncho').value);

	rectangulo = largo * ancho

	alert("Necesitamos " + rectangulo + " metros de alambre");	

}
function Circulo () 
{
	let radio;
	let perimetro;

	radio = parseFloat(document.getElementById('txtIdRadio').value);

	// puedo reemplazar 3.14 con la constante const Math.PI
	perimetro = 2 * 3.14 * radio 

	//como dijimos que hay q darle 3 vueltas multiplicamos por 3

	alert("Necesitamos " + (perimetro * 3) + " metros de alambre");

}
function Materiales () 
{
	let contrapisoLargo;
	let contrapisoAncho;
	let areaContrapiso;
	let bolsasCemento;
	let bolsasCal;
	
	largo = parseFloat(document.getElementById('txtIdLargo').value);
	ancho = parseFloat(document.getElementById('txtIdAncho').value);

	areaContrapiso = largo * ancho;

	//1m x 1m se necesitan 2 bolsas de cemento y 3 de cal

	bolsasCemento = areaContrapiso * 2;
	bolsasCal = areaContrapiso * 3;

	//esto se puede escribir tambien asi:
	//alert(`El contrapiso es de ${areaContrapiso} m2 y necesitamos ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal`);
	alert("El contrapiso es de " + areaContrapiso + " m2 y necesitamos " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal");

	}