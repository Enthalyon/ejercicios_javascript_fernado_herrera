
//! 1
// function crearPersona(nombre, apellido) {
//   return {
//     nombre: nombre,
//     apellido: apellido
//   };
// }

//! 2
// const crearPersona = (nombre, apellido) => {
//   return { nombre, apellido };
// };

//! 3
//! funcion simplificada
const crearPersona = (nombre, apellido) => ({ nombre, apellido }); //! Los parentesis son necesarios para que JS entienda que es un objeto que se retorna en este caso queremos retornar el nombre y apellido que ingresan por parametro.

const persona = crearPersona('Juan', 'Restrepo');
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

//! Esto no funciona en las funciones flecha porque no tienen el objeto arguments
// const imprimeArgumentos2 = () => {
//   console.log(arguments)
// };

//! El operador rest (...) agrupa todos los argumentos en un arreglo [] llamado args, hay que tener en cuenta  varias consideraciones. Primero el operador rest siempre debe ser el ultimo parametro en una funcion despues de el no puede haber mas argumentos. Segundo si se necesita extraer algo del argumento independiente de los args por ejemplo la edad este debe estar antes del operador rest y tambien se debe llamar aparte en el retorno, la edad tomara como valor el primer argumento que se envie a la funcion y los demas argumentos se agruparan en args. En resumen el operador rest une todos los argumentos en una sola variable y los transforma en un arreglo [], se usa en la definicion de funciones o destructuracion.
const imprimeArgumentos2 = (edad, ...args) => {
  // console.log({ edad, args });
  return args;
};

//! Como se esta retorando un arreglo [] se puede desestructurar en las variables que se quieran
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Juan', 'Hola');
console.log({casado, vivo, nombre, saludo});

//! Se puede desestructurar el valor que necesito directamente en la llamada de la funcion.
// const { apellido } = crearPersona('Juan', 'Restrepo');
// console.log({ apellido });

//! Si quiero cambiar el nombre de la variable que estoy creando en la desestructuracion se puede hacer con :
const { apellido: nuevoApellido } = crearPersona('Juan', 'Restrepo');
console.log({ nuevoApellido });

let tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//   console.log('nombre ', personaje.nombre);
//   console.log('codeName ', personaje.codeName);
//   console.log('vivo ', personaje.vivo);
//   console.log('edad ', personaje.edad);
//   console.log('trajes ', personaje.trajes);
// };

//! Desestructuracion en el argumento de la funcion y valores por defecto.
const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes } ) => {
  console.log('nombre: ', nombre);
  console.log('codeName: ', codeName);
  console.log('vivo: ', vivo);
  console.log('edad: ', edad);
  console.log('trajes: ', trajes);
};

imprimePropiedades(tony);