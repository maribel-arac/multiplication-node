const fs = require('fs');
const colors = require('colors');


let listTable = (base, limit = 10) => {

	console.log('================='.green);
	console.log(`multiplication table ${ base }`.red);
	console.log('================='.green);




	let data = '';

	for (let i = 1; i <= limit; i++) {
			console.log( `${ base } * ${ i } = ${ base * i}`);
		}
}



let createFile = ( base, limit = 10 ) => {
	return new Promise( (resolve, reject) => {

		if (!Number(base)) {
			reject(`The introduced value ${ base } it is not a number`);
			return;
		}


		let data = '';

		for (let i = 1; i <= limit; i++) {
			data += `${ base } * ${ i } = ${ base * i} \n`;
		}


		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
		  
		  if (err) reject (err)

		  	else 
		  		resolve( colors.green (`tabla-${ base }.txt`));
		  	
		  
		});
	});

}

module.exports = {
	createFile,
	listTable
}