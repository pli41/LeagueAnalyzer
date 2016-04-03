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
		
		playerData.start(
			req.body[0], 
			playerData.getSummonerIdByName, 
			playerData.getSummonerMatchList, 
			playerData.getMatchesID, 
			playerData.GetMatchData, 
			playerData.AnalyzeMatchData
		);
		
		
	}
);

app.use(express.static("./"));

app.use(cors());

app.listen(3000);

console.log("express running on port 3000");

module.exports = app;




























