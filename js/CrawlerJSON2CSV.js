var fs = require('fs');
var MyJSON2CSV = require("./MyJSON2CSV.js");

var csvPath = `../PlayerData/CSV/`;	
var filename = `crawler`;
var trackNum = 0;
function readFile(path) {
	var data = null;
	try{
		var data = fs.readFileSync(path).toString();
	} catch(e) {
		console.log(e);
	}
	return data;
}

function fsExistsSync(path) {
try{
	fs.accessSync(path,fs.F_OK);
}catch(e){
	return false;
}
	return true;
}

function CrawlerJSON2CSV(csvPath, filename){
	var jsonData = "";
	var parent_name = "main";
	while(true){
		var path = `${csvPath}${filename}_${trackNum}.json`;
		while(!fsExistsSync(path)){
			
		}
		console.log(`${filename}_${trackNum}.json read`);
		var jsonCrawler = readFile(path);
		try{
			jsonData = JSON.parse(jsonCrawler);	
		} catch(e) {
			console.log(e);
			console.log(`${filename}_${trackNum}.json ERROR. Skip`);
			trackNum++;
			CrawlerJSON2CSV(csvPath, filename);
			return;
		}
		var parent_idx = jsonData.indexOf('\r\n');
		if(parent_idx != -1){
			parent_name = jsonData.substr(parent_idx+2);
		}
		MyJSON2CSV.MyJSON2CSV(jsonData,path,parent_name,null,null,null);
		fs.unlinkSync(path)
		trackNum++;
	}
}
CrawlerJSON2CSV(csvPath, filename);