//! Estructura de control if - else: Permite ejecutar diferentes bloques de código según una condición sea verdadera o falsa.

let a = 9;

//! En el else if se ejecuta si la condición del if es falsa y la del else if es verdadera pero hay excepciones como el tipo de dato undefined, null y una asignación.
// if ( a>=10 ){
//     console.log('A es mayor o igual a 10');
// }
if ( a===10 ){
    console.log('A es igual a 10');
}else if (a > 10){
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');
}

//console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log(dia)
console.log( { dia } )

//! Esto es una asignacion y siempre va a ser true ya que dia siempre va a valer 0 porque un solo = es equivalente a una asignación no a una condición.
// if ( dia = 0 ) {
//   console.log('Domingo');
// } else {
//   console.log('No es domingo');
// }

//! Esto es una comparación que solo evalua la condición mas no el tipo de dato ya que dia es un número y '4' es un string.
// if ( dia == '4' ) {
//   console.log('Domingo');
// } else {
//   console.log('No es domingo');
// }
  
//! Esto es una comparación estricta y evalua tanto la condición como el tipo de dato.
// if ( dia === 4 ) {
//   console.log('Domingo');
// } else {
//   console.log('No es domingo');
// }

if ( dia === 0 ) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes')
}else if (dia === 2) {
  console.log('Martes')
}else if (dia === 3) {
  console.log('Miércoles')
}else if (dia === 4) {
  console.log('Jueves')
}else if (dia === 5) {
  console.log('Viernes')
}else{
  console.log('Es Sábado');
}


//! Alterntativa a usar la estructura de control else if - else y la estructura de control switch unicamente utilizando objetos o arrays:

dia = 3; // 0:domingo, 1:lunes, 2:martes, 3:miércoles, 4:jueves, 5:viernes, 6:sábado

//! Haciendo uso de un objeto:
const diasSemana = {
  0:'domingo',
  1:'lunes',
  2:'martes',
  3:'miércoles',
  4:'jueves',
  5:'viernes',
  6:'sábado',
} 
//! Se agrega () despues de diasSemana[dia] para ejecutar la función que retorna el nombre del día.
console.log( diasSemana[dia] || 'Día no válido' ); 


//! Haciendo uso de un objeto (tambien se pueden ejecutar procedimentos como funciones):
// const diasSemana = {
//   0: () => 'domingo - 0',
//   1: () => 'lunes - 1',
//   2: () => 'martes - 2',
//   3: () => 'miércoles - 3',
//   4: () => 'jueves - 4',
//   5: () => 'viernes - 5',
//   6: () => 'sábado - 6 ',
// } 
// //! Se agrega () despues de diasSemana[dia] para ejecutar la función que retorna el nombre del día.
// console.log( diasSemana[dia] () || 'Día no válido' ); 


//! Haciendo uso de un array:
const diasSemanaArr = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado',];

console.log( diasSemanaArr[dia] || 'Día no válido' );