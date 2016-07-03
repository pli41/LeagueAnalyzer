var https = require('https');
var format = require("string-template");
var fs = require('fs');
var json2csv = require('json2csv');
var path = require('path');
var MyJSON2CSV = require("./MyJSON2CSV.js");

var summoner_name_original = "Andybendy"; //21103810
var summoner_id_original = 21103810;

var apiKey = ['089dfe65-99a9-4eaf-8b49-4d4550da6f75', "79cfb0e6-89a2-4a0b-95c0-77238c9c6afe", "eb44fe5e-8a30-4eaa-8376-69d39f8c6832", "6f0bb062-d871-4681-abc8-945b882bebcf", "880e263b-b5a2-422f-924a-46336a7b0f18", "bf3f360a-7b04-476c-8a11-ba0a66c447f2",'55c0033d-23b5-4cb6-8104-e0d5311073b2'];

var matchIntervalTime = 500;
var playerIntervalTime = 15000;
var requestCount = 0;

var getSummonerIdByName = function(name, callback){
	var summoner_name_escaped= encodeURI(name);
	var summoner_name_trimmed = name.replace(/\s+/g, '');
	var jsonData = "";
	var options_ID = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v1.4/summoner/by-name/{summoner_name_escaped}?api_key={key}", {summoner_name_escaped: summoner_name_escaped, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
	
	var request_response ='';
	var request = https.request(options_ID, function(response){
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			console.log("request ID ends");
			jsonData = JSON.parse(request_response);
			if(jsonData.status){
				console.log(format("failed to get summoner id by name from {name} because of {message}", {name: name, message: jsonData.status.message}));
			} else{
				MyJSON2CSV.MyJSON2CSV(jsonData,'SummonerIdByName',null,null,null);
				if(callback){
					var summoner_id = jsonData[summoner_name_trimmed]['id'];
					callback(summoner_id);
				}				
			}		
		});
	});
	
	request.end();
	request.on("error", function(err){
		console.log(`request ID error: ${err}`);
	});		
	return jsonData;
};

var getLeagueById = function(summonerId){
	var jsonData = "";
	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.5/league/by-summoner/{summoner_id}?api_key={key}", {summoner_id: summonerId, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
		
	var request_response ='';
	var request = https.request(options, function(response){
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			console.log("request league ends");
			jsonData = JSON.parse(request_response);
			if(jsonData.status){
				console.log(format("failed to get league data from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
			} else{
				MyJSON2CSV.MyJSON2CSV(jsonData,'leagueByID',null,null,null);			
			}
		});
	});

	request.end();
	request.on("error", function(err){
		console.log(`request ID error: ${err}`);
	});
	return jsonData;
};

var getLeagueData = function(summonerId, callback){
	var jsonData = "";
	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.5/league/by-summoner/{summoner_id}/entry?api_key={key}", {summoner_id: summonerId, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
	
	var request_response ='';
	var request = https.request(options, function(response){
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			console.log("request League(entry) ends");
			jsonData = JSON.parse(request_response);
			if(jsonData.status){
				console.log(format("failed to get league data(entry) from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
			} else{
				MyJSON2CSV.MyJSON2CSV(jsonData,'leagueByID(entry)',null,null,null);
				if(callback){				
					summonerTier = jsonData[summonerId][0].tier;
					summonerDivision = jsonData[summonerId][0].entries[0].division;
					leaguePoints = jsonData[summonerId][0].entries[0].leaguePoints;
					console.log(format("Summoner rank: {tier} {division} {leaguePoints}", {tier: summonerTier, division: summonerDivision, leaguePoints:leaguePoints}));
					callback(summonerId, null, null, GetMatchData);
				}
			}
		});
	});
	
	request.end();
	request.on("error", function(err){
		console.log(`request ID error: ${err}`);
	});
	return jsonData;
}; 
							
							
var getSummonerMatchList = function(summonerId, rankedQueues, seasons, callback){	
	var jsonData = "";
	rankedQueues = 'TEAM_BUILDER_DRAFT_RANKED_5x5';
	seasons = 'SEASON2016';
	
	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.2/matchlist/by-summoner/{summoner_id}?rankedQueues={rankedQueues}&seasons={seasons}&api_key={key}", {summoner_id: summonerId, rankedQueues: rankedQueues, seasons: seasons, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
	
	
	var request_response ='';
	var request = https.request(options, function(response){	
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			console.log("request Match List ends");
			jsonData = JSON.parse(request_response);
			var matchesNum = jsonData['totalGames'];
			if(matchesNum != 0) {
				if(jsonData.status){
				console.log(format("failed to get match list from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
				} else {
					MyJSON2CSV.MyJSON2CSV(jsonData,'SummonerMatchList',null,null,null);
					if(callback){	
						for(var i = 0; i < matchesNum; i++){
							if(callback){
								callback(jsonData['matches'][i]['matchId'], true);
							}
						}
					}
				}
			}
		});
	});
	
	request.end();
	request.on('error', function(err){
		console.log(`request matchlist error: ${err}`);
	});
	return jsonData;
};							

var GetMatchData = function(matchID, includeTimeline){
	var jsonData = "";

	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.2/match/{matchID}?includeTimeline={includeTimeline}&api_key={key}", {matchID: matchID, includeTimeline: includeTimeline, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};

	var request_response ='';	
	var request = https.request(options, function(response){
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			jsonData = JSON.parse(request_response);
			if(jsonData.status){
				console.log(`failed to get data from ${matchID} because of ${jsonData.status.status_code} ${jsonData.status.message}`);
				if(jsonData.status.status_code === 404){
					return;
				} else if(jsonData.status.status_code === 429){
					console.log("Retry in 2 seconds");
					setTimeout(function(){
						console.log(`Retry ${matchID}`);
					}, 2000);
				}
				else if(jsonData.status.status_code === 500){
					return; 
				}
			} else {
				MyJSON2CSV.MyJSON2CSV(jsonData,'MatchData',null,null,null);
			}
		});
	});

	request.end();
	request.on('error', function(err){
		console.log(`request match error: ${err}`);
	});

	return jsonData;
}
							
//getSummonerIdByName(summoner_name_original.toLowerCase(), getLeagueById);
getLeagueData(summoner_id_original, getSummonerMatchList)









