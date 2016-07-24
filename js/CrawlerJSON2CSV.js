var fs = require('fs');
var MyJSON2CSV = require("./MyJSON2CSV.js");

var json_path = `../PlayerData/CSV/CRAWLER/`;
var out_path = `../PlayerData/CSV/CSVCRAWLER/`;
var filename = `crawler`;
var trackNum = 0;


function readFile(path) {
	var data = null;
	try{
		var data = fs.readFileSync(path).toString();
	} catch(e) {
		if (e.code !== 'ENOENT') {
			console.log(e);
		}
	}
	return data;
}

function writeFile(data, path){
	try{
		fs.writeFileSync(path, data);
	} catch(e) {
		console.log(e);
	}
}

function fsExistsSync(path) {
try{
	fs.accessSync(path,fs.F_OK);
}catch(e){
	return false;
}
	return true;
}

function CrawlerJSON2CSV(json_path, filename){	
	var jsonData = "";
	var parent_name = "main";
	while(true){
		var path = `${json_path}${filename}_${trackNum}.json`;
		while(!fsExistsSync(path)){
			
		}
		var jsonCrawler = readFile(path);
		var parent_idx = jsonCrawler.indexOf('\r\n');
		if(parent_idx != -1){
			parent_name = jsonCrawler.substr(parent_idx+2);
		}
		try{
			jsonData = JSON.parse(jsonCrawler.substr(0,parent_idx+1));	
		} catch(e) {
			console.log(e);
			console.log(`${filename}_${trackNum}.json ERROR. Skip`);
			trackNum++;
			CrawlerJSON2CSV(json_path, filename);
			return;
		}

		MyJSON2CSV.MyJSON2CSV(jsonData,out_path,parent_name,null,null,null);
		writeFile(trackNum,`${out_path}${filename}_trackNum.s`);
		console.log(`${filename}_${trackNum}.json finished`);
		//fs.unlinkSync(path)
		trackNum++;
	}
}

function start(){
	var session = readFile(`${out_path}${filename}_trackNum.s`);
	if(session != null) {
		trackNum = parseInt(session);
		console.log(`session recovered. trackNum ${trackNum}`);
	}
	CrawlerJSON2CSV(json_path, filename);
}

start();
