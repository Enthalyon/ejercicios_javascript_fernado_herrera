//! Tipos de formas de ingreso de información del usuario (Prompt, confirm, alert).

//! El alert es una instrucción bloqueante y bloquea la ejecución del navegador web y no va a seguir ejecutando ninguna linea de codigo hasta que el usuario haga clic en el botón aceptar
// alert('Hola mundo');


//! El prompt recibe como argumentos o parametros el mensaje de tipo string y el mensaje por defecto de tipo string
// prompt('¿Cual es tu nombre?', 'Sin nombre');
//! Como lo que va a retornar el prompt es un string puedo asignarlo a una variable para almacenar el valor que el usuario ingreso.
// let nombre = prompt('¿Cual es tu nombre?', 'Sin nombre');
// let nombre = prompt('¿Cual es tu nombre?');
// console.log(nombre)
// console.log('***' + nombre + '***');
//! null y undefined no son lo mismo, null es un valor que se le asigna a una variable para indicar que no tiene ningun valor, undefined es cuando una variable no ha sido declarada o no tiene ningun valor asignado.
//! Se puede recibir un valor null, undefined o un valor string en el prompt.


//! El confirm recibe como argumento un mensaje de tipo string y retorna un valor booleano, true si el usuario hace clic en el botón aceptar y false si el usuario hace clic en el botón cancelar.
// confirm('¿Estas seguro de borrar esto?');
//! Tambien se puede almacenar en una cosntante o variable el valor que retorna el confirm.
// const seleccion = confirm('¿Estas seguro de borrar esto?');
// console.log(seleccion);


//! Estos tipos de forma de ingreso de información por parte del usario se pueden trabajar con librerias de terceros de manera que no sean bloqueantes y no interrumpan la ejecución del navegador web, por ejemplo SweetAlert2, que es una libreria que permite crear alertas, confirmaciones y prompts de manera mas amigable y personalizable.

//! El alert, prompt y confirm son funciones o metodos nativas de JavaScript que vienen dentro del objeto window que se pueden usar en el navegador web, pero no son recomendadas para aplicaciones web modernas debido a su naturaleza bloqueante y a la falta de personalización. En su lugar, se recomienda usar librerias de terceros como SweetAlert2 o crear modales personalizados con HTML, CSS y JavaScript.

//!Si tratamos de usar estas funciones en un entorno que no sea un navegador web o que no tenga la instacia del objeto window, como Node.js, obtendremos un error ya que estas funciones no existen en ese entorno. Por ejemplo, si tratamos de ejecutar este archivo en Node.js, obtendremos un error diciendo que alert no está definido.

//! Este es un ejemplo para imprimir el objeto global de node.js, que es diferente al objeto window del navegador web. En Node.js, el objeto global se llama global y contiene todas las variables y funciones globales disponibles en el entorno de ejecución de Node.js por lo tanto no podremos usar alert, prompt o confirm ya que estos son propios del objeto window de JavaScript.
// console.log(global);