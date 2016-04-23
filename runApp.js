var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var http = require('http');

var playerData = require("./js/PlayerDataTest");

var app = express();

app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
app.use(
	function(req, res, next){
		console.log(`${req.method} request for '${req.url} - ${JSON.stringify(req.body)}'`);
		next();	
	}
);
*/
app.post('/', 
	function(req, res){
		//console.log(`received summonerID: ${req.body[0]}`);
		analysisJson = playerData.start(
			req.body[0], 
			playerData.getSummonerIdByName,
			playerData.getSummonerLeagueData,
			playerData.getSummonerMatchList, 
			playerData.getMatchesID, 
			playerData.GetMatchData, 
			playerData.AnalyzeMatchData,
			res
		);
		
/*		
		404 Username NOT FOUND
		406 Not Acceptable user(not enough rank games)
		429 API Key not available
		504 Riot API not available
*/
		
		
	}
);

app.use(express.static("./"));

app.use(cors());

//app.listen(8080);

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'), app.get('port'));
    //server();
});

//console.log("express running on port 8080");

module.exports = app;




























