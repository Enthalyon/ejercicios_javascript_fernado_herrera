//! Existen 6 tipos de datos primitivos en JavaScript:
//! 1. Number - Representa números, tanto enteros como flotantes.
//! 2. String - Representa cadenas de texto.
//! 3. Boolean - Representa valores de verdad, true o false.
//! 4. Undefined - Representa una variable que ha sido declarada pero no inicializada.
//! 5. Null - Representa la ausencia intencional de un valor.
//! 6. Symbol - Representa un identificador único e inmutable.

//* Ejemplos con ia:

//! Ejemplo de uso de tipos primitivos en JavaScript:
// let numero = 42; // Number
// let texto = "Hola mundo"; // String
// let esVerdadero = true; // Boolean
// let noDefinido; // Undefined
// let nulo = null; // Null
// let simbolo = Symbol("descripcion"); // Symbol

//! Ejemplo de funciones que operan con tipos primitivos:
// function sumar(a, b) {
//     return a + b; // Suma de dos números
// }
// function concatenar(cadena1, cadena2) {
//     return cadena1 + " " + cadena2; // Concatenación de dos cadenas
// }
// function esIgual(valor1, valor2) {
//     return valor1 === valor2; // Compara dos valores para igualdad
// }
// function esVerdaderoBooleano(valor) {
//     return valor === true; // Verifica si el valor es true
// }
// function esNulo(valor) {
//     return valor === null; // Verifica si el valor es null
// }
// function esSimbolo(valor) {
//     return typeof valor === "symbol"; // Verifica si el valor es un símbolo
// }

//! Ejemplo de uso de las funciones:
// console.log(sumar(numero, 8)); // 50
// console.log(concatenar(texto, "¿Cómo estás?")); // "Hola mundo ¿Cómo estás?"
// console.log(esIgual(numero, 42)); // true
// console.log(esVerdaderoBooleano(esVerdadero)); // true
// console.log(esNulo(nulo)); // true
// console.log(esSimbolo(simbolo)); // true

//* Ejemplos del curso.

//! Uso del String en JavaScript:
let nombre = 'Peter Parker'; // String usando comillas simples.
console.log(nombre);

nombre = 'Ben Parker'; // String usando comillas simples.
console.log(nombre);

nombre = "Tía May"; // String usando comillas dobles.
console.log(nombre);

nombre = `Tía May`; // String usando template literals o backticks.
console.log(nombre);

//? para identificar el tipo de dato de una variable, se puede usar la función typeof: el cual es conocido como un operador interno que ya existe en JavaScript.

console.log(typeof nombre); // "string"


//! Uso de Number en JavaScript:
nombre = 123; //! Cambiando el tipo de dato String a Number (el tipo de dato mutó) esto se debe a que JS es un lenguaje de tipado dinámico o de debil tipado.
console.log(typeof nombre); // "number"

//! Uso de Boolean en JavaScript:
let esMarvel = true; // Boolean, puede ser true o false.
console.log(typeof esMarvel); // "boolean"

let edad = 33; // Number, representando la edad.
console.log(typeof edad); // "number"

edad = 33.001; // Number, representando la edad con decimales.
console.log(typeof edad); // "number"

//! Uso de Undefined en JavaScript:
let superPoder; // Variable declarada pero no inicializada, por lo tanto es undefined.
console.log(typeof superPoder); // "undefined"

//! Uso de Null en JavaScript:
let soyNull = null; // Variable intencionalmente nula.
console.log(typeof soyNull); // "object"

//! Uso de Symbol en JavaScript: El principal uso de Symbol es identificar propiedades de manera unica.
let symbol1 = Symbol('a'); // Creando un símbolo con una descripción.
let symbol2 = Symbol('a'); // Creando otro símbolo con la misma descripción, pero es un símbolo diferente.
console.log(typeof symbol1); // "symbol"
console.log(typeof symbol2); // "symbol"
console.log(symbol1 === symbol2); // false, porque cada símbolo es único.
