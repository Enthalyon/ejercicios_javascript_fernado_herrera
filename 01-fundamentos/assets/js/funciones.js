//! función tradicional: Hoy en día se usan menos en ciertos contextos debido a problemas de rendimiento y legibilidad como el valor de "this", hoisting confuso debido a que eleva automaticamente las funciones al principio del archivo o bloque lo que puede causar errores difíciles de detectar si no se entiende bien el comportamiento.
function saludar(nombre) {
  //console.log(arguments); //* arguments es una variable especial que existe dentro de todas las funciones tradicionales (funciones con la palabra reservada "function") y que contiene todos los argumentos que se le pasan a la función, independientemente de si se han definido o no en la declaración de la función.
  //console.log('Hola ' + nombre)
  return 10;

  //! Esto nunca se va a ejecutar ya que esta despues del return.
  console.log('Soy un codigo despues de return')
};

//! función anónima: no tiene nombre pero al asignarla a una variable se convierte en una función que para este ejemplo respondera al nombre de saludar2, laventaja de este tipo de funciones es que como se estan asignando a una constate no hay riesgo de que se sobrescriba.
const saludar2 = function( nombre ) {
  console.log('Hola ' + nombre)
};

//! función flecha: es una forma más concisa de escribir funciones en JavaScript, no tiene su propio contexto de "this", lo que puede ser ventajoso en ciertos casos, pero también significa que no se puede usar "arguments" dentro de ellas.
//! No pueden ser usadas como constructores y no tienen la propiedad "prototype".
const saludarFlecha = () => {
  console.log('Hola flecha')
}

const saludarflecha2 = ( nombre ) => { //* cuando se esta mandando un argumento en la función flecha se puede omitir los paréntesis si solo hay un argumento aunque la buena práctica es dejarlos para que se entienda que es una función de flecha.
  console.log('Hola ' + nombre)
};

const retornoDeSaludar = saludar('Juan', 40, true, 'Costa Rica'); //1
//console.log(retornoDeSaludar)
// saludar2('Juan');
// saludarFlecha();
// saludarflecha2('Melissa');

function sumar(a, b) {
  return a + b;
};

const sumar2 = (a, b) => a + b; //* la funcion de flecha se puede simplificar siempre y cuando el return equivalga a una sola linea de codigo.

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2())