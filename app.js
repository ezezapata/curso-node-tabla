const { crearArchivo, crearArchivoPromesa } = require('./helpers/multiplicar.js');
const argv = require( './config/yargs.js' );
console.clear();

crearArchivoPromesa( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, "creado exitosamente") )
    .catch( err => console.log( err ) )