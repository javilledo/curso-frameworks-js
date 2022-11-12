'use strict'

// OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 - numero2;
alert('El resultado de la operación es: ' + operacion);

//TIPOS DE DATOS
//entero, string, decimal, booleano, array, objetos
var numeroEntero = 44;
var cadenaDeTexto = 'Hola "qué" tal';
var verdaderoOFalso = true; // o false

var numeroFalso = '33';

//convierten a número
Number(numeroFalso); 
parseInt(numeroFalso); 
parseFloat(numeroFalso);

//convierte a string
String(numeroFalso);

console.log(typeof(numeroFalso));