//requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.red);
    console.log(`=Tabla del ${base}==`.red);
    console.log('===================='.red);

    for (i = 1; i <= limite; i++) {
        console.log(`${i}*${base}=${i*base}`);

    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = " ";

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base*i}\n`);
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });


    })

}

module.exports = {
    crearArchivo,
    listarTabla
}