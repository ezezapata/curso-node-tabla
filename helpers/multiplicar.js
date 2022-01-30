const fs = require('fs');
const colors = require( 'colors' );

const crearArchivoPromesa = (base, listar, hasta) => {
    return new Promise( ( resolve, reject ) =>{
        let salida = '';
        let consola = '';

        for( let i = 1; i <= hasta; i++ ) {
            consola += `${ base } ${ 'x'.green } ${ i } ${'='.green} ${ base * i}\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if( listar ) {
            console.log("==================".green);
            console.log(`   Tabla del ${ colors.blue( base ) }`);
            console.log("==================".green);
            console.log( consola );
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        resolve( `tabla-${ base }.txt` );
    });
}

module.exports = {
    crearArchivoPromesa
};