/*
* Dias de la semana abrimos a las 11,
* pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web , para consultar si esta abierto hoy...

const dia = 1; // 0: domingo, 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ) {

// if ( [0,6].includes( dia ) ) { //! mejor forma de evaluar si es fin de semana
//   console.log('Fin de semana');
//   horaApertura = 9;
// }else {
//   console.log('Dia de la semana');
//   horaApertura = 11;
// }

//! Operador Ternario: (condicion) ? true : false; Es lamisma logica de un if else pero resumido en una sola linea
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//   mensaje = 'Está abierto';
// }else {
//   mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// }

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log( { horaApertura, mensaje } );