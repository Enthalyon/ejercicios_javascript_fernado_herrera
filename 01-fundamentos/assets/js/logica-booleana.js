//! La logica booleana es una de las formas que tenemos para trabajar con valores booleanos

const regresaTrue = () => {
  console.log('Regresa True');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa False');
  return false;
}

//! Se puede utilizar la negacion para invertir un valor booleano (solo se puede negar en cualquier cosa que retorne un valor booleano)
console.warn('Not o la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); //true

//! Operador AND (&&) - Todas las expresiones deben ser verdaderas para que el resultado sea verdadero y dispara acciones unicamente si la primera condicion se cumple.
console.warn('AND');
console.log(true && true); // true
console.log(true && !false); // true
console.log(!false && true); // true
console.log(!false && !false); // true

console.log('===================');
console.log( regresaFalse() && regresaTrue() ); // false porque la primera condicion es falsa como la primera condicion es falsa termina la evaluacion ya que es inecesario seguir evaluando porque la primera condicion no se cumple ya que es falsa y todos tienen que ser verdaderos.
console.log( regresaTrue() && regresaFalse() ); // false porque la segunda condicion es falsa como la primera condicion es verdadera pasa a analizar la segunda condicion.

console.log('========= && ==========');
regresaFalse() && regresaTrue(); // true porque ambas condiciones son verdaderas.

console.log('4 condiones', true && true && true && false ); // false porque la ultima condición es falsa.

//! Operador OR (||) - Almenos una de las expresiones(condiciones) debe ser verdadera para que el resultado sea verdadero y disparar alguna acción (False o False es la unica condicion para que sea falso).
console.warn('OR');

console.log( true || false ); // true
console.log(regresaFalse() || regresaTrue()); // true porque no importa cual de las dos condiciones sea verdadera con que una lo sea el resultado sera verdadero.

console.log('4 condiones', true || true || true || false ); // true porque almenos una de las condiciones es verdadera.
console.log('4 condiones', false || false || false || false ); // false porque todas las condiciones son falsas.

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// const a1= true && 'Hola mundo' && 150; // 150 porque la primera condicion es verdadera entonces se evalua la segunda condicion y como es un string no vacio se considera verdadero.

const a1= false && 'Hola mundo' && 150 ; // false porque la primera condicion es falsa entonces no se evalua nada mas y el resultado es false.

const a2 = 'Hola' && 'Mundo' && soyFalso && true; // Mundo porque la primera condicion es un string no vacio entonces se evalua la segunda condicion y como es un string no vacio se considera verdadero.

const a3 = soyFalso || 'Ya no soy falso';

const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // 'Ya no soy falso de nuevo' porque es la primera condicion verdadera que se encuentra en la evaluacion y todo lo demas ya no se ejecuta.
const a5 = soyFalso || soyUndefined ||regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

//! No hay que llegar a este nivel de complejidad ya que puede resultar dificil de entender y mantener el codigo, es mejor dividirlo en varias lineas para que sea mas legible y facil de entender.
if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
  console.log('Hacer algo')
}else {
  console.log('Hacer otra cosa')
}


