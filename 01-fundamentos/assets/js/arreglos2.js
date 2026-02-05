//! Detalles sobre arreglos
let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Chrono Trigger' ];
console.log( 'Largo: ', juegos.length);

  let primero = juegos[0];
  let ultimo = juegos[juegos.length - 1];
  //  console.log({ primero, ultimo });

  juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
  });

  let nuevaLongitud = juegos.push('Final Fantasy'); // El push() sirve para agregar un nuevo elemento al final del arreglo.
  console.log({nuevaLongitud, juegos});

  nuevaLongitud = juegos.unshift('Xenoblade'); // El unshift() sirve para agregar un nuevo elemento al inicio del arreglo.
  console.log({nuevaLongitud, juegos});

  let juegoBorrado = juegos.pop(); // El pop() sirve para eliminar el último elemento del arreglo.
  console.log({juegoBorrado, juegos});


  let pos = 1;
  console.log(juegos)
  let juegosBorrados = juegos.splice(pos, 2); // El splice() sirve para eliminar elementos específicos por posición del arreglo.
  console.log({juegosBorrados, juegos});

  let metroidIndex = juegos.indexOf('Metroid'); // El indexOf() sirve para encontrar la posición de un elemento en el arreglo y el elemento que pasamos por la función tiene que llamarse igual que el que queremos encontrar ya que es case sensitive.
  console.log({metroidIndex, juegos});  
