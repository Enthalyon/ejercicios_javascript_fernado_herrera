
//! la información primitiva se guarda por valor por lo que al cambiar una variable no afecta a la otra, en este ejemplo a y b son independientes esto se debe a que se crea una copia del valor en memoria, todos los tipos de datos primitivos (números, cadenas, booleanos, null y undefined) se almacenan en la pila y se pasan por valor.
let a = 10;
let b = a;

a = 30;

console.log({ a, b} );

//! la información no primitiva se guarda por referencia por lo que al cambiar una variable afecta a la otra, en este ejemplo juan y ana son objetos dependientes y su valor es el mismo por lo que al cambiar uno se cambia el otro, esto se debe a que ambos apuntan a la misma referencia en memoria ya que en JavaScript todos los objetos son pasados por referencia, en JavaScript todos son objetos exeptuando los primitivos.
let juan = { nombre: 'Juan' };
let ana = { ...juan }; //! Existe un operador especial que sirve para separar todas las propiedades y valores de un objeto el cual es conocido como spread operator (...). Expande un array u objeto en elementos individuales y se usa al llamar funciones, copiar arrays/objetos, o combinarlos. En resumen el operador spread (...) descompone el objeto juan y crea un nuevo objeto con las mismas propiedades y valores, por lo que ahora ana es un objeto independiente de juan. La ventaja de hacerlo asi es que rompe la referencia en memoria de javaScript lo que hace que ambos objetos sean independientes y de esta manera poder trabajar objetos hacer igualaciones que apunten a diferentes espacios en memoria.
ana.nombre = 'Ana';
console.log({ juan, ana });


const cambiaNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
console.log({ peter, tony });

//! para evitar que esto suceda se puede hacer una copia del objeto original, existen varias formas de hacerlo
//! una forma es usando Object.assign
// let pedro = { nombre: 'Pedro' };
// let pedroCopia = Object.assign({}, pedro); 
// pedroCopia.nombre = 'Pedro Copia';
// console.log({ pedro, pedroCopia });

//! Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

//const otrasFrutas = [...frutas]; //! Usando el spread operator
//const otrasFrutas = frutas.slice(); //! Usando el método slice que crea una copia superficial del array

//! El console.time y console.timeEnd son métodos que permiten medir el tiempo que tarda en ejecutarse un bloque de código, en este caso se está midiendo el tiempo que tarda en ejecutarse el método slice y el spread operator, es importante para medir el rendimiento de nuestro código.
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

//! Es recomendable usar el spread operator ya que es más moderno y más rápido que el método slice.
console.time('spread');
const otrasFrutas2 = [...frutas]; //! El operador spread rompe la relación en memoria y crea un nuevo array con los mismos elementos.
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });