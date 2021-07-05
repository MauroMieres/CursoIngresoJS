/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById('txtIdNumeroUno').value;

	//convierto el numero de "Texto" a "Numero" con parseInt
	num1 = parseInt(num1);

	//la linea 11 y 14 se pueden hacer en una sola de la siguiente forma:
	//num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	//se resuelve en orden desde mas adentro del parentesis hacia afuera del mismo

	num2 = document.getElementById('txtIdNumeroDos').value;

	//convierto el numero de "Texto" a "Numero" con parseInt
	num2 = parseInt(num2);

	//con el parseFloat me deja utilizar numeros con decimales

	resultado = num1 + num2;

	alert("la suma es " + resultado)
}

