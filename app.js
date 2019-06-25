const argv = require('./config/yargs').argv;
const colors = require('colors');


const { createFile, listTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch(command){

	case 'list':
		listTable(argv.base, argv.limit);
	break;

	case 'create':
		createFile (argv.base, argv.limit )
		.then(file => console.log(`File created: ${ file }`))
		.catch(e => console.log(e));
	break;

	default:
	console.log('Command not found')
}

// let argv2 = process.argv;

// // console.log(argv.base);

// console.log('Limit', argv.limit);



// let parameter = argv[2];
// let base = parameter.split('=')[1]



