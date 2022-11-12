'use strict'

// PRUEBAS CON LET Y VAR

//PRUEBA CON VAR
var numero = 40;

console.log(numero);

if(true){
	var numero = 50;
	console.log(numero);
}

console.log(numero);

//PRUEBA CON LET
var texto = 'Curso';

console.log(texto);

if(true){
	let texto = 'Curso con LET';
	console.log(texto);
}

console.log(texto);

// El let se usa para definir una variable que solo sea válida
// dentro de una función, estructura de control,...
// Con let lo defines solo a nivel local de bloque