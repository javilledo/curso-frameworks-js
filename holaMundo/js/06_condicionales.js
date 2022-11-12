'use strict'

//CONDICIONAL IF
// Si A es igual a B entonces haz algo

var edad = 75;
var nombre = 'David Suarez';

/* Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto: !=
*/

if (edad >= 18) {
	// Es mayor de edad
	console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad');
	if (edad == 33) {
		console.log('Todavía eres millenial');
	} else if (edad > 70) {
		console.log('Eres anciano');
	}else{
		console.log('Ya no eres millenial');
	}
} else {
	console.log(nombre + ' tiene ' + edad + ' años, es menor de edad');
}

/*

OPERADORES LÓGICOS
	AND: &&
	OR: ||
	NEGACIÓN: !

*/

var year = 2020;

// NEGACIÓN
if (year != 2016) {
	console.log('El año no es 2016, realmente es ' + year);
}

// AND
if (year >= 2000 && year <= 2020 && year != 2019) {
	console.log('Estamos en la era actual');
}else {
	console.log('Estamos en la era postmoderna');
}

//OR
if (year == 2008 || (year >= 2018 && year == 2020)) {
	console.log('El año acaba en 8');
}else {
	console.log('Año no registrado');
}