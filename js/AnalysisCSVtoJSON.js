var fs = require('fs');
var analysisCSV_Raw;

try{
  analysisCSV_Raw = fs.readFileSync(`leagueAnalysis.csv`).toString();
}
catch(e){
  throw e;
}

var analysisJSON_Raw;
var JSONExisted = true;

try{
  analysisJSON_Raw = fs.readFileSync(`leagueData.json`).toString();
}
catch(e){
  if(e instanceof Error){
    if (e.code === 'ENOENT') {
      JSONExisted = false;
    } else {
      throw e;
    }
  }
}

//process csv
console.log(analysisCSV_Raw);



var newJSON = {};
var columnData = [];
var columnNum;

for(var i = 0; i < 8; i++){
  analysisCSV_Raw.search('\r\n');
  var rowEnd = analysisCSV_Raw.search('\r\n');
  var row;
  if(i != 7){
    row = analysisCSV_Raw.substring(0,rowEnd);
    analysisCSV_Raw = analysisCSV_Raw.substring(rowEnd+2);
  }
  else{
    row = analysisCSV_Raw.substring(0);
    analysisCSV_Raw = '';
  }
  
  
  if(i != 0){
    var rowData = row.split(',');
    tier = rowData[0];
    newJSON[tier] = {};
    for(var j = 0; j < columnNum; j++){
     newJSON[tier][columnData[j]] = rowData[j+1]; 
    }
  }
  else{
    var rowData = row.split(',');
    columnNum = rowData.length-1;
    for(var j = 0; j < columnNum; j++){
      columnData.push(rowData[j+1]);
    }
  }
}

var newJSON_string = JSON.stringify(newJSON);
console.log(newJSON_string);
fs.writeFileSync('leagueDataa.json', newJSON_string);
