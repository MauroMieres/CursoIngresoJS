/* Bienvenidos. Mauro Mieres
A una pareja se le pide los datos para mostrar un 
mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados
 son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
  let nombreUno;
  let nombreDos;
  let pesoUno;
  let pesoDos;
  let pesoPromedio;

	nombreUno = prompt("Ingrese su nombre");
	pesoUno = prompt("Ingrese su peso en kgs");
	
	nombreDos = prompt("Ingrese el nombre de su pareja");
	pesoDos = prompt("Ingrese el peso de su pareja en kgs");
	
	pesoPromedio = (parseFloat(pesoUno) + parseFloat(pesoDos)) / 2 ;

	alert(`Ustedes se llaman ${nombreUno} y ${nombreDos}, pesan ${pesoUno} kgs y ${pesoDos} kgs respectivamente, sumados el promedio da ${pesoPromedio} kgs.`)
}
