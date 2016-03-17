var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
//read from file
var path = `../PlayerData/CSV/PLATINUM/I/AnalyzedData(PLATINUMI).csv`;

/*
try{
	fs.createReadStream(path).pipe(converter);
	console.log('11');
}
catch(e){	
	if(e instanceof Error){
		if (e.code === 'ENOENT') {
			console.log('File not found! Create New File');
			
		} else {
			throw e;
		}
	}
}
*/
var data = '';
var fileExisted = true;
try{
	data = fs.readFileSync(path).toString();
}
catch(e){
	if(e instanceof Error){
		if (e.code === 'ENOENT') {
			console.log('File not found! Create New File');
			fileExisted = false;
			
		} else {
			throw e;
		}
	}
}
console.log(data);
console.log('\n');
data += `\n"abc1",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1`;

console.log(fileExisted);
console.log(data);

fs.writeFileSync(`test/abc.csv`, data);


