const colors = require('colors');
const fs = require('fs');

const crearArchivo = async  ( base = 1, listar = false, hasta = 10) =>{
    
    console.log( base, listar, hasta);
    try{
        
        let salida = '';
        let consola = '';
        for (let i = 0; i < hasta; i++) {
            
            salida += `${base} x ${i+1} = ${base*(i+1)}\n`;
            consola += `${base} ${'x'.red} ${i+1} ${'='.red} ${base*(i+1)}\n`;

            
        }
        if( listar ){
            
            console.log("=========================".blue);
            console.log('     Tabla del: ', colors.magenta(base));
            console.log("=========================".blue);
            
        
            console.log( consola );
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`);
        

    }catch{
        throw err;
    }

}

module.exports = {
    crearArchivo
}