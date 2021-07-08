/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	let maximo = 10;
	let minimo = 1;
	let numero;

	// como generar un numero random y redondearlo al entero mas cercano?
	// con math.random generamos un numero random entre 0 y 0.999
	// y con math.round lo redondeamos al entero mas cercano, ejemplos:
	// 0.3 = 3, 0.9 = 9, 0.2 = 2.
	
	numero =Math.round(Math.random()*(maximo - minimo) + minimo);

	//como el math.random puede elegir el 0(cero), evitamos obtener ese valor sumando 
	//el valor minimo que deseamos al final de la operacion "+minimo"
	//la multiplicacion division y modulo tienen prioridad antes que suma y resta
	//cuando tengo operadores de misma prioridad la maquina opera de izq a der

	alert(numero);

}//FIN DE LA FUNCIÓN