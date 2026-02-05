//! Ejemplo de creación de un arreglo: En este ejemplo se crea un arreglo de 10 elementos vacíos
// const arr = new Array(10);
// console.log(arr); // [ <10 empty items> ]

//! Ejemplo de creación de un arreglo vacío: En este ejemplo se crea un arreglo vacío
// const arr = [];
// console.log(arr); // []


let videoJuegos = [ 'Mario 3', 'Mega Man', 'Chrono Trigger' ];

// console.log({ videoJuegos }); // { videoJuegos: [ 'Mario 3', 'Mega Man', 'Chrono Trigger' ] } }
// console.log(videoJuegos[0]); // Mario 3

//! Por norma general los arreglos son colecciones de un mismo tipo de dato pero para Js no hay restricción de tipo, por lo que se pueden mezclar diferentes tipos de datos en un mismo arreglo.

// Ejemplo de un arreglo con diferentes tipos de datos (ejemplo con ia)
// let cosasRandom = [ 'Hola', 123, true, null, { id: 1, nombre: 'Objeto' }, [1, 2, 3] ];
// console.log({ cosasRandom });

//! Ejemplo de un arreglo con diferentes tipos de datos
let arregloCosas = [
  true,
  123,
  'Fernando',
  1 + 2,
  function(){},
  ()=>{},
  { a: 1},
  [ 'X', 'Megaman', 'Zero', 'Dr. Light', [ 'Dr. Wily', 'Woodman'] ] 
];

// console.log(arregloCosas)
// console.log({arregloCosas})

console.log(arregloCosas[7][4][1]); // Woodman
