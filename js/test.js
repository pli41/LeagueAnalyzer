var fs = require('fs');
var MyJSON2CSV = require("./MyJSON2CSV.js");
var jsontorun = fs.readFileSync(`SummonerIdByName.json`).toString();
var matchJsontorun = JSON.parse(jsontorun);
MyJSON2CSV.MyJSON2CSV(matchJsontorun,'main',null,null,null)
console.log("DONE");