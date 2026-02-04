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

console.log('===================');
regresaTrue() && regresaFalse(); // true porque ambas condiciones son verdaderas.

//! Operador OR (||) - Solo una de las expresiones debe ser verdadera para que el resultado sea verdadero y dispara acciones unicamente si la primera condicion se cumple.