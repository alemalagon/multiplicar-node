const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.red(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando NO reconocido');
        break;

}

//let base = '5';

//console.log(process.argv);
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(argv.base);
//console.log('limite', argv.limite);