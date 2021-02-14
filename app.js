const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);
// const base = 6;

crearArchivo( argv.b, argv.l, argv.h )
  .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
  .catch( err => console.log(err) );

// const [, , arg3 = 'base=5' ] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log(base);

  // Se agrego el package.js con
  // npm init

  // Para correr npm run base3

  // instalar nodemon
  // npm install nodemon --save--dev

  // Desinstalar nodemon
  // npm uninstall nodemon

  // Instalar otra versión del paquete
  // Desinstalar
  // npm unistall colors

  // Cambio de versión
  // npm i colors@1.0.0

  // Actualizar dependencias
  // npm update