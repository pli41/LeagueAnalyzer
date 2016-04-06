var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var playerData = require("./js/PlayerDataTest");


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(
	function(req, res, next){
		console.log(`${req.method} request for '${req.url} - ${JSON.stringify(req.body)}'`);
		next();	
	}
);

app.post('/', 
	function(req, res){
		console.log(`received summonerID: ${req.body[0]}`);
		analysisJson = playerData.start(
			req.body[0], 
			playerData.getSummonerIdByName, 
			playerData.getSummonerMatchList, 
			playerData.getMatchesID, 
			playerData.GetMatchData, 
			playerData.AnalyzeMatchData,
			res
		);
		console.log("Analyzing");
		
		if(analysisJson){
			console.log("Analysis response sent");
			res.json(analysisJson);
		}
		else{
			console.log("Error analyzing");
		}
		
		
	}
);

app.use(express.static("./"));

app.use(cors());

app.listen(8080);

console.log("express running on port 8080");

module.exports = app;




























