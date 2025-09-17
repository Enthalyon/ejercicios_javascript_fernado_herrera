// console.log( miNuevoNombre );


// alert('Hola desde app.js');

// console.log('Hola mundo');

//console.log(object) // snipet clg + tab
//console.log(); // snipet log

//! Mala pratica al crear variables (crear una variable en diferentes lineas de codigo)
// let a = 10;
// let b = 10;
// let c = 10;
// let d = 10;
// let x = a + b;

// !la buena practica al momento de cear variables es crearlas en una sola linea de codigo y separarlas por , (coma)

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

const saludo = c + d;

// console.log(saludo)

c = 'Hola de nuevo';

//! Esta es la forma mas vervosa de escribir la referencia del valor
// console.log( 'a', a );
// console.log( 'b', b );
// console.log( 'c', c );
// console.log( 'd', d );

//! Esta es la forma mas abreviada de escribir la referencia del valor
// console.log('%c Mis variables', 'color:blue; font-weight: bold')
// console.log({ a });
// console.log({ b });
// console.log({ c });
// console.log({ d });

// console.log( x );
// console.warn( x );
// console.error( x );
// console.info( x );

//! Mejor forma de imprimir si se tiene un orden logico con el console.table() ya que puede recibir un arreglo [] o un objeto {}

// console.table({ a, b, c, d, x }); //* Esto me crea una tabla donde mi index es la variable que estoy usando y e valor que tiene cada una de esas propiedades

//! var coloca la información de la variable dentro del objeto global window lo que no es una buena practica porque me permite poder remplazar propiedades y objetos propios del objeto global window por lo que es muy dificil de rastrear, este problema llevo a js a crear una nueva forma de declarar variables con la palabra reservada let, el let y el const no sobreescriben las variables que se encuentran en el objeto global window o donde sea que este corriendo Js 
// var outerWidth = 1000000;
// var outerHeight = 600;

// let outerWidth = 1000000;
// const outerHeight = 600;


//! Otro error común de utilizar var es que no podemos utilizar una variable antes de ser inicializada ya que Js lee el codigo linea por linea y si por ejemplo hay un console.log(); tratando de imprimir una variable declarada con var pero esta variable esta debajo de el aparecera como undefined pero si se declara la variable con let nos mostrara un error explicandonos que no podemos acceder a la variable antes de su inicialización lo cual nos ayuda a corregir el error y a ejecutar un codigo mas limpio. 
// var miNuevoNombre  = 'Juan Vela';

//* El var solo se usa para trabajar por la compatibilidad en navegadores viejos (anteriores al año 2015).

