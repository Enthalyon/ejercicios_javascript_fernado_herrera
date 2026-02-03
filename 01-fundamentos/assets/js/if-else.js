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

//! Esto es una asignacion y siempre va a ser true ya que dia siempre va a valer 0 porque un solo = es equivalente a una asignación no auna condición.
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
if ( dia === 4 ) {
  console.log('Domingo');
} else {
  console.log('No es domingo');
}