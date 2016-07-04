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
var retryInterval = 500;
var jsonArray = new Array();
	
	
	
	
function getSummonerIdByName(name) {
	var summoner_name_escaped= encodeURI(name);
	var summoner_name_trimmed = name.replace(/\s+/g, '');
	var jsonData = "";
	var options_ID = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v1.4/summoner/by-name/{summoner_name_escaped}?api_key={key}", {summoner_name_escaped: summoner_name_escaped, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
	
	var request_response = '';
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
				if(jsonData.status.status_code == 400) {
					console.log(`Bad Request from getSummonerIdByName`);
				} else if(jsonData.status.status_code === 401){
					console.log(`Unauthorized from getSummonerIdByName`);
					return;
				} else if(jsonData.status.status_code === 404){
					console.log(`Match not found from getSummonerIdByName`);
					return;
				} else if(jsonData.status.status_code === 429){
					console.log("Rate limit exceeded. Retry in 2 seconds");
					setTimeout(function(){
						console.log(`Retry ${matchID} from getSummonerIdByName`);
						getSummonerIdByName(name);
					}, retryInterval);
				} else if(jsonData.status.status_code === 500){
					console.log(`Internal server error from getSummonerIdByName`);
					return; 
				} else if(jsonData.status.status_code === 503){
					console.log(`Service unavailable from getSummonerIdByName`);
					return;
				} else {
					console.log(`Invalid Status Code from getSummonerIdByName`);
					return;
				}
			} else{
				console.log("request LeagueByID ends");		
				jsonArray.push(jsonData);				
			}		
		});
	});
	
	request.end();
	request.on("error", function(err){
		console.log(`request SummonerIdByName error: ${err}`);
		getSummonerIdByName(name);
	});		
}

function getLeagueById(summonerId){
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
				if(jsonData.status.status_code == 400) {
					console.log(`Bad Request from getLeagueById`);
				} else if(jsonData.status.status_code === 401){
					console.log(`Unauthorized from getLeagueById`);
					return;
				} else if(jsonData.status.status_code === 404){
					console.log(`Match not found from getLeagueById`);
					return;
				} else if(jsonData.status.status_code === 429){
					console.log("Rate limit exceeded. Retry in 2 seconds");
					setTimeout(function(){
						console.log(`Retry ${matchID} from getLeagueById`);
						getLeagueById(summonerId);
					}, retryInterval);
				} else if(jsonData.status.status_code === 500){
					console.log(`Internal server error from getLeagueById`);
					return; 
				} else if(jsonData.status.status_code === 503){
					console.log(`Service unavailable from getLeagueById`);
					return;
				} else {
					console.log(`Invalid Status Code from getLeagueById`);
					return;
				}
			} else{
				console.log("request LeagueByID ends");
				jsonArray.push(jsonData);
			}
		});
	});

	request.end();
	request.on("error", function(err){
		console.log(`request LeagueById error: ${err}`);
		getLeagueById(summonerId);
	});
}

function getLeagueData(summonerId){
	var jsonData = "";
	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.5/league/by-summoner/{summoner_id}/entry?api_key={key}", {summoner_id: summonerId, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
	
	var request_response = '';
	var request = https.request(options, function(response){
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			jsonData = JSON.parse(request_response);
			if(jsonData.status){
				console.log(format("failed to get league data(entry) from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
				if(jsonData.status.status_code == 400) {
					console.log(`Bad Request from getLeagueData`);
				} else if(jsonData.status.status_code === 401){
					console.log(`Unauthorized from getLeagueData`);
					return;
				} else if(jsonData.status.status_code === 404){
					console.log(`Match not found from getLeagueData`);
					return;
				} else if(jsonData.status.status_code === 429){
					console.log("Rate limit exceeded. Retry in 2 seconds");
					setTimeout(function(){
						console.log(`Retry ${matchID} from getLeagueData`);
						getLeagueData(summonerId);
					}, retryInterval);
				} else if(jsonData.status.status_code === 500){
					console.log(`Internal server error from getLeagueData`);
					return; 
				} else if(jsonData.status.status_code === 503){
					console.log(`Service unavailable from getLeagueData`);
					return;
				} else {
					console.log(`Invalid Status Code from getLeagueData`);
					return;
				}
			} else {
				console.log("request League(entry) ends");
				jsonArray.push(jsonData);
			}
		});
	});
	request.end();
	request.on("error", function(err){
		console.log(`request LeagueData error: ${err}`);
		getLeagueData(summonerId);
	});
}
							
							
var getSummonerMatchList = function(summonerId, rankedQueues, seasons, callback){	
	var jsonData = "";
	rankedQueues = 'TEAM_BUILDER_DRAFT_RANKED_5x5';
	seasons = 'SEASON2016';
	
	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.2/matchlist/by-summoner/{summoner_id}?rankedQueues={rankedQueues}&seasons={seasons}&api_key={key}", {summoner_id: summonerId, rankedQueues: rankedQueues, seasons: seasons, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};
	
	
	var request_response =' ';
	var request = https.request(options, function(response){	
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			
			jsonData = JSON.parse(request_response);
			var matchesNum = jsonData['totalGames'];
			if(matchesNum != 0) {
				if(jsonData.status){
					console.log(format("failed to get match list from {summoner_id} because of {message}", {summoner_id: summonerId, message: jsonData.status.message}));
					if(jsonData.status.status_code == 400) {
						console.log(`Bad Request from getSummonerMatchList`);
					} else if(jsonData.status.status_code === 401){
						console.log(`Unauthorized from getSummonerMatchList`);
						return;
					} else if(jsonData.status.status_code === 404){
						console.log(`Match not found from getSummonerMatchList`);
						return;
					} else if(jsonData.status.status_code === 429){
						console.log("Rate limit exceeded. Retry in 2 seconds");
						setTimeout(function(){
							console.log(`Retry ${matchID} from getSummonerMatchList`);
							getSummonerMatchList(summonerId, rankedQueues, seasons, callback);
						}, retryInterval);
					} else if(jsonData.status.status_code === 500){
						console.log(`Internal server error from getSummonerMatchList`);
						return; 
					} else if(jsonData.status.status_code === 503){
						console.log(`Service unavailable from getSummonerMatchList`);
						return;
					} else {
						console.log(`Invalid Status Code from getSummonerMatchList`);
						return;
					}
				} else {
					console.log("request Match List ends");
					jsonArray.push(jsonData);
					if(callback){
						(function theLoop (i, matchesNum) {
						  setTimeout(function () {
							  console.log(jsonData);
							callback(jsonData['matches'][i]['matchId'], true);
							if (++i<matchesNum) {          // If i > 0, keep going
							  theLoop(i, matchesNum);       		   // Call the loop again, and pass it the current value of i
							}
						  }, 1000);
						})(0, matchesNum);
					}
				}
			}
		});
	});
	
	request.end();
	request.on('error', function(err){
		console.log(`request SummonerMatchList error: ${err}`);
		getSummonerMatchList(summonerId, rankedQueues, seasons, callback);
	});
}						

var GetMatchData = function(matchID, includeTimeline){
	var jsonData = "";

	var options = {
		host: "na.api.pvp.net",
		path: format("/api/lol/na/v2.2/match/{matchID}?includeTimeline={includeTimeline}&api_key={key}", {matchID: matchID, includeTimeline: includeTimeline, key: apiKey[requestCount%apiKey.length]}),
		method: "GET"
	};

	var request_response = '';	
	var request = https.request(options, function(response){
		response.on("data", function(data){
			request_response += data;
		});
		
		response.on("end", function(){
			requestCount++;
			try{
				jsonData = JSON.parse(request_response);	
			} catch(e) {
				console.log(e);
				GetMatchData(matchID, includeTimeline);
				return;
			}
			if(jsonData.status){
				console.log(`failed to get data from ${matchID} because of ${jsonData.status.status_code} ${jsonData.status.message}`);
				if(jsonData.status.status_code == 400) {
					console.log(`Bad Request from GetMatchData`);
				} else if(jsonData.status.status_code === 401){
					console.log(`Unauthorized from GetMatchData`);
					return;
				} else if(jsonData.status.status_code === 404){
					console.log(`Match not found from GetMatchData`);
					return;
				} else if(jsonData.status.status_code === 429){
					console.log("Rate limit exceeded. Retry in 2 seconds");
					setTimeout(function(){
						console.log(`Retry ${matchID} from GetMatchData`);
						GetMatchData(matchID, includeTimeline);
						return;
					}, retryInterval);
				} else if(jsonData.status.status_code === 500){
					console.log(`Internal server error from GetMatchData`);
					return; 
				} else if(jsonData.status.status_code === 503){
					console.log(`Service unavailable from GetMatchData`);
					return;
				} else {
					console.log(`Invalid Status Code from GetMatchData`);
					return;
				}
			} else {
				console.log(`request Match Data ends ${matchID}`);
				jsonArray.push(jsonData);
			}
		});
	});

	request.end();
	request.on('error', function(err){
		console.log(`request GetMatchData ${matchID} error: ${err}`);
		GetMatchData(matchID, includeTimeline);
		return;
	});
}
							
getLeagueData(summoner_id_original);
getSummonerMatchList(summoner_id_original,null,null,GetMatchData);

//console.log(requestCount);
//MyJSON2CSV.MyJSON2CSV(leagueDataResult, "leagueData", null, null, null);

// for(var i=0;i<jsonArray.length;i++){
	// console.log(jsonArray[i])
// }







