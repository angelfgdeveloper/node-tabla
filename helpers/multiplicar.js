const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {

  try {

    let salida = '';
    let consola = '';
    
    for (let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ base } ${ 'x'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`;
    }
    
    if ( listar ) {
      console.log('================='.green);
      // console.log(` Tabla del: ${ base } `);
      console.log('Tabla del:'.green, colors.blue(base));
      console.log('================='.green);
      
      console.log(consola);
    }
  
    // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
    //   if (err) throw err;
  
    //   console.log(`tabla-${ base }.txt creado`);
    // });
  
    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
  
    // console.log(`tabla-${ base }.txt creado`);
  
    const nombreArchivo = `tabla-${ base }.txt`;
  
    return nombreArchivo;
  } catch (err) {
    throw err;
  }

}

// module.exports = {
//   crearArchivo: crearArchivo
// }

module.exports = {
  crearArchivo
}