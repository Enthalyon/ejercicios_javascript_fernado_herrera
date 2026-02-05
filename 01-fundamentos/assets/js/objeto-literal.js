//! Los objetos literales son objetos compuestos de doble par de valores (clave: valor).
let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ciudad: 'New York',
    pais: 'USA'
  },
  'ultima-pelicula': 'Infinity War', //! se utiliza '' para la clave ya que js puede malinterpretar el - creyendo que queremos utilizarlos para restar algo, solo utilizamos la comilla de ser necesario, en caso de que no podemos utilizar _ o $ o podemos hacer uso del camelCase.
};

console.log(personaje)
console.log('Nombre:', personaje.nombre);// Accediendo a la propiedad 'nombre' usando punto
console.log('Nombre:', personaje['nombre']); // Accediendo a la propiedad 'nombre' usando corchetes

console.log('Edad', personaje.edad);
console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('trajes', personaje.trajes)
console.log('N° de trajes', personaje.trajes.length)
console.log('Último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Vivo', personaje['vivo']);

console.log('Ultima Pelicula', personaje['ultima-pelicula']);

console.log(personaje)
delete personaje.edad;

console.log(personaje)

personaje.casado = true;

//const entriesPares = Object.entries(personaje).filter(([key, value]) => key.length % 2 === 0);
const entriesPares = Object.entries(personaje);
console.log(entriesPares)

Object.freeze(personaje); // Congela el objeto, no permite agregar, eliminar o modificar propiedades.

personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje); // Obtiene las propiedades del objeto
const valores = Object.values(personaje); // Obtiene los valores del objeto
console.log({propiedades, valores})