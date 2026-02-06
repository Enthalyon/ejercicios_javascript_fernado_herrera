//! Función que retorna el mayor de dos números
// const elMayor = (a,b) => {
//   return (a > b) ? a : b;
// };

//! Función que retorna el mayor de dos números simplificada
const elMayor = (a,b) => (a > b) ? a : b;

//! Función que retorna el mayor de dos números utilizando Math.max
// const elMayor = (a,b) => Math.max(a,b);

//! Función que retorna si un miembro tiene membresía o no los programadores suelen ignorar los parentesis cuando 
const tieneMembresia = (miembro) => miembro ? '2 Dólares' : '10 Dólares';

console.log( elMayor( 20,15 ) ); // 20

console.log( tieneMembresia( true ) ); // "Tiene membresía"
console.log( tieneMembresia( false ) ); // "No tiene membresía"

//!El operador ternario es muy util por ejemplo si queremos generar arreglos u objetos con alguna condición implicita por ejmplo:
const amigo = true;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  // ( () => 'Nick Fury' ) () //! A esto se le conoce como función anonima autoejecutable, es decir una función que se ejecuta inmediatamente después de ser creada, esto es útil para evitar la contaminación del espacio global con variables temporales.
  //* Podemos colocar cualquier tipo de expresión dentro de un arreglo u objeto, incluso funciones anónimas autoejecutables, esto es muy útil para generar datos dinámicos sin necesidad de crear variables temporales por ejemplo.
  elMayor( 10, 15 ) //! También podemos colocar el resultado de una función dentro de un arreglo u objeto, esto es muy útil para generar datos dinámicos sin necesidad de crear variables temporales por ejemplo.

];

console.log( amigosArr ); // ['Peter', 'Tony', 'Dr. Strange', 'Thor']

// ! Usar el operador ternario puede ser muy util a la hora de generar condiciones siendo una alternativa a los if-else, pero es importante no abusar de el ya que puede generar código difícil de leer, por ejemplo si tenemos muchas condiciones anidadas como en el siguiente ejemplo:
const nota = 65;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';
              
console.log( { nota, grado } )